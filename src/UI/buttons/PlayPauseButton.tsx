import React, { MouseEventHandler, useContext } from 'react';
import { MediaContext } from '../../store/contexts/MediaContext';
import playIcon from '../icons/playIcon.svg';
import pauseIcon from '../icons/pauseIcon.svg';
import { PlayPauseContainer } from './PlayPauseButton.styled';

type PlayPauseButtonProps = {
  id: number;
  playingId: number;
  handlePlayPause: MouseEventHandler;
  isHover: boolean;
};

const PlayPauseButton = ({ playingId, id, handlePlayPause, isHover }: PlayPauseButtonProps) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <PlayPauseContainer
      mobile={isMobile}
      style={isHover ? { display: 'block' } : { display: 'none' }}
      onClick={handlePlayPause}
    >
      {playingId === id ? <img alt="pauseIcon" src={pauseIcon} /> : <img alt="playIcon" src={playIcon} />}
    </PlayPauseContainer>
  );
};

export default PlayPauseButton;
