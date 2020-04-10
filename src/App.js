import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
//The name of the component should be Uppercase (for components es6)
//Because elements starting with lowercase are native Html elements. 

//React hooks does not merge the old state,but replaces with the new state.
//Recomend useState multiple times and separated different slices of state.
const app = props => {

  const [userNameState, setUserNameState] = useState({
    users: [
      { userName: "Bruna" },
      { userName: "Bruna two" }
    ]
  })

  console.log(userNameState);

  //Handling Events with Methods - Event onClick
  //https://reactjs.org/docs/events.html#supported-events
  //Method
  const usernameChangeHandler = (event) => {
    setUserNameState({
      users: [
        { userName: event.target.value },
        { userName: event.target.value }
      ]
    })
  }

  //Inline Style - This is a Javascript way and has to be camelCase with Single Quotes and comma(,)
  //Better used a global style, this case is to be used only if need apply to a single element or componet in a scope as exceptions
  const styleit = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '2px solid blue',
    padding: '8px',
    cursor: 'pointer',
    outline: 'none'
  }

  return (
    <div className="App">
      <UserInput
        changed={usernameChangeHandler}
        currentName={userNameState.users[0].userName} />
      <UserOutput userName={userNameState.users[0].userName} />
      <UserOutput userName={userNameState.users[1].userName} />
      <UserOutput userName="Max" />
      {/* Case sensitive names as userName do not work in a normal html but this is jsx, looks like html but is not */}

    </div>
  );
}

export default app;