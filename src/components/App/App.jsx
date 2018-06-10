import React, {Component} from 'react';
import { Layout } from '../Layout/Layout';
import { DataList } from '../DataList/DataList';
import {SearchPage} from '../SearchPage/SearchPage'
import {StopPage} from '../StopPage/StopPage'
import {Switch, Route, withRouter} from 'react-router-dom';

const SearchView = () => {
  return <Layout body={<SearchPage />} />
}
const IndexView = () => {
  return <Layout body={<DataList />} />
}
const StopView = () => {
  return <Layout body={<StopPage />} />
}

class AppComponent extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={IndexView} />
        <Route exact path="/search" component={SearchView} />
        <Route exact path="/stop/:id" component={StopView} />
      </Switch>
    );
  }
}

export const App = withRouter(AppComponent);
