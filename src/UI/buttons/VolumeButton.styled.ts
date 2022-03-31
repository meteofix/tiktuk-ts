import styled, { css } from 'styled-components';
import { MobileProp } from '../styled';

export const VolumeButtonContainer = styled.div<MobileProp>`
  position: absolute;
  right: 12px;
  bottom: 28px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transform: translate(10px, 8px);
  ${(props) =>
    props.mobile &&
    css`
      right: auto;
      left: 25px;
    `}
`;

export const UnMutedImage = styled.img<{ hover: boolean }>`
  display: ${(props) => (props.hover ? 'block' : 'none')};
`;
