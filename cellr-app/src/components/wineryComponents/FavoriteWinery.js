import React, { Component } from 'react';
import Button  from 'react-bootstrap/Button';
import { addFavorite } from '../../Actions/actions'
import { connect } from 'react-redux'

class FavoriteWinery extends Component {
    
    state = {
        favorite: {user_id: 1, winery_id: this.props.id}
    }

    handleClick = event => {
        event.preventDefault()
        this.props.addFavorite(this.state.favorite);
    }
    
    render() {
      return (
        <Button id={this.props.id} onClick={ event => this.handleClick(event)}>Favorite</Button>
      );
    }
  }

  
  export default connect(null, { addFavorite })(FavoriteWinery)