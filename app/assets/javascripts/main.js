import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route } from 'react-router';
import { browserHistory } from 'react-router';

/*Import Component*/

import NotFound from './components/NotFound';

/*
 *
 * Routes
 *
 * */

var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={NotFound}/>
    </Router>
);

ReactDOM.render(routes , document.querySelector('#main'));

