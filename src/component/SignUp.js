import React,{useContext} from 'react'
import './SignUp.css';
import {Container,Row,Col,Form,Button}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext  from '../AppContext';
import { useHistory } from 'react-router-dom';

function SignUp() {
    let history = useHistory();
    const [value, setValue] = useContext(UserContext);
    function submitSignUp(event) {
        event.preventDefault();
       setValue(event.target.elements['firstname'].value);
       history.push('/');
      }

    return (
        <Container>
            <Row className="justify-content-md-center formclass" style={{"width":"680px"}}>
                <Col>
                    <Form>
                        <Row className="justify-content-md-center">
                            <Col lg="4">
                                <Form.Label>
                                   Create New Account
                                </Form.Label>
                            </Col>    
                        </Row>

                        <Form.Group >
                            <Col>
                                <Form.Control id="mNumber" type="text"  placeholder="mobile number" />
                            </Col>
                        </Form.Group>
                        or
                        <Form.Group >
                            <Col>
                                <Form.Control id="email" type="text"  placeholder="abc@gmail.com" />
                            </Col>
                        </Form.Group>

                        <Form.Group >
                            <Col>
                                <Form.Control  id="password" type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>

                        <Col>
                            <Button type="submit" style={{"color": "white","background": "#E50914"}}>Submit</Button>
                        </Col>
                    </Form>
                </Col>
        </Row>
      </Container>
    )
};
    

export default SignUp;
