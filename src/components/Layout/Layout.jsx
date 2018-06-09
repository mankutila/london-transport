import React, { Component } from 'react';
import {Header } from '../Header/Header';
import {Body} from '../Body/Body';
import {Footer} from '../Footer/Footer';
import {Sidebar} from '../Sidebar/Sidebar';

import style from './Layout.css';


export const Layout = () => {
   return (
     <div className={style.layout}>
       <Header />
       <Sidebar />
       <Body />
       <Footer />
     </div>
   )
}
