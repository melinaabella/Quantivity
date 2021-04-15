import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <ul>
            <li>
                <Link to="/">Homepage</Link>
            </li>
            <li>
                <Link to="/Login">Login</Link>
            </li>
            <li>
                <Link to="/CreateAccountForm">Create Account</Link>
            </li>
            <li>
                <Link to="/projectwebsite">projectwebsite</Link>
            </li>
            <li>
                <Link to="/quansheet"></Link>
            </li>

        </ul>
    );
}

export default NavBar;