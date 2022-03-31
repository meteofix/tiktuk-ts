import React from 'react';
import VideoCompact from '../components/User/UserFeed/VideoCompact';
import { IUserFeedItemList } from '../json/userFeed';

type UserFeedPostsMapperProps = {
  posts: IUserFeedItemList[];
};

const UserFeedPostsMapper = ({ posts }: UserFeedPostsMapperProps) => (
  <>{Array.isArray(posts) && posts.map((item) => <VideoCompact key={item.id} item={item} />)}</>
);

export default UserFeedPostsMapper;
