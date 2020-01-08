import React from 'react';
import Tool from './tool/Tool.js'
import './App.css';

function App() {
  return (
    <div className="App footer-fixed">
      <header className="app-header navbar">
        <span className="navbar-brand mb-0 h1">Tool Hub</span>
      </header>
      <div className="app-body">
        <main className="main">
          <Tool/>
        </main>
      </div>
      <footer className="app-footer">
       <React.Fragment>
        <span>Tool Hub &copy; 2019.</span>
        <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
      </React.Fragment> 
      </footer>
    </div>
  );
}

export default App;
