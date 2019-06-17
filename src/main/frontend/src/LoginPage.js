import React, {Fragment} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Button, Form, Container, FormControl } from "react-bootstrap";
import AuthService from './_helpers/authServices';

const auth = new AuthService('http://localhost:3000');

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
      }
    
      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
    
      handleSubmit = event => {
        const value = event.target.elements[0].value;
        auth.login(this.state.email, this.state.password)
        // window.localStorage.setItem('rr_login', value);
      }


      render() {
        return (
            <Fragment>
                <Header/>
                <Container style={{width: "30%", height: "100%", marginTop:"5%"}}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                              type="email"
                              placeholder="Enter email"
                              autoFocus
                              value={this.state.email}
                              onChange={this.handleChange} 
                              />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={this.state.password}
                              onChange={this.handleChange}  />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={!this.validateForm()}>
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