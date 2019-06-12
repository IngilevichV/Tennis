import React, {Fragment} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Container, Row, Col, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import TennisLogo from '../public/tennis_logo.svg';

export default class HomePage extends React.Component {
  state={
    players: []
  }

  componentDidMount() {
    fetch("/api/users")
      .then(res => res.json())
      .then(
        (result) => {
            this.setState({
                players: result.content || []
            })
        },
        (error) => {
          console.info(error);
        }
      )
  }

  render = () => {
    const {players} = this.state;

    if (players.length === 0) return null;

    return (
      <div>
        <Header/>
        <Container style={{marginTop: "1.5em"}}>
            {players.map(player => (
                <Fragment>
                 <Row className="justify-content-md-center" style={{width: "60%", margin: "auto"}}>
                    <Col xs lg="2" style={{padding: "10px"}}>
                        <img src={TennisLogo} width = {60} style = {{margin: "5px"}}/>  
                    </Col>
                    <Col md="auto" style={{display: "flex", alignItems: "center"}}>
                        <div style={{margin: 0}}>
                            {player.login}
                            <br/>
                            {player.city || "Saint-Petersburg, Russia"}
                        </div>
                    </Col>
                    <Col md="auto" style={{display: "flex",
                        alignItems: "center"}}>
                        <Button variant="outline-info" style={{margin: 0}}>Invite to play</Button>
                    </Col>
                    
                </Row>
                <hr style={{width: "100%"}}/>
                </Fragment>
            ))}
           

        </Container>
        <Footer/>        
      </div>
    )
  }
}
