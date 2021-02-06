import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export default (component: React.FunctionComponent) => styled(component)`
  text-align: center;
  width: 100%;
  margin-top: 10%;

  .search-header {
    display: flex;
    justify-content: center;

    > svg {
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
  }

  .search-inputs {
    > input {
      margin-top: 20px;
    }
  }
`;
