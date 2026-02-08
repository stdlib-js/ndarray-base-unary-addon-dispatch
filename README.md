<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dispatch

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Dispatch to a native add-on applying a unary function to an input ndarray.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import dispatch from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-addon-dispatch@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/ndarray-base-unary-addon-dispatch/tags). For example,

```javascript
import dispatch from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-addon-dispatch@v0.1.1-esm/index.mjs';
```

#### dispatch( addon, fallback )

Returns a function which dispatches to a native add-on applying a unary function to an input ndarray.

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros@esm/index.mjs';
import dispatch from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-addon-dispatch@esm/index.mjs';

function addon( x, metaX, y, metaY ) {
    // Call into native add-on...
}

function fallback( x, y ) {
    // Fallback JavaScript implementation...
}

// Create a dispatch function:
var f = dispatch( addon, fallback );

// ...

// Invoke the dispatch function with ndarray arguments:
var x = array( [ [ 1, 2], [ 3, 4 ] ] );
var y = zeros( [ 2, 2 ] );
f( x, y );
```

The returned function has the following signature:

```text
f( x, y )
```

where

-   **x**: input ndarray.
-   **y**: output ndarray.

The `addon` function should have the following signature:

```text
f( xbuf, metaX, ybuf, metaY )
```

where

-   **xbuf**: input ndarray data buffer.
-   **metaX**: [serialized][@stdlib/ndarray/base/serialize-meta-data] input ndarray meta data.
-   **ybuf**: output ndarray data buffer.
-   **metaY**: [serialized][@stdlib/ndarray/base/serialize-meta-data] output ndarray meta data.

The `fallback` function should have the following signature:

```text
f( x, y )
```

where

-   **x**: input ndarray.
-   **y**: output ndarray.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   To determine whether to dispatch to the `addon` function, the returned dispatch function checks whether the underlying ndarray data buffers are typed arrays. If the data buffers are typed arrays, the dispatch function invokes the `addon` function; otherwise, the dispatch function invokes the `fallback` function.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros@esm/index.mjs';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import dispatch from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-addon-dispatch@esm/index.mjs';

function addon( xbuf, metaX, ybuf, metaY ) {
    console.log( xbuf );
    // => <Float64Array>[ 1, 2, 3, 4 ]

    console.log( ybuf );
    // => <Float64Array>[ 0, 0, 0, 0 ]
}

function fallback( x, y ) {
    console.log( ndarray2array( x ) );
    // => [ [ 1, 2 ], [ 3, 4 ] ]

    console.log( ndarray2array( y ) );
    // => [ [ 0, 0 ], [ 0, 0 ] ]
}

// Create a dispatch function:
var f = dispatch( addon, fallback );

// Create ndarrays:
var opts = {
    'dtype': 'float64',
    'casting': 'unsafe'
};
var x = array( [ [ 1, 2 ], [ 3, 4 ] ], opts );
var y = zeros( [ 2, 2 ], opts );

// Dispatch to the add-on function:
f( x, y );

// Define new ndarrays:
opts = {
    'dtype': 'generic'
};
x = array( [ [ 1, 2 ], [ 3, 4 ] ], opts );
y = zeros( [ 2, 2 ], opts );

// Dispatch to the fallback function:
f( x, y );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-unary-addon-dispatch.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-unary-addon-dispatch

[test-image]: https://github.com/stdlib-js/ndarray-base-unary-addon-dispatch/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/ndarray-base-unary-addon-dispatch/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-unary-addon-dispatch/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-unary-addon-dispatch?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-unary-addon-dispatch.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-unary-addon-dispatch/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-unary-addon-dispatch/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-unary-addon-dispatch/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-unary-addon-dispatch/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-unary-addon-dispatch/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-unary-addon-dispatch/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-unary-addon-dispatch/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-unary-addon-dispatch/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-unary-addon-dispatch/main/LICENSE

[@stdlib/ndarray/base/serialize-meta-data]: https://github.com/stdlib-js/ndarray-base-serialize-meta-data/tree/esm

</section>

<!-- /.links -->
