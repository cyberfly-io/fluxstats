(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6b10"],{7441:function(t,a,e){"use strict";e.r(a);var n,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[t._m(0),e("p",{staticClass:"category"}),e("div",[e("loading",{attrs:{active:t.isLoading,"can-cancel":!1},on:{"update:active":function(a){t.isLoading=a}}})],1),e("div",{staticClass:"col-12"},[e("card",[e("div",[e("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"},[e("el-select",{staticClass:"select-default mb-3",staticStyle:{width:"200px"},attrs:{placeholder:"Per page"},model:{value:t.pagination.perPage,callback:function(a){t.$set(t.pagination,"perPage",a)},expression:"pagination.perPage"}},t._l(t.pagination.perPageOptions,(function(t){return e("el-option",{key:t,staticClass:"select-default",attrs:{label:t,value:t}})})),1),e("el-input",{staticClass:"mb-3",staticStyle:{width:"200px"},attrs:{type:"search",placeholder:"Search Round Time","aria-controls":"datatables"},model:{value:t.searchQuery,callback:function(a){t.searchQuery=a},expression:"searchQuery"}})],1),e("div",{staticClass:"col-sm-12"},[e("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:t.queriedData,border:""}},t._l(t.tableColumns,(function(t){return e("el-table-column",{key:t.label,attrs:{"min-width":t.minWidth,prop:t.prop,label:t.label,sortable:""}})})),1)],1)]),e("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap",attrs:{slot:"footer"},slot:"footer"},[e("div",{},[e("p",{staticClass:"card-category"},[t._v("Showing "+t._s(t.from+1)+" to "+t._s(t.to)+" of "+t._s(t.total)+" entries")])]),e("l-pagination",{staticClass:"pagination-no-border",attrs:{"per-page":t.pagination.perPage,total:t.pagination.total},model:{value:t.pagination.currentPage,callback:function(a){t.$set(t.pagination,"currentPage",a)},expression:"pagination.currentPage"}})],1)])],1)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-12"},[e("h2",{staticClass:"title"},[t._v("Info")])])}],o=e("3835"),r=e("ade3"),l=(e("5466"),e("450d"),e("ecdf")),c=e.n(l),u=(e("38a0"),e("ad41")),p=e.n(u),d=(e("6611"),e("e772")),h=e.n(d),g=(e("1f1a"),e("4e4b")),b=e.n(g),f=(e("b0c0"),e("fb6a"),e("ac1f"),e("841c"),e("b64b"),e("4fad"),e("99af"),e("2af9")),m=e("6062"),v=e("bc3a"),y=e.n(v),w=e("9062"),C=e.n(w),P=(e("e40d"),{components:(n={LPagination:f["b"]},Object(r["a"])(n,b.a.name,b.a),Object(r["a"])(n,h.a.name,h.a),Object(r["a"])(n,p.a.name,p.a),Object(r["a"])(n,c.a.name,c.a),Object(r["a"])(n,"Loading",C.a),n),data:function(){return{pagination:{perPage:5,currentPage:1,perPageOptions:[5,10,25,50,100,200,500,1e3,2e3,5e3,1e4],total:0},searchQuery:"",propsToSearch:["roundTime"],tableColumns:[{prop:"roundTime",label:"Round Time",minWidth:200},{prop:"roundTimeConverted",label:"Round Time Converted",minWidth:200},{prop:"cumulus",label:"Cumulus",minWidth:250},{prop:"nimbus",label:"Nimbus",minWidth:100},{prop:"stratus",label:"Stratus",minWidth:120}],tableData:[],fuseSearch:null,isLoading:!1}},computed:{pagedData:function(){return this.tableData.slice(this.from,this.to)},queriedData:function(){var t;if(""!==this.searchQuery){var a=[];t=this.fuseSearch.search("=".concat(this.searchQuery));for(var e=0;e<Object.keys(t).length;e++)a.push(t[e].item);t=a,this.paginationTotal(t.length)}else this.paginationTotal(this.tableData.length),t=this.tableData;return t.slice(this.from,this.to)},to:function(){var t=this.from+this.pagination.perPage;return this.total<t&&(t=this.total),t},from:function(){return this.pagination.perPage*(this.pagination.currentPage-1)},total:function(){return this.paginationTotal(this.tableData.length),this.tableData.length}},methods:{paginationTotal:function(t){this.pagination.total=t}},mounted:function(){var t=this;this.isLoading=!0,y.a.get("https://stats.runonflux.io/fluxhistorystats").then((function(a){for(var e=0,n=Object.entries(a.data.data);e<n.length;e++){var i=Object(o["a"])(n[e],2),s=i[0],r=i[1];t.tableData.push({roundTime:s,roundTimeConverted:"".concat(new Date(parseInt(s)).toLocaleDateString()," ").concat(new Date(parseInt(s)).toLocaleTimeString()),cumulus:r.cumulus,nimbus:r.nimbus,stratus:r.stratus})}t.fuseSearch=new m["a"](t.tableData,{useExtendedSearch:!0,keys:["roundTime"]}),t.isLoading=!1}))}}),T=P,D=e("2877"),j=Object(D["a"])(T,i,s,!1,null,null,null);a["default"]=j.exports}}]);
//# sourceMappingURL=chunk-2d0d6b10.78ede221.js.map