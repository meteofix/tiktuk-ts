import styled, { css } from 'styled-components';

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  ${(props) =>
    props.mobile &&
    css`
      width: 40px;
      height: 40px;
    `}
`;
