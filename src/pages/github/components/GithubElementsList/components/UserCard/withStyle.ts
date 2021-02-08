import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const StyledComponent = (component: React.ComponentProps<any>) => styled(component)`
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
    padding: 6%;
    text-align: left;

    .bio {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
  }

  em {
    font-weight: bold;
  }
`;

export default StyledComponent;
