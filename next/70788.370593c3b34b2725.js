(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[70788,61386,99503,50517,11820,61505,99781,50023,11944,61702,98323,1001,35402],{10882:(e,t,o)=>{o.d(t,{Fb:()=>a,UR:()=>i,bM:()=>u});var n=o(2697);const i={currency:null,currencyAlign:"right",sign:"negative-only"},u=(0,n.tuiCreateToken)(i);function a(e){return(0,n.tuiProvideOptions)(u,e,i)}},61386:(e,t,o)=>{o.d(t,{E:()=>c});var n=o(20755),i=o(93517),u=o(2697),a=o(14797),p=o(92425),l=o(10882);let c=(()=>{var e;class t{constructor(){this.options=(0,n.f3M)(l.bM),this.format=(0,n.f3M)(a.TUI_NUMBER_FORMAT)}transform(e,t=this.options.currency,o=this.options.currencyAlign){return this.format.pipe((0,p.U)((n=>{const p=(0,i.$v)(e,this.options.sign),l=(0,i.BP)(t),c=(0,a.tuiFormatNumber)(Math.abs(e),{...n,precision:Number.isNaN(n.precision)?2:n.precision}),d=l?.length>1||"right"===o?u.CHAR_NO_BREAK_SPACE:"";return"right"===o?`${p}${c}${d}${l}`:`${p}${l}${d}${c}`})))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵpipe=n.Yjl({name:"tuiAmount",type:e,pure:!0,standalone:!0}),t})()},30533:(e,t,o)=>{o.r(t),o.d(t,{ExampleTuiDataListModule:()=>v});var n=o(76733),i=o(72133),u=o(42932),a=o(87253),p=o(2697),l=o(14797),c=o(89800),d=o(20755),r=o(2313),m=o(36877),s=o(38404),T=o(65004),Z=o(43894),g=o(17894),h=o(97967),x=o(84950),U=o(97472),M=o(41277),_=o(76925),f=o(42215),y=o(42749);function A(e,t){if(1&e&&(d.TgZ(0,"p")(1,"code"),d._uU(2,"DataList"),d.qZA(),d._uU(3," allows to make lists or menus "),d.qZA(),d.TgZ(4,"tui-doc-example",2),d._UZ(5,"tui-data-list-example-4"),d.qZA(),d.TgZ(6,"tui-doc-example",3)(7,"tui-notification",4),d._uU(8," Import "),d.TgZ(9,"code"),d._uU(10,"TuiArrowModule"),d.qZA(),d._uU(11," if you need a rotated arrow "),d.qZA(),d._UZ(12,"tui-data-list-example-1"),d.qZA(),d.TgZ(13,"tui-doc-example",5)(14,"tui-notification",4),d._uU(15," Use "),d.TgZ(16,"code"),d._uU(17,"TuiDataListDropdownManagerModule"),d.qZA(),d._uU(18," for nested menus "),d.qZA(),d._UZ(19,"tui-data-list-example-2"),d.qZA(),d.TgZ(20,"tui-doc-example",6)(21,"tui-notification",4),d._uU(22," Import "),d.TgZ(23,"code"),d._uU(24,"TuiMultiSelectModule"),d.qZA()(),d._UZ(25,"tui-data-list-example-3"),d.qZA(),d.TgZ(26,"tui-doc-example",7)(27,"tui-notification",4),d._uU(28," Use "),d.TgZ(29,"code"),d._uU(30,"TuiDataListDropdownManagerModule"),d.qZA(),d._uU(31," for nested menus "),d.qZA(),d._UZ(32,"tui-data-list-example-5"),d.qZA(),d.TgZ(33,"tui-doc-example",8),d._UZ(34,"tui-data-list-example-6"),d.qZA()),2&e){const e=d.oxw();d.xp6(4),d.Q6J("content",e.example4),d.xp6(2),d.Q6J("content",e.example1),d.xp6(7),d.Q6J("content",e.example2),d.xp6(7),d.Q6J("content",e.example3),d.xp6(1),d.Udp("white-space","nowrap"),d.xp6(5),d.Q6J("content",e.example5),d.xp6(7),d.Q6J("content",e.example6)}}function b(e,t){1&e&&d._uU(0," Content to display when there are no options inside ")}function q(e,t){1&e&&(d._uU(0," Native accessability role — "),d.TgZ(1,"code"),d._uU(2,"listbox"),d.qZA(),d.TgZ(3,"em"),d._uU(4,"(default)"),d.qZA(),d._uU(5," or "),d.TgZ(6,"code"),d._uU(7,"menu"),d.qZA(),d._uU(8," for common usage "))}function L(e,t){1&e&&d._uU(0," Size of items ")}function D(e,t){1&e&&d._uU(0," Group label ")}function w(e,t){1&e&&(d._uU(0," Native accessability role. Set "),d.TgZ(1,"code"),d._uU(2,"aria-checked"),d.qZA(),d._uU(3," for all roles except "),d.TgZ(4,"code"),d._uU(5,"menuitem"),d.qZA(),d._uU(6," (see sample) "))}function N(e,t){1&e&&(d.TgZ(0,"h2"),d._uU(1,"DataList"),d.qZA(),d.TgZ(2,"tui-doc-documentation"),d.YNc(3,b,1,0,"ng-template",9),d.YNc(4,q,9,0,"ng-template",10),d.YNc(5,L,1,0,"ng-template",11),d.qZA(),d.TgZ(6,"h2"),d._uU(7,"OptGroup"),d.qZA(),d.TgZ(8,"tui-doc-documentation"),d.YNc(9,D,1,0,"ng-template",12),d.qZA(),d.TgZ(10,"h2"),d._uU(11,"Option"),d.qZA(),d.TgZ(12,"tui-doc-documentation"),d.YNc(13,w,7,0,"ng-template",13),d.qZA())}function S(e,t){if(1&e&&(d.TgZ(0,"ol",14)(1,"li")(2,"p"),d._uU(3," Import "),d.TgZ(4,"code"),d._uU(5,"TuiDataListModule"),d.qZA(),d._uU(6," into a module where you want to use our component "),d.qZA(),d._UZ(7,"tui-doc-code",15),d.qZA(),d.TgZ(8,"li")(9,"p"),d._uU(10,"Add to the template:"),d.qZA(),d._UZ(11,"tui-doc-code",16),d.qZA()()),2&e){const e=d.oxw();d.xp6(7),d.Q6J("code",e.exampleModule),d.xp6(4),d.Q6J("code",e.exampleHtml)}}let P=(()=>{var e;class t{constructor(){this.exampleModule=o.e(80708).then(o.t.bind(o,80708,17)),this.exampleHtml=o.e(38912).then(o.t.bind(o,38912,17)),this.example1={TypeScript:o.e(68853).then(o.t.bind(o,68853,17)),HTML:o.e(6225).then(o.t.bind(o,6225,17))},this.example2={TypeScript:o.e(62143).then(o.t.bind(o,62143,17)),HTML:o.e(95928).then(o.t.bind(o,95928,17))},this.example3={TypeScript:o.e(32985).then(o.t.bind(o,32985,17)),HTML:o.e(43035).then(o.t.bind(o,43035,17)),LESS:o.e(88767).then(o.t.bind(o,88767,17))},this.example4={TypeScript:o.e(22352).then(o.t.bind(o,22352,17)),HTML:o.e(26450).then(o.t.bind(o,26450,17)),"custom-list.component.ts":o.e(47209).then(o.t.bind(o,47209,17)),"custom-list.template.html":o.e(22657).then(o.t.bind(o,22657,17))},this.example5={TypeScript:o.e(8028).then(o.t.bind(o,8028,17)),HTML:o.e(77340).then(o.t.bind(o,77340,17)),LESS:o.e(72730).then(o.t.bind(o,72730,17))},this.example6={TypeScript:o.e(12510).then(o.t.bind(o,12510,17)),HTML:o.e(62995).then(o.t.bind(o,62995,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["example-tui-data-list"]],decls:4,vars:0,consts:[["header","DataList","package","CORE","type","components"],["pageTab",""],["id","custom","heading","Custom list",3,"content"],["id","links","heading","Links",3,"content"],[1,"tui-space_bottom-3"],["id","submenu","heading","Submenu",3,"content"],["id","control","heading","Form control",3,"content"],["id","complex","heading","Complex",3,"content"],["id","long-text-options","heading","Options with long text",3,"content"],["documentationPropertyMode","input","documentationPropertyName","emptyContent","documentationPropertyType","PolymorpheusContent"],["documentationPropertyMode","input","documentationPropertyName","role","documentationPropertyType","TuiDataListRole"],["documentationPropertyMode","input","documentationPropertyName","size","documentationPropertyType","TuiSizeS | TuiSizeL"],["documentationPropertyMode","input","documentationPropertyName","label","documentationPropertyType","string"],["documentationPropertyMode","input","documentationPropertyName","role","documentationPropertyType","TuiOptionRole"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-doc-page",0),d.YNc(1,A,35,8,"ng-template",1),d.YNc(2,N,14,0,"ng-template",1),d.YNc(3,S,12,2,"ng-template",1),d.qZA())},dependencies:[r.L,m.c,s.z,T.B,Z.q,g.n,h.f,x.TuiDataListExample1,U.TuiDataListExample2,M.TuiDataListExample3,_.TuiDataListExample4,f.TuiDataListExample5,y.TuiDataListExample6],encapsulation:2,changeDetection:0}),t})(),v=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=d.oAB({type:e}),e.ɵinj=d.cJS({imports:[n.ez,i.u5,i.UX,p.TuiLetModule,c.TuiMultiSelectModule,l.TuiPrimitiveTextfieldModule,c.TuiSelectModule,l.TuiTextfieldControllerModule,c.TuiArrowModule,l.TuiNotificationModule,l.TuiDataListModule,c.TuiDataListDropdownManagerModule,l.TuiSvgModule,l.TuiDropdownModule,l.TuiButtonModule,l.TuiDropdownModule,a.fV,u.Bz.forChild((0,a.Ve)(P)),p.TuiFilterPipeModule,l.TuiCalendarModule,c.TuiInputModule,c.TuiInputDateRangeModule]}),t})()}}]);