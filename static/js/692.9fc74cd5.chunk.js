"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[692],{304:function(e,r,t){t.d(r,{TP:function(){return o},UF:function(){return s},V0:function(){return i},q5:function(){return f},yo:function(){return p}});var n=t(861),a=t(757),u=t.n(a),c=t(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"87ac6f2cf8642f95ea875aea3595be38",language:"en-US"}}),s=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day?page=1");case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("search/movie?query=".concat(r,"&page=1&include_adult=false"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews?page=1"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},692:function(e,r,t){t.r(r);var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(791),i=t(689),o=t(304),p=t(643),f=t(184);r.default=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],u=r[1],h=(0,s.useState)(!1),l=(0,a.Z)(h,2),v=l[0],d=l[1],m=(0,s.useState)(null),w=(0,a.Z)(m,2),x=w[0],g=w[1],k=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,(0,o.q5)(Number(k));case 4:r=e.sent,u(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),g(e.t0.massage);case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[k]),(0,f.jsxs)(f.Fragment,{children:[v&&(0,f.jsx)(p.iT,{height:80,width:80,color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#4fa94d",strokeWidth:2,strokeWidthSecondary:2}),x&&(0,f.jsx)("p",{children:"..error"}),t.length>0&&(0,f.jsx)("ul",{children:t.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Author: ",t]}),(0,f.jsx)("p",{children:n})]},r)}))}),0===t.length&&!x&&(0,f.jsx)("p",{children:"We don't have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=692.9fc74cd5.chunk.js.map