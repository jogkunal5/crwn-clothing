/** 
 * Root Reducer: It is the base reducer object that represents all of the state of our 
 * application. It combines all of the state together.
 */

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

/**
 * combineReducers(): Turns an object whose values are different reducer functions, into a single reducer function.
 * It will call every child reducer, and gather their results into a single state object, 
 * whose keys correspond to the keys of the passed reducer functions.
 */
export default combineReducers({
    user: userReducer
});
