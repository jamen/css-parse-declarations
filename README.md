# css-parse-declarations [![NPM version](https://badge.fury.io/js/css-parse-declarations.svg)](https://npmjs.org/package/css-parse-declarations) [![Build Status](https://travis-ci.org/jamen/css-parse-declarations.svg?branch=master)](https://travis-ci.org/jamen/css-parse-declarations)

> Parse CSS declarations into a simple array structure.

```js
parse('border: 1px solid red');
// => ['border', ['1px', 'solid', 'red']]

parse('transform: scale(0.8) translate(-10px, 5px)');
// => ['transform', ['scale(0.8)', 'translate(-10px, 5px)']]

parse(['foo: bar oof', 'baz: qux']);
// => [['foo', ['bar', 'oof']],
// =>  ['baz', ['qux']]]
```

## Installation

```sh
$ npm install --save css-parse-declarations
```

## API

### `parse(declarations)`
Parse declarations into a `[name, values]` format (examples below).
 - declarations (`String`|`Array`): A declaration or array of declarations to parse.

```js
parse('margin: 1px 2px');
// => ['margin', ['1px', '2px']]

parse([
  'margin: 1em 2.50em',
  'border: 2px solid red;',
  'transform: scale(0.5)'
]);
// => [['margin', ['1em', '2.50em'],
// =>  ['border', ['2px', 'solid', 'red']],
// =>  ['transform', ['scale(0.5)']]]
```

## License

MIT © [Jamen Marz](https://github.com/jamen)
