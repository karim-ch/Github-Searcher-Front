import {
  CLEAR_SEARCH,
  SEARCH_FAIL,
  SEARCH_LOADING,
  SEARCH_SUCCESS,
  SearchDispatchTypes,
  GithubSearch,
  Error,
} from '@redux/github/actions';

interface DefaultStateInterface {
  loading: boolean;
  data?: GithubSearch;
  error?: Error;
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
        data: action.payload,
      };
    case CLEAR_SEARCH:
      return defaultState;

    default:
      return state;
  }
};

export default searchReducer;
