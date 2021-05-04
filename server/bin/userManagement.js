

var state = {
	user: '',
	timer_id: null
};

exports.getUser = () => {
	clearTimeout(state.timer_id);
	state.timer_id = setTimeout(this.clearUser, 300000);
	return state.user;
}

exports.setUser = (user) => {
	state.user = user;
	clearTimeout(state.timer_id);
	state.timer_id = setTimeout(this.clearUser, 300000);
};

exports.clearUser = () => {
	state.user = '';
}