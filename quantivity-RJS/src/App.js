import React, { useState } from "react";
import Homepage from "./Homepage";
import Login from './components/Login';
import Quansheet from './components/Quansheet';
import projectwebsite from './components/projectwebsite';
import CreateAccount from './components/CreateAccount';
import { Route, Link } from 'react-router-dom';
import NavBar from "./components/NavBar";

function App() {

	var [user, set_user] = useState('test@test.com');

	console.log(user);

  	return (
    	<div className="App">
    		<NavBar/>
    		<Route exact path="/" component ={Homepage} />
			<Route exact path="/CreateAccount" render ={(props) => <CreateAccount {...props} set_user={set_user}/>} /> 
    		<Route exact path="/Login" render ={(props) => <Login {...props} set_user={set_user}/>} /> 
    		<Route exact path="/projectwebsite" component ={projectwebsite} /> 
			<Route exact path="/quansheet" render={(props) => <Quansheet {...props} user={user}/>} /> 
  		</div>
  	);
}

export default App;