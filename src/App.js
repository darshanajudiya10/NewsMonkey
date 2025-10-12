import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {
   pageSize= 12;
   
   constructor() {
     super();
     this.state = {
       darkMode: false
     };
   }

  toggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
    // Apply dark mode class to body
    if (!this.state.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  render() {
    
    return (
      <div>
        <BrowserRouter>
          <Navbar darkMode={this.state.darkMode} toggleDarkMode={this.toggleDarkMode} />
          <div className={this.state.darkMode ? 'dark-mode' : 'light-mode'}>
            <Routes>
              <Route path='/' element={<News key='general' pageSize={this.pageSize} country='us' category='general' darkMode={this.state.darkMode} />} />
              <Route path='/business' element={<News key='business' pageSize={this.pageSize} country='us' category='business' darkMode={this.state.darkMode} />} />
              <Route path='/entertainment' element={<News key='entertainment' pageSize={this.pageSize} country='us' category='entertainment' darkMode={this.state.darkMode} />} />
              <Route path='/health' element={<News key='health' pageSize={this.pageSize} country='us' category='health' darkMode={this.state.darkMode} />} />
              <Route path='/science' element={<News key='science' pageSize={this.pageSize} country='us' category='science' darkMode={this.state.darkMode} />} />
              <Route path='/sports' element={<News key='sports' pageSize={this.pageSize} country='us' category='sports' darkMode={this.state.darkMode} />} />
              <Route path='/technology' element={<News key='technology' pageSize={this.pageSize} country='us' category='technology' darkMode={this.state.darkMode} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

