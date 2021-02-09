import React, { useCallback } from 'react';
import { Icon } from '../../../../components/icons';
import {
  DropDownMenu,
  MenuContent,
  MenuTitle,
} from '../../../../components/molecules/DropDownMenu';

import { SearchInput } from '../../../../components/atoms';

import withStyle from './withStyle';
import useSearch from './useSearch';

interface SearchProps {
  className?: string;
}

const Search: React.FunctionComponent<SearchProps> = ({ className }) => {
  const { onQueryChange, setType, options } = useSearch();

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
        <SearchInput
          placeholder='Start typing to search...'
          onChange={onQueryChange}
          className='query-input'
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
