import React from 'react';
import {
  IconGitHub,
  IconFolder,
  IconArrow,
  Star,
  Checked,
  Pen,
  Issue,
  Language,
  Company,
} from '../../components/icons';

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Folder':
      return <IconFolder />;
    case 'Arrow':
      return <IconArrow />;
    case 'Star':
      return <Star />;
    case 'Checked':
      return <Checked />;
    case 'Pen':
      return <Pen />;
    case 'Issue':
      return <Issue />;
    case 'Language':
      return <Language />;
    case 'Company':
      return <Company />;

    default:
      return <IconGitHub />;
  }
};

export default Icon;
