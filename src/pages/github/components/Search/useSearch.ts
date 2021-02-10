import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import { clear, search, SearchType } from '@redux/github/actions';
import useInitials from './useInitials';

interface UseSearchHook {
  setType: (value: string | ((prevState: string) => string)) => void;
  onQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: string[];
  defaultQuery: string;
  defaultType: string;
}

const options = Object.keys(SearchType);
const getType = (type: string): SearchType => {
  if (type === 'repositories') return SearchType[SearchType.repositories];
  return SearchType[SearchType.users];
};

const useSearch = (): UseSearchHook => {
  const dispatch = useDispatch();
  const { initialType, initialQuery } = useInitials(options);
  const [type, setType] = useState<string>(initialType);
  const [query, setQuery] = useState<string>(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');

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
  /* eslinsett-disable react-hooks/exhaustive-deps */
  const debounceRequest = useCallback(value => makeDebounce(value), [makeDebounce]);

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
