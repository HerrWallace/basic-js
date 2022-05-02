const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  if (!Array.isArray(array)) {
    return false;
  }
  let result = '';

  let newArr = array
  .filter((item) => typeof item === 'string')
  .map((item) => {
    for (let i = 0; i < item.length; i++) {
      if (item[i] !== ' ') {
        return item[i].toUpperCase();
      }
      
    }
  })
  .sort();

  for (item of newArr) {
    result += item;
  }
  return result.toUpperCase();
}

module.exports = {
  createDreamTeam
};
