module.exports = parse;

/** @module css-parse-properties
  *
  * Parse CSS properties into a simple array.
  *
  */

function parse(property) {
  var center = property.indexOf(':');
  var name = property.slice(0, center);
  var values = property.slice(center + 1).trim();
  if (values[values.length - 1] === ';') values = values.slice(0, -1);
  return [name, values ? values.split(' ') : []];
};
