var parse = require('./');
var test = require('tape');

test('parse properties', function(t) {
  t.same(parse('margin: ;'), ['margin', []], 'parsing "margin: ;"');
  t.same(parse('border-radius: 5px;'), ['border-radius', ['5px']], 'parsing "border-radius: 5px;"');
  t.same(parse('margin: auto auto'), ['margin', ['auto', 'auto']], 'parsing "margin: auto auto;"');
  // t.same(parse('background-color: rgb(0, 0, 0);'), ['background-color', ['rgb(0,0,0)']], 'parsing css function value');
  t.end();
});
