import React from 'react';
import ReactPlayer from 'react-player/lazy';

const VideoPlayer = ({ playing, className, url, setIsBuffered, onError, isMuted = true }) => (
  <ReactPlayer
    playing={playing}
    className={className}
    url={url}
    onBuffer={() => setIsBuffered(true)}
    onBufferEnd={() => setIsBuffered(false)}
    loop
    onError={() => onError(true)}
    muted={isMuted}
    width="100%"
    height="100%"
  />
);

export default VideoPlayer;
