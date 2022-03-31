import styled, { css } from 'styled-components';
import { MobileProp } from '../styled';

export const Button = styled.button<{ mobile: MobileProp['mobile']; small: boolean }>`
  font-weight: 600;
  min-width: ${(props) => (props.small ? '88px' : '208px')};
  padding: ${(props) => (props.small ? '0px 10px' : '1px 6px')};
  height: ${(props) => (props.small ? '28px' : '36px')};
  border-radius: 4px;
  position: absolute;
  left: 0px;
  top: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: #fe2c55;
  color: #fff;
  border: none;
  :hover {
    background: rgba(254, 44, 85, 0.06);
    cursor: pointer;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), #fe2c55;
    border: none;
  }
  ${(props) =>
    props.mobile &&
    css`
      cursor: pointer;
      position: relative;
      height: 44px;
    `}
  ${(props) =>
    props.small &&
    css`
      left: auto;
      right: 0;
    `}
`;

export const FollowContainer = styled.div<{ mobile: MobileProp['mobile']; small: boolean }>`
  font-weight: 700;
  position: relative;
  width: 208px;
  height: 36px;
  padding: 0px;
  margin: 16px 0px 0px;
  font-size: 18px;
  line-height: 25px;
  ${(props) =>
    props.mobile &&
    css`
      margin-left: auto;
      margin-right: auto;
    `}
  ${(props) =>
    props.small &&
    css`
      position: absolute;
      margin-top: 0;
      right: 0;
      top: 8px;
    `}
`;
