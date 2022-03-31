import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import UserHeader from '../components/User/UserHeader';
import UserMain from '../components/User/UserMain';
import Loader from '../services/Loader/Loader';
import { MediaContext } from '../store/contexts/MediaContext';
import userinfo from '../json/userInfo.json';
import userfeed from '../json/userFeed.json';
import NavBar from '../components/NavBar';
import { UserInfoInHead, UserLayout, UserLayoutContent } from './UserProfile.styled';
import Switcher from '../components/Switcher';
import NavBack from '../services/NavBack';

const UserProfile = () => {
  const { isMobile } = useContext(MediaContext);
  const location = useLocation();
  const user: string = location.pathname.slice(2);
  const [userInfo, setUserInfo] = React.useState(userinfo[0]);
  const [userFeed, setUserFeed] = React.useState(userfeed[0]);
  const [isLoading, setIsLoading] = React.useState(false);

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
        ) : !userInfo || !userInfo.user.uniqueId || !userFeed ? (
          <div>No data</div>
        ) : (
          <>
            <NavBar left={<NavBack />} right={<Switcher />}>
              {isMobile && (
                <UserInfoInHead>
                  <p>
                    {/* eslint-disable-next-line more/no-duplicated-chains */}
                    {userInfo.user.nickname} | {userInfo.user.uniqueId}
                  </p>
                </UserInfoInHead>
              )}
            </NavBar>
            <UserHeader userInfo={userInfo} />
            <UserMain
              user={user}
              // @ts-ignore
              userFeed={userFeed}
            />
          </>
        )}
      </UserLayoutContent>
    </UserLayout>
  );
};

export default UserProfile;
