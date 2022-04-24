import React, { Component } from 'react' 
import Photo from './Photo' 

export default class PhotoRow extends Component { 

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
                <button>Like</button>  
            </div>
        </div>
    )
  }
}
