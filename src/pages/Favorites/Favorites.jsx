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

    return (
        <div className="favorites flex column align-center">
            <h2>Favorites Locations</h2>
            {favorites && (
                <FavoritesList
                    favorites={favorites}
                    onChangeCurrWeather={changeCurrWeather}
                    units={props.units}
                />
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        favorites: state.weatherReducer.favorites,
        units: state.weatherReducer.units,
    };
};

const mapDispatchToProps = {
    setCurrWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
