import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//cấu hình redux bước 3:
import store from './redux/store';
import { Provider } from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));