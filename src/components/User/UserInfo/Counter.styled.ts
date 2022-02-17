import styled, { css } from 'styled-components';
import { MobileProp } from '../../../UI/styled';

export const Count = styled.div<MobileProp>`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: baseline;
  direction: ltr;
  ${(props) =>
    props.mobile &&
    css`
      flex-direction: column;
      align-items: center;
      font-size: 17px;
      line-height: normal;
    `}
`;

export const Unit = styled.span<MobileProp>`
  font-weight: 400;
  margin-left: 6px;
  ${(props) =>
    props.mobile &&
    css`
      font-size: 13px;
    `}
`;
