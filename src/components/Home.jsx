import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Home extends Component {



    render() {

        return (

            <Container className="mt-5">
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{/* {product.name} */}</Card.Title>
                                <Card.Text>
                                    <span>{/* {product.price} */}</span>
                                    <p>{/* {product.brand} */}</p>
                                </Card.Text>
                                <Link to="/details/:id">
                                    <Button variant="primary">Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>

                    </Col>

                </Row>
                
            </Container>
        );
    }
}

export default Home;