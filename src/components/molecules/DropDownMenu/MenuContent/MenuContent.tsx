import React, { useContext } from 'react';
import { DropDownMenuContext } from '../DropDownMenu';
import MenuContentWrapper from './MenuContentWrapper';

interface MenuContentI {
  className?: string;
}

const MenuContent = ({ className }: MenuContentI) => {
  const { opened, onChange, options } = useContext(DropDownMenuContext);

  return opened ? (
    <MenuContentWrapper className={`${className || ''} ${opened ? 'opened' : ''}`}>
      {options.map(label => (
        <button key={label} onClick={() => onChange(label)}>
          {label}
        </button>
      ))}
    </MenuContentWrapper>
  ) : null;
};

export default MenuContent;
