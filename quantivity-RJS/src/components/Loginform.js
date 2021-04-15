import React, { useState } from 'react';
import { Redirect } from 'react-router';

function Loginform({ loggedin, error}){
	const [details, setDetails] = useState({name: "", email: "", password: ""});
	const [createAccountRedirect, setcreateAccountRedirect] = useState(false);

	const submitHandler = e => {
		e.preventDefault();
		loggedin(details);

	}

	const createAccount = () => {
		setcreateAccountRedirect(true);
	}

	if (createAccountRedirect) {
		<Redirect to="/CreateAccountForm"/>
	} else {
		return (
			<form onSubmit={submitHandler}>
				<div className="form-inner">
					<h2>Login</h2>
					{(error !="") ? ( <div className="error">{error}</div> ): ""}
					<div className="form-group">
						<label htmlFor="name">Name:</label>
						<input type="text" name="name" id="name" value={details.name} onChange={e => {
							setDetails({...details, name: e.target.value});
						}}/>
					</div>
					<div className="form-group">
						<label htmlFor="email"> Email: </label>
						<input type="email" name="email" id="email" value={details.email} onChange={e => {
							setDetails({...details, email: e.target.value});
						}}/>
					</div>
					<div className="form-group">
						<label htmlFor="password"> Password: </label>
						<input type="password" name="password" id="password" value={details.password} onChange={ (e) => {
							setDetails({...details, password: e.target.value});
						}}/>
					</div>
					<input type ="submit" value="Login" />
					<div className="create-account">
					<button onClick={createAccount}>Create Account</button>
					</div>
					
				</div>
			</form>
		);
	}
}

export default Loginform;