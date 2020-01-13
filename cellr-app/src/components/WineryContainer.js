import React, { Component } from 'react'

class WineryContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wineries: [],
      inputValue: ''
    }
  }

  async getWineries() {
    try {
      const response = await fetch('http://localhost:3000/api/v1/wineries');
      const data = await response.json();
      this.setState({wineries: data});
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.getWineries()
  }

  async createWinery(winery) {
    // Default options are marked with *
    // const winery = {name: "Far Niente", location: "Napa"}

    const response = await fetch('http://localhost:3000/api/v1/wineries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(winery) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }
  


  handleChange = (e) => {
    this.setState({inputValue: e.target.value});
  }

  handleSubmit = (e) => {
    const winery = {name: e.target.name.value, location: e.target.location.value};
    this.createWinery(winery);
    this.setState({wineries: winery});
  };


  render() {
    return (
      <div>
        <div className="inputContainer">
          <input className="taskInput" type="text" 
          placeholder="Add a wine!" maxLength="50"
          value={this.state.inputValue} onChange={this.handleChange} />
      </div>  
   <button onClick={this.createWinery}>Add Winery</button>

   <form onSubmit={this.handleSubmit}>
     <label>Winery Name:</label>
     <input name="name"
     />
     <label>Winery Location:</label>
     <input name="location"
     />
     <input type="submit" />
   </form>
    
              
                 
	<div className="listWrapper">
	   <ul className="wineryList">
		  {this.state.wineries.map((a) => {
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

export default WineryContainer