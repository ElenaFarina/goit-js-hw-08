var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return l.Date.now()};function m(e,t,n){var o,i,r,a,u,f,l=0,c=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,u=setTimeout(j,t),c?y(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-l>=r}function j(){var e=v();if(h(e))return O(e);u=setTimeout(j,function(e){var n=t-(e-f);return m?d(n,r-(e-l)):n}(e))}function O(e){return u=void 0,b&&o?y(e):(o=i=void 0,a)}function w(){var e=v(),n=h(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return S(f);if(m)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=g(t)||0,p(n)&&(c=!!n.leading,r=(m="maxWait"in n)?s(g(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=i=u=void 0},w.flush=function(){return void 0===u?a:O(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=i.test(e);return u||r.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}e=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),y=document.querySelector("input"),S=document.querySelector("textarea");b.addEventListener("input",(0,e.throttle)((function(e){if(""!==y.value||""!==S.value){h.email=y.value,h.message=S.value;const e=JSON.stringify(h);localStorage.setItem("feedback-form-state",e)}}),500));const h={};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&(y.value=t.email,S.value=t.message)}(),b.addEventListener("submit",(function(e){if(e.preventDefault(),""===y.value||""===S.value)return alert("Please fill in all fields!");!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&console.log(t)}(),y.value="",S.value="",localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.5a8a9925.js.map