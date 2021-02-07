import React, { useCallback } from 'react';
import { Icon } from '../../../../components/icons';
import {
  DropDownMenu,
  MenuContent,
  MenuTitle,
} from '../../../../components/molecules/DropDownMenu';
import withStyle from './withStyle';
import useSetSearch from './useSetSearch';

interface SearchProps {
  className?: string;
}

const Search: React.FunctionComponent<SearchProps> = ({ className }) => {
  const { onQueryChange, setType, options } = useSetSearch();

  const onDropDownChange = useCallback(
    (val: string) => {
      setType(val);
    },
    [setType],
  );

  return (
    <div className={className}>
      <div className='search-header'>
        <Icon name='GitHub' />
        <div>
          <h1>Github Searcher</h1>
          <h6>Search users or repositories below</h6>
        </div>
      </div>
      <div className='search-inputs'>
        <input
          className='query-input'
          onChange={onQueryChange}
          placeholder='Start typing to search...'
        />
        <DropDownMenu options={options} onDropDownChange={onDropDownChange}>
          <MenuTitle>
            {({ selected, toggle }) => (
              <button className='dropdown-menu-title' onClick={toggle}>
                {selected}
              </button>
            )}
          </MenuTitle>
          <MenuContent />
        </DropDownMenu>
      </div>
    </div>
  );
};

export default withStyle(Search);
