"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[23678],{23678:(H,s,e)=>{e.r(s),e.d(s,{ExampleTuiTableFiltersModule:()=>P});var m=e(12057),a=e(24751),d=e(33982),T=e(29851),c=e(36256),p=e(3497),u=e(18738),t=e(74788),r=e(88331),g=e(37159),f=e(57068),x=e(76215),Z=e(16753),v=e(13735),h=e(98777),b=e(92338),F=e(82535),A=e(19582),M=e(222),y=e(96408),C=e(57681),E=e(84190),J=e(62818),U=e(48598),N=e(44910),O=e(59544);function Q(l,o){if(1&l&&(t.TgZ(0,"td",11),t._uU(1),t.qZA()),2&l){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function B(l,o){if(1&l&&(t.TgZ(0,"td",11),t._uU(1),t.ALo(2,"tuiFormatNumber"),t.qZA()),2&l){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,n.balance)," ")}}function L(l,o){1&l&&(t.TgZ(0,"tr",9),t.YNc(1,Q,2,1,"td",10),t.YNc(2,B,3,3,"td",10),t.qZA()),2&l&&(t.xp6(1),t.Q6J("tuiCell","name"),t.xp6(1),t.Q6J("tuiCell","balance"))}const S=function(){return{standalone:!0}};let Y=(()=>{class l{constructor(){this.form=new a.cw({balance:new a.NI(0)}),this.data=[{name:"Alex Inkin",balance:1323525},{name:"Roman Sedov",balance:523242},{name:"Vladimir Potekhin",balance:645465},{name:"Nikita Barsukov",balance:468468},{name:"Maxim Ivanov",balance:498654}],this.columns=Object.keys(this.data[0]),this.filter=(n,i)=>n>=i}onToggle(n){n?this.form.enable():this.form.disable()}}return l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["tui-table-filters-example-1"]],decls:18,vars:11,consts:[["tuiTableFilters",""],[1,"form",3,"formGroup"],["tuiTableFilter","balance","formControlName","balance",1,"control",3,"tuiGenericFilter"],[3,"ngModelOptions","ngModel","ngModelChange"],["tuiTable","",1,"table",3,"columns"],["tuiThGroup",""],["tuiTh",""],["tuiTbody",""],["tuiTr","",4,"ngFor","ngForOf"],["tuiTr",""],["tuiTd","",4,"tuiCell"],["tuiTd",""]],template:function(n,i){1&n&&(t.ynx(0,0),t.TgZ(1,"form",1),t.TgZ(2,"tui-input-number",2),t._uU(3," Minimal balance "),t.qZA(),t.TgZ(4,"label"),t.TgZ(5,"tui-toggle",3),t.NdJ("ngModelChange",function(X){return i.onToggle(X)}),t.qZA(),t._uU(6," Enable filtering "),t.qZA(),t.qZA(),t.TgZ(7,"table",4),t.TgZ(8,"thead"),t.TgZ(9,"tr",5),t.TgZ(10,"th",6),t._uU(11,"Name"),t.qZA(),t.TgZ(12,"th",6),t._uU(13,"Balance"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"tbody",7),t.YNc(15,L,3,2,"tr",8),t.ALo(16,"async"),t.ALo(17,"tuiTableFilters"),t.qZA(),t.qZA(),t.BQk()),2&n&&(t.xp6(1),t.Q6J("formGroup",i.form),t.xp6(1),t.Q6J("tuiGenericFilter",i.filter),t.xp6(3),t.Q6J("ngModelOptions",t.DdM(10,S))("ngModel",i.form.enabled),t.xp6(2),t.Q6J("columns",i.columns),t.xp6(8),t.Q6J("ngForOf",t.lcZ(16,6,t.lcZ(17,8,i.data))))},directives:[x.w,a._Y,a.JL,a.sg,Z.q,v.g,h.X,a.JJ,a.u,b.C,F.p,a.On,A.c,M.E,y.W,C.j,m.sg,E.f,J.B,U.K],pipes:[m.Ov,N.h,O.m],styles:[".form[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:1rem}.control[_ngcontent-%COMP%]{flex:1;margin-right:2rem}.table[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),l})();var j=e(76349);function D(l,o){if(1&l&&(t.TgZ(0,"p"),t._uU(1,"This module allows you to filter table data in a flexible way."),t.qZA(),t.TgZ(2,"tui-doc-example",3),t._UZ(3,"tui-table-filters-example-1"),t.qZA()),2&l){const n=t.oxw();t.xp6(2),t.Q6J("content",n.example1)}}function G(l,o){if(1&l&&(t.TgZ(0,"ol",4),t.TgZ(1,"li"),t.TgZ(2,"p"),t._uU(3," Import "),t.TgZ(4,"code"),t._uU(5,"TuiTableFiltersModule"),t.qZA(),t._uU(6," into a module where you want to filter data for your table "),t.qZA(),t._UZ(7,"tui-doc-code",5),t.qZA(),t.TgZ(8,"li"),t.TgZ(9,"p"),t._uU(10,"Add directives and pipe to the template:"),t.qZA(),t._UZ(11,"tui-doc-code",6),t.qZA(),t.qZA()),2&l){const n=t.oxw();t.xp6(7),t.Q6J("code",n.exampleModule),t.xp6(4),t.Q6J("code",n.exampleHtml)}}let I=(()=>{class l{constructor(){this.example1={TypeScript:e.e(31739).then(e.t.bind(e,31739,17)),HTML:e.e(98907).then(e.t.bind(e,98907,17)),LESS:e.e(78318).then(e.t.bind(e,78318,17))},this.exampleModule=e.e(13837).then(e.t.bind(e,13837,17)),this.exampleHtml=e.e(24361).then(e.t.bind(e,24361,17))}}return l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["example-table-filters"]],decls:3,vars:0,consts:[["header","TableFilters","package","ADDON-TABLE","type","components"],["pageTab",""],["pageTab","Setup"],["id","basic","heading","Basic",3,"content"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(n,i){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,D,4,1,"ng-template",1),t.YNc(2,G,12,2,"ng-template",2),t.qZA())},directives:[r.q,g.n,f.f,Y,j.c],encapsulation:2,changeDetection:0}),l})(),P=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[m.ez,a.u5,a.UX,p.TuiFormatNumberPipeModule,u.TuiInputNumberModule,u.TuiToggleModule,c.TuiTableModule,c.TuiTableFiltersModule,T.fV,d.Bz.forChild((0,T.Ve)(I))]]}),l})()}}]);