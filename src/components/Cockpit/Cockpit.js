import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
      background-color: ${props => props.alte ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: none;
      padding: 12px;
      cursor: pointer;
      outline: none;

      &:hover {
        background-color: ${props => props.alte ? 'salmon' : 'lightgreen'};
        color: black;
      }
`;

const cockpit = (props) => {
    //More important and useful lifecycle hooks
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //http request...
    });

    //Can be let or const, because never assign new value in the array
    //let classes = ['highlight', 'thick'].join(' '); //Then bellow the output is: className={classes}
    //OR this way, then bellow the output is: className={classes.join('')} as you can see
    const classes = [];

    if (props.showPersonsPp) {
        console.log('showPersons True')
    }
    if (props.persons.length <= 2) {
        classes.push('highlight');
    }
    if (props.persons.length <= 1) {
        classes.push('thick');
    }

    return (
        <div className="Cockpit">
            <h1>{props.titlebr}</h1>
            <p className={classes.join(' ')}>Click in each paragraph to delete/splice</p>
            <StyleButton alte={props.showPersonsPp} onClick={props.clickedit}>Toogle Persons</StyleButton>
        </div>
    );
}
export default cockpit;