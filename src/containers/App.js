import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from '../components/Persons/Person/Person';
//The name of the component should be Uppercase (for components es6)
//Because elements starting with lowercase are native Html elements. 

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

class App extends Component {

  state = {
    persons: [
      { id: 'bawr1', name: "Max", age: 28 },
      { id: 'phbr1', name: "Manu", age: 29 },
      { id: 'br11', name: "John", age: 35 }
    ],
    otherState: "some other value",
    showPersons: false
  }

  nameChangedHandler = (event, idArg) => {
    const personId = this.state.persons.findIndex(p => {
      return p.id === idArg;
    }); //or .findIndex()

    const personTarget = {
      ...this.state.persons[personId]
    };

    personTarget.name = event.target.value;

    const personsGroup = [...this.state.persons];
    personsGroup[personId] = personTarget

    this.setState({ persons: personsGroup })
  }

  deletePersonHandler = (personIndex) => {
    //IMPORTANT *** Updating State Immutably **** 
    //const personsDel = this.state.persons; //BAD way - This is mutating the original data
    //Good Practice - create a copy of your persons array before manipulating it
    //const personsDel = this.state.persons.slice(); //Slice is a javascript way to create a new array, with the objects from the old array
    const personsDel = [...this.state.persons]; //Better way Es6 with spread [...] to create a new array, with the objects from the old array

    personsDel.splice(personIndex, 1); //get persons state array splice/delete, 1 element of the array, and tells which index by Arg
    this.setState({ persons: personsDel })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    //create a variable with first state null
    let personsVar = null;

    //Conditional
    //State showPerson === true
    if (this.state.showPersons) {
      personsVar = (
        <div>
          {/* Map Js Array *
          * personsArg and anonymous Function */}
          {this.state.persons.map((personsArg, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={personsArg.name}
              age={personsArg.age}
              key={personsArg.id}
              changed={(event) => this.nameChangedHandler(event, personsArg.id)} />
          })}
        </div>
      )
    }

    //Can be let or const, because never assign new value in the array
    //let classes = ['highlight', 'thick'].join(' '); //Then bellow the output is: className={classes}
    //OR this way, then bellow the output is: className={classes.join('')} as you can see
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('highlight');
    }
    if (this.state.persons.length <= 1) {
      classes.push('thick');
    }


    return (
      <div className="App">
        <h1>Hi, I am React App </h1>
        <p className={classes.join(' ')}>Click in each paragraph to delete/splice</p>
        <StyleButton alte={this.state.showPersons} onClick={this.togglePersonsHandler}>Toogle Persons</StyleButton>
        {/********* And include a personsVar Conditional below 
         * if true show div if false = null ********* */}
        {personsVar}
      </div>
    );
  }
}

export default App;