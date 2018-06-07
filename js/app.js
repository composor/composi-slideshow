!function(){"use strict";function o(t,e){for(var n=[],o=[],i=arguments.length,r=Array(2<i?i-2:0),u=2;u<i;u++)r[u-2]=arguments[u];for(var s=r.length,l=void 0;0<s--;)n.push(r[s]);for(e&&e.key&&(l=e.key,delete e.key);n.length;){var c=n.pop();if(c&&c.pop)for(s=c.length;s--;)n.push(c[s]);else null!=c&&!0!==c&&!1!==c&&o.push(c)}return"function"==typeof t?t(e||{},o):{type:t,props:e||{},children:o,key:l}}var b=function(t){return t?t.key:null};function g(t,e){var n={};for(var o in t)n[o]=t[o];for(var i in e)n[i]=e[i];return n}function w(t,e,n,o,i){var r,u,s,l,c;"key"!==e&&"onComponentDidMount"!==e&&"onComponentDidUpdate"!==e&&"onComponentWillUnmount"!==e&&("style"===e&&"string"!=typeof n?function(t,e,n,o){for(var i in g(o,n)){var r=null==n||null==n[i]?"":n[i];"-"===i[0]?t[e].setProperty(i,r):t[e][i]=r}}(t,e,n,o):(e=e.toLowerCase(),"classname"===(c=e)&&(c="class"),s=t,l=n,"dangerouslysetinnerhtml"===(e=c)&&(s.innerHTML=l),e in t&&"list"!==e&&!i?t[e]="no"==n?"":n:null!=n&&"null"!==n&&"false"!==n&&"no"!==n&&"off"!==n&&("xlink-href"===e?(u=n,(r=t).setAttributeNS("http://www.w3.org/1999/xlink","href",u),r.setAttribute("href",u)):("true"===n&&(n=""),"dangerouslysetinnerhtml"!==e&&t.setAttribute(e,n))),null!=n&&"null"!==n&&"undefined"!==n&&"false"!==n&&"no"!==n&&"off"!==n||t.removeAttribute(e)))}var U=function(t,e,n){t.removeChild(function t(e,n){if(n.props)for(var o=0;o<n.children.length;o++)t(e.childNodes[o],n.children[o]);return e}(e,n)),n&&n.props&&n.props.onComponentDidUnmount&&n.props.onComponentDidUnmount.call(n.props.onComponentDidUnmount,t)};function D(t,e,n,o,i){if(o!==n){if(null==n||n.type!==o.type){var r=function t(e,n){var o=void 0;"number"==typeof e&&(e=e.toString()),o="string"==typeof e?document.createTextNode(e):(n=n||"svg"===e.type)?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type);var i=e.props;if(i){for(var r=0;r<e.children.length;r++)o.appendChild(t(e.children[r],n));for(var u in i)w(o,u,i[u],null,n)}return o}(o,i);t&&(t.insertBefore(r,e),null!=n&&U(t,e,n)),e=r}else if(null==n.type)e.nodeValue=o;else{!function(t,e,n,o){for(var i in g(e,n))n[i]!==("value"===i||"checked"===i?t[i]:e[i])&&w(t,i,n[i],e[i],o);t.mounted&&n&&n.onComponentDidUpdate&&n.onComponentDidUpdate.call(n.onComponentDidUpdate,e,n,t)}(e,n.props,o.props,i=i||"svg"===o.type);for(var u={},s={},l=[],c=n.children,a=o.children,p=0;p<c.length;p++){l[p]=e.childNodes[p];var h=b(c[p]);null!=h&&(u[h]=[l[p],c[p]])}for(var f=0,d=0;d<a.length;){var m=b(c[f]),v=b(a[d]);if(s[m])f++;else if(null==v||v!==b(c[f+1]))if(null==v)null==m&&(D(e,l[f],c[f],a[d],i),d++),f++;else{var y=u[v]||[];m===v?(D(e,y[0],y[1],a[d],i),f++):y[0]?D(e,e.insertBefore(y[0],l[f]),y[1],a[d],i):D(e,l[f],null,a[d],i),s[v]=a[d],d++}else null==m&&U(e,l[f],c[f]),f++}for(;f<c.length;)null==b(c[f])&&U(e,l[f],c[f]),f++;for(var k in u)s[k]||U(e,u[k][0],u[k][1])}return e}}var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=(function(){function c(t){this.value=t}function t(i){var r,u;function s(t,e){try{var n=i[t](e),o=n.value;o instanceof c?Promise.resolve(o.value).then(function(t){s("next",t)},function(t){s("throw",t)}):l(n.done?"return":"normal",n.value)}catch(t){l("throw",t)}}function l(t,e){switch(t){case"return":r.resolve({value:e,done:!0});break;case"throw":r.reject(e);break;default:r.resolve({value:e,done:!1})}(r=r.next)?s(r.key,r.arg):u=null}this._invoke=function(o,i){return new Promise(function(t,e){var n={key:o,arg:i,resolve:t,reject:e,next:null};u?u=u.next=n:(r=u=n,s(o,i))})},"function"!=typeof i.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(t){return this._invoke("next",t)},t.prototype.throw=function(t){return this._invoke("throw",t)},t.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}),r=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),n=window&&window.requestAnimationFrame||window&&window.msRequestAnimationFrame||function(t){return setTimeout(t,16)};function u(t){return!Array.isArray(t)&&"object"===(void 0===t?"undefined":e(t))}for(var s=(new Date).getTime(),l=function(){function e(t){i(this,e),t||(t={}),this.props=t,this.selector=t.container||"body",t.render&&(this.render=t.render),t.state&&(this.state=t.state),this.selector&&(this.container=document.querySelector(this.selector)),this.componentShouldUpdate=!0,this.mounted=!1,this.element,t.componentWillMount&&(this.componentWillMount=t.componentWillMount),t.componentDidMount&&(this.componentDidMount=t.componentDidMount),t.componentWillUpdate&&(this.componentWillUpdate=t.componentWillUpdate),t.componentDidUpdate&&(this.componentDidUpdate=t.componentDidUpdate),t.componentWillUnmount&&(this.componentWillUnmount=t.componentWillUnmount)}return r(e,[{key:"componentWillMount",value:function(t){return t}},{key:"componentDidMount",value:function(t){return t}},{key:"componentWillUpdate",value:function(t){return t}},{key:"componentDidUpdate",value:function(t){return t}},{key:"componentWillUnmount",value:function(t){return t}},{key:"render",value:function(t){return t}},{key:"setState",value:function(t){if("function"==typeof t){var e=t.call(this,this.state);e&&(this.state=e)}else if(u(this.state)&&u(t)){var n=this.state;this.state=g(n,t)}else this.state=t}},{key:"update",value:function(t){if(this.render&&(this.componentShouldUpdate||!this.mounted)){var e=this.state;!0!==t&&t&&(e=t),this.container&&"string"==typeof this.container&&(this.selector=this.container,this.container=document.querySelector(this.container));var n=this.render(e),o=void 0;n&&n.props&&n.props.id&&this.container&&(o=this.container&&this.container.querySelector("#"+n.props.id)),o&&!this.mounted&&o.parentNode.removeChild(o);var i=this.element&&this.element.node;if(r=i,u=e,!(s=this)||JSON.stringify(r)!==JSON.stringify(s.render(u))){var r,u,s,l,c;if(this.element=(l=this.render(e),(c=this.element)?D(c.parentNode,c,c&&c.node,l):c=D(null,null,null,l),c.node=l,c),!this.mounted)return this.componentWillMount&&this.componentWillMount(this),this.container&&1===this.container.nodeType||console.error("The container for a class component is not a valid DOM node. Check the selector provided for the class to make sure it is a valid CSS selector and that the container exists in the DOM. You might be targeting a nonexistent node."),this.container.appendChild(this.element),this.mounted=!0,void(this.componentDidMount&&this.componentDidMount(this));this.componentWillUpdate&&this.componentWillUpdate(this),this.componentDidUpdate&&this.componentDidUpdate(this)}}}},{key:"unmount",value:function(){var e=this;if(this.element){for(var t in this.componentWillUnmount&&this.componentWillUnmount(this),["change","click","dblclick","input","keydown","keypress","keyup","mousedown","mouseleave","mouseout","mouseover","mouseup","pointercancel","pointerdown","pointermove","pointerup","select","submit","touchcancel","touchend","touchmove","touchstart"].map(function(t){e.element.removeEventListener(t,e)}),this.container.removeChild(this.element),this.container=void 0,this)delete this[t];delete this.state,this.update=void 0,this.unmount=void 0}}},{key:"state",get:function(){return this[s]},set:function(t){var e=this;this[s]=t,n(function(){return e.update()})}}]),e}(),c=[],t=17;0!=t;t--)c.push("/pics/IMG_"+t+".jpg");function a(t){var e=t.img,n=t.idx;return o("div",{class:"slide "+(t.count==n+1?"active":""),style:{backgroundImage:"url("+e+")"}})}new(function(t){function n(t){i(this,n);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.container="section",e.state={count:1,pics:c},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,l),r(n,[{key:"render",value:function(t){var n=this;return o("div",{class:"slide-show"},t.pics.map(function(t,e){return o(a,{count:n.state.count,idx:e,img:t})}))}},{key:"tick",value:function(){var t=parseInt(this.state.count);17<(t+=1)&&(t=1),this.setState({count:t})}},{key:"componentDidMount",value:function(){var t=this;setInterval(function(){t.tick()},5e3)}}]),n}())}();
//# sourceMappingURL=app.js.map
