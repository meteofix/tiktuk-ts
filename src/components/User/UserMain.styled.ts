import styled, { css } from 'styled-components';
import { MobileProp } from '../../UI/styled';

export const UserMainContainer = styled.div<MobileProp>`
  width: 594px;
  flex: 1 1 auto;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 490px;
  align-items: center;
  ${(props) =>
    props.mobile &&
    css`
      width: 100vw;
    `}
`;

export const VideoFeedTab = styled.div<MobileProp>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  height: 44px;
  margin-bottom: 4px;
  align-items: center;
  ${(props) =>
    props.mobile &&
    css`
      border: 0.5px solid rgba(22, 24, 35, 0.08);
      height: 40px;
      margin: 0;
    `}
`;

export const Tab = styled.p`
  flex: 1 1 0%;
  position: relative;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
`;

export const TabVideos = styled(Tab)<{ active: boolean }>`
  color: ${(props) => props.theme.disabledColor};
  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.textColor};
    `}
`;
export const TabLiked = styled(Tab)<{ active: boolean }>`
  color: ${(props) => props.theme.textColor};
  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.disabledColor};
    `}
`;

export const BottomLine = styled.div<MobileProp>`
  position: absolute;
  width: 50%;
  height: 2px;
  background: #161823;
  background: ${(props) => props.theme.textColor};
  left: 0;
  bottom: 0;
  transition: transform 0.3s;
  ${(props) =>
    props.mobile &&
    css`
      width: 48px;
    `}
`;

export const VideoFeed = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
