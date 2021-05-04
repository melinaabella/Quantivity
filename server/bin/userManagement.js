

var state = {
	user: '',
	timer_id: null
};

exports.getUser = () => {
	clearTimeout(state.timer_id);
	state.timer_id = setTimeout(this.clearUser, 3000000);
	return state.user;
}

exports.setUser = (user) => {
	state.user = user;
	clearTimeout(state.timer_id);
	state.timer_id = setTimeout(this.clearUser, 3000000);
};

exports.clearUser = () => {
	state.user = '';
}