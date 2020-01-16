import React, { Component } from 'react'
import AddWineryForm from '../components/wineryComponents/AddWineryForm';
import { connect } from 'react-redux';
import { getWineries, removeWinery } from '../Actions/actions'

class WineriesContainer extends Component {
  

  componentDidMount() {
    this.props.getWineries();
  }

  handleClick = event => {
    this.props.removeWinery(this.props.id);
  };


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
                      <button className="deleteTaskBtn" onClick={this.handleClick}>x</button>
                  </li>
                )       
            })} 	    
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(state => ({wineries: state.wineries.all}), {getWineries, removeWinery})(WineriesContainer)