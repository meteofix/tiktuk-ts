import styled, { css, keyframes } from 'styled-components';
import {MobileProp} from "../../../UI/styled";

const marqueeAnimation = keyframes`
  0%{transform: translate(0, 0);}
  100%{transform: translate(-100%, 0)}
`;

export const MusicInfo = styled.div`
  margin-top: 8px;
  margin-bottom: 12px;
  max-width: 524px;
  display: flex;
`;

export const PlayInfo = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  margin-left: 10px;
`;

export const MusicInfoText = styled.div<MobileProp>`
  font-weight: 700;
  display: inline-block;
  font-size: 16px;
  line-height: 22px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ${(props) =>
    props.mobile &&
    css`
      color: white;
      font-weight: 400;
      padding-left: 100%;
      animation: ${marqueeAnimation} 5s infinite linear;
    `}
  :hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;
