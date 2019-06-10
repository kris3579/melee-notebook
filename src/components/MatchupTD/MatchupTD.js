import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './MatchupTD.css';

export default class MatchupTD extends React.Component {
  render() {
    return (
      <td>
        <Link
          to={{
            pathname: '/matchupNotes',
            matchup: {
              matchup: this.props.matchup[0],
              accessMatchup: this.props.matchup[1]
            },
          }}
        >
          {this.props.matchup[0]}
        </Link>
      </td>
    );
  };
};

MatchupTD.propTypes = {
  matchup: PropTypes.array,
};