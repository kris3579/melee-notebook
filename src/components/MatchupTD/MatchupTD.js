import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './MatchupTD.css';

export default class MatchupTD extends React.Component {
  render() {
    const statusClass = this.props.matchup[2] === 'WIP' ? 'inProgress' : this.props.matchup[2] === 'Fleshed Out' ? 'fleshedOut' : 'empty';
    
    return (
      <td>
        <div className='matchupDiv'>
          <Link
            to={{
              pathname: `/matchupNotes/${this.props.matchup[1]}`,
            }}
            >
            {this.props.matchup[0]}
          </Link>
        </div>
        <div className='statusDiv'>
          <span className={statusClass}>{this.props.matchup[2]}</span>
        </div>
      </td>
    );
  };
};

MatchupTD.propTypes = {
  matchup: PropTypes.array,
};