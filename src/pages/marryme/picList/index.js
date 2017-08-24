import React, { Component } from 'react'

import img_pic1 from './img/B0003903.jpg'
import img_pic2 from './img/B0003907.jpg'
import img_pic3 from './img/B0003912.jpg'
import img_pic4 from './img/B0003917.jpg'



import picListStyles from './styles/index.css'

class PicList extends Component {
    render() {
        return (
            <div className={picListStyles.picWrap}>
                <div className={picListStyles.axis}>
                    <div className={picListStyles.more}>
                        加载更多
                    </div>
                </div>
                <ul className={picListStyles.picList}>
                    <li>
                        <img
                            src={img_pic1}
                            alt="img_pic1"
                            className={picListStyles.pic}
                            />
                    </li>
                    <li>
                        <img
                            src={img_pic2}
                            alt="img_pic2"
                            className={picListStyles.pic}
                            />
                    </li>
                    <li>
                        <img
                            src={img_pic3}
                            alt="img_pic3"
                            className={picListStyles.pic}
                            />
                    </li>
                    <li>
                        <img
                            src={img_pic4}
                            alt="img_pic4"
                            className={picListStyles.pic}
                            />
                    </li>
                </ul>
            </div>
        )
    }
}
export default PicList