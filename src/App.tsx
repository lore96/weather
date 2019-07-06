import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* UTILS */
import {Routes} from './routes';

/* PAGES */
import Today from './pages/Today/Today';
import Tomorrow from './pages/Tomorrow/Tomorrow';

/* COMPONENT */
import NavBar from './components/NavBar/NavBar';
const citiesList = [{name: 'Milan', country: 'it-It'}, {name: 'Berlin', country: 'de-DE'}];


const App: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path={Routes.today.path} component={(props: any) => <Today {...props} cities={citiesList}/>} />
          <Route path={Routes.tomorrow.path} component={(props: any) => <Tomorrow {...props} cities={citiesList}/>}  />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
