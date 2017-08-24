import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Index from './pages/index';
import './assets/styles/grid.css'
import styles from './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className={styles.header}>
            <div className={styles.linksWrap}>
              <div className={styles.links}>
                <Link to="/index" className={styles.link}> 首页 </Link>
                <Link to="/marryme" className={styles.link}> 我们结婚了 </Link>
                <Link to="/abc1" className={styles.link}> 小呆专区 </Link>
                <Link to="/abc2" className={styles.link}> 瓜哥专区 </Link>
                <Link to="/abc3" className={styles.link}> 游记攻略 </Link>
                <Link to="/about" className={styles.link}> 关于我们 </Link>
              </div>
              <div className={styles.flag}>
                <div className={styles.flagText}>Hello World</div>
              </div>
            </div>
          </div>
          <Route path="/index" component={Index} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
