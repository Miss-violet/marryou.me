import React, { Component } from 'react'

import Form from './form'
import PicList from './picList'
import Tools from './tools'

import styles from './styles/index.css'


class Marryme extends Component {
    render() {
        return (
            <div className={styles.pageWrap}>
                <Form />
                <PicList />
                <Tools />
            </div>
        )
    }
}
export default Marryme