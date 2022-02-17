import styled, { css } from 'styled-components';
import { MobileProp } from '../../styled';

export const Icon = styled.svg<MobileProp>`
  width: 24px;
  height: 24px;
  ${(props) =>
    props.mobile &&
    css`
      width: 40px;
      height: 40px;
    `}
`;
