import React from 'react';
import styled from 'styled-components';
//import './Person.css'; //Need the file extension .css You can only omit it for javascript files.
//External CSS  are injected dynamically by webpack, than becames internal and It automatically prefix for many browsers

//There is a special props.children 
//It will access the property inside the tags wrapped including plain text

const StyledDiv = styled.div`
width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
        border: 3px solid pink;
    }
`;

const person = (props) => {
    console.log('[Person.js] rendering...')
    return (
        //<div className="Person" style={styleResp}></div>
        <StyledDiv>
            <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
}

export default person;