import { memo } from 'react';
import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import reset from './reset';

const globalStyles = createGlobalStyle`
  ${reset}
  
  #root {
    position: relative;
    background-color: ${themeGet('colors.white')};
  }
`;

export default memo(globalStyles);
