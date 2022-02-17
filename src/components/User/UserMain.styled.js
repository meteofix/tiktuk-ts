import styled, { css } from 'styled-components';

export const UserMainContainer = styled.div`
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

export const VideoFeedTab = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  /*align-items: stretch;*/
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
  -webkit-flex: 1 1 0%;
  -ms-flex: 1 1 0%;
  flex: 1 1 0%;
  position: relative;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
`;

export const TabVideos = styled(Tab)`
  color: ${(props) => props.theme.disabledColor};
  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.textColor};
    `}
`;
export const TabLiked = styled(Tab)`
  color: ${(props) => props.theme.textColor};
  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.disabledColor};
    `}
`;

export const BottomLine = styled.div`
  position: absolute;
  width: 50%;
  height: 2px;
  background: #161823;
  background: ${(props) => props.theme.textColor};
  left: 0;
  bottom: 0;
  -webkit-transition: -webkit-transform 0.3s;
  -webkit-transition: transform 0.3s;
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
