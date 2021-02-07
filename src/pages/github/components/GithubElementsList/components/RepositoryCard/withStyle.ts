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
    height: 60%;
    padding: 5% 10%;

    .description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      -webkit-box-orient: vertical;
    }

    .details {
      text-align: left;
      font-size: 0.9rem;
    }

    .title {
      padding-bottom: 20px;
      font-weight: bold;
    }
  }

  .repository-footer {
    display: flex;
    overflow: hidden;
    list-style: none;
    justify-content: space-between;
    padding: 0 10%;

    li {
      position: relative;
      padding-left: 15px;

      &:before {
        content: '✔';
        position: absolute;
        left: 0;
        color: ${themeGet('colors.darkBlue')};
        padding-right: 4px;
      }
    }

    .issues {
      &:before {
        content: '⚑';
      }
    }

    .stars {
      &:before {
        content: '★';
      }
    }
  }
`;

export default StyledComponent;
