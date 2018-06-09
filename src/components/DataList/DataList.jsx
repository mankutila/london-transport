import React, { Component } from 'react';
import style from './DataList.css';
import {connect} from 'react-redux';
import {setTab} from '../../store/actions/tabActions';

class DataListComponent extends Component {

  render() {
    return (

        <h1>{this.props.currentTab}</h1>


    )
  }
}

const mapStateToProps = (state) => ({
  currentTab: state.currentTab
});

export const DataList = connect(mapStateToProps)(DataListComponent);