import React, { Component } from 'react';
import style from './App.module.css';
import logo from './logo.svg'; // 107 px * 70 px image svg

class App extends Component {
  render() {
    return (
      <div className={style.mainInner}>
        <div className={style.header}>
          <ul className={style.mainbar}>
            <li className={style.logo}>
              <img src={logo}></img>
            </li>
            <li className={style.description}>
              <a className={style.text}>설명</a>
            </li>
            <li className={style.vision}>
              <a className={style.text}>목표</a>
            </li>
            <li className={style.appDownload}>
              <a className={style.text}>앱 다운로드</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App