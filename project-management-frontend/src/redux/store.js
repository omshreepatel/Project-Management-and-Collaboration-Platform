import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';
import projectReducer from './reducers/projectReducer';
import taskReducer from './reducers/taskReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    projects: projectReducer,
    tasks: taskReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
