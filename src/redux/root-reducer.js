/** 
 * Root Reducer: It is the base reducer object that represents all of the state of our 
 * application. It combines all of the state together.
 */

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // from here we get an actual local storage object on our window browser


import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}


/**
 * combineReducers(): Turns an object whose values are different reducer functions, into a single reducer function.
 * It will call every child reducer, and gather their results into a single state object, 
 * whose keys correspond to the keys of the passed reducer functions.
 */
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);