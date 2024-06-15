import React from 'react';
import { Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useSelector((state) => state.auth);

    return (
        <Route
            {...rest}
            render={(props) =>
                auth ? (
                    <Component {...props} />
                ) : (
                    <Navigate to='/login' />
                )
            }
        />
    );
};

export default PrivateRoute;
