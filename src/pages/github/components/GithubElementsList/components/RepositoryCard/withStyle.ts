import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Component = (component: React.ComponentProps<any>): StyledComponent<any, any> => styled(
  component,
)`
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

  .repository-title {
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

  .repository-body {
    height: 80%;
    padding: 3% 6% 7% 6%;
    text-align: left;

    svg {
      width: 14px;
      height: 14px;
      margin-right: 6px;
    }

    .description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
    .title {
      padding-bottom: 20px;
      font-weight: bold;
    }
  }
`;

export default Component;
