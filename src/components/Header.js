import StartMessage from "./StartMessage";
import logo from "../static/images/logo.svg";
import LearnReact from "./LearnReact";
import React from "react";
import PropTypes from "prop-types";
import Map from "./Map";

function Header(props) {
    return <header className="App-header">
        <StartMessage name={props.name} />
        <img src={logo} className="App-logo" alt="logo" />
        <Map holes={[3,4,4,3,3,3,3,5,3,3,3,3,5,3,3,3,4,3]} />
        <LearnReact/>
    </header>
}

Header.propTypes = {
    name : PropTypes.string.isRequired
};

export default Header;