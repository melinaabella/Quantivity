import React from 'react';
import { Link } from 'react-router-dom';

function Activitylog(){
    return(
        <ul>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/quansheet">quansheet</Link>
            </li>
        </ul>
    );
}

export default Activitylog;