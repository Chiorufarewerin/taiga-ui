"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[59034],{59034:(V,d,t)=>{t.r(d),t.d(d,{ExampleTuiRingChartModule:()=>J});var p=t(12057),C=t(33982),_=t(50179),R=t(23121),T=t(29851),E=t(89570),e=t(74788),h=t(88331),S=t(37159),M=t(57068),m=t(57464);let N=(()=>{class n{constructor(){this.value=[40,30,20,10]}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-ring-chart-example-1"]],decls:5,vars:4,consts:[[1,"wrapper"],["size","s",1,"tui-space_right-4",3,"value"],["size","m",1,"tui-space_right-4",3,"value"],["size","l",1,"tui-space_right-4",3,"value"],["size","xl",1,"tui-space_right-4",3,"value"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"tui-ring-chart",1),e._UZ(2,"tui-ring-chart",2),e._UZ(3,"tui-ring-chart",3),e._UZ(4,"tui-ring-chart",4),e.qZA()),2&o&&(e.xp6(1),e.Q6J("value",i.value),e.xp6(1),e.Q6J("value",i.value),e.xp6(1),e.Q6J("value",i.value),e.xp6(1),e.Q6J("value",i.value))},directives:[m.i],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),n})();var x=t(36692),f=t(16996);let O=(()=>{class n{constructor(){this.labels=["Food","Cafe","Open Source","Taxi","other"],this.value=[13769,12367,10172,3018,2592],this.total=(0,x.tuiSum)(...this.value),this.index=NaN}get sum(){return isNaN(this.index)?this.total:this.value[this.index]}get label(){return isNaN(this.index)?"Total":this.labels[this.index]}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-ring-chart-example-2"]],decls:4,vars:4,consts:[[3,"value","activeItemIndex","activeItemIndexChange"],[3,"value"]],template:function(o,i){1&o&&(e.TgZ(0,"tui-ring-chart",0),e.NdJ("activeItemIndexChange",function(l){return i.index=l}),e._UZ(1,"tui-money",1),e.TgZ(2,"div"),e._uU(3),e.qZA(),e.qZA()),2&o&&(e.Q6J("value",i.value)("activeItemIndex",i.index),e.xp6(1),e.Q6J("value",i.sum),e.xp6(2),e.Oqu(i.label))},directives:[m.i,f.o],styles:["[_nghost-%COMP%]{--tui-chart-0: #c779d0;--tui-chart-1: #feac5e;--tui-chart-2: #ff5f6d;--tui-chart-3: #4bc0c8;--tui-chart-4: #9795cd}"],changeDetection:0}),n})();var A=t(31823),I=t(20546),v=t(17023),y=t(76349);function P(n,a){if(1&n&&(e.TgZ(0,"tui-doc-example",2),e._UZ(1,"tui-ring-chart-example-1"),e.qZA(),e.TgZ(2,"tui-doc-example",3),e._UZ(3,"tui-ring-chart-example-2"),e.qZA()),2&n){const o=e.oxw();e.Q6J("content",o.example1),e.xp6(2),e.Q6J("content",o.example2)}}function H(n,a){1&n&&e.SDv(0,8)}function D(n,a){1&n&&e.SDv(0,9)}function G(n,a){1&n&&e.SDv(0,10)}function $(n,a){if(1&n){const o=e.EpF();e.TgZ(0,"tui-doc-demo"),e.TgZ(1,"tui-ring-chart",4),e.NdJ("activeItemIndexChange",function(u){return e.CHM(o),e.oxw().activeItemIndex=u}),e.qZA(),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,H,1,0,"ng-template",5),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(o),e.oxw().activeItemIndex=u}),e.YNc(4,D,1,0,"ng-template",6),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(o),e.oxw().size=u}),e.YNc(5,G,1,0,"ng-template",7),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(o),e.oxw().value=u}),e.qZA()}if(2&n){const o=e.oxw();e.xp6(1),e.Q6J("value",o.value)("size",o.size)("activeItemIndex",o.activeItemIndex),e.xp6(2),e.Q6J("documentationPropertyValues",o.activeItemIndexVariants)("documentationPropertyValue",o.activeItemIndex),e.xp6(1),e.Q6J("documentationPropertyValues",o.sizeVariants)("documentationPropertyValue",o.size),e.xp6(1),e.Q6J("documentationPropertyValues",o.valueVariants)("documentationPropertyValue",o.value)}}function L(n,a){if(1&n&&(e.TgZ(0,"ol",11),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,12),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",13),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,14),e.qZA(),e._UZ(9,"tui-doc-code",15),e.qZA(),e.qZA()),2&n){const o=e.oxw();e.xp6(5),e.Q6J("code",o.exampleModule),e.xp6(4),e.Q6J("code",o.exampleHtml)}}let Z=(()=>{class n{constructor(){this.exampleModule=t.e(29262).then(t.t.bind(t,29262,17)),this.exampleHtml=t.e(68855).then(t.t.bind(t,68855,17)),this.example1={TypeScript:t.e(46783).then(t.t.bind(t,46783,17)),HTML:t.e(38027).then(t.t.bind(t,38027,17)),LESS:t.e(69240).then(t.t.bind(t,69240,17))},this.example2={TypeScript:t.e(18463).then(t.t.bind(t,18463,17)),HTML:t.e(24214).then(t.t.bind(t,24214,17)),LESS:t.e(98330).then(t.t.bind(t,98330,17))},this.valueVariants=[[40,30,20,10],[13769,10172,3018,2592]],this.value=this.valueVariants[0],this.activeItemIndexVariants=[NaN,0,1,2],this.activeItemIndex=this.activeItemIndexVariants[0],this.sizeVariants=["s","m","l","xl"],this.size=this.sizeVariants[1]}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["example-tui-ring-chart"]],decls:4,vars:0,consts:function(){let a,o,i,u,l,s,r,g;return a=$localize`:␟00214e46cd923ee161d8a9dc643a348f16675b61␟8113053841165912126:RingChart`,o=$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`,i=$localize`:␟20fea4a90c025dc5f782601c437174dcdc02db7e␟1028344547250868618:With labels`,u=$localize`:␟3723984460cea02b3cfdfdd74bf637291ba195b1␟2888725611708468887: Active fragment `,l=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,s=$localize`:␟616f8c85cb0c4ed37b94e8ba9c52e117da1a90c3␟206010917694362071: Value `,r=$localize`:␟76dcbcd752be692265a3b79e5ef1a60d9fdecc08␟3397391964644299834: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiRingChartModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,g=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header",a,"package","ADDON-CHARTS","type","components"],["pageTab",""],["id","sizes","heading",o,3,"content"],["id","labels","heading",i,3,"content"],[1,"chart",3,"value","size","activeItemIndex","activeItemIndexChange"],["documentationPropertyName","activeItemIndex","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS | TuiSizeXL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],u,l,s,[1,"b-demo-steps"],r,["filename","myComponent.module.ts",3,"code"],g,["filename","myComponent.template.html",3,"code"]]},template:function(o,i){1&o&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,P,4,2,"ng-template",1),e.YNc(2,$,6,9,"ng-template",1),e.YNc(3,L,10,2,"ng-template",1),e.qZA())},directives:[h.q,S.n,M.f,N,O,A.F,m.i,I.z,v.B,y.c],styles:[".chart[_ngcontent-%COMP%]{margin:0 auto}"],changeDetection:0}),n})(),J=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.ez,C.Bz,_.TuiRingChartModule,R.TuiMoneyModule,E.wq,T.fV,C.Bz.forChild((0,T.Ve)(Z))]]}),n})()}}]);