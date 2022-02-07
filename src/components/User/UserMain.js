import React, { useContext, useState } from 'react';
import { LikesLockedPage } from '@meteofix/tiktuk-component-library';

import LockedIcon from '../../UI/icons/LockedIcon';
import { MediaContext } from '../../store/contexts/MediaContext';
import LikedIcon from '../../UI/icons/LikedIcon';
import VideosIcon from '../../UI/icons/VideosIcon';
import UserFeedPostsMapper from '../../services/UserFeedPostsMapper';
import { BottomLine, TabLiked, TabVideos, UserMainContainer, VideoFeed, VideoFeedTab } from './UserMain.styled';
import lockIcon from '../../UI/icons/lockIcon.svg';

const UserMain = ({ user, userFeed }) => {
  const { isDesktopOrTablet, isMobile } = useContext(MediaContext);
  const [activeTab, setActiveTab] = useState(true);
  const [hoverTab, setHoverTab] = useState(true);

  return (
    <UserMainContainer data-testid="userMain" mobile={isMobile}>
      <VideoFeedTab data-testid="videoFeedTab" mobile={isMobile}>
        <TabVideos
          active={activeTab}
          onClick={() => setActiveTab(true)}
          onMouseEnter={() => setHoverTab(true)}
          onMouseLeave={() => setHoverTab(activeTab)}
        >
          {isDesktopOrTablet && <span>Videos</span>}
          {isMobile && <VideosIcon />}
        </TabVideos>
        <TabLiked
          active={activeTab}
          onClick={() => setActiveTab(false)}
          onMouseEnter={() => setHoverTab(false)}
          onMouseLeave={() => setHoverTab(activeTab)}
        >
          {isDesktopOrTablet && <LockedIcon />}
          {isDesktopOrTablet && <span>Liked</span>}
          {isMobile && <LikedIcon />}
        </TabLiked>
        {isDesktopOrTablet && (
          <BottomLine
            style={hoverTab ? { transform: 'translateX(0px)' } : { transform: 'translateX(297px)' }}
            data-testid="bottomLine"
            mobile={isMobile}
          />
        )}
      </VideoFeedTab>
      {activeTab ? (
        <VideoFeed>
          <UserFeedPostsMapper posts={userFeed.itemList} />
        </VideoFeed>
      ) : (
        <LikesLockedPage lockIcon={lockIcon} user={user} />
      )}
    </UserMainContainer>
  );
};

export default UserMain;
