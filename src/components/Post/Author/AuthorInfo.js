import React, { useContext } from 'react';
import { MediaContext } from '../../../store/contexts/MediaContext';
import UserVerifiedIcon from '../../../UI/icons/UserVerifiedIcon';
import { AuthorInfoContainer, AuthorLink, AuthorName, AuthorNickName } from './AuthorInfo.styled';

const AuthorInfo = ({ authorLink, isHover, setIsHover, authorMeta }) => {
  const { isDesktopOrTablet, isMobile } = useContext(MediaContext);

  return (
    <AuthorInfoContainer data-testid="authorInfo" mobile={isMobile}>
      <AuthorLink
        data-testid="authorLink"
        to={authorLink}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <AuthorName mobile={isMobile} underline={isHover}>
          {isMobile && '@'}
          {authorMeta.name}
          {authorMeta.verified ? <UserVerifiedIcon small /> : ''}
        </AuthorName>
        {isDesktopOrTablet && <AuthorNickName>{authorMeta.nickName}</AuthorNickName>}
      </AuthorLink>
    </AuthorInfoContainer>
  );
};

export default AuthorInfo;
