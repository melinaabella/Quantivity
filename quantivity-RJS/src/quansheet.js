import React from 'react';
import './App.css';
import { motion } from "framer-motion";

function quansheet() {
    
    return (
      <div>
  
  <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}> Your Weekly Agenda</motion.h1>
  
  <div className="grid-container">
    <h2>Week of: 3/22/21</h2>
    <motion.div className="item1" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3}}>Mon</motion.div>
    <div className="item2">Tues</div>
    <div className="item3">Wed</div>  
    <div className="item4">Thurs</div>
    <div className="item5">Fri</div>
    <div className="item6">Sat</div>
    <div className="item7">Sun</div>
  
  
    <input type="text" id="myText" value=""/>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>  
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <input type="text" id="myText" value=""/>
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>  
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <input type="text" id="myText" value=""/>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>  
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <input type="text" id="myText" value=""/>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  <label className="container"><input type="checkbox"/>
    <span className="checkmark"></span>
  </label>  
    
  <label className="container">
    <input type="checkbox"/>
    <span className="checkmark"></span>
  </label>
    
  </div>
  
      </div>
    
    );
  }
  
  export default quansheet;