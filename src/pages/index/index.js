import React, { Component } from 'react'
import Logo from '../../components/logo'

import Tag from './tag.js'
import Acticle from './acticle.js'
import Author from './author.js'

import styles from './index.css'

class Header extends Component {
  render() {
    return (
      <div>
        <Logo />
        <div className={styles.indexWrap}>
          <Tag />
          <Acticle />
          <Author />
        </div>
      </div>
    );
  }
}

export default Header;