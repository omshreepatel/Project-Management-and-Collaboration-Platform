// import { ADD_PROJECT,DELETE_PROJECT,UPDATE_PROJECT } from './types';
// Define action types
export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';

// Other action types can be added here as needed
import { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from './types';

// Redux action creators using the defined action types
export const addProject = (projectData) => ({
  type: ADD_PROJECT,
  payload: projectData,
});

export const deleteProject = (projectId) => ({
  type: DELETE_PROJECT,
  payload: projectId,
});

export const updateProject = (projectId, updatedData) => ({
  type: UPDATE_PROJECT,
  payload: { projectId, updatedData },
});
