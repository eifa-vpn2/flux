(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-623dc2e1"],{"0ad5":function(t,e,r){"use strict";var c=r("b4c0");e["a"]={start:function(t){return Object(c["a"])().get("/benchmark/start",{headers:{zelidauth:t}})},restart:function(t){return Object(c["a"])().get("/benchmark/restart",{headers:{zelidauth:t}})},getStatus:function(){return Object(c["a"])().get("/benchmark/getstatus")},restartNodeBenchmarks:function(t){return Object(c["a"])().get("/benchmark/restartnodebenchmarks",{headers:{zelidauth:t}})},signFluxTransaction:function(t,e){return Object(c["a"])().get("/benchmark/signzelnodetransaction/".concat(e),{headers:{zelidauth:t}})},helpSpecific:function(t){return Object(c["a"])().get("/benchmark/help/".concat(t))},help:function(){return Object(c["a"])().get("/benchmark/help")},stop:function(t){return Object(c["a"])().get("/benchmark/stop",{headers:{zelidauth:t}})},getBenchmarks:function(){return Object(c["a"])().get("/benchmark/getbenchmarks")},getInfo:function(){return Object(c["a"])().get("/benchmark/getinfo")},tailBenchmarkDebug:function(t){return Object(c["a"])().get("/flux/tailbenchmarkdebug",{headers:{zelidauth:t}})},justAPI:function(){return Object(c["a"])()},cancelToken:function(){return c["b"]}}},"205f":function(t,e,r){"use strict";r.d(e,"a",(function(){return E}));var c=r("2f79"),a=r("b42e"),n=r("c637"),o=r("a723"),i=r("9b76"),s=r("8690"),b=r("365c"),l=r("d82f"),u=r("cf75"),d=r("d580"),f=r("6197"),O=r("b885");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=Object(u["d"])(Object(l["m"])(j(j({},Object(u["a"])(d["a"],u["f"].bind(null,"footer"))),{},{footer:Object(u["c"])(o["t"]),footerClass:Object(u["c"])(o["e"]),footerHtml:Object(u["c"])(o["t"])})),n["l"]),m=Object(c["c"])({name:n["l"],functional:!0,props:h,render:function(t,e){var r,c=e.props,n=e.data,o=e.children,i=c.footerBgVariant,b=c.footerBorderVariant,l=c.footerTextVariant;return t(c.footerTag,Object(a["a"])(n,{staticClass:"card-footer",class:[c.footerClass,(r={},g(r,"bg-".concat(i),i),g(r,"border-".concat(b),b),g(r,"text-".concat(l),l),r)],domProps:o?{}:Object(s["a"])(c.footerHtml,c.footer)}),o)}}),y=r("4918");function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){P(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function P(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var k=Object(u["d"])(Object(l["m"])(w(w({},Object(l["k"])(y["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(u["c"])(o["g"],!1),end:Object(u["c"])(o["g"],!1),start:Object(u["c"])(o["g"],!1),top:Object(u["c"])(o["g"],!1)})),n["o"]),x=Object(c["c"])({name:n["o"],functional:!0,props:k,render:function(t,e){var r=e.props,c=e.data,n=r.src,o=r.alt,i=r.width,s=r.height,b="card-img";return r.top?b+="-top":r.right||r.end?b+="-right":r.bottom?b+="-bottom":(r.left||r.start)&&(b+="-left"),t("img",Object(a["a"])(c,{class:b,attrs:{src:n,alt:o,width:i,height:s}}))}});function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){C(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function C(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var D=Object(u["a"])(k,u["f"].bind(null,"img"));D.imgSrc.required=!1;var V=Object(u["d"])(Object(l["m"])(T(T(T(T(T(T({},f["b"]),O["b"]),h),D),d["a"]),{},{align:Object(u["c"])(o["t"]),noBody:Object(u["c"])(o["g"],!1)})),n["j"]),E=Object(c["c"])({name:n["j"],functional:!0,props:V,render:function(t,e){var r,c=e.props,n=e.data,o=e.slots,l=e.scopedSlots,d=c.imgSrc,p=c.imgLeft,j=c.imgRight,g=c.imgStart,y=c.imgEnd,v=c.imgBottom,w=c.header,P=c.headerHtml,k=c.footer,S=c.footerHtml,T=c.align,V=c.textVariant,E=c.bgVariant,_=c.borderVariant,B=l||{},R=o(),z={},A=t(),q=t();if(d){var L=t(x,{props:Object(u["e"])(D,c,u["h"].bind(null,"img"))});v?q=L:A=L}var H=t(),N=Object(b["a"])(i["p"],B,R);(N||w||P)&&(H=t(O["a"],{props:Object(u["e"])(O["b"],c),domProps:N?{}:Object(s["a"])(P,w)},Object(b["b"])(i["p"],z,B,R)));var U=Object(b["b"])(i["h"],z,B,R);c.noBody||(U=t(f["a"],{props:Object(u["e"])(f["b"],c)},U),c.overlay&&d&&(U=t("div",{staticClass:"position-relative"},[A,U,q]),A=t(),q=t()));var I=t(),G=Object(b["a"])(i["o"],B,R);return(G||k||S)&&(I=t(m,{props:Object(u["e"])(h,c),domProps:N?{}:Object(s["a"])(S,k)},Object(b["b"])(i["o"],z,B,R))),t(c.tag,Object(a["a"])(n,{staticClass:"card",class:(r={"flex-row":p||g,"flex-row-reverse":(j||y)&&!(p||g)},C(r,"text-".concat(T),T),C(r,"bg-".concat(E),E),C(r,"border-".concat(_),_),C(r,"text-".concat(V),V),r)}),[A,H,U,I,q])}})},4918:function(t,e,r){"use strict";r.d(e,"b",(function(){return j})),r.d(e,"a",(function(){return g}));var c=r("2f79"),a=r("b42e"),n=r("c637"),o=r("a723"),i=r("2326"),s=r("6c06"),b=r("7b1e"),l=r("3a58"),u=r("cf75"),d=r("fa73");function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',p=function(t,e,r){var c=encodeURIComponent(O.replace("%{w}",Object(d["g"])(t)).replace("%{h}",Object(d["g"])(e)).replace("%{f}",r));return"data:image/svg+xml;charset=UTF-8,".concat(c)},j=Object(u["d"])({alt:Object(u["c"])(o["t"]),blank:Object(u["c"])(o["g"],!1),blankColor:Object(u["c"])(o["t"],"transparent"),block:Object(u["c"])(o["g"],!1),center:Object(u["c"])(o["g"],!1),fluid:Object(u["c"])(o["g"],!1),fluidGrow:Object(u["c"])(o["g"],!1),height:Object(u["c"])(o["o"]),left:Object(u["c"])(o["g"],!1),right:Object(u["c"])(o["g"],!1),rounded:Object(u["c"])(o["j"],!1),sizes:Object(u["c"])(o["f"]),src:Object(u["c"])(o["t"]),srcset:Object(u["c"])(o["f"]),thumbnail:Object(u["c"])(o["g"],!1),width:Object(u["c"])(o["o"])},n["P"]),g=Object(c["c"])({name:n["P"],functional:!0,props:j,render:function(t,e){var r,c=e.props,n=e.data,o=c.alt,u=c.src,O=c.block,j=c.fluidGrow,g=c.rounded,h=Object(l["c"])(c.width)||null,m=Object(l["c"])(c.height)||null,y=null,v=Object(i["b"])(c.srcset).filter(s["a"]).join(","),w=Object(i["b"])(c.sizes).filter(s["a"]).join(",");return c.blank&&(!m&&h?m=h:!h&&m&&(h=m),h||m||(h=1,m=1),u=p(h,m,c.blankColor||"transparent"),v=null,w=null),c.left?y="float-left":c.right?y="float-right":c.center&&(y="mx-auto",O=!0),t("img",Object(a["a"])(n,{attrs:{src:u,alt:o,width:h?Object(d["g"])(h):null,height:m?Object(d["g"])(m):null,srcset:v||null,sizes:w||null},class:(r={"img-thumbnail":c.thumbnail,"img-fluid":c.fluid||j,"w-100":j,rounded:""===g||!0===g},f(r,"rounded-".concat(g),Object(b["m"])(g)&&""!==g),f(r,y,y),f(r,"d-block",O),r)}))}})},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return b})),r.d(e,"a",(function(){return l}));var c=r("2f79"),a=r("b42e"),n=r("c637"),o=r("a723"),i=r("cf75"),s=r("fa73"),b=Object(i["d"])({title:Object(i["c"])(o["t"]),titleTag:Object(i["c"])(o["t"],"h4")},n["r"]),l=Object(c["c"])({name:n["r"],functional:!0,props:b,render:function(t,e){var r=e.props,c=e.data,n=e.children;return t(r.titleTag,Object(a["a"])(c,{staticClass:"card-title"}),n||Object(s["g"])(r.title))}})},6197:function(t,e,r){"use strict";r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return j}));var c=r("2f79"),a=r("b42e"),n=r("c637"),o=r("a723"),i=r("d82f"),s=r("cf75"),b=r("d580"),l=r("4968"),u=r("ba06");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=Object(s["d"])(Object(i["m"])(f(f(f(f({},l["b"]),u["b"]),Object(s["a"])(b["a"],s["f"].bind(null,"body"))),{},{bodyClass:Object(s["c"])(o["e"]),overlay:Object(s["c"])(o["g"],!1)})),n["k"]),j=Object(c["c"])({name:n["k"],functional:!0,props:p,render:function(t,e){var r,c=e.props,n=e.data,o=e.children,i=c.bodyBgVariant,b=c.bodyBorderVariant,d=c.bodyTextVariant,f=t();c.title&&(f=t(l["a"],{props:Object(s["e"])(l["b"],c)}));var p=t();return c.subTitle&&(p=t(u["a"],{props:Object(s["e"])(u["b"],c),class:["mb-2"]})),t(c.bodyTag,Object(a["a"])(n,{staticClass:"card-body",class:[(r={"card-img-overlay":c.overlay},O(r,"bg-".concat(i),i),O(r,"border-".concat(b),b),O(r,"text-".concat(d),d),r),c.bodyClass]}),[f,p,o])}})},"9e7b":function(t,e,r){"use strict";var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dl",{staticClass:"row",class:t.classes},[r("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?r("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant},[t.href.length>0?r("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?r("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant,on:{click:function(e){return t.$emit("click")}}},[r("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):r("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},a=[],n=(r("a9e3"),r("aa59")),o={components:{BLink:n["a"]},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},i=o,s=r("2877"),b=Object(s["a"])(i,c,a,!1,null,null,null);e["a"]=b.exports},a3a3:function(t,e,r){"use strict";r.r(e);var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",[r("list-entry",{attrs:{title:"Status",data:t.callResponse.data.status}}),r("list-entry",{attrs:{title:"Benchmarking",data:t.callResponse.data.benchmarking}}),r("list-entry",{attrs:{title:"Flux",data:t.callResponse.data.zelback||t.callResponse.data.flux}}),t.callResponse.data.errors?r("list-entry",{attrs:{title:"Error",data:t.callResponse.data.errors,variant:"danger"}}):t._e()],1)},a=[],n=r("c7eb"),o=r("1da1"),i=r("205f"),s=r("b307"),b=r("9e7b"),l=r("0ad5"),u=r("c9ae"),d={components:{ListEntry:b["a"],BCard:i["a"],ToastificationContent:s["a"]},data:function(){return{timeoptions:u,callResponse:{status:"",data:""}}},mounted:function(){this.benchmarkGetStatus()},methods:{benchmarkGetStatus:function(){var t=this;return Object(o["a"])(Object(n["a"])().mark((function e(){var r;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].getStatus();case 2:r=e.sent,"error"===r.data.status?t.$toast({component:s["a"],props:{title:r.data.data.message||r.data.data,icon:"InfoIcon",variant:"danger"}}):(t.callResponse.status=r.data.status,t.callResponse.data=r.data.data);case 4:case"end":return e.stop()}}),e)})))()}}},f=d,O=r("2877"),p=Object(O["a"])(f,c,a,!1,null,null,null);e["default"]=p.exports},b885:function(t,e,r){"use strict";r.d(e,"b",(function(){return O})),r.d(e,"a",(function(){return p}));var c=r("2f79"),a=r("b42e"),n=r("c637"),o=r("a723"),i=r("8690"),s=r("d82f"),b=r("cf75"),l=r("d580");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=Object(b["d"])(Object(s["m"])(d(d({},Object(b["a"])(l["a"],b["f"].bind(null,"header"))),{},{header:Object(b["c"])(o["t"]),headerClass:Object(b["c"])(o["e"]),headerHtml:Object(b["c"])(o["t"])})),n["n"]),p=Object(c["c"])({name:n["n"],functional:!0,props:O,render:function(t,e){var r,c=e.props,n=e.data,o=e.children,s=c.headerBgVariant,b=c.headerBorderVariant,l=c.headerTextVariant;return t(c.headerTag,Object(a["a"])(n,{staticClass:"card-header",class:[c.headerClass,(r={},f(r,"bg-".concat(s),s),f(r,"border-".concat(b),b),f(r,"text-".concat(l),l),r)],domProps:o?{}:Object(i["a"])(c.headerHtml,c.header)}),o)}})},ba06:function(t,e,r){"use strict";r.d(e,"b",(function(){return b})),r.d(e,"a",(function(){return l}));var c=r("2f79"),a=r("b42e"),n=r("c637"),o=r("a723"),i=r("cf75"),s=r("fa73"),b=Object(i["d"])({subTitle:Object(i["c"])(o["t"]),subTitleTag:Object(i["c"])(o["t"],"h6"),subTitleTextVariant:Object(i["c"])(o["t"],"muted")},n["p"]),l=Object(c["c"])({name:n["p"],functional:!0,props:b,render:function(t,e){var r=e.props,c=e.data,n=e.children;return t(r.subTitleTag,Object(a["a"])(c,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),n||Object(s["g"])(r.subTitle))}})},c9ae:function(t,e,r){"use strict";r.r(e);var c={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},a={year:"numeric",month:"short",day:"numeric"};e["default"]={shortDate:c,date:a}},d580:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var c=r("2f79"),a=r("c637"),n=r("a723"),o=r("cf75"),i=Object(o["d"])({bgVariant:Object(o["c"])(n["t"]),borderVariant:Object(o["c"])(n["t"]),tag:Object(o["c"])(n["t"],"div"),textVariant:Object(o["c"])(n["t"])},a["j"]);Object(c["c"])({props:i})}}]);