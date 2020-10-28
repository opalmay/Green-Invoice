import httpService from './http.service';

export const userService = {
	login,
	logout,
	// signup,
	// getUsers,
	// getById,
};

async function login(userCred) {
	const user = await httpService.post('/account/login', userCred);
	_handleLogin(user);
	return user;
}
async function logout() {
	// await httpService.post('auth/logout');
	sessionStorage.clear();
}

function _handleLogin(user) {
	sessionStorage.setItem('user', JSON.stringify(user));
}
