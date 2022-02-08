import React, { useContext, useEffect, useState } from 'react';
import { PlayerContext } from '../../../store/contexts/PlayerProvider';
import { setMuted, setPlayingId } from '../../../store/reducers/playerReducer';
import useVisibility from '../../../hooks/useVisibility';
import PlayPauseButton from '../../../UI/buttons/PlayPauseButton';
import VolumeButton from '../../../UI/buttons/VolumeButton';
import CounterItem from '../../../services/CounterBar/CounterItem';
import Loader from '../../../services/Loader/Loader';
import { MediaContext } from '../../../store/contexts/MediaContext';
import AuthorAvatar from '../Author/AuthorAvatar';
import tiktok from '../../../UI/icons/tiktok.png';
import videoUrl from '../../../UI/fakeMedia/videos/kikakiim.mp4';
import avatar from '../../../UI/fakeMedia/images/avatar_kikakiim.jpeg';
import {
  BufferedLoader,
  CounterBar,
  CounterBarAvatar,
  ErrorMessage,
  LayerMask,
  PlayBar,
  StyledVideoPlayer,
  VideoFrame,
  VideoPlayerImg,
  VideoWrapper,
} from './VideoContainer.styled';
import WindowFocusHandler from '../../../services/windowFocusHandler';

const VideoContainer = ({ post, id }) => {
  const { isMobile } = useContext(MediaContext);
  const [isVisible, currentElement] = useVisibility(200);
  const [isVideoHover, setIsVideoHover] = useState(!!isMobile);
  const [noVideo, setNoVideo] = useState(false);
  const [noImage, setNoImage] = useState(false);
  const [isBuffered, setIsBuffered] = useState(false);
  const { isMuted, playingId, dispatch } = useContext(PlayerContext);
  const authorLink = `@${post.authorMeta.name}`;

  const handlePlayPause = () => {
    if (playingId === id) dispatch(setPlayingId(''));
    else dispatch(setPlayingId(id));
  };
  const handleMuted = () => {
    if (isMuted) dispatch(setMuted(false));
    else dispatch(setMuted(true));
  };
  const onFocus = () => {
    if (isVisible) dispatch(setPlayingId(id));
  };
  const onBlur = () => {
    dispatch(setPlayingId(''));
  };

  useEffect(() => {
    if (isVisible) dispatch(setPlayingId(id));
  }, [isVisible]);
  WindowFocusHandler({ onFocus, onBlur });
  return (
    <VideoWrapper data-testid="videoWrapper" mobile={isMobile} ref={currentElement}>
      <VideoFrame
        data-testid="videoEvents"
        onMouseEnter={() => setIsVideoHover(true)}
        onMouseLeave={() => setIsVideoHover(false)}
      >
        <VideoFrame data-testid="videoFrame" onClick={handlePlayPause}>
          {noImage ? (
            <VideoPlayerImg alt="Video cover" src={tiktok} />
          ) : noVideo ? (
            <VideoPlayerImg
              alt="cover"
              onError={() => setNoImage(true)}
              src={isVideoHover ? post.covers.dynamic : post.covers.default}
            />
          ) : (
            <StyledVideoPlayer
              playing={playingId === id}
              url={videoUrl} // url={post.videoUrl}
              setIsBuffered={setIsBuffered}
              onError={setNoVideo}
              isMuted={isMuted}
            />
          )}
        </VideoFrame>
        {isBuffered && (
          <BufferedLoader>
            <Loader small />
          </BufferedLoader>
        )}
        <LayerMask />
        <ErrorMessage display={noVideo ? 'flex' : 'none'}>Video downloading error</ErrorMessage>
        <PlayBar data-testid="playBar" mobile={isMobile}>
          <PlayPauseButton id={id} playingId={playingId} handlePlayPause={handlePlayPause} isHover={isVideoHover} />
          <VolumeButton handleMuted={handleMuted} isMuted={isMuted} isHover={isVideoHover} />
        </PlayBar>
      </VideoFrame>
      <CounterBar data-testid="counterBar" mobile={isMobile}>
        {isMobile && (
          <CounterBarAvatar>
            <AuthorAvatar
              avatar={avatar} // avatar={post.authorMeta.avatar}
              authorLink={authorLink}
            />
          </CounterBarAvatar>
        )}
        <CounterItem type="like" count={post.diggCount} />
        <CounterItem type="comment" count={post.commentCount} />
        <CounterItem type="share" count={post.shareCount} />
      </CounterBar>
    </VideoWrapper>
  );
};

export default VideoContainer;
