import React, { Component } from 'react';
import Button  from 'react-bootstrap/Button';
import { addFavorite, removeFavorite } from '../../Actions/actions'
import { connect } from 'react-redux'

class FavoriteWinery extends Component {
    
    state = {
        favorite: {user_id: 1, winery_id: this.props.id}
    }

    handleClick = event => {
        event.preventDefault()
        this.props.addFavorite(this.state.favorite);
    }

    handleRemove = event => {
        event.preventDefault()
        this.findUserWinery(this.props.favorites, this.props.id)
    }

    findUserWinery(fav, id){
        const result = fav.find( ({ winery_id }) => winery_id === id );
        this.props.removeFavorite(result.id);
        
    }


    showFavoriteButton(fav, id){
        const found = fav.some(el => el.winery_id === id);
        if (!found) return true
    }
    
render() {
            if (this.showFavoriteButton(this.props.favorites, this.state.favorite.winery_id)) {    
                return (
                    <Button id={this.props.id} onClick={ event => this.handleClick(event)}>Favorite</Button>
                );
            } else {
                return (<Button id={this.props.id} variant="danger" onClick={ event => this.handleRemove(event)} >Remove from Favorites</Button>)
            }
        }
  }

  
  export default connect(null, { addFavorite, removeFavorite })(FavoriteWinery)