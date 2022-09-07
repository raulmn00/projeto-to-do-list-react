import './MainContent.css';

export function MainContent() {
	return (
		<>
			<main className="mainContent">
				<div className="mainContentContainer">
					<section className="activeTasks">
						<h3 className="activeTasksTitle">Active Tasks</h3>
						<p>Task 1</p>
						<p>Task 2</p>
						<p>Task 3</p>
					</section>
					<section className="completedTasks">
						<h3 className="activeTasksTitle">Completed Tasks</h3>
						<p>Task 1</p>
						<p>Task 2</p>
						<p>Task 3</p>
					</section>
					<section className="deletedTasks">
						<h3 className="activeTasksTitle">Deleted Tasks</h3>
						<p>Task 1</p>
						<p>Task 2</p>
						<p>Task 3</p>
					</section>
				</div>
			</main>
		</>
	);
}
