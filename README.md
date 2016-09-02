# css-parse-properties [![NPM version](https://badge.fury.io/js/css-parse-properties.svg)](https://npmjs.org/package/css-parse-properties) [![Build Status](https://travis-ci.org/jamen/css-parse-properties.svg?branch=master)](https://travis-ci.org/jamen/css-parse-properties)

> Parse CSS properties into a simple array structure.

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
$ npm install --save css-parse-properties
```

## API

### `parse(properties)`
Parse properties into a `[name, values]` format (examples below).
 - properties (`String`|`Array`): A property or array of properties to parse.

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
