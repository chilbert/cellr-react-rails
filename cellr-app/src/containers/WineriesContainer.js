import React, { Component } from 'react'
import AddWineryForm from '../components/wineryComponents/AddWineryForm';
import { connect } from 'react-redux';
import { getWineries, removeWinery } from '../Actions/actions'

class WineriesContainer extends Component {
  

  componentDidMount() {
    this.props.getWineries();
  }

  //Remove Winery reducer is not working properly

  // handleClick = event => {
  //   console.log('thisishandleclick:', event.target.id)
  //   this.props.removeWinery(event.target.id);
  // };


  render() {
    return (
      <div> 
        <AddWineryForm addWinery={this.addWinery} />
        <div className="wineries">
          <ul className="wineryList">
              {this.props.wineries.map((a) => {
                return(
                  <li className="wine"  key={a.id}>
                      <input className="taskCheckbox" type="checkbox" />              
                      <label className="taskLabel">{a.name}</label>
                      {/* <button id={a.id} className="deleteTaskBtn" onClick={ event => this.handleClick(event)}>remove</button> */}
                  </li>
                )       
            })} 	    
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(state => ({wineries: state.wineries.all}),{getWineries})(WineriesContainer)