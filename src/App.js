import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Index from './pages/index';
import Marryme from './pages/marryme'

import './assets/styles/grid.css'
import styles from './App.css'

class App extends Component {
    render() {
        const Links = () => (
            <nav className={styles.links}>
                <NavLink
                    to="/"
                    className={styles.link}
                    activeClassName={styles.crtLink}
                    exact
                    >
                    首页
                </NavLink>
                <NavLink
                    to="/marryme"
                    className={styles.link}
                    activeClassName={styles.crtLink}
                    >
                    我们结婚了
                </NavLink>
                <NavLink
                    to="/abc1"
                    className={styles.link}
                    activeClassName={styles.crtLink}
                    >
                    小呆专区
                </NavLink>
                <NavLink
                    to="/abc2"
                    className={styles.link}
                    activeClassName={styles.crtLink}
                    >
                    瓜哥专区
                </NavLink>
                <NavLink
                    to="/abc3"
                    className={styles.link}
                    activeClassName={styles.crtLink}
                    >
                    游记攻略
                </NavLink>
                <NavLink
                    to="/about"
                    className={styles.link}
                    activeClassName={styles.crtLink}
                    >
                    关于我们
                </NavLink>
            </nav>
        )
        return (
            <BrowserRouter>
                <div>
                    <div className={styles.header}>
                        <div className={styles.linksWrap}>
                            <Links />
                            <div className={styles.flag}>
                                <div className={styles.flagText}>Hello World</div>
                            </div>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route path="/marryme" component={Marryme} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
