import React from "react";
import { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

import "./LocationSearch.scss";

const LocationSearch = ({ onSubmit }) => {
    const [search, setSearch] = useState("");

    function handleChange(e) {
        setSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submiting");
        onSubmit(search);
    }

    return (
        <section className="location-search">
            <Form inline onSubmit={handleSubmit}>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    value={search}
                    onChange={handleChange}
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </section>
    );
};

export default LocationSearch;
