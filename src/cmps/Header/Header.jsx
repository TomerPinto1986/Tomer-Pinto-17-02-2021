import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { changeUnits } from "../../store/actions/weatherActions";

import "./Header.scss";

const Header = (props) => {
    function onChangeUnits(units) {
        props.changeUnits(units);
    }
    return (
        <header className="header">
            <Navbar bg="light" expand="lg">
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
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

const mapDispatchToProps = {
    changeUnits,
};

export default connect(null, mapDispatchToProps)(Header);
