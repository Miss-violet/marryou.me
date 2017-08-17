import React, { Component } from 'react'

import styles from './index.css'

class Author extends Component {
    render() {
        return (
            <div className={styles.authorWrap}>
                <div className={styles.author}>
                    <div className={styles.title}>
                        Mr. 小呆
                    </div>
                </div>
                <div className={styles.author}>
                    <div className={styles.title}>
                        Mrs. 瓜哥
                    </div>
                </div>
            </div>
        )
    }
}
export default Author