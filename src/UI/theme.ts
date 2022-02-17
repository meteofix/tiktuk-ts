import {createGlobalStyle, DefaultTheme, GlobalStyleComponent} from 'styled-components';

export type ThemeType = typeof lightTheme;

export const lightTheme = {
  body: '#fff',
  textColor: '#1e1e1e',
  disabledColor: 'rgba(18,18,18,0.5)',
  lineColor: 'rgba(22, 24, 35, 0.08)',
  headingColor: '#d23669',
  iconBackColor: 'rgba(22, 24, 35, 0.06)',
  iconBackHoverColor: 'rgba(22, 24, 35, 0.1)',
};

export const darkTheme:ThemeType = {
  body: '#282c35',
  textColor: '#FAFAFA',
  disabledColor: 'rgba(255,255,255,0.5)',
  lineColor: 'rgba(255,255,255,0.08)',
  headingColor: 'lightblue',
  iconBackColor: 'rgba(255, 255, 255, 0.15)',
  iconBackHoverColor: 'rgba(255, 255, 255, 0.20)',
};


export const GlobalStyles:GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  :root {
    --loader-animation-duration: 0.8s;
    --loader-circle-diameter-small: 20px;
    --loader-circle-diameter: 50px;
    --loader-circle-scale-percent: 0.2;
  }
  * {
    margin: 0;
    padding: 0;
  }

  body > iframe {
    display: none !important;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.textColor};

  }

  body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.textColor};
    transition: .3s ease;
  }
  p, h1, h2, h3, h4, h5 {
    margin: 0;
  }
  h2 {
    color: ${(props) => props.theme.headingColor};
  }
`;
