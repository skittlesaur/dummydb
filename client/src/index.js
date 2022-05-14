import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {configureStore} from '@reduxjs/toolkit';
import github from './reducers/github';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
    reducer: {github}
});

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);