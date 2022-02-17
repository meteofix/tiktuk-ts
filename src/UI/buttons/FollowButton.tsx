import React, { useContext } from 'react';
import { MediaContext } from '../../store/contexts/MediaContext';
import { Button, FollowContainer } from './FollowButton.styled';

type FollowButtonProps = {
  small?: boolean;
};

const FollowButton = ({ small = false }: FollowButtonProps) => {
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
