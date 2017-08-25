import React, { Component } from 'react'

import searchStyles from './index.css'
import iconFont from '../../../../assets/styles/iconfont/style.css'
import classnames from 'classnames'

class Search extends Component {
    render() {
        const iconSearch = classnames({
            [iconFont.icon_search]: true,
            [searchStyles.iconSearch]: true,
        })
        return (
            <div className={searchStyles.searchWrap}>
                <input type="text" placeholder="搜索文章" />
                <div className={iconSearch}>
                </div>
            </div>
        )
    }
}
export default Search