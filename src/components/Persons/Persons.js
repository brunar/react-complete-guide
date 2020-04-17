import React, { Component } from 'react';
import Person from './Person/Person'

//Because map is a js no need to include the backets and the return, this is the shortcode Es6
class Personslist extends Component {
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