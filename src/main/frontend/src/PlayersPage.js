import React, {Fragment} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Container, Row, Col, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import TennisLogo from '../public/tennis_logo.svg';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    // this.toggleHoverState = this.toggleHoverState.bind(this);
    this.state = {
      players: [],
      isHovering: false,
    };
  }

  handleMouseHover(e) {
    console.info(e.target.id)
    const rowId = e.target.id;
    if (rowId) {
      document.getElementById(rowId).style.backgroundColor = "red";
    }
    // this.setState(this.toggleHoverState);
  }

  handleMouseLeave() {
    console.info(document.getElementsByClassName("row"))
    document.getElementsByClassName("row").forEach(elem=>elem.style.backgroundColor = "white");
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
    const {players, isHovering} = this.state;
    console.info(isHovering)

    if (players.length === 0) return null;

    return (
      <div>
        <Header/>
        <Container style={{marginTop: "1.5em"}}>
            {players.map((player, i) => (
                <Fragment>
                 <Row id={`row-${i}`} className="justify-content-md-center" style={{width: "100%", margin: "auto", backgroundColor: isHovering ? "lightGrey" : "white"}}
                  // onMouseEnter={this.handleMouseHover}
                  // onMouseLeave={this.handleMouseLeave}
                 >
                    <Col md="auto" style={{padding: "10px"}}>
                        <img src={TennisLogo} width = {60} style = {{margin: "5px"}}/>  
                    </Col>
                    <Col md="3" style={{display: "flex", alignItems: "center"}}>
                        <div style={{margin: 0}}>
                            <span style={{color: "#3a87ad", fontSize: "20px"}}>{player.login}</span>
                            <br/>
                            {player.city || "Saint-Petersburg, Russia"}
                        </div>
                    </Col>
                    <Col md="auto" style={{display: "flex",
                        alignItems: "center", jusitfyContent: "center", flexDirection: "column", paddingTop:"1%"}}>
                        <div style={{height:"30%", fontSize: "12px", color: "grey"}}>LEVEL</div>
                        <div style={{minHeight:"30%"}}>Нужен уровень</div>
                    </Col>
                    <Col md="auto" style={{display: "flex",
                        alignItems: "center",  flexDirection: "column", paddingTop:"1%"}}>
                        <div style={{height:"30%", fontSize: "12px", color: "grey"}}>GENDER</div>
                        <div style={{minHeight:"30%"}}>Нужен пол</div>
                    </Col>
                    <Col md="auto" style={{display: "flex",
                        alignItems: "center" ,  flexDirection: "column", paddingTop:"1%"}}>
                        <div style={{height:"30%", fontSize: "12px", color: "grey"}}>УДОБНЫЕ КОРТЫ:</div>
                        <div style={{minHeight:"30%"}}>Нужны корты</div>

                    </Col>
                    <Col md="auto" style={{display: "flex",
                        alignItems: "center", paddingTop:"1%"}}>
                        <Button variant="outline-info" style={{margin: 0}}>Invite to play</Button>
                    </Col>
                    
                </Row>
                <hr style={{width: "100%", margin: 0}}/>
                </Fragment>
            ))}
           

        </Container>
        <Footer/>        
      </div>
    )
  }
}
