import { TaskList } from '../TaskList/TaskList';
import './MainContent.css';

export function MainContent() {
    return (
        <>
            <main className="mainContent">
                <div className="mainContentContainer">
                    <section className="activeTasks">
                        <h3 className="activeTasksTitle">Active Tasks</h3>
                        <TaskList statusTask="active" />
                    </section>
                    <section className="completedTasks">
                        <h3 className="activeTasksTitle">Completed Tasks</h3>
                        <TaskList statusTask="completed" />
                    </section>
                    <section className="deletedTasks">
                        <h3 className="activeTasksTitle">Deleted Tasks</h3>
                        <TaskList statusTask="deleted" />
                    </section>
                </div>
            </main>
        </>
    );
}
