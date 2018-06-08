import React, { Component } from 'react';
import {Header } from '../Header/Header';
import {Body} from '../Body/Body';
import {Footer} from '../Footer/Footer';
import {Sidebar} from '../Sidebar/Sidebar';

import style from './Layout.css';

import {APP_ID, APP_KEY} from '../../app-data'

export const Layout = () => {
   return (
     <div className="page-wrapper">
       <Header />
       <Sidebar />
       <Body />
       <Footer />
     </div>
   )
}
