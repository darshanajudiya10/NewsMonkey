import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { darkMode, toggleDarkMode } = props;
  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg fixed-top ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
        <Link className="navbar-brand" to="/">NewsMonkey</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"       // ✅ Bootstrap 5 attribute
          data-bs-target="#navbarSupportedContent" // ✅ Bootstrap 5 attribute
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse"  id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
          </ul>
          <button 
            className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}
            onClick={toggleDarkMode}
            style={{marginLeft: '10px'}}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
