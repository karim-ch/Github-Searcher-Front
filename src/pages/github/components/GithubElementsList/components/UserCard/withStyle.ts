import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const StyledComponent = (component: React.ComponentProps<any>) => styled(component)`
  display: flex;
  flex-direction: column;
  height: 100%;

  em {
    font-weight: bold;
  }

  .link {
    text-decoration: none;
    color: ${themeGet('colors.black')};
  }

  .user-title {
    height: 20%;
    padding: 4% 10%;
    display: flex;
    justify-content: space-between;

    svg {
      width: 30px;
      height: 30px;
      &:hover {
        color: ${themeGet('colors.darkBlue')};
      }
    }
  }

  .user-body {
    height: 60%;
    padding: 5% 10%;

    .title {
      padding-bottom: 20px;
      font-weight: bold;
    }

    img {
      width: 30%;
      border-radius: 50%;
    }
  }

  .user-footer {
    display: flex;
    overflow: hidden;
    list-style: none;
    justify-content: space-between;
    padding: 0 10%;
  }
`;

export default StyledComponent;
