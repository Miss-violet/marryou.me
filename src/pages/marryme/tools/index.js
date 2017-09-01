import React, { Component } from 'react'
import classnames from 'classnames'

import toolsStyles from './styles/index.css'
import iconFont from '../../../assets/styles/iconfont/style.css'

/* 右下角图标样式 */
const fmIcon = classnames({
    [iconFont.icon_edit]: true,
    [toolsStyles.editIcon]: true,
})
const menuIcon = classnames({
    [iconFont.icon_menu]: true,
    [toolsStyles.menuIcon]: true,
})
const topIcon = classnames({
    [iconFont.icon_top]: true,
    [toolsStyles.topIcon]: true,
})

class Tools extends Component {
    constructor() {
        super()
        this.state = {
            showFm: false,            // 是否展开登记表单
            showMenu: false,          // 是否展开菜单内容
            allStyle: true,           // 选择菜单项 “ 全部 ”
            gardenStyle: false,       // 选择菜单项 “ 植物园 ”
            zhongshanStyle: false,    // 选择菜单项 “ 中山路 ”
            seasideStyle: false,      // 选择菜单项 “ 集美海边 ”
            interiorStyle: false,     // 选择菜单项 “ 室内 ”
        }
    }


    /* 显示登记表单/菜单 */
    handleToShow = (type) => {
        switch (type) {
            case 'showFm':
                this.setState({
                    showFm: true,
                    showMenu: false,
                })
                break
            case 'showMenu':
                this.setState({
                    showFm: false,
                    showMenu: true,
                })
                break
            default:
                this.setState({
                    showFm: false,
                    showMenu: false,
                })
                break
        }
    }
    /* 切换菜单选项 */
    handleToCrt = (type) => {
        switch (type) {
            case 'all':
                this.setState({
                    allStyle: true,
                    gardenStyle: false,
                    zhongshanStyle: false,
                    seasideStyle: false,
                    interiorStyle: false,
                })
                break
            case 'garden':
                this.setState({
                    allStyle: false,
                    gardenStyle: true,
                    zhongshanStyle: false,
                    seasideStyle: false,
                    interiorStyle: false,
                })
                break
            case 'zhongshan':
                this.setState({
                    allStyle: false,
                    gardenStyle: false,
                    zhongshanStyle: true,
                    seasideStyle: false,
                    interiorStyle: false,
                })
                break
            case 'seaside':
                this.setState({
                    allStyle: false,
                    gardenStyle: false,
                    zhongshanStyle: false,
                    seasideStyle: true,
                    interiorStyle: false,
                })
                break
            case 'interior':
                this.setState({
                    allStyle: false,
                    gardenStyle: false,
                    zhongshanStyle: false,
                    seasideStyle: false,
                    interiorStyle: true,
                })
                break
            default:
                break
        }
    }
    /* 滚动置顶 */
    handleToTop = () => {
        window.scrollBy(0, -100)

        const scrolldelay = setTimeout(this.handleToTop, 20)

        var sTop = document.documentElement.scrollTop + document.body.scrollTop

        if (sTop === 0) {
            clearTimeout(scrolldelay)
        }
    }
    render() {
        /* 菜单选中样式 */
        const allStyle = classnames({
            [toolsStyles.menuItem]: true,
            [toolsStyles.crtItem]: this.state.allStyle,
        })
        const gardenStyle = classnames({
            [toolsStyles.menuItem]: true,
            [toolsStyles.crtItem]: this.state.gardenStyle,
        })
        const zhongshanStyle = classnames({
            [toolsStyles.menuItem]: true,
            [toolsStyles.crtItem]: this.state.zhongshanStyle,
        })
        const seasideStyle = classnames({
            [toolsStyles.menuItem]: true,
            [toolsStyles.crtItem]: this.state.seasideStyle,
        })
        const interiorStyle = classnames({
            [toolsStyles.menuItem]: true,
            [toolsStyles.crtItem]: this.state.interiorStyle,
        })

        return (
            <div className={toolsStyles.toolsWrap}>
                {/* 登记表单 */}
                <div className={toolsStyles.icon}>
                    <div className={fmIcon} onClick={this.handleToShow.bind(this, 'showFm')}></div>
                    {
                        this.state.showFm &&
                        <div className={toolsStyles.showFm}>
                            <span className={toolsStyles.showCircle}></span>
                            <form className={toolsStyles.editFm}>
                                <h6 className={toolsStyles.title}>加入我们？</h6>
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
                {/* 菜单 */}
                <div className={toolsStyles.icon}>
                    <div className={menuIcon} onClick={this.handleToShow.bind(this, 'showMenu')}></div>
                    {
                        this.state.showMenu &&
                        <div className={toolsStyles.showMenu}>
                            <span className={toolsStyles.showCircle}></span>
                            <div className={toolsStyles.menuItems}>
                                <div className={allStyle} onClick={this.handleToCrt.bind(this, 'all')}>
                                    <span className={toolsStyles.itemCircle}></span>全部
                                </div>
                                <div className={gardenStyle} onClick={this.handleToCrt.bind(this, 'garden')}>
                                    <span className={toolsStyles.itemCircle}></span>植物园
                                </div>
                                <div className={zhongshanStyle} onClick={this.handleToCrt.bind(this, 'zhongshan')}>
                                    <span className={toolsStyles.itemCircle}></span>中山路
                                </div>
                                <div className={seasideStyle} onClick={this.handleToCrt.bind(this, 'seaside')}>
                                    <span className={toolsStyles.itemCircle}></span>集美海边
                                </div>
                                <div className={interiorStyle} onClick={this.handleToCrt.bind(this, 'interior')}>
                                    <span className={toolsStyles.itemCircle}></span>室内
                                </div>
                            </div>
                        </div>
                    }
                </div>
                {/* 置顶 */}
                <div className={toolsStyles.icon} title="滚动至顶">
                    <div className={topIcon} onClick={this.handleToTop.bind(this)}></div>
                </div>
            </div>
        )
    }
}
export default Tools