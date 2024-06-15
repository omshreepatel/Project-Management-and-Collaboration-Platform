import React from 'react';
    import { Link } from 'react-router-dom';

    const ProjectList = ({ projects }) => {
        return (
            <div>
                <h2>Projects</h2>
                {projects.length === 0 ? (
                    <p>No projects available</p>
                ) : (
                    <ul>
                        {projects.map((project) => (
                            <li key={project._id}>
                                <Link to={`/project/${project._id}`}>
                                    {project.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    };

    export default ProjectList;