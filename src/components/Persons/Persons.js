import React from 'react';
import Person from './Person/Person'

//Because map is a js no need to include the backets and the return, this is the shortcode Es6
const personslist = (props) => props.personsatt.map((personsArg, index) => {
    return <Person
        click={() => props.clicked(index)}
        name={personsArg.name}
        age={personsArg.age}
        key={personsArg.id}
        changed={(event) => props.changed(event, personsArg.id)} />
})


export default personslist;