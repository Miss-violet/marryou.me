import React, { Component } from 'react'

import Search from './search'
import ActileList from './acticleList'

import classnames from 'classnames'
import acticleStyles from '../index.css'

class Acticle extends Component {
    constructor() {
        super()
        this.state = {
            sortRecent: true,
            sortHot: false,
        }
    }
    handleSort = (sort) => {
        if (sort === 'recent' && !this.state.sortRecent) {
            this.setState({
                sortRecent: !this.state.sortRecent,
                sortHot: !this.state.sortHot,
            })
        }
        if (sort === 'hot' && !this.state.sortHot) {
            this.setState({
                sortRecent: !this.state.sortRecent,
                sortHot: !this.state.sortHot,
            })
        }
    }
    render() {
        const recent = classnames({
            [acticleStyles.title]: true,
            [acticleStyles.negative]: !this.state.sortRecent,
        })
        const hot = classnames({
            [acticleStyles.title]: true,
            [acticleStyles.negative]: !this.state.sortHot,
        })
        return (
            <div className={acticleStyles.acticleWrap}>
                <div className={acticleStyles.switchTag}>
                    <div className={recent} onClick={this.handleSort.bind(this, 'recent')}>
                        最近
                    </div>
                    <div className={hot} onClick={this.handleSort.bind(this, 'hot')}>
                        最热
                    </div>
                </div>
                <Search />
                <ActileList />
                <a href='' className={acticleStyles.more}> 查看最近更多文章 </a>
            </div>
        )
    }
}
export default Acticle