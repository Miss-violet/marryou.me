import React, { Component } from 'react'
import classnames from 'classnames'

import TagItem from './tagItem'

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
                <TagItem />
            </div>
        )
    }
}
export default Tag