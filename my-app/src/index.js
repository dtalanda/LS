import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import DragnDrop from './page/DragnDrop'
import Memory from './page/Memory';
import Maze from './page/Maze';
import Robot from './page/Robot';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/robot' component={Robot} />
            <Route path='/maze' component={Maze} />
            <Route path='/memory' component={Memory} />
            <Route path='/dragndrop' component={DragnDrop} />
            <Route path='/' component={App} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
