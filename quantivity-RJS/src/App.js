import React, { useState } from "react";
import Homepage from "./Homepage";
import Login from './components/Login';
import Quansheet from './components/Quansheet';
import projectwebsite from './components/projectwebsite';
import CreateAccountForm from './components/CreateAccountForm';
import { Route, Link } from 'react-router-dom';
import NavBar from "./components/NavBar";


function App() {
  	const memberUser = {
    	email: "member@quantivity.com",
    	password: "sunshine123"
  	};

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");
	

    const loggedin = details => {
	    console.log(details);
    };

    const loggedout = () => {
    	console.log(loggedout);
    };

  	return (
    	<div className="App">
    		<NavBar/>
    		<Route exact path="/" component ={Homepage} />
			<Route exact path="/CreateAccountForm" component ={CreateAccountForm} /> 
    		<Route exact path="/Login" component ={Login} /> 
    		<Route exact path="/projectwebsite" component ={projectwebsite} /> 
			<Route exact path="/quansheet" component ={Quansheet} /> 
  		</div>
  	);
}

export default App;