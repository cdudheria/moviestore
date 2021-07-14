import React,{useContext} from 'react'
import {Container,Row,Col,Form,Button}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext  from '../AppContext';
import { useHistory } from 'react-router-dom';
import './SignIn.css'

function SignIn() {
    let history = useHistory();
    const [value, setValue] = useContext(UserContext);
    function submitSignUp(event) {
        event.preventDefault();
       setValue(event.target.elements['firstname'].value);
       history.push('/');
      }
    return (
        <Container>
            <Row className="justify-content-md-center fdclass" style={{"width":"400px","margin-left": "420px"}}>
                <Col xs lg="11" >
                    <Form>
                        <Row className="justify-content-md-center">
                            <Col  lg="6">
                                <Form.Label>
                                   Sign In
                                </Form.Label>
                            </Col>    
                        </Row>
                         <Form.Group >
                            <Col >
                                <Form.Control  id="email" type="text" placeholder="abc@gmail.com" />
                            </Col>
                        </Form.Group>

                        <Form.Group >
                            <Col>
                                <Form.Control  id="password" type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>

                        <Col>
                            <Button type="submit" style={{"color": "white","background": "#E50914"}}>sign in</Button>
                        </Col>
                    </Form>
                </Col>
        </Row>
      </Container>
    )
};
    

export default SignIn;
