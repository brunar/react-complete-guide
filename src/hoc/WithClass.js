import React from 'react';

const withClass = (WrappedComponent, classNameArg) => {
    return props => (
        <div className={classNameArg}>
            <WrappedComponent />
        </div>
    )
};

export default withClass;