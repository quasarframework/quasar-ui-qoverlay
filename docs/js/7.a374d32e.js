(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{b0d2:function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"q-pa-md row justify-around",staticStyle:{"max-width":"700px",width:"100%"}},[l("q-checkbox",{attrs:{label:"No scroll"},model:{value:e.noScroll,callback:function(t){e.noScroll=t},expression:"noScroll"}}),l("q-btn",{attrs:{label:"Fullscreen Overlay"},on:{click:function(t){e.model=!0}}}),l("q-overlay",{attrs:{"no-scroll":e.noScroll,"z-index":5e3},scopedSlots:e._u([{key:"body",fn:function(){return[l("div",{staticClass:"fullscreen row justify-evenly items-center"},[!0===e.model&&!0===e.waiting?l("q-spinner",{attrs:{color:"yellow",size:"3em"}}):e._e(),!0===e.model&&!0!==e.waiting?l("q-btn",{attrs:{color:"primary",label:"Exit"},on:{click:function(t){e.model=!e.model}}}):e._e()],1)]},proxy:!0}]),model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)},n=[],i={data(){return{model:!1,noScroll:!1,waiting:!1,timerId:null}},deforeDestroy(){clearTimeout(this.timerId)},watch:{model(e){clearTimeout(this.timerId),e?(this.waiting=!0,this.timerId=setTimeout(()=>{this.waiting=!1},2e3)):this.waiting=!1}}},r=i,a=l("2877"),c=l("8f8e"),s=l("9c40"),d=l("0d59"),u=l("eebe"),m=l.n(u),w=Object(a["a"])(r,o,n,!1,null,null,null);t["default"]=w.exports;m()(w,"components",{QCheckbox:c["a"],QBtn:s["a"],QSpinner:d["a"]})}}]);