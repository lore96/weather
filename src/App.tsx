import React from 'react';
import logo from './logo.svg';
import './App.css';
import Today from './pages/Today/Today';
import Tomorrow from './pages/Tomorrow/Tomorrow';
import {Routes} from './routes';
import {Link} from 'react-router-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div>
          <Link to={Routes.today.path}><p>Today</p></Link>
          <Link to={Routes.tomorrow.path}><p>Tomorrow</p></Link>
        </div>
        <Switch>
          {/* <div className="App">
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
          </div> */}

          <Route path={Routes.today.path} component={Today} />
          <Route path={Routes.tomorrow.path} component={Tomorrow} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
