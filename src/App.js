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
          <Person />
          <Person />
          <Person></Person>
      </div>
    );
  }
}

export default App;
