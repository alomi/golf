import React from "react";
import PropTypes from "prop-types"

function StartMessage(props) {
    return <h1> Hello, {props.name}</h1>
}

StartMessage.propTypes = {
  name : PropTypes.string.isRequired
};

export default StartMessage;

