import React from 'react';
import PropTypes from 'prop-types';

import MatchupTD from '../MatchupTD/MatchupTD';

export default class MatchupRow extends React.Component {
  render() {
    return (
      <tr>
        <td><img src={this.props.characterIcon} alt={this.props.iconAlt}/></td>
        {
          this.props.personalMatchups.map((matchup, i) => {
            return (
              <MatchupTD
                matchup = {matchup}
                key = {i}
              />
            )
          })
        }
      </tr>
    );
  };
};

MatchupRow.propTypes = {
  characterIcon: PropTypes.string,
  iconAlt: PropTypes.string,
  personalMatchups: PropTypes.array,
};