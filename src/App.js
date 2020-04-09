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
  const switchNameHandler = (newName) => {
    //console.log("Was clicked");
    setPersonsState({
      persons: [
        { name: newName, age: 48 },
        { name: "Manuelle", age: 29 },
        { name: "John", age: 35 }
      ]
    })
  }

  const nameChangeHanler = (event) => {
    setPersonsState({
      persons: [
        { name: "Max", age: 48 },
        { name: event.target.value, age: 29 },
        { name: "John", age: 35 }
      ]
    })
  }
  return (
    <div className="App">
      <h1>Hi, I am React App</h1>
      <p>This is really working!</p>
      <p>Test it in the second input: Manuelle is changing the value of the input.</p>
      <p>The error is because we did not set the logic in the first or last input.</p>
      <button onClick={() => switchNameHandler('Maximilian!!')}>Switch Name</button>
      {/* Anonymous Function inside onClick */}
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        changed={nameChangeHanler} />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
        click={switchNameHandler.bind(this, 'Bruna!')}>Hobbies: Racing</Person>

      {/* click = is a property and pass a reference to this handler/Method 
        as a property to our component Persons.

        Passing methods as props so that you can call a method which might
        change the state in another component which doesn't have direct access
        to the state and which shouldn't have direct access to the state.

        Passing down click handlers allow you to change data in the parent component.

        Two ways of Bind:
        //This way can be inefficient, react can re-render certain things.
        onClick={() => return switchNameHandler('Maximilian')}  

        //Recommend this way with bind
        click={switchNameHandler.bind(this, 'Bruna!')} 

        */}
    </div>
  );
}

export default app;