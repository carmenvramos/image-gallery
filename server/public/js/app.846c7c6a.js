(function(t){function e(e){for(var a,o,u=e[0],s=e[1],l=e[2],m=0,p=[];m<u.length;m++)o=u[m],r[o]&&p.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={1:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=s;i.push([10,0]),n()})({10:function(t,e,n){t.exports=n("Vtdi")},"5FZh":function(t,e,n){},"6i/M":function(t,e,n){},"9XcV":function(t,e,n){},EDI0:function(t,e,n){},GBa0:function(t,e,n){"use strict";var a=n("9XcV"),r=n.n(a);r.a},Hlhs:function(t,e,n){"use strict";var a=n("5FZh"),r=n.n(a);r.a},QTs4:function(t,e,n){"use strict";var a=n("fGjq"),r=n.n(a);r.a},Tp40:function(t,e,n){"use strict";var a=n("nujO"),r=n.n(a);r.a},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var a=n("Kw5r"),r=n("jE9Z"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Photo Albums!")]),n("nav",[n("router-link",{staticClass:"nav",attrs:{to:"/"}},[t._v("Home")]),n("router-link",{staticClass:"nav",attrs:{to:"/albums"}},[t._v("Albums")]),n("router-link",{staticClass:"nav",attrs:{to:"/about"}},[t._v("About")])],1),n("hr"),n("router-view",{attrs:{albums:t.albums,stats:t.stats}})],1)},o=[],u="/api";function s(t){return t.ok?t.json():t.json().then(function(t){throw t.message})}function l(){return fetch("".concat(u,"/albums"),{headers:{"Content-Type":"application/json"}}).then(s)}function c(t){return fetch("".concat(u,"/albums/").concat(t),{headers:{"Content-Type":"application/json"}}).then(s)}function m(t){return fetch("".concat(u,"/albums"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(s)}function p(){return fetch("".concat(u,"/albums/stats"),{headers:{"Content-Type":"application/json"}}).then(s)}function d(t){return fetch("".concat(u,"/images"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(s)}var f={data:function(){return{albums:null,stats:""}},created:function(){var t=this;l().then(function(e){t.albums=e}).catch(function(e){t.error=e}),p().then(function(e){t.stats=e}).catch(function(e){t.error=e})}},h=f,v=(n("ZL7j"),n("KHd+")),b=Object(v["a"])(h,i,o,!1,null,null,null),_=b.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("\n    Welcome to our home page!\n  ")]),t.stats?a("div",[a("p",[t._v("Wow! You only have "),a("strong",[t._v(t._s(t.albums.length))]),t._v(" albums in your collection!")]),a("p",[t._v("Add some more over "),a("router-link",{attrs:{to:"/albums"}},[t._v("here!")])],1),a("p",[t._v("The minimum number of photos you have in an albums is "+t._s(t.stats[0].min))]),a("p",[t._v("The maximum number of photos you have in an albums is "+t._s(t.stats[0].max))]),a("p",[t._v("The average number of photos you have in an albums is "+t._s(t.stats[0].avg))])]):t._e(),a("img",{attrs:{src:n("vWR/")}})])},y=[],j={props:["albums","stats"]},x=j,w=(n("Tp40"),Object(v["a"])(x,g,y,!1,null,null,null)),T=w.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("\n    This is the ABOUT component\n  ")]),n("p",[t._v("This is the ABOUT HTML body and other text")])])}],$={},E=$,k=(n("XApS"),Object(v["a"])(E,O,A,!1,null,null,null)),C=k.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.albums?n("ul",t._l(t.albums,function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:"/albums/"+e.id}},[t._v("\n    "+t._s(e.title)+"\n    ")]),n("p",[t._v("\n    "+t._s(e.description)+"\n    ")]),t._v("\n    ("+t._s(e.imagesCount)+" images)\n    ")],1)})):t._e(),n("router-link",{attrs:{to:"/albums/new"}},[t._v("Create Album")]),n("router-view",{attrs:{"on-add":t.handleAdd}})],1)},P=[],M={data:function(){return{albums:null}},created:function(){var t=this;l().then(function(e){t.albums=e})},methods:{handleAdd:function(t){var e=this;return t.albumId=this.album,m(t).then(function(t){e.albums.push(t),e.$router.push("/albums/".concat(t.id))})}}},I=M,D=(n("Hlhs"),Object(v["a"])(I,S,P,!1,null,"cc1de228",null)),V=D.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",[n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("label",[t._v("\n      Title:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.album.title,expression:"album.title"}],attrs:{name:"title",type:"text",placeholder:"Title",required:""},domProps:{value:t.album.title},on:{input:function(e){e.target.composing||t.$set(t.album,"title",e.target.value)}}})]),n("label",[t._v("\n      Description:\n      "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.album.description,expression:"album.description"}],attrs:{name:"description",placeholder:"Description",required:""},domProps:{value:t.album.description},on:{input:function(e){e.target.composing||t.$set(t.album,"description",e.target.value)}}})]),n("button",{attrs:{type:"submit"}},[t._v("Add Album")])])])])},G=[],N={data:function(){return{album:{title:"",description:""}}},props:["onAdd"],methods:{handleSubmit:function(){this.onAdd(this.album)}}},W=N,q=(n("gVYL"),Object(v["a"])(W,L,G,!1,null,"f2d23350",null)),Z=q.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!==t.album?n("div",[n("nav",[n("ul",[n("li",[n("router-link",{attrs:{to:"/albums/"+t.album.id+"/list"}},[t._v("List View")])],1),n("li",[n("router-link",{attrs:{to:"/albums/"+t.album.id+"/thumbnail"}},[t._v("Thumbnail View")])],1),n("li",[n("router-link",{attrs:{to:"/albums/"+t.album.id+"/new"}},[t._v("Add Image")])],1)])]),n("router-view",{attrs:{images:t.album.images,albumId:t.album.id,"on-add":t.handleAdd}})],1):t._e()},R=[],H={data:function(){return{album:null}},created:function(){var t=this;c(this.$route.params.id).then(function(e){t.album=e})},methods:{handleAdd:function(t){var e=this;return t.albumId=this.album.id,d(t).then(function(t){e.album.images.push(t),e.$router.push("/albums/${this.image.albumId}")})}}},B=H,Q=(n("pDol"),Object(v["a"])(B,J,R,!1,null,"32e39432",null)),X=Q.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.images?n("ul",[n("span",{staticClass:"links"},t._l(t.images,function(e){return n("li",{key:e.id},[n("strong",[t._v(t._s(e.title)+":")]),t._v(" "+t._s(e.description)+"\n    ")])}))]):t._e()])},U=[],F={props:["images"]},K=F,z=(n("dp1r"),Object(v["a"])(K,Y,U,!1,null,"6bdf5c5c",null)),tt=z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-viewer-content"},[t.images?n("ul",[n("span",{staticClass:"links"},t._l(t.images,function(t){return n("p",{key:t.id},[n("img",{attrs:{src:t.url}})])}))]):t._e()])},nt=[],at={props:["images"]},rt=at,it=(n("GBa0"),Object(v["a"])(rt,et,nt,!1,null,"de37d960",null)),ot=it.exports,ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("\n    This is the GALLERY VIEWER component\n  ")])])}],lt={},ct=lt,mt=(n("QTs4"),Object(v["a"])(ct,ut,st,!1,null,"b265cd56",null)),pt=mt.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("\n    This is the NEW IMAGE component\n  ")]),n("section",[n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("label",[t._v("\n      Title:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.image.title,expression:"image.title"}],attrs:{name:"title",type:"text",placeholder:"Title",required:""},domProps:{value:t.image.title},on:{input:function(e){e.target.composing||t.$set(t.image,"title",e.target.value)}}})]),n("label",[t._v("\n      Description:\n      "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.image.description,expression:"image.description"}],attrs:{name:"description",placeholder:"Description",required:""},domProps:{value:t.image.description},on:{input:function(e){e.target.composing||t.$set(t.image,"description",e.target.value)}}})]),n("label",[t._v("\n      Image URL:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.image.url,expression:"image.url"}],attrs:{name:"url",type:"text",placeholder:"https://github.com/...",required:""},domProps:{value:t.image.url},on:{input:function(e){e.target.composing||t.$set(t.image,"url",e.target.value)}}})]),n("button",{attrs:{type:"submit"}},[t._v("Add Image")])])])])},ft=[],ht={data:function(){return{image:{title:"",description:"",url:""}}},props:["onAdd"],methods:{handleSubmit:function(){this.onAdd(this.image)}}},vt=ht,bt=(n("nC32"),Object(v["a"])(vt,dt,ft,!1,null,"1a81c1e0",null)),_t=bt.exports,gt=new r["a"]({routes:[{path:"/",component:T},{path:"/about",component:C},{path:"/albums",component:V,children:[{path:"new",component:Z}]},{path:"/albums/:id",component:X,children:[{path:"list",component:tt},{path:"thumbnail",component:ot},{path:"gallery",component:pt},{path:"new",component:_t},{path:"",redirect:"list"}]},{path:"*",redirect:"/"}]});a["a"].config.productionTip=!1,a["a"].use(r["a"]),new a["a"]({router:gt,render:function(t){return t(_)}}).$mount("#app")},WJMl:function(t,e,n){},XApS:function(t,e,n){"use strict";var a=n("ume9"),r=n.n(a);r.a},ZL7j:function(t,e,n){"use strict";var a=n("EDI0"),r=n.n(a);r.a},aZQG:function(t,e,n){},dp1r:function(t,e,n){"use strict";var a=n("WJMl"),r=n.n(a);r.a},fGjq:function(t,e,n){},fM6e:function(t,e,n){},gVYL:function(t,e,n){"use strict";var a=n("aZQG"),r=n.n(a);r.a},nC32:function(t,e,n){"use strict";var a=n("fM6e"),r=n.n(a);r.a},nujO:function(t,e,n){},pDol:function(t,e,n){"use strict";var a=n("6i/M"),r=n.n(a);r.a},ume9:function(t,e,n){},"vWR/":function(t,e,n){t.exports=n.p+"img/home_bg.8f4d8fd8.jpg"}});
//# sourceMappingURL=app.846c7c6a.js.map