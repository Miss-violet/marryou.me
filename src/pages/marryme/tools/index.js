import React, { Component } from 'react'
import classnames from 'classnames'

import toolsStyles from './styles/index.css'

class Tools extends Component {
    constructor() {
        super()
        this.state = {
            showFm: true,            // 是否展开登记表单
            showMenu: false,         // 是否展开菜单内容
        }
    }
    render() {
        const gardenStyle = classnames({
            [toolsStyles.menuItem]: true,
            [toolsStyles.crtItem]: true,
        })
        const zhongshanStyle = classnames({
            [toolsStyles.menuItem]: true,
            [toolsStyles.crtItem]: false,
        })
        const seasideStyle = classnames({
            [toolsStyles.menuItem]: true,
            [toolsStyles.crtItem]: false,
        })
        const interiorStyle = classnames({
            [toolsStyles.menuItem]: true,
            [toolsStyles.crtItem]: false,
        })

        return (
            <div className={toolsStyles.toolsWrap}>
                <div className={toolsStyles.icon}>
                    <div className={toolsStyles.fm}></div>
                    {
                        this.state.showFm &&
                        <div className={toolsStyles.showFm}>
                            <span className={toolsStyles.showCircle}></span>
                            <form className={toolsStyles.fm}>
                                <h6>加入我们？</h6>
                                <div className={toolsStyles.fmItem}>
                                    <label htmlFor="name" className={toolsStyles.label}>
                                        姓名
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="请填写一个新郎/新娘认得你的名字"
                                        />
                                </div>
                                <div className={toolsStyles.fmItem}>
                                    <label
                                        htmlFor="number"
                                        className={toolsStyles.label}
                                        >
                                        参加人数
                                    </label>
                                    <input type="number" min="1" max="10" />
                                </div>
                                <div className={toolsStyles.fmBtn}>
                                    <button
                                        type="submit"
                                        className={toolsStyles.submitBtn}
                                        >
                                        你们这么美，我一定参加啦 ~
                            </button>
                                </div>
                            </form>
                        </div>
                    }
                </div>
                <div className={toolsStyles.icon}>
                    <div className={toolsStyles.menu}></div>
                    {
                        this.state.showMenu &&
                        <div className={toolsStyles.showMenu}>
                            <span className={toolsStyles.showCircle}></span>
                            <div className={toolsStyles.menuItems}>
                                <div className={gardenStyle}>
                                    <span className={toolsStyles.itemCircle}></span>植物园
                            </div>
                                <div className={zhongshanStyle}>
                                    <span className={toolsStyles.itemCircle}></span>中山路
                            </div>
                                <div className={seasideStyle}>
                                    <span className={toolsStyles.itemCircle}></span>集美海边
                            </div>
                                <div className={interiorStyle}>
                                    <span className={toolsStyles.itemCircle}></span>室内
                            </div>
                            </div>
                        </div>
                    }
                </div>
                <div className={toolsStyles.icon}>
                    <div className={toolsStyles.top}></div>
                </div>
            </div>
        )
    }
}
export default Tools