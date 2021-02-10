import { useSelector } from 'react-redux';
import get from 'lodash/get';
import { Error, GithubSearch } from '@redux/github/actions';
import { getSearchState } from '@redux/github/selectors';

interface UseSearchResult {
  items: GithubSearch['items'];
  loading: boolean;
  error?: Error;
  type: string;
}

const useSearchResult = (): UseSearchResult => {
  const data = useSelector(getSearchState);
  const items = get(data, 'data.items');
  const loading = get(data, 'loading', false);
  const error = get(data, 'error');

  const type = get(items, '[0].type');

  return {
    items,
    loading,
    error,
    type,
  };
};

export default useSearchResult;
