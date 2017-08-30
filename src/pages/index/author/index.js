import React, { Component } from 'react'

import styles from '../index.css'

class Author extends Component {
    render() {
        console.info(this.props.Mr_imgUrl)
        return (
            <div className={styles.authorWrap}>
                <div className={styles.author}>
                    <div className={styles.title}>
                        Mr. 小呆
                    </div>
                    <div>
                        <img src={this.props.Mr_imgUrl} alt="" />
                    </div>
                </div>
                <div className={styles.author}>
                    <div className={styles.title}>
                        Mrs. 瓜哥
                    </div>
                    <div>
                        <img src={this.props.Mr_imgUrl} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Author