import React, { Component } from 'react' 
import NASA from './NASA.js' 
import PhotoList from './PhotoList.js'

export default class App extends Component {

  state={ 
    photos: NASA.photos, 
  }



  render() {
    return (
      <div>
        <h1>Spacestagram</h1> 
        <PhotoList photos={NASA.photos}> hello </PhotoList>


      </div>
    )
  }
}

