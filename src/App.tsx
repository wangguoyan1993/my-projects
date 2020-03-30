import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.less';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://beian.miit.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
        >
          辽ICP备20002112号-1
        </a>
      </header>
    </div>
  );
}

export default App;
