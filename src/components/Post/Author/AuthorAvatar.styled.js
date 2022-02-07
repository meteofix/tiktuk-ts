import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostAvatarLink = styled(Link)`
  float: left;
`;

export const TiktokAvatar = styled.span`
  cursor: unset;
  width: 48px;
  height: 48px;
  display: flex;
`;

export const TiktokAvatarImg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
`;

export const PlusIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 24px;
  transform: translate(-50%, 50%);
  width: 24px;
  height: 24px;
`;

export const PlusIconImg = styled.img`
  width: 24px;
  height: 24px;
`;
