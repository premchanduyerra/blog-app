import React, { useState } from 'react'
import { Base } from '../Base'
import { Col, Container, Row,Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'

export const Login = () => {
   const [user,setUser]=useState({
      email:'',
      password:''
   })

   const handleChange= (e,field)=>{
      setUser({...user,[field]:e.target.value})
   }

   const resetUser=()=>{
      setUser({
         email:'',
         password:''
      })
   }

    return (
        
            <Base>
            <Container>
               <Row className='mt-4'>

                <Col sm={{size:6,offset:3}}>
                
                  <Card color='dark' inverse>
                    <CardHeader>

                     <h3>Login Here !!</h3>
                     
                    </CardHeader>
                    <CardBody>
                        {/* creating form */}

                       <Form>
                        {/* email field */}
                       
                       <FormGroup>
                        <Label for="email">Enter Email</Label>
                        <Input
                        type='text'
                        placeholder='Enter Email'
                        id='email'
                        name='email'
                        onChange={e=>handleChange(e,'email')}
                        value={user.email}/>
                       </FormGroup>
                         
                          {/* password field */}
                       <FormGroup>
                          <Label for="password">Enter Password</Label>
                        <Input
                        type='password'
                        placeholder='Enter Password'
                        id='password'
                        name='password'
                        onChange={e=>handleChange(e,'password')}
                        value={user.password}/>
                       </FormGroup>
                       
                       
                       <Container className='text-center'>
                          <Button outline color='light'>Login</Button>
                          <Button onClick={resetUser} className='ms-2' color='secondary' type='reset'>Reset</Button>
                       </Container>


                       </Form>


                    </CardBody>





                  </Card>
                
                
                
                
                
                
                
                </Col>



               </Row>




             </Container>
            </Base>
       
    )
}
