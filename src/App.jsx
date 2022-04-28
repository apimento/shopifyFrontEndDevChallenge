import React, { Component } from 'react' 
import NASA from './NASA.jsx' 
import PhotoList from './PhotoList.jsx' 
import './App.css'  
import axios from "axios" 
// import LikeButton from './LikeButton.js'


export default class App extends Component {


  state={ 
    photos: NASA.photos, 
    liked:[], 
    current: ""
  }

  handleLikeToggle = (photo) => {  

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${NASA.api_key}` 
    
    
    axios({
      method: 'GET', 
      url: url
    }).then(response => {
      this.setState({ current: response.data }) 
    }) 

    let liked = this.state.liked.slice() 
    const photoIndex = liked.indexOf(photo) 
    if (liked.includes(photo)) { 
      liked.splice(photoIndex, 1)
    } else { 
      liked.push(photo)
    } 
    this.setState({liked}) 
    console.log(` ${photo.img_src} was liked`)  
  }


  render() {
    return (
      <div>
        <h1 className='title'>Spacestagram</h1> 
        <h4 className='byline'>Brought to you by NASA's Mars Rover Photos API</h4> 
        <PhotoList photos={NASA.photos} liked={this.state.liked} onLikeToggle={this.handleLikeToggle}>  </PhotoList>
        <h4 className='byline'> <a href="https://github.com/apimento/shopifyFrontEndDevChallenge"> Andrew Pimento - Shopify Front End Intership Application 2022</a></h4>
      </div>
    )
  }
}

