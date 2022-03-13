(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6786"],{"1cfd":function(t,a,e){"use strict";e.r(a);var n,s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[t._m(0),e("p",{staticClass:"category"}),e("div",[e("loading",{attrs:{active:t.isLoading,"can-cancel":!1},on:{"update:active":function(a){t.isLoading=a}}})],1),e("div",{staticClass:"col-12"},[e("card",[e("div",[e("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"},[e("el-select",{staticClass:"select-default mb-3",staticStyle:{width:"200px"},attrs:{placeholder:"Per page"},model:{value:t.pagination.perPage,callback:function(a){t.$set(t.pagination,"perPage",a)},expression:"pagination.perPage"}},t._l(t.pagination.perPageOptions,(function(t){return e("el-option",{key:t,staticClass:"select-default",attrs:{label:t,value:t}})})),1),e("el-input",{staticClass:"mb-3",staticStyle:{width:"200px"},attrs:{type:"search",placeholder:"Search IP","aria-controls":"datatables"},model:{value:t.searchQuery,callback:function(a){t.searchQuery=a},expression:"searchQuery"}})],1),e("div",{staticClass:"col-sm-12"},[e("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:t.queriedData,border:""}},[e("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(a){return t._l(a.row.apps.runningapps,(function(a,n){return e("p",{key:n},[e("b",[t._v("Application "+t._s(n+1)+":")]),t._v(" "),e("br"),e("b",[t._v("ID:")]),t._v(" "+t._s(a.Id)+" "),e("br"),e("b",[t._v("Names:")]),t._v(" "+t._s(a.Names)+" "),e("br"),e("b",[t._v("Image:")]),t._v(" "+t._s(a.Image)+" "),e("br"),e("b",[t._v("Image ID:")]),t._v(" "+t._s(a.ImageID)+" "),e("br"),e("b",[t._v("Command:")]),t._v(" "+t._s(a.Command)+" "),e("br"),e("b",[t._v("Ports:")]),t._v(" "+t._s(a.Ports)+" "),e("br"),e("b",[t._v("Labels:")]),t._v(" "+t._s(a.Labels)+" "),e("br"),e("b",[t._v("State:")]),t._v(" "+t._s(a.State)+" "),e("br"),e("b",[t._v("Status:")]),t._v(" "+t._s(a.Status)+" "),e("br")])}))}}])}),t._l(t.tableColumns,(function(t){return e("el-table-column",{key:t.label,attrs:{"min-width":t.minWidth,prop:t.prop,label:t.label}})}))],2)],1)]),e("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap",attrs:{slot:"footer"},slot:"footer"},[e("div",{},[e("p",{staticClass:"card-category"},[t._v("Showing "+t._s(t.from+1)+" to "+t._s(t.to)+" of "+t._s(t.total)+" entries")])]),e("l-pagination",{staticClass:"pagination-no-border",attrs:{"per-page":t.pagination.perPage,total:t.pagination.total},model:{value:t.pagination.currentPage,callback:function(a){t.$set(t.pagination,"currentPage",a)},expression:"pagination.currentPage"}})],1)])],1)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-12"},[e("h2",{staticClass:"title"},[t._v("Application")])])}],o=e("ade3"),r=(e("5466"),e("450d"),e("ecdf")),l=e.n(r),c=(e("38a0"),e("ad41")),p=e.n(c),u=(e("6611"),e("e772")),d=e.n(u),b=(e("1f1a"),e("4e4b")),h=e.n(b),g=(e("b0c0"),e("fb6a"),e("ac1f"),e("841c"),e("b64b"),e("2af9")),f=e("6062"),m=e("bc3a"),v=e.n(m),_=e("9062"),y=e.n(_),P=(e("e40d"),{components:(n={LPagination:g["b"]},Object(o["a"])(n,h.a.name,h.a),Object(o["a"])(n,d.a.name,d.a),Object(o["a"])(n,p.a.name,p.a),Object(o["a"])(n,l.a.name,l.a),Object(o["a"])(n,"Loading",y.a),n),data:function(){return{pagination:{perPage:5,currentPage:1,perPageOptions:[5,10,25,50],total:0},searchQuery:"",propsToSearch:["ip"],tableColumns:[{prop:"ip",label:"IP Address",minWidth:200},{prop:"apps.fluxusage",label:"Flux Usage",minWidth:250},{prop:"apps.resources.appsCpusLocked",label:"CPU Locked",minWidth:100},{prop:"apps.resources.appsRamLocked",label:"RAM Locked",minWidth:120},{prop:"apps.resources.appsHddLocked",label:"HDD Locked",minWidth:120}],tableData:[],fuseSearch:null,isLoading:!1}},computed:{pagedData:function(){return this.tableData.slice(this.from,this.to)},queriedData:function(){var t;if(""!==this.searchQuery){var a=[];t=this.fuseSearch.search("=".concat(this.searchQuery));for(var e=0;e<Object.keys(t).length;e++)a.push(t[e].item);t=a,this.paginationTotal(t.length)}else this.paginationTotal(this.tableData.length),t=this.tableData;return t.slice(this.from,this.to)},to:function(){var t=this.from+this.pagination.perPage;return this.total<t&&(t=this.total),t},from:function(){return this.pagination.perPage*(this.pagination.currentPage-1)},total:function(){return this.paginationTotal(this.tableData.length),this.tableData.length}},methods:{paginationTotal:function(t){this.pagination.total=t}},mounted:function(){var t=this;this.isLoading=!0,v.a.get("https://stats.runonflux.io/fluxinfo?projection=ip,apps").then((function(a){t.tableData=a.data.data,t.fuseSearch=new f["a"](t.tableData,{useExtendedSearch:!0,keys:["ip"]}),t.isLoading=!1}))}}),C=P,k=e("2877"),w=Object(k["a"])(C,s,i,!1,null,null,null);a["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d0b6786.28f44618.js.map