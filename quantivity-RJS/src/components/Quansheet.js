import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const server = require('../server_comm');

const days_of_the_week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

function Quansheet() {

	const [date, set_date] = useState(new Date());
	const [categories, set_categories] = useState([]);
	const [data_recieved, set_data_recieved] = useState(false);
	const [loggedout, set_loggedout] = useState(false);
	const [user, set_user] = useState('');
	const [grid_id, set_grid_id] = useState(null);

	

	useEffect(() => {
		if (data_recieved && (grid_id != null)) {
			server.postAPI('userData/set/' + grid_id, {user: user, week: renderDate(date), categories: categories}).then((res) => {
				if (res.status == 205) {
					set_loggedout(true);
				}
			}).catch((error) => {
				console.log(error);
			});
		} else {
			console.log("Fetching Data!");
			server.fetchAPI('userData/get/' + renderDate(date)).then((response) => {
				console.log(response);
				set_data_recieved(true);
				set_categories(response.categories);
				set_grid_id(response._id);
				set_user(response.user);
			}).catch((error) => {
				console.log(error);
			});
		}
		return (() => {
			server.postAPI('userData/set/' + grid_id, {user: user, week: renderDate(date), categories: categories}).then((res) => {
				if (res.status == 205) {
					set_loggedout(true);
				}
			}).catch((error) => {
				console.log(error);
			})
		});
	});


	const renderDate = (today) => {
		let this_day = new Date(today);
		let day = this_day.getDay(); // 4
		let monday = new Date(today);

		monday.setDate(this_day.getDate() - (this_day.getDay() - 1));
		let week = monday.getFullYear() + ':' + (monday.getMonth() + 1) + ':' + monday.getDate();
		
		return (week);
	}
	  
	
    if (loggedout) {
		return (
			<h1>Logged Out</h1>
		);
	} else {
		return (
			<div>
				<motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}> Your Weekly Agenda</motion.h1>
	
				<div className="grid-container">
					<button id="left_button" onClick={() => {
						let last_week = new Date(date);
						console.log(last_week);
						last_week.setDate(last_week.getDate() - 7);
						console.log(last_week);
						set_date(new Date(last_week));
						set_categories([]);
						set_data_recieved(false);
						set_grid_id(null);
					}}>&lt;</button>
					<h2>Week of: {renderDate(date)}</h2>
					
					{days_of_the_week.map((day) => {
						return <motion.div className="item1" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3}}>{day}</motion.div>
					})}

					<button id="right_button" onClick={() => {
						let next_week = new Date(date);
						console.log(next_week);
						next_week.setDate(next_week.getDate() + 7);
						console.log(next_week)
						set_date(new Date(next_week));
						set_categories([]);
						set_data_recieved(false);
						set_grid_id(null);
					}}>&gt;</button>
					
					{categories.map((category, index) => {
						return(
							<>
								<button id="remove category" onClick={() => {
									let first_half = categories.slice(0, index);
									let second_half = categories.slice(index + 1, categories.length);
									let new_categories = first_half.concat(second_half);
									set_categories(new_categories);
								}}>X</button>
								<input type="text" placeholder="Enter Task" value={category.name} onChange={(event) => {
									console.log('input box ' + index + ' has experienced an onChange event!');
									let new_categories = [...categories];
									new_categories[index].name = event.target.value;
									set_categories(new_categories);
								}}/>
								{category.data.map((check, jndex) => {
									return (
										<label className="container" id={index + '-' + jndex}>
											<input type="checkbox" checked={check} onChange={() => {
												let new_categories = [...categories];
												new_categories[index].data[jndex] = !new_categories[index].data[jndex];
												set_categories(new_categories);
											}}/>
											<span className="checkmark"></span>
										</label>
									);
								})}
								<h1></h1>
							</>
						);
					})}
					<h1></h1>
					<button id="add_category" onClick={() => {
						let new_categories = [...categories];
						new_categories.push({
							name: '',
							data: [0, 0, 0, 0, 0, 0, 0]
						});
						set_categories(new_categories);
					}}>Add Category</button>
				</div>
			</div>
		);
	}
}
  
export default Quansheet;