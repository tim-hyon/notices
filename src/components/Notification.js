import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Notification extends Component {
    static propTypes = {
        type: PropTypes.oneOf(['loading', 'success', 'error']),
        clearNotification: PropTypes.func.isRequired,
        content: PropTypes.string
    }

    render() {
        const { content, type } = this.props

        return (
          <div>
            <div>NOTIFICATION</div>
            <div>{content}</div>
            <div>{type}</div>
          </div>
        )
    }
}