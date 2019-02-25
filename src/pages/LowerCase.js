import React, { Component } from 'react'
import TextTransformer from '../containers/TextTransformer'
import Notification from '../containers/Notification'

export default class LowerCase extends Component {
    render() {
        return (
            <div className="LowerCase-container">
                <h2>Let's lowercase some stuff</h2>
                <TextTransformer mode="lower" />
                <Notification />
            </div>
        )
    }
}