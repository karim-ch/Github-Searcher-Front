import {
  CLEAR_SEARCH,
  SEARCH_FAIL,
  SEARCH_LOADING,
  SEARCH_SUCCESS,
  SearchDispatchTypes,
  SearchType,
} from '../actions';

interface DefaultStateI {
  loading: boolean;
  search?: SearchType;
  error?: string;
}

const defaultState: DefaultStateI = {
  loading: false,
};

const searchReducer = (
  state: DefaultStateI = defaultState,
  action: SearchDispatchTypes,
): DefaultStateI => {
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
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default searchReducer;
