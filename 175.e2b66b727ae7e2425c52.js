(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{"4qw5":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiMediaModule",(function(){return B}));var a=n("An66"),r=n("3kIJ"),i=n("1VvW"),o=n("SVIu"),u=n("l4xa"),c=n("Qq0t"),l=n("dvRg"),d=n("kZht"),m=n("OZlg"),p=n("e0eB"),s=n("iyc4"),g=n("EqIU"),y=n("iYz/");function h(e,t){1&e&&d["\u0275\u0275element"](0,"source",3)}let f=(()=>{class e{constructor(){this.currentTime=0,this.volume=1,this.paused=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-media-example-1"]],decls:9,vars:6,consts:[["tuiMedia","","controls","","width","320",1,"video",3,"currentTime","paused","volume","currentTimeChange","pausedChange","volumeChange"],["src","/assets/media/bbb_dpi.ogv","type","video/ogg",4,"tuiHighDpi"],["src","/assets/media/bbb.mp4","type","video/mp4"],["src","/assets/media/bbb_dpi.ogv","type","video/ogg"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"video",0),d["\u0275\u0275listener"]("currentTimeChange",(function(e){return t.currentTime=e}))("pausedChange",(function(e){return t.paused=e}))("volumeChange",(function(e){return t.volume=e})),d["\u0275\u0275template"](1,h,1,0,"source",1),d["\u0275\u0275element"](2,"source",2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"p"),d["\u0275\u0275text"](4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"p"),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275text"](8),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("currentTime",t.currentTime)("paused",t.paused)("volume",t.volume),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate1"]("currentTime: ",t.currentTime,""),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("volume: ",t.volume,""),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("paused: ",t.paused,""))},directives:[g.a,y.a],styles:["[_nghost-%COMP%]{display:block}.video[_ngcontent-%COMP%]{float:left;margin-right:1.5rem}"],changeDetection:0}),e})();var b=n("TxeG"),v=n("zV1d"),C=n("VONa");let x=(()=>{class e{constructor(){this.currentTime=0,this.paused=!0}get icon(){return this.paused?"tuiIconPlayLarge":"tuiIconPauseLarge"}getTime(e){const t=Math.round(e||0),n=t%u.D,a=(t-n)/u.D,r=String(n),i=String(a);return`${1===i.length?"0"+i:i}:${1===r.length?"0"+r:r}`}toggleState(){this.paused=!this.paused}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-media-example-2"]],decls:13,vars:9,consts:[[1,"player"],["tuiMedia","","width","320",1,"video",3,"currentTime","paused","currentTimeChange","pausedChange","click"],["video",""],["src","/assets/media/bbb.mp4","type","video/mp4"],["tuiMode","onDark",1,"controls"],["tuiIconButton","","type","button","title","Play/Pause","size","s","shape","rounded","appearance","flat",3,"icon","click"],["tuiSlider","","type","range","step","any",1,"slider",3,"max","ngModel","ngModelChange"],[1,"time"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"video",1,2),d["\u0275\u0275listener"]("currentTimeChange",(function(e){return t.currentTime=e}))("pausedChange",(function(e){return t.paused=e}))("click",(function(){return t.toggleState()})),d["\u0275\u0275element"](3,"source",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"div",4),d["\u0275\u0275elementStart"](5,"button",5),d["\u0275\u0275listener"]("click",(function(){return t.toggleState()})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"input",6),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.currentTime=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"div",7),d["\u0275\u0275elementStart"](8,"time"),d["\u0275\u0275text"](9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](10," / "),d["\u0275\u0275elementStart"](11,"time"),d["\u0275\u0275text"](12),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275reference"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("currentTime",t.currentTime)("paused",t.paused),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("icon",t.icon),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("max",e.duration)("ngModel",t.currentTime),d["\u0275\u0275advance"](2),d["\u0275\u0275attribute"]("datetime",t.getTime(t.currentTime)),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",t.getTime(t.currentTime)," "),d["\u0275\u0275advance"](2),d["\u0275\u0275attribute"]("datetime",t.getTime(e.duration)),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",t.getTime(e.duration)," ")}},directives:[g.a,b.a,v.a,C.a,r.RangeValueAccessor,r.DefaultValueAccessor,r.NgControlStatus,r.NgModel],styles:[".video[_ngcontent-%COMP%], [_nghost-%COMP%]{display:block}.player[_ngcontent-%COMP%]{position:relative;width:20rem}.controls[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;width:100%;align-items:center;padding:.75rem .75rem .5rem;box-sizing:border-box;color:var(--tui-base-01);background:linear-gradient(180deg,transparent,rgba(0,0,0,.56))}.slider[_ngcontent-%COMP%]{flex:1}.slider[_ngcontent-%COMP%], .time[_ngcontent-%COMP%]{margin-left:.75rem}.time[_ngcontent-%COMP%]{flex-shrink:0;font-size:.8125rem}"],changeDetection:0}),e})();var T=n("yZWP");let S=(()=>{class e{constructor(){this.currentTime=0,this.paused=!0}get icon(){return this.paused?"tuiIconPlayLarge":"tuiIconPauseLarge"}toggleState(){this.paused=!this.paused}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-media-example-3"]],decls:9,vars:5,consts:[[1,"tui-player"],["tuiMedia","","src","assets/media/strays.mp3",3,"currentTime","paused","currentTimeChange","pausedChange"],["audio",""],["tuiIconButton","","type","button","shape","rounded","appearance","secondary","title","Play/Pause",3,"icon","click"],["tuiLink","","href","https://waterplea.bandcamp.com/"],["tuiSlider","","type","range","step","any",1,"slider",3,"max","ngModel","ngModelChange"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"audio",1,2),d["\u0275\u0275listener"]("currentTimeChange",(function(e){return t.currentTime=e}))("pausedChange",(function(e){return t.paused=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"button",3),d["\u0275\u0275listener"]("click",(function(){return t.toggleState()})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"div"),d["\u0275\u0275elementStart"](5,"a",4),d["\u0275\u0275text"](6," Waterplea "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](7," \u2014 Strays "),d["\u0275\u0275elementStart"](8,"input",5),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.currentTime=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275reference"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("currentTime",t.currentTime)("paused",t.paused),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("icon",t.icon),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("max",e.duration)("ngModel",t.currentTime)}},directives:[g.a,v.a,T.a,C.a,r.RangeValueAccessor,r.DefaultValueAccessor,r.NgControlStatus,r.NgModel],styles:[".tui-player{display:flex;width:20rem;border-radius:6.25rem;background:var(--tui-secondary);--tui-primary:var(--tui-link);--tui-primary-hover:var(--tui-link-hover);--tui-primary-active:var(--tui-link-hover)}.tui-player>div{flex:1;margin:.375rem 1.75rem 0 .375rem}"],encapsulation:2,changeDetection:0}),e})();var P=n("yHor"),M=n("zGJC"),V=n("u8jZ");const E=["header",$localize`:␟8a27a855a00b08d2ca981207638ea9097032412b␟3250391385569692601:Media`];var k;k=$localize`:␟5c7e436081ab7b7e75134ad0f3f5732344199ff2␟72364305241305412:Directive for declarative work with HTML5 video and audio`;const w=["heading",$localize`:␟d0326b072d54c553e428c3b40cecb689f4e7adce␟8073419804355870473:Native controls`],z=["heading",$localize`:␟2d1ea268a6a9f483dbc2cbfe19bf4256a57a6af4␟6549265851868599441:Video`],O=["heading",$localize`:␟f0baeb8b69d120073b6d60d34785889b0c3232c8␟347407180135731058:Audio`];function I(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18n"](1,k),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-example",2),d["\u0275\u0275i18nAttributes"](3,w),d["\u0275\u0275element"](4,"tui-media-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](6,z),d["\u0275\u0275element"](7,"tui-media-example-2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"tui-doc-example",4),d["\u0275\u0275i18nAttributes"](9,O),d["\u0275\u0275element"](10,"tui-media-example-3"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example2),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example3)}}var _,$,A,D,L,N;function R(e,t){1&e&&d["\u0275\u0275i18n"](0,_)}function H(e,t){1&e&&d["\u0275\u0275i18n"](0,$)}function G(e,t){1&e&&d["\u0275\u0275i18n"](0,A)}function q(e,t){1&e&&d["\u0275\u0275i18n"](0,D)}function J(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"audio",5),d["\u0275\u0275listener"]("pausedChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().paused=t}))("currentTimeChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().currentTime=t}))("volumeChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().volume=t})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](1,"tui-doc-documentation"),d["\u0275\u0275template"](2,R,1,0,"ng-template",6),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().currentTime=t})),d["\u0275\u0275template"](3,H,1,0,"ng-template",7),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().paused=t})),d["\u0275\u0275template"](4,G,1,0,"ng-template",8),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().playbackRate=t})),d["\u0275\u0275template"](5,q,1,0,"ng-template",9),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().volume=t})),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("playbackRate",e.playbackRate)("paused",e.paused)("currentTime",e.currentTime)("volume",e.volume),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValue",e.currentTime),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.paused),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.playbackRate),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.volumeVariants)("documentationPropertyValue",e.volume)}}function K(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",10),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,L),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,N),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",12),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleHtml)}}_=$localize`:␟69f9d26d1f4b33afc3d5b0833e9d3c849c2c1707␟3780515939858026328: Current time `,$=$localize`:␟9dcd2128593c62256dd3464320ec1885f5b4e168␟256940080640657353: Paused state `,A=$localize`:␟2537ae0f1e8aab6c5fecda1acda4958a53a7ca40␟2465791192649345432: Playback speed `,D=$localize`:␟140fa9b9d19e3ff4049b0fe947f1f599a498d2ca␟4429171508194850919: Volume `,L=$localize`:␟d7cf4a0ab0cf4835b61647afeed7ad7d789a0e94␟4130706201499310656: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiMediaModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your component module: `,N=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let j=(()=>{class e{constructor(){this.exampleModule=n.e(1615).then(n.bind(null,"hquK")),this.exampleHtml=n.e(1616).then(n.bind(null,"fV+F")),this.example1={TypeScript:n.e(1608).then(n.bind(null,"onrW")),HTML:n.e(1607).then(n.bind(null,"3Vie"))},this.example2={TypeScript:n.e(1611).then(n.bind(null,"GFO/")),HTML:n.e(1609).then(n.bind(null,"2nqa")),LESS:n.e(1610).then(n.bind(null,"aJGb"))},this.example3={TypeScript:n.e(1614).then(n.bind(null,"KiK+")),HTML:n.e(1612).then(n.bind(null,"KySq")),LESS:n.e(1613).then(n.bind(null,"4XFw"))},this.volumeVariants=[1,.5,.25,0],this.playbackRate=1,this.currentTime=0,this.volume=this.volumeVariants[0],this.paused=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-media"]],decls:5,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],["id","native",3,"content",6,"heading"],["id","video",3,"content",6,"heading"],["id","audio",3,"content",6,"heading"],["tuiMedia","","controls","","src","assets/media/strays.mp3",3,"playbackRate","paused","currentTime","volume","pausedChange","currentTimeChange","volumeChange"],["documentationPropertyName","currentTime","documentationPropertyType","number","documentationPropertyMode","input-output",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","paused","documentationPropertyType","boolean","documentationPropertyMode","input-output",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","playbackRate","documentationPropertyType","number","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","volume","documentationPropertyType","number","documentationPropertyMode","input-output",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275i18nAttributes"](1,E),d["\u0275\u0275template"](2,I,11,3,"ng-template",1),d["\u0275\u0275template"](3,J,6,9,"ng-template",1),d["\u0275\u0275template"](4,K,10,2,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[m.a,p.a,s.a,f,x,S,g.a,P.a,M.a,V.a],encapsulation:2,changeDetection:0}),e})(),B=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,r.FormsModule,u.Jb,u.zb,c.Bb,c.bb,l.Hb,c.Gb,o.m,i.f.forChild(Object(o.u)(j))]]}),e})()}}]);