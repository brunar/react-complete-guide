# React Complete Guide

> Install **Node.js**

### Install create-react-app global
```sh
sudo npm install create-react-app -g
yarn global add create-react-app
```

- cd into the parent folder 
- And the next command will create another folder with the name of the project

### Create a react Project App
```sh
create-react-app my-app --scripts-version 1.1.5
```


# Radium

Radium is a popular package for react which allows us to use **Inline Styles Javascript** with **Pseudo Selectors** and **Media Queries**

### Install Package
```sh
yarn add radium
npm install --save radium
```

### Import and Export

You can use this on both components created with **class and extends component** as well as **functional components**. To export wrap your component inside component Radium(); See example bellow:
```js
import Radium from 'radium';
export default Radium(my-component-name);
```

# Styled Components

Styled Components is a popular package for react 

### Install Package
```sh
yarn add styled-components
npm install --save styled-components
```

#  Working with CSS Modules - Ejecting the Config Folder from Webpack (5-73)
CSS modules automatically generate unique CSS class names behind when webpack compiles it.

 Create-React-App supports css modules right out of the box as of version 2, which is now stable. You do not need to eject. Upgrade to v2 (react-scripts@latest)
```sh
yarn upgrade react-scripts@latest.
```
You just have to create a file with the extension .module.css 
For example:
```css
.myStyle {
  color: #fff
}
```
Then you can use it like so:
```js
import React from 'react'
import styles from 'mycssmodule.module.css'

export default () => <div className={styles.myStyle}>We are styled!</div>
```

- Or yarn eject to edit Config Folder, `webpack.config.dev.js` and `webpack.config.prod.js`
```sh
yarn eject
npm run eject
```
- It will show Folder Config, then edit `webpack.config.dev.js` and `webpack.config.prod.js` 
- If you scroll down until you find this test CSA ( test: /\.css$/)

```js
import classes from './App.css'; //Classes will work like a props for css, you can choose any name

 <button className={classes.Button}>Text</button>
```
JS

```js
import React, { Component } from 'react';
import classes from './App.css'; //Classes will work like a props for css, you can choose any name
import Person from './Person/Person';
//The name of the component should be Uppercase (for components es6)
//Because elements starting with lowercase are native Html elements. 

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
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.highlight);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.thick);
    }


    return (
      <div className={classes.App}>
        <h1>Hi, I am React App </h1>
        <p className={assignedClasses.join(' ')}>Click in each paragraph to delete/splice</p>
        <button className={classes.Button} onClick={this.togglePersonsHandler}>Toogle Persons</button>
        {/********* And include a personsVar Conditional below 
         * if true show div if false = null ********* */}
        {personsVar}
      </div>
    );
  }
}

export default App;
```

And the CSS

```css
.Button {
  background-color: green;
  color: white;
  font: inherit;
  border: none;
  padding: 12px;
  cursor: pointer;
  outline: none;
}

.Button:hover {
  background-color: lightgreen;
  color: black;
}
```