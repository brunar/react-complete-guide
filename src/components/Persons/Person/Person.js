import React, { Component } from 'react';
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

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        //Return many elements as Array [] - need to add a key and separate each element with comma,
        return [
            <p key="i1" onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>,
            <p key="i2">{this.props.children}</p>,
            <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
        ]
    }
}

export default Person;