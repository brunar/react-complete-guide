import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
//The name of the component should be Uppercase (for components es6)
//Because elements starting with lowercase are native Html elements. 

class App extends Component {

  state = {
    username: 'supermax'
  }
  //Handling Events with Methods - Event onClick
  //https://reactjs.org/docs/events.html#supported-events
  //Method
  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value })
  }

  render() {

    return (
      <div className="App">
        <UserInput
          changed={this.usernameChangeHandler}
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max" />
        {/* Case sensitive names as userName do not work in a normal html 
        but this is jsx, looks like html but is not */}
      </div>
    );
  }
}

export default App;