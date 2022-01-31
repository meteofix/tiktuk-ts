import React from 'react';
import Post from '../components/Post/Post';

const TrendingFeedPostsMapper = ({ posts }) => (
  <>
    {posts.map((post, index) => (
      <Post key={post.id} post={post} id={index} />
    ))}
  </>
);
export default TrendingFeedPostsMapper;
