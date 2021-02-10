import React from 'react';
import { ThemeProvider as StyledTheme } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './appTheme';

interface Children {
  children: React.ReactElement;
}

const ThemeProvider: React.FunctionComponent<Children> = ({ children }) => {
  return (
    <StyledTheme theme={theme}>
      <GlobalStyles />
      {children}
    </StyledTheme>
  );
};

export default ThemeProvider;
