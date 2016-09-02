module.exports = parse;

/** @module css-parse-properties
  *
  * Parse CSS properties into a simple array.
  *
  */

function parse(property) {
  var center = property.indexOf(':');
  var name = property.slice(0, center);
  var list = property.slice(center + 1).trim();
  var i = list.length;
  if (list[i - 1] === ';') list = list.slice(0, -1);
  var values = [];
  var last = i;
  var capturing = false;
  do {
    if (list[i] === ')') capturing = true;
    if (list[i] === '(') capturing = false;
    if (i < 0 || list[i] === ' ' && !capturing) {
      var value = list.slice(i + 1, last);
      if (value) values.unshift(value);
      last = i;
    }
  } while (i-- > -1);
  return [name, values];
};
