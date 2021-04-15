import React, { useEffect, useState } from 'react';
import '../App.css';
import { Redirect } from 'react-router';
import { motion } from "framer-motion";

function CreateAccountForm() {
	return (
		<div>
			<motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}> Create Account</motion.h1>
			<div className="grid-container">
				

			</div>
		</div>
    
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