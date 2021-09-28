/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sorted = [...arr];
  if (param === 'asc')
  {
    sorted.sort(function (a, b) {
      return a.localeCompare(b, "ru-en", {caseFirst: 'upper'});
    });
  } else {
    sorted.sort(function (a, b) {
      return -a.localeCompare(b, 'ru-en',  {caseFirst: 'upper'});
    });
  }
  return sorted;
}
