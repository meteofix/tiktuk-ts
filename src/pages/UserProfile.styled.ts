import styled, { css } from 'styled-components';
import {MobileProp} from "../UI/styled";

export const UserLayout = styled.div<MobileProp>`
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

export const UserLayoutContent = styled.div<MobileProp>`
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
