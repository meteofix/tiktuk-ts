import React, { useContext, useState } from 'react';
import classes from './UserMain.module.css';
import LikesLockedPage from './UserFeed/LikesLockedPage';
import LockedIcon from '../../UI/icons/LockedIcon';
import userFeed from '../../json/user-feed.json';
import { MediaContext } from '../../store/contexts/MediaContext';
import LikedIcon from '../../UI/icons/LikedIcon';
import VideosIcon from '../../UI/icons/VideosIcon';
import UserFeedPostsMapper from '../../services/UserFeedPostsMapper';

const UserMain = ({ user }) => {
  const { isDesktopOrTablet, isMobile } = useContext(MediaContext);
  const [activeTab, setActiveTab] = useState(true);
  const [hoverTab, setHoverTab] = useState(true);

  return (
    <div
      data-testid="userMain"
      className={isMobile ? `${classes.userMain} ${classes.userMainMobile}` : classes.userMain}
    >
      <div
        data-testid="videoFeedTab"
        className={isMobile ? `${classes.videoFeedTab} ${classes.videoFeedTabMobile}` : classes.videoFeedTab}
      >
        <p
          className={activeTab ? classes.active : ''}
          onClick={() => setActiveTab(true)}
          onMouseEnter={() => setHoverTab(true)}
          onMouseLeave={() => setHoverTab(activeTab)}
        >
          {isDesktopOrTablet && <span>Videos</span>}
          {isMobile && <VideosIcon />}
        </p>
        <p
          className={!activeTab ? classes.active : ''}
          onClick={() => setActiveTab(false)}
          onMouseEnter={() => setHoverTab(false)}
          onMouseLeave={() => setHoverTab(activeTab)}
        >
          {isDesktopOrTablet && <LockedIcon />}
          {isDesktopOrTablet && <span>Liked</span>}
          {isMobile && <LikedIcon />}
        </p>
        {isDesktopOrTablet && (
          <div
            style={hoverTab ? { transform: 'translateX(0px)' } : { transform: 'translateX(297px)' }}
            data-testid="bottomLine"
            className={isMobile ? `${classes.bottomLine} ${classes.bottomLineMobile}` : classes.bottomLine}
          />
        )}
      </div>
      {activeTab ? (
        <div className={classes.videoFeed}>
          <UserFeedPostsMapper posts={userFeed.itemList} />
        </div>
      ) : (
        <LikesLockedPage user={user} />
      )}
    </div>
  );
};

export default UserMain;
