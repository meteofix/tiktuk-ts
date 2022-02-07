import styled, { css } from 'styled-components';

export const StyledMusicIcon = styled.svg`
  margin-right: 5px;
  transform: translateY(4px);
  width: 18px;
  height: 18px;
  fill: currentcolor;
  ${(props) =>
    props.mobile &&
    css`
      color: white;
    `}
`;
