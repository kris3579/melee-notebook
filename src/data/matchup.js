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
      ['Fox vs Fox', 1],
      ['Fox vs Marth', 2],
      ['Fox vs Jigglypuff', 3],
      ['Fox vs Sheik', 4],
      ['Fox vs Captian Falcon', 5],
      ['Fox vs Peach', 6],
      ['Fox vs Falco', 7],
      ['Fox vs Ice Climbers', 8]
    ],
  },
  marth: {
    characterIcon: marthIcon,
    iconAlt: 'Icon for the Super Smash Bros. Melee fighter Marth.',
    personalMatchups: [
      ['Marth vs Fox', 9],
      ['Marth vs Marth', 10],
      ['Marth vs Jigglypuff', 11],
      ['Marth vs Sheik', 12],
      ['Marth vs Captian Falcon', 13],
      ['Marth vs Peach', 14],
      ['Marth vs Falco', 15],
      ['Marth vs Ice Climbers', 16]
    ],
  },
  jigglypuff: {
    characterIcon: jigglypuffIcon,
    iconAlt: 'Icon for the Super Smash Bros. Melee fighter Jigglypuff.',
    personalMatchups: [
      ['Jigglypuff vs Fox', 17],
      ['Jigglypuff vs Marth', 18],
      ['Jigglypuff vs Jigglypuff', 19],
      ['Jigglypuff vs Sheik', 20],
      ['Jigglypuff vs Captian Falcon', 21],
      ['Jigglypuff vs Peach', 22],
      ['Jigglypuff vs Falco', 23],
      ['Jigglypuff vs Ice Climbers', 24]
    ],
  },
  sheik: {
    characterIcon: sheikIcon,
    iconAlt: 'Icon for the Super Smash Bros. Melee fighter Sheik.',
    personalMatchups: [
      ['Sheik vs Fox', 25],
      ['Sheik vs Marth', 26],
      ['Sheik vs Jigglypuff', 27],
      ['Sheik vs Sheik', 28],
      ['Sheik vs Captian Falcon', 29],
      ['Sheik vs Peach', 30],
      ['Sheik vs Falco', 31],
      ['Sheik vs Ice Climbers', 32]
    ],
  },
  captainFalcon: {
    characterIcon: captainFalconIcon,
    iconAlt: 'Icon for the Super Smash Bros. Melee fighter Captain Falcon.',
    personalMatchups: [
      ['Captain Falcon vs Fox', 33],
      ['Captain Falcon vs Marth', 34],
      ['Captain Falcon vs Jigglypuff', 35],
      ['Captain Falcon vs Sheik', 36],
      ['Captain Falcon vs Captian Falcon', 37],
      ['Captain Falcon vs Peach', 38],
      ['Captain Falcon vs Falco', 39],
      ['Captain Falcon vs Ice Climbers', 40]
    ],
  },
  peach: {
    characterIcon: peachIcon,
    iconAlt: 'Icon for the Super Smash Bros. Melee fighter Peach.',
    personalMatchups: [
      ['Peach vs Fox', 41],
      ['Peach vs Marth', 42],
      ['Peach vs Jigglypuff', 43],
      ['Peach vs Sheik', 44],
      ['Peach vs Captian Falcon', 45],
      ['Peach vs Peach', 46],
      ['Peach vs Falco', 47],
      ['Peach vs Ice Climbers', 48]
    ],
  },
  falco: {
    characterIcon: falcoIcon,
    iconAlt: 'Icon for the Super Smash Bros. Melee fighter Falco.',
    personalMatchups: [
      ['Falco vs Fox', 49],
      ['Falco vs Marth', 50],
      ['Falco vs Jigglypuff', 51],
      ['Falco vs Sheik', 52],
      ['Falco vs Captian Falcon', 53],
      ['Falco vs Peach', 54],
      ['Falco vs Falco', 55],
      ['Falco vs Ice Climbers', 56]
    ],
  },
  iceClimbers: {
    characterIcon: iceClimbersIcon,
    iconAlt: 'Icon for the Super Smash Bros. Melee fighter Ice Climbers.',
    personalMatchups: [
      ['Ice Climbers vs Fox', 57],
      ['Ice Climbers vs Marth', 58],
      ['Ice Climbers vs Jigglypuff', 59],
      ['Ice Climbers vs Sheik', 60],
      ['Ice Climbers vs Captian Falcon', 61],
      ['Ice Climbers vs Peach', 62],
      ['Ice Climbers vs Falco', 63],
      ['Ice Climbers vs Ice Climbers', 64]
    ],
  },
};

module.exports = matchups;