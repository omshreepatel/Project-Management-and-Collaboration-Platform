import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { registerUser } from '../redux/actions/authActions';

    const Register = ({ history }) => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
        });

        const { name, email, password } = formData;

        const dispatch = useDispatch();

        const onChange = (e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value });

        const onSubmit = async (e) => {
            e.preventDefault();
            dispatch(registerUser(formData)).then(() => {
                history.push('/');
            });
        };

        return (
            <div className='container'>
                <h1>Register</h1>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label>Name</label>
                        <input
                            type='text'
                            name='name'
                            value={name}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input
                            type='password'
                            name='password'
                            value={password}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <button type='submit'>Register</button>
                </form>
            </div>
        );
    };

    export default Register;