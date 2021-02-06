import React, { useCallback } from 'react';
import debounce from 'lodash/debounce';
import useSetSearch from './useSetSearch';
import withStyle from './withStyle';
import { Icon } from '../../../../components/icons';
import {
  DropDownMenu,
  MenuContent,
  MenuTitle,
} from '../../../../components/molecules/DropDownMenu';

interface SearchProps {
  className?: string;
}

const options = ['Users', 'Repositories'];

const Search: React.FunctionComponent<SearchProps> = ({ className }) => {
  const { setQuery } = useSetSearch();

  const handleTypeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      debounce(setQuery, 1000)(event.target.value);
    },
    [setQuery],
  );

  const onDropDownChange = (val: string) => console.log(val);

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
          onChange={handleTypeChange}
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
