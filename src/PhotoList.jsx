  import React, { Component } from 'react'
  import PhotoPost from './PhotoPost' 
  
  export default class PhotoList extends Component {

    render() { 
      let allPhotos;

      // console.log(this.props.photos) 
      // console.log(this.props.photos[0].id) 

      return (   
      allPhotos = this.props.photos.map((photo) => {  
        return( 
            <div> 
          <PhotoPost photo={photo} key={photo.id} isLiked={this.props.liked.includes(photo)} onLikeToggle={this.props.onLikeToggle}> </PhotoPost> 
          {allPhotos}
            </div> 
        ) 
      })
      )
    }
  }