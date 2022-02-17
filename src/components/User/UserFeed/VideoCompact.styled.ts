import styled, { css } from 'styled-components';
import VideoPlayer from '../../../services/VideoPlayer';
import {MobileProp} from "../../../UI/styled";

export const VideoFeedItem = styled.div<MobileProp>`
  position: relative;
  display: flex;
  justify-content: center;
  float: left;
  border-right: 1px solid rgb(245, 245, 245);
  border-bottom: 1px solid rgb(245, 245, 245);
  width: 33%;
  min-height: 22vw;
  ${(props) =>
    props.mobile &&
    css`
      min-height: 45vw;
    `}
`;

export const VideoCardMask = styled.div`
  position: absolute;
  width: 100%;
  bottom: 3px;
  height: 50px;
  background: linear-gradient(rgba(22, 24, 35, 0) 2.92%, rgba(22, 24, 35, 0.5) 98.99%);
  padding: 13px 10px 17px;
  box-sizing: border-box;
`;

export const VideoPlayerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledVideoPlayer = styled(VideoPlayer)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BufferedLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const VideoCount = styled.strong`
  font-weight: 600;
  vertical-align: middle;
  color: rgb(255, 255, 255);
  padding-left: 4px;
`;

export const PlayIcon = styled.img`
  transform: translate(0px, 6px);
`;
