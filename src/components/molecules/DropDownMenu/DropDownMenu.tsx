import React, { useState, useCallback } from 'react';

export const DropDownMenuContext = React.createContext({
  opened: false,
  toggle: () => null,
  onChange: (val: string) => null,
  selected: '',
  options: [''],
});

interface DropDownMenuI {
  children: React.ReactElement[];
  options: string[];
  onDropDownChange: (val: string) => void;
  className?: string;
}

const DropDownMenu = ({ children, options, onDropDownChange }: DropDownMenuI) => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const toggle = useCallback(() => {
    setOpened(v => !v);
    return null;
  }, [setOpened]);

  const onChange = useCallback(
    label => {
      setSelected(label);
      onDropDownChange(label);
      toggle();
      return null;
    },
    [onDropDownChange, toggle],
  );

  return (
    <DropDownMenuContext.Provider value={{ opened, toggle, selected, onChange, options }}>
      {children}
    </DropDownMenuContext.Provider>
  );
};

export default DropDownMenu;
