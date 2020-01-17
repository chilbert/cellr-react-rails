import React, { Component } from 'react'
import CellarCards from '../components/cellarComponents/CellarList'
import { connect } from "react-redux";
import { getWineries, getFavorites } from "../Actions/actions";
import Row from 'react-bootstrap/Row'


class CellarContainer extends Component {

  state = {
  }


  async componentDidMount() {
    
    this.props.getWineries();
    this.props.getFavorites();
    this.getUser();
  }

  async getUser() {
    const response = await fetch(`http://localhost:3000/api/v1/users/1`)
    const data = await response.json()
    this.setState({
      name: data.name
    })
  }


  render() {
    return (
      <div className="MyCellar">
        <h3>{this.state.name}'s Cellar</h3>
        <div className="WineList">
        <Row>
        {this.props.wineries.map((a) => {
          return (
          <CellarCards className="cellar-cards"
            key={a.id} name={a.name} location={a.location}
           />
          )
        })}
        </Row>
        </div>
      </div>
    )
  }
}


export default connect(
  state => ({
    wineries: state.wineries.all,
    favorites: state.favorites.all
  }),
  {
    getWineries,
    getFavorites
  }
)(CellarContainer);