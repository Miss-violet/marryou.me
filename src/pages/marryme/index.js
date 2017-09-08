import React, { Component } from 'react'

import Form from './form'
import PicList from './picList'
import Tools from './tools'

import styles from './styles/index.css'


class Marryme extends Component {
    constructor() {
        super()
        this.state = {
            showTools: false,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    /* 滚动事件 */
    handleScroll(e) {
        let scrollTop = document.body.scrollTop
        if (scrollTop > 700 && !this.state.showTools) {
            this.setState({
                showTools: true
            })
        }
        else if (scrollTop <= 700 && this.state.showTools) {
            this.setState({
                showTools: false
            })
        }
    }
    render() {
        return (
            <div className={styles.pageWrap}>
                <Form />
                <PicList />
                {
                    this.state.showTools && <Tools />
                }
            </div>
        )
    }
}
export default Marryme