import React from 'react';

import './MatchupNotes.css';

import matchupData from '../../data/matchupNotesData';

export default class MatchupNotes extends React.Component {
  render() {
    const key = this.props.match.params.matchupId;
    const data = matchupData[key];

    const doWeDisplaySubject = ((subject) => {
      if (data) {
        if (data[subject]) {
          return (
          <ul>
            {
            data[subject].map((note, i) => {
              return (    
                <li key={i}>{note}</li>
                )
              })
            };
          </ul>
          );
        };
      };
      return (
        <li>N/A</li>
      );
    });

    const doWedisplayNeutralSubject = ((subject) => {
      if(data) {
        if(data.neutral) {
          if(data.neutral[subject]) {
            return (
              <ul>
                {
                data.neutral[subject].map((note, i) => {
                  return (    
                    <li key={i}>{note}</li>
                    )
                  })
                };
              </ul>
            );
          };
        };
      };
      return (
        <li>N/A</li>
      );
    });

    const stagePick = doWeDisplaySubject('stagePick');
    const neutralPositioning = doWedisplayNeutralSubject('positioning');
    const neutralOffense = doWedisplayNeutralSubject('offense');
    const neutralDefense = doWedisplayNeutralSubject('defense');
    const punish = doWeDisplaySubject('punish');
    const edgeGaurd = doWeDisplaySubject('edgeGaurd');
    const recovery = doWeDisplaySubject('recovery');

    return (
      <div>
        <h2>{data.matchup}</h2>
        <h3>Stage Pick</h3>
        {stagePick}
        <h3>Neutral</h3>
        <ul>
          <h4>Positioning</h4>
          {neutralPositioning}
          <h4>Offense</h4>
          {neutralOffense}
          <h4>Defense</h4>
          {neutralDefense}
        </ul>
        <h3>Punish</h3>
        {punish}
        <h3>Edge Gaurd</h3>
        {edgeGaurd}
        <h3>Recovery</h3>
        {recovery}
      </div>
    );
  };
};