import React, { useContext } from 'react';
import {MediaContext} from '../../store/contexts/MediaContext';
import removeProtocolPrefixFromUrl from '../../utils/removeProtocolPrefixFromUrl';
import Avatar from './UserInfo/Avatar';
import UserTitle from './UserInfo/UserTitle';
import Counter from './UserInfo/Counter';
import FollowButton from '../../UI/buttons/FollowButton';
import avatar from '../../UI/fakeMedia/images/avatar_khaby_lame.jpeg';
import linkIcon from '../../UI/icons/linkIcon.svg';
import {
  CountInfos,
  LinkIcon,
  UserDesc,
  UserHeaderContainer,
  UserInfo,
  UserLink,
  UserLinkWrapper,
} from './UserHeader.styled';
import {IUserInfo} from "../../json/userInfo";

type UserHeaderProps = {
    userInfo: IUserInfo
}

const UserHeader = ({ userInfo }:UserHeaderProps) => {
  const { isMobile } = useContext(MediaContext);
  const { user, stats } = userInfo;
  const { link } = user.bioLink;

  return (
    <UserHeaderContainer data-testid="userHeader" mobile={isMobile}>
      <UserInfo data-testid="userInfo" mobile={isMobile}>
        <Avatar
          nickname={user.nickname}
          avatar={avatar} // avatar={user.avatarMedium}
        />
        <UserTitle nickname={user.nickname} verified={user.verified} uniqueId={user.uniqueId} />
      </UserInfo>
      <CountInfos data-testid="countInfos" mobile={isMobile}>
        <Counter count={stats.followingCount} title="Following" />
        <Counter count={stats.followerCount} title="Followers" />
        <Counter count={stats.heartCount} title="Likes" />
      </CountInfos>
      {isMobile && <FollowButton />}
      <UserDesc data-testid="userDesc" mobile={isMobile}>
        {user.signature}
      </UserDesc>
      <UserLinkWrapper style={link ? {} : { display: 'none' }} data-testid="userLink" mobile={isMobile}>
        <LinkIcon logo={linkIcon} />
        <UserLink target="blank" rel="nofollow noreferrer noopener" href={link}>
          {removeProtocolPrefixFromUrl(link)}
        </UserLink>
      </UserLinkWrapper>
    </UserHeaderContainer>
  );
};

export default UserHeader;
