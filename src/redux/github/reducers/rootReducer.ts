import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['search'],
};

const rootReducer = combineReducers({
  search: searchReducer,
});

export default persistReducer(persistConfig, rootReducer);
