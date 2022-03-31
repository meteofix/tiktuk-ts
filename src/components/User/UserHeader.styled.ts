import styled, { css } from 'styled-components';
import { MobileProp } from '../../UI/styled';

export const UserHeaderContainer = styled.div<MobileProp>`
  flex: 0 0 auto;
  position: relative;
  margin-bottom: 20px;
  width: 594px;
  box-sizing: border-box;
  padding-right: 52px;
  ${(props) =>
    props.mobile &&
    css`
      width: 100%;
      padding: 8px 0 20px;
      border-top: 0.5px solid lightgray;
      margin-bottom: 0;
    `}
`;

export const UserInfo = styled.div<MobileProp>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 84px;
  ${(props) =>
    props.mobile &&
    css`
      flex-direction: column;
    `}
`;

export const CountInfos = styled.div<MobileProp>`
  display: flex;
  align-items: center;
  margin-top: 22px;
  justify-content: space-between;
  color: ${(props) => props.theme.textColor};
  ${(props) =>
    props.mobile &&
    css`
      justify-content: space-around;
      margin-top: 0;
    `}
`;

export const UserDesc = styled.div<MobileProp>`
  margin-top: 10px;
  font-weight: 400;
  color: ${(props) => props.theme.textColor};
  white-space: pre-line;
  ${(props) =>
    props.mobile &&
    css`
      display: flex;
      justify-content: center;
      text-align: center;
      margin-top: 16px;
    `}
`;

export const UserLinkWrapper = styled.div<MobileProp>`
  display: flex;
  font-weight: 700;
  margin-top: 5px;
  ${(props) =>
    props.mobile &&
    css`
      justify-content: center;
      display: flex;
    `}
`;

export const UserLink = styled.a`
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  height: 22px;
  max-width: 236px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.textColor};
  padding-left: 5px;
  :hover {
    text-decoration: underline;
  }
`;

export const LinkIcon = styled.div<{ logo: any }>`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.theme.textColor};
  mask: url(${(props) => props.logo}) no-repeat center;
`;
