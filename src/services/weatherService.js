import axios from "axios";
import { storageService } from "./storageService";

const API_KEY = "bouPb7Ob1dDQ3V3OvFX3udSa8KKD2QYq";
const WEATHER_KEY = "weather";
const FAVORITES = "favorites";
const gFavorites = storageService.loadFromStorage(FAVORITES) || [];

export const weatherService = {
    getCurrWeather,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    getFavorites,
};

function getFavorites() {
    console.log(gFavorites);
    return gFavorites;
}

function isFavorite(id) {
    return gFavorites.some((city) => city.id === id);
}

function addToFavorites(city) {
    gFavorites.push(city);
    storageService.saveToStorage(FAVORITES, gFavorites);
    return gFavorites;
}

function removeFromFavorites(id) {
    const cityIdx = gFavorites.findIndex((city) => city.id === id);
    if (cityIdx !== -1) {
        gFavorites.splice(cityIdx, 1);
        storageService.saveToStorage(FAVORITES, gFavorites);
        return gFavorites;
    } else return -1;
}

async function getCurrWeather(q) {
    let weather = storageService.loadFromStorage(WEATHER_KEY);
    if (weather) return weather;
    try {
        const city = await axios(
            `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${q}`
        );
        const todayWeather = await axios(
            `http://dataservice.accuweather.com/currentconditions/v1/${city.data[0].Key}?apikey=${API_KEY}`
        );
        const weeklyWeather = await axios(
            `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city.data[0].Key}?apikey=${API_KEY}&metric=true`
        );
        weather = {
            id: city.data[0].Key,
            city: city.data[0].LocalizedName,
            today: todayWeather.data[0],
            weekly: weeklyWeather.data,
        };
        storageService.saveToStorage(WEATHER_KEY, weather);
        return weather;
    } catch (err) {
        console.log("Error", err);
        throw err;
    }
}
