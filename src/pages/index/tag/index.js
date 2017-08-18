import React, { Component } from 'react'

import styles from '../index.css'

class Tag extends Component {
    render() {
        return (
            <div className={styles.tagWrap}>
                <div className={styles.title}>
                    标签
                </div>
                <div className={styles.tagCnt}>
                    <div className={styles.classifyTitle}>
                        后端相关
                    </div>
                    <div className={styles.classifyCnt}>
                        <div className={styles.tag}>
                            HTML
                        </div>
                        <div className={styles.tag}>
                            CSS
                        </div>
                    </div>
                </div>
                <div className={styles.tagCnt}>
                    <div className={styles.classifyTitle}>
                        后端相关
                    </div>
                    <div className={styles.classifyCnt}>
                        <div className={styles.tag}>
                            HTML
                        </div>
                        <div className={styles.tag}>
                            CSS
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tag