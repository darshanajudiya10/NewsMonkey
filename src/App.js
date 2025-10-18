import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  const pageSize = 12;
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Apply dark mode class to body
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
          <Routes>
            <Route path='/' element={<News key='general' pageSize={pageSize} country='us' category='general' darkMode={darkMode} />} />
            <Route path='/business' element={<News key='business' pageSize={pageSize} country='us' category='business' darkMode={darkMode} />} />
            <Route path='/entertainment' element={<News key='entertainment' pageSize={pageSize} country='us' category='entertainment' darkMode={darkMode} />} />
            <Route path='/health' element={<News key='health' pageSize={pageSize} country='us' category='health' darkMode={darkMode} />} />
            <Route path='/science' element={<News key='science' pageSize={pageSize} country='us' category='science' darkMode={darkMode} />} />
            <Route path='/sports' element={<News key='sports' pageSize={pageSize} country='us' category='sports' darkMode={darkMode} />} />
            <Route path='/technology' element={<News key='technology' pageSize={pageSize} country='us' category='technology' darkMode={darkMode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

