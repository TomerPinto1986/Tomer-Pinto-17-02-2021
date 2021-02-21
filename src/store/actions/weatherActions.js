import { weatherService } from "../../services/weatherService";

export function getCurrWeather(city) {
    return async (dispatch) => {
        try {
            const currWeather = await weatherService.getCurrWeather(city);
            dispatch({ type: "SET_CURR_WEATHER", currWeather });
            return currWeather;
        } catch (err) {
            console.log("Error", err);
            throw err;
        }
    };
}

export function setCurrWeather(currWeather) {
    return (dispatch) => {
        dispatch({ type: "SET_CURR_WEATHER", currWeather });
    };
}

export function addCityToFavorites(city) {
    return async (dispatch) => {
        const favorites = weatherService.addToFavorites(city);
        dispatch({ type: "UPDATE_FAVORITES", favorites });
        return favorites;
    };
}

export function removeFromFavorites(id) {
    return async (dispatch) => {
        const favorites = weatherService.removeFromFavorites(id);
        dispatch({ type: "UPDATE_FAVORITES", favorites });
        return favorites;
    };
}

export function changeUnits(units) {
    return (dispatch) => {
        dispatch({ type: "CHANGE_UNITS", units });
    };
}
