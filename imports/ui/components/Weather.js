import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Images from '../../api/images/images';
import Avatar from './Avatar';
import weather from '../../api/weather/weather';
class Weather extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="profile">
            <h1> Clima en Bogotá: </h1>
            <h2> Descripcion: </h2> <h3> Broken clouds </h3>
            <h2> Temperatura: </h2> <h3>12°C </h3> 
            <h2> Viento: </h2> <h3>2.1 m/s </h3>
            <h2> Humedad: </h2> <h3>87% </h3>
            <h2> Precisión: </h2> <h3>1027 hPa </h3>
            </div>
        );
    }
}

export default Weather;
