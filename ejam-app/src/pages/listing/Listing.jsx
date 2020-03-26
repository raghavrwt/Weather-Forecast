import React from 'react';
import './listing.css'
import 'weather-icons/css/weather-icons.css';

const icons = {
    "Scattered Showers": "wi-showers",
    "Rain": "wi-rain",
    "Mostly Cloudy": "wi-day-cloudy-windy",
    "Partly Cloudy": "wi-day-cloudy-windy",
    "Showers": "wi-day-storm-showers",
    "Snow Showers": "wi-day-storm-showers",
    "Cloudy": "wi-day-cloudy",
    "Sunny": "wi-day-sunny",
    "Mostly Sunny": "wi-day-sunny-overcast",
    "Mostly Clear": "wi-night-clear",
    "Scattered Thunderstorms": "wi-day-thunderstorm"
}

const Listing = (props) => {
    console.log(props.cityList);
    return (
        <div className = 'resource-item'>
            <div className = 'resource-current-weather'>
                <div className = 'weather-info-container'>
                    <div className = 'weather-info'>
                        <div className = 'city-info'>
                            <div className = 'city-name larger'>
                                <span>{props.cityList.location.city}</span>
                            </div>
                            <div className = 'date-info smaller'>
                                <span>{props.cityList.forecasts[0].date}</span>
                            </div>    
                        </div>
                        <div className = 'weather-information'>
                            <div className = 'temperature larger'>
                                <span>{`${props.cityList.current_observation.condition.temperature} C`}</span>
                            </div>
                            <div className = 'highlow smaller'>
                                <span>{`${props.cityList.forecasts[0].high} / ${props.cityList.forecasts[0].low}`}</span>
                            </div>
                            <div className = 'condition-text smaller'>
                                
                                <span><i className={`wi ${icons[props.cityList.current_observation.condition.text]}`}></i> {props.cityList.current_observation.condition.text}</span>
                            </div>
                        </div>
                        <div className = 'extra-info'>
                            <div className = 'wind-info smaller'>
                                <span>Wind: {`${props.cityList.current_observation.wind.speed}km/h`}</span>
                            </div>
                            <div className = 'humidity-info smaller'>
                                <span>Humidity: {`${props.cityList.current_observation.atmosphere.humidity}%`}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'img-container'>
                    <i className={`wi ${icons[props.cityList.current_observation.condition.text]}`}></i>
                </div>
            </div>
            <div className = "nextdays-container">
                {props.cityList.forecasts.map((ele, index) => {
                     return index > 0 && (
                        <div className = 'nextday'>
                            <div className = 'date-text'>
                                {ele.date}
                            </div>
                            <div className = "icon-container">
                                <i className={`wi ${icons[ele.text]}`}></i>
                            </div>
                            <div className = 'weather-text'>
                                {ele.text}
                            </div>
                            <div className = 'temperature-text'>
                                {`${ele.high} / ${ele.low} C`}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Listing;
