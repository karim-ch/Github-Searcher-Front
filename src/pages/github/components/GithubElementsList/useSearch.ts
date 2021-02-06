import { useSelector } from 'react-redux';
import { RootStore } from '../../../../redux/store';

const useSearch = () => {
  const data = useSelector((state: RootStore) => state.search);
  return {
    data,
  };
};

export default useSearch;
