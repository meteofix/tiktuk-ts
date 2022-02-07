import React, { useContext } from 'react';
import { MediaContext } from '../../../store/contexts/MediaContext';
import UserVerifiedIcon from '../../../UI/icons/UserVerifiedIcon';
import FollowButton from '../../../UI/buttons/FollowButton';
import { Title, UserSubTitle, UserTitleContainer } from './UserTitle.styled';

const UserTitle = ({ uniqueId, verified, nickname }) => {
  const { isDesktopOrTablet, isMobile } = useContext(MediaContext);
  return (
    <UserTitleContainer data-testid="userTitleContainer" mobile={isMobile}>
      <Title data-testid="userTitle" mobile={isMobile}>
        {isMobile && '@'}
        {uniqueId}
        {verified ? <UserVerifiedIcon /> : ''}
      </Title>
      {isDesktopOrTablet && (
        <>
          <UserSubTitle>{nickname}</UserSubTitle>
          <FollowButton />
        </>
      )}
    </UserTitleContainer>
  );
};

export default UserTitle;
