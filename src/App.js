import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 
//The name of the component should be Uppercase (for components es6)
//Because elements starting with lowercase are native Html elements. 

class App extends Component {

  state = {
    persons: [
      { name:"Max", age:28 },
      { name:"Manu", age:29 },
      { name:"John", age:35 }  
    ]
  }
  render() {
    return (
      <div className="App">
          <h1>Hi, I'm React App</h1>
          <p>This is really working!</p>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
