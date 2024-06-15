import React, { useEffect } from 'react';  
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/actions/authActions';
import setAuthToken from './utils/setAuthToken';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

// Check if token exists in localStorage and set it in the request headers
if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []); // Empty array as the dependency to run this effect only once

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <PrivateRoute exact path='/' component={Dashboard} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
