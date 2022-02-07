import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserHeader from '../components/User/UserHeader';
import UserMain from '../components/User/UserMain';
import Loader from '../services/Loader/Loader';
import { MediaContext } from '../store/contexts/MediaContext';
import userinfo from '../json/userInfo.json';
import userfeed from '../json/user-feed.json';
import NavBar from '../components/NavBar';
import { UserInfoInHead, UserLayout, UserLayoutContent } from './UserProfile.styled';

const UserProfile = () => {
  const { isMobile } = useContext(MediaContext);
  const location = useLocation();
  const user = location.pathname.slice(2);
  const [userInfo, setUserInfo] = React.useState([]);
  const [userFeed, setUserFeed] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    setUserInfo(userinfo);
    setUserFeed(userfeed);
    setIsLoading(false);
  }, []);

  /** For broken UserFeed and UserInfo API start */
  // const [isInfoLoading, setIsInfoLoading] = React.useState(false);
  // useEffect(() => {
  //   setIsInfoLoading(true);
  //   requestData({
  //     url: USER_INFO_URL,
  //     name: user,
  //     responseData: userInfo,
  //     setResponseData: setUserInfo,
  //     setIsLoading: setIsInfoLoading,
  //   });
  // }, [setUserInfo]);

  // const [isFeedLoading, setIsFeedLoading] = useState(false)
  // useEffect(() => {
  //     setIsInfoLoading(true);
  //     requestData({
  //         url: USER_FEED_URL,
  //         name: user,
  //         responseData: userFeed,
  //         setResponseData: setUserFeed,
  //         setIsLoading: setIsFeedLoading
  //     });
  // }, [setUserFeed])
  /** For broken UserFeed and UserInfo API end */

  return (
    <UserLayout data-testid="userLayout" mobile={isMobile}>
      <UserLayoutContent data-testid="userLayoutContent" mobile={isMobile}>
        {isLoading ? (
          <Loader />
        ) : !userInfo || userInfo.length === 0 || !userInfo.user.uniqueId || !userFeed || userFeed.length === 0 ? (
          <div>No data</div>
        ) : (
          <>
            <NavBar>
              {isMobile && (
                <UserInfoInHead>
                  <p>
                    {userInfo.user.nickname} | {userInfo.user.uniqueId}
                  </p>
                </UserInfoInHead>
              )}
            </NavBar>
            <UserHeader userInfo={userInfo} />
            <UserMain user={user} userFeed={userFeed} />
          </>
        )}
      </UserLayoutContent>
    </UserLayout>
  );
};

export default UserProfile;
