import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = (props)=> {

    const [product, setProduct] = useState(null)

    useEffect(()=>{
        const getProducts = async () => {
            let response = await fetch("http://localhost:3002/products")
            let products = await response.json()
            console.log('products', products )
            setProduct(products)
        }
        getProducts()
    },[])


   

        return (

            <Container className="mt-5">
                <Row className=" ">
                {  product?.map( product => 
                    <Col md={4} className=''>
                   
                        <Card style={{ width: '18rem' }}  key={product._id} onClick={() => props.history.push('/details/' + product._id)} >
                            <Card.Img variant="top" src={ product?.imageUrl} />
                            <Card.Body>
                                <Card.Title>{ product?.name}</Card.Title>
                                <Card.Text>
                                    <span>{product?.price} </span>
                                    <p>{product?.brand}</p>
                                </Card.Text>
                                <Link to={`/details/${product._id}`}>
                                    <Button variant="primary">Details</Button>
                                </Link>
                            </Card.Body>
                        </Card> 
                    </Col>
    )}

                </Row>
                
            </Container>
        );
    
}

export default Home;