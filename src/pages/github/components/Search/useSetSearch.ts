import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import { search } from '../../../../redux/github/actions';

const options = ['users', 'repositories'];
const getType = (type: string) => {
  if (type === 'repositories') return 'repositories';
  return 'users';
};

const useSetSearch = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState(options[0]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.length > 2) {
      dispatch(search({ type: getType(type), query }));
    }
  }, [dispatch, query, type]);

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

export default useSetSearch;
