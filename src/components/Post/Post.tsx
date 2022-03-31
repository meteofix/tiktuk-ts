import React, { useContext, useState } from 'react';
import {IMediaContext, MediaContext} from '../../store/contexts/MediaContext';
import AuthorInfo from './Author/AuthorInfo';
import AuthorAvatar from './Author/AuthorAvatar';
import VideoMeta from './Video/VideoMeta';
import FollowButton from '../../UI/buttons/FollowButton';
import VideoMusic from './Video/VideoMusic';
import VideoContainer from './Video/VideoContainer';
import avatar from '../../UI/fakeMedia/images/avatar_kikakiim.jpeg';
import { InfoMobile, PostContent, PostWrapper } from './Post.styled';
import {IFeed} from "../../json/feed";

type PostProps = {
  post: IFeed,
  id: number
}

const Post = ({ post, id }: PostProps) => {
  const [isHover, setIsHover] = useState(false);
  const { isDesktopOrTablet, isMobile }: IMediaContext = useContext(MediaContext);
  const authorLink: string = `@${post.authorMeta.name}`;

  return (
    <PostWrapper data-testid="postWrapper" mobile={isMobile}>
      {isDesktopOrTablet && (
        <AuthorAvatar
          avatar={avatar} // avatar={post.authorMeta.avatar}
          authorLink={authorLink}
          setIsHover={setIsHover}
        />
      )}
      <PostContent data-testid="postContent" mobile={isMobile}>
        <InfoMobile data-testid="mobile" mobile={isMobile}>
          <AuthorInfo authorMeta={post.authorMeta} authorLink={authorLink} isHover={isHover} setIsHover={setIsHover} />
          <VideoMeta text={post.text} />
          {isDesktopOrTablet && <FollowButton small />}
          <VideoMusic musicMeta={post.musicMeta} />
        </InfoMobile>
        <VideoContainer post={post} id={id} />
      </PostContent>
    </PostWrapper>
  );
};

export default Post;
