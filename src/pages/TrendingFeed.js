import React, { useContext, useEffect } from 'react';
import PlayerProvider from '../store/contexts/PlayerProvider';
import requestData from '../api/requestData';
import { TRENDING_FEED_URL } from '../api/requestDataConfig';
import classes from './TrendingFeed.module.css';
import Loader from '../services/Loader/Loader';
import { MediaContext } from '../store/contexts/MediaContext';
import TrendingFeedPostsMapper from '../services/TrendingFeedPostsMapper';

const TrendingFeed = () => {
  const [responseData, setResponseData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const { isMobile } = useContext(MediaContext);

  useEffect(() => {
    setIsLoading(true);
    requestData({
      url: TRENDING_FEED_URL,
      responseData,
      setResponseData,
      setIsLoading,
    });
  }, [setResponseData]);

  return (
    <PlayerProvider>
      <div
        data-testid="feedWrapper"
        className={isMobile ? `${classes.feedWrapper} ${classes.feedWrapperMobile}` : classes.feedWrapper}
      >
        {isLoading ? <Loader /> : <TrendingFeedPostsMapper posts={responseData} />}
      </div>
    </PlayerProvider>
  );
};

export default TrendingFeed;
