import React, { Component } from 'react';
import { Container, Card, Tabs, Tab, Form, Button, Row, Col, ListGroup } from 'react-bootstrap'

class Details extends Component {

  state = {
   product: []
}

  componentDidMount(){

    const getProducts = async () => {
      let id = this.props.match.params.id
      if (id) {

      let response = await fetch("http://localhost:3002/products/" + id)
      let products = await response.json()
      console.log('products', products )
      this.setState({product: products})
      }
  }
  getProducts()


  }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={4}>
                        <img src="" alt="product"/>
                    </Col>

                    <Col xs={8}>
                         <ListGroup>
                            <ListGroup.Item>{this.state.product.name}</ListGroup.Item>
                            <ListGroup.Item>{this.state.product.brand}</ListGroup.Item>
                            <ListGroup.Item>{this.state.product.description}</ListGroup.Item>
                            <ListGroup.Item>{this.state.product.category}</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Col>                    
                </Row>
             
                
            </Container>
        );
    }
}

export default Details;