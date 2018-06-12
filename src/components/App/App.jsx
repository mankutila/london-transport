import React, { Component } from 'react';
import { Layout } from '../Layout/Layout';
import { RoutesPage } from '../RoutesPage/RoutesPage';
import { SearchPage } from '../SearchPage/SearchPage';
import { StopPage } from '../StopPage/StopPage';
import { Switch, Route, withRouter } from 'react-router-dom';
import { LinePage } from '../LinePage/LinePage';

const SearchView = () => {
  return <Layout body={<SearchPage />} />;
};
const IndexView = () => {
  return <Layout body={<RoutesPage />} />;
};
const StopView = () => {
  return <Layout body={<StopPage />} />;
};
const LineView = () => {
  return <Layout body={<LinePage />} />;
};

class AppComponent extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={IndexView} />
        <Route exact path="/search" component={SearchView} />
        <Route exact path="/stop/:id" component={StopView} />
        <Route exact path="/line/:id" component={LineView} />
      </Switch>
    );
  }
}

export const App = withRouter(AppComponent);
