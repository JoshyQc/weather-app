import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../constants/weathers';

const location = "Guatemala, gt"
const api_key = ""
const url_base_weather = ""

const data = {
    temperature: 5,
    weatherState: SUN,
    huminity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 14,
    weatherState: RAIN,
    huminity: 18,
    wind: '25 m/s',
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };
    }

    handleUpdateClick = () => {
        console.log("actualizado");

        this.setState({
            city: 'Buenos Aires!',
            data: data2,
        });
    }

    render() {
        const {city, data} = this.state;

        return (<div className="weather-location-count">
            <Location city={city} />
            <WeatherData data={data} />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>

        );
    }
}

export default WeatherLocation;