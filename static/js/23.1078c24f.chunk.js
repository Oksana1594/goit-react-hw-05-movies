"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[23],{304:function(e,r,t){t.d(r,{TP:function(){return i},UF:function(){return o},V0:function(){return s},q5:function(){return p},yo:function(){return f}});var n=t(861),a=t(757),c=t.n(a),u=t(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"87ac6f2cf8642f95ea875aea3595be38",language:"en-US"}}),o=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day?page=1");case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("search/movie?query=".concat(r,"&page=1&include_adult=false"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/reviews?page=1"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},583:function(e,r,t){t.d(r,{Z:function(){return f}});var n=t(87),a=t(689),c="movies-list_item__by-6a",u="movies-list_list__QsEHr",o="movies-list_link__nBtgH",s=t(184),i=function(e){var r=e.movies,t=(0,a.TH)();return(0,s.jsx)("ul",{className:u,children:r.map((function(e){var r=e.id,a=e.title;return(0,s.jsx)("li",{className:c,children:(0,s.jsx)(n.rU,{className:o,state:{from:t},to:"/movies/".concat(r),children:a})},r)}))})},f=i;i.defaultProps={movies:[]}},23:function(e,r,t){function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.r(r),t.d(r,{default:function(){return x}});var u=t(861),o=t(439),s=t(757),i=t.n(s),f=t(791),p=t(87),l="movie-search-form_wrapper__qwonC",v="movie-search-form_form__CD8d7",m="movie-search-form_button__CRXeC",h="movie-search-form_input__619qZ",d=t(184),b=function(e){var r=e.onSubmit,t=(0,f.useState)({search:""}),a=(0,o.Z)(t,2),u=a[0],s=a[1];return(0,d.jsx)("div",{className:l,children:(0,d.jsxs)("form",{className:v,onSubmit:function(e){e.preventDefault(),r(c({},u)),s({search:""})},children:[(0,d.jsx)("button",{className:m,type:"submit"}),(0,d.jsx)("input",{className:h,type:"text",placeholder:"search",name:"search",value:u.search,onChange:function(e){var r=e.target,t=r.name,a=r.value;s(c(c({},u),{},n({},t,a)))},required:!0})]})})},g=t(304),w=t(583),y=t(897),_=t(643),x=function(){var e=(0,f.useState)({movies:[],loading:!1,error:null}),r=(0,o.Z)(e,2),t=r[0],n=r[1],a=(0,p.lr)(),s=(0,o.Z)(a,2),l=s[0],v=s[1],m=l.get("search");(0,f.useEffect)((function(){var e=function(){var e=(0,u.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n((function(e){return c(c({},e),{},{loading:!0})})),e.next=4,(0,g.V0)(m);case 4:r=e.sent,n((function(e){return c(c({},e),{},{movies:r})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n((function(r){return c(c({},r),{},{error:e.t0})}));case 11:return e.prev=11,n((function(e){return c(c({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();m&&e()}),[m]);var h=t.movies,x=t.loading,j=t.error;return(0,d.jsxs)(y.Z,{children:[(0,d.jsx)(b,{onSubmit:function(e){var r=e.search;v({search:r})}}),h.length>0&&(0,d.jsx)(w.Z,{movies:h}),x&&(0,d.jsx)(_.iT,{height:80,width:80,color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#4fa94d",strokeWidth:2,strokeWidthSecondary:2}),j&&(0,d.jsx)("p",{children:"..Error"})]})}}}]);
//# sourceMappingURL=23.1078c24f.chunk.js.map