/******/!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}// webpackBootstrap
/******/
<<<<<<< HEAD
var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=447)}({213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(275);(0,window.$)(function(){new i.a})},274:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=window.$,s=function(){function e(){i(this,e),r(".js-translation-type").on("change",this.toggleFields.bind(this)),r(".js-email-content-type").on("change",this.toggleEmailFields.bind(this)),this.toggleFields()}return o(e,[{key:"toggleFields",value:function(){var e=r(".js-translation-type").val(),t=r(".js-module-form-group"),n=r(".js-email-form-group"),i=r(".js-theme-form-group"),o=i.find("select"),s=o.find(".js-no-theme"),a=o.find("option:not(.js-no-theme):first");switch(e){case"back":case"others":this._hide(t,n,i);break;case"themes":s.is(":selected")&&o.val(a.val()),this._hide(t,n,s),this._show(i);break;case"modules":this._hide(n,i),this._show(t);break;case"mails":this._hide(t,i),this._show(n)}this.toggleEmailFields()}},{key:"toggleEmailFields",value:function(){if("mails"===r(".js-translation-type").val()){var e=r(".js-email-form-group").find("select").val(),t=r(".js-theme-form-group"),n=t.find(".js-no-theme");"body"===e?(n.prop("selected",!0),this._show(n,t)):this._hide(n,t)}}},{key:"_hide",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i in t)t[i].addClass("d-none"),t[i].find("select").prop("disabled","disabled")}},{key:"_show",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i in t)t[i].removeClass("d-none"),t[i].find("select").prop("disabled",!1)}}]),e}();t.a=s},275:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(274),r=function e(){i(this,e),new o.a};t.a=r},447:function(e,t,n){e.exports=n(213)}});
=======
var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=443)}({212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(272);(0,window.$)(function(){new i.a})},271:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=window.$,s=function(){function e(){i(this,e),r(".js-translation-type").on("change",this.toggleFields.bind(this)),r(".js-email-content-type").on("change",this.toggleEmailFields.bind(this)),this.toggleFields()}return o(e,[{key:"toggleFields",value:function(){var e=r(".js-translation-type").val(),t=r(".js-module-form-group"),n=r(".js-email-form-group"),i=r(".js-theme-form-group"),o=i.find("select"),s=o.find(".js-no-theme"),a=o.find("option:not(.js-no-theme):first");switch(e){case"back":case"others":this._hide(t,n,i);break;case"themes":s.is(":selected")&&o.val(a.val()),this._hide(t,n,s),this._show(i);break;case"modules":this._hide(n,i),this._show(t);break;case"mails":this._hide(t,i),this._show(n)}this.toggleEmailFields()}},{key:"toggleEmailFields",value:function(){if("mails"===r(".js-translation-type").val()){var e=r(".js-email-form-group").find("select").val(),t=r(".js-theme-form-group"),n=t.find(".js-no-theme");"body"===e?(n.prop("selected",!0),this._show(n,t)):this._hide(n,t)}}},{key:"_hide",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i in t)t[i].addClass("d-none"),t[i].find("select").prop("disabled","disabled")}},{key:"_show",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i in t)t[i].removeClass("d-none"),t[i].find("select").prop("disabled",!1)}}]),e}();t.a=s},272:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(271),r=function e(){i(this,e),new o.a};t.a=r},443:function(e,t,n){e.exports=n(212)}});
>>>>>>> develop
