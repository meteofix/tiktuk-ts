import styled, { css } from 'styled-components';
import VideoPlayer from '../../../services/VideoPlayer';

export const VideoWrapper = styled.div`
  position: relative;
  scroll-snap-align: start;
  width: calc(0.56 * (450px + ((100vw - 768px) / 1152) * 100));
  height: calc(450px + ((100vw - 768px) / 1152) * 100);
  ${(props) =>
    props.mobile &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: black;
    `}
`;

export const VideoFrame = styled.div`
  width: 100%;
  height: 100%;
`;

export const VideoPlayerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  margin-right: 150px;
`;

export const StyledVideoPlayer = styled(VideoPlayer)`
  width: 100%;
  height: 100%;
  object-fit: fill;
  margin-right: 150px;
`;

export const BufferedLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const LayerMask = styled.span`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 200px;
  pointer-events: none;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
`;

export const ErrorMessage = styled.span`
  display: ${(props) => props.display};
  position: absolute;
  width: 100%;
  bottom: 5px;
  font-size: 12px;
  color: white;
  text-align: center;
  justify-content: center;
`;

export const PlayBar = styled.div`
  ${(props) =>
    props.mobile &&
    css`
      position: absolute;
      left: 50%;
      bottom: 40px;
    `}
`;

export const CounterBar = styled.div`
  position: absolute;
  right: -64px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 1;
  ${(props) =>
    props.mobile &&
    css`
      right: 0px;
      bottom: 200px;
      z-index: 10;
      padding: 0 10px 30px;
    `}
`;

export const CounterBarAvatar = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 15px;
`;
