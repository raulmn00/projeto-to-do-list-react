import { TaskList } from '../TaskList/TaskList';
import './MainContent.css';

export function MainContent() {
    return (
        <>
            <main className="mainContent">
                <div className="mainContentContainer">
                    <section className="activeTasks">
                        <h3 className="activeTasksTitle">Active Tasks</h3>
                        <TaskList />
                    </section>
                    <section className="completedTasks">
                        <h3 className="activeTasksTitle">Completed Tasks</h3>
                        <TaskList />
                    </section>
                    <section className="deletedTasks">
                        <h3 className="activeTasksTitle">Deleted Tasks</h3>
                        <TaskList />
                    </section>
                </div>
            </main>
        </>
    );
}
