(self.webpackChunkandrew_s_page=self.webpackChunkandrew_s_page||[]).push([[605],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!a(e[l],i[l]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!a(l.value[1],i.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!a(e[s[l]],i[s[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},6723:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294),o=r(1597),a=r(7286);function i(){var e=n.useContext(a.Z),t=e.state,r=e.dispatch,i=n.useState(t),c=i[0],l=i[1];n.useEffect((function(){t.isDarkMode?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),function(e){var t=e?"#00b388":"#1f3855";document.querySelector("meta[name='theme-color']").setAttribute("content",t)}(t.isDarkMode),l(t.isDarkMode)}),[t.isDarkMode]);var s=n.useState(!1),u=s[0],f=s[1];return n.createElement("nav",{className:"flex flex-wrap items-center justify-between content-end pt-3"},n.createElement("div",{className:"flex items-center logo h-12 px-6 py-2 text-5xl font-bold"},n.createElement(o.rU,{className:"hover:text-gray-300",to:"/"},"~/")),n.createElement("div",{className:"flex items-center pr-1.5"},n.createElement("ul",{className:"hidden sm:flex mt-2.5 p-3 text-xl items-center justify-evenly"},n.createElement("li",{className:"navBtn"},n.createElement(o.rU,{to:"/about"},"About me")),n.createElement("li",{className:"navBtn"},n.createElement(o.rU,{to:"/portfolio"},"Portfolio")),n.createElement("li",{className:"navBtn"},n.createElement(o.rU,{to:"/wasmProject"},"WASM Thing"))),n.createElement("div",{className:"sm:hidden"},u?n.createElement("div",{className:"mt-2.5 pr-3"},n.createElement("button",{onClick:function(){return f(!1)},type:"button",className:"select-none text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2},n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})))):n.createElement("div",{className:"mt-2.5 pr-3"},n.createElement("button",{onClick:function(){return f(!0)},type:"button",className:"select-none text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2},n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"}))))),n.createElement("div",{className:"mt-2.5 pr-3"},n.createElement("button",{onClick:function(){return r({type:"TOGGLE_DARK_MODE"})},id:"theme-toggle",type:"button",className:"select-none text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"},n.createElement("svg",{id:"theme-toggle-dark-icon",className:(c?"":"hidden")+" w-7 h-7",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})),n.createElement("svg",{id:"theme-toggle-light-icon",className:(c?"hidden":"")+" w-7 h-7",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",fillRule:"evenodd",clipRule:"evenodd"}))))),u&&n.createElement("div",{className:"sm:hidden basis-full bg-lightPrimary dark:bg-darkPrimary mt-6 mb-4"},n.createElement("ul",{className:"flex text-xl flex-col items-center justify-evenly"},n.createElement(o.rU,{to:"/about",className:"border border-solid border-black w-full"},n.createElement("li",{className:"navBtn py-4 text-lightSecondary dark:text-darkSecondary font-bold"},"About me")),n.createElement(o.rU,{to:"/portfolio",className:"border border-solid border-black w-full"},n.createElement("li",{className:"navBtn py-4 text-lightSecondary dark:text-darkSecondary font-bold"},"Portfolio")),n.createElement(o.rU,{to:"/wasmProject",className:"border border-solid border-black w-full"},n.createElement("li",{className:"navBtn py-4 text-lightSecondary dark:text-darkSecondary font-bold"},"WASM Thing")))))}function c(e){var t=e.children;return n.createElement("div",{className:"flex justify-center min-h-screen bg-gradient-to-br from-lightSecondary to-gray-400 text-lightPrimary dark:bg-gradient-to-br dark:from-darkSecondary dark:to-gray-700 dark:text-darkPrimary"},n.createElement("div",{className:"flex flex-col grow max-w-7xl"},n.createElement(i,null),n.createElement("div",{className:"flex flex-col flex-grow justify-between"},n.createElement("div",{className:"content"},t),n.createElement("footer",{className:"flex justify-center align-middle content-start mt-4 mb-16 auto-cols-auto"},n.createElement("svg",{className:"pt-0.5 h-7",xmlns:"http://www.w3.org/2000/svg",viewBox:"-10 -5 1034 1034",version:"1.1"},n.createElement("path",{fill:"currentColor",d:"M500 177q-115 0 -214 58q-96 57 -153 153q-58 99 -58 214t58 214q57 96 153 153q99 58 214 58t214 -58q96 -57 153 -153q58 -99 58 -214t-58 -214q-57 -96 -153 -153q-99 -58 -214 -58zM496 264h3h1q92 0 171 46q76 45 121 121q46 79 46 171t-46 171q-45 76 -121 121 q-79 46 -171 46t-171 -46q-76 -45 -121 -121q-46 -79 -46 -170.5t45 -170.5q44 -76 120 -121q77 -46 169 -47zM497 363q-56 0 -104.5 24t-82 66.5t-45.5 94.5h114q15 -34 47 -55t71 -21q35 0 65 17.5t47.5 47.5t17.5 65t-17.5 65t-47.5 47.5t-65 17.5q-39 0 -71 -21t-47 -54 h-114q12 52 45.5 94t82 66t104.5 24q64 0 119 -32.5t87 -87t32 -119.5t-32 -119.5t-87 -87t-119 -32.5z"})),n.createElement("p",{className:"px-0.5 py-0.5"},n.createElement("span",{className:"text-lightSecondary px-0.5 font-bold"},"andGuo 2022"),n.createElement("span",{className:"font-bold text-lg"},"|"),n.createElement("span",{className:"text-xs px-0.5"},"Created with",n.createElement("a",{className:"text-lightSecondary hover:text-lightPrimary dark:hover:text-darkPrimary hover:underline px-1",href:"https://www.gatsbyjs.com/",target:"_blank",rel:"noreferrer"},"Gatsby")))))))}},242:function(e,t,r){"use strict";r.d(t,{Z:function(){return ve}});var n,o,a,i,c=r(7294),l=r(5697),s=r.n(l),u=r(4839),f=r.n(u),d=r(2993),p=r.n(d),m=r(6494),y=r.n(m),h="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",x="http-equiv",k="innerHTML",A="itemprop",C="name",S="property",O="rel",N="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",L="defer",q="encodeSpecialCharacters",I="onChangeClientState",B="titleTemplate",R=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),_=[v.NOSCRIPT,v.SCRIPT,v.STYLE],z="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Q(e,v.TITLE),r=Q(e,B);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,M);return t||n||void 0},V=function(e){return Q(e,I)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||r===O&&"canonical"===e[r].toLowerCase()||l===O&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==k&&c!==T&&c!==A||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],l=y()({},n[c],o[c]);n[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;le(v.BODY,n),le(v.HTML,o),ce(f,d);var p={baseTag:se(v.BASE,r),linkTags:se(v.LINK,a),metaTags:se(v.META,i),noscriptTags:se(v.NOSCRIPT,c),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,u)},m={},y={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=p[e].oldTags)})),t&&t(),l(e,m,y)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(v.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(z),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=a.indexOf(l);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(z):r.getAttribute(z)!==i.join(",")&&r.setAttribute(z,i.join(","))}},se=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===k)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(z,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[z]=!0,o=fe(r,n),[c.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=ue(r),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case g:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[z]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===k||r===T){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===k||e===T)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+W(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:de(v.BASE,t,n),bodyAttributes:de(h,r,n),htmlAttributes:de(g,o,n),link:de(v.LINK,a,n),meta:de(v.META,i,n),noscript:de(v.NOSCRIPT,c,n),script:de(v.SCRIPT,l,n),style:de(v.STYLE,s,n),title:de(v.TITLE,{title:f,titleAttributes:d},n)}},me=f()((function(e){return{baseTag:$([E,j],e),bodyAttributes:Z(h,e),defer:Q(e,L),encode:Q(e,q),htmlAttributes:Z(g,e),linkTags:J(v.LINK,[O,E],e),metaTags:J(v.META,[C,w,x,S,A],e),noscriptTags:J(v.NOSCRIPT,[k],e),onChangeClientState:V(e),scriptTags:J(v.SCRIPT,[N,k],e),styleTags:J(v.STYLE,[T],e),title:G(e),titleAttributes:Z(b,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),pe)((function(){return null})),ye=(o=me,i=a=function(e){function t(){return U(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return Y({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Y({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case v.TITLE:return Y({},o,((t={})[n.type]=i,t.titleAttributes=Y({},a),t));case v.BODY:return Y({},o,{bodyAttributes:Y({},a)});case v.HTML:return Y({},o,{htmlAttributes:Y({},a)})}return Y({},o,((r={})[n.type]=Y({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Y({},t);return Object.keys(e).forEach((function(t){var n;r=Y({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)}(F(o,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=F(e,["children"]),n=Y({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},H(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind;var he=r(1597),ge=r.p+"static/favicon-67f774e160d3f55edde86e72f2c60aa7.ico";function be(e){var t,r,n=e.description,o=e.lang,a=e.meta,i=e.title,l=(0,he.K2)("143701507").site,s=l.siteMetadata.keywords,u=n||l.siteMetadata.description,f=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(ye,{htmlAttributes:{lang:o},title:i,titleTemplate:f?"%s | "+f:null,meta:[{name:"description",content:u},{name:"keywords",content:s},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=l.siteMetadata)||void 0===r?void 0:r.author)||""},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(a)},c.createElement("link",{rel:"icon",href:ge}))}be.defaultProps={lang:"en",meta:[],description:""};var ve=be}}]);
//# sourceMappingURL=91e9535a2e74deb60b126a30de7c96051affd1c9-bab8fd2926a28ce7766f.js.map