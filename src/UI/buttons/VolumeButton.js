import React, { useContext } from 'react';
import { MediaContext } from '../../store/contexts/MediaContext';
import mutedIcon from '../icons/mutedIcon.svg';
import unMutedIcon from '../icons/unMutedIcon.svg';
import { UnMutedImage, VolumeButtonContainer } from './VolumeButton.styled';

const VolumeButton = ({ isMuted, handleMuted, isHover }) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <VolumeButtonContainer mobile={isMobile} onClick={handleMuted}>
      {isMuted ? (
        <img alt="mutedIcon" src={mutedIcon} />
      ) : (
        <UnMutedImage hover={isHover} alt="unMutedIcon" src={unMutedIcon} />
      )}
    </VolumeButtonContainer>
  );
};

export default VolumeButton;
