import React from 'react';
import { IconGitHub } from '../../components/icons';

interface IconProps {
  name: string;
}

const Icon = ({ name }: IconProps) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;

    default:
      return <IconGitHub />;
  }
};

export default Icon;
