import React, { Component } from 'react'

import searchStyles from './index.css'

class Search extends Component {
    render() {
        return (
            <div className={searchStyles.searchWrap}>
                <input className={searchStyles.searchInput} placeholder="搜索文章" />
            </div>
        )
    }
}
export default Search