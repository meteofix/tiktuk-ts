import styled, { css } from 'styled-components';
import {MobileProp} from "../../UI/styled";

export const PostWrapper = styled.div<MobileProp>`
  position: relative;
  max-width: 692px;
  padding: 20px 0;
  border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
  ${(props) =>
    props.mobile &&
    css`
      max-width: 100%;
      height: 100vh;
      background: black;
      padding: 0;
      left: 0;
      border: none;
    `}
`;

export const PostContent = styled.div<MobileProp>`
  position: relative;
  margin-left: 68px;
  ${(props) =>
    props.mobile &&
    css`
      margin-left: 0;
      height: 100vh;
    `}
`;

export const InfoMobile = styled.div<MobileProp>`
  ${(props) =>
    props.mobile &&
    css`
      position: absolute;
      bottom: 100px;
      z-index: 10;
      width: 274px;
      max-width: 274px;
      overflow: hidden;
      padding: 0 10px 12px;
    `}
`;
