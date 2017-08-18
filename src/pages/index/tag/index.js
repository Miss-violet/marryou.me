import React, { Component } from 'react'
import classnames from 'classnames'

import styles from '../index.css'
import tagStyles from './index.css'

class Tag extends Component {
    render() {

        const tagWrap = classnames({
            [styles.tagWrap]: true,
            [tagStyles.tagWrap]: true
        })

        return (
            <div className={tagWrap}>
                <div className={styles.title}>
                    标签
                </div>
                <div className={tagStyles.tagCnt}>
                    <div className={tagStyles.classifyTitle}>
                        后端相关
                    </div>
                    <div className={tagStyles.classifyCnt}>
                        <div className={tagStyles.tag}>
                            HTML
                        </div>
                        <div className={tagStyles.tag}>
                            CSS
                        </div>
                    </div>
                </div>
                <div className={tagStyles.tagCnt}>
                    <div className={tagStyles.classifyTitle}>
                        后端相关
                    </div>
                    <div className={tagStyles.classifyCnt}>
                        <div className={tagStyles.tag}>
                            HTML
                        </div>
                        <div className={tagStyles.tag}>
                            CSS
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tag