import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { changeUnits, changeTheme } from "../../store/actions/weatherActions";

import "./Header.scss";

const Header = (props) => {
    function onChangeUnits(units) {
        props.changeUnits(units);
    }

    function onChangeTheme(theme) {
        props.changeTheme(theme);
    }

    function themeMode() {
        return props.isDark ? "dark" : "light";
    }
    return (
        <header className="header">
            <Navbar bg={themeMode()} variant={themeMode()} expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#favorites">Favorites</Nav.Link>
                        <NavDropdown
                            title="&deg;F / &deg;C"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item
                                onClick={() => onChangeUnits("c")}
                            >
                                Celsius
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => onChangeUnits("f")}
                            >
                                Fahrenheit
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Theme" id="basic-nav-dropdown1">
                            <NavDropdown.Item
                                onClick={() => onChangeTheme("dark")}
                            >
                                Dark
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => onChangeTheme("light")}
                            >
                                Light
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        isDark: state.weatherReducer.isDark,
    };
};

const mapDispatchToProps = {
    changeUnits,
    changeTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
