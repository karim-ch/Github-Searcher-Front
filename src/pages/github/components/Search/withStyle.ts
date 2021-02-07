import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const StyledComponent = (component: React.ComponentProps<any>) => styled(component)`
  .search-header {
    display: flex;
    justify-content: center;
    width: fit-content;

    > svg {
      width: 45px;
      height: 45px;
      margin-right: 20px;
    }
  }

  .search-inputs {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    position: relative;
    width: 80%;
    margin-bottom: 5%;
    .dropdown-menu-title {
      margin-left: 20px;
    }
  }

  @media (max-width: ${themeGet('devices.sizes.medium')}px) {
    .search-header {
      flex-direction: column;
      align-items: center;
    }
    .search-inputs {
      flex-direction: column;

      .dropdown-menu-title {
        height: 30px;
        margin-top: 10px;
        margin-left: 0;
      }
    }
  }
`;

export default StyledComponent;
