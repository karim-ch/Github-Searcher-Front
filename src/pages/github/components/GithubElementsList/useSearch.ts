import { useSelector } from 'react-redux';
import get from 'lodash/get';
import { RootStore } from '../../../../redux/store';

const useSearch = () => {
  const data = useSelector((state: RootStore) => state.search);
  const items = get(data, 'search.items', []);

  return {
    items,
  };
};

export default useSearch;
