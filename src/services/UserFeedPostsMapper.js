import React from 'react';
import VideoCompact from '../components/User/UserFeed/VideoCompact';

const UserFeedPostsMapper = ({ posts }) => (
  <>
    {posts.map((item) => (
      <VideoCompact key={item.id} item={item} />
    ))}
  </>
);

export default UserFeedPostsMapper;
