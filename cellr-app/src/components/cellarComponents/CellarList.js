import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class CellarList extends Component {

    render() {
        return (
            <Row>
            <Col xs={12} md={6} lg={3} >
                <Card >
                    <Card.Body>
                        <Card.Title>Title:</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem>Variety:</ListGroupItem>
                    <ListGroupItem>Vintage:</ListGroupItem>
                    <ListGroupItem>Bottle Count: </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <Card.Link >I drank this</Card.Link>
                    </Card.Body>
            </Card>
          </Col>
    </Row>
        )
    }

}

export default CellarList