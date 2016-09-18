module.exports = parse;

/** @module css-parse-declarations
  *
  * Parse CSS declarations into a simple array.
  *
  */

function parse(declaration) {
  if (declaration instanceof Array) {
    var output = [];
    var index = declaration.length;
    while (index--) output[index] = parse(declaration[index]);
    return output;
  }

  var center = declaration.indexOf(':');
  var property = declaration.slice(0, center);
  var list = declaration.slice(center + 1).trim();
  var i = list.length;

  if (list[i - 1] === ';') list = list.slice(0, -1);

  var values = [];
  var last = i;
  var capturing = null;
  do {
    if (list[i] === '"' || list[i] === "'") {
      if (!capturing) capturing = 'string';
      else if (capturing === 'string' && list[i - 1] !== '\\') capturing = null
    }
    if (capturing !== 'function' && list[i] === ')') capturing = 'function';
    if (capturing === 'function' && list[i] === '(') capturing = null;
    if (i < 0 || list[i] === ' ' && !capturing) {
      var value = list.slice(i + 1, last);
      if (value) values.unshift(value);
      last = i;
    }
  } while (i-- > -1);

  return [property, values];
};
