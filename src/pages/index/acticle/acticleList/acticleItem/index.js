import React, { Component } from 'react'

import acticleItemStyle from './index.css'

class ActicleItem extends Component {
    static defaultProps = {
        //acticles: []
    }
    render() {

        let acticleProps = this.props,
            acticles = []
        for (let i in acticleProps) {
            acticles.push(acticleProps[i])
        }

        return (
            <div>
                {acticles.map((items, i) => {
                    return (
                        <div key={i} className={acticleItemStyle.acticleItem}>
                            <div className={acticleItemStyle.imgWrap}>
                                <img src={items.imgUrl} className={acticleItemStyle.img} alt='' />
                            </div>
                            <div className={acticleItemStyle.acticleInfo}>
                                <a href="" className={acticleItemStyle.acticleTitle}>
                                    {items.title}
                                </a>
                                <div className={acticleItemStyle.author}>
                                    <span>
                                        {items.author}
                                    </span>
                                    <span className={acticleItemStyle.time}>
                                        {items.time}
                                    </span>
                                </div>
                                <div className={acticleItemStyle.acticleCnt}>
                                    {items.summary}
                                </div>
                                <a href="" className={acticleItemStyle.moreCnt}>
                                    查看详情
                                </a>
                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
}
export default ActicleItem