var parse = require('./');
var test = require('tape');

test('parse properties', function(t) {
  t.same(parse('margin: ;'), ['margin', []], 'parsing "margin: ;"');
  t.same(parse('border-radius: 5px;'), ['border-radius', ['5px']], 'parsing "border-radius: 5px;"');
  t.same(parse('margin: auto auto'), ['margin', ['auto', 'auto']], 'parsing "margin: auto auto;"');
  t.same(parse('border: 1px 2px 3px 4px'), ['border', ['1px', '2px', '3px', '4px']], 'parsing "border: 1px 2px 3px 4px"');
  t.same(parse('background-color: rgb(0, 0, 0);'), ['background-color', ['rgb(0, 0, 0)']], 'parsing css function value');
  t.same(parse('x: foo("foo") 1'), ['x', ['foo("foo")', '1']], 'parses "x: foo("foo") 1"');
  t.same(parse('y: bar("ba)r") 1'), ['y', ['bar("ba)r")', '1']], 'parses "y: bar("ba)r") 1"');
  t.same(parse('z: bar("fo(oo") 1'), ['z', ['bar("fo(oo")', '1']], 'parses "z: bar("fo(oo") 1"');
  t.same(parse('transform: scale(0.8) translate(-10px, 5px)'), ['transform', ['scale(0.8)', 'translate(-10px, 5px)']], 'parses multiple functions');
  t.same(parse('content: "Foo bar" \'bar qux\''), ['content', ['"Foo bar"', "'bar qux'"]], 'parses "content: "Foo bar" \'bar qux\'"');
  t.same(parse('background: url("blah foo.png") test(\'123 567\') 123'), ['background', ['url("blah foo.png")', 'test(\'123 567\')', '123']], 'parses multiple complex values');
  t.same(parse('content: "foo \\" bar"'), ['content', ['"foo \\" bar"']], 'escaping quotes');
  t.end();
});
