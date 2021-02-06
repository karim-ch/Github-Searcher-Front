import React from 'react';
import { ThemeProvider as StyledTheme } from 'styled-components';
import Context from './context';
import GlobalStyles from './styles/GlobalStyles';
import base from './base';

export const getTheme = () => ({ ...base });

interface Children {
  children: React.ReactElement;
}

const ThemeProvider = ({ children }: Children) => {
  return (
    <StyledTheme theme={{ base, ...base }}>
      <GlobalStyles />
      <Context.Provider value={getTheme()}>{children}</Context.Provider>
    </StyledTheme>
  );
};

export default ThemeProvider;
