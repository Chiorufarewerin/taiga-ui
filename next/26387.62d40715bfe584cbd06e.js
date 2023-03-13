"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[26387],{89842:($,p,e)=>{e.r(p),e.d(p,{ExampleTuiTableBarModule:()=>I});var g=e(12057),b=e(24751),h=e(33982),x=e(23121),s=e(29851),u=e(3497),c=e(18738),B=e(89570),r=e(40249),y=e(79765),d=e(75319),f=e(46782),t=e(74788),C=e(88331),Z=e(37159),v=e(57068),T=e(76189),U=e(30644);const A=["tableBarTemplate"];function E(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"button",3),t._uU(2," Save "),t.qZA(),t.TgZ(3,"button",4),t.NdJ("click",function(){return t.CHM(o).$implicit()}),t._uU(4," Cancel "),t.qZA(),t.TgZ(5,"button",5),t._uU(6," Delete "),t.qZA(),t.qZA()}}let M=(()=>{class n{constructor(o){this.tableBarsService=o,this.tableBarTemplate="",this.subscription=new d.w}showTableBar(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{hasCloseButton:!0,adaptive:!0}).subscribe()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(r.TuiTableBarsService))},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-table-bar-example-1"]],viewQuery:function(o,i){if(1&o&&t.Gf(A,5),2&o){let l;t.iGM(l=t.CRH())&&(i.tableBarTemplate=l.first)}},decls:4,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"],["tableBarTemplate",""],["tuiMode","onDark",1,"content"],["tuiButton","","type","button","size","m"],["tuiButton","","type","button","appearance","flat","size","m",1,"tui-space_left-3",3,"click"],["tuiButton","","type","button","appearance","outline","size","m","icon","tuiIconTrashLarge",1,"delete-button"]],template:function(o,i){1&o&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return i.showTableBar()}),t._uU(1," Show TableBar\n"),t.qZA(),t.YNc(2,E,7,0,"ng-template",null,1,t.W1O))},directives:[T.v,U.w],styles:[".content[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.875rem 0}.delete-button[_ngcontent-%COMP%]{margin-left:auto}"],changeDetection:0}),n})();var P=e(54476),S=e(17023),V=e(76349);const N=["tableBarTemplate"];function J(n,a){if(1&n&&(t.TgZ(0,"p"),t._uU(1," It is an element on the bottom of screen to show actions by multiselect of some items. It works with custom content. "),t.qZA(),t.TgZ(2,"tui-doc-example",2),t._UZ(3,"tui-table-bar-example-1"),t.qZA()),2&n){const o=t.oxw();t.xp6(2),t.Q6J("content",o.example1)}}function H(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1,"Some template"),t.qZA())}function Q(n,a){1&n&&t._uU(0," Adaprive content ")}function z(n,a){1&n&&t._uU(0," Enable close button ")}function L(n,a){1&n&&t._uU(0," Light / dark mode ")}function Y(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"button",3),t.NdJ("click",function(){return t.CHM(o),t.oxw().showTableBar()}),t._uU(2," Show tableBar "),t.qZA(),t.TgZ(3,"button",4),t.NdJ("click",function(){return t.CHM(o),t.oxw().destroy()}),t._uU(4," Hide tableBar "),t.qZA(),t.qZA(),t.YNc(5,H,2,0,"ng-template",null,5,t.W1O),t._UZ(7,"br"),t.TgZ(8,"tui-doc-documentation"),t.YNc(9,Q,1,0,"ng-template",6),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(o),t.oxw().adaptive=l}),t.YNc(10,z,1,0,"ng-template",7),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(o),t.oxw().hasCloseButton=l}),t.YNc(11,L,1,0,"ng-template",8),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(o),t.oxw().mode=l}),t.qZA()}if(2&n){const o=t.oxw();t.xp6(9),t.Q6J("documentationPropertyValue",o.adaptive),t.xp6(1),t.Q6J("documentationPropertyValue",o.hasCloseButton),t.xp6(1),t.Q6J("documentationPropertyValues",o.modeVariants)("documentationPropertyValue",o.mode)}}function D(n,a){if(1&n&&(t.TgZ(0,"ol",9),t.TgZ(1,"li"),t.TgZ(2,"p"),t._uU(3," Add "),t.TgZ(4,"code"),t._uU(5,"TuiTableBarsHostModule"),t.qZA(),t._uU(6," into your app.module "),t.qZA(),t._UZ(7,"tui-doc-code",10),t.qZA(),t.TgZ(8,"li"),t.TgZ(9,"p"),t._uU(10," Add "),t.TgZ(11,"code"),t._uU(12,"tui-table-bars-host"),t.qZA(),t._uU(13," into your app.template "),t.qZA(),t._UZ(14,"tui-doc-code",10),t.qZA(),t.TgZ(15,"li"),t.TgZ(16,"p"),t._uU(17," Use "),t.TgZ(18,"code"),t._uU(19,"open"),t.qZA(),t._uU(20," method and subscribe to returened "),t.TgZ(21,"code"),t._uU(22,"Observable"),t.qZA(),t.qZA(),t._UZ(23,"tui-doc-code",11),t._UZ(24,"tui-doc-code",12),t.qZA(),t.TgZ(25,"li"),t.TgZ(26,"p"),t._uU(27," If you use component in lazy loading modules, do not forget to pass into "),t.TgZ(28,"code"),t._uU(29,"new PolymorpheusComponent Injector"),t.qZA(),t._uU(30," of component where you open table bar "),t.qZA(),t._UZ(31,"tui-doc-code",13),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(7),t.Q6J("code",o.exampleModule),t.xp6(7),t.Q6J("code",o.exampleHtml),t.xp6(9),t.Q6J("code",o.exampleServiceUsageHtml),t.xp6(1),t.Q6J("code",o.exampleServiceUsage),t.xp6(7),t.Q6J("code",o.exampleLazyModule)}}let O=(()=>{class n{constructor(o){this.tableBarsService=o,this.destroy$=new y.xQ,this.tableBarTemplate="",this.exampleServiceUsage=e.e(39650).then(e.t.bind(e,39650,17)),this.exampleServiceUsageHtml=e.e(76247).then(e.t.bind(e,76247,17)),this.exampleLazyModule=e.e(3991).then(e.t.bind(e,3991,17)),this.exampleModule=e.e(22945).then(e.t.bind(e,22945,17)),this.exampleHtml=e.e(91077).then(e.t.bind(e,91077,17)),this.example1={TypeScript:e.e(40427).then(e.t.bind(e,40427,17)),HTML:e.e(36573).then(e.t.bind(e,36573,17)),LESS:e.e(53278).then(e.t.bind(e,53278,17))},this.modeVariants=["onLight","onDark"],this.mode=this.modeVariants[0],this.adaptive=!1,this.hasCloseButton=!1,this.subscription=new d.w}showTableBar(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{adaptive:this.adaptive,mode:this.mode,hasCloseButton:this.hasCloseButton}).pipe((0,f.R)(this.destroy$)).subscribe()}destroy(){this.destroy$.next()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(r.TuiTableBarsService))},n.\u0275cmp=t.Xpm({type:n,selectors:[["example-tui-table-bar"]],viewQuery:function(o,i){if(1&o&&t.Gf(N,5),2&o){let l;t.iGM(l=t.CRH())&&(i.tableBarTemplate=l.first)}},decls:4,vars:0,consts:[["header","TableBarsService","package","ADDON-TABLEBARS","path","addon-tablebars/services/table-bars.service.ts"],["pageTab",""],["id","base","heading","Basic",3,"content"],["tuiButton","","type","button","size","m",1,"tui-space_right-2",3,"click"],["tuiButton","","type","button","size","m",3,"click"],["tableBarTemplate",""],["documentationPropertyName","adaptive","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasCloseButton","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","mode","documentationPropertyType","TuiBrightness",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","customNotification.component.ts",3,"code"]],template:function(o,i){1&o&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,J,4,1,"ng-template",1),t.YNc(2,Y,12,4,"ng-template",1),t.YNc(3,D,32,5,"ng-template",1),t.qZA())},directives:[C.q,Z.n,v.f,M,T.v,P.z,S.B,V.c],styles:[".label[_ngcontent-%COMP%]{width:6.25rem}"],changeDetection:0}),n})(),I=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,u.TuiButtonModule,x.TuiMoneyModule,B.wq,c.TuiRadioListModule,c.TuiInputModule,u.TuiLinkModule,b.u5,u.TuiModeModule,s.fV,h.Bz.forChild((0,s.Ve)(O))]]}),n})()}}]);