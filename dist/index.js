"use strict";var m=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var l=m(function(T,s){
var d=require('@stdlib/assert-is-function/dist'),b=require('@stdlib/assert-is-string/dist').isPrimitive,q=require('@stdlib/buffer-ctor/dist'),a=require('@stdlib/buffer-from-string/dist'),t=require('@stdlib/streams-node-stdin/dist'),h=require('@stdlib/utils-next-tick/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist');function k(){var r,e,i,u;if(arguments.length===1)r=arguments[0];else{if(i=arguments[0],!b(i))throw new TypeError(o('0nj6q',i));r=arguments[1]}if(!d(r))throw new TypeError(o('0nj2b',r));if(i&&t.setEncoding(i),t.isTTY)return h(f);e=[],u=0,t.on("readable",c),t.on("error",g),t.on("end",v);function f(){if(i)return r(null,"");r(null,a(""))}function c(){for(var n;n=t.read(),n!==null;)typeof n=="string"&&(n=a(n)),e.push(n),u+=n.length}function g(n){r(n)}function v(){if(i)return r(null,e.join(""));r(null,q.concat(e,u))}}s.exports=k
});var p=l();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
