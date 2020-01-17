import React, { Component } from 'react'
import CellarList from '../components/cellarComponents/CellarList'
import Row from 'react-bootstrap/Row'

class CellarContainer extends Component {

  state = {
  }

  async getUser() {
    const response = await fetch(`http://localhost:3000/api/v1/users/1`)
    const data = await response.json()
    this.setState({
      name: data.name
    })
  }

  componentDidMount() {
    this.getUser();
  }
  

  render() {
    return (
      <div className="MyCellar">
        <h3>{this.state.name}'s Cellar</h3>
        <div className="WineList">
          <CellarList className="cellar-list" />
        </div>
      </div>
    )
  }
}


export default CellarContainer;