(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{"D7/f":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiMobileCalendarModule",(function(){return te}));var a=n("An66"),o=n("3kIJ"),i=n("1VvW"),r=n("SVIu"),l=n("hLNI"),c=n("Qq0t"),d=n("l4xa"),m=n("dvRg"),u=n("kZht"),p=n("OZlg"),s=n("e0eB"),b=n("yZWP"),f=n("iyc4"),y=n("cWK9"),h=n("jIqt"),g=n("w0kG"),T=n("YtkY"),C=n("zV1d");let E=(()=>{class e{constructor(e,t,n){this.months=n,this.control=new o.FormControl(new d.ib(2020,9,3)),this.date$=this.control.valueChanges.pipe(Object(h.a)(this.control.value),Object(g.a)(this.months),Object(T.a)(([e,t])=>this.getParsed(e,t)));const a=Object(d.wd)(this.control),i=u.Injector.create({providers:[{provide:m.c,useValue:a}],parent:t}),r=new y.b(l.e,i);this.dialog$=e.open(r,{size:"fullscreen",closeable:!1,data:{min:d.ib.currentLocal()}})}get empty(){return!this.control.value}getParsed(e,t){if(!e)return"Choose a date";const{month:n,day:a,year:o}=e;return`${t[n]} ${a}, ${o}`}onClick(){this.dialog$.subscribe(e=>{this.control.setValue(e)})}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](c.jb),u["\u0275\u0275directiveInject"](u.Injector),u["\u0275\u0275directiveInject"](c.D))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-mobile-calendar-example-1"]],decls:5,vars:5,consts:[[1,"wrapper"],["tuiIconButton","","type","button","title","Choose a date","appearance","secondary","shape","rounded","icon","tuiIconCalendarLarge",3,"click"],[1,"date"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"button",1),u["\u0275\u0275listener"]("click",(function(){return t.onClick()})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"span",2),u["\u0275\u0275text"](3),u["\u0275\u0275pipe"](4,"async"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](2),u["\u0275\u0275classProp"]("date_empty",t.empty),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",u["\u0275\u0275pipeBind1"](4,3,t.date$)," "))},directives:[C.a],pipes:[a.b],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.date[_ngcontent-%COMP%]{margin-left:1rem}.date_empty[_ngcontent-%COMP%]{color:var(--tui-text-03)}"],changeDetection:0}),e})();var S=n("+nax");let x=(()=>{class e{constructor(){this.min=new d.ib((new Date).getFullYear(),(new Date).getMonth(),1),this.max=new d.ib((new Date).getFullYear(),(new Date).getMonth(),10)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-mobile-calendar-example-2"]],decls:2,vars:3,consts:[[1,"example"],[3,"min","max","single"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275element"](1,"tui-mobile-calendar",1),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("min",t.min)("max",t.max)("single",!1))},directives:[S.a],styles:[".example[_ngcontent-%COMP%]{height:35rem}"],changeDetection:0}),e})();var _,P,v,D=n("EPR0"),A=n("yHor"),$=n("zGJC"),O=n("u8jZ");_=$localize`:␟e253a142950382b57f7a632d8882cc344d30496b␟1931204519440953968: A calendar for mobile devices. It is used in ${"\ufffd#2\ufffd"}:START_LINK: InputDate ${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: and ${"\ufffd#3\ufffd"}:START_LINK_1: InputDateRange ${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: if ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiDialogModule${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: are both imported once in the main module `,_=u["\u0275\u0275i18nPostprocess"](_),P=$localize`:␟f105f2ad607575b562a8478c277b0f5c371ba723␟1928429328557389254: You can use ${"\ufffd#8\ufffd"}:START_TAG_CODE:TUI_CALENDAR_DATA_STREAM${"\ufffd/#8\ufffd"}:CLOSE_TAG_CODE: token to set value from outside (see samples) `,v=$localize`:␟be132442c61ba6f1af8c7f6a614b07ce4aea8918␟2432796667542330911:Component should be used on mobile devices as fullscreen dialog`;const V=["heading",$localize`:␟0361f42c5934060e30ced524323effc0a4fe560f␟3980173860964639072:Custom dropdown`],I=["heading",$localize`:␟0427b9c1f10441c6f4c53f1788242e2a97954be1␟2348971518300945764:Range`],M=function(){return["/components/input-date"]},w=function(){return["/components/input-date-range"]};function L(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18nStart"](1,_),u["\u0275\u0275element"](2,"a",2),u["\u0275\u0275element"](3,"a",2),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275element"](5,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"p"),u["\u0275\u0275i18nStart"](7,P),u["\u0275\u0275element"](8,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"strong"),u["\u0275\u0275i18n"](10,v),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](11,"tui-doc-example",3),u["\u0275\u0275i18nAttributes"](12,V),u["\u0275\u0275element"](13,"tui-mobile-calendar-example-1"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](14,"tui-doc-example",4),u["\u0275\u0275i18nAttributes"](15,I),u["\u0275\u0275element"](16,"tui-mobile-calendar-example-2"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("routerLink",u["\u0275\u0275pureFunction0"](4,M)),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("routerLink",u["\u0275\u0275pureFunction0"](5,w)),u["\u0275\u0275advance"](8),u["\u0275\u0275property"]("content",e.example1),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",e.example2)}}var G,R,z,k,j,H,N,F,B;function K(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,G),u["\u0275\u0275element"](1,"div"),u["\u0275\u0275element"](2,"strong"),u["\u0275\u0275i18nEnd"]())}function J(e,t){1&e&&u["\u0275\u0275i18n"](0,R)}function Y(e,t){1&e&&u["\u0275\u0275i18n"](0,z)}function W(e,t){1&e&&u["\u0275\u0275i18n"](0,k)}function Z(e,t){1&e&&u["\u0275\u0275i18n"](0,j)}function q(e,t){1&e&&u["\u0275\u0275i18n"](0,H)}function Q(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-doc-demo"),u["\u0275\u0275element"](1,"tui-mobile-calendar",5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-doc-documentation"),u["\u0275\u0275template"](3,K,3,0,"ng-template",6),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().disabledItemHandler=t})),u["\u0275\u0275template"](4,J,1,0,"ng-template",7),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().max=t})),u["\u0275\u0275template"](5,Y,1,0,"ng-template",8),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().min=t})),u["\u0275\u0275template"](6,W,1,0,"ng-template",9),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().single=t})),u["\u0275\u0275template"](7,Z,1,0,"ng-template",10),u["\u0275\u0275template"](8,q,1,0,"ng-template",11),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("disabledItemHandler",e.disabledItemHandler)("max",e.max)("min",e.min)("single",e.single),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",e.single)}}function U(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",12),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,N),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275element"](5,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](6,"tui-doc-code",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"li"),u["\u0275\u0275elementStart"](8,"p"),u["\u0275\u0275i18nStart"](9,F),u["\u0275\u0275element"](10,"code"),u["\u0275\u0275element"](11,"code"),u["\u0275\u0275element"](12,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](13,"tui-doc-code",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](14,"li"),u["\u0275\u0275elementStart"](15,"p"),u["\u0275\u0275i18n"](16,B),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](17,"tui-doc-code",14),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("code",e.exampleModule),u["\u0275\u0275advance"](7),u["\u0275\u0275property"]("code",e.exampleImportDialogModule),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",e.exampleHtml)}}function X(e){return e.stream}G=$localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\ufffd#1\ufffd"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,R=$localize`:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `,z=$localize`:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `,k=$localize`:␟2a1554aaea9c8357628e5c7de4f8fb7615e37d70␟4032379093756044480: Single date or a range `,j=$localize`:␟166ac781bfe693de7c6c507c3747d4fad5808bfe␟8437696185745475137: "Cancel" clicked `,H=$localize`:␟0b81f93ee05a0d9a3237fb88342921b96a0aec2a␟3862541995331771793: "Confirm" button clicked `,N=$localize`:␟ca588819ac4ec61a814c286dfbc0f57f3aa24973␟194075401487100702: Import ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiDialogModule${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiMobileCalendarModule${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: once into the main module `,N=u["\u0275\u0275i18nPostprocess"](N),F=$localize`:␟a448f82c6f5ac9a0ac04ed774204f6b5fe5713c3␟5351309614134079765: Import ${"[\ufffd#10\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE: for automatic use with ${"[\ufffd#10\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TuiInputDate${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE: or ${"[\ufffd#10\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TuiInputDateRange${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE: : `,F=u["\u0275\u0275i18nPostprocess"](F),B=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let ee=(()=>{class e{constructor(){this.exampleHtml=n.e(1051).then(n.bind(null,"QAMG")),this.exampleModule=n.e(1050).then(n.bind(null,"Wz90")),this.exampleImportDialogModule=n.e(1049).then(n.bind(null,"u/xJ")),this.example1={TypeScript:n.e(1046).then(n.bind(null,"IKn+")),HTML:n.e(1044).then(n.bind(null,"i9Ux")),LESS:n.e(1045).then(n.bind(null,"TFd9"))},this.example2={TypeScript:n.e(1048).then(n.bind(null,"c57v")),HTML:n.e(1047).then(n.bind(null,"uMGz"))},this.minVariants=[d.M,new d.ib(2017,2,5),new d.ib(1900,0,1)],this.min=this.minVariants[0],this.maxVariants=[d.S,new d.ib(2020,2,5),new d.ib(2300,0,1)],this.max=this.maxVariants[0],this.single=!0,this.disabledItemHandlerVariants=[d.a,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.control=new o.FormControl,this.stream=Object(d.wd)(this.control)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-mobile-calendar"]],features:[u["\u0275\u0275ProvidersFeature"]([{provide:m.c,deps:[e],useFactory:X}])],decls:4,vars:0,consts:[["header","MobileCalendar","package","ADDON-MOBILE","type","components"],["pageTab",""],["tuiLink","",3,"routerLink"],["id","dropdown",3,"content",6,"heading"],["id","range",3,"content",6,"heading"],[1,"calendar",3,"disabledItemHandler","max","min","single"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","single","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","cancel","documentationPropertyMode","output","documentationPropertyType","void"],["documentationPropertyName","confirm","documentationPropertyMode","output","documentationPropertyType","TuiDayRange | TuiDay"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275template"](1,L,17,6,"ng-template",1),u["\u0275\u0275template"](2,Q,9,11,"ng-template",1),u["\u0275\u0275template"](3,U,18,3,"ng-template",1),u["\u0275\u0275elementEnd"]())},directives:[p.a,s.a,b.a,i.e,f.a,E,x,D.a,S.a,A.a,$.a,O.a],styles:[".calendar[_ngcontent-%COMP%]{height:28.75rem}"],changeDetection:0}),e})(),te=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,o.ReactiveFormsModule,c.Bb,c.bb,l.g,l.f,r.m,i.f.forChild(Object(r.u)(ee))]]}),e})()}}]);