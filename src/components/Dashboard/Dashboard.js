import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import MatchupTable from '../MatchupTable/MatchupTable';

import './Dashboard.css';

export default class App extends React.Component {
  render() {

    return (
      <div>
        <Header/>
        <MatchupTable/>
        <div class='mentalityDiv'>
          <Link
            to={{
              pathname: '/mentalityNotes',
            }}
          >
            <span>Mentality Notes</span>
          </Link>
        </div>
      </div>
    );
  };
};