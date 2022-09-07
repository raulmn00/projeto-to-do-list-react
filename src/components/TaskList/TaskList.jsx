import './TaskList.css';
import { Tasks } from '../../mocks/Tasks.js';

export function TaskList({ statusTask }) {
    const taskListAccepted = [];
    Tasks.map((task) => {
        if (task.taskStatus === statusTask) {
            taskListAccepted.push(task);
        }
    });
    console.log(taskListAccepted);
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
                </div>
            ))}
        </>
    );
}
