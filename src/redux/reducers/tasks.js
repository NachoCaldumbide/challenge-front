import { ADD_TASK, REMOVE_TASK, EDIT_TASK, SET_DATA_ON_LOAD, CLEAR_TASKS } from '../actions/tasks';

const initialState = {
	tasks: []
};

const tasksReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_TASK:
			return {
				...state,
				tasks: state.tasks.concat(payload)
			};
		case EDIT_TASK:
			return {
				...state,
				tasks: state.tasks.map(
					task => task.name === payload.name ?
						{ ...task, completed: !task.completed } :
						task
				)
			};
		case REMOVE_TASK:
			return {
				...state,
				tasks: state.tasks.filter(task => task.name !== payload.name)
			};
		case SET_DATA_ON_LOAD:
			return {
				...state,
				tasks: payload
			};
		case CLEAR_TASKS:
			return {
				...state,
				tasks: []
			};
		default:
			return state;
	}
};

export default tasksReducer;