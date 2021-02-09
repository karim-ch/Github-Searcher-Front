import React, { useContext } from 'react';
import { DropDownMenuContext } from '../DropDownMenu';
import OutsideClickHandler from 'react-outside-click-handler';
import MenuContentWrapper from './MenuContentWrapper';

interface MenuContentInterface {
  className?: string;
}

const MenuContent: React.FunctionComponent<MenuContentInterface> = ({ className }) => {
  const { opened, onChange, options, toggle } = useContext(DropDownMenuContext);

  return opened ? (
    <OutsideClickHandler onOutsideClick={toggle}>
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
