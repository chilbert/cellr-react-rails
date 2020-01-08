import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'

class WineryContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wineries: [],
      inputValue: ''
    }
  }

  getWineries() {
    axios.get('/api/v1/wineries')
    .then(response => {
      this.setState({wineries: response.data})
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getWineries()
  }

  createWinery = (e) => {
    if (e.key === 'Enter') {
      axios.post('/api/v1/wineries', {winery: {name: e.target.value}})
      .then(response => {
        const wineries = update(this.state.wineries, {
          $splice: [[0, 0, response.data]]
        })
        this.setState({
          wineries: wineries,
          inputValue: ''
        })
      })
      .catch(error => console.log(error))      
    }    
  }

  handleChange = (e) => {
    this.setState({inputValue: e.target.value});
  }

  render() {
    return (
      <div>
        <div className="inputContainer">
        <input className="taskInput" type="text" 
          placeholder="Add a wine!" maxLength="50"
          onKeyPress={this.createWinery}
          value={this.state.inputValue} onChange={this.handleChange} />
                </div>  	    
	<div className="listWrapper">
	   <ul className="wineryList">
		  {this.state.wineries.map((winery) => {
		    return(
          <li className="wine"  key={winery.id}>
			<input className="taskCheckbox" type="checkbox" />              
			<label className="taskLabel">{winery.name}</label>
			<span className="deleteTaskBtn">x</span>
		      </li>
		    )       
		  })} 	    
	   </ul>
	</div>
     </div>
    )
  }
}

export default WineryContainer