(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{1391:function(t,e,a){},"379f":function(t,e,a){},"713b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hhh lpR fff"}},[a("Header"),a("q-page-container",[a("router-view")],1),a("Footer")],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-header",{staticClass:"bg-black"},[a("q-toolbar",[a("q-btn",{staticClass:"lt-md visible",attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[a("q-btn",{staticClass:"visible text-medium text-capitalize comfortaa",attrs:{to:"/",flat:"",size:"large",ripple:!1}},[a("q-avatar",{attrs:{square:"",size:"64"}},[a("q-img",{attrs:{src:"dossifi_logo_sq.png"}})],1),a("span",{staticClass:"q-ml-sm q-mt-sm text-h5"},[t._v("\n            Blokii Image Maker\n          ")])],1)],1),a("div",{staticClass:"gt-md visible comfortaa"},[a("q-btn",{attrs:{stretch:"",flat:"",label:"Home",icon:"fad fa-home",to:"/"}}),a("q-btn",{attrs:{stretch:"",flat:"",label:"About",icon:"fad fa-info",to:"/about"}}),a("q-btn",{attrs:{stretch:"",flat:"",label:"Help",icon:"fad fa-question",to:"/help"}})],1)],1)],1),a("q-drawer",{attrs:{width:200,breakpoint:500,bordered:"",dark:"","content-class":"bg-black"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",{attrs:{padding:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{active:t.checkActive("/home"),clickable:"",to:"/home"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fad fa-home"}})],1),a("q-item-section",[t._v("\n            Home\n          ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{active:t.checkActive("/about"),clickable:"",to:"/about"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fad fa-info-circle"}})],1),a("q-item-section",[t._v("\n            About\n          ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{active:t.checkActive("/help"),clickable:"",to:"/help"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fad fa-question-circle"}})],1),a("q-item-section",[t._v("\n            Help\n          ")])],1)],1)],1)],1)],1)},s=[],c={data(){return{leftDrawerOpen:!1}},methods:{checkActive(t){return this.$route.path===t}}},l=c,o=(a("8baf"),a("2877")),f=a("e359"),m=a("65c6"),u=a("9c40"),p=a("6ac5"),d=a("cb32"),h=a("068f"),b=a("9404"),v=a("4983"),q=a("1c1c"),w=a("66e5"),g=a("4074"),k=a("0016"),_=a("714f"),Q=a("eebe"),x=a.n(Q),C=Object(o["a"])(l,i,s,!1,null,null,null),y=C.exports;x()(C,"components",{QHeader:f["a"],QToolbar:m["a"],QBtn:u["a"],QToolbarTitle:p["a"],QAvatar:d["a"],QImg:h["a"],QDrawer:b["a"],QScrollArea:v["a"],QList:q["a"],QItem:w["a"],QItemSection:g["a"],QIcon:k["a"]}),x()(C,"directives",{Ripple:_["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-footer",{staticClass:"bg-grey-9 text-white",attrs:{elevated:""}},[a("div",{staticClass:"row q-px-md q-my-md"},[a("div",{staticClass:"col-12 col-sm-4 self-end "},[t._v("\n      © "+t._s(t.copyrightText)+" by\n      "),a("a",{staticClass:"text-white text-bold decoration-none",attrs:{href:"https://www.rachelcheuk.com",target:"_blank",title:"Rachel Cheuk"}},[t._v("Rachel Cheuk")]),a("br"),t._v("\n      Made with "),a("q-icon",{staticClass:"text-red",attrs:{name:"fas fa-heart"}}),t._v(" in\n      Houston, TX.\n    ")],1),a("div",{staticClass:"col-12 col-sm-4 column self-center text-center"}),a("div",{staticClass:"col-12 col-sm-4 text-right q-pa-sm self-center"},[a("q-btn",{staticStyle:{color:"#1DA1F2"},attrs:{type:"a",href:"https://www.twitter.com/rachel_cheuk",flat:"",dense:"",rounded:"",icon:"fab fa-twitter"}})],1)])])},D=[],H={data(){return{startingYear:"2020"}},computed:{currentYear(){return(new Date).getFullYear()},copyrightText(){let t=this.currentYear;return this.startingYear&&(t=this.startingYear+"-"+t),`${t}`}}},O=H,I=(a("760c"),a("7ff0")),T=Object(o["a"])(O,A,D,!1,null,null,null),Y=T.exports;x()(T,"components",{QFooter:I["a"],QIcon:k["a"],QBtn:u["a"]});var F={name:"HBLayout",components:{Header:y,Footer:Y}},$=F,B=a("4d5a"),R=a("09e3"),j=Object(o["a"])($,r,n,!1,null,null,null);e["default"]=j.exports;x()(j,"components",{QLayout:B["a"],QPageContainer:R["a"]})},"760c":function(t,e,a){"use strict";a("379f")},"8baf":function(t,e,a){"use strict";a("1391")}}]);