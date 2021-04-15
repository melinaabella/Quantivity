import React, { useEffect, useState } from 'react';
import '../App.css';
import { Redirect } from 'react-router';
import { motion } from "framer-motion";

function CreateAccountForm() {

	const [form_details, set_form_details] = useState({username: '', email: '', password_1: '', password_2: ''});
	const [already_exists, set_already_exists] = useState(false);
	const [form_error, set_form_error] = useState('');

	useEffect(() => {
		return (() => {
		
		});
	});


		

	return (
		<form onSubmit={(event) => {

		}}>
			<div className="form-inner">
				<motion.h2 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}> Create Account</motion.h2>
					{(form_error !="") ? ( <div className="error">{form_error}</div> ): ""}
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input type="text" name="name" id="name" value={form_details.name} onChange={e => {
						set_form_details({...form_details, name: e.target.value});
					}}/>
				</div>
				<div className="form-group">
					<label htmlFor="email"> Email: </label>
					<input type="email" name="email" id="email" value={form_details.email} onChange={e => {
						set_form_details({...form_details, email: e.target.value});
					}}/>
				</div>
				<div className="form-group">
					<label htmlFor="password"> Password: </label>
					<input type="password" name="password" id="password_1" value={form_details.password_1} onChange={ (e) => {
						set_form_details({...form_details, password_1: e.target.value});
					}}/>
				</div>
				<div className="form-group">
					<label htmlFor="password"> Confirm Password: </label>
					<input type="password" name="password_confirm" id="password_2" value={form_details.password_2} onChange={ (e) => {
						set_form_details({...form_details, password_2: e.target.value});
					}}/>
				</div>
				<input type ="submit" value="Create Account"/>
			</div>
		</form>
	);
}

export default CreateAccountForm;

// function CreateAccountForm() {

// 	const [form_details, set_form_details] = useState({username: '', email: '', password_1: '', password_2: ''});
// 	const [already_exists, set_already_exists] = useState(false);
	

// 	useEffect(() => {


// 		return (() => {

// 		});
// 	})

// 	return (
// 		<>
// 		</>
// 	);
// }

// export default CreateAccountForm;