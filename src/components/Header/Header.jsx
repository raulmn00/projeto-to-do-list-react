import './Header.css';
import { FaCheckCircle } from 'react-icons/fa';

export function Header() {
    return (
        <div className="headerContainer">
            <div className="headerHead">
                <FaCheckCircle className="checkIcon" />
                <h2>To Do List</h2>
            </div>

            <nav className="headerNavbar">
                <p>Home</p>
                <p>All Tasks</p>
                <div className="headerSearchForm">
                    <label htmlFor="searchId">Search a Task: </label>
                    <input
                        type="text"
                        placeholder="Task ID: "
                        name="searchId"
                    ></input>
                    <button type="button" className="btnSearch">
                        Search
                    </button>
                </div>
            </nav>
        </div>
    );
}
