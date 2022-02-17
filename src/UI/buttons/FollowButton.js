import React, { useContext } from 'react';
import { MediaContext } from '../../store/contexts/MediaContext';
import { Button, FollowContainer } from './FollowButton.styled';

const FollowButton = ({ small = false }) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <FollowContainer small={small} mobile={isMobile}>
      <Button type="button" small={small} mobile={isMobile}>
        Follow
      </Button>
    </FollowContainer>
  );
};

export default FollowButton;
