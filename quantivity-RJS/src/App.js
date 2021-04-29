import React, { useState } from "react";
import Homepage from "./Homepage";
import Login from './components/Login';
import Quansheet from './components/Quansheet';
import projectwebsite from './components/projectwebsite';
import CreateAccount from './components/CreateAccount';
import { Route, Link } from 'react-router-dom';
import NavBar from "./components/NavBar";


function App() {

  	return (
    	<div className="App">
    		<NavBar/>
    		<Route exact path="/" component ={Homepage} />
			<Route exact path="/CreateAccount" component ={CreateAccount} /> 
    		<Route exact path="/Login" component ={Login} /> 
    		<Route exact path="/projectwebsite" component ={projectwebsite} /> 
			<Route exact path="/quansheet" component ={Quansheet} /> 
  		</div>
  	);
}

export default App;