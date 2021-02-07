import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const StyledComponent = (component: React.ComponentProps<any>) => styled(component)`
  width: 75%;
  margin-top: 3%;
  justify-content: center;

  .wrapper-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    place-content: center;
  }

  .item {
    flex: 1 0 calc(31% - 10px);
    margin-bottom: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    max-width: 400px;
    min-height: 300px;
    box-sizing: border-box;
  }

  @media (max-width: ${themeGet('devices.sizes.medium')}px) {
    width: 90%;
    .wrapper-flex {
      .item {
        flex: 1 0 calc(49% - 10px);
      }
    }
  }

  @media (max-width: ${themeGet('devices.sizes.small')}px) {
    width: 100%;
  }
`;

export default StyledComponent;
