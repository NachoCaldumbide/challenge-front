import { getCurrentAuth } from './auth';

export const addTaskToLocalStorage = async task => {
	const { name } = await getCurrentAuth();
	const users = JSON.parse(localStorage.users);
	const userIndex = users.findIndex(user => user.name === name);
	users[userIndex].tasks.push(task);
	localStorage.setItem('users', JSON.stringify(users));
};

export const editTaskOnLocalStorage = async task => {
	const { name } = await getCurrentAuth();
	const users = JSON.parse(localStorage.users);
	const userIndex = users.findIndex(user => user.name === name);
	users[userIndex].tasks = users[userIndex].tasks.map(
		item => item.name === task.name ?
			{ ...item, completed: !item.completed } :
			item
	);
	localStorage.setItem('users', JSON.stringify(users));
};

export const removeTaskFromLocalStorage = async task => {
	const { name } = await getCurrentAuth();
	const users = JSON.parse(localStorage.users);
	const userIndex = users.findIndex(user => user.name === name);
	users[userIndex].tasks = users[userIndex].tasks.filter(item => item.name !== task.name);
	localStorage.setItem('users', JSON.stringify(users));
};