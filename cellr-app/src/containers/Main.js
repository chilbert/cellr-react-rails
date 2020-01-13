import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import WineryList from '../components/WineryContainer'

class Main extends React.Component {


  render() {
    return (
      <div className="Main">

        <Router>
          <Route path="/home" component={WineryList} />
        </Router>
      </div>
    )
  }
}


export default Main