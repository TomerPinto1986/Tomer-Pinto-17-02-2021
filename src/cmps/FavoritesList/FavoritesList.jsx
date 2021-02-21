import "./FavoritesList.scss";
import Card from "react-bootstrap/Card";

const FavoritesList = ({ favorites, onChangeCurrWeather, units }) => {
    function tempratureToShow(weather) {
        console.log(weather);
        return units === "c"
            ? `${weather.Temperature.Metric.Value} \u00b0C`
            : `${weather.Temperature.Imperial.Value} \u00b0F`;
    }

    return (
        <section className="favorites-list flex wrap justify-center">
            {favorites &&
                favorites.map((weather) => {
                    return (
                        <Card
                            style={{ width: "18rem" }}
                            className="flex column align-center"
                            key={weather.id}
                            onClick={() => onChangeCurrWeather(weather)}
                        >
                            <Card.Title>{weather.city}</Card.Title>
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
