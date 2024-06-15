import axios from 'axios';
// import { FETCH_PROJECTS, CREATE_PROJECT } from './types';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const CREATE_PROJECT = 'CREATE_PROJECT';

export const fetchProjects = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/projects');
        dispatch({
            type: FETCH_PROJECTS,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
};

export const createProject = (formData) => async (dispatch) => {
    try {
        const res = await axios.post('/api/projects', formData);
        dispatch({
            type: CREATE_PROJECT,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
};
