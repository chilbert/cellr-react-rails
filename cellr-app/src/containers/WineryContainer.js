import React, { Component } from 'react'
import AddWineryForm from '../components/wineryComponents/AddWineryForm';
import { connect } from 'react-redux';
import { getWineries } from '../Actions/actions'


class WineryList extends Component {
  

  componentDidMount() {
    this.props.getWineries();
  }


  // async createWinery(winery) {

  //   const response = await fetch('http://localhost:3000/api/v1/wineries', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(winery) // body data type must match "Content-Type" header
  //   });
  //   return await response.json(); // parses JSON response into native JavaScript objects
  // }
  
  // handleChange = (e) => {
  //   this.setState({inputValue: e.target.value});
  // }

  // handleSubmit = (e) => {
  //   const winery = {name: e.target.name.value, location: e.target.location.value};
  //   this.createWinery(winery);
  //   this.setState({wineries: winery});
  // };


  render() {
    return (
      <div> 
        <AddWineryForm addWinery={this.addWinery} />
      
        <div className="listWrapper">
          <ul className="wineryList">
              {this.props.wineries.map((a) => {
                return(
                  <li className="wine"  key={a.id}>
                      <input className="taskCheckbox" type="checkbox" />              
                      <label className="taskLabel">{a.name}</label>
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

export default connect(state => ({wineries: state.wineries.all}), {getWineries})(WineryList)