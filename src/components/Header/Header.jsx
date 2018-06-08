import React, { Component } from 'react';
import style from './Header.css';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163.4 132.8">
            <path d="M81.8 0a66.4 66.4 0 1 0 66.4 66.4A66.43 66.43 0 0 0 81.8 0m42.9 66.4a42.85 42.85 0 1 1-42.9-42.8 42.81 42.81 0 0 1 42.9 42.8" fill="#1c3e94"/>
            <path d="M0 53h163.4v26.9H0z" fill="#1c3e94"/>
          </svg>
        </div>
      </header>
    )
  }
}
