(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bff20"],{"404b":function(t,a,e){"use strict";e.r(a);var n,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[t._m(0),e("p",{staticClass:"category"}),e("div",[e("loading",{attrs:{active:t.isLoading,"can-cancel":!1},on:{"update:active":function(a){t.isLoading=a}}})],1),e("div",{staticClass:"col-12"},[e("card",[e("div",[e("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"},[e("el-select",{staticClass:"select-default mb-3",staticStyle:{width:"200px"},attrs:{placeholder:"Per page"},model:{value:t.pagination.perPage,callback:function(a){t.$set(t.pagination,"perPage",a)},expression:"pagination.perPage"}},t._l(t.pagination.perPageOptions,(function(t){return e("el-option",{key:t,staticClass:"select-default",attrs:{label:t,value:t}})})),1),e("el-input",{staticClass:"mb-3",staticStyle:{width:"200px"},attrs:{type:"search",placeholder:"Search IP","aria-controls":"datatables"},model:{value:t.searchQuery,callback:function(a){t.searchQuery=a},expression:"searchQuery"}})],1),e("div",{staticClass:"col-sm-12"},[e("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:t.queriedData,border:""}},t._l(t.tableColumns,(function(t){return e("el-table-column",{key:t.label,attrs:{"min-width":t.minWidth,prop:t.prop,label:t.label}})})),1)],1)]),e("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap",attrs:{slot:"footer"},slot:"footer"},[e("div",{},[e("p",{staticClass:"card-category"},[t._v("Showing "+t._s(t.from+1)+" to "+t._s(t.to)+" of "+t._s(t.total)+" entries")])]),e("l-pagination",{staticClass:"pagination-no-border",attrs:{"per-page":t.pagination.perPage,total:t.pagination.total},model:{value:t.pagination.currentPage,callback:function(a){t.$set(t.pagination,"currentPage",a)},expression:"pagination.currentPage"}})],1)])],1)])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-12"},[e("h2",{staticClass:"title"},[t._v("Location")])])}],s=e("ade3"),l=(e("5466"),e("450d"),e("ecdf")),r=e.n(l),c=(e("38a0"),e("ad41")),p=e.n(c),u=(e("6611"),e("e772")),d=e.n(u),h=(e("1f1a"),e("4e4b")),g=e.n(h),f=(e("b0c0"),e("fb6a"),e("ac1f"),e("841c"),e("b64b"),e("2af9")),b=e("6062"),m=e("bc3a"),v=e.n(m),y=e("9062"),C=e.n(y),P=(e("e40d"),{components:(n={LPagination:f["b"]},Object(s["a"])(n,g.a.name,g.a),Object(s["a"])(n,d.a.name,d.a),Object(s["a"])(n,p.a.name,p.a),Object(s["a"])(n,r.a.name,r.a),Object(s["a"])(n,"Loading",C.a),n),data:function(){return{pagination:{perPage:5,currentPage:1,perPageOptions:[5,10,25,50],total:0},searchQuery:"",propsToSearch:["ip"],tableColumns:[{prop:"geolocation.ip",label:"IP Address",minWidth:200},{prop:"geolocation.country",label:"Country",minWidth:200},{prop:"geolocation.countryCode",label:"Country Code",minWidth:150},{prop:"geolocation.lat",label:"Latitude",minWidth:100},{prop:"geolocation.lon",label:"Longtitude",minWidth:120},{prop:"geolocation.org",label:"Organization",minWidth:200}],tableData:[],fuseSearch:null,isLoading:!1}},computed:{pagedData:function(){return this.tableData.slice(this.from,this.to)},queriedData:function(){var t;if(""!==this.searchQuery){var a=[];t=this.fuseSearch.search("=".concat(this.searchQuery));for(var e=0;e<Object.keys(t).length;e++)a.push(t[e].item);t=a,this.paginationTotal(t.length)}else this.paginationTotal(this.tableData.length),t=this.tableData;return t.slice(this.from,this.to)},to:function(){var t=this.from+this.pagination.perPage;return this.total<t&&(t=this.total),t},from:function(){return this.pagination.perPage*(this.pagination.currentPage-1)},total:function(){return this.paginationTotal(this.tableData.length),this.tableData.length}},methods:{paginationTotal:function(t){this.pagination.total=t}},mounted:function(){var t=this;this.isLoading=!0,v.a.get("https://stats.runonflux.io/fluxinfo?projection=ip,geolocation").then((function(a){t.tableData=a.data.data,t.fuseSearch=new b["a"](t.tableData,{useExtendedSearch:!0,keys:["ip"]}),t.isLoading=!1}))}}),w=P,x=e("2877"),j=Object(x["a"])(w,i,o,!1,null,null,null);a["default"]=j.exports}}]);
//# sourceMappingURL=chunk-2d0bff20.d238785a.js.map