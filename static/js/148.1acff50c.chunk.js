"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[148],{304:function(e,t,r){r.d(t,{TP:function(){return o},UF:function(){return s},V0:function(){return i},q5:function(){return f},yo:function(){return p}});var n=r(861),a=r(757),c=r.n(a),u=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"87ac6f2cf8642f95ea875aea3595be38",language:"en-US"}}),s=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day?page=1");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("search/movie?query=".concat(t,"&page=1&include_adult=false"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/reviews?page=1"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},148:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),i=r(689),o=r(304),p=r(643),f="cast-page_list__oaimr",l="cast-page_img__k-rTE",h="cast-page_item__I0DA3",d=r(184),v=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],v=(0,s.useState)(!1),m=(0,a.Z)(v,2),g=m[0],x=m[1],w=(0,s.useState)(null),k=(0,a.Z)(w,2),_=k[0],b=k[1],y=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,o.yo)(Number(y));case 4:t=e.sent,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b(e.t0.massage);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]),(0,d.jsxs)(d.Fragment,{children:[g&&(0,d.jsx)(p.iT,{height:80,width:80,color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#4fa94d",strokeWidth:2,strokeWidthSecondary:2}),_&&(0,d.jsx)("p",{children:"..error"}),r.length>0&&!_&&(0,d.jsx)("ul",{className:f,children:r.map((function(e){var t=e.id,r=e.name,n=e.profile_path,a=e.character;return(0,d.jsxs)("li",{className:h,children:[(0,d.jsx)("img",{className:l,src:n?"https://image.tmdb.org/t/p/w500"+n:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",alt:r,width:120,height:150}),(0,d.jsx)("p",{children:r}),(0,d.jsxs)("p",{children:["Character: ",a]})]},t)}))}),0===r.length&&!_&&(0,d.jsx)("p",{children:"We don't have any actors for this movie"})]})}}}]);
//# sourceMappingURL=148.1acff50c.chunk.js.map