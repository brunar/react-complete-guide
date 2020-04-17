import React from 'react';
//fixing the state by spreading props {...props} inside WrappedComponent
const withClass = (WrappedComponent, classNameArg) => {
    return props => (
        <div className={classNameArg}>
            <WrappedComponent {...props} />
        </div>
    )
};

export default withClass;