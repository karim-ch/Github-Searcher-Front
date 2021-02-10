import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Component = (component: React.ComponentProps<any>): StyledComponent<any, any> => styled(
  component,
)`
  display: flex;
  flex-direction: column;
  height: 100%;

  .link {
    text-decoration: none;
    color: ${themeGet('colors.black')};
  }

  .user-header {
    height: 35%;
    display: flex;
    flex-direction: row;
    padding: 4%;
    img {
      height: 75px;
      border-radius: 50%;
    }

    .user-heading {
      margin-left: 5%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;

      .login {
        font-weight: bold;
      }
    }
  }

  .user-body {
    padding: 3% 6% 7% 6%;
    text-align: left;

    .bio {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
  }

  svg {
    width: 14px;
    height: 14px;
    margin-right: 6px;
  }

  em {
    font-weight: bold;
  }
`;

export default Component;
