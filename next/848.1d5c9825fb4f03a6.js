(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[848],{848:(e,t,o)=>{o.r(t),o.d(t,{ExampleTuiDialogModule:()=>ne});var i=o(76733),n=o(72133),a=o(42932),u=o(87253),l=o(27095),d=o(64064),c=o(39854),p=o(6254),r=o(20755),s=o(84787),m=o(20513),g=o(7386),h=o(25108),T=o(47880),x=o(27146),y=o(2313),Z=o(36877),b=o(73097),U=o(38404),f=o(65004),_=o(43894),A=o(17894),q=o(97967),M=o(84583),C=o(60778),P=o(9542),w=o(70043),S=o(46155),N=o(7747),J=o(2384),v=o(58886),V=o(53294),L=o(44351),D=o(42072);function k(e,t){if(1&e&&(r.TgZ(0,"p"),r._uU(1,"Built-in implementation of Taiga UI modals"),r.qZA(),r.TgZ(2,"p"),r._uU(3," If you want custom dialogs see "),r.TgZ(4,"a",2),r._uU(5," this link "),r.qZA(),r._uU(6," on creating your own implementation "),r.qZA(),r.TgZ(7,"tui-notification",3),r._uU(8," Use "),r.TgZ(9,"code")(10,"strong"),r._uU(11,"TUI_DIALOGS_CLOSE"),r.qZA()(),r._uU(12," token if you need to close dialog with from a stream. For example, this way you can close dialogs by logout: "),r.TgZ(13,"p"),r._UZ(14,"tui-doc-code",4),r.qZA()(),r.TgZ(15,"tui-doc-example",5),r._UZ(16,"tui-dialog-example-1"),r.qZA(),r.TgZ(17,"tui-doc-example",6),r._UZ(18,"tui-dialog-example-6"),r.qZA(),r.TgZ(19,"tui-doc-example",7),r._UZ(20,"tui-dialog-example-2"),r.qZA(),r.TgZ(21,"tui-doc-example",8),r._UZ(22,"tui-dialog-example-3"),r.qZA(),r.TgZ(23,"tui-doc-example",9),r._UZ(24,"tui-dialog-example-4"),r.qZA(),r.TgZ(25,"tui-doc-example",10),r._UZ(26,"tui-dialog-example-5"),r.qZA(),r.TgZ(27,"tui-doc-example",11),r._UZ(28,"tui-dialog-example-7"),r.qZA(),r.TgZ(29,"tui-doc-example",12),r._UZ(30,"tui-dialog-example-8"),r.qZA(),r.TgZ(31,"tui-doc-example",13),r._UZ(32,"tui-dialog-example-9"),r.qZA(),r.TgZ(33,"tui-doc-example",14),r._UZ(34,"tui-dialog-example-10"),r.qZA()),2&e){const e=r.oxw();r.xp6(14),r.Q6J("code",e.dialogsCloseToken),r.xp6(1),r.Q6J("content",e.example1),r.xp6(2),r.Q6J("content",e.example6),r.xp6(2),r.Q6J("content",e.example2),r.xp6(2),r.Q6J("content",e.example3),r.xp6(2),r.Q6J("content",e.example4),r.xp6(2),r.Q6J("content",e.example5),r.xp6(2),r.Q6J("content",e.example7),r.xp6(2),r.Q6J("content",e.example8),r.xp6(2),r.Q6J("content",e.example9),r.xp6(2),r.Q6J("content",e.example10)}}function H(e,t){1&e&&(r.TgZ(0,"h2"),r._uU(1,"Template can be customized"),r.qZA())}function E(e,t){1&e&&r._uU(0," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eligendi esse minima nobis! Assumenda debitis, delectus dicta dolore eos explicabo fuga id inventore maiores, nihil, nobis nostrum quasi quo unde! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eligendi esse minima nobis! Assumenda debitis, delectus dicta dolore eos explicabo fuga id inventore maiores, nihil, nobis nostrum quasi quo unde! ")}function z(e,t){if(1&e){const e=r.EpF();r.YNc(0,H,2,0,"h2",25),r.TgZ(1,"p"),r._uU(2," Dialog has "),r.TgZ(3,"code"),r._uU(4,"Observer"),r.qZA(),r._uU(5," in its context to call "),r.TgZ(6,"code"),r._uU(7,"next"),r.qZA(),r._uU(8," , "),r.TgZ(9,"code"),r._uU(10,"complete"),r.qZA(),r._uU(11," or "),r.TgZ(12,"code"),r._uU(13,"error"),r.qZA(),r._uU(14," of stream. There is also a "),r.TgZ(15,"code"),r._uU(16,"completeWith"),r.qZA(),r._uU(17," method to pass data and close dialog with one action "),r.qZA(),r.TgZ(18,"p"),r._uU(19),r.qZA(),r.TgZ(20,"p")(21,"i"),r._uU(22," There is no need in input data for template dialog because you can set it in template. But if you use a component, context is the only way to get data from outside "),r.qZA()(),r.TgZ(23,"tui-accordion",26)(24,"tui-accordion-item"),r._uU(25," Dynamic height change "),r.YNc(26,E,1,0,"ng-template",27),r.qZA()(),r.TgZ(27,"button",28),r.NdJ("click",(function(){const t=r.CHM(e).$implicit;return r.KtG(t.complete())})),r._uU(28," Close "),r.qZA(),r.TgZ(29,"button",28),r.NdJ("click",(function(){const t=r.CHM(e).$implicit;return r.KtG(t.next("Hi"))})),r._uU(30,' Say "Hi" '),r.qZA(),r.TgZ(31,"button",28),r.NdJ("click",(function(){const t=r.CHM(e).completeWith;return r.KtG(t("Hi and bye!"))})),r._uU(32,' Say "Hi and bye!" '),r.qZA()}if(2&e){const e=t.data,o=t.size;r.Q6J("ngIf","xl"===o),r.xp6(19),r.hij("Input data: ",e,".")}}function Q(e,t){1&e&&(r._uU(0," Show a cross to close dialog. Pass "),r._UZ(1,"code",29),r._uU(2," if you want prevent closing, for example, with a prompt. "))}function I(e,t){1&e&&(r._uU(0," Dialog can be canceled with Escape key or with a click outside. Pass "),r._UZ(1,"code",29),r._uU(2," if you want prevent closing, for example, with a prompt. "))}function O(e,t){1&e&&(r._uU(0," Input data for dialog, type: "),r._UZ(1,"code",30))}function Y(e,t){1&e&&r._uU(0," Content above a heading ")}function B(e,t){1&e&&r._uU(0," Heading of dialog ")}function G(e,t){1&e&&(r._uU(0," Cross click, overlay click or Escape click emits an error into "),r.TgZ(1,"code"),r._uU(2,"Observable"),r.qZA(),r._uU(3,' (you can catch it with "catch" operator or onError handler) '))}function K(e,t){1&e&&r._uU(0," Size ")}function F(e,t){1&e&&r._uU(0," Appearance of dialog ")}function j(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"tui-doc-demo")(1,"button",15),r.NdJ("click",(function(){r.CHM(e);const t=r.MAs(4),o=r.oxw();return r.KtG(o.showDialog(t))})),r._uU(2," Show "),r.qZA()(),r.YNc(3,z,33,2,"ng-template",null,16,r.W1O),r.TgZ(5,"tui-doc-documentation"),r.YNc(6,Q,3,0,"ng-template",17),r.NdJ("documentationPropertyValueChange",(function(t){r.CHM(e);const o=r.oxw();return r.KtG(o.closeable=t)})),r.YNc(7,I,3,0,"ng-template",18),r.NdJ("documentationPropertyValueChange",(function(t){r.CHM(e);const o=r.oxw();return r.KtG(o.dismissible=t)})),r.YNc(8,O,2,0,"ng-template",19),r.NdJ("documentationPropertyValueChange",(function(t){r.CHM(e);const o=r.oxw();return r.KtG(o.data=t)})),r.YNc(9,Y,1,0,"ng-template",20),r.YNc(10,B,1,0,"ng-template",21),r.NdJ("documentationPropertyValueChange",(function(t){r.CHM(e);const o=r.oxw();return r.KtG(o.label=t)})),r.YNc(11,G,4,0,"ng-template",22),r.NdJ("documentationPropertyValueChange",(function(t){r.CHM(e);const o=r.oxw();return r.KtG(o.required=t)})),r.YNc(12,K,1,0,"ng-template",23),r.NdJ("documentationPropertyValueChange",(function(t){r.CHM(e);const o=r.oxw();return r.KtG(o.size=t)})),r.YNc(13,F,1,0,"ng-template",24),r.NdJ("documentationPropertyValueChange",(function(t){r.CHM(e);const o=r.oxw();return r.KtG(o.appearance=t)})),r.qZA()}if(2&e){const e=r.oxw();r.xp6(6),r.Q6J("documentationPropertyValue",e.closeable),r.xp6(1),r.Q6J("documentationPropertyValue",e.dismissible),r.xp6(1),r.Q6J("documentationPropertyValue",e.data),r.xp6(2),r.Q6J("documentationPropertyValue",e.label),r.xp6(1),r.Q6J("documentationPropertyValue",e.required),r.xp6(1),r.Q6J("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),r.xp6(1),r.Q6J("documentationPropertyValue",e.appearance)}}function W(e,t){if(1&e&&(r.TgZ(0,"ol",31)(1,"li")(2,"p"),r._uU(3," Use "),r.TgZ(4,"code"),r._uU(5,"open"),r.qZA(),r._uU(6," method to initiate a dialog, subscribe to a returned "),r.TgZ(7,"code"),r._uU(8,"Observable"),r.qZA(),r._uU(9," to show it : "),r.qZA(),r._UZ(10,"tui-doc-code",32),r.qZA(),r.TgZ(11,"li")(12,"p"),r._uU(13," If you want to use your own component as a dialog content, use "),r.TgZ(14,"code"),r._uU(15,"POLYMORPHEUS_CONTEXT"),r.qZA(),r._uU(16," in it. Dialog will provide this token with some useful options: "),r.TgZ(17,"code"),r._uU(18,"$implicit"),r.qZA(),r._uU(19," with "),r._UZ(20,"code",33),r._uU(21," and "),r.TgZ(22,"code"),r._uU(23,"completeWith"),r.qZA(),r._uU(24," hook to call "),r.TgZ(25,"code"),r._uU(26,"next"),r.qZA(),r._uU(27," and "),r.TgZ(28,"code"),r._uU(29,"complete"),r.qZA(),r._uU(30," in one action. "),r.qZA()(),r.TgZ(31,"li"),r._uU(32," You can also use a "),r.TgZ(33,"a",34),r._uU(34," template "),r.qZA()(),r.TgZ(35,"li")(36,"p"),r._uU(37," Use "),r.TgZ(38,"code"),r._uU(39,"Observer"),r.qZA(),r._uU(40," from "),r.TgZ(41,"code"),r._uU(42,"$implicit"),r.qZA(),r._uU(43," field of context to close a dialog or get some data "),r.qZA(),r._UZ(44,"tui-doc-code",35),r.qZA(),r.TgZ(45,"li")(46,"p"),r._uU(47," If you use dialog components in lazy loading modules, and want to reach for some local providers, you can pass "),r.TgZ(48,"code"),r._uU(49,"Injector"),r.qZA(),r._uU(50," into "),r.TgZ(51,"code"),r._uU(52,"new PolymorpheusComponent"),r.qZA(),r._uU(53," of your dialog component. "),r.qZA(),r._UZ(54,"tui-doc-code",35),r.qZA()()),2&e){const e=r.oxw();r.xp6(10),r.Q6J("code",e.exampleServiceUsage),r.xp6(34),r.Q6J("code",e.exampleCustomDialog),r.xp6(10),r.Q6J("code",e.exampleLazyModule)}}let X=(()=>{var e;class t{constructor(){this.alerts=(0,r.f3M)(d.TuiAlertService),this.dialogs=(0,r.f3M)(d.TuiDialogService),this.method=o.e(35795).then(o.t.bind(o,35795,17)),this.dialogsCloseToken=o.e(82155).then(o.t.bind(o,82155,17)),this.example1={TypeScript:o.e(27177).then(o.t.bind(o,27177,17)),HTML:o.e(50016).then(o.t.bind(o,50016,17))},this.example2={TypeScript:o.e(60737).then(o.t.bind(o,60737,17)),HTML:o.e(420).then(o.t.bind(o,420,17)),"dialog-example/dialog-example.module.ts":o.e(26136).then(o.t.bind(o,26136,17)),"dialog-example/dialog-example.component.ts":o.e(10523).then(o.t.bind(o,10523,17)),"dialog-example/dialog-example.style.less":o.e(45502).then(o.t.bind(o,45502,17)),"dialog-example/dialog-example.template.html":o.e(52065).then(o.t.bind(o,52065,17))},this.example3={TypeScript:o.e(13110).then(o.t.bind(o,13110,17)),HTML:o.e(61402).then(o.t.bind(o,98146,17))},this.example4={TypeScript:o.e(81191).then(o.t.bind(o,81191,17)),HTML:o.e(18279).then(o.t.bind(o,18279,17)),LESS:o.e(56225).then(o.t.bind(o,56225,17))},this.example5={TypeScript:o.e(93487).then(o.t.bind(o,93487,17)),HTML:o.e(28008).then(o.t.bind(o,28008,17)),LESS:o.e(57363).then(o.t.bind(o,57363,17))},this.example6={TypeScript:o.e(15792).then(o.t.bind(o,15792,17)),HTML:o.e(44671).then(o.t.bind(o,44671,17))},this.example7={TypeScript:o.e(64257).then(o.t.bind(o,64257,17)),HTML:o.e(33349).then(o.t.bind(o,33349,17)),"search-example/search-dialog-example.component.ts":o.e(49576).then(o.t.bind(o,42798,17)),"search-example/search-dialog-example.template.html":o.e(19016).then(o.t.bind(o,19016,17)),"search-example/search-dialog-example.component.less":o.e(56143).then(o.t.bind(o,56143,17)),"search-example/search-dialog.module.ts":o.e(14491).then(o.t.bind(o,14491,17))},this.example8={TypeScript:o.e(14756).then(o.t.bind(o,14756,17)),HTML:o.e(34979).then(o.t.bind(o,34979,17))},this.example9={TypeScript:o.e(18092).then(o.t.bind(o,18092,17)),HTML:o.e(8853).then(o.t.bind(o,8853,17)),LESS:o.e(16445).then(o.t.bind(o,16445,17)),"helpers/mock-cards.ts":o.e(8302).then(o.t.bind(o,8302,17)),"helpers/models.ts":o.e(21505).then(o.t.bind(o,21505,17)),"helpers/pay.service.ts":o.e(54914).then(o.t.bind(o,54914,17)),"helpers/validator.ts":o.e(70157).then(o.t.bind(o,70157,17)),"pay-modal/pay-modal.component.ts":o.e(11453).then(o.t.bind(o,11453,17)),"pay-modal/pay-modal.component.less":o.e(61979).then(o.t.bind(o,61979,17)),"pay-modal/pay-modal.component.html":o.e(40887).then(o.t.bind(o,40887,17)),"pay-modal/pay-modal.module.ts":o.e(63360).then(o.t.bind(o,63360,17))},this.example10={TypeScript:o.e(92043).then(o.t.bind(o,92043,17)),HTML:o.e(31111).then(o.t.bind(o,31111,17)),LESS:o.e(59549).then(o.t.bind(o,79452,17))},this.exampleServiceUsage=o.e(95994).then(o.t.bind(o,95994,17)),this.exampleCustomDialog=o.e(4850).then(o.t.bind(o,4850,17)),this.exampleLazyModule=o.e(62147).then(o.t.bind(o,62147,17)),this.data=100,this.closeable=!0,this.dismissible=!0,this.required=!1,this.sizeVariants=["s","m","l","fullscreen","page","auto"],this.size=this.sizeVariants[1],this.label="",this.appearance=""}showDialog(e){const{data:t,label:o,required:i,closeable:n,dismissible:a,size:u,appearance:l}=this;this.dialogs.open(e,{data:t,label:o,required:i,closeable:n,dismissible:a,size:u,appearance:l}).pipe((0,s.w)((e=>this.alerts.open(String(e))))).subscribe()}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=r.Xpm({type:e,selectors:[["example-tui-dialog"]],decls:4,vars:0,consts:[["header","Dialog","package","CORE"],["pageTab",""],["routerLink","/dialog/custom","tuiLink",""],[1,"tui-space_vertical-4"],[3,"code"],["id","string","heading","Dialog from string",3,"content"],["id","directive","heading","Dialog with directive",3,"content"],["id","data","description","Using two-way data transfer","heading","Component dialog",3,"content"],["id","template","heading","Dialog from template",3,"content"],["id","mobile","heading","Mobile dialog",3,"content"],["id","header","heading","Dialog with header",3,"content"],["id","mobile-fullscreen","heading","Fullscreen mobile dialog with autofocus",3,"content"],["id","prompt","description","Confirming closing of the dialog","heading","Prompt",3,"content"],["id","pay","description","Example with pay from modal","heading","Pay",3,"content"],["id","appearance","description","Custom appearance with CSS style","heading","Appearance",3,"content"],["size","m","tuiButton","","type","button",3,"click"],["template",""],["documentationPropertyName","closeable","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","dismissible","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","data","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","header","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","label","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","required","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyType","TuiDialogSize",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","appearance","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],[4,"ngIf"],[1,"container"],["tuiAccordionItemContent",""],["size","m","tuiButton","","type","button",1,"tui-space_top-2","tui-space_right-1",3,"click"],["tuiText","Observable<boolean>"],["tuiText","<T>"],[1,"b-demo-steps"],["filename","my.component.ts",3,"code"],["tuiText","Observer<O>"],["fragment","template","routerLink","/components/dialog","tuiLink",""],["filename","myDialog.component.ts",3,"code"]],template:function(e,t){1&e&&(r.TgZ(0,"tui-doc-page",0),r.YNc(1,k,35,11,"ng-template",1),r.YNc(2,j,14,8,"ng-template",1),r.YNc(3,W,55,3,"ng-template",1),r.qZA())},dependencies:[i.O5,m.o,g.K,h.d,T.v,x.V,y.L,Z.c,b.F,U.z,f.B,_.q,A.n,q.f,a.rH,M.v,C.TuiDialogExampleComponent1,P.TuiDialogExampleComponent2,w.TuiDialogExampleComponent3,S.TuiDialogExampleComponent4,N.TuiDialogExampleComponent5,J.TuiDialogExampleComponent6,v.TuiDialogExampleComponent7,V.TuiDialogExampleComponent8,L.TuiDialogExampleComponent9,D.TuiDialogExampleComponent10],styles:[".big[_ngcontent-%COMP%]{font-size:3.125rem}"],changeDetection:0}),t})(),$=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=r.oAB({type:e}),e.ɵinj=r.cJS({imports:[i.ez,n.u5,d.TuiButtonModule,c.TuiSelectModule,c.TuiInputModule,d.TuiTextfieldControllerModule,d.TuiDataListModule,c.TuiDataListWrapperModule,c.TuiSliderModule]}),t})(),R=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=r.oAB({type:e}),e.ɵinj=r.cJS({imports:[i.ez,d.TuiPrimitiveTextfieldModule,d.TuiButtonModule]}),t})();var ee=o(59611),te=o(25373),oe=o(49793);let ie=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=r.oAB({type:e}),e.ɵinj=r.cJS({imports:[i.ez,n.u5,d.TuiLinkModule,d.TuiSvgModule,te.TuiLetModule,d.TuiLoaderModule,d.TuiButtonModule,n.UX,ee.TuiInputCardGroupedModule,d.TuiFormatNumberPipeModule,d.TuiTextfieldControllerModule,oe.xl]}),t})(),ne=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=r.oAB({type:e}),e.ɵinj=r.cJS({imports:[i.ez,n.u5,n.UX,p.wq,d.TuiDialogModule,c.TuiAccordionModule,d.TuiButtonModule,c.TuiRadioListModule,c.TuiInputModule,d.TuiHintModule,d.TuiLinkModule,c.TuiMarkerIconModule,d.TuiNotificationModule,l.TuiElasticStickyModule,u.fV,$,R,a.Bz.forChild((0,u.Ve)(X)),d.TuiSvgModule,d.TuiLoaderModule,c.TuiInputNumberModule,ie,d.TuiTextfieldControllerModule,u.Zp,d.TuiNumberFormatModule]}),t})()}}]);