import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {MobileProp} from "../../../UI/styled";

export const AuthorInfoContainer = styled.div<MobileProp>`
  display: flex;
  flex-flow: row wrap;
  margin-right: 150px;
  ${(props) =>
    props.mobile &&
    css`
      margin-right: 0px;
    `}
`;

export const AuthorLink = styled(Link)`
  display: flex;
`;

export const AuthorName = styled.h3<{mobile: MobileProp['mobile'], underline: boolean }>`
  margin-right: 4px;
  margin-bottom: 0px;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
    `};
  ${(props) =>
    props.mobile &&
    css`
      color: white;
    `};
`;

export const AuthorNickName = styled.h3`
  margin-bottom: 0px;
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: ${(props) => props.theme.textColor};
`;
