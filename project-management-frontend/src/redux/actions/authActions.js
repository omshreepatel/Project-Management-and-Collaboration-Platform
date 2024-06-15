import { register, login, fetchUser } from '../../api';

export const loadUser = () => async (dispatch) => {
    try {
        const res = await fetchUser();
        dispatch({
            type: 'USER_LOADED',
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: 'AUTH_ERROR',
        });
    }
};

export const registerUser = (formData) => async (dispatch) => {
    try {
        const res = await register(formData);
        dispatch({
            type: 'REGISTER_SUCCESS',
            payload: res.data,
        });
        dispatch(loadUser());
    } catch (err) {
        dispatch({
            type: 'REGISTER_FAIL',
        });
    }
};

export const loginUser = (formData) => async (dispatch) => {
    try {
        const res = await login(formData);
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data,
        });
        dispatch(loadUser());
    } catch (err) {
        dispatch({
            type: 'LOGIN_FAIL',
        });
    }
};

export const logout = () => (dispatch) => {
    dispatch({ type: 'LOGOUT' });
};
