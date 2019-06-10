import React from 'react';

import MatchupRow from '../MatchupRow/MatchupRow';

import './MatchupTable.css';

import matchups from '../../data/matchup';

export default class MatchupTable extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {
            Object.keys(matchups).map((matchup, i) => {
              return (
                <MatchupRow
                  characterIcon = {matchups[matchup].characterIcon}
                  iconAlt = {matchups[matchup].iconAlt}
                  personalMatchups = {matchups[matchup].personalMatchups}
                  key = {i}
                />
              )
            })
          }
        </tbody>
      </table>
    );
  };
};