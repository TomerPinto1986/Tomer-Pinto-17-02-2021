import React from "react";
import { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

import "./LocationSearch.scss";

const LocationSearch = ({ onSearch, isDark }) => {
    const [search, setSearch] = useState("");
    const [errorMsg, setErrorMsg] = useState(null);

    function handleChange(e) {
        setSearch(e.target.value);
    }

    function handleSubmit(e) {
        if (errorMsg) return;
        e.preventDefault();
        if (!search.length) {
            setErrorMsg("Please enter a location name.");
            setTimeout(() => {
                setErrorMsg(null);
            }, 2000);
        } else {
            const myRe = /^[a-zA-Z]+$/;
            const valid = myRe.test(search);
            if (valid) {
                onSearch(search);
            } else {
                setErrorMsg("Only English letters are allowed.");
                setTimeout(() => {
                    setErrorMsg(null);
                }, 2000);
            }
        }
    }

    function themeMode() {
        return isDark ? "outline-light" : "outline-dark";
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
                {!errorMsg && (
                    <Button onClick={handleSubmit} variant={themeMode()}>
                        Search
                    </Button>
                )}
            </Form>
            {errorMsg && <p>{errorMsg}</p>}
        </section>
    );
};

export default LocationSearch;
