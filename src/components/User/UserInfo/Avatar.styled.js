import styled, { css } from 'styled-components';

export const ImageWrap = styled.div`
  position: relative;
  cursor: pointer;
`;

export const TiktokAvatar = styled.span`
  cursor: unset;
  width: 116px;
  height: 116px;
  display: flex;
  ${(props) =>
    props.mobile &&
    css`
      width: 96px;
      height: 96px;
      margin-bottom: 12px;
    `}
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
`;
