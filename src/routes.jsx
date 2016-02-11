import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App.jsx';
import Test from './components/Test.jsx';

module.exports = (
    <Route path='/' component={App}>
        <IndexRoute component={Test} />
    </Route>
);
