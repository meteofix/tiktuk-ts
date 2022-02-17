import styled, { css } from 'styled-components';
import { MobileProp } from '../../../UI/styled';

export const ImageWrap = styled.div`
  position: relative;
  cursor: pointer;
`;

export const TiktokAvatar = styled.span<MobileProp>`
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
  object-fit: cover;
  border-radius: 50%;
`;
