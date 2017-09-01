import React, { Component } from 'react'

import img_idPhoto from './img/idPhoto.png'

import formStyles from './styles/index.css'

class Form extends Component {
    render() {
        return (
            <div className={formStyles.wrap}>
                <div className={formStyles.formWrap}>
                    <div className={formStyles.timeWrap}>
                        <div className={formStyles.date}>13</div>
                        <div className={formStyles.month}>October</div>
                    </div>
                    <form className={formStyles.form}>
                        <h1 className={formStyles.title}> 加入我们？ </h1>
                        <div className={formStyles.fmItem}>
                            <label
                                htmlFor="name"
                                className={formStyles.label}
                                >
                                姓名
                            </label>
                            <input
                                type="text"
                                placeholder="请填写一个新郎/新娘认得你的名字"
                                />
                        </div>
                        <div className={formStyles.fmItem}>
                            <label
                                htmlFor="number"
                                className={formStyles.label}
                                >
                                参加人数
                            </label>
                            <input type="number" min="1" max="10" />
                        </div>
                        <div className={formStyles.fmBtn}>
                            <button
                                type="submit"
                                className={formStyles.submitBtn}
                                >
                                你们这么美，我一定参加啦 ~
                            </button>
                        </div>
                    </form>
                </div>
                <img src={img_idPhoto} alt="我们结婚了-证件照" className={formStyles.idPhoto} />
            </div>
        )
    }
}
export default Form