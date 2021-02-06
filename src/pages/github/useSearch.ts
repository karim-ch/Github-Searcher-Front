import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../redux/github/store';
import { search } from '../../redux/github/actions';

const useSearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('kimos');
  const data = useSelector((state: RootStore) => state.search);

  useEffect(() => {
    if (query.length > 2) dispatch(search({ type: 'users', query }));
  }, [dispatch, query]);

  return {
    setQuery,
    data,
  };
};

export default useSearch;
