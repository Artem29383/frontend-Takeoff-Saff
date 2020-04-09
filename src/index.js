import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './styles';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/store';

ReactDOM.render(
  <Provider store={store}>
  <ConnectedRouter history={history}>
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
  </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
