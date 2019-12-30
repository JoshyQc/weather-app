import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({huminity, wind}) =>(
    <div className="weather-extra-info-cont">
        <span className="extra-info-text">{`Humedad: ${huminity}% `}</span>
        <span className="extra-info-text">{`Vientos: ${wind}`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    huminity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;