import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//The name of the component should be Uppercase (for components es6)
//Because elements starting with lowercase are native Html elements. 

class App extends Component {

  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "John", age: 35 }
    ],
    otherState: "some other value",
    showPersons: false
  }
  //Handling Events with Methods - Event onClick
  //https://reactjs.org/docs/events.html#supported-events
  //Method
  switchNameHandler = (newName) => {
    //console.log("Was clicked");
    //DON'T DO THIS: this.state.persons[0].name = "Maximilian"
    this.setState({
      persons: [
        { name: newName, age: 48 },
        { name: "Manuelle", age: 29 },
        { name: "John", age: 35 }
      ]
    })
  }

  nameChangeHanler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 48 },
        { name: event.target.value, age: 29 },
        { name: "John", age: 35 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    //Inline Style - This is a Javascript way and has to be camelCase with Single Quotes and comma(,)
    //Better used a global style, this case is to be used only if need apply to a single element or componet in a scope as exceptions
    const styleit = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid orange',
      padding: '8px',
      cursor: 'pointer',
      outline: 'none'
    }

    //create a variable with first state null
    let personsVar = null;

    //Conditional
    //State showPerson === true
    if (this.state.showPersons) {
      personsVar = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangeHanler} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, 'Bruna!')}>Hobbies: Racing</Person>
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App </h1>
        <p>This is really working!</p>
        <button style={styleit} onClick={this.togglePersonsHandler}>Toogle Persons</button>
        {/********* And include a personsVar Conditional below 
         * if true show div if false = null ********* */}
        {personsVar}
      </div>
    );
  }
}

export default App;