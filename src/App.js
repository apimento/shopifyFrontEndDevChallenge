import React, { Component } from 'react' 
import NASA from './NASA.js' 
import PhotoList from './PhotoList.js' 
import './App.css' 

export default class App extends Component {

  state={ 
    photos: NASA.photos, 
  }



  render() {
    return (
      <div>
        <h1 className='title'>Spacestagram</h1> 
        <h4 className='byline'>Brought to you by NASA's Mars Rover API</h4>
        <PhotoList photos={NASA.photos}>  </PhotoList>
      </div>
    )
  }
}

