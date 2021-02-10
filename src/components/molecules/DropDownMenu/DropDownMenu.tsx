import React, { useState, useCallback } from 'react';

type ContextProps = {
  opened: boolean;
  toggle: () => void;
  onChange: (val: string) => void;
  selected: string;
  options: string[];
};
export const DropDownMenuContext = React.createContext<ContextProps>({
  opened: false,
  toggle: () => null,
  onChange: (val: string) => null,
  selected: '',
  options: [''],
});

interface DropDownMenuInterface {
  children: React.ReactElement[];
  options: string[];
  onDropDownChange: (val: string) => void;
  className?: string;
  defaultValue: string;
}

const DropDownMenu: React.FunctionComponent<DropDownMenuInterface> = ({
  children,
  options,
  onDropDownChange,
  defaultValue,
}) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(defaultValue || options[0]);

  const toggle = useCallback(() => {
    setOpened(v => !v);
  }, [setOpened]);

  const onChange = useCallback(
    label => {
      setSelected(label);
      onDropDownChange(label);
      toggle();
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
