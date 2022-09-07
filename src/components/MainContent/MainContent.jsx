import { TaskList } from '../TaskList/TaskList';
import './MainContent.css';
import { useState } from 'react';

export function MainContent() {
    const [mainContentState, setMainContentState] = useState('');
    return (
        <>
            <main className="mainContent">
                <div className="mainContentContainer">
                    <section className="activeTasks">
                        <h3 className="activeTasksTitle">Active Tasks</h3>
                        <TaskList
                            statusTaskList="active"
                            setMainContentState={setMainContentState}
                        />
                    </section>
                    <section className="completedTasks">
                        <h3 className="activeTasksTitle">Completed Tasks</h3>
                        <TaskList
                            statusTaskList="completed"
                            setMainContentState={setMainContentState}
                        />
                    </section>
                    <section className="deletedTasks">
                        <h3 className="activeTasksTitle">Deleted Tasks</h3>
                        <TaskList
                            statusTaskList="deleted"
                            setMainContentState={setMainContentState}
                        />
                    </section>
                </div>
            </main>
        </>
    );
}
