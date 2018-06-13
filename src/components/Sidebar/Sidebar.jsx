import React from 'react';
import style from './Sidebar.css';
import { SidebarLink } from '../SidebarLink/SidebarLink';
import { SearchInput } from '../SearchInput/SearchInput';

export const Sidebar = () => {
  return (
    <nav className={style.nav}>
      <SearchInput/>
      <ul>
        <SidebarLink type="bus"/>
        <SidebarLink type="tube"/>
        <SidebarLink type="river-bus"/>
      </ul>
    </nav>
  );
};
