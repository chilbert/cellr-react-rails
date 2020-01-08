import React, { Component } from 'react'

class WineryContainer extends Component {
  render() {
    return (
      <div>
	<div className="inputContainer">
	  <input className="taskInput" type="text" 
	    placeholder="Add a Winery" maxLength="50" />
	</div>  	    
	<div className="listWrapper">
	   <ul className="taskList">
	   </ul>
	</div>
      </div>    
    )
  }
}

export default WineryContainer;