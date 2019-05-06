import StartMessage from "./StartMessage";
import logo from "../static/images/logo.svg";
import LearnReact from "./LearnReact";
import React from "react";
import PropTypes from "prop-types";

function Header(props) {
    return <header className="App-header">
        <StartMessage name={props.name} />
        <img src={logo} className="App-logo" alt="logo" />

        <LearnReact/>
    </header>
}

Header.propTypes = {
    name : PropTypes.string.isRequired
};

export default Header;