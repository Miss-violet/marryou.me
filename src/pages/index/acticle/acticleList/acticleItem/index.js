import React, { Component } from 'react'

import acticleItemStyle from './index.css'

class ActicleItem extends Component {
    static defaultProps = {
        acticles: []
    }
    render() {
        const acticles = [
            {
                imgUrl: '1xxxxxx',
                title: '1xxxx',
                author: '1',
                time: '1.xxxx',
                cnt: '1xxxxxxxxxxxxxx',
            },
            {
                imgUrl: '2xxxxxx',
                title: '2xxxx',
                author: '2',
                time: '2.xxxx',
                cnt: '2xxxxxxxxxxxxxx',
            }
        ]

        return (
            <div>
                {acticles.map((items, i) => {
                    return (
                        <div key={i} className={acticleItemStyle.acticleItem}>
                            <div className={acticleItemStyle.imgWrap}>
                                <img src='' className={acticleItemStyle.img} />
                            </div>
                            <div className={acticleItemStyle.acticleInfo}>
                                <a href="" className={acticleItemStyle.acticleTitle}>
                                    {items.title}
                                </a>
                                <div className={acticleItemStyle.author}>
                                    <span>
                                        {items.author}
                                    </span>
                                    <span>
                                        {items.time}
                                    </span>
                                </div>
                                <div className={acticleItemStyle.acticleCnt}>
                                    {items.cnt}
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