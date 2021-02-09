import { combineReducers } from 'redux';
import { searchReducer } from './github/reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['search'],
};

const rootReducer = combineReducers({
  search: searchReducer,
  // other reducers
});

export default persistReducer(persistConfig, rootReducer);
