import React, { Component } from 'react'
import AddWineryForm from '../components/wineryComponents/AddWineryForm';
import { connect } from 'react-redux';
import { getWineries, getFavorites } from '../Actions/actions'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FavoriteWinery from '../components/wineryComponents/FavoriteWinery';


class WineriesContainer extends Component {
  

  async componentDidMount() {
    await Promise.all([
      this.props.getWineries(),
      this.props.getFavorites(),
    ]);
  }

 

  render() {
    debugger
    return (
      <div className="Wineries"> 
      <h1>Wineries</h1>
      <div className="winery-form-section"> 
        <p>If you do not see your favorite wineries below, feel free to add them with the form.</p>
        <AddWineryForm addWinery={this.addWinery} />
      </div>
       
        <Row>
          {this.props.wineries.map((a) => {
                return(
            <Col xs={12} md={6} lg={3} key={a.id} >
                <Card className="wine" >
                    <Card.Body>
                        <Card.Title>Winery: {a.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem>Location: {a.location}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <FavoriteWinery id={a.id}>Favorite</FavoriteWinery>
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

export default connect(
  state => ({
    wineries: state.wineries.all,
    favorites: state.favorites.all
  }),
  {
    getWineries,
    getFavorites
  }
)(WineriesContainer);