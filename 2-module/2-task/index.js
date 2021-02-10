/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
    if ( "test" in obj ) {
      return false;
    } else {
      return true;
    }
}
