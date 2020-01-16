import React from 'react'
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'
import './App.css'

import Footer from './components/pageComponents/Footer'
import Header from './components/pageComponents/Header'

import NavBar from './components/pageComponents/NavBar'
import HomePageContainer from './containers/HomePageContainer'
import WineriesContainer from './containers/WineriesContainer'
import CellarContainer from './containers/CellarContainer'
import NotFound from './components/pageComponents/NotFound'


const App = () => {
    return (
      <div className="App">
        <Header />
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePageContainer} />
            <Route exact path="/cellar" component={CellarContainer} />
            <Route exact path="/wineries" component={WineriesContainer} />
            <Route exact path="/bottles" />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </div>
    )
}


export default App