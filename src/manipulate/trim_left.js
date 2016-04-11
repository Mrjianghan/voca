import toString from '../utils/string/to_string'
import undefinedDefault from '../utils/undefined/undefined_default';
import isNil from '../utils/object/is_nil';

const REGEX_TRIM_LEFT = /^[\s\uFEFF\xA0]+/;

/**
 * Removes the whitespaces from the left part of the `subject`.
 *
 * @function trimLeft
 * @static
 * @memberOf Manipulate
 * @param {string} [subject=''] The string to trim.
 * @param {string} [whitespace=whitespace] The whitespace to remove.
 * @return {string} Returns the trimmed string.
 * @example
 * v.trimLeft('  Starship Troopers');
 * // => 'Starship Troopers'
 *
 * v.trim('***Mobile Infantry', '*');
 * // => 'Mobile Infantry'
 */
export default function(subject, whitespace) {
  subject = undefinedDefault(subject, '');
  var valueString = toString(subject);
  if (isNil(valueString)) {
    return '';
  }
  if (whitespace === '' || valueString === '') {
    return valueString;
  }
  var whitespaceString = toString(whitespace);
  if (isNil(whitespaceString)) {
    return valueString.replace(REGEX_TRIM_LEFT, '');
  }
  var matchWhitespace = true,
    totalWhitespaceLength = 0,
    whitespaceStringLength = whitespaceString.length;
  while(matchWhitespace) {
    if (valueString.indexOf(whitespaceString, totalWhitespaceLength) === totalWhitespaceLength) {
      totalWhitespaceLength += whitespaceStringLength;
    } else {
      matchWhitespace = false;
    }
  }
  return valueString.substring(totalWhitespaceLength);
}