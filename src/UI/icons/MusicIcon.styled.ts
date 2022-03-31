import styled, { css } from 'styled-components';
import { MobileProp } from '../styled';

export const StyledMusicIcon = styled.svg<MobileProp>`
  margin-right: 5px;
  transform: translateY(4px);
  width: 18px;
  height: 18px;
  fill: currentcolor;
  ${(props) =>
    props.mobile &&
    css`
      color: white;
    `}
`;
