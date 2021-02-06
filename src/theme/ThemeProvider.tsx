import React from 'react';
import { ThemeProvider as StyledTheme } from 'styled-components';
import Context from './context';
import GlobalStyles from './styles/GlobalStyles';
import theme from './appTheme';

export const getTheme = () => ({ ...theme });

interface Children {
  children: React.ReactElement;
}

const ThemeProvider = ({ children }: Children) => {
  return (
    <StyledTheme theme={{ ...theme }}>
      <GlobalStyles />
      <Context.Provider value={getTheme()}>{children}</Context.Provider>
    </StyledTheme>
  );
};

export default ThemeProvider;
