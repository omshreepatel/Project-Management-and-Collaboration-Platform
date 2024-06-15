import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers['x-auth-token'] = localStorage.getItem('token');
    }
    return req;
});

export const register = (formData) => API.post('/auth/register', formData);
export const login = (formData) => API.post('/auth/login', formData);
export const fetchUser = () => API.get('/auth/user');
export const createProject = (formData) => API.post('/projects', formData);
export const fetchProjects = () => API.get('/projects');
export const createTask = (formData) => API.post('/tasks', formData);
export const fetchTasks = (projectId) => API.get(`/tasks/${projectId}`);
