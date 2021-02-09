import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const StyledComponent = (component: React.ComponentProps<any>) => styled(component)`
  border-radius: 3px;
  border: solid 1px ${themeGet('colors.lightGray')};
  padding: 14px;
  ::placeholder {
    color: ${themeGet('colors.anthracite')};
    font-size: 0.9rem;
  }
`;

export default StyledComponent;
