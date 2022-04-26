import React, { Component } from 'react'

export default class LikeButton extends Component {  


    // innerText = (e) => { 
    //     e.target.innerText= "Liked"
    // }


    handleLikeClick = (e) => {  
        e.stopPropagation()  
        this.props.onLikeToggle() 
    }



  render() {
    return (
      <div> 

        <button className={`likeButton ${this.props.isLiked === false ? 'add_to_liked' : 'remove_from_liked'}`} onClick={this.handleLikeClick}> {this.props.isLiked === false ? 'Like' : 'Liked'} </button>

          
      </div>
    )
  }
}
