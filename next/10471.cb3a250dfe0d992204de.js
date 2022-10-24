"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[10471],{10471:(N,T,t)=>{t.r(T),t.d(T,{ExampleTuiActiveZoneModule:()=>I});var u=t(12057),C=t(33982),d=t(29851),s=t(36692),_=t(72002),A=t(56757),e=t(74788),p=t(88331),Z=t(37159),g=t(57068),m=t(17163),S=t(76189),O=t(77027),M=t(41360);let v=(()=>{class o{constructor(){this.childActive=!1,this.parentActive=!1,this.items=[1,2,3]}onParentActiveZone(n){this.parentActive=n}onChildActiveZone(n){this.childActive=n}onClick({nativeFocusableElement:n}){n&&n.focus()}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-active-zone-example-1"]],decls:30,vars:7,consts:function(){let i,n;return i=$localize`:␟a5c932c71cc41af03986749d41d4e3c1ec8b9644␟6238607653600005463: You can bind different elements with ${"\ufffd#23\ufffd"}:START_TAG_CODE:[tuiActiveZoneParent]${"\ufffd/#23\ufffd"}:CLOSE_TAG_CODE: directive `,n=$localize`:␟a18de0931ff43128131c2fcc6058c5f7542df1e0␟1484761029469449608:Zone keeps active after browser tab change`,[["placeholder","input outside a zone"],[1,"active-zone",3,"tuiActiveZoneChange"],["parent","tuiActiveZone"],["tuiButton","","type","button"],[1,"active-zone",3,"tuiActiveZoneParent","tuiActiveZoneChange"],["input",""],i,["placeholder","input outside zone"],[3,"click"],n]},template:function(n,c){if(1&n){const a=e.EpF();e.TgZ(0,"p"),e._uU(1),e.qZA(),e.TgZ(2,"p"),e._uU(3),e.qZA(),e.TgZ(4,"p"),e._UZ(5,"input",0),e.qZA(),e.TgZ(6,"div",1,2),e.NdJ("tuiActiveZoneChange",function(E){return c.onParentActiveZone(E)}),e.TgZ(8,"h2"),e._uU(9,"Parent zone"),e.qZA(),e.TgZ(10,"button",3),e._uU(11," A button inside zone "),e.qZA(),e.qZA(),e.TgZ(12,"p"),e.TgZ(13,"button"),e._uU(14,"A button outside of zone"),e.qZA(),e.qZA(),e.TgZ(15,"div",4),e.NdJ("tuiActiveZoneChange",function(E){return c.onChildActiveZone(E)}),e.TgZ(16,"h2"),e._uU(17,"Child zone"),e.qZA(),e.TgZ(18,"tui-input",null,5),e._uU(20,"Input inside zone"),e.qZA(),e.TgZ(21,"p"),e.tHW(22,6),e._UZ(23,"code"),e.N_p(),e.qZA(),e.qZA(),e.TgZ(24,"p"),e._UZ(25,"input",7),e.TgZ(26,"button",8),e.NdJ("click",function(){e.CHM(a);const E=e.MAs(19);return c.onClick(E)}),e._uU(27,"Focus input in zone"),e.qZA(),e.qZA(),e.TgZ(28,"p"),e.SDv(29,9),e.qZA()}if(2&n){const a=e.MAs(7);e.xp6(1),e.hij("Parent zone: ",c.parentActive,""),e.xp6(2),e.hij("Child zone: ",c.childActive,""),e.xp6(3),e.ekj("active-zone_active",c.parentActive),e.xp6(9),e.ekj("active-zone_active",c.childActive),e.Q6J("tuiActiveZoneParent",a)}},directives:[m.e,S.v,O.K,M.w],styles:[".active-zone[_ngcontent-%COMP%]{padding:1.25rem;border:2px solid}.active-zone_active[_ngcontent-%COMP%]{border-color:var(--tui-primary)}"],changeDetection:0}),o})();var r=t(76349);function D(o,i){if(1&o&&(e.TgZ(0,"p"),e.tHW(1,3),e._UZ(2,"code"),e.N_p(),e.qZA(),e.TgZ(3,"tui-doc-example",4),e._UZ(4,"tui-active-zone-example-1"),e.qZA()),2&o){const n=e.oxw();e.xp6(3),e.Q6J("content",n.example1)}}function f(o,i){if(1&o&&(e.TgZ(0,"ol",5),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,6),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",7),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,8),e.qZA(),e._UZ(9,"tui-doc-code",9),e._UZ(10,"tui-doc-code",10),e.qZA(),e.qZA()),2&o){const n=e.oxw();e.xp6(5),e.Q6J("code",n.exampleModule),e.xp6(4),e.Q6J("code",n.exampleHtml),e.xp6(1),e.Q6J("code",n.exampleComponent)}}let F=(()=>{class o{constructor(){this.exampleModule=t.e(20226).then(t.t.bind(t,20226,17)),this.exampleHtml=t.e(61323).then(t.t.bind(t,61323,17)),this.exampleComponent=t.e(40410).then(t.t.bind(t,40410,17)),this.example1={TypeScript:t.e(41349).then(t.t.bind(t,41349,17)),HTML:t.e(75177).then(t.t.bind(t,75177,17))}}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["example-tui-active-zone"]],decls:3,vars:0,consts:function(){let i,n,c,a,l;return i=$localize`:␟12cbb0bfca7aa943e6579cb408b6e5cad88c810b␟4573156301401658203:ActiveZone`,n=$localize`:␟c21d9e6d201daf36fd245fa08f46330abfdd8b11␟5491960160291226248:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiActiveZone${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to track a scope that user interacts with. For example, for closing dropdown on blur `,c=$localize`:␟dbc6ad292bce741b6302c6fc70a32a796734e2fa␟8188585896827437796:Composite zone`,a=$localize`:␟565d5c4a6d667762251f4fdeb1e747718456c702␟4423300948625175026: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiActiveZoneModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,l=$localize`:␟17eb6975c7e319b982144e2bd8f0ee6999e9eb2e␟3799636229807761262:Add to the template and subscribe to a change:`,[["header",i,"package","CDK","type","directives"],["pageTab",""],["pageTab","Setup"],n,["id","multiple","heading",c,3,"content"],[1,"b-demo-steps"],a,["filename","myComponent.module.ts",3,"code"],l,["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"]]},template:function(n,c){1&n&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,D,5,1,"ng-template",1),e.YNc(2,f,11,3,"ng-template",2),e.qZA())},directives:[p.q,Z.n,g.f,v,r.c],styles:[".dropdown[_ngcontent-%COMP%]{max-width:20rem;padding:.5rem 1.25rem}"],changeDetection:0}),o})(),I=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.ez,A.TuiInputModule,_.TuiButtonModule,s.TuiActiveZoneModule,d.fV,C.Bz.forChild((0,d.Ve)(F))]]}),o})()}}]);