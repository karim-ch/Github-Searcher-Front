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

  .hvr-grow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
  .hvr-grow:hover,
  .hvr-grow:focus,
  .hvr-grow:active {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

export default StyledComponent;
