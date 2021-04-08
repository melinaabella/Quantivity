import React, { useState } from "react";
import homepage from "./homepage";
import Loginform from './components/Loginform';
import quansheet from './quansheet';
import projectwebsite from './projectwebsite';
import { Route, Link } from 'react-router-dom';
import NavBar from "./components/NavBar";


function App() {
  const memberUser = {
    email: "member@quantivity.com",
    password: "sunshine123"
  }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const loggedin = details => {
      console.log(details);
    }

    const loggedout = () => {
      console.log(loggedout);
    }

  return (
    <div className="App">
    {(user.email != "" ? (
      <div className="welcome">
        <h2>Welcome, <span>{user.name}</span></h2>
        <button>logout</button>
        </div>
    ) : (
      <Loginform loggedin={loggedin} error={error} />
    )
    
    )}
    <NavBar />
    <Route exact path="/" component ={homepage} />
    <Route exact path="/Loginform" component ={Loginform} /> 
    <Route exact path="/quansheet" component ={quansheet} /> 
    <Route exact path="/projectwebsite" component ={projectwebsite} /> 
  </div>
  );
}

export default App;