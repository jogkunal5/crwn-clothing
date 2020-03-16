import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import './index.css';
import App from './App';

// <BrowserRouter> is a component which gives the functionality of routing to the application.

// <Provider> is a component which gives us the access of store and the reducers. <Provider> is a parent of
// of everything inside our application 

// PersistGate delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

