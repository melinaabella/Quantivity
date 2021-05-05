const server_path = 'http://localhost:9000/';//only for development, need to change for deployment


exports.fetchAPI = (API_path) => {
	//console.log("fetchAPI called");
	return new Promise((resolve, reject) => {
		fetch(server_path + API_path).then((response) => {
			return response.json();
		}).then((jsondata) => {
			resolve(jsondata);
		}).catch((error) => {
			reject(error);
		})
	});
}

exports.postAPI = (API_path, data) => {
	console.log("postAPI called");
	return new Promise((resolve, reject) => {
		fetch(server_path + API_path, {
			method: "post",
			headers: { 'Content-type': "application/json" },
			body: JSON.stringify(data)
		}).then((res) => {
			resolve(res);
		}).catch((err) => {
			reject(err);
		});
	});
	
}