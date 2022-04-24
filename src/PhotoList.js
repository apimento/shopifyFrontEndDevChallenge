import React from 'react' 
import PhotoRow from './PhotoRow'

function PhotoList(props) { 



    console.log(props.photos) 
    console.log(props.photos[0].id) 

    let allPhotos; 

    allPhotos = props.photos.map((photo) => {   
      return (   
        <div> 
      <PhotoRow photo={photo} key={photo.id}> </PhotoRow> 
      {allPhotos}
        </div> 
      )}
    )
  }
  
export default PhotoList