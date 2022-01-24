export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';
export const SET_DATA_ON_LOAD = 'SET_DATA_ON_LOAD';

export const loginUser = data => {
	return dispatch => {
		dispatch({
			type: LOGIN,
			payload: data
		});
	};
};

export const registerUser = data => {
	return dispatch => {
		dispatch({
			type: REGISTER,
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

export const logout = () => {
	return dispatch => {
		dispatch({
			type: LOGOUT
		});
	};
};