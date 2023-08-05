import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import { ThemeProvider } from './contexts/ThemeContext'; // Importing the ThemeProvider
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';


function App() {
    return (
        <ThemeProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Add other routes similarly */}
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
