import { createContext } from 'react';

export interface IThemeContext {
  theme: string,
  setTheme: (theme:string) => void
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  setTheme: () => {},
});
