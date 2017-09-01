import React, { Component } from 'react'
import Logo from '../../components/logo'

import styles from './index.css'

import Tag from './tag'
import Acticle from './acticle'
import Author from './author'

/* mock数据 */
import indexData from '../../mock/index.js'
const tagList = indexData.data.tagList
const acticleList = indexData.data.acticleList
const authorList = indexData.data.authorList

class Index extends Component {
  render() {
    return (
      <div>
        <Logo />
        <div className={styles.indexWrap}>
          <Tag {...tagList} />
          <Acticle {...acticleList} />
          <Author {...authorList} />
        </div>
      </div>
    );
  }
}

export default Index;