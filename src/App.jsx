import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header.jsx';
import { MainContent } from './components/MainContent/MainContent';

function App() {
    return (
        <>
            <div className="containerApp">
                <Header />
                <MainContent />
                <Footer />
            </div>
        </>
    );
}

export default App;
