import React, { useState } from 'react';
import { Redirect } from 'react-router';
import '../App.css';
import Loginform from './Loginform';
const server = require('../server_comm');


function Login (props){
    
	const [user, setUser] = useState({name: "", email: ""});
	const [error, setError] = useState("");
	const [redirect, setRedirect] = useState(false);
    
	const loggedin = details => {
		console.log(details);

		server.fetchAPI('users/login/' + details.email).then((result) => {
			if (details.email == result.email && details.password == result.password) {
				console.log("Logged in");
				setUser({
					name: details.name,
					email: details.email
				});
				setRedirect(true);
			} else {
				setError("Details do not match");
			}
		}).catch((error) => {
			console.log(error);
		});
	}


	//log out button 
	const loggedout = () => {
		setUser({ name: "", email: ""});
	}

	if (redirect == true) {
		return <Redirect to="/Quansheet"/>
	} else {
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
}

export default Login;