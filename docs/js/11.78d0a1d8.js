(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"367e":function(l,e,o){"use strict";o.r(e);var t=function(){var l=this,e=l.$createElement,o=l._self._c||e;return o("div",{staticClass:"q-pa-md row justify-around q-gutter-sm",staticStyle:{"max-width":"700px",width:"100%"}},[o("q-checkbox",{attrs:{label:"No scroll"},model:{value:l.noScroll,callback:function(e){l.noScroll=e},expression:"noScroll"}}),o("div",{staticClass:"column"},[o("q-btn",{attrs:{label:"Fullscreen Overlay (Red)"},on:{click:function(e){l.color="rgb(255,0,0)",l.model=!0}}}),o("q-btn",{attrs:{label:"Fullscreen Overlay (Green)"},on:{click:function(e){l.color="rgb(0,255,0)",l.model=!0}}}),o("q-btn",{attrs:{label:"Fullscreen Overlay (Blue)"},on:{click:function(e){l.color="rgb(0,0,255)",l.model=!0}}})],1),o("q-overlay",{attrs:{"background-color":l.color,"no-scroll":l.noScroll,"z-index":5e3},scopedSlots:l._u([{key:"body",fn:function(){return[o("div",{staticClass:"fullscreen row justify-evenly items-center"},[!0===l.model&&!0===l.waiting?o("q-spinner",{attrs:{color:"yellow",size:"3em"}}):l._e(),!0===l.model&&!0!==l.waiting?o("q-btn",{attrs:{color:"primary",label:"Exit"},on:{click:function(e){l.model=!l.model}}}):l._e()],1)]},proxy:!0}]),model:{value:l.model,callback:function(e){l.model=e},expression:"model"}})],1)},n=[],r={data:function(){return{model:!1,noScroll:!1,waiting:!1,timerId:null,color:"rgb(255, 0, 0)"}},deforeDestroy:function(){clearTimeout(this.timerId)},watch:{model:function(l){var e=this;clearTimeout(this.timerId),l?(this.waiting=!0,this.timerId=setTimeout((function(){e.waiting=!1}),2e3)):this.waiting=!1}}},i=r,c=o("2877"),a=Object(c["a"])(i,t,n,!1,null,null,null);e["default"]=a.exports}}]);