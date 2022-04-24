import React from 'react' 
import Photo from './Photo'

function PhotoRow(props) { 

    console.log(props.photo.id)

    let image= (`${props.photo.img_src}`)

    return (
      <div> 
          <h1>Please work for me</h1>
          <Photo image={image}> </Photo> 
          <h1>{props.photo.camera.full_name}</h1> 
          <h2>{props.photo.rover.name}</h2> 
          <h3>{props.photo.earth_date}</h3>
      </div>
    )
}

export default PhotoRow