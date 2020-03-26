import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import ViewProducts from './pages/listing/ViewProducts';
import { Provider } from 'react-redux';
import createStore from './store/createStore';

const store = createStore();

const routing = (
    <Provider store={store}>
        <Router>
            <Route exact path = '/' component = {ViewProducts} />
    </Router>
    </Provider>
    
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
