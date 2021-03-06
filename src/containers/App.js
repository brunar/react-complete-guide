import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context'

//The name of the component should be Uppercase (for components es6)
//Because elements starting with lowercase are native Html elements. 

// ******* Lifecycle in Action *******************

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    //Old Syntax
    //this.state = {
    //   persons: [
    //     { id: 'bawr1', name: "Max", age: 28 },
    //     { id: 'phbr1', name: "Manu", age: 29 },
    //     { id: 'br11', name: "John", age: 35 }
    //   ],
    //     otherState: "some other value",
    //       showPersons: false
    // }
  }

  //New Syntax Es6
  state = {
    persons: [
      { id: 'bawr1', name: "Max", age: 28 },
      { id: 'phbr1', name: "Manu", age: 29 },
      { id: 'br11', name: "John", age: 35 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }
  //Actually not use that too often
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state; //Should return the updated state
  }

  //Will be removed in Future
  //componentWillMount() {
  //console.log('[App.js] componentWillMount');
  //}

  //Most Important hooks
  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  //Can be use for performance improvements
  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate');
    //return false; //the toogle button won't work because it won't update the state; It's prevent the update
    return true; //By default it's return true than you don't need use this lifecycle Component
  }
  //You can use a snapshot msg before this component lifecycle
  //Most Important hooks
  componentDidUpdate() {
    console.log('[App.js] componetDidUpdate');
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

    this.setState((prevState, props) => {
      return {
        persons: personsGroup,
        changeCounter: prevState.changeCounter + 1
        //see changeCounter updating on React Console , need to select App tag
      };
    });
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

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log('[App.js] render');
    //create a variable with first state null
    let personsVar = null;

    //Conditional
    //State showPerson === true
    if (this.state.showPersons) {
      personsVar = <Persons
        personsatt={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated} />
    }

    return (
      <Aux>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}>Remove Cockpit</button>

        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (<Cockpit
            titlebr={this.props.appTitle}
            showPersonsPp={this.state.showPersons}
            personsLength={this.state.persons.length}
            clickedit={this.togglePersonsHandler} />
          ) : null}
          {personsVar}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App); //Wrap here withClass and change for lowercase because is a function
//export default withClass(App, classes.App); //Wrap here withClass and Modules CSS