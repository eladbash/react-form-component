import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      children
    } = this.props

    return (
      <button className={styles.Button}>
        {children}
      </button>
    )
  }
}
