import React, { useContext } from 'react';
import isFunction from 'lodash/isFunction';
import { DropDownMenuContext } from '../DropDownMenu';

interface MenuTitleI {
  children: React.ReactElement | ((props: Props) => React.ReactElement);
}

interface Props {
  selected: string;
  toggle: () => null;
}

const MenuTitle = ({ children, ...rest }: MenuTitleI) => {
  const { toggle, selected } = useContext(DropDownMenuContext);

  return isFunction(children) ? (
    children({ selected, toggle })
  ) : (
    <div onClick={() => toggle()} {...rest}>
      {children}
    </div>
  );
};

export default MenuTitle;
