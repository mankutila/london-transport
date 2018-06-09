import React, { Component } from 'react';
import style from './SidebarLink.css';
import {capitalize} from '../../helpers/utils'
import { connect } from 'react-redux'
import { setTab } from '../../store/actions/tabActions'

class SidebarLinkComponent extends Component {
  render() {
    const {type, changeTab} = this.props;
    return (
      <li
        className={`${style['sibebar-link']} ${style[type]}`}
        onClick={() => {changeTab(type)}}
      >
        {capitalize(type)}
      </li>
    )
  }
}

const mapStateToProps = (state) => ({
  currentTab: state.currentTab
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: tab => {
      dispatch(setTab(tab));
    }
  }
};

export const SidebarLink = connect(mapStateToProps, mapDispatchToProps)(SidebarLinkComponent);
