import React from "react";
import Card from "react-bootstrap/Card";

import "./WeatherPreview.scss";

const WeatherPreview = ({
    weather,
    city,
    toggleFavorite,
    favBtnText,
    units,
}) => {
    function tempratureToShow() {
        return units === "c"
            ? `${weather.Temperature.Metric.Value} \u00b0C`
            : `${weather.Temperature.Imperial.Value} \u00b0F`;
    }
    return (
        <Card
            style={{ width: "18rem" }}
            className="weather-preview flex column align-center"
        >
            <Card.Title>{city}</Card.Title>
            <i onClick={toggleFavorite} className={favBtnText}></i>
            <Card.Text>{tempratureToShow()}</Card.Text>
            <Card.Title>{weather.WeatherText}</Card.Title>
        </Card>
    );
};

export default WeatherPreview;
