import React from 'react';
import PropTypes from 'prop-types';

import './MatchupNotes.css';

import matchupData from '../../data/matchupNotesData';

export default class MatchupNotes extends React.Component {
  render() {
    const key = this.props.location.matchup.accessMatchup;
    const data = matchupData[key];

    const stagePick = data && data.stagePick ? data.stagePick : 'N/A';
    const doWeDisplayStagePick = stagePick === 'N/A' ? <li>N/A</li> : <ul>{
      stagePick.map((note, i) => {
        return (
          <li key={i}>{note}</li>
          )
        })
      }</ul>;

    const neutralPositioning = data && data.neutral.positioning ? data.neutral.positioning : 'N/A';
    const doWeDisplayNeutralPositioning = neutralPositioning === 'N/A' ? <li>N/A</li> : <ul>{
      neutralPositioning.map((note, i) => {
        return (
          <li key={i}>{note}</li>
          )
        })
      }</ul>;

    const neutralOffense = data && data.neutral.offense ? data.neutral.offense : 'N/A';
    const doWeDisplayNeutralOffense = neutralOffense === 'N/A' ? <li>N/A</li> : <ul>{
      neutralOffense.map((note, i) => {
        return (
          <li key={i}>{note}</li>
          )
        })
      }</ul>;

    const neutralDefense = data && data.neutral.defense ? data.neutral.defense : 'N/A';
    const doWeDisplayNeutralDefense = neutralDefense === 'N/A' ? <li>N/A</li> : <ul>{
      neutralDefense.map((note, i) => {
        return (
          <li key={i}>{note}</li>
          )
        })
      }</ul>;

    const punish = data && data.punish ? data.punish : 'N/A';
    const doWeDisplayPunish = punish === 'N/A' ? <li>N/A</li> : <ul>{
      punish.map((note, i) => {
        return (
          <li key={i}>{note}</li>
          )
        })
      }</ul>;

    const edgeGaurd = data && data.edgeGaurd ? data.edgeGaurd : 'N/A';
    const doWeDisplayEdgeGaurd = edgeGaurd === 'N/A' ? <li>N/A</li> : <ul>{
      edgeGaurd.map((note, i) => {
        return (
          <li key={i}>{note}</li>
          )
        })
      }</ul>;

    const recovery = data && data.recovery ? data.recovery : 'N/A';
    const doWeDisplayRecovery = recovery === 'N/A' ? <li>N/A</li> : <ul>{
      recovery.map((note, i) => {
        return (
          <li key={i}>{note}</li>
          )
        })
      }</ul>;

    return (
      <div>
        <h2>{this.props.location.matchup.matchup}</h2>
        <h3>Stage Pick</h3>
        {doWeDisplayStagePick}
        <h3>Neutral</h3>
        <ul>
          <h4>Positioning</h4>
          {doWeDisplayNeutralPositioning}
          <h4>Offense</h4>
          {doWeDisplayNeutralOffense}
          <h4>Defense</h4>
          {doWeDisplayNeutralDefense}
        </ul>
        <h3>Punish</h3>
        {doWeDisplayPunish}
        <h3>Edge Gaurd</h3>
        {doWeDisplayEdgeGaurd}
        <h3>Recovery</h3>
        {doWeDisplayRecovery}
      </div>
    );
  };
};

MatchupNotes.propTypes = {
  matchup: PropTypes.object,
};