import React, { useContext } from 'react';
import MusicIcon from '../../../UI/icons/MusicIcon';
import { MediaContext } from '../../../store/contexts/MediaContext';
import { MusicInfo, MusicInfoText, PlayInfo } from './VideoMusic.styled';
import { IMusicMeta } from '../../../json/feed';

type VideoMusicProps = {
  musicMeta: IMusicMeta;
};

const VideoMusic = ({ musicMeta }: VideoMusicProps) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <MusicInfo data-testid="musicInfo">
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
