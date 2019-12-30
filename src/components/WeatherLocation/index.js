import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = () => (
    <div className="weather-location-count">
        <Location city={"Brasil"}/>
        <WeatherData/>
    </div>
);

export default WeatherLocation;