import React from 'react';
import Tool from './tool/Tool.js'
import './App.css';

function App() {
  return (
    <div className="App footer-fixed">
      <header class="app-header navbar">
        <span class="navbar-brand mb-0 h1">Tool Hub</span>
      </header>
      <div class="app-body">
        <main class="main">
          <Tool/>
        </main>
      </div>
      <footer class="app-footer">
       <React.Fragment>
        <span>Tool Hub &copy; 2019.</span>
        <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
      </React.Fragment> 
      </footer>
    </div>
  );
}

export default App;
