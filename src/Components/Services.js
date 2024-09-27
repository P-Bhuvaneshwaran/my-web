import React from 'react';
import { useLocation } from 'react-router-dom';

function Services(){
    const locat = useLocation();
    return(
        <div>
            <h2>Service page</h2>
        </div>
    )
}

export default Services;