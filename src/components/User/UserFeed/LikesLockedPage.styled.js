import styled from 'styled-components';

export const LockedPage = styled.div`
  padding-top: 160px;
  padding-bottom: 228px;
  text-align: center;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.textColor};
`;

export const Description = styled.p`
  max-width: 480px;
  display: inline-block;
  font-weight: 400;
  color: ${(props) => props.theme.disabledColor};
`;

export const LockedPageImg = styled.div`
  height: 200px;
  background-color: ${(props) => props.theme.disabledColor};
  -webkit-mask: url(${(props) => props.logo}) no-repeat center;
  mask: url(${(props) => props.logo}) no-repeat center;
`;
