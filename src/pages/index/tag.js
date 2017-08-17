import React, { Component } from 'react'

import styles from './index.css'

class Tag extends Component {
    render() {
        return (
            <div className={styles.tagWrap}>
                <div className={styles.title}>
                    标签
                </div>
                tag
            </div>
        )
    }
}
export default Tag