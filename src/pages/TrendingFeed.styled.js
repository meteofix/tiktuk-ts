import styled, { css } from 'styled-components';

export const FeedWrapper = styled.div`
  height: 100%;
  align-items: center;
  ${(props) =>
    props.mobile &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      background: black;
    `}
`;
