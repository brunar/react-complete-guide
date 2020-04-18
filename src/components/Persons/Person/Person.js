import React, { Component } from 'react';
import styled from 'styled-components';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types'; //This is a Package after yarn add prop-types --save
import AuthContext from '../../../context/auth-context';

//import './Person.css'; //Need the file extension .css You can only omit it for javascript files.
//External CSS  are injected dynamically by webpack, than becames internal and It automatically prefix for many browsers

//There is a special props.children 
//It will access the property inside the tags wrapped including plain text

const StyledDiv = styled.div`
width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
        border: 3px solid pink;
    }
`;

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            //<div className="Person" style={styleResp}></div>
            <Aux>
                <AuthContext.Consumer>
                    {(context) =>
                        context.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p>
                    }
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text"
                    //ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
    }
}

//PropTypes is use to help to check the return data from props, help to show a error of data
//Too see it in Action change the state age in App.js to string Example: age: '22'
//And you will see an error because it expect a number from props not string
//And help to validation props in big applications
Person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

//fixing the props inputs by spreading props in hoc/Withclass.js
export default withClass(Person);
//export default withClass(Person, Classes.Person); //with Module Css Class