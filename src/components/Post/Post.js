import React, { useContext, useState } from 'react';
import { MediaContext } from '../../store/contexts/MediaContext';
import AuthorInfo from './Author/AuthorInfo';
import AuthorAvatar from './Author/AuthorAvatar';
import VideoMeta from './Video/VideoMeta';
import FollowButton from '../../UI/buttons/FollowButton';
import VideoMusic from './Video/VideoMusic';
import VideoContainer from './Video/VideoContainer';
import avatar from '../../UI/fakeMedia/images/avatar_kikakiim.jpeg';
import { InfoMobile, PostContent, PostWrapper } from './Post.styled';

const Post = ({ post, id }) => {
  const [isHover, setIsHover] = useState(false);
  const authorLink = `@${post.authorMeta.name}`;
  const { isDesktopOrTablet, isMobile } = useContext(MediaContext);

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
