# dom-insert-html

[![Build Status](https://secure.travis-ci.org/necolas/dom-insert-html.png?branch=master)](http://travis-ci.org/necolas/dom-insert-html)

HTML-string DOM insertion methods. Convenient, minifier-friendly methods for
using [insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element.insertAdjacentHTML).

## Installation

```
npm install dom-insert-html
```

## API

Available methods:

* `after(element, string)`: insert HTML string after element.
* `before(element, string)`: insert HTML string before element.
* `append(element, string)`: append HTML string to element.
* `prepend(element, string)`: prepend HTML string to element.

Each method accepts:

* `element` {Element}: DOM element
* `string` {String}: the HTML stringn to insert.

## Examples

```js
var html = require('dom-insert-html');
var el = document.querySelector('.element');
var str = '<p>DOMString content</p>';

html.after(el, str);
html.before(el, str);
html.append(el, str);
html.prepend(el, str);
```

## Browser support

* Google Chrome
* Firefox 8+
* Internet Explorer 4+
* Safari 4+
* Opera 7+
