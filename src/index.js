var voca = {};

import isAlpha from './query/is_alpha';
import isAlphaDigit from './query/is_alpha_digit';
import isBlank from './query/is_blank';
import isDigit from './query/is_digit';
import isEmpty from './query/is_empty';
import isEndingWith from './query/is_ending_with';
import isLowerCase from './query/is_lower_case';
import isNumeric from './query/is_numeric';
import isStartingWith from './query/is_starting_with';
import isString from './query/is_string';
import isUpperCase from './query/is_upper_case';

voca.isAlpha = isAlpha;
voca.isAlphaDigit = isAlphaDigit;
voca.isBlank = isBlank;
voca.isDigit = isDigit;
voca.isEmpty = isEmpty;
voca.isEndingWith = isEndingWith;
voca.isLowerCase = isLowerCase;
voca.isNumeric = isNumeric;
voca.isStartingWith = isStartingWith;
voca.isString = isString;
voca.isUpperCase = isUpperCase;

export default voca;