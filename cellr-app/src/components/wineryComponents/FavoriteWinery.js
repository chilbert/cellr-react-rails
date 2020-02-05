import React, { Component } from 'react';
import Button  from 'react-bootstrap/Button';


class FavoriteWinery extends Component {
    
    state = {
        favorite: {user_id: 1, winery_id: this.props.id}
    }

    handleClick = event => {
        event.preventDefault()
        this.postFavorite(this.state.favorite)
    }
    

      postFavorite = favorite => {
        return fetch(`http://localhost:3000/api/v1/user_wineries`, {
        method: "POST",
        body: JSON.stringify(favorite),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
          }
        })
      }



    // if favorited? {
    //       Do nothing
    //   }
    //   else {
    
    render() {
      return (
        <Button  id={this.props.id} onClick={this.handleClick}>Favorite</Button>
      );
    }
  }
// }
  
  export default FavoriteWinery;