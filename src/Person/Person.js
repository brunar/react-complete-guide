import React from 'react';
import Radium from 'radium'
import './Person.css'; //Need the file extension .css You can only omit it for javascript files.
//External CSS  are injected dynamically by webpack, than becames internal and It automatically prefix for many browsers

//There is a special props.children 
//It will access the property inside the tags wrapped including plain text

const person = (props) => {
    const styleResp = {
        //Have to import and Export Radium in the component for use @media-queries
        '@media (min-width: 500px)': {
            width: '450px',
            border: '1px solid blue'
        },
        border: '1px solid orange'
    }

    return (
        <div className="Person" style={styleResp}>
            <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Radium(person);