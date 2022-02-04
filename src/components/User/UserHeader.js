import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './UserHeader.module.css';
import Avatar from './UserInfo/Avatar';
import UserTitleContainer from './UserInfo/UserTitleContainer';
import Counter from './UserInfo/Counter';
import { MediaContext } from '../../store/contexts/MediaContext';
import FollowButton from '../../UI/buttons/FollowButton';
import fl from './UserInfo/UserTitleContainer.module.css';
import LeftNav from '../../UI/icons/leftNav';
import removeProtocolPrefixFromUrl from '../../utils/removeProtocolPrefixFromUrl';
import avatar from '../../UI/fakeMedia/images/avatar_khaby_lame.jpeg';

const UserHeader = ({ userInfo }) => {
  const { isMobile } = useContext(MediaContext);
  const navigate = useNavigate();
  const { user, stats } = userInfo;
  const { link } = user.bioLink;

  return (
    <div
      data-testid="userHeader"
      className={isMobile ? `${classes.userHeader} ${classes.userHeaderMobile}` : classes.userHeader}
    >
      <div className={classes.userHead}>
        <div className={classes.userHeadLeft} onClick={() => navigate(-1)}>
          <LeftNav />
        </div>
        {isMobile && (
          <div className={classes.userHeadCenter}>
            <p>
              {user.nickname} | {user.uniqueId}
            </p>
          </div>
        )}
      </div>
      <div
        data-testid="userInfo"
        className={isMobile ? `${classes.userInfo} ${classes.userInfoMobile}` : classes.userInfo}
      >
        <Avatar
          nickname={user.nickname}
          avatar={avatar} // avatar={user.avatarMedium}
        />
        <UserTitleContainer nickname={user.nickname} verified={user.verified} uniqueId={user.uniqueId} />
      </div>
      <div
        data-testid="countInfos"
        className={isMobile ? `${classes.countInfos} ${classes.countInfosMobile}` : classes.countInfos}
      >
        <Counter count={stats.followingCount} title="Following" />
        <Counter count={stats.followerCount} title="Followers" />
        <Counter count={stats.heartCount} title="Likes" />
      </div>
      {isMobile && (
        <div
          data-testid="userFollowContainer"
          className={isMobile ? `${fl.userFollowContainer} ${fl.userFollowContainerMobile}` : fl.userFollowContainer}
        >
          <FollowButton additionalClass={isMobile ? `${fl.followButton} ${fl.followButtonMobile}` : fl.followButton} />
        </div>
      )}
      {/* <div className={isMobile? classes.userDesc + ' ' + classes.userDescMobile : classes.userDesc} dangerouslySetInnerHTML={{ __html: ParseHashtags(userInfo.user.signature) }}></div> */}
      <div
        data-testid="userDesc"
        className={isMobile ? `${classes.userDesc} ${classes.userDescMobile}` : classes.userDesc}
      >
        {user.signature}
      </div>
      <div
        style={link ? {} : { display: 'none' }}
        data-testid="userLink"
        className={isMobile ? `${classes.userLink} ${classes.userLinkMobile}` : classes.userLink}
      >
        <a target="blank" rel="nofollow noreferrer noopener" href={link}>
          {removeProtocolPrefixFromUrl(link)}
        </a>
      </div>
    </div>
  );
};

export default UserHeader;
