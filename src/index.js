import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './components/Layout/Layout';
import './index.css';

const App = () => {
  return <Layout />;
};

ReactDOM.render(<App />, document.getElementById('app'));
