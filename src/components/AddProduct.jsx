import React, { Component, createRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap'

class AddProduct extends Component {

    ref = createRef()


    render() {

        return (
            <Container className="mt-5">
                <Form>
                    <Form.Group >
                        <Form.Label>Name of Product</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <label className="p-0 d-flex mb-2" for="image">                                     
                        <input 
                        onClick={(e)=> {e.stopPropagation()
                                return true}}  
                        hidden
                        type="file"
                        id="image"
                        ref={this.ref}
                        /* id="image" */
                        /* onChange={(e) => {this.setState({
                                    blog:{...this.state.blog, 
                                    image: e.target.files[0]}
                                })
                                console.log(e.target.files[0])}} */
                        />
                    </label> 
                    <Button
                        onClick={()=> this.ref.current.click()}
                        variant="secondary"
                        className=" mb-4"
                    >
                        Upload Image
                    </Button>   

                    <Form.Group>
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="text" placeholder="Brand" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Price" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Category" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                        placeholder="description"
                        as="textarea" 
                        rows={3} />
                    </Form.Group>

                    <Button variant="primary">
                        Submit
                    </Button>
                    </Form>                
            </Container>
        );
    }
}

export default AddProduct;

/*  {
        "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
        "name": "3310",  //REQUIRED
        "description": "somthing longer", //REQUIRED
        "brand": "nokia", //REQUIRED 	  "imageUrl":"https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80",
        "price": 100, //REQUIRED
        "category": "smartphones" //REQUIRED
        "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
        "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
    } */