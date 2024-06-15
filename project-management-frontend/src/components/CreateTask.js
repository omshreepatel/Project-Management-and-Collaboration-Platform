import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { createTask } from '../redux/actions/taskActions';

    const CreateTask = ({ projectId }) => {
        const [description, setDescription] = useState('');

        const dispatch = useDispatch();

        const onSubmit = (e) => {
            e.preventDefault();
            dispatch(createTask({ projectId, description }));
            setDescription('');
        };

        return (
            <div>
                <h2>Create Task</h2>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            name='description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <button type='submit'>Create</button>
                </form>
            </div>
        );
    };

    export default CreateTask;