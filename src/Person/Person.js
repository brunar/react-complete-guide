import React from 'react';
//There is a special props.children 
//It will access the property inside the tags wrapped including plain text

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;