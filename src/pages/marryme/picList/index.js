import React, { Component } from 'react'
import classnames from 'classnames'

import picListStyles from './styles/index.css'
import iconFont from '../../../assets/styles/iconfont/style.css'

import picData from '../../../mock/picList.js'
const picList = picData.data

class PicList extends Component {
    render() {
        const moreStyle = classnames({
            [iconFont.icon_more]: true,
            [picListStyles.moreIcon]: true,
        })
        return (
            <div className={picListStyles.picWrap}>
                <ul className={picListStyles.picList}>
                    <li className={picListStyles.axis}>
                        <div className={moreStyle}></div>
                        <div className={picListStyles.more}>
                            <div className={moreStyle}></div>
                            加载更多
                    </div>
                    </li>
                    {
                        picList.map((items, i) => {
                            let imgUrl = process.env.PUBLIC_URL + '/img/' + items.url + '.jpg'
                            return (
                                <li key={i}>
                                    <img
                                        src={imgUrl}
                                        alt={imgUrl}
                                        className={picListStyles.pic}
                                        />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default PicList