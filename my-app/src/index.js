import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Memory from './page/Memory';
import BlockGame from './page/BlockGame';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BlockGame />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
