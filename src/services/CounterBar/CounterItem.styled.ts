import styled, { css } from 'styled-components';
import { MobileProp } from '../../UI/styled';

export const BarItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48px;
  font-size: 13px;
`;

export const BarItemImg = styled.div<MobileProp>`
  margin-top: 8px;
  background-color: ${(props) => props.theme.iconBackColor};
  padding: 12px;
  border-radius: 100%;
  margin-left: 0px;
  cursor: pointer;
  transition: all 200ms ease-in-out 0s;
  width: 24px;
  height: 24px;
  background-size: 24px;
  background-position: center center;
  :hover {
    background-color: ${(props) => props.theme.iconBackHoverColor};
  }
  ${(props) =>
    props.mobile &&
    css`
      color: white;
      width: 40px;
      height: 40px;
      padding: 0;
    `}
`;

export const BarItemText = styled.strong<MobileProp>`
  display: inline-block;
  text-align: center;
  margin-top: 6px;
  color: ${(props) => props.theme.textColor};
  font-family: proxima-semibold, PingFangSC, sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  ${(props) =>
    props.mobile &&
    css`
      color: white;
      font-weight: 400;
    `}
`;
