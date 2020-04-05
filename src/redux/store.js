import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; // it allows browser to cache or store depending on configuration options
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

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducers, applyMiddleware(...middlewares));

// persister is a persistent version of store and using this and store we create new provider thats wrapping our application
export const persistor = persistStore(store);

export default { store, persistor };

