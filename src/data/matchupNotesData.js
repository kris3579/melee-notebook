const matchupData = {
  41: {
    matchup: 'Peach vs Fox',
    stagePick: [
      'Live forever on Dreamland',
      'Abuse dsmash hitbox on the Fountain of Dreams Platforms (beware fox looking to abuse this by spamming up-tilt/upsmash under plat',
      'Picking Yoshi\'s can lead to you dying to upsmash or upair early, but allow you early kills with nair/fair off the side or potentailly upair off the top',
    ],
    neutral: {
      offense: [
        'If you expect Fox to shine your turnips you can try the following:',
        'Throw turnip -> float higher or lower than throw height and fc aerial',
        'Throw turnip up to bait out the shine and punish',
      ],
      defense: [
        'Turnips.',
        'Turnip out of shield',
        'Wavedash back d-tilt after baiting an aerial',
        'Be ready to dash away cc aggresive nairs/bairs, if you expect dair/uair you must get more space and not rely on cc',
        'If you think Fox is looking to whiff-punish try throwing a fast move in a safe position to get him to act, punish him'
      ],
    }
  },
  47: {
    matchup: 'Peach vs Falco',
    stagePick: [
      'Avoid wide stages',
      'Dreamland is good if you can keep yourself from being locked down by lasers'
    ],
    neutral: {
      positioning: [
        'Float just over laser height/max full hop height, but beware of an aerial ment to catch exactly this',
        'If Falco is playing run away with lasers, take plat to reduce oncoming pressure/bait an approach',
      ],
      offense: [
        'If Falco is double lasering from ledge often, consider catching him with a turnip/crouch cancel',
      ],
      defense: [
      'Find time in between lasers to pull turnips and establish your own stage control',
      'Learn to react to lasers with powershield, if falco is camping from long distance consider closing distance with wavedash forward out of powershield',
    ],
    }
  },
  54: {
    matchup: 'Falco vs Peach',
    stagePick: [
      'Wide stages give space for lasers, thin stages help killpower',
      'Dreamland is a trade-off, you get lots of laser space in exchange for allowing Peach\'s recovery to thrive',
    ],
    neutral: {
      positioning: [
        'If the enemy reponds to mid-long distance lasers with powershield consider mixing in close distance lasers(be careful)',
      ],
      offense: [
        'Lock her down with lasers, she is slow and vulnerable',
        'Specifically you can look to stop her double jump from giving her much heigh during its startup and to knock her out of her float'
      ],
      defense: [
        'Be prepared for potential powershielding, be able to act out of laser yourself'
      ],
    }
  }
}

module.exports = matchupData;