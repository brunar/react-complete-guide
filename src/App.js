import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 
//The name of the component should be Uppercase (for components es6)
//Because elements starting with lowercase are native Html elements. 

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Hi, I'm React App</h1>
          <p>This is really working!</p>
          <Person name="Max" age="28" />
          <Person name="Manu" age="29" />
          <Person name="John" age="35">Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
