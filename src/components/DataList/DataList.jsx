import React, { Component } from 'react';
import style from './DataList.css';
import {connect} from 'react-redux';
import {setTab} from '../../store/actions/tabActions';
import { fetchLinesWithRoutes } from '../../helpers/fetchUtils'

import {APP_ID, APP_KEY} from '../../app-data'

class DataListComponent extends Component {
  state = {
    data: [],
    loading: true,
    error: null
  }

  componentDidMount() {
    try {
      this.fetchData(this.props.currentTab);
      this.setState({loading: false})
    } catch (e) {
      this.setState({error: 'Loading error occured'})
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentTab !== nextProps.currentTab) {
      try {
        this.fetchData(nextProps.currentTab);
        this.setState({loading: false})
      } catch (e) {
        this.setState({error: 'Loading error occured'})
      }
    }
  }

  async fetchData(tab) {
    this.setState({data: await fetchLinesWithRoutes(tab)});
  }

  render() {
    return (
      <section>
        {this.state.loading ? 'Loading...' : ''}

        {this.state.data.map((item, index) => <p key={index}>{item.name}</p>)}
      </section>

    );
  }
}

const mapStateToProps = (state) => ({
  currentTab: state.currentTab
});

export const DataList = connect(mapStateToProps)(DataListComponent);
