import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Component = (component: React.ComponentProps<any>): StyledComponent<any, any> => styled(
  component,
)`
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
    margin-bottom: 5%;
    width: fit-content;

    .dropdown-menu-title {
      margin-left: 20px;
      color: ${themeGet('colors.anthracite')};
      background-color: ${themeGet('colors.white')};
      border: solid 1px ${themeGet('colors.lightGray')};
      padding: 0 20px;
      text-transform: capitalize;
      outline: none;

      > svg {
        fill: ${themeGet('colors.anthracite')};
        margin-left: 5px;
        width: 9px;
        height: 9px;
      }
    }
    .--opened {
      > svg {
        transform: rotate(180deg);
        transition: transform 0.5s;
      }
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

export default Component;
