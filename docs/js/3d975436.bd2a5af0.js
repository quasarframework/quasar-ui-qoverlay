(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["3d975436"],{"0960":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("hero",[a("div",{staticClass:"q-markdown"},[a("q-markdown",[t._v("\nThe examples below use a timer to switch states while the overlay is being displayed. When the timer expires, a button is displayed that allows you to turn off the overlay.\n\nTry out both Fullscreen and Component overlays with and without scrollbar support.\n      ")]),a("example-title",{attrs:{title:"QOverlay"}}),a("example-viewer",{attrs:{title:"Fullscreen",file:"Basic","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"On Component",file:"OnComponent","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}})],1)])},n=[],i=a("2514"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:t.slugifiedTitle},on:{click:function(e){return t.copyHeading(t.slugifiedTitle)}}},[t._v(t._s(t.title))])},l=[];a("a481");function r(t){var e=window.location.origin+window.location.pathname+"#"+t,a=document.createElement("textarea");a.className="fixed-top",a.value=e,document.body.appendChild(a),a.focus(),a.select(),document.execCommand("copy"),document.body.removeChild(a),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function c(t){return encodeURIComponent(String(t).trim().replace(/\s+/g,"-"))}var d={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return c(this.title)}},methods:{copyHeading:r}},u=d,m=a("2877"),p=Object(m["a"])(u,o,l,!1,null,null,null),h=p.exports;function f(t){return encodeURIComponent(String(t).trim().replace(/\s+/g,"-"))}var b=a("384e"),v={name:"Examples",components:{Hero:i["a"],ExampleTitle:h},data:function(){return{tempToc:[],locationUrl:"https://github.com/quasarframework/quasar-ui-qoverlay/tree/dev/demo/src/examples/",jsPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@".concat(b["b"],"/dist/index.umd.min.js")],cssPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@".concat(b["b"],"/dist/index.min.css")]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("QOverlay"),this.addToToc("Fullscreen",2),this.addToToc("On Component",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(t){this.$store.commit("common/toc",t)}}},methods:{addToToc:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=t;e>1&&(a="example-"+a);var s=f(a);this.tempToc.push({children:[],id:s,label:t,level:e})}}},w=v,y=(a("e872"),Object(m["a"])(w,s,n,!1,null,null,null));e["default"]=y.exports},"17bf":function(t,e,a){},2514:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"page-header"},[a("div",{staticClass:"donate"},[a("a",{attrs:{href:t.donateUrl,target:"_blank",title:"Donate"}},[a("i",{staticClass:"fas fa-heart",staticStyle:{color:"red"}})])]),a("div",{staticClass:"text-h1 project-name"},[t._v(t._s(t.title))]),a("div",{staticClass:"text-h2 project-tagline"},[t._v(t._s(t.tagline))]),a("q-btn",{staticClass:"btn",attrs:{type:"a",href:t.locationUrl,target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),a("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),a("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),t.hasInteractiveDemo?a("q-btn",{staticClass:"btn",attrs:{to:"/demo",label:"Interactive Demo","no-caps":"",flat:""}}):t._e(),a("q-btn",{staticClass:"btn",attrs:{type:"a",href:t.donateUrl,target:"_blank",label:"Donate","no-caps":"",flat:""}}),a("div",{staticClass:"row justify-evenly items-center q-ma-sm"},[a("div",{staticClass:"quasar"},[t._v(t._s(t.quasarDesc))]),a("div",{staticClass:"byline"},[t._v(t._s(t.byline)),a("a",{attrs:{href:t.bylineTwitter,target:"_blank",title:"Twitter"}},[a("i",{staticClass:"fab fa-twitter"})])])])],1),a("main",{staticClass:"flex flex-start justify-center inset-shadow"},[a("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),a("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[t._t("default")],2)])])},n=[],i={name:"Hero",data:function(){return{title:"QOverlay",tagline:"Embeddable Overlays for your Quasar App",byline:"Created and maintained by Jeff Galbraith",bylineTwitter:"https://twitter.com/jgalbraith64",quasarDesc:"A Quasar Framework Component and App Extension",locationUrl:"https://github.com/quasarframework/quasar-ui-qoverlay",donateUrl:"https://github.com/sponsors/hawkeye64",hasInteractiveDemo:!1}}},o=i,l=a("2877"),r=Object(l["a"])(o,s,n,!1,null,null,null);e["a"]=r.exports},e872:function(t,e,a){"use strict";var s=a("17bf"),n=a.n(s);n.a}}]);