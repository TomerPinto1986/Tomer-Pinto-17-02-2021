import "./FavoritesList.scss";
import Card from "react-bootstrap/Card";

const FavoritesList = ({ favorites, onChangeCurrWeather, units, isDark }) => {
    function tempratureToShow(weather) {
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
        <section className="favorites-list flex wrap justify-center">
            {favorites &&
                favorites.map((weather) => {
                    return (
                        <Card
                            style={{ width: "18rem" }}
                            className="flex column align-center favorite-preview"
                            key={weather.id}
                            onClick={() => onChangeCurrWeather(weather)}
                            bg={themeModeBg()}
                            text={themeModeTxt()}
                        >
                            <Card.Title>{weather.city}</Card.Title>
                            <Card.Img
                                variant="top"
                                src={`./icons/${weather.today.WeatherIcon}.png`}
                            />
                            <Card.Text>
                                {tempratureToShow(weather.today)}
                            </Card.Text>
                        </Card>
                    );
                })}
        </section>
    );
};

export default FavoritesList;
