import { AxiosError } from 'axios';
import {
  CLEAR_SEARCH,
  SEARCH_FAIL,
  SEARCH_LOADING,
  SEARCH_SUCCESS,
  SearchDispatchTypes,
  GithubSearch,
} from '../actions';

interface DefaultStateInterface {
  loading: boolean;
  search?: GithubSearch;
  error?: AxiosError;
}

const defaultState: DefaultStateInterface = {
  loading: false,
};

const searchReducer = (
  state: DefaultStateInterface = defaultState,
  action: SearchDispatchTypes,
): DefaultStateInterface => {
  switch (action.type) {
    case SEARCH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case SEARCH_LOADING:
      return {
        loading: true,
      };
    case SEARCH_SUCCESS:
      return {
        loading: false,
        search: action.payload,
      };
    case CLEAR_SEARCH:
      return defaultState;

    default:
      return state;
  }
};

export default searchReducer;
