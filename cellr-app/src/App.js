import React from 'react'
import './App.css'

import Footer from './components/pageComponents/Footer'
import Header from './components/pageComponents/Header'
import Main from './containers/Main'
import Container from 'react-bootstrap/Container'




const App = () => {
    return (
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    )
}


export default App