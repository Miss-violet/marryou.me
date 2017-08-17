import React, { Component } from 'react'
import logo from './logo.svg'

import styles from './logo.css'

class Logo extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>
        )
    }
}

export default Logo