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
			<Route exact path="/CreateAccount" render ={(props) => <CreateAccount {...props}/>} /> 
    		<Route exact path="/Login" render ={(props) => <Login {...props}/>} /> 
    		<Route exact path="/projectwebsite" render={() => {window.location.href = 'http://localhost:9000/about'}} /> 
			<Route exact path="/quansheet" render={(props) => <Quansheet {...props}/>} /> 
  		</div>
  	);
}

export default App;