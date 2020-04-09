import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
//The name of the component should be Uppercase (for components es6)
//Because elements starting with lowercase are native Html elements. 

//React hooks does not merge the old state,but replaces with the new state.
//Recomend useState multiple times and separated different slices of state.
const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "John", age: 35 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value'); //can be only a string

  console.log(personsState, otherState);

  //Handling Events with Methods - Event onClick
  //https://reactjs.org/docs/events.html#supported-events
  //Method
  const switchNameHandler = () => {
    //console.log("Was clicked");
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 48 },
        { name: "Manuelle", age: 29 },
        { name: "John", age: 35 }
      ]
    })

  }
  return (
    <div className="App">
      <h1>Hi, I'm React App  </h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>Hobbies: Racing</Person>
    </div>
  );
}

export default app;