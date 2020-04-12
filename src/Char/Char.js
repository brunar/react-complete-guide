import React from 'react';

const styleChar = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center',
    cursor: 'pointer'
}

const char = (props) => {

    return (
        <div style={styleChar} onClick={props.clicked}>
            {props.character}
        </div>
    );
}

export default char;