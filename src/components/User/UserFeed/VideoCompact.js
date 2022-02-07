import React, { useContext, useState } from 'react';
import CountRound from '../../../utils/countRound';
import playIcon from '../../../UI/icons/playIcon.svg';
import Loader from '../../../services/Loader/Loader';
import { MediaContext } from '../../../store/contexts/MediaContext';
import tiktok from '../../../UI/icons/tiktok.png';
import videoUrl from '../../../UI/fakeMedia/videos/khaby_lame.mp4';
import {
  BufferedLoader,
  PlayIcon,
  StyledVideoPlayer,
  VideoCardMask,
  VideoCount,
  VideoFeedItem,
  VideoPlayerImg,
} from './VideoCompact.styled';

const VideoCompact = ({ item }) => {
  const { isMobile } = useContext(MediaContext);
  const [noVideo, setNoVideo] = useState(false);
  const [noImage, setNoImage] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isBuffered, setIsBuffered] = useState(false);

  return (
    <VideoFeedItem
      data-testid="videoFeedItem"
      mobile={isMobile}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => (isHover ? setIsHover(false) : setIsHover(true))}
    >
      {noImage ? (
        <VideoPlayerImg alt="Video not found" src={tiktok} />
      ) : noVideo ? (
        <VideoPlayerImg
          alt="Video cover"
          onError={() => setNoImage(true)}
          src={isHover ? item.video.dynamicCover : item.video.cover}
        />
      ) : (
        <StyledVideoPlayer
          playing={isHover}
          url={videoUrl} // url={item.video.downloadAddr}
          setIsBuffered={setIsBuffered}
          onError={setNoVideo}
        />
      )}

      {isBuffered && (
        <BufferedLoader>
          <Loader small />
        </BufferedLoader>
      )}
      <VideoCardMask>
        <PlayIcon alt="alt" title="title" src={playIcon} />
        <VideoCount>{CountRound(item.stats.playCount)}</VideoCount>
      </VideoCardMask>
    </VideoFeedItem>
  );
};

export default VideoCompact;
