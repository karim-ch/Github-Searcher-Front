import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import { clear, search, SearchType } from '../../../../redux/github/actions';
import useInitials from './useInitials';

const options = Object.keys(SearchType).map(v => v);

const getType = (type: string): SearchType => {
  if (type === 'repositories') return SearchType[SearchType.repositories];
  return SearchType[SearchType.users];
};

// TODO: hooks types
const useSearch = () => {
  const dispatch = useDispatch();
  const { initialType, initialQuery } = useInitials(options);
  const [type, setType] = useState(initialType);
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    if (query.length <= 2) {
      dispatch(clear());
    } else if (type !== initialType && initialQuery.length > 2) {
      dispatch(search({ type: getType(type), query: initialQuery }));
    } else if (debouncedQuery.length > 2) {
      dispatch(search({ type: getType(type), query: debouncedQuery }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery, type]);

  const makeDebounce = debounce(q => setDebouncedQuery(q), 1000);
  /* eslint-disable react-hooks/exhaustive-deps */
  const debounceRequest = useCallback(value => makeDebounce(value), []);

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debounceRequest(event.target.value);
    setQuery(event.target.value);
  };

  return {
    setType,
    onQueryChange,
    options,
    defaultQuery: query,
    defaultType: type,
  };
};

export default useSearch;
