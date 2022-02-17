import styled, { css } from 'styled-components';

export const UserTitleContainer = styled.div`
  margin-left: 20px;
  flex: 1 1 0%;
  overflow: hidden;
  text-overflow: ellipsis;
  ${(props) =>
    props.mobile &&
    css`
      margin: 0;
      text-align: center;
    `}
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  padding-bottom: 4px;
  ${(props) =>
    props.mobile &&
    css`
      font-size: 17px;
      line-height: 20px;
      margin-bottom: 14px;
      font-weight: 600;
      -webkit-box-align: center;
      align-items: center;
    `}
`;

export const UserSubTitle = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-overflow: ellipsis;
  height: 25px;
  overflow: hidden;
  max-width: 450px;
  white-space: nowrap;
`;
