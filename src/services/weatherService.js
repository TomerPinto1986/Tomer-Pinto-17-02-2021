import axios from "axios";
import { storageService } from "./storageService";

const API_KEY = "XhxzoYMHxt8QuBm3XRztsUGdBZCexYYS";
const WEATHER_KEY = "weather";
const FAVORITES = "favorites";
const gFavorites = storageService.loadFromStorage(FAVORITES) || [];

export const weatherService = {
    getGeoWeather,
    getCurrWeather,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    getFavorites,
};

function getFavorites() {
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

function getPosition() {
    return new Promise((success, error) => {
        navigator.geolocation.getCurrentPosition(success, error);
    });
}

async function getGeoWeather() {
    var position = await getPosition();
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // const res = await axios(
    //     `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude}%2C${longitude}`
    // );
    // const city = res.data.LocalizedName;
    const city = "london";
    const currWeather = await getCurrWeather(city);
    return currWeather;
}

async function getCurrWeather(q) {
    let weather = storageService.loadFromStorage(WEATHER_KEY);
    if (weather) return weather;
    try {
        const city = await axios(
            `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${q}`
        );
        const todayWeather = await axios(
            `https://dataservice.accuweather.com/currentconditions/v1/${city.data[0].Key}?apikey=${API_KEY}`
        );
        const weeklyWeather = await axios(
            `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${city.data[0].Key}?apikey=${API_KEY}&metric=true`
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
