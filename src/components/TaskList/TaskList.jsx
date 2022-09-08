import './TaskList.css';
import { TaskItem } from '../TaskItem/TaskItem';

//componente taskListItem
export function TaskList({
    statusTaskList,
    setMainContent,
    tasks,
    mainContent,
    control,
}) {
    return (
        <>
            <TaskItem
                tasks={tasks}
                mainContent={mainContent}
                control={control}
                statusTaskList={statusTaskList}
                setMainContent={setMainContent}
            />
        </>
    );
}
