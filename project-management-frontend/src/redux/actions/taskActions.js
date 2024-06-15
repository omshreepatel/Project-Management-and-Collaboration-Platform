import axios from 'axios';
import { FETCH_TASKS, CREATE_TASK } from './types';

export const fetchTasks = (projectId) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/projects/${projectId}/tasks`);
        dispatch({
            type: FETCH_TASKS,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
};

export const createTask = (formData) => async (dispatch) => {
    try {
        const res = await axios.post(`/api/tasks`, formData);
        dispatch({
            type: CREATE_TASK,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
};
