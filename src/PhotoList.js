  import React, { Component } from 'react'
  import PhotoRow from './PhotoRow' 
  
  export default class PhotoList extends Component {
    render() { 
      let allPhotos;

      console.log(this.props.photos) 
      console.log(this.props.photos[0].id) 

      return (   
      allPhotos = this.props.photos.map((photo) => {  
        return( 
            <div> 
          <PhotoRow photo={photo} key={photo.id}> </PhotoRow> 
          {allPhotos}
            </div> 
        ) 
      })
      )
    }
  }