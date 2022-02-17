import React, { useContext } from 'react';
import { MediaContext } from '../../../store/contexts/MediaContext';
import UserVerifiedIcon from '../../../UI/icons/UserVerifiedIcon';
import { AuthorInfoContainer, AuthorLink, AuthorName, AuthorNickName } from './AuthorInfo.styled';
import { IAuthorMeta } from '../../../json/feed';

type AuthorInfoProps = {
  authorLink: string;
  setIsHover: (isHoverProp: boolean) => void;
  isHover: boolean;
  authorMeta: IAuthorMeta;
};

const AuthorInfo = ({
  authorLink,
  isHover,
  setIsHover = () => {},
  authorMeta,
}: AuthorInfoProps) => {
  const { isDesktopOrTablet, isMobile } = useContext(MediaContext);

  return (
    <AuthorInfoContainer data-testid="authorInfo" mobile={isMobile}>
      <AuthorLink
        data-testid="authorLink"
        to={authorLink}
        onMouseEnter={(): void => setIsHover(true)}
        onMouseLeave={(): void => setIsHover(false)}
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
