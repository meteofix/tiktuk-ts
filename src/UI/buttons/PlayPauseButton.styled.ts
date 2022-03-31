import styled, { css } from 'styled-components';
import { MobileProp } from '../styled';

export const PlayPauseContainer = styled.div<MobileProp>`
  position: absolute;
  left: 12px;
  bottom: 28px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transform: translate(10px, 10px);
  ${(props) =>
    props.mobile &&
    css`
      left: auto;
      right: 25px;
    `}
`;
