import React from 'react';

const withClass = props => (
    <div className={props.classespro}>{props.children}</div>
);

export default withClass;