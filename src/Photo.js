import React, { Component } from 'react'

export default class Photo extends Component {
  render() {
    return (
        <div>{this.props.image}</div>
    )
  }
}

