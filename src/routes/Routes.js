import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from '../components/Home'

export default function AppRouter() {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
        </Router>
    )
}
