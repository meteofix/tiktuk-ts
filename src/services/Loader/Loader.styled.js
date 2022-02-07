import styled, { css, keyframes } from 'styled-components';

const revolve = keyframes`
  0% {
    left: 0;
  }
  25% {
    transform: scale(calc(1 + var(--loader-circle-scale-percent)));
  }
  50% {
    left: var(--loader-circle-diameter);
  }
  75% {
    transform: scale(calc(1 - var(--loader-circle-scale-percent)));
  }
  100% {
    left: 0;
  }
`;

const revolveSmall = keyframes`
  0% {
    left: 0;
  }
  25% {
    transform: scale(calc(1 + var(--loader-circle-scale-percent)));
  }
  50% {
    left: var(--loader-circle-diameter-small);
  }
  75% {
    transform: scale(calc(1 - var(--loader-circle-scale-percent)));
  }
  100% {
    left: 0;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  width: 100%;
  height: 80vh;
  ${(props) =>
    props.mobile &&
    css`
      width: 100vw;
    `}
`;

export const LoaderDiv = styled.div`
  position: relative;
  left: calc(var(--loader-circle-diameter) * -1);
  z-index: 20;

  :before {
    background: rgb(77, 232, 244);
  }

  :after {
    background: rgb(253, 62, 62);
    animation-delay: calc(var(--loader-animation-duration) / -2);
  }

  :before,
  :after {
    content: ' ';
    display: table-cell;
    width: var(--loader-circle-diameter);
    height: var(--loader-circle-diameter);
    border-radius: 50%;
    position: absolute;
    animation-duration: var(--loader-animation-duration);
    animation-name: ${revolve};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    mix-blend-mode: darken;
  }

  ${(props) =>
    props.small &&
    css`
      left: calc(var(--loader-circle-diameter-small) * -1);
      z-index: 20;
      :before,
      :after {
        width: var(--loader-circle-diameter-small);
        height: var(--loader-circle-diameter-small);
        animation-name: ${revolveSmall};
      }
    `}
`;
