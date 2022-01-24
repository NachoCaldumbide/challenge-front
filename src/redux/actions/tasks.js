export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SET_DATA_ON_LOAD = 'SET_DATA_ON_LOAD';
export const CLEAR_TASKS = 'CLEAR_TASKS';

export const addTask = data => {
	return dispatch => {
		dispatch({
			type: ADD_TASK,
			payload: data
		});
	};
};

export const removeTask = data => {
	return dispatch => {
		dispatch({
			type: REMOVE_TASK,
			payload: data
		});
	};
};

export const setDataOnLoad = data => {
	return dispatch => {
		dispatch({
			type: SET_DATA_ON_LOAD,
			payload: data
		});
	};
};

export const editTask = data => {
	return dispatch => {
		dispatch({
			type: EDIT_TASK,
			payload: data
		});
	};
};

export const clearTasks = () => {
	return dispatch => {
		dispatch({
			type: CLEAR_TASKS
		});
	};
};