import React from 'react';
import NavBar from '../components/Organisms/NavBar';

export default (props) => {

    return (
        <React.Fragment>
            <div>
                <NavBar />
                {/* Hero unit */}
                <div>
                    <props.Component {...props} />
                </div>
            </div>
        </React.Fragment>
    );
}