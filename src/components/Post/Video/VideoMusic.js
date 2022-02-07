import React, { useContext } from 'react';
import MusicIcon from '../../../UI/icons/MusicIcon';
import { MediaContext } from '../../../store/contexts/MediaContext';
import { MusicInfo, MusicInfoText, PlayInfo } from './VideoMusic.styled';

const VideoMusic = ({ musicMeta }) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <MusicInfo data-testid="musicInfo" mobile={isMobile}>
      <MusicIcon />
      <PlayInfo>
        <MusicInfoText data-testid="musicInfoText" mobile={isMobile}>
          {`${musicMeta.musicName} - ${musicMeta.musicAuthor}`}
        </MusicInfoText>
      </PlayInfo>
    </MusicInfo>
  );
};

export default VideoMusic;
