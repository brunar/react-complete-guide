import React, { Component } from 'react';
import Person from './Person/Person'

//Because map is a js no need to include the backets and the return, this is the shortcode Es6
class Personslist extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }
    //You can save some state in the Dom before update (like scroll position)
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        //return null; //or a message
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }
    //Any code that needs to run right before the component is removed
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');

        return this.props.personsatt.map((personsArg, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={personsArg.name}
                age={personsArg.age}
                key={personsArg.id}
                changed={(event) => this.props.changed(event, personsArg.id)} />
        })
    }
}


export default Personslist;