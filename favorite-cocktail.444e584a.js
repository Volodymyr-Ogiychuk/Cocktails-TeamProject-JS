!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;function o(e){return fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(e)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function a(e){return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=".concat(e)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function s(e){return fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=".concat(e)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function u(e){return e.map((function(e){var t=e.strDrink,n=e.strDrinkThumb,r=e.idDrink;return'<li class="cocktails__card">\n              <div>\n                <img class="cocktails__image" src="'.concat(n,'" alt="').concat(t,'" width="280">\n              </div>\n              <p class="cocktails__name" data-id="').concat(r,'">').concat(t,'</p>\n              <div class="button-wrapper">\n                <button class="btn-lm" type="button">Learn more</button>\n                <button class="btn-add" type="button">Add to</button>\n              </div>\n            </li>')})).join("")}null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),i.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),i.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return a.apply(null,arguments)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n};function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,n){return(a=o()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return n&&r.default(o,n.prototype),o}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),i.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),i.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=o(i("ds8z5")),r=o(i("l5bVx"));function o(e){return e&&e.__esModule?e:{default:e}}})),i.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=i("fVNic"))&&n.__esModule?n:{default:n}}));var c=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},l=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},h=document.querySelector("#search-form"),d=document.querySelector(".cocktails__list"),f=document.querySelector(".not-found"),p=document.querySelector(".cocktails__title");h.addEventListener("submit",(function(e){e.preventDefault();var t=h.elements.searchQuery.value.trim().toLowerCase();p.classList.remove("is-hidden"),f.classList.add("is-hidden"),(n=t,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(n)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))).then((function(e){var n=e.drinks;if(!t)throw new Error;d.innerHTML=u(n),document.querySelectorAll(".btn-add").forEach((function(e){var t=e.parentNode.previousElementSibling.dataset.id;l("cocktails").includes(t)&&(e.textContent="Remove")}))})).catch((function(e){console.log(e),d.innerHTML="",f.classList.remove("is-hidden"),p.classList.add("is-hidden")}));var n}));var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t){g.default(e,t),t.add(e)};var _,g=(_=i("5k7tO"))&&_.__esModule?_:{default:_};var k={};function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(k,"__esModule",{value:!0}),k.default=function(e,t,n){t&&b(e.prototype,t);n&&b(e,n);return e};var w=new WeakSet,I=new WeakSet;function T(){var e=this.options.placeholder;this.$el.classList.add("select"),this.$el.innerHTML=function(e){return'\n    <div class="select__input" data-type="input"><span>'.concat(e,'</span><i class="fa fa-chevron-down" aria-hidden="true" data-type="arrow"></i></div>\n    <div class="select__dropdown">\n\n      <ul class="letter-list">\n        \n      </ul>\n    </div>\n    ')}(e)}function C(){this.clickHandler=this.clickHandler.bind(this),this.$el.addEventListener("click",this.clickHandler),this.$arrow=this.$el.querySelector('[data-type="arrow"]')}var x,S,E,R,N,P,O,L;new(function(){"use strict";function t(n,r){e(v)(this,t),e(y)(this,w),e(y)(this,I),this.$el=document.querySelector(n),this.options=r,e(m)(this,w,T).call(this),e(m)(this,I,C).call(this)}return e(k)(t,[{key:"clickHandler",value:function(e){var t=e.target.dataset.type;console.log(t),"input"===t&&this.toggle()}},{key:"isOpen",get:function(){return this.$el.classList.contains("open")}},{key:"toggle",value:function(){this.isOpen?this.close():this.open()}},{key:"open",value:function(){this.$el.classList.add("open"),this.$arrow.classList.remove("fa-chevron-down"),this.$arrow.classList.add("fa-chevron-up")}},{key:"close",value:function(){this.$el.classList.remove("open"),this.$arrow.classList.add("fa-chevron-down"),this.$arrow.classList.remove("fa-chevron-up")}},{key:"destroy",value:function(){this.$el.removeEventListener("click",this.clickHandler)}}]),t}())("#select",{placeholder:"A"});x=document.querySelector(".js-menu-container"),S=document.querySelector(".js-open-menu"),E=document.querySelector(".js-close-menu"),R=document.querySelector(".logo-one"),N=document.querySelector(".search-form"),P=document.querySelector(".theme-switch"),O=document.querySelector(".flex-box"),L=function(){var e="true"===S.getAttribute("aria-expanded")||!1;if(S.setAttribute("aria-expanded",!e),x.classList.toggle("is-open"),e?(S.classList.remove("is-hiden-btn"),E.classList.add("is-hiden-btn")):(E.classList.remove("is-hiden-btn"),S.classList.add("is-hiden-btn")),!e&window.innerWidth<=768)return R.style.display="none",P.style.display="flex",N.classList.add("show"),void(O.style.flexDirection="row-reverse");R.style.display="flex",P.style.display="none",N.classList.remove("show"),O.style.flexDirection="row",!e&window.innerWidth>768&&window.innerWidth<=1280?(N.style.display="none",P.style.display="flex"):(N.style.display="flex",P.style.display="none")},S.addEventListener("click",L),E.addEventListener("click",L),window.matchMedia("(min-width: 1200px)").addEventListener("change",(function(e){e.matches&&(x.classList.remove("is-open"),S.classList.remove("is-hiden-btn"),E.classList.add("is-hiden-btn"),S.setAttribute("aria-expanded",!1))}));var A=[],D="cocktails";function M(e){if(e.target.classList.contains("btn-add")){if("Remove"===e.target.textContent){var t=e.target.parentNode.previousElementSibling.dataset.id;return e.target.textContent="Add to",function(e){A=A.filter((function(t){return t!==e}))}(t),c(D,A),void console.log(A)}var n=e.target.parentNode.previousElementSibling.dataset.id;A.push(n),c(D,A),e.target.textContent="Remove",console.log(A)}}document.querySelector(".cocktails.section").addEventListener("click",M),document.querySelector(".modal__cocktails").addEventListener("click",M);var j=[],F="ingridients",U=document.querySelector(".modal__ingredients");function q(e){if(e.target.classList.contains("btn-add-fav")){if("Remove"===e.target.textContent){var t=e.target.parentNode.dataset.ingr;return e.target.textContent="Add to favorite",function(e){j=j.filter((function(t){return t!==e}))}(t),c(F,j),void console.log(j)}var n=e.target.parentNode.dataset.ingr;j.push(n),c(F,j),e.target.textContent="Remove",console.log(j)}}document.querySelector(".cocktails__list").addEventListener("click",q),U.addEventListener("click",q);var W="light-theme",H="dark-theme",V="theme",z=document.querySelector(".theme-switch__toggle"),B=document.querySelector(".js-menu-container"),K=document.querySelector(".menu-btn"),G=document.querySelector(".theme__title-light"),J=document.querySelector(".instractions-text"),Y=document.querySelector(".star"),Q=document.querySelector(".ingredient__text"),$=document.querySelector(".modal__icon"),X=document.querySelector(".compound__elem");!function(){var e=l(V);if(z.checked=e,document.body.className=e?H:W,e)return B.classList.add(H),K.classList.add(H),G.classList.add(H),J.classList.add(H),Y.classList.add(H),Q.classList.add(H),$.classList.add(H),void X.classList.add(H);B.classList.remove(H),K.classList.remove(H),G.classList.remove(H),J.classList.remove(H),Y.classList.remove(H),Q.classList.remove(H),$.classList.remove(H),X.classList.remove(H)}();z.addEventListener("change",(function(e){var t=e.target.checked;if(document.body.className=t?H:W,c(V,t),t)return B.classList.add(H),K.classList.add(H),G.classList.add(H),J.classList.add(H),Y.classList.add(H),Q.classList.add(H),$.classList.add(H),void X.classList.add(H);B.classList.remove(H),K.classList.remove(H),G.classList.remove(H),J.classList.remove(H),Y.classList.remove(H),Q.classList.remove(H),$.classList.remove(H),X.classList.remove(H)}));var Z=document.querySelector(".letter-list-first"),ee=document.querySelector(".cocktails__list"),te=document.querySelector(".modal__cocktails"),ne=document.querySelector(".not-found"),re=document.querySelector(".letter-list"),ie=document.querySelector(".cocktails"),oe=[],ae="",se=[],ue=[],ce=[],le=0,he=9,de="",fe="";ee.insertAdjacentHTML("afterend",'<button class="btnLoadM" type="button">Load more</button>');var pe,ve=document.querySelector(".btnLoadM"),me="abcdefghijklmnopqrstuvwxyz 1234567890".split(""),ye=l("ingridients"),_e=l("cocktails");function ge(){ee.innerHTML="";for(var e=1;e<=he;e+=1)fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){if(null!==e.drinks){e.drinks.length,ce.push(e.drinks[0]);var t=u(ce);ee.innerHTML="",ee.insertAdjacentHTML("beforeend",t)}}));var t=u(ce);ee.innerHTML="",ee.insertAdjacentHTML("beforeend",t)}function ke(){if(""!==ae)return(e=ae,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=".concat(e)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))).then((function(e){null!==e.drinks?(ie.classList.remove("visually-hidden"),ne.classList.add("is-hidden"),e.drinks.length>he&&(ve.style.display="inline-flex",ve.addEventListener("click",be)),function(e){var t=[];t=e.splice(0,he),ue=e;var n=u(t);ee.innerHTML="",ee.insertAdjacentHTML("beforeend",n),1}(se=e.drinks)):Ie()}));var e;Ie()}function be(e,t){if(0!==e)if(ue.length<=he){var n=u(se);ee.insertAdjacentHTML("beforeend",n),ve.style.display="none",e+=1}else{var r=u(ue.splice(0,he));ee.insertAdjacentHTML("beforeend",r),e+=1}}window.innerWidth<=768?(he=3,Z.classList.add("is-hidden")):window.innerWidth>768&&window.innerWidth<=1280&&(he=6),le=he,window.addEventListener("resize",(function(){window.innerWidth<=768?(Z.classList.add("is-hidden"),le=3):window.innerWidth>768&&window.innerWidth<=1280?(Z.classList.remove("is-hidden"),le=6):le=9,le!==he&&(he=le,ee.innerHTML="",ce=[],ge())})),pe=me.map((function(e){return'\n            <li class="letter">\n                <button class="btn-letter" type="button">\n                '.concat(e,"\n                </button>\n            </li>")})).join(""),Z.insertAdjacentHTML("beforeend",pe),re.insertAdjacentHTML("beforeend",pe),oe=document.querySelectorAll(".btn-letter"),ge();var we=function(e){e.target.parentNode.parentNode===Z&&oe.forEach((function(e){e.classList.contains("button-active")&&e.classList.remove("button-active")})),ae=e.target.textContent.trim().toLowerCase(),e.target.classList.add("button-active"),ke()};function Ie(){ie.classList.add("visually-hidden"),ne.classList.remove("is-hidden")}function Te(e){var t=document.querySelector("[data-modal]");"Learn more"===e.target.textContent&&(o(e.target.parentNode.previousElementSibling.dataset.id).then((function(e){if(null!==e.drinks){e.drinks.length,se=e.drinks;var t=e.drinks[0],n={},r={};for(var i in t)i.includes("strIngredient")&&null!==t[i]&&(n[i]=t[i]);for(var o in t)o.includes("strMeasure")&&t[o]&&(r[o]=t[o]);for(var a=0;a<=Object.keys(n).length-1;a+=1)de+='<li><a class="compound__elem" href="" data-ingredient="'.concat(Object.values(n)[a],'">').concat(Object.values(r)[a]," ").concat(Object.values(n)[a],"</a></li>\n                    ");s=se.map((function(e){var t=e.idDrink,n=e.strInstructions,r=e.strDrinkThumb,i=e.strDrink;return Ce=_e.includes(t)||A.includes(t)?'<button class="btn-re-fav" type="button">Remove</button>':'<button class="btn-add" type="button">Add to</button>','\n        <div class="modal__path">\n          <div class="path__box">\n            <h2 class="modal__heading">'.concat(i,'</h3>\n            \n              <h3 class="compound__title">Ingredients</h3>\n              <p class="compound__text">Per cocktail</p>\n            <ul class="cocktail-compound">\n              ').concat(de,'\n            </ul>\n          </div>\n          <img class="cocktails__foto" src="').concat(r,'" alt="').concat(i,'"/>\n        </div>\n\n        <h2 class="cocktails__instractions">Instructions:</h2>\n        <p class="instractions-text" data-id="').concat(t,'">\n          ').concat(n,'\n        </p>\n\n        <div class="button-wrapper">\n          ').concat(Ce,'\n        </div>\n    \n        <button\n          type="button"\n          class="modal__button"\n          data-modal-close\n          aria-label="close"\n        >X</button>\n        ')})).join(""),te.innerHTML="",te.insertAdjacentHTML("beforeend",s),de="",document.querySelector(".cocktail-compound").addEventListener("click",xe)}else Ie();var s})),t.classList.toggle("is-hidden"))}re.addEventListener("click",we),Z.addEventListener("click",we),document.querySelector(".cocktails__list").addEventListener("click",Te),document.querySelector(".back-drop").addEventListener("click",(function(e){e.target===e.currentTarget||e.target===document.querySelector(".modal__button")?document.querySelector(".back-drop").classList.add("is-hidden"):e.target.parentNode.parentNode===document.querySelector(".cocktail-compound")&&(document.querySelector(".modal__ingredients").parentNode.classList.remove("is-hidden"),xe(e))}));var Ce="";function xe(e){e.preventDefault();var t=e.target.dataset.ingredient;a(t).then((function(n){var r=n.ingredients;fe=r.map((function(e){var n=e.idIngredient,r=e.strDescription,i=e.strType,o=e.strABV,a="Non-specific",s="No description",u="",c="";return null!==r&&(c=r.split(" ")[0],s=r.split(" ").slice(1).join(" ")),null!==i&&(a=i),null!==o&&(u='<li class="compound__elem">Alcohol by volume: '.concat(o,"</li>")),Ce=ye.includes(n)||j.includes(n)?'<button class="btn-re-fav" type="button">Remove</button>':'<button class="btn-add-fav" type="button">Add to</button>','\n        <div class="modal__title">\n            <h2 class="modal__heading">'.concat(t,'</h2>\n            <h3 class="ingredient__title">').concat(a,'</h3>\n        </div>\n        <p class="ingredien__text">\n          <span class="ingredien__text--bald">').concat(c,"</span> ").concat(s,'\n        </p>\n    \n        <ul class="ingredient__compound">\n          <li class="compound__elem"><span class="star">✶</span>Type: ').concat(a,'</li>\n           <span class="star">✶</span>').concat(u,'\n        </ul>\n    \n        <div class="button-wrapper" data-ingr="').concat(n,'">\n          ').concat(Ce,'\n        </div>\n    \n        <button\n          type="button"\n          class="modal__button2"\n          data-modal-close\n          aria-label="close"\n        >X</button>\n            ')})).join("");var i=document.querySelector(".modal__ingredients");function o(){document.querySelector(".modal__ingredients").parentNode.classList.add("is-hidden")}i.innerHTML="",i.insertAdjacentHTML("beforeend",fe),fe="",te.addEventListener("click",xe),document.querySelector(".modal__ingredients").parentNode.addEventListener("click",(function(t){t.target!==document.querySelector(".modal__ingredients").parentNode&&e.target!==document.querySelector(".modal__button")||o()})),document.querySelector(".modal__button2").addEventListener("click",o),document.querySelector(".modal__button").addEventListener("click",o)}))}var Se={};function Ee(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(Se,"__esModule",{value:!0}),Se.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){Ee(o,r,i,a,s,"next",e)}function s(e){Ee(o,r,i,a,s,"throw",e)}a(void 0)}))}};var Re={},Ne=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),a=new E(r||[]);return o._invoke=function(e,t,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return N()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=C(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?p:d,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",v={};function m(){}function y(){}function _(){}var g={};u(g,o,(function(){return this}));var k=Object.getPrototypeOf,b=k&&k(k(R([])));b&&b!==n&&r.call(b,o)&&(g=b);var w=_.prototype=m.prototype=Object.create(g);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function n(i,o,a,s){var u=l(e[i],e,o);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(h).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function C(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,C(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function R(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:N}}function N(){return{value:t,done:!0}}return y.prototype=_,u(w,"constructor",_),u(_,"constructor",y),y.displayName=u(_,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},I(T.prototype),u(T.prototype,a,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new T(c(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},I(w),u(w,s,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(Re);try{regeneratorRuntime=Ne}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Ne:Function("r","regeneratorRuntime = r")(Ne)}var Pe=i("hKHmD"),Oe={};Object.defineProperty(Oe,"__esModule",{value:!0}),Oe.default=function(e){return Le.default(e)||Ae.default(e)||Me.default(e)||De.default()};var Le=je(i("kMC0W")),Ae=je(i("7AJDX")),De=je(i("8CtQK")),Me=je(i("auk6i"));function je(e){return e&&e.__esModule?e:{default:e}}var Fe={};Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.default=function(e,t){return Ue.default(e)||qe.default(e,t)||He.default(e,t)||We.default()};var Ue=Ve(i("8slrw")),qe=Ve(i("7AJDX")),We=Ve(i("ifqQW")),He=Ve(i("auk6i"));function Ve(e){return e&&e.__esModule?e:{default:e}}var ze=i("ds8z5"),Be={};Object.defineProperty(Be,"__esModule",{value:!0}),Be.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ke.default(e,t)};var Ke=function(e){return e&&e.__esModule?e:{default:e}}(i("gD1JV"));var Ge={};Object.defineProperty(Ge,"__esModule",{value:!0}),Ge.default=function(e){return Ze(e)};var Je=Xe(i("ge8co")),Ye=Xe(i("cZGw3")),Qe=Xe(i("fVNic")),$e=Xe(i("gD1JV"));function Xe(e){return e&&e.__esModule?e:{default:e}}function Ze(e){var t="function"==typeof Map?new Map:void 0;return Ze=function(e){if(null===e||!Ye.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return Je.default(e,arguments,Qe.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),$e.default(n,e)},Ze(e)}var et={};Object.defineProperty(et,"__esModule",{value:!0}),et.default=function(e){var t=tt.default();return function(){var n,r=nt.default(e);if(t){var i=nt.default(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return rt.default(this,n)}};var tt=it(i("aTHs7")),nt=it(i("fVNic")),rt=it(i("jmhxu"));function it(e){return e&&e.__esModule?e:{default:e}}var ot,at,st,ut=ot={};function ct(){throw new Error("setTimeout has not been defined")}function lt(){throw new Error("clearTimeout has not been defined")}function ht(e){if(at===setTimeout)return setTimeout(e,0);if((at===ct||!at)&&setTimeout)return at=setTimeout,setTimeout(e,0);try{return at(e,0)}catch(t){try{return at.call(null,e,0)}catch(t){return at.call(this,e,0)}}}!function(){try{at="function"==typeof setTimeout?setTimeout:ct}catch(e){at=ct}try{st="function"==typeof clearTimeout?clearTimeout:lt}catch(e){st=lt}}();var dt,ft=[],pt=!1,vt=-1;function mt(){pt&&dt&&(pt=!1,dt.length?ft=dt.concat(ft):vt=-1,ft.length&&yt())}function yt(){if(!pt){var e=ht(mt);pt=!0;for(var t=ft.length;t;){for(dt=ft,ft=[];++vt<t;)dt&&dt[vt].run();vt=-1,t=ft.length}dt=null,pt=!1,function(e){if(st===clearTimeout)return clearTimeout(e);if((st===lt||!st)&&clearTimeout)return st=clearTimeout,clearTimeout(e);try{st(e)}catch(t){try{return st.call(null,e)}catch(t){return st.call(this,e)}}}(e)}}function _t(e,t){this.fun=e,this.array=t}function gt(){}ut.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];ft.push(new _t(e,t)),1!==ft.length||pt||ht(yt)},_t.prototype.run=function(){this.fun.apply(null,this.array)},ut.title="browser",ut.browser=!0,ut.env={},ut.argv=[],ut.version="",ut.versions={},ut.on=gt,ut.addListener=gt,ut.once=gt,ut.off=gt,ut.removeListener=gt,ut.removeAllListeners=gt,ut.emit=gt,ut.prependListener=gt,ut.prependOnceListener=gt,ut.listeners=function(e){return[]},ut.binding=function(e){throw new Error("process.binding is not supported")},ut.cwd=function(){return"/"},ut.chdir=function(e){throw new Error("process.chdir is not supported")},ut.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var kt=!1,bt=!1,wt="${JSCORE_VERSION}",It=function(e,t){if(!e)throw Tt(t)},Tt=function(e){return new Error("Firebase Database ("+wt+") INTERNAL ASSERT FAILED: "+e)},Ct=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},xt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=o>>2,h=(3&o)<<4|s>>4,d=(15&s)<<2|c>>6,f=63&c;u||(f=64,a||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ct(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==u)throw Error();var c=o<<2|a>>4;if(r.push(c),64!==s){var l=a<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},St=function(e){var t=Ct(e);return xt.encodeByteArray(t,!0)},Et=function(e){return St(e).replace(/\./g,"")},Rt=function(e){try{return xt.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt(e){return Pt(void 0,e)}function Pt(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Pt(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ot(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Lt(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function At(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Dt(){return!0===kt||!0===bt}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mt=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},jt=function(){return Mt()||function(){if(void 0!==ot);}()||function(){if("undefined"!=typeof document){var e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/),t=e&&Rt(e[1]);return t&&JSON.parse(t)}}()},Ft=function(e){var t,n;return null===(n=null===(t=jt())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Ut=function(){var e;return null===(e=jt())||void 0===e?void 0:e.config},qt=function(e){var t;return null===(t=jt())||void 0===t?void 0:t["_".concat(e)]},Wt=function(){"use strict";function t(){var n=this;e(v)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(k)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ht(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var o=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Et(JSON.stringify({alg:"none",type:"JWT"})),Et(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(t,i,o){var a;return e(v)(this,r),(a=n.call(this,i)).code=t,a.customData=o,a.name="FirebaseError",Object.setPrototypeOf(e(ze)(a),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(ze)(a),zt.prototype.create),a}return r}(e(Ge)(Error)),zt=function(){"use strict";function t(n,r,i){e(v)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(k)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},o="".concat(this.service,"/").concat(e),a=this.errors[e],s=a?Bt(a,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(o,")."),c=new Vt(o,u,i);return c}}]),t}();function Bt(e,t){return e.replace(Kt,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var Kt=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e){return JSON.parse(e)}function Jt(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt=function(e){var t={},n={},r={},i="";try{var o=e.split(".");t=Gt(Rt(o[0])||""),n=Gt(Rt(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},Qt=function(e){var t=Yt(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Xt(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Zt(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function en(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function tn(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,o=!1,a=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(nn(l)&&nn(h)){if(!tn(l,h))return!1}else if(l!==h)return!1}}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}var d=!0,f=!1,p=void 0;try{for(var v,m=r[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var y=v.value;if(!n.includes(y))return!1}}catch(e){f=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(f)throw p}}return!0}function nn(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rn(t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=function(t,r){var i=e(Fe)(r.value,2),o=i[0],a=i[1];Array.isArray(a)?a.forEach((function(e){n.push(encodeURIComponent(o)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(o)+"="+encodeURIComponent(a))},u=Object.entries(t)[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)s(0,a)}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n.length?"&"+n.join("&"):""}function on(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(Fe)(t.split("="),2),i=r[0],o=r[1];n[decodeURIComponent(i)]=decodeURIComponent(o)}})),n}function an(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sn=function(){"use strict";function t(){e(v)(this,t),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}return e(k)(t,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var o=16;o<80;o++){var a=n[o-3]^n[o-8]^n[o-14]^n[o-16];n[o]=4294967295&(a<<1|a>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],h=this.chain_[2],d=this.chain_[3],f=this.chain_[4],p=0;p<80;p++){p<40?p<20?(s=d^l&(h^d),u=1518500249):(s=l^h^d,u=1859775393):p<60?(s=l&h|d&(l|h),u=2400959708):(s=l^h^d,u=3395469782);var v=(c<<5|c>>>27)+s+f+u+n[p]&4294967295;f=d,d=h,h=4294967295&(l<<30|l>>>2),l=c,c=v}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var o=24;o>=0;o-=8)e[r]=this.chain_[i]>>o&255,++r;return e}}]),t}();var un=function(){"use strict";function t(n,r){var i=this;e(v)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(k)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=cn),void 0===r.error&&(r.error=cn),void 0===r.complete&&(r.complete=cn);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function cn(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(e,t){return"".concat(e," failed: ").concat(t," argument ")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hn=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var o=i-55296;r++,It(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(o<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},dn=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fn(e){return e&&e._delegate?e._delegate:e}var pn=function(){"use strict";function t(n,r,i){e(v)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(k)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),vn="[DEFAULT]",mn=function(){"use strict";function t(n,r){e(v)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(k)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Wt;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:vn})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var o,a=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=e(Fe)(o.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vn;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){var r;return e(Re).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(Oe)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(Oe)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vn;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vn;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var o=this.getOrInitializeService({instanceIdentifier:i,options:r}),a=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=e(Fe)(c.value,2),d=h[0],f=h[1],p=this.normalizeInstanceIdentifier(d);i===p&&f.resolve(o)}}catch(e){s=!0,u=e}finally{try{a||null==l.return||l.return()}finally{if(s)throw u}}return o}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===vn?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vn;return this.component?this.component.multipleInstances?e:vn:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yn,_n,gn=function(){"use strict";function t(n){e(v)(this,t),this.name=n,this.providers=new Map}return e(k)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new mn(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),kn=(Pe=i("hKHmD"),[]);(_n=yn||(yn={}))[_n.DEBUG=0]="DEBUG",_n[_n.VERBOSE=1]="VERBOSE",_n[_n.INFO=2]="INFO",_n[_n.WARN=3]="WARN",_n[_n.ERROR=4]="ERROR",_n[_n.SILENT=5]="SILENT";var bn,wn={debug:yn.DEBUG,verbose:yn.VERBOSE,info:yn.INFO,warn:yn.WARN,error:yn.ERROR,silent:yn.SILENT},In=yn.INFO,Tn=(bn={},e(Pe)(bn,yn.DEBUG,"log"),e(Pe)(bn,yn.VERBOSE,"log"),e(Pe)(bn,yn.INFO,"info"),e(Pe)(bn,yn.WARN,"warn"),e(Pe)(bn,yn.ERROR,"error"),bn),Cn=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];var a;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=Tn[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(a=console)[u].apply(a,["[".concat(s,"]  ").concat(t.name,":")].concat(e(Oe)(i)))}},xn=function(){"use strict";function t(n){e(v)(this,t),this.name=n,this._logLevel=In,this._logHandler=Cn,this._userLogHandler=null,kn.push(this)}return e(k)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in yn))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?wn[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,yn.DEBUG].concat(e(Oe)(n))),this._logHandler.apply(this,[this,yn.DEBUG].concat(e(Oe)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,yn.VERBOSE].concat(e(Oe)(n))),this._logHandler.apply(this,[this,yn.VERBOSE].concat(e(Oe)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,yn.INFO].concat(e(Oe)(n))),this._logHandler.apply(this,[this,yn.INFO].concat(e(Oe)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,yn.WARN].concat(e(Oe)(n))),this._logHandler.apply(this,[this,yn.WARN].concat(e(Oe)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,yn.ERROR].concat(e(Oe)(n))),this._logHandler.apply(this,[this,yn.ERROR].concat(e(Oe)(n)))}}]),t}();var Sn={};Object.defineProperty(Sn,"__esModule",{value:!0}),Sn.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){En.default(e,t,n[t])}))}return e};var En=function(e){return e&&e.__esModule?e:{default:e}}(i("hKHmD"));var Rn,Nn;var Pn=new WeakMap,On=new WeakMap,Ln=new WeakMap,An=new WeakMap,Dn=new WeakMap;var Mn={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return On.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ln.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function jn(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Nn||(Nn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(qn(this),n),Un(Pn.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Un(t.apply(qn(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var a,s=(a=t).call.apply(a,[qn(this),n].concat(e(Oe)(i)));return Ln.set(s,n.sort?n.sort():[n]),Un(s)}}function Fn(e){return"function"==typeof e?jn(e):(e instanceof IDBTransaction&&function(e){if(!On.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=function(){t(),r()},o=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));On.set(e,t)}}(e),t=e,(Rn||(Rn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Mn):e);var t}function Un(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",o)},i=function(){e(Un(t.result)),r()},o=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}))).then((function(e){e instanceof IDBCursor&&Pn.set(e,t)})).catch((function(){})),Dn.set(n,t),n;var t,n;if(An.has(e))return An.get(e);var r=Fn(e);return r!==e&&(An.set(e,r),Dn.set(r,e)),r}var qn=function(e){return Dn.get(e)};function Wn(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,o=n.blocking,a=n.terminated,s=indexedDB.open(e,t),u=Un(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(Un(s.result),e.oldVersion,e.newVersion,Un(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){a&&e.addEventListener("close",(function(){return a()})),o&&e.addEventListener("versionchange",(function(){return o()}))})).catch((function(){})),u}var Hn=["get","getKey","getAll","getAllKeys","count"],Vn=["put","add","delete","clear"],zn=new Map;function Bn(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(zn.get(n))return zn.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,o=Vn.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(o||Hn.includes(r))){var a,s=(a=e(Se)(e(Re).mark((function t(n){var a,s,u,c,l,h,d=arguments;return e(Re).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=d.length,s=new Array(a>1?a-1:0),u=1;u<a;u++)s[u-1]=d[u];return l=this.transaction(n,o?"readwrite":"readonly"),h=l.store,i&&(h=h.index(s.shift())),t.next=7,Promise.all([(c=h)[r].apply(c,e(Oe)(s)),o&&l.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return a.apply(this,arguments)});return zn.set(n,s),s}}}Mn=function(t){return e(Sn)({},t,{get:function(e,n,r){return Bn(e,n)||t.get(e,n,r)},has:function(e,n){return!!Bn(e,n)||t.has(e,n)}})}(Mn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Kn=function(){"use strict";function t(n){e(v)(this,t),this.container=n}return e(k)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var Gn,Jn,Yn="@firebase/app",Qn="0.8.0",$n=new xn("@firebase/app"),Xn="[DEFAULT]",Zn=(Gn={},e(Pe)(Gn,Yn,"fire-core"),e(Pe)(Gn,"@firebase/app-compat","fire-core-compat"),e(Pe)(Gn,"@firebase/analytics","fire-analytics"),e(Pe)(Gn,"@firebase/analytics-compat","fire-analytics-compat"),e(Pe)(Gn,"@firebase/app-check","fire-app-check"),e(Pe)(Gn,"@firebase/app-check-compat","fire-app-check-compat"),e(Pe)(Gn,"@firebase/auth","fire-auth"),e(Pe)(Gn,"@firebase/auth-compat","fire-auth-compat"),e(Pe)(Gn,"@firebase/database","fire-rtdb"),e(Pe)(Gn,"@firebase/database-compat","fire-rtdb-compat"),e(Pe)(Gn,"@firebase/functions","fire-fn"),e(Pe)(Gn,"@firebase/functions-compat","fire-fn-compat"),e(Pe)(Gn,"@firebase/installations","fire-iid"),e(Pe)(Gn,"@firebase/installations-compat","fire-iid-compat"),e(Pe)(Gn,"@firebase/messaging","fire-fcm"),e(Pe)(Gn,"@firebase/messaging-compat","fire-fcm-compat"),e(Pe)(Gn,"@firebase/performance","fire-perf"),e(Pe)(Gn,"@firebase/performance-compat","fire-perf-compat"),e(Pe)(Gn,"@firebase/remote-config","fire-rc"),e(Pe)(Gn,"@firebase/remote-config-compat","fire-rc-compat"),e(Pe)(Gn,"@firebase/storage","fire-gcs"),e(Pe)(Gn,"@firebase/storage-compat","fire-gcs-compat"),e(Pe)(Gn,"@firebase/firestore","fire-fst"),e(Pe)(Gn,"@firebase/firestore-compat","fire-fst-compat"),e(Pe)(Gn,"fire-js","fire-js"),e(Pe)(Gn,"firebase","fire-js-all"),Gn),er=new Map,tr=new Map;function nr(e,t){try{e.container.addComponent(t)}catch(n){$n.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function rr(e){var t=e.name;if(tr.has(t))return $n.debug("There were multiple attempts to register component ".concat(t,".")),!1;tr.set(t,e);var n=!0,r=!1,i=void 0;try{for(var o,a=er.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){nr(o.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!0}function ir(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var or=(Jn={},e(Pe)(Jn,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(Pe)(Jn,"bad-app-name","Illegal App name: '{$appName}"),e(Pe)(Jn,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(Pe)(Jn,"app-deleted","Firebase App named '{$appName}' already deleted"),e(Pe)(Jn,"no-options","Need to provide options, when not being deployed to hosting via source."),e(Pe)(Jn,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(Pe)(Jn,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(Pe)(Jn,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(Pe)(Jn,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(Pe)(Jn,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(Pe)(Jn,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Jn),ar=new zt("app","Firebase",or),sr=function(){"use strict";function t(n,r,i){var o=this;e(v)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new pn("app",(function(){return o}),"PUBLIC"))}return e(k)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}]),t}(),ur="9.11.0";function cr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:Xn,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw ar.create("bad-app-name",{appName:String(o)});if(n||(n=Ut()),!n)throw ar.create("no-options");var a=er.get(o);if(a){if(tn(n,a.options)&&tn(i,a.config))return a;throw ar.create("duplicate-app",{appName:o})}var s=new gn(o),u=!0,c=!1,l=void 0;try{for(var h,d=tr.values()[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var f=h.value;s.addComponent(f)}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}var p=new sr(n,i,s);return er.set(o,p),p}function lr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xn,t=er.get(e);if(!t&&e===Xn)return cr();if(!t)throw ar.create("no-app",{appName:e});return t}function hr(e,t,n){var r,i=null!==(r=Zn[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return o&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&a&&s.push("and"),a&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void $n.warn(s.join(" "))}rr(new pn("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var dr="firebase-heartbeat-store",fr=null;function pr(){return fr||(fr=Wn("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(dr)}}).catch((function(e){throw ar.create("idb-open",{originalErrorMessage:e.message})}))),fr}function vr(e){return mr.apply(this,arguments)}function mr(){return(mr=e(Se)(e(Re).mark((function t(n){var r,i,o;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,pr();case 4:return i=e.sent,e.abrupt("return",i.transaction(dr).objectStore(dr).get(gr(n)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof Vt?$n.warn(e.t0.message):(o=ar.create("idb-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message}),$n.warn(o.message));case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function yr(e,t){return _r.apply(this,arguments)}function _r(){return(_r=e(Se)(e(Re).mark((function t(n,r){var i,o,a,s,u;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,pr();case 4:return o=e.sent,a=o.transaction(dr,"readwrite"),s=a.objectStore(dr),e.next=9,s.put(r,gr(n));case 9:return e.abrupt("return",a.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof Vt?$n.warn(e.t0.message):(u=ar.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),$n.warn(u.message));case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function gr(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kr=function(){"use strict";function t(n){var r=this;e(v)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Tr(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(k)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){var r,i,o;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),o=br(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==o&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===o}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:o,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){var r,i,o,a,s;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=br(),i=wr(t._heartbeatsCache.heartbeats),o=i.heartbeatsToSend,a=i.unsentEntries,s=Et(JSON.stringify({version:2,heartbeats:o})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(a.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=a,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function br(){return(new Date).toISOString().substring(0,10)}function wr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,o=!1,a=void 0;try{for(var s,u=function(e,i){var o=i.value,a=n.find((function(e){return e.agent===o.agent}));if(a){if(a.dates.push(o.date),Cr(n)>t)return a.dates.pop(),"break"}else if(n.push({agent:o.agent,dates:[o.date]}),Cr(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){o=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return{heartbeatsToSend:n,unsentEntries:r}}var Ir,Tr=function(){"use strict";function t(n){e(v)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(k)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(Se)(e(Re).mark((function t(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){var r;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,vr(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i,o;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return o=e.sent,e.abrupt("return",yr(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i,o;return e(Re).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return o=r.sent,r.abrupt("return",yr(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:e(Oe)(o.heartbeats).concat(e(Oe)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function Cr(e){return Et(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ir="",rr(new pn("platform-logger",(function(e){return new Kn(e)}),"PRIVATE")),rr(new pn("heartbeat",(function(e){return new kr(e)}),"PRIVATE")),hr(Yn,Qn,Ir),hr(Yn,Qn,"esm2017"),hr("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
hr("firebase","9.11.0","app");ze=i("ds8z5"),Pe=i("hKHmD");var xr={};Object.defineProperty(xr,"__esModule",{value:!0}),xr.default=function(e,t,n){return Er(e,t,n)};var Sr=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function Er(e,t,n){return(Er="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Sr.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var Rr=i("fVNic");function Nr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Pr(){return e(Pe)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Or=Pr,Lr=new zt("auth","Firebase",Pr()),Ar=new xn("@firebase/auth");function Dr(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;Ar.logLevel<=yn.ERROR&&(o=Ar).error.apply(o,["Auth (".concat(ur,"): ").concat(t)].concat(e(Oe)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw Ur.apply(void 0,[t].concat(e(Oe)(r)))}function jr(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Ur.apply(void 0,[t].concat(e(Oe)(r)))}function Fr(t,n,r){var i=Object.assign(Object.assign({},Or()),e(Pe)({},n,r));return new zt("auth","Firebase",i).create(n,{appName:t.name})}function Ur(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;if("string"!=typeof t){var a,s=r[0],u=e(Oe)(r.slice(1));return u[0]&&(u[0].appName=t.name),(a=t._errorFactory).create.apply(a,[s].concat(e(Oe)(u)))}return(o=Lr).create.apply(o,[t].concat(e(Oe)(r)))}function qr(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(!t)throw Ur.apply(void 0,[n].concat(e(Oe)(i)))}function Wr(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Dr(t),new Error(t)}function Hr(e,t){e||Wr(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vr=new Map;function zr(e){Hr(e instanceof Function,"Expected a class definition");var t=Vr.get(e);return t?(Hr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Vr.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(e,t){var n=ir(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(tn(n.getOptions(),null!=t?t:{}))return r;Mr(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Gr(){return"http:"===Jr()||"https:"===Jr()}function Jr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!Gr()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Qr=function(){"use strict";function t(n,r){e(v)(this,t),this.shortDelay=n,this.longDelay=r,Hr(r>n,"Short delay should be less than long delay!"),this.isMobile=Lt()||At()}return e(k)(t,[{key:"get",value:function(){return Yr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(e,t){Hr(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xr,Zr=function(){"use strict";function t(){e(v)(this,t)}return e(k)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),ei=(Xr={},e(Pe)(Xr,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(Pe)(Xr,"MISSING_CUSTOM_TOKEN","internal-error"),e(Pe)(Xr,"INVALID_IDENTIFIER","invalid-email"),e(Pe)(Xr,"MISSING_CONTINUE_URI","internal-error"),e(Pe)(Xr,"INVALID_PASSWORD","wrong-password"),e(Pe)(Xr,"MISSING_PASSWORD","internal-error"),e(Pe)(Xr,"EMAIL_EXISTS","email-already-in-use"),e(Pe)(Xr,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(Pe)(Xr,"INVALID_IDP_RESPONSE","invalid-credential"),e(Pe)(Xr,"INVALID_PENDING_TOKEN","invalid-credential"),e(Pe)(Xr,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(Pe)(Xr,"MISSING_REQ_TYPE","internal-error"),e(Pe)(Xr,"EMAIL_NOT_FOUND","user-not-found"),e(Pe)(Xr,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(Pe)(Xr,"EXPIRED_OOB_CODE","expired-action-code"),e(Pe)(Xr,"INVALID_OOB_CODE","invalid-action-code"),e(Pe)(Xr,"MISSING_OOB_CODE","internal-error"),e(Pe)(Xr,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(Pe)(Xr,"INVALID_ID_TOKEN","invalid-user-token"),e(Pe)(Xr,"TOKEN_EXPIRED","user-token-expired"),e(Pe)(Xr,"USER_NOT_FOUND","user-token-expired"),e(Pe)(Xr,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(Pe)(Xr,"INVALID_CODE","invalid-verification-code"),e(Pe)(Xr,"INVALID_SESSION_INFO","invalid-verification-id"),e(Pe)(Xr,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(Pe)(Xr,"MISSING_SESSION_INFO","missing-verification-id"),e(Pe)(Xr,"SESSION_EXPIRED","code-expired"),e(Pe)(Xr,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(Pe)(Xr,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(Pe)(Xr,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(Pe)(Xr,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(Pe)(Xr,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(Pe)(Xr,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(Pe)(Xr,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(Pe)(Xr,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(Pe)(Xr,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(Pe)(Xr,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(Pe)(Xr,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Xr),ti=new Qr(3e4,6e4);function ni(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function ri(e,t,n,r){return ii.apply(this,arguments)}function ii(){return ii=e(Se)(e(Re).mark((function t(n,r,i,o){var a,s=arguments;return e(Re).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.length>4&&void 0!==s[4]?s[4]:{},t.abrupt("return",oi(n,a,e(Se)(e(Re).mark((function t(){var a,s,u,c;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s={},o&&("GET"===r?s=o:a={body:JSON.stringify(o)}),u=rn(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",Zr.fetch()(ci(n,n.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),ii.apply(this,arguments)}function oi(e,t,n){return ai.apply(this,arguments)}function ai(){return(ai=e(Se)(e(Re).mark((function t(n,r,i){var o,a,s,u,c,l,h,d,f;return e(Re).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,o=Object.assign(Object.assign({},ei),r),t.prev=2,a=new li(n),t.next=6,Promise.race([i(),a.promise]);case 6:return s=t.sent,a.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw hi(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=e(Fe)(c.split(" : "),2),h=l[0],d=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==h){t.next=23;break}throw hi(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==h){t.next=27;break}throw hi(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==h){t.next=29;break}throw hi(n,"user-disabled",u);case 29:if(f=o[h]||h.toLowerCase().replace(/[_\s]+/g,"-"),!d){t.next=34;break}throw Fr(n,f,d);case 34:Mr(n,f);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof Vt)){t.next=41;break}throw t.t0;case 41:Mr(n,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function si(e,t,n,r){return ui.apply(this,arguments)}function ui(){return ui=e(Se)(e(Re).mark((function t(n,r,i,o){var a,s,u=arguments;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,ri(n,r,i,o,a);case 3:return"mfaPendingCredential"in(s=e.sent)&&Mr(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),ui.apply(this,arguments)}function ci(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?$r(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var li=function(){"use strict";function t(n){var r=this;e(v)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(jr(n.auth,"network-request-failed"))}),ti.get())}))}return e(k)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function hi(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=jr(e,t,r);return i.customData._tokenResponse=n,i}function di(e,t){return fi.apply(this,arguments)}function fi(){return(fi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(Se)(e(Re).mark((function t(n,r){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ri(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function pi(e,t){return vi.apply(this,arguments)}function vi(){return(vi=e(Se)(e(Re).mark((function t(n,r){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ri(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(){return yi=e(Se)(e(Re).mark((function t(n){var r,i,o,a,s,u,c=arguments;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=fn(n),e.next=4,i.getIdToken(r);case 4:return o=e.sent,qr((a=gi(o))&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error"),s="object"==typeof a.firebase?a.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:a,token:o,authTime:mi(_i(a.auth_time)),issuedAtTime:mi(_i(a.iat)),expirationTime:mi(_i(a.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),yi.apply(this,arguments)}function _i(e){return 1e3*Number(e)}function gi(t){var n,r=e(Fe)(t.split("."),3),i=r[0],o=r[1],a=r[2];if(void 0===i||void 0===o||void 0===a)return Dr("JWT malformed, contained fewer than 3 sections"),null;try{var s=Rt(o);return s?JSON.parse(s):(Dr("Failed to decode base64 JWT payload"),null)}catch(e){return Dr("Caught error parsing JWT payload as JSON",null===(n=e)||void 0===n?void 0:n.toString()),null}}function ki(e,t){return bi.apply(this,arguments)}function bi(){return bi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(Se)(e(Re).mark((function t(n,r){var i=arguments;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof Vt&&wi(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),bi.apply(this,arguments)}function wi(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ii=function(){"use strict";function t(n){e(v)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(k)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(Se)(e(Re).mark((function t(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){var r;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,t.user.getIdToken(!0);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(r=e.t0)||void 0===r?void 0:r.code)&&t.schedule(!0),e.abrupt("return");case 10:t.schedule();case 11:case"end":return e.stop()}}),n,null,[[1,6]])})))()}}]),t}(),Ti=function(){"use strict";function t(n,r){e(v)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(k)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=mi(this.lastLoginAt),this.creationTime=mi(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(e){return xi.apply(this,arguments)}function xi(){return(xi=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(Se)(e(Re).mark((function t(n){var r,i,o,a,s,u,c,l,h,d,f;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return o=e.sent,e.next=7,ki(n,pi(i,{idToken:o}));case 7:qr(null==(a=e.sent)?void 0:a.users.length,i,"internal-error"),s=a.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?Ri(s.providerUserInfo):[],c=Ei(n.providerData,u),l=n.isAnonymous,h=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Ti(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(n,f);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Si(){return(Si=e(Se)(e(Re).mark((function t(n){var r;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=fn(n),e.next=3,Ci(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ei(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(Oe)(r).concat(e(Oe)(n))}function Ri(e){return e.map((function(e){var t=e.providerId,n=Nr(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function Ni(e,t){return Pi.apply(this,arguments)}function Pi(){return(Pi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(Se)(e(Re).mark((function t(n,r){var i;return e(Re).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oi(n,{},e(Se)(e(Re).mark((function t(){var i,o,a,s,u,c;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=rn({grant_type:"refresh_token",refresh_token:r}).slice(1),o=n.config,a=o.tokenApiHost,s=o.apiKey,u=ci(n,a,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Zr.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oi=function(){"use strict";function t(){e(v)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(k)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){qr(e.idToken,"internal-error"),qr(void 0!==e.idToken,"internal-error"),qr(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,qr(n=gi(t),"internal-error"),qr(void 0!==n.exp,"internal-error"),qr(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(Se)(e(Re).mark((function i(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(qr(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(Se)(e(Re).mark((function i(){var o,a,s,u;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ni(t,n);case 2:o=e.sent,a=o.accessToken,s=o.refreshToken,u=o.expiresIn,r.updateTokensAndExpiration(a,s,Number(u));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return Wr("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,o=n.expirationTime,a=new t;return r&&(qr("string"==typeof r,"internal-error",{appName:e}),a.refreshToken=r),i&&(qr("string"==typeof i,"internal-error",{appName:e}),a.accessToken=i),o&&(qr("number"==typeof o,"internal-error",{appName:e}),a.expirationTime=o),a}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(e,t){qr("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Ai=function(){"use strict";function t(n){e(v)(this,t);var r=n.uid,i=n.auth,o=n.stsTokenManager,a=Nr(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ii(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?e(Oe)(a.providerData):[],this.metadata=new Ti(a.createdAt||void 0,a.lastLoginAt||void 0)}return e(k)(t,[{key:"getIdToken",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ki(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(qr(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return yi.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Si.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(qr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){qr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(Se)(e(Re).mark((function i(){var o;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),o=!0),!n){e.next=5;break}return e.next=5,Ci(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:o&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){var r;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,ki(t,di(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,o,a,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(i=n.email)&&void 0!==i?i:void 0,f=null!==(o=n.phoneNumber)&&void 0!==o?o:void 0,p=null!==(a=n.photoURL)&&void 0!==a?a:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,y=null!==(c=n.createdAt)&&void 0!==c?c:void 0,_=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,g=n.uid,k=n.emailVerified,b=n.isAnonymous,w=n.providerData,I=n.stsTokenManager;qr(g&&I,e,"internal-error");var T=Oi.fromJSON(this.name,I);qr("string"==typeof g,e,"internal-error"),Li(h,e.name),Li(d,e.name),qr("boolean"==typeof k,e,"internal-error"),qr("boolean"==typeof b,e,"internal-error"),Li(f,e.name),Li(p,e.name),Li(v,e.name),Li(m,e.name),Li(y,e.name),Li(_,e.name);var C=new t({uid:g,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:T,createdAt:y,lastLoginAt:_});return w&&Array.isArray(w)&&(C.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(C._redirectEventId=m),C}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(Se)(e(Re).mark((function o(){var a,s;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new Oi).updateFromServerResponse(r),s=new t({uid:r.localId,auth:n,stsTokenManager:a,isAnonymous:i}),e.next=5,Ci(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),o)})))()}}]),t}(),Di=function(){"use strict";function t(){e(v)(this,t),this.type="NONE",this.storage={}}return e(k)(t,[{key:"_isAvailable",value:function(){return e(Se)(e(Re).mark((function t(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(Se)(e(Re).mark((function i(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Di.type="NONE";var Mi=Di;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Fi=function(){"use strict";function t(n,r,i){e(v)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var o=this.auth,a=o.config,s=o.name;this.fullUserKey=ji(this.userKey,a.apiKey,s),this.fullPersistenceKey=ji("persistence",a.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(k)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){var r;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?Ai._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(Se)(e(Re).mark((function o(){var a,s,u,c,l,h,d,f,p,v,m,y,_;return e(Re).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r.length){o.next=2;break}return o.abrupt("return",new t(zr(Mi),n,i));case 2:return o.next=4,Promise.all(r.map(function(){var t=e(Se)(e(Re).mark((function t(n){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:a=o.sent.filter((function(e){return e})),s=a[0]||zr(Mi),u=ji(i,n.config.apiKey,n.name),c=null,l=!0,h=!1,d=void 0,o.prev=9,f=r[Symbol.iterator]();case 11:if(l=(p=f.next()).done){o.next=29;break}return v=p.value,o.prev=13,o.next=16,v._get(u);case 16:if(!(m=o.sent)){o.next=22;break}return y=Ai._fromJSON(n,m),v!==s&&(c=y),s=v,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:l=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),h=!0,d=o.t1;case 35:o.prev=35,o.prev=36,l||null==f.return||f.return();case 38:if(o.prev=38,!h){o.next=41;break}throw d;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(_=a.filter((function(e){return e._shouldAllowMigration})),s._shouldAllowMigration&&_.length){o.next=46;break}return o.abrupt("return",new t(s,n,i));case 46:if(s=_[0],!c){o.next=50;break}return o.next=50,s._set(u,c.toJSON());case 50:return o.next=52,Promise.all(r.map(function(){var t=e(Se)(e(Re).mark((function t(n){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===s){e.next=8;break}return e.prev=1,e.next=4,n._remove(u);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return o.abrupt("return",new t(s,n,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Vi(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(qi(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Bi(t))return"Blackberry";if(Ki(t))return"Webos";if(Wi(t))return"Safari";if((t.includes("chrome/")||Hi(t))&&!t.includes("edge/"))return"Chrome";if(zi(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function qi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return/firefox\//i.test(e)}function Wi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Hi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return/crios\//i.test(e)}function Vi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return/iemobile/i.test(e)}function zi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return/android/i.test(e)}function Bi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return/blackberry/i.test(e)}function Ki(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return/webos/i.test(e)}function Gi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ji(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return Gi(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Yi(){return((e=Ot()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Qi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return Gi(e)||zi(e)||Ki(e)||Bi(e)||/windows phone/i.test(e)||Vi(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $i(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Ui(Ot());break;case"Worker":t="".concat(Ui(Ot()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(ur,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xi=function(){"use strict";function t(n){e(v)(this,t),this.auth=n,this.queue=[]}return e(k)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i,o,a,s,u,c,l,h,d,f,p,v,m,y;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:o=[],e.prev=4,a=!0,s=!1,u=void 0,e.prev=6,c=n.queue[Symbol.iterator]();case 8:if(a=(l=c.next()).done){e.next=16;break}return h=l.value,e.next=12,h(t);case 12:h.onAbort&&o.push(h.onAbort);case 13:a=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),s=!0,u=e.t0;case 22:e.prev=22,e.prev=23,a||null==c.return||c.return();case 25:if(e.prev=25,!s){e.next=28;break}throw u;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),o.reverse(),d=!0,f=!1,p=void 0,e.prev=36,v=o[Symbol.iterator]();!(d=(m=v.next()).done);d=!0){y=m.value;try{y()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),f=!0,p=e.t2;case 44:e.prev=44,e.prev=45,d||null==v.return||v.return();case 47:if(e.prev=47,!f){e.next=50;break}throw p;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=e.t1)||void 0===i?void 0:i.message});case 53:case"end":return e.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),Zi=function(){"use strict";function t(n,r,i){e(v)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new to(this),this.idTokenSubscription=new to(this),this.beforeStateQueue=new Xi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return e(k)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=zr(n));var r=this;return this._initializationPromise=this.queue(e(Se)(e(Re).mark((function i(){var o,a;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Fi.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(o=r._popupRedirectResolver)||void 0===o?void 0:o._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(a=r.currentUser)||void 0===a?void 0:a.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){var r;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i,o,a,s,u,c,l;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(o=e.sent,a=o,s=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==a?void 0:a._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:l=e.sent,u&&u!==c||!(null==l?void 0:l.user)||(a=l.user,s=!0);case 15:if(a){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(a._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(a);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),a=o,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!a){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(a));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return qr(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==a._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(a));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(a));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Ci(t);case 4:e.next=10;break;case 6:if(e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(i=e.t0)||void 0===i?void 0:i.code)){e.next=10;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 10:return e.abrupt("return",n.directlySetCurrentUser(t));case 11:case"end":return e.stop()}}),r,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?fn(t):null)&&qr(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(Se)(e(Re).mark((function i(){return e(Re).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&qr(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(Se)(e(Re).mark((function n(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(Se)(e(Re).mark((function r(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(zr(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new zt("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(Se)(e(Re).mark((function i(){var o;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return o=e.sent,e.abrupt("return",null===t?o.removeCurrentUser():o.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return qr(i=t&&zr(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,Fi.create(n,[zr(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i,o;return e(Re).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(Se)(e(Re).mark((function t(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(o=n.redirectUser)||void 0===o?void 0:o._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){return e(Re).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(Se)(e(Re).mark((function r(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var o="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return qr(a,this,"internal-error"),a.then((function(){return o(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return qr(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$i(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){var r,i,o;return e(Re).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(Pe)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(o=n.sent)&&(i["X-Firebase-Client"]=o),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e){return fn(e)}var to=function(){"use strict";function t(n){var r,i,o=this;e(v)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new un((function(e){return o.observer=e}),r)).subscribe.bind(i)}return e(k)(t,[{key:"next",get:function(){return qr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function no(t,n,r){var i=eo(t);qr(i._canInitEmulator,i,"emulator-config-failed"),qr(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var o=!!(null==r?void 0:r.disableWarnings),a=ro(n),s=function(t){var n=ro(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){var a=o[1];return{host:a,port:io(i.substr(a.length+1))}}var s=e(Fe)(i.split(":"),2);return{host:s[0],port:io(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(a,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ro(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function io(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var oo=function(){"use strict";function t(n,r){e(v)(this,t),this.providerId=n,this.signInMethod=r}return e(k)(t,[{key:"toJSON",value:function(){return Wr("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Wr("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Wr("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Wr("not implemented")}}]),t}();function ao(e,t){return so.apply(this,arguments)}function so(){return(so=e(Se)(e(Re).mark((function t(n,r){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ri(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function uo(e,t){return co.apply(this,arguments)}function co(){return(co=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(Se)(e(Re).mark((function t(n,r){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",si(n,"POST","/v1/accounts:signInWithPassword",ni(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function lo(e,t){return ho.apply(this,arguments)}function ho(){return(ho=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(Se)(e(Re).mark((function t(n,r){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",si(n,"POST","/v1/accounts:signInWithEmailLink",ni(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function fo(e,t){return po.apply(this,arguments)}function po(){return(po=e(Se)(e(Re).mark((function t(n,r){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",si(n,"POST","/v1/accounts:signInWithEmailLink",ni(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vo=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(t,i,o){var a,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(v)(this,r),(a=n.call(this,"password",o))._email=t,a._password=i,a._tenantId=s,a}return e(k)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",uo(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",lo(t,{email:n._email,oobCode:n._password}));case 5:Mr(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(Se)(e(Re).mark((function i(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",ao(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",fo(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:Mr(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(oo);function mo(e,t){return yo.apply(this,arguments)}function yo(){return(yo=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(Se)(e(Re).mark((function t(n,r){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",si(n,"POST","/v1/accounts:signInWithIdp",ni(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _o=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(){var t;return e(v)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(k)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return mo(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,mo(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,mo(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rn(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Mr("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,o=Nr(t,["providerId","signInMethod"]);if(!n||!i)return null;var a=new r(n,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}}]),r}(oo);function go(e,t){return ko.apply(this,arguments)}function ko(){return(ko=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(Se)(e(Re).mark((function t(n,r){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ri(n,"POST","/v1/accounts:sendVerificationCode",ni(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function bo(){return(bo=e(Se)(e(Re).mark((function t(n,r){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",si(n,"POST","/v1/accounts:signInWithPhoneNumber",ni(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function wo(){return(wo=e(Se)(e(Re).mark((function t(n,r){var i;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,si(n,"POST","/v1/accounts:signInWithPhoneNumber",ni(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw hi(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Io=e(Pe)({},"USER_NOT_FOUND","user-not-found");function To(){return(To=e(Se)(e(Re).mark((function t(n,r){var i;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",si(n,"POST","/v1/accounts:signInWithPhoneNumber",ni(n,i),Io));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Co=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(t){var i;return e(v)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(k)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return bo.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return wo.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return To.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,o=e.temporaryProof;return n||t||i||o?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:o}):null}}]),r}(oo);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xo=function(){"use strict";function t(n){var r,i,o,a,s,u;e(v)(this,t);var c=on(an(n)),l=null!==(r=c.apiKey)&&void 0!==r?r:null,h=null!==(i=c.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=c.mode)&&void 0!==o?o:null);qr(l&&h&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=h,this.continueUrl=null!==(a=c.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(k)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=on(an(e)).link,n=t?on(an(t)).deep_link_id:null,r=on(an(e)).deep_link_id;return(r?on(an(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var So=function(){"use strict";function t(){e(v)(this,t),this.providerId=t.PROVIDER_ID}return e(k)(t,null,[{key:"credential",value:function(e,t){return vo._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=xo.parseLink(t);return qr(n,"argument-error"),vo._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();So.PROVIDER_ID="password",So.EMAIL_PASSWORD_SIGN_IN_METHOD="password",So.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Eo=function(){"use strict";function t(n){e(v)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(k)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),Ro=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(){var t;return e(v)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(k)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(Oe)(this.scopes)}}]),r}(Eo),No=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(){return e(v)(this,r),n.call(this,"facebook.com")}return e(k)(r,null,[{key:"credential",value:function(e){return _o._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Ro);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */No.FACEBOOK_SIGN_IN_METHOD="facebook.com",No.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Po=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(){var t;return e(v)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(k)(r,null,[{key:"credential",value:function(e,t){return _o._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Ro);Po.GOOGLE_SIGN_IN_METHOD="google.com",Po.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Oo=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(){return e(v)(this,r),n.call(this,"github.com")}return e(k)(r,null,[{key:"credential",value:function(e){return _o._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Ro);Oo.GITHUB_SIGN_IN_METHOD="github.com",Oo.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Lo=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(){return e(v)(this,r),n.call(this,"twitter.com")}return e(k)(r,null,[{key:"credential",value:function(e,t){return _o._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Ro);function Ao(e,t){return Do.apply(this,arguments)}function Do(){return(Do=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(Se)(e(Re).mark((function t(n,r){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",si(n,"POST","/v1/accounts:signUp",ni(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lo.TWITTER_SIGN_IN_METHOD="twitter.com",Lo.PROVIDER_ID="twitter.com";var Mo=function(){"use strict";function t(n){e(v)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(k)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(Se)(e(Re).mark((function a(){var s,u,c;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ai._fromIdTokenResponse(n,i,o);case 2:return s=e.sent,u=jo(i),c=new t({user:s,providerId:u,_tokenResponse:i,operationType:r}),e.abrupt("return",c);case 6:case"end":return e.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return e(Se)(e(Re).mark((function o(){var a;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return a=jo(i),e.abrupt("return",new t({user:n,providerId:a,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),o)})))()}}]),t}();function jo(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fo=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(t,i,o,a){var s,u;return e(v)(this,r),(s=n.call(this,i.code,i.message)).operationType=o,s.user=a,Object.setPrototypeOf(e(ze)(s),r.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:o},s}return e(k)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(Vt);function Uo(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Fo._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(e,t){return Wo.apply(this,arguments)}function Wo(){return Wo=e(Se)(e(Re).mark((function t(n,r){var i,o,a=arguments;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.length>2&&void 0!==a[2]&&a[2],e.t0=ki,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return o=e.sent,e.abrupt("return",Mo._forOperation(n,"link",o));case 14:case"end":return e.stop()}}),t)}))),Wo.apply(this,arguments)}function Ho(e,t){return Vo.apply(this,arguments)}function Vo(){return Vo=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(Se)(e(Re).mark((function t(n,r){var i,o,a,s,u,c,l,h=arguments;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=h.length>2&&void 0!==h[2]&&h[2],a=n.auth,s="reauthenticate",e.prev=4,e.next=7,ki(n,Uo(a,s,r,n),i);case 7:return qr((u=e.sent).idToken,a,"internal-error"),qr(c=gi(u.idToken),a,"internal-error"),l=c.sub,qr(n.uid===l,a,"user-mismatch"),e.abrupt("return",Mo._forOperation(n,s,u));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(o=e.t0)||void 0===o?void 0:o.code)&&Mr(a,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),t,null,[[4,16]])}))),Vo.apply(this,arguments)}function zo(e,t){return Bo.apply(this,arguments)}function Bo(){return Bo=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(Se)(e(Re).mark((function t(n,r){var i,o,a,s,u=arguments;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],o="signIn",e.next=4,Uo(n,o,r);case 4:return a=e.sent,e.next=7,Mo._fromIdTokenResponse(n,o,a);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),Bo.apply(this,arguments)}function Ko(e,t){return Go.apply(this,arguments)}function Go(){return(Go=e(Se)(e(Re).mark((function t(n,r){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",zo(eo(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Jo(e,t,n){return Yo.apply(this,arguments)}function Yo(){return(Yo=e(Se)(e(Re).mark((function t(n,r,i){var o,a,s;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=eo(n),e.next=3,Ao(o,{returnSecureToken:!0,email:r,password:i});case 3:return a=e.sent,e.next=6,Mo._fromIdTokenResponse(o,"signIn",a);case 6:return s=e.sent,e.next=9,o._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Qo(e,t,n){return Ko(fn(e),So.credential(t,n))}function $o(e,t,n,r){return fn(e).onIdTokenChanged(t,n,r)}function Xo(e,t,n){return fn(e).beforeAuthStateChanged(t,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zo(e,t){return ri(e,"POST","/v2/accounts/mfaEnrollment:start",ni(e,t))}new WeakMap;var ea="__sak",ta=function(){"use strict";function t(n,r){e(v)(this,t),this.storageRetriever=n,this.type=r}return e(k)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(ea,"1"),this.storage.removeItem(ea),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var na=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(){var t,i;return e(v)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(Wi(i=Ot())||Gi(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=Qi(),t._shouldAllowMigration=!0,t}return e(k)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=this.storage.getItem(a),u=this.localCache[a];s!==u&&e(a,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var o=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},a=this.storage.getItem(r);Yi()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t?JSON.parse(t):t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,o=this;return e(Se)(e(Re).mark((function a(){return e(Re).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(xr)(e(Rr)(r.prototype),"_set",i).call(o,t,n);case 2:o.localCache[t]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(Se)(e(Re).mark((function o(){var a;return e(Re).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(xr)(e(Rr)(r.prototype),"_get",n).call(i,t);case 2:return a=o.sent,i.localCache[t]=JSON.stringify(a),o.abrupt("return",a);case 5:case"end":return o.stop()}}),o)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(Se)(e(Re).mark((function o(){return e(Re).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(xr)(e(Rr)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return o.stop()}}),o)})))()}}]),r}(ta);na.type="LOCAL";var ra=na,ia=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(){return e(v)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(k)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(ta);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ia.type="SESSION";var oa=ia;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t){return Promise.all(t.map((n=e(Se)(e(Re).mark((function t(n){var r;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sa=function(){"use strict";function t(n){e(v)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(k)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i,o,a,s,u,c,l,h;return e(Re).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=(i=t).data,a=o.eventId,s=o.eventType,u=o.data,null==(c=n.handlersMap[s])?void 0:c.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:a,eventType:s}),l=Array.from(c).map(function(){var t=e(Se)(e(Re).mark((function t(n){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,u));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,aa(l);case 9:h=r.sent,i.ports[0].postMessage({status:"done",eventId:a,eventType:s,response:h});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ua(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sa.receivers=[];var ca=function(){"use strict";function t(n){e(v)(this,t),this.target=n,this.handlers=new Set}return e(k)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(Se)(e(Re).mark((function o(){var a,s,u;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,o){var c=ua("",20);a.port1.start();var l=setTimeout((function(){o(new Error("unsupported_event"))}),r);u={messageChannel:a,onMessage:function(t){var n=t;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(n.data.response);break;default:clearTimeout(l),clearTimeout(s),o(new Error("invalid_response"))}}},i.handlers.add(u),a.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:t,eventId:c,data:n},[a.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),o)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ha(){return void 0!==la().WorkerGlobalScope&&"function"==typeof la().importScripts}function da(){return fa.apply(this,arguments)}function fa(){return(fa=e(Se)(e(Re).mark((function t(){var n;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pa="firebaseLocalStorageDb",va="firebaseLocalStorage",ma="fbase_key",ya=function(){"use strict";function t(n){e(v)(this,t),this.request=n}return e(k)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function _a(e,t){return e.transaction([va],t?"readwrite":"readonly").objectStore(va)}function ga(){var e=indexedDB.deleteDatabase(pa);return new ya(e).toPromise()}function ka(){var t=indexedDB.open(pa,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(va,{keyPath:ma})}catch(e){r(e)}})),t.addEventListener("success",e(Se)(e(Re).mark((function r(){var i;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(va)){e.next=12;break}return i.close(),e.next=5,ga();case 5:return e.t0=n,e.next=8,ka();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function ba(e,t,n){return wa.apply(this,arguments)}function wa(){return(wa=e(Se)(e(Re).mark((function t(n,r,i){var o,a;return e(Re).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=_a(n,!0).put((o={},e(Pe)(o,ma,r),e(Pe)(o,"value",i),o)),t.abrupt("return",new ya(a).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Ia(e,t){return Ta.apply(this,arguments)}function Ta(){return(Ta=e(Se)(e(Re).mark((function t(n,r){var i,o;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=_a(n,!1).get(r),e.next=3,new ya(i).toPromise();case 3:return o=e.sent,e.abrupt("return",void 0===o?null:o.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ca(e,t){var n=_a(e,!0).delete(t);return new ya(n).toPromise()}var xa=function(){"use strict";function t(){e(v)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(k)(t,[{key:"_openDb",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,ka();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i,o;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return o=e.sent,e.next=8,t(o);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ha()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){return e(Re).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=sa._getInstance(ha()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(Se)(e(Re).mark((function n(r,i){var o;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return o=e.sent,e.abrupt("return",{keyProcessed:o.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(Se)(e(Re).mark((function t(n,r){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){var r,i,o;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,da();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new ca(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(o=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=o[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=o[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(Se)(e(Re).mark((function t(){var n;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,ka();case 5:return n=e.sent,e.next=8,ba(n,ea,"1");case 8:return e.next=10,Ca(n,ea);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(Se)(e(Re).mark((function i(){return e(Re).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(Se)(e(Re).mark((function i(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return ba(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Ia(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){return e(Re).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(Se)(e(Re).mark((function r(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Ca(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){var r,i,o,a,s,u,c,l,h,d,f,p,v,m,y,_,g;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=_a(e,!1).getAll();return new ya(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],o=new Set,a=!0,s=!1,u=void 0,e.prev=10,c=r[Symbol.iterator]();!(a=(l=c.next()).done);a=!0)h=l.value,d=h.fbase_key,f=h.value,o.add(d),JSON.stringify(t.localCache[d])!==JSON.stringify(f)&&(t.notifyListeners(d,f),i.push(d));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,u=e.t0;case 18:e.prev=18,e.prev=19,a||null==c.return||c.return();case 21:if(e.prev=21,!s){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(p=!0,v=!1,m=void 0,e.prev=27,y=Object.keys(t.localCache)[Symbol.iterator]();!(p=(_=y.next()).done);p=!0)g=_.value,t.localCache[g]&&!o.has(g)&&(t.notifyListeners(g,null),i.push(g));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),v=!0,m=e.t1;case 35:e.prev=35,e.prev=36,p||null==y.return||y.return();case 38:if(e.prev=38,!v){e.next=41;break}throw m;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(Se)(e(Re).mark((function n(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();xa.type="LOCAL";var Sa=xa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(e,t){return ri(e,"POST","/v2/accounts/mfaSignIn:start",ni(e,t))}function Ra(e){return new Promise((function(t,n){var r,i,o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=function(e){var t=jr("internal-error");t.customData=e,n(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(o)}))}function Na(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Na("rcb"),new Qr(3e4,6e4);var Pa="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(e,t,n){return La.apply(this,arguments)}function La(){return(La=e(Se)(e(Re).mark((function t(n,r,i){var o,a,s,u,c,l,h,d;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(a=e.sent,e.prev=4,qr("string"==typeof a,n,"argument-error"),qr(i.type===Pa,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return qr("enroll"===u.type,n,"internal-error"),e.next=15,Zo(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:a}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return qr("signin"===u.type,n,"internal-error"),qr(l=(null===(o=s.multiFactorHint)||void 0===o?void 0:o.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Ea(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:a}});case 24:return h=e.sent,e.abrupt("return",h.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,go(n,{phoneNumber:s.phoneNumber,recaptchaToken:a});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Aa=function(){"use strict";function t(n){e(v)(this,t),this.providerId=t.PROVIDER_ID,this.auth=eo(n)}return e(k)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Oa(this.auth,e,fn(t))}}],[{key:"credential",value:function(e,t){return Co._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Co._fromTokenResponse(n,r):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Da(e,t){return t?zr(t):(qr(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Aa.PROVIDER_ID="phone",Aa.PHONE_SIGN_IN_METHOD="phone";var Ma=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(t){var i;return e(v)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(k)(r,[{key:"_getIdTokenResponse",value:function(e){return mo(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return mo(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return mo(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(oo);function ja(e){return zo(e.auth,new Ma(e),e.bypassAuthState)}function Fa(e){var t=e.auth,n=e.user;return qr(n,t,"internal-error"),Ho(n,new Ma(e),e.bypassAuthState)}function Ua(e){return qa.apply(this,arguments)}function qa(){return(qa=e(Se)(e(Re).mark((function t(n){var r,i;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,qr(i=n.user,r,"internal-error"),e.abrupt("return",qo(i,new Ma(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wa=function(){"use strict";function t(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(v)(this,t),this.auth=n,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(k)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(Se)(e(Re).mark((function t(r,i){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i,o,a,s,u,c,l;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,o=t.sessionId,a=t.postBody,s=t.tenantId,u=t.error,c=t.type,!u){e.next=4;break}return n.reject(u),e.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:o,tenantId:s||void 0,postBody:a||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(c)(l);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ja;case"linkViaPopup":case"linkViaRedirect":return Ua;case"reauthViaPopup":case"reauthViaRedirect":return Fa;default:Mr(this.auth,"internal-error")}}},{key:"resolve",value:function(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),Ha=new Qr(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Va=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(t,i,o,a,s){var u;return e(v)(this,r),(u=n.call(this,t,i,a,s)).provider=o,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(ze)(u),u}return e(k)(r,[{key:"executeNotNull",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){var r;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return qr(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){var r;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Hr(1===t.filter.length,"Popup operations only handle one event"),r=ua(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(jr(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(jr(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(jr(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Ha.get())};t()}}]),r}(Wa);Va.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var za=new Map,Ba=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(t,i){var o,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(v)(this,r),(o=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a)).eventId=null,o}return e(k)(r,[{key:"execute",value:function(){var t=this,n=this;return e(Se)(e(Re).mark((function i(){var o,a;return e(Re).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(o=za.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Ka(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(xr)(e(Rr)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:a=i.t0,o=function(){return Promise.resolve(a)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),o=function(){return Promise.reject(i.t1)};case 20:za.set(n.auth._key(),o);case 21:return n.bypassAuthState||za.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",o());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,o=function(){return e(xr)(e(Rr)(r.prototype),"onAuthEvent",n)};return e(Se)(e(Re).mark((function n(){var r;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",o().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",o().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(Se)(e(Re).mark((function t(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(Wa);function Ka(e,t){return Ga.apply(this,arguments)}function Ga(){return(Ga=e(Se)(e(Re).mark((function t(n,r){var i,o,a;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Qa(r),o=Ya(n),e.next=4,o._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,o._get(i);case 8:return e.t0=e.sent,a="true"===e.t0,e.next=12,o._remove(i);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ja(e,t){za.set(e._key(),t)}function Ya(e){return zr(e._redirectPersistence)}function Qa(e){return ji("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(e,t){return Xa.apply(this,arguments)}function Xa(){return Xa=e(Se)(e(Re).mark((function t(n,r){var i,o,a,s,u,c=arguments;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],o=eo(n),a=Da(o,r),s=new Ba(o,a,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,o._persistUserIfCurrent(u.user);case 11:return e.next=13,o._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),t)}))),Xa.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Za=function(){"use strict";function t(n){e(v)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(k)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ts(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!ts(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(jr(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(es(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(es(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function es(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function ts(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function ns(e){return rs.apply(this,arguments)}function rs(){return rs=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(Se)(e(Re).mark((function t(n){var r,i=arguments;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",ri(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),rs.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var is=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,os=/^https?/;function as(){return(as=e(Se)(e(Re).mark((function t(n){var r,i,o,a,s,u,c;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,ns(n);case 4:r=e.sent.authorizedDomains,i=!0,o=!1,a=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!ss(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),o=!0,a=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!o){e.next=32;break}throw a;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Mr(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function ss(e){var t=Kr(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&o.hostname===i}if(!os.test(r))return!1;if(is.test(e))return i===e;var a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var us=new Qr(3e4,6e4);function cs(){var t=la().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var o,a=Object.keys(t.H)[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(Oe)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}var ls=null;function hs(e){return ls=ls||function(e){return new Promise((function(t,n){var r,i,o;function a(){cs(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){cs(),n(jr(e,"network-request-failed"))},timeout:us.get()})}if(null===(i=null===(r=la().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=la().gapi)||void 0===o?void 0:o.load)){var s=Na("iframefcb");return la()[s]=function(){gapi.load?a():n(jr(e,"network-request-failed"))},Ra("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}a()}})).catch((function(e){throw ls=null,e}))}(e),ls}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ds=new Qr(5e3,15e3),fs={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ps=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vs(e){var t=e.config;qr(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?$r(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:ur},i=ps.get(e.config.apiHost);i&&(r.eid=i);var o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),"".concat(n,"?").concat(rn(r).slice(1))}function ms(e){return ys.apply(this,arguments)}function ys(){return ys=e(Se)(e(Re).mark((function t(n){var r,i;return e(Re).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,hs(n);case 2:return r=t.sent,qr(i=la().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:vs(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fs,dontclear:!0},(function(t){return new Promise((r=e(Se)(e(Re).mark((function r(i,o){var a,s,u;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){la().clearTimeout(s),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:a=jr(n,"network-request-failed"),s=la().setTimeout((function(){o(a)}),ds.get()),t.ping(u).then(u,(function(){o(a)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),ys.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _s={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gs="_blank",ks="http://localhost",bs=function(){"use strict";function t(n){e(v)(this,t),this.window=n,this.associatedEvent=null}return e(k)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function ws(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,a=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},_s),{width:i.toString(),height:o.toString(),top:a,left:s}),l=Ot().toLowerCase();r&&(u=Hi(l)?gs:r),qi(l)&&(n=n||ks,c.scrollbars="yes");var h=Object.entries(c).reduce((function(t,n){var r=e(Fe)(n,2),i=r[0],o=r[1];return"".concat(t).concat(i,"=").concat(o,",")}),"");if(Ji(l)&&"_self"!==u)return Is(n||"",u),new bs(null);var d=window.open(n||"",u,h);qr(d,t,"popup-blocked");try{d.focus()}catch(e){}return new bs(d)}function Is(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ts="__/auth/handler",Cs="emulator/auth/handler";function xs(t,n,r,i,o,a){qr(t.config.authDomain,t,"auth-domain-config-required"),qr(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:ur,eventId:o};if(n instanceof Eo){n.setDefaultLanguage(t.languageCode),s.providerId=n.providerId||"",Zt(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var h,d=Object.entries(a||{})[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var f=e(Fe)(h.value,2),p=f[0],v=f[1];s[p]=v}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(n instanceof Ro){var m=n.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}t.tenantId&&(s.tid=t.tenantId);var y,_,g=s,k=!0,b=!1,w=void 0;try{for(var I,T=Object.keys(g)[Symbol.iterator]();!(k=(I=T.next()).done);k=!0){var C=I.value;void 0===g[C]&&delete g[C]}}catch(e){b=!0,w=e}finally{try{k||null==T.return||T.return()}finally{if(b)throw w}}return"".concat((y=t,_=y.config,_.emulator?$r(_,Cs):"https://".concat(_.authDomain,"/").concat(Ts)),"?").concat(rn(g).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ss="webStorageSupport",Es=function(){"use strict";function t(){e(v)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oa,this._completeRedirectFn=$a,this._overrideRedirectResult=Ja}return e(k)(t,[{key:"_openPopup",value:function(t,n,r,i){var o=this;return e(Se)(e(Re).mark((function a(){var s,u;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Hr(null===(s=o.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=xs(t,n,r,Kr(),i),e.abrupt("return",ws(t,u,ua()));case 4:case"end":return e.stop()}}),a)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var o=this;return e(Se)(e(Re).mark((function a(){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o._originValidation(t);case 2:return a=xs(t,n,r,Kr(),i),la().location.href=a,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,o=r.promise;return i?Promise.resolve(i):(Hr(o,"If manager is not set, promise should be"),o)}var a=this.initAndGetManager(e);return this.eventManagers[n]={promise:a},a.catch((function(){delete t.eventManagers[n]})),a}},{key:"initAndGetManager",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i,o;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ms(t);case 2:return i=e.sent,o=new Za(t),i.register("authEvent",(function(e){return qr(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:o.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:o},n.iframes[t._key()]=i,e.abrupt("return",o);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Ss,{type:Ss},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Mr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return as.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Qi()||Wi()||Gi()}}]),t}(),Rs=Es,Ns=function(){"use strict";function t(n){e(v)(this,t),this.factorId=n}return e(k)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Wr("unexpected MultiFactorSessionType")}}}]),t}(),Ps=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(t){var i;return e(v)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(k)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return ri(e,"POST","/v2/accounts/mfaEnrollment:finalize",ni(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return ri(e,"POST","/v2/accounts/mfaSignIn:finalize",ni(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(Ns);(function(){"use strict";function t(){e(v)(this,t)}return e(k)(t,null,[{key:"assertion",value:function(e){return Ps._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Os="@firebase/auth",Ls="0.20.8",As=function(){"use strict";function t(n){e(v)(this,t),this.auth=n,this.internalListeners=new Map}return e(k)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(Se)(e(Re).mark((function r(){var i;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){qr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ds,Ms=qt("authIdTokenMaxAge")||300,js=null,Fs=function(t){return n=e(Se)(e(Re).mark((function n(r){var i,o,a;return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((o=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&o>Ms)){e.next=9;break}return e.abrupt("return");case 9:if(a=null==i?void 0:i.token,js!==a){e.next=12;break}return e.abrupt("return");case 12:return js=a,e.next=15,fetch(t,{method:a?"POST":"DELETE",headers:a?{Authorization:"Bearer ".concat(a)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};Ds="Browser",rr(new pn("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=r.options,a=o.apiKey,s=o.authDomain;return function(e,t){qr(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),qr(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:a,authDomain:s,clientPlatform:Ds,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$i(Ds)},i=new Zi(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),rr(new pn("auth-internal",(function(e){var t=eo(e.getProvider("auth").getImmediate());return new As(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),hr(Os,Ls,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ds)),hr(Os,Ls,"esm2017");document.querySelector(".cocktails__list"),document.querySelector(".not-found"),document.querySelector(".cocktails__title");ze=i("ds8z5");var Us=i("l5bVx"),qs="@firebase/database",Ws="0.13.7",Hs="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vs,zs=function(){"use strict";function t(n){e(v)(this,t),this.domStorage_=n,this.prefix_="firebase:"}return e(k)(t,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Jt(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Gt(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),t}(),Bs=function(){"use strict";function t(){e(v)(this,t),this.cache_={},this.isInMemoryStorage=!0}return e(k)(t,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return $t(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),t}(),Ks=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new zs(t)}}catch(e){}return new Bs},Gs=Ks("localStorage"),Js=Ks("sessionStorage"),Ys=new xn("@firebase/database"),Qs=(Vs=1,function(){return Vs++}),$s=function(e){var t=hn(e),n=new sn;n.update(t);var r=n.digest();return xt.encodeByteArray(r)},Xs=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var o=t[i];Array.isArray(o)||o&&"object"==typeof o&&"number"==typeof o.length?r+=Xs.apply(null,o):r+="object"==typeof o?Jt(o):o,r+=" "}return r},Zs=null,eu=!0,tu=function(e,t){It(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Ys.logLevel=yn.VERBOSE,Zs=Ys.log.bind(Ys),t&&Js.set("logging_enabled",!0)):"function"==typeof e?Zs=e:(Zs=null,Js.remove("logging_enabled"))},nu=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===eu&&(eu=!1,null===Zs&&!0===Js.get("logging_enabled")&&tu(!0)),Zs){var r=Xs.apply(null,t);Zs(r)}},ru=function(t){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];nu.apply(void 0,[t].concat(e(Oe)(r)))}},iu=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE INTERNAL ERROR: "+Xs.apply(void 0,e(Oe)(n));Ys.error(i)},ou=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE FATAL ERROR: ".concat(Xs.apply(void 0,e(Oe)(n)));throw Ys.error(i),new Error(i)},au=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE WARNING: "+Xs.apply(void 0,e(Oe)(n));Ys.warn(i)},su=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},uu="[MIN_NAME]",cu="[MAX_NAME]",lu=function(e,t){if(e===t)return 0;if(e===uu||t===cu)return-1;if(t===uu||e===cu)return 1;var n=ku(e),r=ku(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},hu=function(e,t){return e===t?0:e<t?-1:1},du=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Jt(t))},fu=function(e){if("object"!=typeof e||null===e)return Jt(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=Jt(t[i]),r+=":",r+=fu(e[t[i]]);return r+="}"},pu=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var mu=function(e){It(!su(e),"Invalid JSON number");var t,n,r,i,o,a=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),a))+a,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(o=52;o;o-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(o=0;o<64;o+=8){var l=parseInt(u.substr(o,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var yu=new RegExp("^-?(0*)\\d{1,10}$"),_u=-2147483648,gu=2147483647,ku=function(e){if(yu.test(e)){var t=Number(e);if(t>=_u&&t<=gu)return t}return null},bu=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw au("Exception was thrown by user callback.",t),e}),Math.floor(0))}},wu=function(e,t){var n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n},Iu=function(){"use strict";function t(n,r){var i=this;e(v)(this,t),this.appName_=n,this.appCheckProvider=r,this.appCheck=null==r?void 0:r.getImmediate({optional:!0}),this.appCheck||null==r||r.get().then((function(e){return i.appCheck=e}))}return e(k)(t,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){var i=t;setTimeout((function(){i.appCheck?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){au('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),t}(),Tu=function(){"use strict";function t(n,r,i){var o=this;e(v)(this,t),this.appName_=n,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((function(e){return o.auth_=e}))}return e(k)(t,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(nu("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){var i=t;setTimeout((function(){i.auth_?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',au(e)}}]),t}(),Cu=function(){"use strict";function t(n){e(v)(this,t),this.accessToken=n}return e(k)(t,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),t}();Cu.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xu="5",Su=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Eu="websocket",Ru="long_polling",Nu=function(){"use strict";function t(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6&&void 0!==arguments[6]&&arguments[6];e(v)(this,t),this.secure=r,this.namespace=i,this.webSocketOnly=o,this.nodeAdmin=a,this.persistenceKey=s,this.includeNamespaceInQueryParams=u,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gs.get("host:"+n)||this._host}return e(k)(t,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gs.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),t}();function Pu(e,t,n){var r;if(It("string"==typeof t,"typeof type must == string"),It("object"==typeof n,"typeof params must == object"),t===Eu)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Ru)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return vu(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ou=function(){"use strict";function t(){e(v)(this,t),this.counters_={}}return e(k)(t,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;$t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return Nt(this.counters_)}}]),t}(),Lu={},Au={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(e){var t=e.toString();return Lu[t]||(Lu[t]=new Ou),Lu[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mu=function(){"use strict";function t(n){e(v)(this,t),this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e(k)(t,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){var n=function(e){i[e]&&bu((function(){r.onMessage_(i[e])}))},r=this,i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(var o=0;o<i.length;++o)n(o);if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}]),t}(),ju="start",Fu="close",Uu=function(){"use strict";function t(n,r,i,o,a,s,u){var c=this;e(v)(this,t),this.connId=n,this.repoInfo=r,this.applicationId=i,this.appCheckToken=o,this.authToken=a,this.transportSessionId=s,this.lastSessionId=u,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ru(n),this.stats_=Du(r),this.urlFn=function(e){return c.appCheckToken&&(e.ac=c.appCheckToken),Pu(r,Ru,e)}}return e(k)(t,[{key:"open",value:function(t,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Mu(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Dt()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){var t=r;if(!r.isClosed_){r.scriptTagHolder=new qu((function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=e(Fe)(r,5),a=o[0],s=o[1],u=o[2];o[3],o[4];if(t.incrementIncomingBytes_(r),t.scriptTagHolder)if(t.connectTimeoutTimer_&&(clearTimeout(t.connectTimeoutTimer_),t.connectTimeoutTimer_=null),t.everConnected_=!0,a===ju)t.id=s,t.password=u;else{if(a!==Fu)throw new Error("Unrecognized command received: "+a);if(s){var c=t;t.scriptTagHolder.sendNewPolls=!1,t.myPacketOrderer.closeAfter(s,(function(){c.onClosed_()}))}else t.onClosed_()}}),(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=e(Fe)(r,2),a=o[0],s=o[1];t.incrementIncomingBytes_(r),t.myPacketOrderer.handleResponse(a,s)}),(function(){t.onClosed_()}),r.urlFn);var n={start:"t"};n.ser=Math.floor(1e8*Math.random()),r.scriptTagHolder.uniqueCallbackIdentifier&&(n.cb=r.scriptTagHolder.uniqueCallbackIdentifier),n.v=xu,r.transportSessionId&&(n.s=r.transportSessionId),r.lastSessionId&&(n.ls=r.lastSessionId),r.applicationId&&(n.p=r.applicationId),r.appCheckToken&&(n.ac=r.appCheckToken),"undefined"!=typeof location&&location.hostname&&Su.test(location.hostname)&&(n.r="f");var i=r.urlFn(n);r.log_("Connecting via long-poll to "+i),r.scriptTagHolder.addTag(i,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=Jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=St(t),r=pu(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!Dt()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=Jt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){t.forceAllow_=!0}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!Dt()&&(!!t.forceAllow_||!(t.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),t}(),qu=function(){"use strict";function t(n,r,i,o){if(e(v)(this,t),this.onDisconnect=i,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Dt())this.commandCB=n,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=Qs(),window["pLPCommand"+this.uniqueCallbackIdentifier]=n,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=t.createIFrame_();var a="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))a='<script>document.domain="'+document.domain+'";<\/script>';var s="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(e){nu("frame writing exception"),e.stack&&nu(e.stack),nu(e)}}}return e(k)(t,[{key:"close",value:function(){if(this.alive=!1,this.myIFrame){var e=this;this.myIFrame.doc.body.innerHTML="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0))}var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;Dt()?this.doNodeLongPoll(e,t):setTimeout((function(){try{var r=n;if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){nu("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||nu("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),t}(),Wu=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"undefined"!=typeof MozWebSocket?Wu=MozWebSocket:"undefined"!=typeof WebSocket&&(Wu=WebSocket);var Hu=function(){"use strict";function t(n,r,i,o,a,s,u){e(v)(this,t),this.connId=n,this.applicationId=i,this.appCheckToken=o,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ru(this.connId),this.stats_=Du(r),this.connURL=t.connectionURL_(r,s,u,o,i),this.nodeAdmin=r.nodeAdmin}return e(k)(t,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gs.set("previous_websocket_failure",!0);try{var r;if(Dt()){var i=this.nodeAdmin?"AdminNode":"Node";r={headers:{"User-Agent":"Firebase/".concat(xu,"/").concat(Hs,"/").concat(ot.platform,"/").concat(i),"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(r.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(r.headers["X-Firebase-AppCheck"]=this.appCheckToken);var o={},a=0===this.connURL.indexOf("wss://")?o.HTTPS_PROXY||o.https_proxy:o.HTTP_PROXY||o.http_proxy;a&&(r.proxy={origin:a})}this.mySock=new Wu(this.connURL,[],r)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){Gs.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=Gt(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if(It(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=Jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=pu(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var o={};return o.v=xu,!Dt()&&"undefined"!=typeof location&&location.hostname&&Su.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),r&&(o.ac=r),i&&(o.p=i),Pu(e,Eu,o)}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){var e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Wu&&!t.forceDisallow_}},{key:"previouslyFailed",value:function(){return Gs.isInMemoryStorage||!0===Gs.get("previous_websocket_failure")}}]),t}();Hu.responsesRequiredToBeHealthy=2,Hu.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vu=function(){"use strict";function t(n){e(v)(this,t),this.initTransports_(n)}return e(k)(t,[{key:"initTransports_",value:function(e){var n=Hu&&Hu.isAvailable(),r=n&&!Hu.previouslyFailed();if(e.webSocketOnly&&(n||au("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Hu];else{var i=this.transports_=[],o=!0,a=!1,s=void 0;try{for(var u,c=t.ALL_TRANSPORTS[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){a=!0,s=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw s}}t.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[Uu,Hu]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),t}();Vu.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zu=function(){"use strict";function t(n,r,i,o,a,s,u,c,l,h){e(v)(this,t),this.id=n,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=o,this.authToken_=a,this.onMessage_=s,this.onReady_=u,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ru("c:"+this.id+":"),this.transportManager_=new Vu(r),this.log_("Connection created"),this.start_()}return e(k)(t,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=wu((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=du("t",e),n=du("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=du("t",e),n=du("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=du("t",e);if("d"in e){var n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?iu("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):iu("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),xu!==n&&au("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),wu((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wu((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),t}(),Bu=function(){"use strict";function t(){e(v)(this,t)}return e(k)(t,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),t}(),Ku=function(){"use strict";function t(n){e(v)(this,t),this.allowedEvents_=n,this.listeners_={},It(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}return e(k)(t,[{key:"trigger",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Array.isArray(this.listeners_[t]))for(var o=e(Oe)(this.listeners_[t]),a=0;a<o.length;a++)o[a].callback.apply(o[a].context,r)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){It(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),t}(),Gu=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(){var t;return e(v)(this,r),(t=n.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Lt()||(window.addEventListener("online",(function(){t.online_||(t.online_=!0,t.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){t.online_&&(t.online_=!1,t.trigger("online",!1))}),!1)),t}return e(k)(r,[{key:"getInitialEvent",value:function(e){return It("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new r}}]),r}(Ku),Ju=function(){"use strict";function t(n,r){if(e(v)(this,t),void 0===r){this.pieces_=n.split("/");for(var i=0,o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[i]=this.pieces_[o],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=r}return e(k)(t,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),t}();function Yu(){return new Ju("")}function Qu(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function $u(e){return e.pieces_.length-e.pieceNum_}function Xu(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new Ju(e.pieces_,t)}function Zu(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ec(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function tc(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Ju(t,0)}function nc(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Ju)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var o=t.split("/"),a=0;a<o.length;a++)o[a].length>0&&n.push(o[a]);return new Ju(n,0)}function rc(e){return e.pieceNum_>=e.pieces_.length}function ic(e,t){var n=Qu(e),r=Qu(t);if(null===n)return t;if(n===r)return ic(Xu(e),Xu(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function oc(e,t){if($u(e)!==$u(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function ac(e,t){var n=e.pieceNum_,r=t.pieceNum_;if($u(e)>$u(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var sc=function t(n,r){"use strict";e(v)(this,t),this.errorPrefix_=r,this.parts_=ec(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++)this.byteLength_+=dn(this.parts_[i]);uc(this)};function uc(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+cc(e))}function cc(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lc=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(){var t,i,o;return e(v)(this,r),t=n.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(o="visibilitychange",i="hidden"):void 0!==document.mozHidden?(o="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(o="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(o="webkitvisibilitychange",i="webkitHidden")),t.visible_=!0,o&&document.addEventListener(o,(function(){var e=!document[i];e!==t.visible_&&(t.visible_=e,t.trigger("visible",e))}),!1),t}return e(k)(r,[{key:"getInitialEvent",value:function(e){return It("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new r}}]),r}(Ku),hc=1e3,dc=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(t,i,o,a,s,u,c,l){var h;if(e(v)(this,r),(h=n.call(this)).repoInfo_=t,h.applicationId_=i,h.onDataUpdate_=o,h.onConnectStatus_=a,h.onServerInfoUpdate_=s,h.authTokenProvider_=u,h.appCheckTokenProvider_=c,h.authOverride_=l,h.id=r.nextPersistentConnectionId_++,h.log_=ru("p:"+h.id+":"),h.interruptReasons_={},h.listens=new Map,h.outstandingPuts_=[],h.outstandingGets_=[],h.outstandingPutCount_=0,h.outstandingGetCount_=0,h.onDisconnectRequestQueue_=[],h.connected_=!1,h.reconnectDelay_=hc,h.maxReconnectDelay_=3e5,h.securityDebugCallback_=null,h.lastSessionId=null,h.establishConnectionTimer_=null,h.visible_=!1,h.requestCBHash_={},h.requestNumber_=0,h.realtime_=null,h.authToken_=null,h.appCheckToken_=null,h.forceTokenRefresh_=!1,h.invalidAuthTokenCount_=0,h.invalidAppCheckTokenCount_=0,h.firstConnection_=!0,h.lastConnectionAttemptTime_=null,h.lastConnectionEstablishedTime_=null,l&&!Dt())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return lc.getInstance().on("visible",h.onVisible_,e(ze)(h)),-1===t.host.indexOf("fblocal")&&Gu.getInstance().on("online",h.onOnline_,e(ze)(h)),h}return e(k)(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Jt(i)),It(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){this.initConnection_();var t=new Wt,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:function(e){var n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;var r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),It(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),It(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");var a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+i+" for "+o);var a={p:i};e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest("q",a,(function(a){var s=a.d,u=a.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(o))===e&&(t.log_("listen response",a),"ok"!==u&&t.removeListen_(i,o),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){var t;(e&&40===e.length||"object"==typeof(t=Yt(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){if(this.connected_&&this.authToken_){var e=this,t=this.authToken_,n=Qt(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),It(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var o={p:t,d:n};void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;var a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){if(this.connected_){var t=this,n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+Jt(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):iu("Unrecognized action received from server: "+Jt(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;It(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hc,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=hc),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var t=this;return e(Se)(e(Re).mark((function n(){var i,o,a,s,u,c,l,h,d,f,p,v,m;return e(Re).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.shouldReconnect_()){n.next=31;break}return t.log_("Making a connection attempt"),t.lastConnectionAttemptTime_=(new Date).getTime(),t.lastConnectionEstablishedTime_=null,i=t.onDataMessage_.bind(t),o=t.onReady_.bind(t),a=t.onRealtimeDisconnect_.bind(t),s=t.id+":"+r.nextConnectionId_++,u=t.lastSessionId,c=!1,l=null,h=function(){l?l.close():(c=!0,a())},d=function(e){It(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(e)},t.realtime_={close:h,sendRequest:d},f=t.forceTokenRefresh_,t.forceTokenRefresh_=!1,n.prev=16,n.t0=e(Fe),n.next=20,Promise.all([t.authTokenProvider_.getToken(f),t.appCheckTokenProvider_.getToken(f)]);case 20:n.t1=n.sent,p=(0,n.t0)(n.t1,2),v=p[0],m=p[1],c?nu("getToken() completed but was canceled"):(nu("getToken() completed. Creating connection."),t.authToken_=v&&v.accessToken,t.appCheckToken_=m&&m.token,l=new zu(s,t.repoInfo_,t.applicationId_,t.appCheckToken_,t.authToken_,i,o,a,(function(e){au(e+" ("+t.repoInfo_.toString()+")"),t.interrupt("server_kill")}),u)),n.next=31;break;case 27:n.prev=27,n.t2=n.catch(16),t.log_("Failed to get token: "+n.t2),c||(t.repoInfo_.nodeAdmin&&au(n.t2),h());case 31:case"end":return n.stop()}}),n,null,[[16,27]])})))()}},{key:"interrupt",value:function(e){nu("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){nu("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zt(this.interruptReasons_)&&(this.reconnectDelay_=hc,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return fu(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new Ju(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){nu("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){nu("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,o=void 0;try{for(var a,s=this.listens.values()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var h=c.value;this.sendListen_(h)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}for(var d=0;d<this.outstandingPuts_.length;d++)this.outstandingPuts_[d]&&this.sendPut_(d);for(;this.onDisconnectRequestQueue_.length;){var f=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(f.action,f.pathString,f.data,f.onComplete)}for(var p=0;p<this.outstandingGets_.length;p++)this.outstandingGets_[p]&&this.sendGet_(p)}},{key:"sendConnectStats_",value:function(){var e={},t="js";Dt()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Hs.replace(/\./g,"-")]=1,Lt()?e["framework.cordova"]=1:At()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=Gu.getInstance().currentlyOnline();return Zt(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&$t(e,"w")){var n=Xt(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();au("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}(Bu);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dc.nextPersistentConnectionId_=0,dc.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fc,pc=function(){"use strict";function t(n,r){e(v)(this,t),this.name=n,this.node=r}return e(k)(t,null,[{key:"Wrap",value:function(e,n){return new t(e,n)}}]),t}(),vc=function(){"use strict";function t(){e(v)(this,t)}return e(k)(t,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new pc(uu,e),r=new pc(uu,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return pc.MIN}}]),t}(),mc=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(){return e(v)(this,r),n.apply(this,arguments)}return e(k)(r,[{key:"compare",value:function(e,t){return lu(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw Tt("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return pc.MIN}},{key:"maxPost",value:function(){return new pc(cu,fc)}},{key:"makePost",value:function(e,t){return It("string"==typeof e,"KeyIndex indexValue must always be a string."),new pc(e,fc)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return fc},set:function(e){fc=e}}]),r}(vc),yc=new mc,_c=function(){"use strict";function t(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;e(v)(this,t),this.isReverse_=o,this.resultGenerator_=a,this.nodeStack_=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,o&&(s*=-1),s<0)n=this.isReverse_?n.left:n.right;else{if(0===s){this.nodeStack_.push(n);break}this.nodeStack_.push(n),n=this.isReverse_?n.right:n.left}}return e(k)(t,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),t}(),gc=function(){"use strict";function t(n,r,i,o,a){e(v)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=o?o:wc.EMPTY_NODE,this.right=null!=a?a:wc.EMPTY_NODE}return e(k)(t,[{key:"copy",value:function(e,n,r,i,o){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return wc.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return wc.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight_",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gc.RED=!0,gc.BLACK=!1;var kc,bc=function(){"use strict";function t(){e(v)(this,t)}return e(k)(t,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new gc(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),t}(),wc=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.EMPTY_NODE;e(v)(this,t),this.comparator_=n,this.root_=r}return e(k)(t,[{key:"insert",value:function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,gc.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,gc.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new _c(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new _c(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new _c(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new _c(this.root_,null,this.comparator_,!0,e)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ic(e,t){return lu(e.name,t.name)}function Tc(e,t){return lu(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wc.EMPTY_NODE=new bc;var Cc,xc,Sc,Ec=function(e){return"number"==typeof e?"number:"+mu(e):"string:"+e},Rc=function(e){if(e.isLeafNode()){var t=e.val();It("string"==typeof t||"number"==typeof t||"object"==typeof t&&$t(t,".sv"),"Priority must be a string or number.")}else It(e===kc||e.isEmpty(),"priority of unexpected type.");It(e===kc||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},Nc=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.__childrenNodeConstructor.EMPTY_NODE;e(v)(this,t),this.value_=n,this.priorityNode_=r,this.lazyHash_=null,It(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Rc(this.priorityNode_)}return e(k)(t,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(e){return new t(this.value_,e)}},{key:"getImmediateChild",value:function(e){return".priority"===e?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(e){return rc(e)?this:".priority"===Qu(e)?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(e,n){return".priority"===e?this.updatePriority(n):n.isEmpty()&&".priority"!==e?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(e,n){var r=Qu(e);return null===r?n:n.isEmpty()&&".priority"!==r?this:(It(".priority"!==r||1===$u(e),".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(Xu(e),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+Ec(this.priorityNode_.val())+":");var n=e(Us)(this.value_);t+=n+":",t+="number"===n?mu(this.value_):this.value_,this.lazyHash_=$s(t)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(It(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}},{key:"compareToLeafNode_",value:function(n){var r=e(Us)(n.value_),i=e(Us)(this.value_),o=t.VALUE_TYPE_ORDER.indexOf(r),a=t.VALUE_TYPE_ORDER.indexOf(i);return It(o>=0,"Unknown leaf type: "+r),It(a>=0,"Unknown leaf type: "+i),o===a?"object"===i?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:a-o}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return Cc},set:function(e){Cc=e}}]),t}();Nc.VALUE_TYPE_ORDER=["object","boolean","number","string"];var Pc,Oc,Lc=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(){return e(v)(this,r),n.apply(this,arguments)}return e(k)(r,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?lu(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return pc.MIN}},{key:"maxPost",value:function(){return new pc(cu,new Nc("[PRIORITY-POST]",Sc))}},{key:"makePost",value:function(e,t){var n=xc(e);return new pc(t,new Nc("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),r}(vc),Ac=new Lc,Dc=Math.log(2),Mc=function(){"use strict";function t(n){e(v)(this,t);var r;this.count=(r=n+1,parseInt(Math.log(r)/Dc,10)),this.current_=this.count-1;var i,o=(i=this.count,parseInt(Array(i+1).join("1"),2));this.bits_=n+1&o}return e(k)(t,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),t}(),jc=function(e,t,n,r){e.sort(t);var i=function(t,r){var o,a,s=r-t;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new gc(a,o.node,gc.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return o=e[u],a=n?n(o):o,new gc(a,o.node,gc.BLACK,c,l)},o=function(t){for(var r=null,o=null,a=e.length,s=function(t,r){var o=a-t,s=a;a-=t;var c=i(o+1,s),l=e[o],h=n?n(l):l;u(new gc(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(o=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),h=Math.pow(2,t.count-(c+1));l?s(h,gc.BLACK):(s(h,gc.BLACK),s(h,gc.RED))}return o}(new Mc(e.length));return new wc(r||t,o)},Fc={},Uc=function(){"use strict";function t(n,r){e(v)(this,t),this.indexes_=n,this.indexSet_=r}return e(k)(t,[{key:"get",value:function(e){var t=Xt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof wc?t:null}},{key:"hasIndex",value:function(e){return $t(this.indexSet_,e.toString())}},{key:"addIndex",value:function(e,n){It(e!==yc,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],o=!1,a=n.getIterator(pc.Wrap),s=a.getNext();s;)o=o||e.isDefinedOn(s.node),i.push(s),s=a.getNext();r=o?jc(i,e.getCompare()):Fc;var u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;var l=Object.assign({},this.indexes_);return l[u]=r,new t(l,c)}},{key:"addToIndexes",value:function(e,n){var r=this;return new t(en(this.indexes_,(function(t,i){var o=Xt(r.indexSet_,i);if(It(o,"Missing index implementation for "+i),t===Fc){if(o.isDefinedOn(e.node)){for(var a=[],s=n.getIterator(pc.Wrap),u=s.getNext();u;)u.name!==e.name&&a.push(u),u=s.getNext();return a.push(e),jc(a,o.getCompare())}return Fc}var c=n.get(e.name),l=t;return c&&(l=l.remove(new pc(e.name,c))),l.insert(e,e.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(e,n){return new t(en(this.indexes_,(function(t){if(t===Fc)return t;var r=n.get(e.name);return r?t.remove(new pc(e.name,r)):t})),this.indexSet_)}}],[{key:"Default",get:function(){return It(Fc&&Ac,"ChildrenNode.ts has not been loaded"),Pc=Pc||new t({".priority":Fc},{".priority":Ac})}}]),t}(),qc=function(){"use strict";function t(n,r,i){e(v)(this,t),this.children_=n,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Rc(this.priorityNode_),this.children_.isEmpty()&&It(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return e(k)(t,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||Oc}},{key:"updatePriority",value:function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?Oc:t}},{key:"getChild",value:function(e){var t=Qu(e);return null===t?this:this.getImmediateChild(t).getChild(Xu(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(e,n){if(It(n,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(n);var r,i,o=new pc(e,n);n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(o,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(o,this.children_));var a=r.isEmpty()?Oc:this.priorityNode_;return new t(r,a,i)}},{key:"updateChild",value:function(e,t){var n=Qu(e);if(null===n)return t;It(".priority"!==Qu(e)||1===$u(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(Xu(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(e){if(this.isEmpty())return null;var n={},r=0,i=0,o=!0;if(this.forEachChild(Ac,(function(a,s){n[a]=s.val(e),r++,o&&t.INTEGER_REGEXP_.test(a)?i=Math.max(i,Number(a)):o=!1})),!e&&o&&i<2*r){var a=[];for(var s in n)a[s]=n[s];return a}return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+Ec(this.getPriority().val())+":"),this.forEachChild(Ac,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":$s(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new pc(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new pc(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new pc(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,pc.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,pc.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wc?-1:0}},{key:"withIndex",value:function(e){if(e===yc||this.indexMap_.hasIndex(e))return this;var n=this.indexMap_.addIndex(e,this.children_);return new t(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===yc||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(Ac),r=t.getIterator(Ac),i=n.getNext(),o=r.getNext();i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return null===i&&null===o}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===yc?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return Oc||(Oc=new t(new wc(Tc),null,Uc.Default))}}]),t}();qc.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var Wc=new(function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(){return e(v)(this,r),n.call(this,new wc(Tc),qc.EMPTY_NODE,Uc.Default)}return e(k)(r,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return qc.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),r}(qc));Object.defineProperties(pc,{MIN:{value:new pc(uu,qc.EMPTY_NODE)},MAX:{value:new pc(cu,Wc)}}),mc.__EMPTY_NODE=qc.EMPTY_NODE,Nc.__childrenNodeConstructor=qc,kc=Wc,function(e){Sc=e}(Wc);function Hc(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===t)return qc.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(n=t[".priority"]),It(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+(void 0===n?"undefined":e(Us)(n))),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){var r=t;return new Nc(r,Hc(n))}if(t instanceof Array){var i=qc.EMPTY_NODE;return vu(t,(function(e,n){if($t(t,e)&&"."!==e.substring(0,1)){var r=Hc(n);!r.isLeafNode()&&r.isEmpty()||(i=i.updateImmediateChild(e,r))}})),i.updatePriority(Hc(n))}var o=[],a=!1,s=t;if(vu(s,(function(e,t){if("."!==e.substring(0,1)){var n=Hc(t);n.isEmpty()||(a=a||!n.getPriority().isEmpty(),o.push(new pc(e,n)))}})),0===o.length)return qc.EMPTY_NODE;var u=jc(o,Ic,(function(e){return e.name}),Tc);if(a){var c=jc(o,Ac.getCompare());return new qc(u,Hc(n),new Uc({".priority":c},{".priority":Ac}))}return new qc(u,Hc(n),Uc.Default)}!function(e){xc=e}(Hc);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vc,zc,Bc=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(t){var i;return e(v)(this,r),(i=n.call(this)).indexPath_=t,It(!rc(t)&&".priority"!==Qu(t),"Can't create PathIndex with empty path or .priority key"),i}return e(k)(r,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?lu(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=Hc(e),r=qc.EMPTY_NODE.updateChild(this.indexPath_,n);return new pc(t,r)}},{key:"maxPost",value:function(){var e=qc.EMPTY_NODE.updateChild(this.indexPath_,Wc);return new pc(cu,e)}},{key:"toString",value:function(){return ec(this.indexPath_,0).join("/")}}]),r}(vc),Kc=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(){return e(v)(this,r),n.apply(this,arguments)}return e(k)(r,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?lu(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return pc.MIN}},{key:"maxPost",value:function(){return pc.MAX}},{key:"makePost",value:function(e,t){var n=Hc(e);return new pc(t,n)}},{key:"toString",value:function(){return".value"}}]),r}(vc),Gc=new Kc,Jc="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vc=0,zc=[];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yc(e){return{type:"value",snapshotNode:e}}function Qc(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function $c(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Xc(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Zc=function(){"use strict";function t(){e(v)(this,t),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ac}return e(k)(t,[{key:"hasStart",value:function(){return this.startSet_}},{key:"hasStartAfter",value:function(){return this.startAfterSet_}},{key:"hasEndBefore",value:function(){return this.endBeforeSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return It(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return It(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:uu}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return It(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return It(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cu}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return It(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===Ac}},{key:"copy",value:function(){var e=new t;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(e){var t,n={};return e.isDefault()||(e.index_===Ac?t="$priority":e.index_===Gc?t="$value":e.index_===yc?t="$key":(It(e.index_ instanceof Bc,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=Jt(t),e.startSet_&&(n.startAt=Jt(e.indexStartValue_),e.startNameSet_&&(n.startAt+=","+Jt(e.indexStartName_))),e.endSet_&&(n.endAt=Jt(e.indexEndValue_),e.endNameSet_&&(n.endAt+=","+Jt(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_)),n}function tl(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Ac&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nl=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(t,i,o,a){var s;return e(v)(this,r),(s=n.call(this)).repoInfo_=t,s.onDataUpdate_=i,s.authTokenProvider_=o,s.appCheckTokenProvider_=a,s.log_=ru("p:rest:"),s.listens_={},s}return e(k)(r,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,n,i){var o=this,a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);var s=r.getListenId_(e,n),u={};this.listens_[s]=u;var c=el(e._queryParams);this.restRequest_(a+".json",c,(function(e,t){var r=t;(404===e&&(r=null,e=null),null===e&&o.onDataUpdate_(a,r,!1,n),Xt(o.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var n=r.getListenId_(e,t);delete this.listens_[n]}},{key:"get",value:function(e){var t=this,n=el(e._queryParams),r=e._path.toString(),i=new Wt;return this.restRequest_(r+".json",n,(function(e,n){var o=n;404===e&&(o=null,e=null),null===e?(t.onDataUpdate_(r,o,!1,null),i.resolve(o)):i.reject(new Error(o))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=this;return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(o){var a=e(Fe)(o,2),s=a[0],u=a[1],c=i;s&&s.accessToken&&(n.auth=s.accessToken),u&&u.token&&(n.ac=u.token);var l=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+t+"?ns="+i.repoInfo_.namespace+rn(n);i.log_("Sending REST request for "+l);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(r&&4===h.readyState){c.log_("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);var e=null;if(h.status>=200&&h.status<300){try{e=Gt(h.responseText)}catch(e){au("Failed to parse JSON response for "+l+": "+h.responseText)}r(null,e)}else 401!==h.status&&404!==h.status&&au("Got unsuccessful REST response for "+l+" Status: "+h.status),r(h.status);r=null}},h.open("GET",l,!0),h.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:(It(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),r}(Bu),rl=function(){"use strict";function t(){e(v)(this,t),this.rootNode_=qc.EMPTY_NODE}return e(k)(t,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function il(){return{value:null,children:new Map}}function ol(e,t,n){if(rc(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=Qu(t);e.children.has(r)||e.children.set(r,il()),ol(e.children.get(r),t=Xu(t),n)}}function al(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,(function(e,r){al(r,new Ju(t.toString()+"/"+e),n)}))}var sl,ul,cl=function(){"use strict";function t(n){e(v)(this,t),this.collection_=n,this.last_=null}return e(k)(t,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&vu(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),t}(),ll=function(){"use strict";function t(n,r){e(v)(this,t),this.server_=r,this.statsToReport_={},this.statsListener_=new cl(n);var i=1e4+2e4*Math.random();wu(this.reportStats_.bind(this),Math.floor(i))}return e(k)(t,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;vu(t,(function(t,i){i>0&&$t(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),wu(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ul=sl||(sl={}))[ul.OVERWRITE=0]="OVERWRITE",ul[ul.MERGE=1]="MERGE",ul[ul.ACK_USER_WRITE=2]="ACK_USER_WRITE",ul[ul.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var dl,fl=function(){"use strict";function t(n,r,i){e(v)(this,t),this.path=n,this.affectedTree=r,this.revert=i,this.type=sl.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return e(k)(t,[{key:"operationForChild",value:function(e){if(rc(this.path)){if(null!=this.affectedTree.value)return It(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new Ju(e));return new t(Yu(),n,this.revert)}return It(Qu(this.path)===e,"operationForChild called for unrelated child."),new t(Xu(this.path),this.affectedTree,this.revert)}}]),t}(),pl=function(){"use strict";function t(n,r,i){e(v)(this,t),this.source=n,this.path=r,this.snap=i,this.type=sl.OVERWRITE}return e(k)(t,[{key:"operationForChild",value:function(e){return rc(this.path)?new t(this.source,Yu(),this.snap.getImmediateChild(e)):new t(this.source,Xu(this.path),this.snap)}}]),t}(),vl=function(){"use strict";function t(n,r,i){e(v)(this,t),this.source=n,this.path=r,this.children=i,this.type=sl.MERGE}return e(k)(t,[{key:"operationForChild",value:function(e){if(rc(this.path)){var n=this.children.subtree(new Ju(e));return n.isEmpty()?null:n.value?new pl(this.source,Yu(),n.value):new t(this.source,Yu(),n)}return It(Qu(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,Xu(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),t}(),ml=function(){"use strict";function t(n,r,i){e(v)(this,t),this.node_=n,this.fullyInitialized_=r,this.filtered_=i}return e(k)(t,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(rc(e))return this.isFullyInitialized()&&!this.filtered_;var t=Qu(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(e,t,n,r,i,o){var a=r.filter((function(e){return e.type===n}));a.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw Tt("Should only compare child_ events.");var r=new pc(t.childName,t.snapshotNode),i=new pc(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n)})),a.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function _l(e,t){return{eventCache:e,serverCache:t}}function gl(e,t,n,r){return _l(new ml(t,n,r),e.serverCache)}function kl(e,t,n,r){return _l(e.eventCache,new ml(t,n,r))}function bl(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function wl(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Il=function(){return dl||(dl=new wc(hu)),dl},Tl=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Il();e(v)(this,t),this.value=n,this.children=r}return e(k)(t,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:Yu(),value:this.value};if(rc(e))return null;var n=Qu(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(Xu(e),t);return null!=i?{path:nc(new Ju(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(e){if(rc(e))return this;var n=Qu(e),r=this.children.get(n);return null!==r?r.subtree(Xu(e)):new t(null)}},{key:"set",value:function(e,n){if(rc(e))return new t(n,this.children);var r=Qu(e),i=(this.children.get(r)||new t(null)).set(Xu(e),n),o=this.children.insert(r,i);return new t(this.value,o)}},{key:"remove",value:function(e){if(rc(e))return this.children.isEmpty()?new t(null):new t(null,this.children);var n=Qu(e),r=this.children.get(n);if(r){var i,o=r.remove(Xu(e));return i=o.isEmpty()?this.children.remove(n):this.children.insert(n,o),null===this.value&&i.isEmpty()?new t(null):new t(this.value,i)}return this}},{key:"get",value:function(e){if(rc(e))return this.value;var t=Qu(e),n=this.children.get(t);return n?n.get(Xu(e)):null}},{key:"setTree",value:function(e,n){if(rc(e))return n;var r,i=Qu(e),o=(this.children.get(i)||new t(null)).setTree(Xu(e),n);return r=o.isEmpty()?this.children.remove(i):this.children.insert(i,o),new t(this.value,r)}},{key:"fold",value:function(e){return this.fold_(Yu(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(nc(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,Yu(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(rc(e))return null;var i=Qu(e),o=this.children.get(i);return o?o.findOnPath_(Xu(e),nc(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,Yu(),t)}},{key:"foreachOnPath_",value:function(e,n,r){if(rc(e))return this;this.value&&r(n,this.value);var i=Qu(e),o=this.children.get(i);return o?o.foreachOnPath_(Xu(e),nc(n,i),r):new t(null)}},{key:"foreach",value:function(e){this.foreach_(Yu(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(nc(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(e){var n=new t(null);return vu(e,(function(e,t){n=n.set(new Ju(e),t)})),n}}]),t}(),Cl=function(){"use strict";function t(n){e(v)(this,t),this.writeTree_=n}return e(k)(t,null,[{key:"empty",value:function(){return new t(new Tl(null))}}]),t}();function xl(e,t,n){if(rc(t))return new Cl(new Tl(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,o=r.value,a=ic(i,t);return o=o.updateChild(a,n),new Cl(e.writeTree_.set(i,o))}var s=new Tl(n),u=e.writeTree_.setTree(t,s);return new Cl(u)}function Sl(e,t,n){var r=e;return vu(n,(function(e,n){r=xl(r,nc(t,e),n)})),r}function El(e,t){if(rc(t))return Cl.empty();var n=e.writeTree_.setTree(t,new Tl(null));return new Cl(n)}function Rl(e,t){return null!=Nl(e,t)}function Nl(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ic(n.path,t)):null}function Pl(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ac,(function(e,n){t.push(new pc(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new pc(e,n.value))})),t}function Ol(e,t){if(rc(t))return e;var n=Nl(e,t);return new Cl(null!=n?new Tl(n):e.writeTree_.subtree(t))}function Ll(e){return e.writeTree_.isEmpty()}function Al(e,t){return Dl(Yu(),e.writeTree_,t)}function Dl(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?(It(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Dl(nc(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(nc(e,".priority"),r)),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(e,t){return Ql(t,e)}function jl(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function Fl(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));It(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,o=!1,a=e.allWrites.length-1;i&&a>=0;){var s=e.allWrites[a];s.visible&&(a>=n&&Ul(s,r.path)?i=!1:ac(r.path,s.path)&&(o=!0)),a--}if(i){if(o)return function(e){e.visibleWrites=Wl(e.allWrites,ql,Yu()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=El(e.visibleWrites,r.path):vu(r.children,(function(t){e.visibleWrites=El(e.visibleWrites,nc(r.path,t))}));return!0}return!1}function Ul(e,t){if(e.snap)return ac(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&ac(nc(e.path,n),t))return!0;return!1}function ql(e){return e.visible}function Wl(e,t,n){for(var r=Cl.empty(),i=0;i<e.length;++i){var o=e[i];if(t(o)){var a=o.path,s=void 0;if(o.snap)ac(n,a)?r=xl(r,s=ic(n,a),o.snap):ac(a,n)&&(s=ic(a,n),r=xl(r,Yu(),o.snap.getChild(s)));else{if(!o.children)throw Tt("WriteRecord should have .snap or .children");if(ac(n,a))r=Sl(r,s=ic(n,a),o.children);else if(ac(a,n))if(rc(s=ic(a,n)))r=Sl(r,Yu(),o.children);else{var u=Xt(o.children,Qu(s));if(u){var c=u.getChild(Xu(s));r=xl(r,Yu(),c)}}}}}return r}function Hl(e,t,n,r,i){if(r||i){var o=Ol(e.visibleWrites,t);if(!i&&Ll(o))return n;if(i||null!=n||Rl(o,Yu())){return Al(Wl(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(ac(e.path,t)||ac(t,e.path))}),t),n||qc.EMPTY_NODE)}return null}var a=Nl(e.visibleWrites,t);if(null!=a)return a;var s=Ol(e.visibleWrites,t);return Ll(s)?n:null!=n||Rl(s,Yu())?Al(s,n||qc.EMPTY_NODE):null}function Vl(e,t,n,r){return Hl(e.writeTree,e.treePath,t,n,r)}function zl(e,t){return function(e,t,n){var r=qc.EMPTY_NODE,i=Nl(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Ac,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var o=Ol(e.visibleWrites,t);return n.forEachChild(Ac,(function(e,t){var n=Al(Ol(o,new Ju(e)),t);r=r.updateImmediateChild(e,n)})),Pl(o).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return Pl(Ol(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Bl(e,t,n,r){return function(e,t,n,r,i){It(r||i,"Either existingEventSnap or existingServerSnap must exist");var o=nc(t,n);if(Rl(e.visibleWrites,o))return null;var a=Ol(e.visibleWrites,o);return Ll(a)?i.getChild(n):Al(a,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function Kl(e,t){return function(e,t){return Nl(e.visibleWrites,t)}(e.writeTree,nc(e.treePath,t))}function Gl(e,t,n,r,i,o){return function(e,t,n,r,i,o,a){var s,u=Ol(e.visibleWrites,t),c=Nl(u,Yu());if(null!=c)s=c;else{if(null==n)return[];s=Al(u,n)}if((s=s.withIndex(a)).isEmpty()||s.isLeafNode())return[];for(var l=[],h=a.getCompare(),d=o?s.getReverseIteratorFrom(r,a):s.getIteratorFrom(r,a),f=d.getNext();f&&l.length<i;)0!==h(f,r)&&l.push(f),f=d.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,o)}function Jl(e,t,n){return function(e,t,n,r){var i=nc(t,n),o=Nl(e.visibleWrites,i);return null!=o?o:r.isCompleteForChild(n)?Al(Ol(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function Yl(e,t){return Ql(nc(e.treePath,t),e.writeTree)}function Ql(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $l=function(){"use strict";function t(){e(v)(this,t),this.changeMap=new Map}return e(k)(t,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;It("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),It(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Xc(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,$c(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Qc(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Tt("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Xc(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),t}(),Xl=new(function(){"use strict";function t(){e(v)(this,t)}return e(k)(t,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),t}()),Zl=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e(v)(this,t),this.writes_=n,this.viewCache_=r,this.optCompleteServerCache_=i}return e(k)(t,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new ml(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Jl(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:wl(this.viewCache_),i=Gl(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(e,t,n,r,i){var o,a,s=new $l;if(n.type===sl.OVERWRITE){var u=n;u.source.fromUser?o=rh(e,t,u.path,u.snap,r,i,s):(It(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!rc(u.path),o=nh(e,t,u.path,u.snap,r,i,a,s))}else if(n.type===sl.MERGE){var c=n;c.source.fromUser?o=function(e,t,n,r,i,o,a){var s=t;return r.foreach((function(r,u){var c=nc(n,r);ih(t,Qu(c))&&(s=rh(e,s,c,u,i,o,a))})),r.foreach((function(r,u){var c=nc(n,r);ih(t,Qu(c))||(s=rh(e,s,c,u,i,o,a))})),s}(e,t,c.path,c.children,r,i,s):(It(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=ah(e,t,c.path,c.children,r,i,a,s))}else if(n.type===sl.ACK_USER_WRITE){var l=n;o=l.revert?function(e,t,n,r,i,o){var a;if(null!=Kl(r,n))return t;var s,u=new Zl(r,t,i),c=t.eventCache.getNode();if(rc(n)||".priority"===Qu(n)){var l;if(t.serverCache.isFullyInitialized())l=Vl(r,wl(t));else{var h=t.serverCache.getNode();It(h instanceof qc,"serverChildren would be complete if leaf node"),l=zl(r,h)}s=e.filter.updateFullNode(c,l,o)}else{var d=Qu(n),f=Jl(r,d,t.serverCache);null==f&&t.serverCache.isCompleteForChild(d)&&(f=c.getImmediateChild(d)),(s=null!=f?e.filter.updateChild(c,d,f,Xu(n),u,o):t.eventCache.getNode().hasChild(d)?e.filter.updateChild(c,d,qc.EMPTY_NODE,Xu(n),u,o):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Vl(r,wl(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,a,o))}return a=t.serverCache.isFullyInitialized()||null!=Kl(r,Yu()),gl(t,s,a,e.filter.filtersNodes())}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,o,a){if(null!=Kl(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(rc(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return nh(e,t,n,u.getNode().getChild(n),i,o,s,a);if(rc(n)){var c=new Tl(null);return u.getNode().forEachChild(yc,(function(e,t){c=c.set(new Ju(e),t)})),ah(e,t,n,c,i,o,s,a)}return t}var l=new Tl(null);return r.foreach((function(e,t){var r=nc(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),ah(e,t,n,l,i,o,s,a)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==sl.LISTEN_COMPLETE)throw Tt("Unknown operation type: "+n.type);o=function(e,t,n,r,i){var o=t.serverCache,a=kl(t,o.getNode(),o.isFullyInitialized()||rc(n),o.isFiltered());return th(e,a,n,r,Xl,i)}(e,t,n.path,r,s)}var h=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=bl(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Yc(bl(t)))}}(t,o,h),{viewCache:o,changes:h}}function th(e,t,n,r,i,o){var a,s,u=t.eventCache;if(null!=Kl(r,n))return t;if(rc(n))if(It(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=wl(t),l=zl(r,c instanceof qc?c:qc.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),l,o)}else{var h=Vl(r,wl(t));a=e.filter.updateFullNode(t.eventCache.getNode(),h,o)}else{var d=Qu(n);if(".priority"===d){It(1===$u(n),"Can't have a priority with additional path components");var f=u.getNode(),p=Bl(r,n,f,s=t.serverCache.getNode());a=null!=p?e.filter.updatePriority(f,p):u.getNode()}else{var v,m=Xu(n);if(u.isCompleteForChild(d)){s=t.serverCache.getNode();var y=Bl(r,n,u.getNode(),s);v=null!=y?u.getNode().getImmediateChild(d).updateChild(m,y):u.getNode().getImmediateChild(d)}else v=Jl(r,d,t.serverCache);a=null!=v?e.filter.updateChild(u.getNode(),d,v,m,i,o):u.getNode()}}return gl(t,a,u.isFullyInitialized()||rc(n),e.filter.filtersNodes())}function nh(e,t,n,r,i,o,a,s){var u,c=t.serverCache,l=a?e.filter:e.filter.getIndexedFilter();if(rc(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var h=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),h,null)}else{var d=Qu(n);if(!c.isCompleteForPath(n)&&$u(n)>1)return t;var f=Xu(n),p=c.getNode().getImmediateChild(d).updateChild(f,r);u=".priority"===d?l.updatePriority(c.getNode(),p):l.updateChild(c.getNode(),d,p,f,Xl,null)}var v=kl(t,u,c.isFullyInitialized()||rc(n),l.filtersNodes());return th(e,v,n,i,new Zl(i,v,o),s)}function rh(e,t,n,r,i,o,a){var s,u,c=t.eventCache,l=new Zl(i,t,o);if(rc(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,a),s=gl(t,u,!0,e.filter.filtersNodes());else{var h=Qu(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=gl(t,u,c.isFullyInitialized(),c.isFiltered());else{var d,f=Xu(n),p=c.getNode().getImmediateChild(h);if(rc(f))d=r;else{var v=l.getCompleteChild(h);d=null!=v?".priority"===Zu(f)&&v.getChild(tc(f)).isEmpty()?v:v.updateChild(f,r):qc.EMPTY_NODE}if(p.equals(d))s=t;else s=gl(t,e.filter.updateChild(c.getNode(),h,d,f,l,a),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function ih(e,t){return e.eventCache.isCompleteForChild(t)}function oh(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function ah(e,t,n,r,i,o,a,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=rc(n)?r:new Tl(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=oh(0,t.serverCache.getNode().getImmediateChild(n),r);c=nh(e,c,new Ju(n),u,i,o,a,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!u){var h=oh(0,t.serverCache.getNode().getImmediateChild(n),r);c=nh(e,c,new Ju(n),h,i,o,a,s)}})),c}var sh;function uh(e,t){var n=wl(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!rc(t)&&!n.getImmediateChild(Qu(t)).isEmpty())?n.getChild(t):null}function ch(e,t,n,r){t.type===sl.MERGE&&null!==t.source.queryId&&(It(wl(e.viewCache_),"We should always have a full cache before handling merges"),It(bl(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,o,a=e.viewCache_,s=eh(e.processor_,a,t,n,r);return i=e.processor_,o=s.viewCache,It(o.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),It(o.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),It(s.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,lh(e,s.changes,s.viewCache.eventCache.getNode(),null)}function lh(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],o=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),yl(e,i,"child_removed",t,r,n),yl(e,i,"child_added",t,r,n),yl(e,i,"child_moved",o,r,n),yl(e,i,"child_changed",t,r,n),yl(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hh;function dh(e,t,n,r){var i=t.source.queryId;if(null!==i){var o=e.views.get(i);return It(null!=o,"SyncTree gave us an op for an invalid query."),ch(o,t,n,r)}var a=[],s=!0,u=!1,c=void 0;try{for(var l,h=e.views.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var d=l.value;a=a.concat(ch(d,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return a}function fh(e,t){var n=null,r=!0,i=!1,o=void 0;try{for(var a,s=e.views.values()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;n=n||uh(u,t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}var ph=function t(n){"use strict";e(v)(this,t),this.listenProvider_=n,this.syncPointTree_=new Tl(null),this.pendingWriteTree_={visibleWrites:Cl.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function vh(e,t,n,r,i){return function(e,t,n,r,i){It(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=xl(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?kh(e,new pl({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function mh(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=jl(e.pendingWriteTree_,t),i=Fl(e.pendingWriteTree_,t);if(i){var o=new Tl(null);return null!=r.snap?o=o.set(Yu(),!0):vu(r.children,(function(e){o=o.set(new Ju(e),!0)})),kh(e,new fl(r.path,o,n))}return[]}function yh(e,t,n){return kh(e,new pl({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function _h(e,t,n,r){var i=Ih(e,r);if(null!=i){var o=Th(i),a=o.path,s=o.queryId,u=ic(a,t);return Ch(e,a,new pl(hl(s),u,n))}return[]}function gh(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=fh(n,ic(e,t));if(r)return r}));return Hl(r,t,i,n,!0)}function kh(e,t){return bh(t,e.syncPointTree_,null,Ml(e.pendingWriteTree_,Yu()))}function bh(e,t,n,r){if(rc(e.path))return wh(e,t,n,r);var i=t.get(Yu());null==n&&null!=i&&(n=fh(i,Yu()));var o=[],a=Qu(e.path),s=e.operationForChild(a),u=t.children.get(a);if(u&&s){var c=n?n.getImmediateChild(a):null,l=Yl(r,a);o=o.concat(bh(s,u,c,l))}return i&&(o=o.concat(dh(i,e,r,n))),o}function wh(e,t,n,r){var i=t.get(Yu());null==n&&null!=i&&(n=fh(i,Yu()));var o=[];return t.children.inorderTraversal((function(t,i){var a=n?n.getImmediateChild(t):null,s=Yl(r,t),u=e.operationForChild(t);u&&(o=o.concat(wh(u,i,a,s)))})),i&&(o=o.concat(dh(i,e,r,n))),o}function Ih(e,t){return e.tagToQueryMap.get(t)}function Th(e){var t=e.indexOf("$");return It(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Ju(e.substr(0,t))}}function Ch(e,t,n){var r=e.syncPointTree_.get(t);return It(r,"Missing sync point for query tag that we're tracking"),dh(r,n,Ml(e.pendingWriteTree_,t),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xh=function(){"use strict";function t(n){e(v)(this,t),this.node_=n}return e(k)(t,[{key:"getImmediateChild",value:function(e){return new t(this.node_.getImmediateChild(e))}},{key:"node",value:function(){return this.node_}}]),t}(),Sh=function(){"use strict";function t(n,r){e(v)(this,t),this.syncTree_=n,this.path_=r}return e(k)(t,[{key:"getImmediateChild",value:function(e){var n=nc(this.path_,e);return new t(this.syncTree_,n)}},{key:"node",value:function(){return gh(this.syncTree_,this.path_)}}]),t}(),Eh=function(e,t,n){return e&&"object"==typeof e?(It(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Rh(e[".sv"],t,n):"object"==typeof e[".sv"]?Nh(e[".sv"],t):void It(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Rh=function(e,t,n){if("timestamp"===e)return n.timestamp;It(!1,"Unexpected server value: "+e)},Nh=function(e,t,n){e.hasOwnProperty("increment")||It(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&It(!1,"Unexpected increment value: "+r);var i=t.node();if(It(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var o=i.getValue();return"number"!=typeof o?r:o+r},Ph=function(e,t,n,r){return Lh(t,new Sh(n,e),r)},Oh=function(e,t,n){return Lh(e,new xh(t),n)};function Lh(e,t,n){var r,i=e.getPriority().val(),o=Eh(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var a=e,s=Eh(a.getValue(),t,n);return s!==a.getValue()||o!==a.getPriority().val()?new Nc(s,Hc(o)):e}var u=e;return r=u,o!==u.getPriority().val()&&(r=r.updatePriority(new Nc(o))),u.forEachChild(Ac,(function(e,i){var o=Lh(i,t.getImmediateChild(e),n);o!==i&&(r=r.updateImmediateChild(e,o))})),r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ah=function t(){"use strict";var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};e(v)(this,t),this.name=n,this.parent=r,this.node=i};function Dh(e,t){for(var n=t instanceof Ju?t:new Ju(t),r=e,i=Qu(n);null!==i;){var o=Xt(r.node.children,i)||{children:{},childCount:0};r=new Ah(i,r,o),i=Qu(n=Xu(n))}return r}function Mh(e){return e.node.value}function jh(e,t){e.node.value=t,Hh(e)}function Fh(e){return e.node.childCount>0}function Uh(e,t){vu(e.node.children,(function(n,r){t(new Ah(n,e,r))}))}function qh(e,t,n,r){n&&!r&&t(e),Uh(e,(function(e){qh(e,t,!0,r)})),n&&r&&t(e)}function Wh(e){return new Ju(null===e.parent?e.name:Wh(e.parent)+"/"+e.name)}function Hh(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===Mh(e)&&!Fh(e)}(n),i=$t(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Hh(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Hh(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}var Vh=/[\[\].#$\/\u0000-\u001F\u007F]/,zh=/[\[\].#$\u0000-\u001F\u007F]/,Bh=10485760,Kh=function(e){return"string"==typeof e&&0!==e.length&&!Vh.test(e)},Gh=function(e){return"string"==typeof e&&0!==e.length&&!zh.test(e)},Jh=function(e,t,n,r){r&&void 0===t||Yh(ln(e,"value"),t,n)},Yh=function(e,t,n){var r=n instanceof Ju?new sc(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+cc(r));if("function"==typeof t)throw new Error(e+"contains a function "+cc(r)+" with contents = "+t.toString());if(su(t))throw new Error(e+"contains "+t.toString()+" "+cc(r));if("string"==typeof t&&t.length>3495253.3333333335&&dn(t)>Bh)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+cc(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,o=!1;if(vu(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(o=!0,!Kh(t)))throw new Error(e+" contains an invalid key ("+t+") "+cc(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,s;s=t,(a=r).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(s),a.byteLength_+=dn(s),uc(a),Yh(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=dn(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&o)throw new Error(e+' contains ".value" child '+cc(r)+" in addition to actual children.")}},Qh=function(e,t,n,r){if(!(r&&void 0===n||Gh(n)))throw new Error(ln(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},$h=function(e,t){if(".info"===Qu(t))throw new Error(e+" failed = Can't modify data under /.info/")},Xh=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Kh(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Gh(e)}(n))throw new Error(ln(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},Zh=function t(){"use strict";e(v)(this,t),this.eventLists_=[],this.recursionDepth_=0};function ed(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],o=i.getPath();null===n||oc(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function td(e,t,n){ed(e,n),nd(e,(function(e){return ac(e,t)||ac(t,e)}))}function nd(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(rd(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function rd(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();Zs&&nu("event: "+n.toString()),bu(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var id="repo_interrupt",od=function(){"use strict";function t(n,r,i,o){e(v)(this,t),this.repoInfo_=n,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Zh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=il(),this.transactionQueueTree_=new Ah,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e(k)(t,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),t}();function ad(e,t,n){if(e.stats_=Du(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new nl(e.repoInfo_,(function(t,n,r,i){cd(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return ld(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Jt(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new dc(e.repoInfo_,t,(function(t,n,r,i){cd(e,t,n,r,i)}),(function(t){ld(e,t)}),(function(t){!function(e,t){vu(t,(function(t,n){hd(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,o;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new ll(e.stats_,e.server_)},o=r.toString(),Au[o]||(Au[o]=i()),Au[o]),e.infoData_=new rl,e.infoSyncTree_=new ph({startListening:function(t,n,r,i){var o=[],a=e.infoData_.getNode(t._path);return a.isEmpty()||(o=yh(e.infoSyncTree_,t._path,a),setTimeout((function(){i("ok")}),0)),o},stopListening:function(){}}),hd(e,"connected",!1),e.serverSyncTree_=new ph({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var o=i(n,r);td(e.eventQueue_,t._path,o)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function sd(e){var t=e.infoData_.getNode(new Ju(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function ud(e){return(t=(t={timestamp:sd(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function cd(e,t,n,r,i){e.dataUpdateCount++;var o=new Ju(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var a=[];if(i)if(r){var s=en(n,(function(e){return Hc(e)}));a=function(e,t,n,r){var i=Ih(e,r);if(i){var o=Th(i),a=o.path,s=o.queryId,u=ic(a,t),c=Tl.fromObject(n);return Ch(e,a,new vl(hl(s),u,c))}return[]}(e.serverSyncTree_,o,s,i)}else{var u=Hc(n);a=_h(e.serverSyncTree_,o,u,i)}else if(r){var c=en(n,(function(e){return Hc(e)}));a=function(e,t,n){var r=Tl.fromObject(n);return kh(e,new vl({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,o,c)}else{var l=Hc(n);a=yh(e.serverSyncTree_,o,l)}var h=o;a.length>0&&(h=kd(e,o)),td(e.eventQueue_,h,a)}function ld(e,t){hd(e,"connected",t),!1===t&&function(e){vd(e,"onDisconnectEvents");var t=ud(e),n=il();al(e.onDisconnect_,Yu(),(function(r,i){var o=Ph(r,i,e.serverSyncTree_,t);ol(n,r,o)}));var r=[];al(n,Yu(),(function(t,n){r=r.concat(yh(e.serverSyncTree_,t,n));var i=Cd(e,t);kd(e,i)})),e.onDisconnect_=il(),td(e.eventQueue_,Yu(),r)}(e)}function hd(e,t,n){var r=new Ju("/.info/"+t),i=Hc(n);e.infoData_.updateSnapshot(r,i);var o=yh(e.infoSyncTree_,r,i);td(e.eventQueue_,r,o)}function dd(e){return e.nextWriteId_++}function fd(e,t,n,r,i){vd(e,"set",{path:t.toString(),value:n,priority:r});var o=ud(e),a=Hc(n,r),s=gh(e.serverSyncTree_,t),u=Oh(a,s,o),c=dd(e),l=vh(e.serverSyncTree_,t,u,c,!0);ed(e.eventQueue_,l),e.server_.put(t.toString(),a.val(!0),(function(n,r){var o="ok"===n;o||au("set at "+t+" failed: "+n);var a=mh(e.serverSyncTree_,c,!o);td(e.eventQueue_,t,a),md(e,i,n,r)}));var h=Cd(e,t);kd(e,h),td(e.eventQueue_,h,[])}function pd(e){e.persistentConnection_&&e.persistentConnection_.interrupt(id)}function vd(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o="";t.persistentConnection_&&(o=t.persistentConnection_.id+":"),nu.apply(void 0,[o].concat(e(Oe)(r)))}function md(e,t,n,r){t&&bu((function(){if("ok"===n)t(null);else{var e=(n||"error").toUpperCase(),i=e;r&&(i+=": "+r);var o=new Error(i);o.code=e,t(o)}}))}function yd(e,t,n){return gh(e.serverSyncTree_,t,n)||qc.EMPTY_NODE}function _d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||Td(e,t),Mh(t)){var n=wd(e,t);It(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&gd(e,Wh(t),n)}else Fh(t)&&Uh(t,(function(t){_d(e,t)}))}function gd(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=yd(e,t,r),o=i,a=i.hash(),s=0;s<n.length;s++){var u=n[s];It(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=ic(t,u.path);o=o.updateChild(c,u.currentOutputSnapshotRaw)}var l=o.val(!0),h=t;e.server_.put(h.toString(),l,(function(r){vd(e,"transaction put response",{path:h.toString(),status:r});var i=[];if("ok"===r){for(var o=function(t){n[t].status=2,i=i.concat(mh(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&a.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},a=[],s=0;s<n.length;s++)o(s);Td(e,Dh(e.transactionQueueTree_,t)),_d(e,e.transactionQueueTree_),td(e.eventQueue_,t,i);for(var u=0;u<a.length;u++)bu(a[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{au("transaction at "+h.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}kd(e,t)}}),a)}function kd(e,t){var n=bd(e,t),r=Wh(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=ic(n,u.path),l=!1,h=void 0;if(It(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,h=u.abortReason,o=o.concat(mh(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,h="maxretry",o=o.concat(mh(e.serverSyncTree_,u.currentWriteId,!0));else{var d=yd(e,u.path,a);u.currentInputSnapshot=d;var f=t[r].update(d.val());if(void 0!==f){Yh("transaction failed: Data returned ",f,u.path);var p=Hc(f);"object"==typeof f&&null!=f&&$t(f,".priority")||(p=p.updatePriority(d.getPriority()));var v=u.currentWriteId,m=ud(e),y=Oh(p,d,m);u.currentOutputSnapshotRaw=p,u.currentOutputSnapshotResolved=y,u.currentWriteId=dd(e),a.splice(a.indexOf(v),1),o=(o=o.concat(vh(e.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally))).concat(mh(e.serverSyncTree_,v,!0))}else l=!0,h="nodata",o=o.concat(mh(e.serverSyncTree_,u.currentWriteId,!0))}td(e.eventQueue_,n,o),o=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(h),!1,null)}))))};if(0===t.length)return;for(var i=[],o=[],a=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);Td(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)bu(i[u]);_d(e,e.transactionQueueTree_)}(e,wd(e,n),r),r}function bd(e,t){var n,r=e.transactionQueueTree_;for(n=Qu(t);null!==n&&void 0===Mh(r);)r=Dh(r,n),n=Qu(t=Xu(t));return r}function wd(e,t){var n=[];return Id(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function Id(e,t,n){var r=Mh(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);Uh(t,(function(t){Id(e,t,n)}))}function Td(e,t){var n=Mh(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,jh(t,n.length>0?n:void 0)}Uh(t,(function(t){Td(e,t)}))}function Cd(e,t){var n=Wh(bd(e,t)),r=Dh(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){xd(e,t)})),xd(e,r),qh(r,(function(t){xd(e,t)})),n}function xd(e,t){var n=Mh(t);if(n){for(var r=[],i=[],o=-1,a=0;a<n.length;a++)3===n[a].status||(1===n[a].status?(It(o===a-1,"All SENT items should be at beginning of queue."),o=a,n[a].status=3,n[a].abortReason="set"):(It(0===n[a].status,"Unexpected transaction status in abort"),n[a].unwatcher(),i=i.concat(mh(e.serverSyncTree_,n[a].currentWriteId,!0)),n[a].onComplete&&r.push(n[a].onComplete.bind(null,new Error("set"),!1,null))));-1===o?jh(t,void 0):n.length=o+1,td(e.eventQueue_,Wh(t),i);for(var s=0;s<r.length;s++)bu(r[s])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sd=function(e,t){var n=Ed(e),r=n.namespace;"firebase.com"===n.domain&&ou(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||ou("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&au("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Nu(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Ju(n.pathString)}},Ed=function(e){var t="",n="",r="",i="",o="",a=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,h)));var d=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var o,a=e.split("&")[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):au("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,h)));(c=t.indexOf(":"))>=0?(a="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{var p=t.indexOf(".");r=t.substring(0,p).toLowerCase(),n=t.substring(p+1),o=r}"ns"in d&&(o=d.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:a,scheme:s,pathString:i,namespace:o}},Rd=function(){"use strict";function t(n,r,i,o){e(v)(this,t),this._repo=n,this._path=r,this._queryParams=i,this._orderByCalled=o}return e(k)(t,[{key:"key",get:function(){return rc(this._path)?null:Zu(this._path)}},{key:"ref",get:function(){return new Nd(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=tl(this._queryParams),t=fu(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return tl(this._queryParams)}},{key:"isEqual",value:function(e){if(!((e=fn(e))instanceof t))return!1;var n=this._repo===e._repo,r=oc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),t}();var Nd=function(t){"use strict";e(Be)(r,t);var n=e(et)(r);function r(t,i){return e(v)(this,r),n.call(this,t,i,new Zc,!1)}return e(k)(r,[{key:"parent",get:function(){var e=tc(this._path);return null===e?null:new r(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),r}(Rd);function Pd(e,t){return(e=fn(e))._checkNotDeleted("ref"),void 0!==t?Od(e._root,t):e._root}function Od(e,t){var n,r,i,o;return null===Qu((e=fn(e))._path)?(n="child",r="path",o=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Qh(n,r,i,o)):Qh("child","path",t,!1),new Nd(e._repo,nc(e._path,t))}function Ld(e,t){e=fn(e),$h("set",e._path),Jh("set",t,e._path,!1);var n=new Wt;return fd(e._repo,e._path,t,null,n.wrapCallback((function(){}))),n.promise}!function(e){It(!sh,"__referenceConstructor has already been defined"),sh=e}(Nd),function(e){It(!hh,"__referenceConstructor has already been defined"),hh=e}(Nd);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ad={},Dd=!1;function Md(e,t,n,r){e.repoInfo_=new Nu("".concat(t,":").concat(n),!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}function jd(e,t,n,r,i){var o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||ou("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nu("Using default host for project ",e.options.projectId),o="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var a,s=Sd(o,i),u=s.repoInfo,c=void 0;void 0!==ot&&ot.env&&(c=ot.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(a=!0,o="http://".concat(c,"?ns=").concat(u.namespace),u=(s=Sd(o,i)).repoInfo):a=!s.repoInfo.secure;var l=i&&a?new Cu(Cu.OWNER):new Tu(e.name,e.options,t);Xh("Invalid Firebase Database URL",s),rc(s.path)||ou("Database URL must point to the root of a Firebase Database (not including a child path).");var h=function(e,t,n,r){var i=Ad[t.name];i||(i={},Ad[t.name]=i);var o=i[e.toURLString()];o&&ou("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new od(e,Dd,n,r),i[e.toURLString()]=o,o}(u,e,l,new Iu(e.name,n));return new Fd(h,e)}var Fd=function(){"use strict";function t(n,r){e(v)(this,t),this._repoInternal=n,this.app=r,this.type="database",this._instanceStarted=!1}return e(k)(t,[{key:"_repo",get:function(){return this._instanceStarted||(ad(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new Nd(this._repo,Yu())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=Ad[t])&&n[e.key]===e||ou("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),pd(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&ou("Cannot call "+e+" on a deleted database.")}}]),t}();function Ud(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(e=fn(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&ou("Cannot call useEmulator() after instance has already been initialized.");var i=e._repoInternal,o=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ou('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Cu(Cu.OWNER);else if(r.mockUserToken){var a="string"==typeof r.mockUserToken?r.mockUserToken:Ht(r.mockUserToken,e.app.options.projectId);o=new Cu(a)}Md(i,t,n,o)}dc.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},dc.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Hs=ur,rr(new pn("database",(function(e,t){var n=t.instanceIdentifier;return jd(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),hr(qs,Ws,e),hr(qs,Ws,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();var qd=cr({apiKey:"AIzaSyARB7IoC0JprBpfrU3Ehfw4t6yt6QUbzT0",authDomain:"cocktails-teamproject.firebaseapp.com",projectId:"cocktails-teamproject",storageBucket:"cocktails-teamproject.appspot.com",messagingSenderId:"738965521166",appId:"1:738965521166:web:18b2c801811c2fb026cd5f",databaseURL:"https://cocktails-teamproject-default-rtdb.europe-west1.firebasedatabase.app/"}),Wd=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lr(),n=arguments.length>1?arguments[1]:void 0,r=ir(t,"database").getImmediate({identifier:n}),i=Ft("database");if(i){var o=e(Fe)(i.split(":"),2),a=o[0],s=o[1];Ud(r,a,parseInt(s,10))}return r}(qd),Hd=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lr(),t=ir(e,"auth");if(t.isInitialized())return t.getImmediate();var n=Br(e,{popupRedirectResolver:Rs,persistence:[Sa,ra,oa]}),r=qt("authTokenSyncURL");if(r){var i=Fs(r);Xo(n,i,(function(){return i(n.currentUser)})),$o(n,(function(e){return i(e)}))}var o=Ft("auth");return o&&no(n,"http://".concat(o)),n}(qd),Vd=document.querySelector(".auth-btn"),zd=document.querySelector("#registration-form"),Bd=document.querySelector(".registration-btn"),Kd=document.querySelector(".reg-form-title"),Gd=document.querySelector(".back-drop-reg"),Jd=document.querySelector(".signin-btn"),Yd=document.querySelector(".logout-btn"),Qd=document.querySelector(".cocktails__list"),$d=document.querySelector(".not-found"),Xd=document.querySelector(".cocktails__title");function Zd(){Gd.classList.add("is-hide")}Bd.addEventListener("click",(function(e){e.preventDefault();var t=zd.elements.email.value,n=zd.elements.password.value;Jo(Hd,t,n).then((function(e){console.log(e),console.log("registration successful");e.user})).catch((function(e){var t=e.code,n=e.message;console.log(t,n)}))})),Jd.addEventListener("click",(function(e){e.preventDefault();var t=zd.elements.email.value,n=zd.elements.password.value;Qo(Hd,t,n).then((function(e){e.user;console.log("success sign in")})).catch((function(e){e.code;var t=e.message;console.log(t)}))})),Yd.addEventListener("click",(function(e){(t=Hd,fn(t).signOut()).then((function(){console.log("sign out successful")})).catch((function(e){}));var t})),Vd.addEventListener("click",(function(){Gd.classList.remove("is-hide")})),document.querySelector(".reg-close-btn").addEventListener("click",Zd),Gd.addEventListener("click",(function(e){e.target===e.currentTarget&&Zd()}));var ef,tf,nf,rf="";ef=function(e){e?(rf=e.uid,console.log("sign changed",rf),Kd.textContent="Success! ✔",Kd.classList.add("success-auth"),document.querySelector(".reg-form").style.display="none",setTimeout((function(){Gd.classList.add("is-hide"),Kd.textContent="Please log in or create new account",Kd.classList.remove("success-auth"),document.querySelector(".reg-form").style.display="block"}),1e3),Vd.style.backgroundColor="#f3f503"):(console.log("signed out"),Kd.textContent="Success! ✔",Kd.classList.add("success-auth"),document.querySelector(".reg-form").style.display="none",setTimeout((function(){Gd.classList.add("is-hide"),Kd.textContent="Please log in or create new account",Kd.classList.remove("success-auth"),document.querySelector(".reg-form").style.display="block"}),1e3),Vd.style.backgroundColor="transparent",rf="")},fn(Hd).onAuthStateChanged(ef,tf,nf);var of=document.querySelector(".cocktails.section"),af=document.querySelector(".js-fav-cocktail"),sf=document.querySelector(".js-fav-ingr"),uf=document.querySelector(".modal__ingredients");function cf(e){console.log("add list"),e.target.classList.contains("btn-add-fav")&&rf&&(console.log("sync"),Ld(Pd(Wd,"favoriteIngr/"+rf),{savedIngr:l("ingridients")}))}of.addEventListener("click",(function(e){e.target.classList.contains("btn-add")&&rf&&(t=rf,Ld(Pd(Wd,"favorite/"+t),{savedDrinks:l("cocktails")}));var t})),uf.addEventListener("click",cf),Qd.addEventListener("click",cf),document.querySelector(".modal__cocktails").addEventListener("click",cf),af.addEventListener("click",(function(t){var n,r;t.preventDefault(),(r=rf,fetch("https://cocktails-teamproject-default-rtdb.europe-west1.firebasedatabase.app/favorite/".concat(r,".json")).then((function(e){return e.json().then((function(e){return Object.values(e)}))}))).then((n=e(Se)(e(Re).mark((function t(n){var r,i;return e(Re).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],$d.classList.add("is-hidden"),Xd.classList.remove("is-hidden"),i=n[0].map(function(){var t=e(Se)(e(Re).mark((function t(n){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=6,Promise.all(i);case 6:t.sent.map((function(e){var t=e.drinks;r.push(t[0])})),console.log(r),document.querySelector(".hero").style.display="none",Xd.innerHTML="Favorite cocktails",Qd.innerHTML=u(r),document.querySelectorAll(".btn-add").forEach((function(e){e.textContent="Remove"}));case 14:case"end":return t.stop()}}),t)}))),function(e){return n.apply(this,arguments)})).catch((function(e){console.log(e),Qd.innerHTML="",$d.classList.remove("is-hidden"),Xd.classList.add("is-hidden")}))})),sf.addEventListener("click",(function(t){var n,r;t.preventDefault(),$d.classList.add("is-hidden"),Xd.classList.remove("is-hidden"),(r=rf,fetch("https://cocktails-teamproject-default-rtdb.europe-west1.firebasedatabase.app/favoriteIngr/".concat(r,".json")).then((function(e){return e.json().then((function(e){return Object.values(e)}))}))).then((n=e(Se)(e(Re).mark((function t(n){var r,i;return e(Re).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],i=n[0].map(function(){var t=e(Se)(e(Re).mark((function t(n){return e(Re).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=4,Promise.all(i);case 4:t.sent.map((function(e){var t=e.ingredients;r.push(t[0])})),document.querySelector(".hero").style.display="none",Xd.innerHTML="Favorite ingredients",Qd.innerHTML=r.map((function(e){var t=e.idIngredient,n=e.strType,r=e.strIngredient;return'<li class="ingredients__card">\n              <h3 class="ingredients__title">'.concat(r,'</h3>\n              <p class="ingredients__text">').concat(n,'</p>\n              <div class="button-wrapper" data-ingr="').concat(t,'">\n                <button class="btn-lm" type="button">Learn more</button>\n                <button class="btn-add-fav" type="button">Add to favorite</button>\n              </div>\n            </li>')})).join(""),document.querySelectorAll(".btn-add-fav").forEach((function(e){e.textContent="Remove"}));case 11:case"end":return t.stop()}}),t)}))),function(e){return n.apply(this,arguments)})).catch((function(e){console.log(e),Qd.innerHTML="",$d.classList.remove("is-hidden"),Xd.classList.add("is-hidden")}))}))}();
//# sourceMappingURL=favorite-cocktail.444e584a.js.map
