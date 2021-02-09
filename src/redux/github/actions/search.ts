import { Dispatch } from 'redux';
import githubSearcherClient from '../../../utils/client';
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
    const { data } = await githubSearcherClient.post('/api/search', {
      type,
      query,
    });
    dispatch({ type: SEARCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SEARCH_FAIL, payload: error });
  }
};

export default search;
