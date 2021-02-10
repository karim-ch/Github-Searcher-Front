import React from 'react';
import IconGitHub from './github';
import IconFolder from './folder';
import IconArrow from './arrow';
import Star from './star';
import Checked from './checked';
import Pen from './pen';
import Issue from './issue';
import Language from './language';
import Company from './company';

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
