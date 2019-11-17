// Root Reducer: It is the base reducer object that represents all of the state of our application
// It combines all of the state together

import { CombineReducers, combineReducers } from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
});
