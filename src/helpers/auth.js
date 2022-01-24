import bcrypt from 'bcryptjs';

export const setDefaultUser = async () => {
	const defaultUser = {
		name: 'default',
		pass: await hashPassword('12345678'),
		tasks: []
	};
	localStorage.setItem('users', JSON.stringify([defaultUser]));
};

const checkUserExistence = username => {
	if (!localStorage.users)
		return false;
	const users = JSON.parse(localStorage.users);
	const userExists = users.some(user => user.name.toLowerCase() === username.toLowerCase());
	return userExists;
};

const validatePassword = (password, hashedPassword) => {
	return bcrypt.compareSync(password, hashedPassword);
};

export const hashPassword = password => {
	return bcrypt.hash(password, 8);
};

export const createSessionToken = (username, encryptedPassword) => {
	const timestamp = new Date().getTime();
	const authData = JSON.stringify({
		username: username,
		password: encryptedPassword,
		date: timestamp
	});
	return bcrypt.hash(authData, 8);
};

export const handleUserLogin = async data => {
	if (!checkUserExistence(data.username)) {
		throw 'Error: Usuario o contraseña incorrectos.';
	}
	const users = JSON.parse(localStorage.users);
	const user = users.find(user => user.name.toLowerCase() === data.username.toLowerCase());
	const validPassword = validatePassword(data.password, user.pass);

	if (validPassword) {
		const authToken = await createSessionToken(data.username, data.password);
		user.lastToken = authToken;
		return user;
	} else {
		throw 'Error: Usuario o contraeña incorrectos.';
	}
};

export const persistLoginData = data => {
	const users = JSON.parse(localStorage.users);
	const updatedUsersData = users.filter(user => user.name !== data.name);
	updatedUsersData.push(data);
	localStorage.setItem('users', JSON.stringify(updatedUsersData));
	localStorage.setItem('auth', JSON.stringify({
		token: data.lastToken
	}));
};

export const handleUserRegistration = async data => {
	if (checkUserExistence(data.username)) {
		throw 'Error: El usuario ya existe.';
	}
	const encryptedPassword = await hashPassword(data.password);
	const authToken = await createSessionToken(data.username, encryptedPassword);
	const user = {
		name: data.username,
		pass: encryptedPassword,
		lastToken: authToken,
		tasks: []
	};
	return user;
};

const persistToken = token => {
	localStorage.setItem('auth', JSON.stringify({
		token: token
	}));
};

export const persistRegisterData = data => {
	if (!localStorage.users) {
		localStorage.setItem('users', JSON.stringify([data]));
	} else {
		const users = JSON.parse(localStorage.users);
		users.push(data);
		localStorage.setItem('users', JSON.stringify(users));
	}

	persistToken(data.lastToken);
};

export const getCurrentAuth = () => {
	const { token } = JSON.parse(localStorage.auth);
	const users = JSON.parse(localStorage.users);
	const authUserData = users.find(user => user.lastToken === token);
	return authUserData;
};