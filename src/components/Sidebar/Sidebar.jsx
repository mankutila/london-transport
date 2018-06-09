import React, { Component } from 'react';
import style from './Sidebar.css';
import { SidebarLink } from '../SidebarLink/SidebarLink'
import { SearchInput } from '../SearchInput/SearchInput';
import { searchStops } from '../../helpers/fetchUtils'

export class Sidebar extends Component {


  render() {
    return (
      <nav className={style.nav}>
        <SearchInput />
        <ul>
          <SidebarLink type="bus" />
          <SidebarLink type="tube" />
          <SidebarLink type="river-bus" />
        </ul>
      </nav>
    )
  }
}
