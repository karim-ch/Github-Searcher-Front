import { Dispatch } from 'redux';
import axios from 'axios';
import {
  SearchDispatchTypes,
  SearchQuery,
  SEARCH_FAIL,
  SEARCH_LOADING,
  SEARCH_SUCCESS,
} from './SearchActionTypes';

const search = ({ type, query }: SearchQuery) => async (
  dispatch: Dispatch<SearchDispatchTypes>,
) => {
  try {
    dispatch({ type: SEARCH_LOADING });
    const { data } = await axios.post('http://localhost:7000/api/search', {
      type,
      query,
    });
    dispatch({ type: SEARCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SEARCH_FAIL });
  }
};

export default search;
