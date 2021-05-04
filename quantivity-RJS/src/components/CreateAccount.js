import React, { useEffect, useState } from 'react';
import '../App.css';
import { Redirect } from 'react-router';
import { motion } from "framer-motion";
import CreateAccountForm from './CreateAccountForm';
const server = require('../server_comm');

function CreateAccount(props) {
	const [form_error, set_form_error] = useState('');
	const [createAccountSuccessful, set_createAccountSuccessful] = useState(false);

	const sendNewAccount = (form_details) => {
		if (form_details.password_1 === form_details.password_2) {
			set_form_error('');
			//password hashing?
			//send form data to server
			let form_data = {
				username: form_details.username,
				email: form_details.email,
				password: form_details.password_1
			};
			console.log("contacting server");
			server.postAPI('users/create/' + form_details.email, form_data).then((response) => {
				console.log(response);
				if (response.status === 205) {
					set_form_error('Account already exists!');
				} else if (response.status === 200) {
					set_form_error('');
					set_createAccountSuccessful(true);
				} else {
					throw("Error code: " + response.status);
				}
			}).catch((error) => {
				console.log(error);
			});
		} else {
			set_form_error("Passwords do not match!");
		}
	}

	return (
		<>
		{createAccountSuccessful ? (
			<Redirect to="/Quansheet"/>
		) : (
			<CreateAccountForm sendNewAccount={sendNewAccount} form_error={form_error}/>
		)}
		</>
	);
}

export default CreateAccount;