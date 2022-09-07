import './App.css';
import { Header } from './components/Header/Header.jsx';
import { MainContent } from './components/MainContent/MainContent';

function App() {
	return (
		<>
			<div className="containerApp">
				<Header />
				<MainContent />
			</div>
		</>
	);
}

export default App;
