import styled, { css } from 'styled-components';
import {MobileProp} from "../styled";

export const StyledUserVerifiedIcon = styled.div<{mobile: MobileProp['mobile'], small: boolean}>`
  display: inline-block;
  width: 20px;
  height: 20px;
  font-size: 0px;
  vertical-align: middle;
  margin-left: 4px;
  margin-top: -3px;
  ${(props) =>
    props.mobile &&
    css`
      width: 20px;
      height: 20px;
      margin-left: 8px;
    `}
  ${(props) =>
    props.small &&
    css`
      width: 14px;
      height: 14px;
      margin-left: 4px;
    `}
`;
