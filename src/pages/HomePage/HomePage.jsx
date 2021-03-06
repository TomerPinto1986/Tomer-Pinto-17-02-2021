import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import LocationSearch from "../../cmps/LocationSearch/LocationSearch";
import WeatherPreview from "../../cmps/WeatherPreview/WeatherPreview";
import WeeklyList from "../../cmps/WeeklyList/WeeklyList";
import { weatherService } from "../../services/weatherService";
import {
    getCurrWeather,
    addCityToFavorites,
    removeFromFavorites,
    getGeoWeather,
} from "../../store/actions/weatherActions";

import "./HomePage.scss";

const HomePage = (props) => {
    const [favBtnText, setFavBtnText] = useState("");

    useEffect(() => {
        if (props.currWeather) {
            setFavBtnText(
                weatherService.isFavorite(props.currWeather.id)
                    ? "favorite fas fa-star"
                    : "favorite far fa-star"
            );
        } else {
            (async function getWether() {
                try {
                    const currWeather = await props.getGeoWeather();
                    setFavBtnText(
                        weatherService.isFavorite(currWeather.id)
                            ? "favorite fas fa-star"
                            : "favorite far fa-star"
                    );
                } catch (err) {
                    console.log("Error", err);
                }
            })();
        }
    }, []);

    async function handleSubmit(term) {
        try {
            const currWeather = await props.getCurrWeather(term);
            setFavBtnText(
                weatherService.isFavorite(currWeather.id)
                    ? "favorite fas fa-star"
                    : "favorite far fa-star"
            );
        } catch (err) {
            console.log("Error", err);
        }
    }

    function toggleFavorite() {
        weatherService.isFavorite(props.currWeather.id)
            ? props.removeFromFavorites(props.currWeather.id)
            : props.addCityToFavorites(props.currWeather);
        toggleAddRemove();
    }

    function toggleAddRemove() {
        setFavBtnText(
            weatherService.isFavorite(props.currWeather.id)
                ? "favorite fas fa-star"
                : "favorite far fa-star"
        );
    }

    function themeMode() {
        return props.isDark ? "home-page dark" : "home-page ";
    }

    return (
        <div className={themeMode()}>
            {props.currWeather && (
                <div>
                    <span className="header flex space-between">
                        <span className="flex column align-center">
                            <WeatherPreview
                                weather={props.currWeather.today}
                                city={props.currWeather.city}
                                favBtnText={favBtnText}
                                toggleFavorite={toggleFavorite}
                                units={props.units}
                                isDark={props.isDark}
                            />
                        </span>
                        <LocationSearch
                            isDark={props.isDark}
                            onSearch={handleSubmit}
                        />
                    </span>
                    <WeeklyList
                        WeeklyList={props.currWeather.weekly.DailyForecasts}
                        units={props.units}
                        isDark={props.isDark}
                    />
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currWeather: state.weatherReducer.currWeather,
        units: state.weatherReducer.units,
        isDark: state.weatherReducer.isDark,
    };
};

const mapDispatchToProps = {
    getGeoWeather,
    getCurrWeather,
    addCityToFavorites,
    removeFromFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
