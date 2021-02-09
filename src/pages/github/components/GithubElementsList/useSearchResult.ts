import { useSelector } from 'react-redux';
import get from 'lodash/get';
import { RootStore } from '../../../../redux/store';

const useSearchResult = () => {
  const data = useSelector((state: RootStore) => state.search);
  const items = get(data, 'search.items');
  const loading = get(data, 'loading', false);
  const error = get(data, 'error', null);

  const type = get(items, '[0].type');

  return {
    items,
    loading,
    error,
    type,
  };
};

export default useSearchResult;
