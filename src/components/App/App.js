import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import MatchupNotes from '../MatchupNotes/MatchupNotes';
import MentalityNotes from '../MentalityNotes/MentalityNotes';

import './App.css';

export default class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <Route exact path={'/'} component={Dashboard}/>
        <Route exact path={'/matchupNotes'} component={MatchupNotes}/>
        <Route exact path={'/mentalityNotes'} component={MentalityNotes}/>
      </BrowserRouter>
    );
  };
};