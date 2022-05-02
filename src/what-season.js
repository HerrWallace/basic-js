const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
// 11 0 1 - winter
// 2 3 4 - spring
// 5 6 7 - summer
// 8 9 10 - fall
function getSeason(input = 'none') {
  if (input === '' || input === 'none') {
    return 'Unable to determine the time of year!';
  }

  const dataArr = Object.keys(input);

  if (dataArr.length > 0 || !(input instanceof Date && !isNaN(input))) {
    throw new Error('Invalid date!');
  }

  let arr = [[11, 0, 1, 'winter'],[2, 3, 4, 'spring'],[5, 6, 7, 'summer'],[8, 9, 10, 'fall']];
  let month = input.getMonth();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(month)) {
      return arr[i][3];
    } 
  }
}

module.exports = {
  getSeason
};
