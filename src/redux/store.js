import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducers from './root-reducer';

/**
 * createStore() : Creates a Redux store that holds the state tree. The only way to change the data in the 
 * store is to call dispatch() on it.
 * There should only be a single store in your app. To specify how different parts of the 
 * state tree respond to actions, you may combine several reducers into a single reducer 
 * function by using combineReducers.
 * 
 * applyMiddleware(): Creates a store enhancer that applies middleware to the dispatch method 
 * of the Redux store. This is handy for a variety of tasks, such as expressing asynchronous 
 * actions in a concise manner, or logging every action payload.
 */

const middlewares = [logger];
const store = createStore(rootReducers, applyMiddleware(...middlewares));

export default store;

