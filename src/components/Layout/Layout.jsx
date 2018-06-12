import React from 'react';
import { Header } from '../Header/Header';
import { Body } from '../Body/Body';
import { Footer } from '../Footer/Footer';
import { Sidebar } from '../Sidebar/Sidebar';

import style from './Layout.css';


export const Layout = (props) => {
  return (
    <div className={style.layout}>
      <Header />
      <Sidebar />
      <Body body={props.body} />
      <Footer />
    </div>
  );
};
