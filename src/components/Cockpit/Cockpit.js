import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../../context/auth-context';

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
    const toggleBtnRef = useRef(null);
    const authContextBr = useContext(AuthContext); // Name Object that you imported in the top

    //More important and useful lifecycle hooks
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //http request...
        //Runs when component is mounted
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        //Runs only once because the last []
        toggleBtnRef.current.click();
        //Runs when componet is unmounts
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []); //IMPORTANT see the comments bellow
    // [] - if null alert will render only once in the page when refresh
    // [props.persons] - alert will render only when change the state persons
    // if nothing - alert will render all the time every cycle

    //Can be used many times..
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });  // if nothing - alert will render all the time every cycle

    //Can be let or const, because never assign new value in the array
    //let classes = ['highlight', 'thick'].join(' '); //Then bellow the output is: className={classes}
    //OR this way, then bellow the output is: className={classes.join('')} as you can see
    const classes = [];

    if (props.showPersonsPp) {
        console.log('showPersons True')
    }
    if (props.personsLength <= 2) {
        classes.push('highlight');
    }
    if (props.personsLength <= 1) {
        classes.push('thick');
    }

    return (
        <div className="Cockpit">
            <h1>{props.titlebr}</h1>
            <p className={classes.join(' ')}>Click in each paragraph to delete/splice</p>
            <StyleButton ref={toggleBtnRef} alte={props.showPersonsPp} onClick={props.clickedit}>Toogle Persons</StyleButton>
            {/* here call the const authContextBr */}
            <button onClick={authContextBr.login}>Log in</button>
        </div>
    );
}
export default React.memo(cockpit);