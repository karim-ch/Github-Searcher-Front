import React from 'react';
import styled from 'styled-components';

export default (component: React.FunctionComponent) => styled(component)`
  .search-header {
    display: flex;
    justify-content: center;
    width: fit-content;

    > svg {
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
  }

  .search-inputs {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: fit-content;
    position: relative;

    .query-input {
    }

    .dropdown-menu-title {
      margin-left: 20px;
    }
  }
`;
