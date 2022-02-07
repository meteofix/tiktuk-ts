import React, { useContext, useEffect } from 'react';
import PlayerProvider from '../store/contexts/PlayerProvider';
import Loader from '../services/Loader/Loader';
import { MediaContext } from '../store/contexts/MediaContext';
import TrendingFeedPostsMapper from '../services/TrendingFeedPostsMapper';
import feed from '../json/feed.json';
import NavBar from '../components/NavBar';
import { FeedWrapper } from './TrendingFeed.styled';

const TrendingFeed = () => {
  const [responseData, setResponseData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const { isMobile } = useContext(MediaContext);

  useEffect(() => {
    setResponseData(feed);
    setIsLoading(false);
  }, []);

  /** For broken responseData API start */
  // useEffect(() => {
  //   setIsLoading(true);
  //   requestData({
  //     url: TRENDING_FEED_URL,
  //     responseData,
  //     setResponseData,
  //     setIsLoading,
  //   });
  // }, [setResponseData]);
  /** For broken responseData API end */

  return (
    <PlayerProvider>
      <FeedWrapper mobile={isMobile} data-testid="feedWrapper">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {!isMobile && <NavBar />}
            <TrendingFeedPostsMapper posts={responseData} />
          </>
        )}
      </FeedWrapper>
    </PlayerProvider>
  );
};

export default TrendingFeed;
