const foxIcon = require('../assets/characterPortraits/Fox.png');
const marthIcon = require('../assets/characterPortraits/Marth.png');
const jigglypuffIcon = require('../assets/characterPortraits/Puff.png');
const sheikIcon = require('../assets/characterPortraits/Sheik.png');
const captainFalconIcon = require('../assets/characterPortraits/Falcon.png');
const peachIcon = require('../assets/characterPortraits/Peach.png');
const falcoIcon = require('../assets/characterPortraits/Falco.png');
const iceClimbersIcon = require('../assets/characterPortraits/IceClimbers.png');

const matchups = {
  fox: {
    characterIcon: foxIcon,
    iconAlt: 'Icon for the Super Smash Bros. Melee fighter Fox.',
    personalMatchups: [
      ['Fox vs Fox', 1, 'Empty'],
      ['Fox vs Marth', 2, 'Empty'],
      ['Fox vs Jigglypuff', 3, 'Empty'],
      ['Fox vs Sheik', 4, 'Empty'],
      ['Fox vs Captian Falcon', 5, 'Empty'],
      ['Fox vs Peach', 6, 'Empty'],
      ['Fox vs Falco', 7, 'Empty'],
      ['Fox vs Ice Climbers', 8, 'Empty']
    ],
  },
  marth: {
    characterIcon: marthIcon,
    iconAlt: 'Icon for the Super Smash Bros. Melee fighter Marth.',
    personalMatchups: [
      ['Marth vs Fox', 9, 'Empty'],
      ['Marth vs Marth', 10, 'Empty'],
      ['Marth vs Jigglypuff', 11, 'Empty'],
      ['Marth vs Sheik', 12, 'Empty'],
      ['Marth vs Captian Falcon', 13, 'Empty'],
      ['Marth vs Peach', 14, 'Empty'],
      ['Marth vs Falco', 15, 'Empty'],
      ['Marth vs Ice Climbers', 16, 'Empty']
    ],
  },
  jigglypuff: {
    characterIcon: jigglypuffIcon,
    iconAlt: 'Icon for the Super Smash Bros. Melee fighter Jigglypuff.',
    personalMatchups: [
      ['Jigglypuff vs Fox', 17, 'Empty'],
      ['Jigglypuff vs Marth', 18, 'Empty'],
      ['Jigglypuff vs Jigglypuff', 19, 'Empty'],
      ['Jigglypuff vs Sheik', 20, 'Empty'],
      ['Jigglypuff vs Captian Falcon', 21, 'Empty'],
      ['Jigglypuff vs Peach', 22, 'Empty'],
      ['Jigglypuff vs Falco', 23, 'Empty'],
      ['Jigglypuff vs Ice Climbers', 24, 'Empty']
    ],
  },
  sheik: {
    characterIcon: sheikIcon,
    iconAlt: 'Icon for the Super Smash Bros. Melee fighter Sheik.',
    personalMatchups: [
      ['Sheik vs Fox', 25, 'Empty'],
      ['Sheik vs Marth', 26, 'Empty'],
      ['Sheik vs Jigglypuff', 27, 'Empty'],
      ['Sheik vs Sheik', 28, 'Empty'],
      ['Sheik vs Captian Falcon', 29, 'Empty'],
      ['Sheik vs Peach', 30, 'Empty'],
      ['Sheik vs Falco', 31, 'Empty'],
      ['Sheik vs Ice Climbers', 32, 'Empty']
    ],
  },
  captainFalcon: {
    characterIcon: captainFalconIcon,
    iconAlt: 'Icon for the Super Smash Bros. Melee fighter Captain Falcon.',
    personalMatchups: [
      ['Captain Falcon vs Fox', 33, 'Empty'],
      ['Captain Falcon vs Marth', 34, 'Empty'],
      ['Captain Falcon vs Jigglypuff', 35, 'Empty'],
      ['Captain Falcon vs Sheik', 36, 'Empty'],
      ['Captain Falcon vs Captian Falcon', 37, 'Empty'],
      ['Captain Falcon vs Peach', 38, 'Empty'],
      ['Captain Falcon vs Falco', 39, 'Empty'],
      ['Captain Falcon vs Ice Climbers', 40, 'Empty']
    ],
  },
  peach: {
    characterIcon: peachIcon,
    iconAlt: 'Icon for the Super Smash Bros. Melee fighter Peach.',
    personalMatchups: [
      ['Peach vs Fox', 41, 'Empty'],
      ['Peach vs Marth', 42, 'Empty'],
      ['Peach vs Jigglypuff', 43, 'Empty'],
      ['Peach vs Sheik', 44, 'Empty'],
      ['Peach vs Captian Falcon', 45, 'Empty'],
      ['Peach vs Peach', 46, 'Empty'],
      ['Peach vs Falco', 47, 'WIP'],
      ['Peach vs Ice Climbers', 48, 'Empty']
    ],
  },
  falco: {
    characterIcon: falcoIcon,
    iconAlt: 'Icon for the Super Smash Bros. Melee fighter Falco.',
    personalMatchups: [
      ['Falco vs Fox', 49, 'Empty'],
      ['Falco vs Marth', 50, 'Empty'],
      ['Falco vs Jigglypuff', 51, 'Empty'],
      ['Falco vs Sheik', 52, 'Empty'],
      ['Falco vs Captian Falcon', 53, 'Empty'],
      ['Falco vs Peach', 54, 'WIP'],
      ['Falco vs Falco', 55, 'Empty'],
      ['Falco vs Ice Climbers', 56, 'Empty']
    ],
  },
  iceClimbers: {
    characterIcon: iceClimbersIcon,
    iconAlt: 'Icon for the Super Smash Bros. Melee fighter Ice Climbers.',
    personalMatchups: [
      ['Ice Climbers vs Fox', 57, 'Empty'],
      ['Ice Climbers vs Marth', 58, 'Empty'],
      ['Ice Climbers vs Jigglypuff', 59, 'Empty'],
      ['Ice Climbers vs Sheik', 60, 'Empty'],
      ['Ice Climbers vs Captian Falcon', 61, 'Empty'],
      ['Ice Climbers vs Peach', 62, 'Empty'],
      ['Ice Climbers vs Falco', 63, 'Empty'],
      ['Ice Climbers vs Ice Climbers', 64, 'Empty']
    ],
  },
};

module.exports = matchups;