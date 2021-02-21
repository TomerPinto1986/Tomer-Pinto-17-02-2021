import { weatherService } from "../../services/weatherService";

const INITIAL_STATE = {
    currWeather: null,
    favorites: weatherService.getFavorites(),
    units: "c",
};

export function weatherReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_CURR_WEATHER":
            return { ...state, currWeather: action.currWeather };
        case "UPDATE_FAVORITES":
            return { ...state, favorites: action.favorites };
        case "CHANGE_UNITS":
            return { ...state, units: action.units };
        default:
            return state;
    }
}
