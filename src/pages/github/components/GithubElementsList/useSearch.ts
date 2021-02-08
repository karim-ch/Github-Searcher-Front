import { useSelector } from 'react-redux';
import get from 'lodash/get';
import { RootStore } from '../../../../redux/store';

const useSearch = () => {
  const data = useSelector((state: RootStore) => state.search);
  const items = get(data, 'search.items');
  const loading = get(data, 'loading', false);
  const error = get(data, 'error', null);

  return {
    items,
    loading,
    error,
  };
};

export default useSearch;
