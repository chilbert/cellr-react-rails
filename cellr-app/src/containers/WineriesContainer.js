import React, { Component } from 'react'
import AddWineryForm from '../components/wineryComponents/AddWineryForm';
import { connect } from 'react-redux';
import { getWineries } from '../Actions/actions'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


class WineriesContainer extends Component {
  

  componentDidMount() {
    this.props.getWineries();
  }

  //Remove Winery reducer is not working properly

  // handleClick = event => {
  //   console.log('thisishandleclick:', event.target.id)
  //   this.props.removeWinery(event.target.id);
  // };


  render() {
    return (
      <div> 
        <AddWineryForm addWinery={this.addWinery} />
        <Row>
          {this.props.wineries.map((a) => {
                return(
            <Col xs={12} md={6} lg={3} >
                <Card className="wine" key={a.id}>
                    <Card.Body>
                        <Card.Title>Winery: {a.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem>Location: {a.location}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <Card.Link >Favorite</Card.Link>
                    </Card.Body>
            </Card>
          </Col>
               )       
              })} 
        </Row>
      </div>
    )
  }
}

export default connect(state => ({wineries: state.wineries.all}),{getWineries})(WineriesContainer)