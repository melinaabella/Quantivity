import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const server = require('../server_comm');

const days_of_the_week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

function Quansheet() {
	const [week, set_week] = useState('');
	const [catagories, set_catagories] = useState([]);
	const [data_recieved, set_data_recieved] = useState(false);

	useEffect(() => {
		if (data_recieved) {
			//server.postAPI('userData/set', {week: week, catagories: catagories});
		} else {
			server.fetchAPI('userData/get').then((response) => {
				console.log(response);
				set_data_recieved(true);
				set_week(response.week);
				set_catagories(response.catagories);
			}).catch((error) => {
				console.log(error);
			});
		}
		return (() => {
			//server.postAPI('userData/set', {week: week, catagories: catagories});
		});
	});
    
	return (
		<div>
  			<motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}> Your Weekly Agenda</motion.h1>
  
  			<div className="grid-container">
				<h2>Week of: 3/22/21</h2>
				
				{days_of_the_week.map((day) => {
					return <motion.div className="item1" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3}}>{day}</motion.div>
				})}
				
				{catagories.map((catagory, index) => {
					return(
						<>
							<input type="text" id={catagory.id} value={catagory.name} onChange={(event) => {
								console.log('input box ' + index + ' has experienced an onChange event!');
								let new_catagories = [...catagories];
								new_catagories[index].name = event.target.value;
								set_catagories(new_catagories);
							}}/>
							{catagory.data.map((check, jndex) => {
								return (
									<label className="container" id={index + '-' + jndex}>
										<input type="checkbox" checked={check} onChange={() => {
											let new_catagories = [...catagories];
											new_catagories[index].data[jndex] = !new_catagories[index].data[jndex];
											set_catagories(new_catagories);
										}}/>
										<span className="checkmark"></span>
									</label>
								);
							})}
						</>
					);
				})}
			</div>
     	</div>
    );
}
  
export default Quansheet;