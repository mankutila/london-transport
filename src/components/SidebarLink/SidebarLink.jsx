import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { capitalize } from '../../helpers/utils';
import { setTab } from '../../store/actions/actions';
import style from './SidebarLink.css';

class SidebarLinkComponent extends Component {
  render () {
    const { type, changeTab } = this.props;
    return (
      <li className={`${style['sibebar-link']} ${style[type]}`} onClick={(e) => {e.preventDefault(); changeTab(type);}}>
        <Link to="/">{capitalize(type)}</Link>
      </li>
    );
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
  };
};

export const SidebarLink = connect(mapStateToProps, mapDispatchToProps)(SidebarLinkComponent);

connect.propTypes = {
  type: PropTypes.string,
  changeTab: PropTypes.function
};
