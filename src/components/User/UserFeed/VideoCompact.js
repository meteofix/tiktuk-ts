import React, { useContext, useState } from 'react';
import classes from './VideoCompact.module.css';
import CountRound from '../../../utils/countRound';
import playIcon from '../../../UI/icons/playIcon.svg';
import Loader from '../../../services/Loader/Loader';
import { MediaContext } from '../../../store/contexts/MediaContext';
import tiktok from '../../../UI/icons/tiktok.png';
import VideoPlayer from '../../../services/VideoPlayer';

const VideoCompact = ({ item }) => {
  const { isMobile } = useContext(MediaContext);
  const [noVideo, setNoVideo] = useState(false);
  const [noImage, setNoImage] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isBuffered, setIsBuffered] = useState(false);

  return (
    <div
      data-testid="videoFeedItem"
      className={isMobile ? `${classes.videoFeedItem} ${classes.videoFeedItemMobile}` : classes.videoFeedItem}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => (isHover ? setIsHover(false) : setIsHover(true))}
    >
      {noImage ? (
        <img alt="Video not found" className={classes.videoPlayer} src={tiktok} />
      ) : noVideo ? (
        <img
          alt="Video cover"
          className={classes.videoPlayer}
          onError={() => setNoImage(true)}
          src={isHover ? item.video.dynamicCover : item.video.cover}
        />
      ) : (
        <VideoPlayer
          playing={isHover}
          className={classes.videoPlayer}
          url={item.video.downloadAddr}
          setIsBuffered={setIsBuffered}
          onError={setNoVideo}
        />
      )}

      {isBuffered && (
        <div className={classes.buffered}>
          <Loader small />
        </div>
      )}
      <div className={classes.videoCardMask}>
        <img alt="alt" title="title" src={playIcon} />
        <strong className={classes.videoCount}>{CountRound(item.stats.playCount)}</strong>
      </div>
    </div>
  );
};

export default VideoCompact;
