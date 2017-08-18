import React, { Component } from 'react'

import acticleItemStyle from './index.css'

class ActicleItem extends Component {
    render() {
        return (
            <div className={acticleItemStyle.acticleItem}>
                <div className={acticleItemStyle.imgWrap}>
                    <img src='' className={acticleItemStyle.img} />
                </div>
                <div className={acticleItemStyle.acticleInfo}>
                    <a href="" className={acticleItemStyle.acticleTitle}>
                        文章标题
                    </a>
                    <div className={acticleItemStyle.author}>
                        <span>
                            Mr.小呆
                        </span>
                        <span>
                            2017.08.18
                        </span>
                    </div>
                    <div className={acticleItemStyle.acticleCnt}>
                        文章简介...
                    </div>
                    <a href="" className={acticleItemStyle.moreCnt}>
                        查看详情
                    </a>
                </div>
            </div>
        )
    }
}
export default ActicleItem