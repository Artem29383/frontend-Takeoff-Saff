import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { rootSaga } from './rootSaga';
import formReducer from './../models/form/reducer';

export const history = createBrowserHistory();
const saga = createSagaMiddleware();
const isDev = process.env.NODE_ENV === 'development';

const reducer = combineReducers({
  forms: formReducer,
  router: connectRouter(history),
});

const store = configureStore({
  reducer,
  middleware: [saga, routerMiddleware(history)],
  devTools: isDev,
});
saga.run(rootSaga);

export default store;
