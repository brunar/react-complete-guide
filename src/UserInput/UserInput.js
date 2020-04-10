import React from "react";

const userInput = (props) => {

    const inputStyle = {
        border: '2px solid red',
        padding: '10px',
        fontSize: '18px',
        marginTop: '50px'
    }

    return <input
        type="text"
        style={inputStyle}
        onChange={props.changed}
        value={props.currentName} />;
}

export default userInput;