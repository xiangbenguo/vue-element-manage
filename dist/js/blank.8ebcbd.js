(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1107:function(e,t){},1108:function(e,t){},1109:function(e,t){},1110:function(e,t){},1159:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),u=n(1103),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={numPages:null,pageNumber:1},e.onDocumentLoadSuccess=function(t){var n=t.numPages;e.setState({numPages:n})},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),a(t,[{key:"render",value:function(){var e=this.state,t=e.pageNumber,n=e.numPages;return r.a.createElement("div",null,r.a.createElement(u.Document,{file:"./my.pdf",onLoadSuccess:this.onDocumentLoadSuccess},r.a.createElement(u.Page,{pageNumber:t})),r.a.createElement("p",null,"Page ",t," of ",n))}}]),t}();n.d(t,"default",function(){return c})}}]);