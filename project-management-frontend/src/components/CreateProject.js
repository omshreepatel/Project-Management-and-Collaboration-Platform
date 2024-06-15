import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProject } from '../redux/actions/projectActions';

const CreateProject = () => {
    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createProject({ name }));
        setName('');
    };

    return (
        <div>
            <h2>Create Project</h2>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button type='submit'>Create</button>
            </form>
        </div>
    );
};

export default CreateProject;