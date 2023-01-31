"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[179],{426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: #eee;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  height: 100vh;\r\n}\r\n\r\ni {\r\n  color: rgb(149, 139, 139);\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.list-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  margin: auto;\r\n  background-color: #fff;\r\n  box-shadow: 5px 5px 50px 0 rgba(0, 0, 0, 0.02);\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  font-family: fantasy;\r\n  padding: 0.5rem;\r\n  border-bottom: solid 1px #c0c0c0;\r\n}\r\n\r\n#form {\r\n  display: flex;\r\n}\r\n\r\n.input-text {\r\n  padding: 0.4rem;\r\n  border-bottom: solid 1px #c0c0c0;\r\n}\r\n\r\n.title h1 {\r\n  font-weight: 200;\r\n}\r\n\r\n.hello {\r\n  color: rgb(25, 12, 73);\r\n}\r\n\r\n.insert-text {\r\n  width: 100%;\r\n  padding: 0.4rem;\r\n  border: none;\r\n  font-style: italic;\r\n}\r\n\r\n.insert-text:focus-visible {\r\n  outline: none;\r\n}\r\n\r\n.list-container {\r\n  list-style: none;\r\n}\r\n\r\n.display-none {\r\n  display: none;\r\n}\r\n\r\n.li-wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding: 10px;\r\n  border-bottom: solid 1px #c0c0c0;\r\n}\r\n\r\n.li-wrapper input[type="checkbox"] {\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.li-wrapper input[type="text"] {\r\n  border: none;\r\n  outline: none;\r\n  font-family: fantasy;\r\n  width: 100%;\r\n  font-weight: 200;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.clear-elements {\r\n  padding: 15px 0;\r\n  text-align: center;\r\n  background-color: #dedede;\r\n  color: #757575;\r\n}\r\n',""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var d=r(e,o),c=0;c<i.length;c++){var l=t(i[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},693:(e,n,t)=>{var r=t(379),o=t.n(r),i=t(795),a=t.n(i),s=t(569),d=t.n(s),c=t(565),l=t.n(c),p=t(216),u=t.n(p),f=t(589),m=t.n(f),h=t(426),y={};y.styleTagTransform=m(),y.setAttributes=l(),y.insert=d().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=u(),o()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals;const g={todos:[]},v=document.querySelector("ul"),x=document.querySelector("form"),b=document.querySelector(".clear-btn"),k=()=>{v.innerHTML="",g.todos.forEach((e=>{const n=document.createElement("li"),t=document.createElement("input"),r=document.createElement("input"),o=document.createElement("span"),i=document.createElement("span");n.setAttribute("class","li-wrapper"),t.type="checkbox",t.name="task-done",t.checked=!1,t.id=e.index,r.type="text",r.name="task",r.value=e.description,r.id=e.index,r.disabled=!0,r.style.cursor="pointer",r.style.background="none",r.style.color="black",o.innerHTML='<i class="fas fa-ellipsis-v " for="select"></i>',i.innerHTML=`<i class="fas fa-trash-alt" id="${e.index}"></i>`,i.style.display="none",n.appendChild(t),n.appendChild(r),n.appendChild(o),n.appendChild(i),v.appendChild(n),!0===e.completed&&(t.checked=!0,r.style.textDecoration="line-through"),o.addEventListener("click",(()=>{i.style.display="block",o.style.display="none",r.disabled=!1,r.style.background="#f1f5f9",r.addEventListener("keydown",(e=>((e,n)=>{const t=e.target.id;"Enter"===e.key&&(g.todos=g.todos.map((e=>Number(t)===e.index?{description:n.value,completed:!1,index:e.index}:e)),localStorage.setItem("todos",JSON.stringify(g.todos)),k())})(e,r)))})),i.addEventListener("click",(e=>(e=>{const n=e.target.id;g.todos=g.todos.filter((e=>e.index!==Number(n))),g.todos=g.todos.map((e=>e.index>n?(i.id=e.index-1,{description:e.description,completed:e.completed,index:e.index-1}):e)),localStorage.setItem("todos",JSON.stringify(g.todos)),e.target.parentElement.parentElement.remove()})(e))),t.addEventListener("change",(e=>{const n=e.target.id;"line-through"===r.style.textDecoration?r.style.textDecoration="":r.style.textDecoration="line-through",g.todos=g.todos.map((e=>Number(n)===e.index?{description:e.description,completed:!e.completed,index:e.index}:e)),localStorage.setItem("todos",JSON.stringify(g.todos))}))}))},S=k;document.addEventListener("DOMContentLoaded",(()=>{localStorage.getItem("todos")&&(g.todos=JSON.parse(localStorage.getItem("todos")),S())})),x.addEventListener("submit",(e=>(e=>{e.preventDefault();const n=x.tasks.value;if(" "===n)return;const t={description:n,completed:!1,index:g.todos.length+1};x.tasks.value="",g.todos.push(t),localStorage.setItem("todos",JSON.stringify(g.todos)),S()})(e))),b.addEventListener("click",(()=>{let e=1;g.todos=g.todos.filter((e=>!0!==e.completed)),g.todos=g.todos.map((n=>({description:n.description,completed:n.completed,index:e++}))),localStorage.setItem("todos",JSON.stringify(g.todos)),S()}))}},e=>{e(e.s=693)}]);