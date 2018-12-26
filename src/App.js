import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">  
          <p>
            Team'Up
          </p>
        </header>
        <Map google={this.props.google} zoom={14} center={'lat: -34.397, lng: 500'}>
        
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCUDWMk5mUwstVFm4-PDClZBp2w1xP5Tjg")
})(App)
