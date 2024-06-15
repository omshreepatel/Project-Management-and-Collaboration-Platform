import React, { useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { fetchProjects } from '../redux/actions/projectActions';
    import ProjectList from '../components/ProjectList';
    import CreateProject from '../components/CreateProject';

    const Dashboard = () => {
        const dispatch = useDispatch();
        const projects = useSelector((state) => state.projects);

        useEffect(() => {
            dispatch(fetchProjects());
        }, [dispatch]);

        return (
            <div className='container'>
                <h1>Dashboard</h1>
                <CreateProject />
                <ProjectList projects={projects} />
            </div>
        );
    };

    export default Dashboard;