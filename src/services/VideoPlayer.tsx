import React from 'react';
import ReactPlayer from 'react-player/lazy';

type VideoPlayerProps = {
    playing: boolean,
    url: string,
    setIsBuffered: (buffered: boolean) => void,
    onError: (error: boolean) => void,
    isMuted?: boolean
}

const VideoPlayer = ({ playing, url, setIsBuffered, onError, isMuted = true }:VideoPlayerProps) => (
  <ReactPlayer
    playing={playing}
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
