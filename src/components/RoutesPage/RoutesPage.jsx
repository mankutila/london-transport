import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchLinesWithRoutes } from '../../helpers/fetchUtils';
import { capitalize } from '../../helpers/utils';
import { Loading } from '../Loading/Loading';
import { Lines } from '../Lines/Lines';

class RoutesPageComponent extends Component {
  state = {
    data: [],
    loading: true,
    error: null
  }

  componentDidMount () {
    try {
      this.fetchData(this.props.currentTab);
      this.setState({ loading: false });
    } catch (e) {
      this.setState({ error: 'Loading error occured' });
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.currentTab !== nextProps.currentTab) {
      try {
        this.fetchData(nextProps.currentTab);
        this.setState({ loading: false });
      } catch (e) {
        this.setState({ error: 'Loading error occured' });
      }
    }
  }

  async fetchData (tab) {
    this.setState({ data: await fetchLinesWithRoutes(tab) });
  }

  render () {
    return (
      <section>
        <h1>{capitalize(this.props.currentTab)}</h1>
        {this.state.loading ? <Loading /> : <Lines data={this.state.data}/>}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currentTab: state.currentTab
});

export const RoutesPage = connect(mapStateToProps)(RoutesPageComponent);

RoutesPageComponent.propTypes = {
  currentTab: PropTypes.string
};
