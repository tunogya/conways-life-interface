import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import playgroundReducer from './playground';

const reducers = combineReducers({
  playground: playgroundReducer,
});

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export default store;