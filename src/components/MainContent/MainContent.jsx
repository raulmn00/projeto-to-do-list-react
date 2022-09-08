import { TaskList } from '../TaskList/TaskList';
import './MainContent.css';
import { useState, useEffect } from 'react';
import { Tasks } from '../../mocks/Tasks.js';

export function MainContent() {
    const [mainContentState, setMainContentState] = useState([]);
    const [control, setControl] = useState(false);

    const handleLists = () => {
        const activeTasks = {
            title: 'Actives Tasks',
            tasks: [],
            status: 'active',
        };
        const deletedTasks = {
            title: 'Deleted Tasks',
            tasks: [],
            status: 'deleted',
        };
        const completedTasks = {
            title: 'Completed Tasks',
            tasks: [],
            status: 'completed',
        };
        Tasks.map((task) => {
            if (task.taskStatus === 'active') {
                activeTasks.tasks.push(task);
            } else if (task.taskStatus === 'completed') {
                completedTasks.tasks.push(task);
            } else if (task.taskStatus === 'deleted') {
                deletedTasks.tasks.push(task);
            }
        });
        //console.log('funcao handle lists');
        setMainContentState([activeTasks, completedTasks, deletedTasks]);
    };

    useEffect(() => {
        if (control) {
            setControl(false);
        }
        if (mainContentState.length === 0) {
            handleLists();
        }
    }, [control]);
    return (
        <>
            <main className="mainContent">
                <div className="mainContentContainer">
                    {mainContentState.map((listObject) => {
                        return (
                            <section
                                className={listObject.status}
                                key={listObject.title}
                            >
                                <h3 className="activeTasksTitle">
                                    {listObject.title}
                                </h3>
                                <TaskList
                                    statusTaskList={listObject.status}
                                    tasks={listObject.tasks}
                                    setMainContent={setMainContentState}
                                    mainContent={mainContentState}
                                    control={setControl}
                                />
                            </section>
                        );
                    })}
                </div>
            </main>
        </>
    );
}
