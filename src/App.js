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
    otherState: "some other value"
  }

  //Handling Events with Methods - Event onClick
  //https://reactjs.org/docs/events.html#supported-events
  //Method
  switchNameHandler = () => {
    //console.log("Was clicked");
    //DON'T DO THIS: this.state.persons[0].name = "Maximilian"
    this.setState({
      persons: [
        { name: "Maximilian", age: 48 },
        { name: "Manuelle", age: 29 },
        { name: "John", age: 35 }
      ]
    })

  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App  </h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
