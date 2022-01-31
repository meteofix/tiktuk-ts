import React, { useContext } from 'react';
import classes from './VideoMeta.module.css';
import '../../../utils/parseHashtags.css';
import { ParseHashtags } from '../../../utils/parseHashtags';
import { MediaContext } from '../../../store/contexts/MediaContext';

const VideoMeta = ({ text }) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <div
      data-testid="videoMeta"
      className={isMobile ? `${classes.videoMeta} ${classes.videoMetaMobile}` : classes.videoMeta}
    >
      <div dangerouslySetInnerHTML={{ __html: ParseHashtags(text) }} />
    </div>
  );
};

export default VideoMeta;
