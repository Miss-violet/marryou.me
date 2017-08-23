import React, { Component } from 'react'

import ActicleItem from './acticleItem'

import acticleListStyle from './index.css'

class ActicleList extends Component {
    render() {
        return (
            <div className={acticleListStyle.acticleList} >
                <ActicleItem />
            </div>
        )
    }
}
export default ActicleList