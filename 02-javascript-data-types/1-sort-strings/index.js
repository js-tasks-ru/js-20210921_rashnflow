/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const sorted = [...arr];
  sorted.sort(function (a, b) {
    let value = a.localeCompare(b, "ru-en", {caseFirst: 'upper'});
    if (param === 'asc')
      return value;
    else
      return -value;
  });

  return sorted;
}
