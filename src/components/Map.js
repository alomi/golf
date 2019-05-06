import React from "react";
import PropTypes from "prop-types"

function handleSubmit(event) {
    event.preventDefault();
}

function Map(props) {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ol>
                    {props.holes.map((item, index) => (
                        <li key={index}>
                            {item}
                            <input type="number"/>
                        </li>
                    ))}
                </ol>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

Map.propTypes = {
    holes: PropTypes.array.isRequired
};

export default Map;

