import React from 'react';
import { WithRouter } from 'react-router';

export default WithRouter((props) => {
    console.log(props);
    return (
        <div>
            Cheeky
        </div>
    )
})
