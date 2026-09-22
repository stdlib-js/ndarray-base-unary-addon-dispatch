"use strict";var O=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(l){throw e=0,l}}};var L=O(function(A,C){"use strict";var m=require("@stdlib/assert-is-function"),f=require("@stdlib/assert-is-typed-array-like"),s=require("@stdlib/ndarray-base-dtype-resolve-enum"),c=require("@stdlib/strided-base-reinterpret-complex64"),d=require("@stdlib/strided-base-reinterpret-complex128"),q=require("@stdlib/strided-base-reinterpret-boolean"),g=require("@stdlib/ndarray-base-data-buffer"),w=require("@stdlib/ndarray-base-dtype"),E=require("@stdlib/ndarray-base-serialize-meta-data"),h=require("@stdlib/string-format"),y=s("complex64"),T=s("complex128"),X=s("bool");function x(a,e){if(!m(a))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",a));if(!m(e))throw new TypeError(h("invalid argument. Second argument must be a function. Value: `%s`.",e));return l;function l(p,r){var n,u,i,t,v,o;if(i=g(p),t=g(r),!f(i)||!f(t))return e(p,r),r;if(n=s(w(p)),u=s(w(r)),n===null||u===null)throw new TypeError("invalid arguments. Unable to resolve an ndarray function supporting the provided argument data types.");return n===y?v=c(i,0):n===T?v=d(i,0):n===X?v=q(i,0):v=i,u===y?o=c(t,0):u===T?o=d(t,0):u===X?o=q(t,0):o=t,a(v,E(p),o,E(r)),r}}C.exports=x});var Y=L();module.exports=Y;
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
