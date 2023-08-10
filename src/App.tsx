import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';


function App() {
    return (
        
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </Router>
       
    );
}

export default App;
