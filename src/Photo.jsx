import React, { Component } from 'react' 
import './App.css'

export default class Photo extends Component {
  render() {
    return (
        <div> <img src={this.props.image} alt="" /> </div>
    )
  }
}

