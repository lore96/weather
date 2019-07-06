import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
