import React, {Fragment} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Button, Form, Container } from "react-bootstrap";

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
      }
    
    //   validateForm() {
    //     return this.state.email.length > 0 && this.state.password.length > 0;
    //   }
    
    //   handleChange = event => {
    //     this.setState({
    //       [event.target.id]: event.target.value
    //     });
    //   }
    
    //   handleSubmit = event => {
    //     event.preventDefault();
    //   }
    
      render() {
        return (
            <Fragment>
                <Header/>
                <Container style={{width: "30%", height: "100%", marginTop:"5%"}}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                </Form>
            </Container>
            <Footer/>
          </Fragment>
        );
      }
  }

//   export default LoginPage;