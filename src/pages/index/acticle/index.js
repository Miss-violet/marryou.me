import React, { Component } from 'react'

import Search from './search'
import ActileList from './acticleList'

import styles from '../index.css'

class Acticle extends Component {
    render() {
        return (
            <div className={styles.acticleWrap}>
                <div className={styles.switchTag}>
                    <div className={styles.title}>
                        最近
                    </div>
                    <div className={styles.title}>
                        最热
                    </div>
                </div>
                <Search />
                <ActileList />
            </div>
        )
    }
}
export default Acticle