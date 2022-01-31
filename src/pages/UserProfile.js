import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserHeader from '../components/User/UserHeader';
import UserMain from '../components/User/UserMain';
import requestData from '../api/requestData';
import { USER_INFO_URL } from '../api/requestDataConfig';
import classes from './UserProfile.module.css';
import Loader from '../services/Loader/Loader';
import { MediaContext } from '../store/contexts/MediaContext';

const UserProfile = () => {
  const { isMobile } = useContext(MediaContext);
  const location = useLocation();
  const user = location.pathname.slice(2);
  const [userInfo, setUserInfo] = React.useState([]);
  const [isInfoLoading, setIsInfoLoading] = React.useState(false);

  useEffect(() => {
    setIsInfoLoading(true);
    requestData({
      url: USER_INFO_URL,
      name: user,
      responseData: userInfo,
      setResponseData: setUserInfo,
      setIsLoading: setIsInfoLoading,
    });
  }, [setUserInfo]);

  /** For broken UserFeed API start */
  // const [userFeed, setUserFeed] = useState([])
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
  /** For broken UserFeed API start */

  return (
    <div
      data-testid="userLayout"
      className={isMobile ? `${classes.userLayout} ${classes.userLayoutMobile}` : classes.userLayout}
    >
      <div
        data-testid="userLayoutContent"
        className={
          isMobile ? `${classes.userLayoutContent} ${classes.userLayoutContentMobile}` : classes.userLayoutContent
        }
      >
        {isInfoLoading}
        {isInfoLoading ? (
          <Loader />
        ) : !userInfo || userInfo.length === 0 || !userInfo.user.uniqueId ? (
          <div>No data</div>
        ) : (
          <>
            <UserHeader userInfo={userInfo} />
            <UserMain user={user} />
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
