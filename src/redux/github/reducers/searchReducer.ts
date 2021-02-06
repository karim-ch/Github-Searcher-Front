import {
  SEARCH_FAIL,
  SEARCH_LOADING,
  SEARCH_SUCCESS,
  SearchDispatchTypes,
  SearchType,
} from '../actions';

interface DefaultStateI {
  loading: boolean;
  search?: SearchType;
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
    default:
      return state;
  }
};

export default searchReducer;
