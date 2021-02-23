import React from "react";
import Card from "react-bootstrap/Card";

import "./WeatherPreview.scss";

const WeatherPreview = ({
    weather,
    city,
    toggleFavorite,
    favBtnText,
    units,
    isDark,
}) => {
    function tempratureToShow() {
        return units === "c"
            ? `${weather.Temperature.Metric.Value} \u00b0C`
            : `${weather.Temperature.Imperial.Value} \u00b0F`;
    }

    function themeModeBg() {
        return isDark ? "dark" : "light";
    }
    function themeModeTxt() {
        return isDark ? "light" : "dark";
    }
    return (
        <Card
            style={{ width: "18rem" }}
            bg={themeModeBg()}
            text={themeModeTxt()}
            className="weather-preview flex column align-center"
        >
            <Card.Title>{city}</Card.Title>
            <Card.Img
                variant="top"
                src={`./icons/${weather.WeatherIcon}.png`}
            />
            <i onClick={toggleFavorite} className={favBtnText}></i>
            <Card.Text>{tempratureToShow()}</Card.Text>
            <Card.Title>{weather.WeatherText}</Card.Title>
        </Card>
    );
};

export default WeatherPreview;
