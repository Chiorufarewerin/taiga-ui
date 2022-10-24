"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[99596],{99596:(B,E,t)=>{t.r(E),t.d(E,{ExampleTuiMediaModule:()=>Y});var h=t(12057),m=t(23738),O=t(33982),g=t(29851),c=t(36692),_=t(72002),I=t(56757),e=t(74788),y=t(88331),v=t(37159),A=t(57068),s=t(1632),N=t(17678);function x(o,d){1&o&&e._UZ(0,"source",3)}let P=(()=>{class o{constructor(){this.currentTime=0,this.volume=1,this.paused=!0}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-media-example-1"]],decls:9,vars:6,consts:[["tuiMedia","","controls","","width","320",1,"video",3,"currentTime","paused","volume","currentTimeChange","pausedChange","volumeChange"],["src","/assets/media/bbb_dpi.ogv","type","video/ogg",4,"tuiHighDpi"],["src","/assets/media/bbb.mp4","type","video/mp4"],["src","/assets/media/bbb_dpi.ogv","type","video/ogg"]],template:function(n,a){1&n&&(e.TgZ(0,"video",0),e.NdJ("currentTimeChange",function(u){return a.currentTime=u})("pausedChange",function(u){return a.paused=u})("volumeChange",function(u){return a.volume=u}),e.YNc(1,x,1,0,"source",1),e._UZ(2,"source",2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA()),2&n&&(e.Q6J("currentTime",a.currentTime)("paused",a.paused)("volume",a.volume),e.xp6(4),e.hij("currentTime: ",a.currentTime,""),e.xp6(2),e.hij("volume: ",a.volume,""),e.xp6(2),e.hij("paused: ",a.paused,""))},directives:[s.N,N.J],styles:["[_nghost-%COMP%]{display:block}.video[_ngcontent-%COMP%]{float:left;margin-right:1.5rem}"],changeDetection:0}),o})();var R=t(30644),C=t(76189),S=t(47044);let Z=(()=>{class o{constructor(){this.currentTime=0,this.paused=!0}get icon(){return this.paused?"tuiIconPlayLarge":"tuiIconPauseLarge"}getTime(n){const a=Math.round(n||0),i=a%c.SECONDS_IN_MINUTE,u=(a-i)/c.SECONDS_IN_MINUTE,r=String(i),p=String(u);return`${1===p.length?`0${p}`:p}:${1===r.length?`0${r}`:r}`}toggleState(){this.paused=!this.paused}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-media-example-2"]],decls:13,vars:9,consts:[[1,"player"],["tuiMedia","","width","320",1,"video",3,"currentTime","paused","currentTimeChange","pausedChange","click"],["video",""],["src","/assets/media/bbb.mp4","type","video/mp4"],["tuiMode","onDark",1,"controls"],["tuiIconButton","","type","button","title","Play/Pause","size","s","shape","rounded","appearance","flat",3,"icon","click"],["tuiSlider","","type","range","step","any",1,"slider",3,"max","ngModel","ngModelChange"],[1,"time"]],template:function(n,a){if(1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"video",1,2),e.NdJ("currentTimeChange",function(u){return a.currentTime=u})("pausedChange",function(u){return a.paused=u})("click",function(){return a.toggleState()}),e._UZ(3,"source",3),e.qZA(),e.TgZ(4,"div",4),e.TgZ(5,"button",5),e.NdJ("click",function(){return a.toggleState()}),e.qZA(),e.TgZ(6,"input",6),e.NdJ("ngModelChange",function(u){return a.currentTime=u}),e.qZA(),e.TgZ(7,"div",7),e.TgZ(8,"time"),e._uU(9),e.qZA(),e._uU(10," / "),e.TgZ(11,"time"),e._uU(12),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const i=e.MAs(2);e.xp6(1),e.Q6J("currentTime",a.currentTime)("paused",a.paused),e.xp6(4),e.Q6J("icon",a.icon),e.xp6(1),e.Q6J("max",i.duration)("ngModel",a.currentTime),e.xp6(2),e.uIk("datetime",a.getTime(a.currentTime)),e.xp6(1),e.hij(" ",a.getTime(a.currentTime)," "),e.xp6(2),e.uIk("datetime",a.getTime(i.duration)),e.xp6(1),e.hij(" ",a.getTime(i.duration)," ")}},directives:[s.N,R.w,C.v,S.i,m.eT,m.Fj,m.JJ,m.On],styles:["[_nghost-%COMP%]{display:block}.video[_ngcontent-%COMP%]{display:block}.player[_ngcontent-%COMP%]{position:relative;width:20rem}.controls[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;width:100%;align-items:center;padding:.75rem .75rem .5rem;box-sizing:border-box;color:var(--tui-base-01);background:linear-gradient(to bottom,transparent,rgba(0,0,0,.56))}.slider[_ngcontent-%COMP%]{flex:1;margin-left:.75rem}.time[_ngcontent-%COMP%]{flex-shrink:0;margin-left:.75rem;font-size:.8125rem}"],changeDetection:0}),o})();var $=t(66596);let L=(()=>{class o{constructor(){this.currentTime=0,this.paused=!0}get icon(){return this.paused?"tuiIconPlayLarge":"tuiIconPauseLarge"}toggleState(){this.paused=!this.paused}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-media-example-3"]],decls:9,vars:5,consts:[[1,"tui-player"],["tuiMedia","","src","assets/media/strays.mp3",3,"currentTime","paused","currentTimeChange","pausedChange"],["audio",""],["tuiIconButton","","type","button","shape","rounded","appearance","secondary","title","Play/Pause",3,"icon","click"],["tuiLink","","href","https://waterplea.bandcamp.com/"],["tuiSlider","","type","range","step","any",1,"slider",3,"max","ngModel","ngModelChange"]],template:function(n,a){if(1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"audio",1,2),e.NdJ("currentTimeChange",function(u){return a.currentTime=u})("pausedChange",function(u){return a.paused=u}),e.qZA(),e.TgZ(3,"button",3),e.NdJ("click",function(){return a.toggleState()}),e.qZA(),e.TgZ(4,"div"),e.TgZ(5,"a",4),e._uU(6," Waterplea "),e.qZA(),e._uU(7," \u2014 Strays "),e.TgZ(8,"input",5),e.NdJ("ngModelChange",function(u){return a.currentTime=u}),e.qZA(),e.qZA(),e.qZA()),2&n){const i=e.MAs(2);e.xp6(1),e.Q6J("currentTime",a.currentTime)("paused",a.paused),e.xp6(2),e.Q6J("icon",a.icon),e.xp6(5),e.Q6J("max",i.duration)("ngModel",a.currentTime)}},directives:[s.N,C.v,$.V,S.i,m.eT,m.Fj,m.JJ,m.On],styles:[".tui-player{display:flex;width:20rem;border-radius:6.25rem;background:var(--tui-secondary);--tui-primary: var(--tui-link);--tui-primary-hover: var(--tui-link-hover);--tui-primary-active: var(--tui-link-hover)}.tui-player>div{flex:1;margin:.375rem 1.75rem 0 .375rem}\n"],encapsulation:2,changeDetection:0}),o})();var J=t(20546),V=t(17023),U=t(76349);function b(o,d){if(1&o&&(e.TgZ(0,"p"),e.SDv(1,2),e.qZA(),e.TgZ(2,"tui-doc-example",3),e._UZ(3,"tui-media-example-1"),e.qZA(),e.TgZ(4,"tui-doc-example",4),e._UZ(5,"tui-media-example-2"),e.qZA(),e.TgZ(6,"tui-doc-example",5),e._UZ(7,"tui-media-example-3"),e.qZA()),2&o){const n=e.oxw();e.xp6(2),e.Q6J("content",n.example1),e.xp6(2),e.Q6J("content",n.example2),e.xp6(2),e.Q6J("content",n.example3)}}function F(o,d){1&o&&e.SDv(0,11)}function X(o,d){1&o&&e.SDv(0,12)}function G(o,d){1&o&&e.SDv(0,13)}function z(o,d){1&o&&e.SDv(0,14)}function H(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"audio",6),e.NdJ("pausedChange",function(i){return e.CHM(n),e.oxw().paused=i})("currentTimeChange",function(i){return e.CHM(n),e.oxw().currentTime=i})("volumeChange",function(i){return e.CHM(n),e.oxw().volume=i}),e.qZA(),e.TgZ(1,"tui-doc-documentation"),e.YNc(2,F,1,0,"ng-template",7),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().currentTime=i}),e.YNc(3,X,1,0,"ng-template",8),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().paused=i}),e.YNc(4,G,1,0,"ng-template",9),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().playbackRate=i}),e.YNc(5,z,1,0,"ng-template",10),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().volume=i}),e.qZA()}if(2&o){const n=e.oxw();e.Q6J("playbackRate",n.playbackRate)("paused",n.paused)("currentTime",n.currentTime)("volume",n.volume),e.xp6(2),e.Q6J("documentationPropertyValue",n.currentTime),e.xp6(1),e.Q6J("documentationPropertyValue",n.paused),e.xp6(1),e.Q6J("documentationPropertyValue",n.playbackRate),e.xp6(1),e.Q6J("documentationPropertyValues",n.volumeVariants)("documentationPropertyValue",n.volume)}}function Q(o,d){if(1&o&&(e.TgZ(0,"ol",15),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,16),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",17),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,18),e.qZA(),e._UZ(9,"tui-doc-code",19),e.qZA(),e.qZA()),2&o){const n=e.oxw();e.xp6(5),e.Q6J("code",n.exampleModule),e.xp6(4),e.Q6J("code",n.exampleHtml)}}let j=(()=>{class o{constructor(){this.exampleModule=t.e(41662).then(t.t.bind(t,41662,17)),this.exampleHtml=t.e(26712).then(t.t.bind(t,26712,17)),this.example1={TypeScript:t.e(23856).then(t.t.bind(t,23856,17)),HTML:t.e(71713).then(t.t.bind(t,71713,17))},this.example2={TypeScript:t.e(48365).then(t.t.bind(t,48365,17)),HTML:t.e(74607).then(t.t.bind(t,74607,17)),LESS:t.e(42161).then(t.t.bind(t,42161,17))},this.example3={TypeScript:t.e(12258).then(t.t.bind(t,12258,17)),HTML:t.e(26349).then(t.t.bind(t,26349,17)),LESS:t.e(95604).then(t.t.bind(t,95604,17))},this.volumeVariants=[1,.5,.25,0],this.playbackRate=1,this.currentTime=0,this.volume=this.volumeVariants[0],this.paused=!0}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["example-tui-media"]],decls:4,vars:0,consts:function(){let d,n,a,i,u,r,p,T,M,f,D;return d=$localize`:␟8a27a855a00b08d2ca981207638ea9097032412b␟3250391385569692601:Media`,n=$localize`:␟5c7e436081ab7b7e75134ad0f3f5732344199ff2␟72364305241305412:Directive for declarative work with HTML5 video and audio`,a=$localize`:␟d0326b072d54c553e428c3b40cecb689f4e7adce␟8073419804355870473:Native controls`,i=$localize`:␟2d1ea268a6a9f483dbc2cbfe19bf4256a57a6af4␟6549265851868599441:Video`,u=$localize`:␟f0baeb8b69d120073b6d60d34785889b0c3232c8␟347407180135731058:Audio`,r=$localize`:␟69f9d26d1f4b33afc3d5b0833e9d3c849c2c1707␟3780515939858026328: Current time `,p=$localize`:␟9dcd2128593c62256dd3464320ec1885f5b4e168␟256940080640657353: Paused state `,T=$localize`:␟2537ae0f1e8aab6c5fecda1acda4958a53a7ca40␟2465791192649345432: Playback speed `,M=$localize`:␟140fa9b9d19e3ff4049b0fe947f1f599a498d2ca␟4429171508194850919: Volume `,f=$localize`:␟d7cf4a0ab0cf4835b61647afeed7ad7d789a0e94␟4130706201499310656: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiMediaModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your component module: `,D=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header",d,"package","CDK","type","directives"],["pageTab",""],n,["id","native","heading",a,3,"content"],["id","video","heading",i,3,"content"],["id","audio","heading",u,3,"content"],["tuiMedia","","controls","","src","assets/media/strays.mp3",3,"playbackRate","paused","currentTime","volume","pausedChange","currentTimeChange","volumeChange"],["documentationPropertyName","currentTime","documentationPropertyType","number","documentationPropertyMode","input-output",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","paused","documentationPropertyType","boolean","documentationPropertyMode","input-output",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","playbackRate","documentationPropertyType","number","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","volume","documentationPropertyType","number","documentationPropertyMode","input-output",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],r,p,T,M,[1,"b-demo-steps"],f,["filename","myComponent.module.ts",3,"code"],D,["filename","myComponent.template.html",3,"code"]]},template:function(n,a){1&n&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,b,8,3,"ng-template",1),e.YNc(2,H,6,9,"ng-template",1),e.YNc(3,Q,10,2,"ng-template",1),e.qZA())},directives:[y.q,v.n,A.f,P,Z,L,s.N,J.z,V.B,U.c],encapsulation:2,changeDetection:0}),o})(),Y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[h.ez,m.u5,c.TuiMediaModule,c.TuiHighDpiModule,_.TuiLinkModule,_.TuiButtonModule,I.TuiSliderModule,_.TuiModeModule,g.fV,O.Bz.forChild((0,g.Ve)(j))]]}),o})()}}]);