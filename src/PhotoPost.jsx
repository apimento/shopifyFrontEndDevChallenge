import React, { Component } from 'react' 
import Photo from './Photo'  
import LikeButton from './LikeButton'  

export default class PhotoPost extends Component { 

    image= (this.props.photo.img_src) 

  render() { 
    return ( 
        <div className='post'>  
            <div> 
            <div className='photo-summary'> 
                <Photo image={this.image}> </Photo> 
                <div className="photo-details"> 
                <h2>Mars Rover: {this.props.photo.rover.name}</h2> 
                <h4>{this.props.photo.camera.full_name}</h4> 
                <h4>{this.props.photo.earth_date}</h4> 
                <LikeButton isLiked={this.props.isLiked} onLikeToggle={() => this.props.onLikeToggle(this.props.photo)}></LikeButton> 
                </div>
            </div> 
            </div>
        </div>
    )
  }
}
