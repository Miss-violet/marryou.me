import React, { Component } from 'react'

import tagStyles from '../index.css'

class TagList extends Component {
    render() {
        let tagProps = this.props,      /* 对象，无法直接使用map遍历 */
            tag = []
        for (let i in tagProps) {
            tag.push(tagProps[i])
        }
        return (
            <div>
                {
                    tag.map((items, i) => {
                        let tagItem = items.tags.map((items, i) => {
                            return (
                                <div className={tagStyles.classifyCnt} key={i}>
                                    {items}
                                </div>
                            )
                        })
                        return (
                            <div className={tagStyles.tagCnt} key={i}>
                                <div className={tagStyles.classifyTitle}>
                                    {items.classify}
                                </div>
                                {tagItem}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default TagList