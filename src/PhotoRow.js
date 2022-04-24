import React, { Component } from 'react' 
import Photo from './Photo' 

export default class PhotoRow extends Component { 

    image= (this.props.photo.img_src) 

  render() { 
      console.log('PhotoRow component works!')

    return ( 
        <div>  
        <div>   
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
