import './TaskList.css';
import { Tasks } from '../../mocks/Tasks.js';
import { useState } from 'react';

export function TaskList({ statusTaskList, setMainContentState }) {
    const [taskListState, setTaskListState] = useState('');
    const taskListAccepted = [];
    Tasks.map((task) => {
        if (task.taskStatus === statusTaskList) {
            taskListAccepted.push(task);
        }
    });

    const concludeTask = (taskIndex, taskStatus) => {
        if (taskStatus === 'active') {
            taskListAccepted[taskIndex].taskStatus = 'completed';
            setTaskListState(taskListAccepted[taskIndex].taskStatus);
            setMainContentState(taskListAccepted[taskIndex].taskStatus);
        } else if (taskStatus === 'completed') {
            taskListAccepted[taskIndex].taskStatus = 'deleted';
            setTaskListState(taskListAccepted[taskIndex].taskStatus);
            setMainContentState(taskListAccepted[taskIndex].taskStatus);
        } else if (taskStatus === 'deleted') {
            taskListAccepted[taskIndex].taskStatus = 'toRemove';
            setTaskListState(taskListAccepted[taskIndex].taskStatus);
            setMainContentState(taskListAccepted[taskIndex].taskStatus);
        }
    };
    return (
        <>
            {taskListAccepted.map((task, index) => (
                <div className="taskListContainer" key={`taskItem-${index}`}>
                    <div className="headerTask">
                        <p className="taskId"> Task Id: {task.id}</p>
                        <h4 className="taskTitle">Task Title: {task.title}</h4>
                    </div>
                    <div className="bodyTask">
                        <p className="taskDescription">
                            Task Description: {task.description}
                        </p>
                        <p className="taskStatus">
                            Task Status: {task.taskStatus}
                        </p>
                    </div>
                    <div className="footerTask">
                        <button type="button" className="buttonEditTask">
                            {task.taskStatus === 'active' && 'Edit'}
                            {task.taskStatus === 'completed' && 'Edit'}
                            {task.taskStatus === 'deleted' && 'Edit'}
                        </button>
                        <button
                            type="button"
                            className="buttonDeleteTask"
                            onClick={() => concludeTask(index, task.taskStatus)}
                        >
                            {task.taskStatus === 'active' && 'Complete'}
                            {task.taskStatus === 'completed' && 'Conclude'}
                            {task.taskStatus === 'deleted' && 'Exclude'}
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}
