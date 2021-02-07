import React from 'react';
import { IconGitHub, IconFolder } from '../../components/icons';

interface IconProps {
  name: string;
}

const Icon = ({ name }: IconProps) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Folder':
      return <IconFolder />;

    default:
      return <IconGitHub />;
  }
};

export default Icon;
