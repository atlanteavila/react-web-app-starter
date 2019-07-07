import React from 'react';

export default (props) => {

    return (
        <React.Fragment>
            <div>
                {/* Hero unit */}
                <div>
                    <props.Component {...props} />
                </div>
            </div>
        </React.Fragment>
    );
}