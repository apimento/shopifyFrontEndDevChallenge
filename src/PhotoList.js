  import React, { Component } from 'react'
  import PhotoRow from './PhotoRow' 
  
  export default class PhotoList extends Component {
    render() { 
      let allPhotos;

      console.log(this.props.photos) 
      console.log(this.props.photos[0].id) 

      // if(this.props.photos){ 

      //   allPhotos = this.props.photos.map((photo) => {   
      //   return (   
      //       <div> 
      //     <PhotoRow photo={photo} key={photo.id}> </PhotoRow> 
      //     {this.allPhotos}
      //       </div> 
      //     )}
      //   )
      // }else{ 
      //   return
      // }
      return (   
      allPhotos = this.props.photos.map((photo) => {   
            <div> 
          <PhotoRow photo={photo} key={photo.id}> </PhotoRow> 
          {this.allPhotos}
            </div> 
      })
      )
    }
  }