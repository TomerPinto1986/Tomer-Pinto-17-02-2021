import React from "react";
import moment from "moment";
import Card from "react-bootstrap/Card";

import "./WeeklyList.scss";

const WeeklyList = ({ WeeklyList, units }) => {
    function tempratureToShow(min, max) {
        return units === "c"
            ? `${min} - ${max} \u00b0C`
            : `${Math.floor(min * 1.8 + 32)} - ${Math.floor(
                  max * 1.8 + 32
              )} \u00b0F`;
    }

    return (
        <section className="weekly-list flex wrap justify-center">
            {WeeklyList.map((weather) => {
                return (
                    <Card
                        style={{ width: "18rem" }}
                        className="weather-preview flex column align-center"
                        key={weather.EpochDate}
                    >
                        <Card.Title>
                            {moment(weather.Date).format("ddd")}
                        </Card.Title>
                        <Card.Text>
                            {tempratureToShow(
                                weather.Temperature.Minimum.Value,
                                weather.Temperature.Maximum.Value
                            )}
                        </Card.Text>
                    </Card>
                );
            })}
        </section>
    );
};

export default WeeklyList;
