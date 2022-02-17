import React, { useContext } from 'react';
import { MediaContext } from '../../../store/contexts/MediaContext';
import { AvatarImage, ImageWrap, TiktokAvatar } from './Avatar.styled';

type AvatarProps = {
  nickname: string;
  avatar: string;
};

const Avatar = ({ nickname, avatar }: AvatarProps) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <ImageWrap>
      <TiktokAvatar data-testid="tiktokAvatar" mobile={isMobile}>
        <AvatarImage alt={`${nickname} TikTuk`} src={avatar} />
      </TiktokAvatar>
    </ImageWrap>
  );
};

export default Avatar;
