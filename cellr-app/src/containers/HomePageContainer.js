import React, { Component } from "react";
import { Jumbotron, Button } from 'react-bootstrap'
import LazyHero from 'react-lazy-hero';
import hero from './bg-hero.jpg'

class HomePageContainer extends Component {
  render() {
    return (
      <div>
        <LazyHero imageSrc={hero}>
          <h1>Welcome to Cellr.</h1>
        </LazyHero>
        <Jumbotron fluid className="home-hero">
            <p>
              The fastest place to track your wine Cellr.
            </p>
            <p>
              <Button variant="secondary" href="/cellar">View your wines</Button>
            </p>
        </Jumbotron>
      </div>
    );
  }
}

export default HomePageContainer;