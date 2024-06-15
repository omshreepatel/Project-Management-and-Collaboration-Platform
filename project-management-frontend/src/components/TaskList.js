import React from 'react';

    const TaskList = ({ tasks }) => {
        return (
            <div>
                <h2>Tasks</h2>
                {tasks.length === 0 ? (
                    <p>No tasks available</p>
                ) : (
                    <ul>
                        {tasks.map((task) => (
                            <li key={task._id}>{task.description}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    };

    export default TaskList;
