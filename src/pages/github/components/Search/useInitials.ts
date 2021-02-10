import get from 'lodash/get';
import { useSelector } from 'react-redux';
import { RootStore } from '@redux/store';

interface UseInitialsHook {
  initialQuery: string;
  initialType: string;
}

const useInitials = (options: string[]): UseInitialsHook => {
  const data = useSelector((state: RootStore) => state.search);
  const initialQuery = get(data, 'data.query', '');
  const initialType = get(data, 'data.type', options[0]);

  return {
    initialQuery,
    initialType,
  };
};

export default useInitials;
