// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function e(){var e=arguments[arguments.length-1];if(!t(e))throw new TypeError(n("invalid argument. Callback argument must be a function. Value: `%s`.",e));function r(){e(new Error("invalid operation. The environment does not support reading from `stdin`."))}setTimeout(r,0)}export{e as default};
//# sourceMappingURL=index.mjs.map
