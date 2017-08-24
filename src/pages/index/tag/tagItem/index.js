import React, { Component } from 'react'

import tagStyles from '../index.css'

class TagList extends Component {
    render() {
        const tag = [
            {
                classify: '后端相关',
                tags: ['HTML', 'CSS']
            },
            {
                classify: '前端相关',
                tags: ['HTML', 'CSS']
            }
        ]
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