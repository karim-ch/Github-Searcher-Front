import React, { useCallback } from 'react';
import debounce from 'lodash/debounce';
import useSetSearch from './useSetSearch';
import withStyle from './withStyle';
import { Icon } from '../../../../components/icons';

interface SearchProps {
  className?: string;
}

const Search: React.FunctionComponent<SearchProps> = ({ className }) => {
  const { setQuery } = useSetSearch();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      debounce(setQuery, 1000)(event.target.value);
    },
    [setQuery],
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
        <input onChange={handleChange} placeholder='Start typing to search...' />
      </div>
    </div>
  );
};

export default withStyle(Search);
