import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const DivNotification = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  background: ${props => props.color};
  color: white;
  display: flex;
  width: 30rem;
  border-radius: 0.2rem;
  padding: 0.5rem;
  bottom: 0.5rem;
  left: 0.5rem;
  box-shadow: 0.2rem 0.2rem #ddd;
`;

const DivCloseButton = styled.div`
  background: white;
  color: black;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  cursor: pointer;
  padding: 0.1rem 0.3rem;
  border-radius: 0.2rem;
`;

const DivTypeText = styled.div`
  padding-right: 0.3rem;
  color: #aaa;
`;

const DivContentText = styled.div`
  color: white;
  display: flex;
  flex-grow: 1;
`;

export default class Notification extends Component {
    static propTypes = {
        type: PropTypes.oneOf(['loading', 'success', 'error']),
        clearNotification: PropTypes.func.isRequired,
        content: PropTypes.string
    }

    handleCloseNotification = e => {
        const { clearNotification } = this.props

        clearNotification()
    }

    render() {
        const { content, type } = this.props

        if (content === '' && type === '') {
          return null;
        }

        let color;

        switch(type) {
          case 'success':
            color = 'green'
            break;
          case 'error':
            color = 'red'
            break;
          default:
            color = 'gray'
        }

        return (
          <DivNotification color={color}>
            <DivTypeText>{type.toUpperCase()}</DivTypeText>
            <DivContentText>{content}</DivContentText>
            <DivCloseButton onClick={this.handleCloseNotification} className="Notification-closeButton">X</DivCloseButton>
          </DivNotification>
        )
    }
}