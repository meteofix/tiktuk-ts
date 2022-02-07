import styled, { css } from 'styled-components';

export const UserLayout = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  //padding: 10px 20px 36px 80px;
  width: 692px;
  max-width: 692px;
  ${(props) =>
    props.mobile &&
    css`
      padding: 0;
      width: 100vw;
      max-width: 100vw;
    `}
`;

export const UserLayoutContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  ${(props) =>
    props.mobile &&
    css`
      padding: 0;
    `}
`;

export const UserInfoInHead = styled.div`
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 17px;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 700;
  //margin-right: 24px;
  padding: 0 18px;
`;
