import React, { Component } from 'react';
import style from './Sidebar.css';
import { SidebarLink } from '../SidebarLink/SidebarLink'

export class Sidebar extends Component {
  render() {
    return (
      <nav className={style.nav}>
        <ul>
          <SidebarLink type="bus" />
          <SidebarLink type="tube" />
          <SidebarLink type="river" />
        </ul>
      </nav>
    )
  }
}
