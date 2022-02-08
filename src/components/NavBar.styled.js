import styled from 'styled-components';

export const NavBarContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  line-height: 44px;
  font-size: 17px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  height: 44px;
  font-weight: 700;
  //border-bottom: 0.5px solid rgba(22, 24, 35, 0.08);
  border-bottom: 0.5px solid ${(props) => props.theme.lineColor};
`;

export const NavLeft = styled.div`
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  //width: 100px;
  padding-left: 15px;
  cursor: pointer;
`;

export const NavRight = styled.div`
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  //width: 40px;
  padding-right: 18px;
`;
