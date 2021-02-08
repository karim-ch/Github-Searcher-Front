import { Dispatch } from 'redux';
import { CLEAR_SEARCH, SearchDispatchTypes } from './SearchActionTypes';

const clear = () => async (dispatch: Dispatch<SearchDispatchTypes>) => {
  dispatch({ type: CLEAR_SEARCH });
};

export default clear;
