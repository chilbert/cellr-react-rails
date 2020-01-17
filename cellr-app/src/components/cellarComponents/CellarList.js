import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'


const CellarCards = props => {

    return (
                <Col xs={12} md={6} lg={3}>
                    <Card key={props.id}>
                        <Card.Body>
                            <Card.Title>Title: {props.name} </Card.Title>
                            <Card.Text>Location: {props.location}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        )}


export default CellarCards