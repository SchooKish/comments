(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3],{299:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iI0ZGRkZGRiI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMCA2TDguNTkgNy40MSAxMy4xNyAxMmwtNC41OCA0LjU5TDEwIDE4bDYtNnoiLz48L3N2Zz4="},300:function(t,e,n){var content=n(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(113).default)("d2ea3556",content,!0,{sourceMap:!1})},303:function(t,e,n){var o=n(2),r=n(304),c=n(138);o({target:"Array",proto:!0},{fill:r}),c("fill")},304:function(t,e,n){"use strict";var o=n(25),r=n(84),c=n(33);t.exports=function(t){for(var e=o(this),n=c(e),l=arguments.length,d=r(l>1?arguments[1]:void 0,n),f=l>2?arguments[2]:void 0,m=void 0===f?n:r(f,n);m>d;)e[d++]=t;return e}},305:function(t,e,n){"use strict";n(300)},306:function(t,e,n){var o=n(112)((function(i){return i[1]}));o.push([t.i,".table{background:#7918f2;background:linear-gradient(-68deg,#ac32e4,#4801ff);border-collapse:collapse;border-radius:16px;overflow:hidden;width:60%}.table td,.table th{color:#fff;font-size:14px;font-weight:400;padding:15px 20px;text-align:left}.table th{background-color:hsla(0,0%,100%,.3)}.table__rows:hover{background-color:hsla(0,0%,100%,.2);cursor:pointer}.table__pagination{align-items:center;display:flex;gap:5px;justify-content:center}.table__pagination--active{background-color:#f15ae0!important}.table__pagination button{background-color:#cc0cdb;border:none;border-radius:8px;color:#fff;cursor:pointer;min-height:26px;padding:5px 10px}.table__pagination-arrow{align-items:center;display:flex;padding:0!important}.table__pagination-arrow--prev>img{transform:rotate(180deg)}",""]),o.locals={},t.exports=o},312:function(t,e,n){"use strict";n.r(e);n(42);var o=n(12),r=(n(49),n(303),n(48),n(65),{name:"CommentsTable",data:function(){return{comments:[],currentPage:1,itemsPerPage:10}},mounted:function(){this.getComments()},methods:{getComments:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/comments").then((function(e){t.comments=e.data}));case 2:case"end":return e.stop()}}),e)})))()},previousPage:function(){this.currentPage>1&&(this.currentPage-=1)},nextPage:function(){this.currentPage<this.getTotalPages&&(this.currentPage+=1)},goToPage:function(t){this.currentPage=t},goToDetail:function(t){this.$router.push("/comments/".concat(t))}},computed:{getButtons:function(){var t=this.currentPage,e=Math.max(t-2,1),n=Math.min(e+4,this.getTotalPages);return Array(n-e+1).fill().map((function(t,i){return e+i}))},getTotalPages:function(){return Math.ceil(this.comments.length/this.itemsPerPage)},getPaginated:function(){var t=(this.currentPage-1)*this.itemsPerPage,e=t+this.itemsPerPage;return this.comments.slice(t,e)}}}),c=(n(305),n(32)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("table",{staticClass:"table"},[t._m(0),t._v(" "),e("tbody",[t._l(t.getPaginated,(function(n){return e("tr",{key:n.id,staticClass:"table__rows",on:{click:function(e){return t.goToDetail(n.id)}}},[e("td",[t._v(t._s(n.id))]),t._v(" "),e("td",[t._v(t._s(n.name))]),t._v(" "),e("td",[t._v(t._s(n.email))])])})),t._v(" "),e("tr",[e("td",{attrs:{colspan:"3"}},[e("div",{staticClass:"table__pagination"},[e("button",{on:{click:function(e){return t.goToPage(1)}}},[t._v("First")]),t._v(" "),e("button",{staticClass:"table__pagination-arrow table__pagination-arrow--prev",on:{click:t.previousPage}},[e("img",{attrs:{src:n(299),alt:"prev"}})]),t._v(" "),t._l(t.getButtons,(function(n){return e("button",{key:n,class:{"table__pagination--active":n===t.currentPage},on:{click:function(e){return t.goToPage(n)}}},[t._v("\n          "+t._s(n)+"\n        ")])})),t._v(" "),e("button",{staticClass:"table__pagination-arrow",on:{click:t.nextPage}},[e("img",{attrs:{src:n(299),alt:"next"}})]),t._v(" "),e("button",{on:{click:function(e){return t.goToPage(t.getTotalPages)}}},[t._v("Last")])],2)])])],2)])}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("ID")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("E-mail")])])])}],!1,null,null,null);e.default=component.exports},317:function(t,e,n){"use strict";n.r(e);var o={name:"MainPage",components:{MainLayout:n(139).a}},r=n(32),component=Object(r.a)(o,(function(){var t=this._self._c;return t("MainLayout",[t("CommentsTable")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommentsTable:n(312).default})}}]);