import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import FavoritesList from "../../cmps/FavoritesList/FavoritesList";
import { setCurrWeather } from "../../store/actions/weatherActions";

import "./Favorites.scss";

const Favorites = (props) => {
    const [favorites, setFavorites] = useState(null);
    useEffect(() => {
        setFavorites(props.favorites);
    });

    function changeCurrWeather(weather) {
        props.setCurrWeather(weather);
        props.history.push("/");
    }

    function themeMode() {
        return props.isDark
            ? "favorites dark flex column align-center"
            : "favorites flex column align-center";
    }

    return (
        <div className={themeMode()}>
            <h2>Favorites Locations</h2>
            {favorites && (
                <FavoritesList
                    favorites={favorites}
                    onChangeCurrWeather={changeCurrWeather}
                    units={props.units}
                    isDark={props.isDark}
                />
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        favorites: state.weatherReducer.favorites,
        units: state.weatherReducer.units,
        isDark: state.weatherReducer.isDark,
    };
};

const mapDispatchToProps = {
    setCurrWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
