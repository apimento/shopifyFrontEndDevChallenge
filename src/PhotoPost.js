import React, { Component } from 'react' 
import Photo from './Photo'  
import LikeButton from './LikeButton'

export default class PhotoPost extends Component { 

    image= (this.props.photo.img_src) 

  render() { 
    return ( 
        <div className='post'>  
            <div className='photo-summary'> 
            <div>   
                <Photo image={this.image}> </Photo> 
            </div> 
                <h1>Mars Rover: {this.props.photo.rover.name}</h1> 
                <h3>{this.props.photo.camera.full_name}</h3> 
                <h3>{this.props.photo.earth_date}</h3> 
                <LikeButton isLiked={this.props.isLiked} onLikeToggle={() => this.props.onLikeToggle(this.props.photo)}></LikeButton>
            </div>
        </div>
    )
  }
}
