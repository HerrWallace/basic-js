const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(old_activity) {
  if (typeof old_activity !== 'string' || old_activity === '' || isNaN(old_activity)) {
    return false;
  }
  if (+old_activity > 15 || +old_activity < 1) {
    return false;
  }

  let result = Math.log(15 / +old_activity) * Math.pow(10, 4)  / (0.693 / 5730 * 10000);
  if (result <= 0 || result > 300000 || result === NaN) {
    return false;
  }
    return Math.ceil(result);
}

module.exports = {
  dateSample
};
