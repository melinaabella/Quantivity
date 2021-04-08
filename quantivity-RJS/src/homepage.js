import React from 'react';
import './App.css';
import Checkbox from './components/Checkbox';
import { useState } from 'react';
import { motion } from "framer-motion";

function homepage() {
    
    return (
      <div>
  
  <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}> Welcome to Quantivity</motion.h1>
  
  <div className="grid-container">
    
  </div>
  
      </div>
    
    );
  }
  
  export default homepage;