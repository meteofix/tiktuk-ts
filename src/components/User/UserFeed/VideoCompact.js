import React, { useContext, useState } from 'react';
import classes from './VideoCompact.module.css_';
import CountRound from '../../../utils/countRound';
import playIcon from '../../../UI/icons/playIcon.svg';
import Loader from '../../../services/Loader/Loader';
import { MediaContext } from '../../../store/contexts/MediaContext';
import tiktok from '../../../UI/icons/tiktok.png';
import VideoPlayer from '../../../services/VideoPlayer';
import videoUrl from '../../../UI/fakeMedia/videos/khaby_lame.mp4';
import styled, { css } from 'styled-components';

const VideoFeedItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  float: left;
  border-right: 1px solid rgb(245, 245, 245);
  border-bottom: 1px solid rgb(245, 245, 245);
  width: 33%;
  min-height: 22vw;
  ${(props) =>
    props.mobile &&
    css`
      min-height: 45vw;
    `}
`;

const VideoCardMask = styled.div`
  position: absolute;
  width: 100%;
  bottom: 3px;
  height: 50px;
  background: linear-gradient(rgba(22, 24, 35, 0) 2.92%, rgba(22, 24, 35, 0.5) 98.99%);
  padding: 13px 10px 17px;
  box-sizing: border-box;
`;

const VideoPlayerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledVideoPlayer = styled(VideoPlayer)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BufferedLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const VideoCount = styled.strong`
  font-weight: 600;
  vertical-align: middle;
  color: rgb(255, 255, 255);
  padding-left: 4px;
`;

const PlayIcon = styled.img`
  transform: translate(0px, 6px);
`;

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
      // className={isMobile ? `${classes.videoFeedItem} ${classes.videoFeedItemMobile}` : classes.videoFeedItem}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => (isHover ? setIsHover(false) : setIsHover(true))}
    >
      {noImage ? (
        <VideoPlayerImg
          alt="Video not found"
          // className={classes.videoPlayer}
          src={tiktok}
        />
      ) : noVideo ? (
        <VideoPlayerImg
          alt="Video cover"
          // className={classes.videoPlayer}
          onError={() => setNoImage(true)}
          src={isHover ? item.video.dynamicCover : item.video.cover}
        />
      ) : (
        <StyledVideoPlayer
          playing={isHover}
          // className={classes.videoPlayer}
          url={videoUrl} // url={item.video.downloadAddr}
          setIsBuffered={setIsBuffered}
          onError={setNoVideo}
        />
      )}

      {isBuffered && (
        <BufferedLoader
        // className={classes.buffered}
        >
          <Loader small />
        </BufferedLoader>
      )}
      <VideoCardMask
      // className={classes.videoCardMask}
      >
        <PlayIcon alt="alt" title="title" src={playIcon} />
        <VideoCount
        // className={classes.videoCount}
        >
          {CountRound(item.stats.playCount)}
        </VideoCount>
      </VideoCardMask>
    </VideoFeedItem>
  );
};

export default VideoCompact;
