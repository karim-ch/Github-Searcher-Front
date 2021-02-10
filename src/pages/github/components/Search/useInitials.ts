import get from 'lodash/get';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../../redux/store';

const useInitials = (options: string[]) => {
  const data = useSelector((state: RootStore) => state.search);
  const initialQuery = get(data, 'data.query', '');
  const initialType = get(data, 'data.type', options[0]);

  return {
    initialQuery,
    initialType,
  };
};

export default useInitials;
