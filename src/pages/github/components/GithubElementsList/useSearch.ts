import { useSelector } from 'react-redux';
import { RootStore } from '../../../../redux/github/store';

const useSearch = () => {
  const data = useSelector((state: RootStore) => state.search);
  return {
    data,
  };
};

export default useSearch;
