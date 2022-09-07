import './Header.css';

export function Header() {
	return (
		<div className="headerContainer">
			<h2>Header</h2>
			<nav className="headerNavbar">
				<p>Home</p>
				<p>All Tasks</p>
				<p>Delete Task</p>
			</nav>
		</div>
	);
}
