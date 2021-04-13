import React, { useState } from "react";
import homepage from "./homepage";
import Login from './Login';
import Quansheet from './components/Quansheet';
import projectwebsite from './projectwebsite';
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
    		<Route exact path="/" component ={homepage} />
    		<Route exact path="/Login" component ={Login} /> 
    		<Route exact path="/quansheet" component ={Quansheet} /> 
    		<Route exact path="/projectwebsite" component ={projectwebsite} /> 
  		</div>
  	);
}

export default App;