import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import WineryList from './WineryContainer'
import Winery from '../components/wineryComponents/Winery'
import NotFound from '../components/pageComponents/NotFound'

class Main extends React.Component {


  render() {
    return (
      <div className="Main">
        <Router>
          <Switch>
            <Route exact path="/" component={WineryList} />
            <Route path="/winery/:wineryID" component={Winery} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Main