import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <ul>
            <li>
                <Link to="/">homepage</Link>
            </li>
            <li>
                <Link to="/Loginform">Loginform</Link>
            </li>
            <li>
                <Link to="/quansheet">quansheet</Link>
            </li>
            <li>
                <Link to="/projectwebsite">projectwebsite</Link>
            </li>

        </ul>
    );
}

export default NavBar;