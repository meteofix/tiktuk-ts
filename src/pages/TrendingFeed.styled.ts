import styled, { css } from 'styled-components';
import {MobileProp} from "../UI/styled";

export const FeedWrapper = styled.div<MobileProp>`
  height: 100%;
  align-items: center;
  ${(props) =>
    props.mobile &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      background: black;
    `}
`;
