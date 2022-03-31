import styled from 'styled-components';

export const SwitcherContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 14px;
  :before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Input = styled.input`
  :checked + span {
    background-color: #2196f3;
  }
  :checked + span:before {
    transform: translateX(20px);
  }
  :focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
`;
