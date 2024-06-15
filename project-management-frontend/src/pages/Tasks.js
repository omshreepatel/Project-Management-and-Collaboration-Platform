import React, { useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { fetchTasks } from '../redux/actions/taskActions';
    import TaskList from '../components/TaskList';
    import CreateTask from '../components/CreateTask';

    const Tasks = ({ match }) => {
        const dispatch = useDispatch();
        const tasks = useSelector((state) => state.tasks);
        const { projectId } = match.params;

        useEffect(() => {
            dispatch(fetchTasks(projectId));
        }, [dispatch, projectId]);

        return (
            <div className='container'>
                <h1>Tasks</h1>
                <CreateTask projectId={projectId} />
                <TaskList tasks={tasks} />
            </div>
        );
    };

    export default Tasks;