import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';
import { ThemeProvider } from './styles/ThemeContext';



function App() {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
