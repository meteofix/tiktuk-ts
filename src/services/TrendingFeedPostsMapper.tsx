import React from 'react';
import Post from '../components/Post/Post';
import {IFeed} from "../json/feed";

type TrendingFeedPostsMapperProps = {
  posts: IFeed
}

const TrendingFeedPostsMapper = ({ posts }: TrendingFeedPostsMapperProps) => (
  <>
    {Array.isArray(posts) && posts.map((post, index) => (
      <Post key={post.id} post={post} id={index} />
    ))}
  </>
);
export default TrendingFeedPostsMapper;
