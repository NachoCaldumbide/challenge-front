import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from './reducers/auth';
import tasksReducer from './reducers/tasks';
import thunk from 'redux-thunk';

const store = createStore(combineReducers({authReducer, tasksReducer}), applyMiddleware(thunk));

export default store;