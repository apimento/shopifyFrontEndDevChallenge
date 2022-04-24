import React, { Component } from 'react' 
import Photo from './Photo' 

export default class PhotoRow extends Component { 

    image= (this.props.photo.img_src) 

  render() {

    return ( 
        <div>  
        <div>   
          <h1>Please work for me</h1>
          <Photo image={this.image}> </Photo> 
        </div> 
        <div className='photo-summary'> 
          <h1>{this.props.photo.camera.full_name}</h1> 
          <h2>{this.props.photo.rover.name}</h2> 
          <h3>{this.props.photo.earth_date}</h3>
        </div>
    </div>
    )
  }
}
