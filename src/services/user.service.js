import httpService from './http.service';

export const userService = {
	login,
};

async function login(userCred) {
	const user = await httpService.post('/account/login', userCred);
	return user;
}
