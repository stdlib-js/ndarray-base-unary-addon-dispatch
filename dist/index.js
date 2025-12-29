"use strict";var O=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var C=O(function(A,X){"use strict";var l=require("@stdlib/assert-is-function"),m=require("@stdlib/assert-is-typed-array-like"),s=require("@stdlib/ndarray-base-dtype-resolve-enum"),f=require("@stdlib/strided-base-reinterpret-complex64"),c=require("@stdlib/strided-base-reinterpret-complex128"),d=require("@stdlib/strided-base-reinterpret-boolean"),q=require("@stdlib/ndarray-base-data-buffer"),g=require("@stdlib/ndarray-base-dtype"),w=require("@stdlib/ndarray-base-serialize-meta-data"),E=require("@stdlib/string-format"),h=s("complex64"),y=s("complex128"),T=s("bool");function x(a,e){if(!l(a))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",a));if(!l(e))throw new TypeError(E("invalid argument. Second argument must be a function. Value: `%s`.",e));return L;function L(p,r){var n,u,i,t,v,o;if(i=q(p),t=q(r),!m(i)||!m(t))return e(p,r),r;if(n=s(g(p)),u=s(g(r)),n===null||u===null)throw new TypeError("invalid arguments. Unable to resolve an ndarray function supporting the provided argument data types.");return n===h?v=f(i,0):n===y?v=c(i,0):n===T?v=d(i,0):v=i,u===h?o=f(t,0):u===y?o=c(t,0):u===T?o=d(t,0):o=t,a(v,w(p),o,w(r)),r}}X.exports=x});var Y=C();module.exports=Y;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
