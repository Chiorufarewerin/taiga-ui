"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[10490],{10490:(Y,p,o)=>{o.r(p),o.d(p,{DialogsModule:()=>U});var m=o(12057),g=o(33982),u=o(29851),e=o(3497),r=o(18738),t=o(74788),v=o(88331),h=o(57068),f=o(43190),c=o(68393),T=o(76189),y=o(44124);function x(n,l){1&n&&(t.TgZ(0,"div",4),t._UZ(1,"tui-avatar",5),t._uU(2," \xabChoose wisely\xbb "),t.qZA()),2&n&&(t.xp6(1),t.Q6J("rounded",!0))}function D(n,l){1&n&&(t.TgZ(0,"div",4),t._UZ(1,"tui-avatar",6),t._uU(2," \xabYou chose poorly\xbb "),t.qZA()),2&n&&(t.xp6(1),t.Q6J("rounded",!0))}function A(n,l){1&n&&(t.TgZ(0,"div",4),t._uU(1," \xabYou have chosen wisely\xbb "),t._UZ(2,"tui-avatar",7),t.qZA()),2&n&&(t.xp6(2),t.Q6J("rounded",!0))}let Z=(()=>{class n{constructor(s,a){this.alertService=s,this.promptService=a}onClick(s,a,i){this.promptService.open(s,{heading:"Taiga UI is the best",buttons:["Absolutely!","No way!"]}).pipe((0,f.w)(d=>d?this.alertService.open(i,{status:"success"}):this.alertService.open(a,{status:"error"}))).subscribe()}}return n.\u0275fac=function(s){return new(s||n)(t.Y36(e.TuiAlertService),t.Y36(c.l))},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-dialogs-example-1"]],decls:8,vars:0,consts:[["tuiButton","","type","button",3,"click"],["choose",""],["poorly",""],["wisely",""],[1,"wrapper"],["avatarUrl","assets/images/choose.png","size","l",1,"tui-space_right-2",3,"rounded"],["avatarUrl","assets/images/poorly.png",1,"tui-space_right-2",3,"rounded"],["avatarUrl","assets/images/wisely.png",1,"tui-space_left-1",3,"rounded"]],template:function(s,a){if(1&s){const i=t.EpF();t.TgZ(0,"button",0),t.NdJ("click",function(){t.CHM(i);const S=t.MAs(3),E=t.MAs(5),J=t.MAs(7);return a.onClick(S,E,J)}),t._uU(1," Show prompt\n"),t.qZA(),t.YNc(2,x,3,1,"ng-template",null,1,t.W1O),t.YNc(4,D,3,1,"ng-template",null,2,t.W1O),t.YNc(6,A,3,1,"ng-template",null,3,t.W1O)}},directives:[T.v,y.J],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),n})(),M=(()=>{class n{constructor(){this.example1={TypeScript:o.e(12662).then(o.t.bind(o,12662,17)),HTML:o.e(28503).then(o.t.bind(o,28503,17)),LESS:o.e(25196).then(o.t.bind(o,25196,17)),"prompt/prompt.service.ts":o.e(65385).then(o.t.bind(o,65385,17)),"prompt/prompt-options.ts":o.e(47877).then(o.t.bind(o,47877,17)),"prompt/prompt.component.ts":o.e(28198).then(o.t.bind(o,28198,17)),"prompt/prompt.template.html":o.e(96381).then(o.t.bind(o,96381,17)),"prompt/prompt.style.less":o.e(68148).then(o.t.bind(o,68148,17)),"prompt/prompt.module.ts":o.e(95425).then(o.t.bind(o,95425,17))}}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["dialogs"]],decls:5,vars:1,consts:[["header","Dialogs"],["id","custom-dialog","heading","Custom dialog",3,"content"]],template:function(s,a){1&s&&(t.TgZ(0,"tui-doc-page",0),t.TgZ(1,"p"),t._uU(2," You can easily create your custom dialogs by extending our abstract class and providing your own component as a dialog. "),t.qZA(),t.TgZ(3,"tui-doc-example",1),t._UZ(4,"tui-dialogs-example-1"),t.qZA(),t.qZA()),2&s&&(t.xp6(3),t.Q6J("content",a.example1))},directives:[v.q,h.f,Z],encapsulation:2,changeDetection:0}),n})();var B=o(89570);let C=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[c.B],imports:[[e.TuiButtonModule,B.wq,m.ez]]}),n})(),U=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,C,e.TuiButtonModule,r.TuiAvatarModule,u.fV,g.Bz.forChild((0,u.Ve)(M))]]}),n})()}}]);