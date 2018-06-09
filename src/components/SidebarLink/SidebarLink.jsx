import React, { Component } from 'react';
import style from './SidebarLink.css';
import {capitalize} from '../../helpers/utils'

export class SidebarLink extends Component {
  render() {
    const {type} = this.props;
    return (
      <li className={`${style['sibebar-link']} ${style[type]}`}>
        {capitalize(type)}
      </li>
    )
  }
}
