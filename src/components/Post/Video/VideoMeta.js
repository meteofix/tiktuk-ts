import React, { useContext } from 'react';
import '../../../utils/parseHashtags.css';
import { ParseHashtags } from '../../../utils/parseHashtags';
import { MediaContext } from '../../../store/contexts/MediaContext';
import { VideoMetaContainer } from './VideoMeta.styled';

const VideoMeta = ({ text }) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <VideoMetaContainer data-testid="videoMeta" mobile={isMobile}>
      <div dangerouslySetInnerHTML={{ __html: ParseHashtags(text) }} />
    </VideoMetaContainer>
  );
};

export default VideoMeta;
