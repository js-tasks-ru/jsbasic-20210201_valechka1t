/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    str = str.toLowerCase();
    if (str.includes("1xbet")) {
      return true;
    } 
    if (str.includes("xxxxx")) {
      return true;
    }
    else {return false}
}
