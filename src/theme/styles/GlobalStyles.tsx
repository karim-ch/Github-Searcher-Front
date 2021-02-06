import { memo } from 'react';
import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import reset from './reset';

const globalStyles = createGlobalStyle`
  ${reset}
  
  h1 {
    font-size: 2rem;
    font-weight:bold;
  }
  
  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  h4 {
    font-size: 1.1rem;
  }

  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: .9rem;
  }
  
  input {
    border-radius: 3px;
    border: solid 1px ${themeGet('colors.lightGray')};
    padding: 14px;
    ::placeholder {
      color: ${themeGet('colors.anthracite')};
      font-size: 0.9rem;
    }
  }
  
  .dropdown-menu-title {
    color: ${themeGet('colors.anthracite')};
    background-color: ${themeGet('colors.white')};
    border: solid 1px ${themeGet('colors.lightGray')};
    padding: 0 20px;
  }
  
  #root {
    position: relative;
    background-color: ${themeGet('colors.white')};
  }
`;

export default memo(globalStyles);
