import React, { Component } from 'react';
import header from './header.module.css';
import describe from './describe.module.css';
import logo from './logo.svg'; // 107 px * 70 px image svg
import describeLogo from './describeLogo.png';
import downPageBtn from './downPageBtn.png';

class App extends Component {
  render() {
    return (
      <div className={header.mainInner}>
        <div className={header.inner}>
          <ul className={header.mainNav}>
            <li className={header.logo}>
              <img src={logo}></img>
            </li>
            <li className={header.description}>
              <a className={header.text}>설명</a>
            </li>
            <li className={header.vision}>
              <a className={header.text}>목표</a>
            </li>
            <li className={header.appDownload}>
              <a className={header.text}>앱 다운로드</a>
            </li>
          </ul>
        </div>
        <div className={describe.inner}>
          <div className={describe.content}>
            <img className={describe.logo} src={describeLogo}></img>
            <div className={describe.text}>
              <div className={describe.textBox}>
                <a>서로가 행복한 My Pet 프로젝트</a>
                <br/> 
                <a>우리의 목표를 따라와볼래요?</a>
              </div>
              <div className={describe.textBox}>
                <a>서로가 행복한 My Pet 프로젝트</a>
                <br/> 
                <a>우리의 목표를 따라와볼래요?</a>
              </div>
            </div>
          </div>
          <div className={describe.pageDownButton}>
            <img id='downPage' src={downPageBtn}></img>
          </div>
        </div>
      </div>
    );
  }
}

document.getElementById('downPage', function () {
  
});

export default App