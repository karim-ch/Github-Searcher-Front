import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import { clear, search, SearchType } from '../../../../redux/github/actions';

const options = ['users', 'repositories'];
// TODO Map enum to array of strings

const getType = (type: string): SearchType => {
  if (type === 'repositories') return SearchType[SearchType.repositories];
  return SearchType[SearchType.users];
};

const useSearch = () => {
  // TODO: hooks types
  const dispatch = useDispatch();
  const [type, setType] = useState(options[0]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.length > 2) {
      dispatch(search({ type: getType(type), query }));
      return;
    }
    dispatch(clear());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, type]);

  const makeDebounce = debounce(q => setQuery(q), 1000);
  /* eslint-disable react-hooks/exhaustive-deps */
  const debounceRequest = useCallback(value => makeDebounce(value), []);

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debounceRequest(event.target.value);
  };

  return {
    setType,
    onQueryChange,
    options,
  };
};

export default useSearch;
