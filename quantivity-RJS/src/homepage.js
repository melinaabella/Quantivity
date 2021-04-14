import React from 'react';
import './App.css';
import { motion } from "framer-motion";
import ReactPlayer from 'react-player';

function Homepage() {
    
return (
  <div>
  
  <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}> Welcome to Quantivity</motion.h1>
  
  <div className="grid-container">
  <ReactPlayer 
    width='480px'
    height='240px'
    controls
    url='https://www.youtube.com/watch?v=7sDY4m8KNLc' />
 
  </div>
  
      </div>
    
    );
  }
  
  export default Homepage;