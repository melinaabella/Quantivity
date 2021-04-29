import React from 'react';
import './App.css';
import { motion } from "framer-motion";
import ReactPlayer from 'react-player';

function Homepage() {
    
	return (
	<div>
		<div className="grid-container">

			<motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}> Welcome to Quantivity</motion.h1>
			<h1></h1>
	
			<ReactPlayer url='https://youtu.be/V8SrUk6QyhM' />
			
			</div> 
		</div>
	);
}
  
export default Homepage;