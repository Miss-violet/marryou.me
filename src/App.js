import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Index from './pages/index';
import styles from './App.less'
//import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className={styles.header}>
            <Link to="/index"> 首页 </Link>
            <Link to="/marryme"> 结婚页 </Link>
            <Link to="/abc1"> 小呆专区 </Link>
            <Link to="/abc2"> 瓜哥专区 </Link>
            <Link to="/about"> 关于我们 </Link>
          </div>
          <Route path="/index" component={Index} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
