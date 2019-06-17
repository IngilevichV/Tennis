import React, {Fragment} from 'react';
import $ from 'jquery';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {Jumbotron} from 'react-bootstrap';
import withAuth from './HOC/withAuth';

class HomePage extends React.Component {
  state={
    username:'',
    password:'',
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  componentDidMount() {
    $.getJSON( "/api/matches", ( data ) => {
      this.setState({ matches: data });
    });
  }

  render = () => {
    const position = [this.state.lat, this.state.lng];
    console.info(this.props);

    return (
      <div>
        <Header/>

        <Jumbotron style={{margin: "0",  padding: "5px"}}>
          <div className="text-center">
            <h1 >Let's play tennis</h1>
            <p>Tennis Tennis Tennis</p>
            {/* <SearchBar/> */}
          </div>
          <div style={{width: "100%", height: "100%"}}>
          <Map center={position} zoom={this.state.zoom} style={{width: "100%", height: "500px"}}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Tennis court
              </Popup>
            </Marker>
          </Map>
        </div>

        </Jumbotron>
        
      <Footer/>        
      </div>
    )
  }
}

export default withAuth(HomePage)
