import React, { Component } from 'react'
import Logo from '../../components/logo'

import styles from './index.css'

import Tag from './tag'
import Acticle from './acticle'
import Author from './author'


class Index extends Component {
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

export default Index;