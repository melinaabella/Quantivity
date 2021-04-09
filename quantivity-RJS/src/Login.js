import React, { useState } from 'react';
import './App.css';
import Loginform from './components/Loginform';


function Login (){

    const memberUser = {
        email: "member@quantivity.com",
        password: "sunshine123"
    }
    
	const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");
    
    const loggedin = details => {
	    console.log(details);

        if (details.email == memberUser.email && details.password == memberUser.password) {
			console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            });
        } else {
            console.log("Details do not match");
            setError("Details do not match");
        }
    }

    
    //log out button 
    const loggedout = () => {
        setUser({ name: "", email: ""});
    }

    return (
            
        <div className="Login">
          	{
				user.email != "" ? (
					<div className="welcome">
                		<h2>Let's begin <span>{user.name}</span></h2>
                		<button onClick={loggedout}>Log out</button>
                	</div>
            	) : (
              		<Loginform loggedin={loggedin} error={error} />
        		)
        	}
        </div>
	);
}

export default Login;