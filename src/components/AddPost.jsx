import React from 'react'
import { Card, Container, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useState,useEffect } from 'react'
import { loadingAllCategories } from '../services/category-service'
import JoditEditor from 'jodit-react';
import { useRef } from 'react'

export const AddPost = () => {
    const[categories,setCategories]=useState([])
    const editor = useRef(null);
	const [content, setContent] = useState('');
    
    useEffect(()=>{
         loadingAllCategories()
         .then(resp=>{
            console.log(resp)
            setCategories(resp)
         })
         .catch(error=>console.log(error))
    },[])
    return (
        <div>
            <Container>
                <Card>
                    <CardHeader>
                        <h3>What is going in your mind ?</h3>

                    </CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="title">Enter Tile</Label>
                                <Input
                                    type='text'
                                    placeholder='Enter Title'
                                    id='title'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="content">Enter Content</Label>
                                {/* <Input
                                    type='textarea'
                                    placeholder='Enter Content'
                                    id='content'
                                    style={{height:'200px'}}
                                /> */}
                                <JoditEditor
                                ref={editor}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="category">Select Category</Label>
                                <Input
                                    type='select'
                                   
                                    id='category'
                                >
                                    {
                                        categories.map((category,index)=>{
                                           return (
                                            <option key={index} value={category.categoryId}>{category.categoryTitle}</option>
                                           )
                                        })
                                    }
                                </Input>
                            </FormGroup>
                              <Container className='text-center'>
                                <Button color='primary'>Add Post</Button>
                                <Button className='ms-2' color='danger'>Reset</Button>

                              </Container>


                        </Form>







                    </CardBody>






                </Card>






            </Container>
        </div>
    )
}
