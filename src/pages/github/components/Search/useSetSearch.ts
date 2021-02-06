import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../../../../redux/github/actions';

const useSetSearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.length > 2) dispatch(search({ type: 'users', query }));
  }, [dispatch, query]);

  return {
    setQuery,
  };
};

export default useSetSearch;
