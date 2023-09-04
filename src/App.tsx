import React from 'react';
import { Route, Switch } from 'react-router';

import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Home } from "./pages/Home/Home";



function App() {
  return (
    <div className="App">
   <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/month-statistic' exact component={MonthStatistics}/>
   </Switch>
    </div>
  )
  }
export default App;
