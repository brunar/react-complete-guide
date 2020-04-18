import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    login: () => { }
}); //initialise value

export default authContext;