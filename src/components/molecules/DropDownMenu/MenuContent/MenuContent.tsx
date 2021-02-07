import React, { useContext } from 'react';
import { DropDownMenuContext } from '../DropDownMenu';
import OutsideClickHandler from 'react-outside-click-handler';
import MenuContentWrapper from './MenuContentWrapper';

interface MenuContentI {
  className?: string;
}

const MenuContent = ({ className }: MenuContentI) => {
  const { opened, onChange, options, toggle } = useContext(DropDownMenuContext);

  return opened ? (
    <OutsideClickHandler
      onOutsideClick={() => {
        toggle();
      }}
    >
      <MenuContentWrapper className={`${className || ''} ${opened ? 'opened' : ''}`}>
        {options.map(label => (
          <button key={label} onClick={() => onChange(label)}>
            {label}
          </button>
        ))}
      </MenuContentWrapper>
    </OutsideClickHandler>
  ) : null;
};

export default MenuContent;
