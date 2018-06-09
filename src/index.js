import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Layout } from './components/Layout/Layout';
import { store } from './store/store';
import './index.css';
import { setTab } from './store/actions/tabActions'

const App = () => {
  return <Layout />;
};

store.dispatch(setTab('bus'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
