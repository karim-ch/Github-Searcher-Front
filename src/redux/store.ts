import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

export const githubStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistedGithubStore = persistStore(githubStore);
export type RootStore = ReturnType<typeof rootReducer>;
