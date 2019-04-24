const uvIndexRanges = [
  {
    risk: 'low',
    min: 0,
    max: 2.9,
    color: 'Green',
    description: "low danger from the sun's UV rays for the average person.",
    helpLink: 'https://en.wikipedia.org/wiki/Ultraviolet_index#Index_usage',
  },
  {
    risk: 'moderate',
    min: 3.0,
    max: 5.9,
    color: 'Yellow',
    description: 'moderate risk of harm from unprotected sun exposure.',
    helpLink: 'https://en.wikipedia.org/wiki/Ultraviolet_index#Index_usage',
  },
  {
    risk: 'high',
    min: 6.0,
    max: 7.9,
    color: 'Orange',
    description: 'high risk of harm from unprotected sun exposure. Protection against skin and eye damage is needed.',
    helpLink: 'https://en.wikipedia.org/wiki/Ultraviolet_index#Index_usage',
  },
  {
    risk: 'very high',
    min: 8.0,
    max: 10.9,
    color: 'Red',
    description:
      'very high risk of harm from unprotected sun exposure. Take extra precautions because unprotected skin and eyes will be damaged and can burn quickly.',
    helpLink: 'https://en.wikipedia.org/wiki/Ultraviolet_index#Index_usage',
  },
  {
    risk: 'extreme',
    min: 11.0,
    max: 20,
    color: 'Violet',
    description:
      'extreme risk of harm from unprotected sun exposure. Take all precautions because unprotected skin and eyes can burn in minutes.',
    helpLink: 'https://en.wikipedia.org/wiki/Ultraviolet_index#Index_usage',
  },
];

function getUVIndexRange(uvIndex) {
  return uvIndexRanges.find((range) => range.max > uvIndex);
}

module.exports.getUVIndexRange = getUVIndexRange;
