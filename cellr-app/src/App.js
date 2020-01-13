import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import './App.css'

import Footer from './components/pageComponents/Footer'
import Header from './components/pageComponents/Header'
import Main from './containers/Main'


const App = props => {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route path="/" component={Main} />
        </Router>
        <Footer />
      </div>
    )
}


export default App