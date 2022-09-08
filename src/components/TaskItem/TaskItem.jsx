import './TaskItem.css';
export function TaskItem({
    tasks,
    mainContent,
    control,
    statusTaskList,
    setMainContent,
}) {
    const changeTask = (task, index) => {
        const newTasks = mainContent;
        //console.log('New Tasks: ', newTasks);
        if (statusTaskList === 'active') {
            newTasks[0].tasks.splice(index, 1);
            task.taskStatus = 'completed';
            newTasks[1].tasks.push(task);
            setMainContent(newTasks);
        } else if (statusTaskList === 'completed') {
            newTasks[1].tasks.splice(index, 1);
            task.taskStatus = 'deleted';
            newTasks[2].tasks.push(task);
            setMainContent(newTasks);
        } else if (statusTaskList === 'deleted') {
            task.taskStatus = 'toRemove';
            newTasks[2].tasks.splice(index, 1);
            setMainContent(newTasks);
        }
        control(true);
    };
    return (
        <>
            {tasks.map((task, index) => (
                <div className="taskListContainer" key={`taskItem-${index}`}>
                    <div className="headerTask">
                        <p className="taskId">
                            {' '}
                            Task Id: {task.id}, Task Index: {index}
                        </p>
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
                            onClick={() => changeTask(task, index)}
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
