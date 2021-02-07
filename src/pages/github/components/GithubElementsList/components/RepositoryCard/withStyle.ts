import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const StyledComponent = (component: React.ComponentProps<any>) => styled(component)`
  display: flex;
  flex-direction: column;
  height: 100%;

  .repository-title {
    height: 20%;
    padding: 4% 10%;
    display: flex;
    justify-content: space-between;

    .link {
      text-decoration: none;
      color: ${themeGet('colors.blue')};
    }

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

    .details {
      text-align: left;
      font-size: 0.9rem;
    }

    .title {
      padding-bottom: 20px;
      font-weight: bold;
    }
  }

  em {
    font-weight: bold;
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
        content: '▹';
        position: absolute;
        left: 0;
        color: ${themeGet('colors.blue')};
        line-height: 12px;
      }
    }
  }
`;

export default StyledComponent;
