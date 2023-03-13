"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[9657],{9657:(F,r,n)=>{n.r(r),n.d(r,{ExampleTuiRequiredSetterModule:()=>J});var c=n(12057),a=n(24751),s=n(33982),m=n(29851),d=n(3497),g=n(18738),e=n(74788),T=n(88331),f=n(37159),x=n(64762),Z=n(68339);function q(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1,"\u2665"),e.qZA())}class i{constructor(){this.items=[]}set quantity(o){this.items=new Array(o).fill(Math.floor(Math.random()*Math.floor(100)))}}i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["example-tui-required-setter-demo"]],inputs:{quantity:"quantity"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(o,u){1&o&&e.YNc(0,q,2,0,"span",0),2&o&&e.Q6J("ngForOf",u.items)},directives:[c.sg],encapsulation:2,changeDetection:0}),(0,x.gn)([(0,Z.tuiRequiredSetter)(t=>Number.isInteger(t)&&t>=5,"Should be integer number more than min value")],i.prototype,"quantity",null);var h=n(65009),v=n(10383),y=n(76189),C=n(54476),S=n(17023),U=n(76349);function A(t,o){if(1&t){const u=e.EpF();e.TgZ(0,"p"),e._uU(1,"Decorator setter @Input"),e.qZA(),e.TgZ(2,"p"),e._uU(3," Decorator stops "),e.TgZ(4,"code"),e._uU(5,"undefined"),e.qZA(),e._uU(6," values if they were passed into setter input. If it gets "),e.TgZ(7,"code"),e._uU(8,"undefined"),e.qZA(),e._uU(9," , setter will not be called and it will show an error message about the problem in console in dev mode. "),e.qZA(),e.TgZ(10,"div"),e.TgZ(11,"p"),e._uU(12,"See console. Min value is 5"),e.qZA(),e._UZ(13,"example-tui-required-setter-demo",2),e.TgZ(14,"tui-input-count",3),e.NdJ("ngModelChange",function(l){return e.CHM(u),e.oxw().quantity=l}),e._uU(15," quantity "),e.qZA(),e.TgZ(16,"button",4),e.NdJ("click",function(){return e.CHM(u),e.oxw().setUndefined()}),e._uU(17," Set undefined "),e.qZA(),e.qZA()}if(2&t){const u=e.oxw();e.xp6(13),e.Q6J("quantity",u.quantity),e.xp6(1),e.Q6J("ngModel",u.quantity)}}function R(t,o){1&t&&e._uU(0," Optional argument, contract function ")}function E(t,o){1&t&&e._uU(0," Arguments for console.error if check is unsuccessful ")}function M(t,o){1&t&&(e.TgZ(0,"p"),e._uU(1," You can also pass contract function of type "),e.TgZ(2,"code"),e._uU(3,"TuiBooleanHandler<T>"),e.qZA(),e._uU(4," with the component instance as "),e.TgZ(5,"code"),e._uU(6,"this"),e.qZA(),e._uU(7," . If check is unsuccessful, it shows an error message about the problem in console in dev mode. "),e.qZA(),e.TgZ(8,"tui-doc-documentation"),e.YNc(9,R,1,0,"ng-template",5),e.YNc(10,E,1,0,"ng-template",6),e.qZA())}function D(t,o){if(1&t&&(e.TgZ(0,"ol",7),e.TgZ(1,"li"),e.TgZ(2,"p"),e._uU(3," Add "),e.TgZ(4,"code"),e._uU(5,"@tuiRequiredSetter"),e.qZA(),e._uU(6," to setter input of your component "),e.qZA(),e._UZ(7,"tui-doc-code",8),e.qZA(),e.qZA()),2&t){const u=e.oxw();e.xp6(7),e.Q6J("code",u.exampleDecorator)}}let N=(()=>{class t{constructor(){this.exampleDecorator=n.e(92029).then(n.t.bind(n,92029,17))}setUndefined(){this.quantity=void 0}}return t.\u0275fac=function(u){return new(u||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["example-tui-required-setter"]],decls:4,vars:0,consts:[["header","RequiredSetter","package","CDK","path","cdk/decorators/required-setter.ts"],["pageTab",""],[3,"quantity"],[1,"tui-space_top-4",3,"ngModel","ngModelChange"],["tuiButton","","type","button",1,"tui-space_top-4","tui-space_bottom-8",3,"click"],["documentationPropertyName","assertion","documentationPropertyType","TuiBooleanHandler<T>"],["documentationPropertyName","args","documentationPropertyType","any"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(u,p){1&u&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,A,18,2,"ng-template",1),e.YNc(2,M,11,0,"ng-template",1),e.YNc(3,D,8,1,"ng-template",1),e.qZA())},directives:[T.q,f.n,i,h.E,v.a,a.JJ,a.On,y.v,C.z,S.B,U.c],encapsulation:2,changeDetection:0}),t})(),J=(()=>{class t{}return t.\u0275fac=function(u){return new(u||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,a.u5,g.TuiInputCountModule,d.TuiButtonModule,m.fV,s.Bz.forChild((0,m.Ve)(N))]]}),t})()}}]);