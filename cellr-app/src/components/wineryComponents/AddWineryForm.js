import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWinery } from '../../Actions/actions'


class AddWineryForm extends Component {

state = {
    winery: {name: "", location: ""}
}

handleChange = event => {
    this.setState( {
        winery: {...this.state.winery, [event.target.name]: event.target.value}
    })
}
    
    createWinery = (e) => {
        //1.  Stop form from submitting
        e.preventDefault();
        this.props.addWinery(this.state.winery)
    }

    render() {
        return (
            <form className="winery-edit" onSubmit={this.createWinery}>
                <input name="name" type="text" value={this.state.winery.name} placeholder="Winery Name" onChange={this.handleChange}/>
                <input name="location" type="text" value={this.state.winery.location} placeholder="Winery Location" onChange={this.handleChange}/>
                <button type="submit">+ Add Winery</button>
            </form>
        )
    }
}

export default connect(null, { addWinery })(AddWineryForm)