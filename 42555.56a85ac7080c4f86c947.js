(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[42555],{42555:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiInputDateRangeModule:()=>ue});var o=n(12057),a=n(23738),i=n(33982),r=n(52404),u=n(54349),d=n(64862),l=n(26485),c=n(75695),s=n(74788),m=n(4797),p=n(82880),g=n(98204),T=n(43560),h=n(93525),y=n(66596),f=n(33772),Z=n(79121),_=n(92483),x=n(48706),V=n(31510),A=n(91030);let U=(()=>{class e{constructor(){this.testForm=new a.cw({testValue:new a.NI(new m.TuiDayRange(new m.TuiDay(2018,2,10),new m.TuiDay(2018,3,20)))}),this.min=new m.TuiDay(2e3,2,20),this.max=new m.TuiDay(2040,2,20)}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-input-date-range-example-1"]],decls:9,vars:3,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiUnfinishedValidator","Finish filling the field",3,"max","min"],["placeholder","From - To","tuiTextfield",""]],template:function(e,t){1&e&&(s.TgZ(0,"form",0),s.TgZ(1,"p"),s._uU(2," If a field is optional, but unfinished field should be marked as invalid, use "),s.TgZ(3,"code"),s._uU(4,"tuiUnfinishedValidator"),s.qZA(),s._uU(5," directive "),s.qZA(),s.TgZ(6,"tui-input-date-range",1),s._uU(7," Choose dates "),s._UZ(8,"input",2),s.qZA(),s.qZA()),2&e&&(s.Q6J("formGroup",t.testForm),s.xp6(6),s.Q6J("max",t.max)("min",t.min))},directives:[a._Y,a.JL,a.sg,_.H,x.d,a.JJ,a.u,V.Q,A.M],encapsulation:2,changeDetection:0}),e})(),P=(()=>{class e{constructor(){this.control=new a.NI(new m.TuiDayRange(new m.TuiDay(2018,2,10),new m.TuiDay(2018,3,20)))}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-input-date-range-example-2"]],decls:2,vars:1,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-input-date-range",0),s._uU(1," Choose dates\n"),s.qZA()),2&e&&s.Q6J("formControl",t.control)},directives:[_.H,x.d,a.JJ,a.oH],encapsulation:2,changeDetection:0}),e})(),w=(()=>{class e{constructor(){this.control=new a.NI(new m.TuiDayRange(new m.TuiDay(2018,2,10),new m.TuiDay(2018,3,20)))}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-input-date-range-example-3"]],features:[s._Bn([{provide:m.TUI_DATE_FORMAT,useValue:"YMD"},{provide:m.TUI_DATE_SEPARATOR,useValue:"/"}])],decls:2,vars:1,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-input-date-range",0),s._uU(1," Choose dates\n"),s.qZA()),2&e&&s.Q6J("formControl",t.control)},directives:[_.H,x.d,a.JJ,a.oH],encapsulation:2,changeDetection:0}),e})();class D extends m.AbstractTuiValueTransformer{constructor(e){super(),this.dateTransformer=e}fromControlValue(e){const[t,n]=e||[null,null],o=t&&this.dateTransformer.fromControlValue(t),a=n&&this.dateTransformer.fromControlValue(n);return o&&a&&new m.TuiDayRange(o,a)}toControlValue(e){const t=e&&this.dateTransformer.toControlValue(e.from),n=e&&this.dateTransformer.toControlValue(e.to);return t&&n&&[t,n]}}let b=(()=>{class e extends m.AbstractTuiValueTransformer{fromControlValue(e){return e&&m.TuiDay.fromLocalNativeDate(e)}toControlValue(e){return(null==e?void 0:e.toLocalNativeDate())||null}}return e.ɵfac=function(){let t;return function(n){return(t||(t=s.n5z(e)))(n||e)}}(),e.ɵprov=s.Yz7({token:e,factory:e.ɵfac}),e})();function C(e){return e&&new D(e)}let M=(()=>{class e{constructor(){this.control=new a.NI([new Date(2018,2,10),new Date(2018,3,20)])}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-input-date-range-example-4"]],features:[s._Bn([{provide:l.TUI_DATE_VALUE_TRANSFORMER,useClass:b},{provide:l.TUI_DATE_RANGE_VALUE_TRANSFORMER,deps:[l.TUI_DATE_VALUE_TRANSFORMER],useFactory:C}])],decls:7,vars:2,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-input-date-range",0),s._uU(1," Choose dates\n"),s.qZA(),s.TgZ(2,"p"),s._uU(3,"Stringified control value:"),s.qZA(),s.TgZ(4,"p"),s.TgZ(5,"code"),s._uU(6),s.qZA(),s.qZA()),2&e&&(s.Q6J("formControl",t.control),s.xp6(6),s.Oqu(t.control.value))},directives:[_.H,x.d,a.JJ,a.oH],encapsulation:2,changeDetection:0}),e})();const q=m.TuiDay.currentLocal(),H=q.append({day:-1});let L=(()=>{class e{constructor(){this.control=new a.NI(new m.TuiDayRange(q,q)),this.items=[new l.TuiDayRangePeriod(new m.TuiDayRange(q,q),"Today",(({$implicit:e})=>`Today (${e.from})`)),new l.TuiDayRangePeriod(new m.TuiDayRange(H,H),"Yesterday",(({$implicit:e})=>`Yesterday (${e.from})`))]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-input-date-range-example-5"]],decls:2,vars:2,consts:[[1,"b-form",3,"formControl","items"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-input-date-range",0),s._uU(1," Choose dates\n"),s.qZA()),2&e&&s.Q6J("formControl",t.control)("items",t.items)},directives:[_.H,x.d,a.JJ,a.oH],encapsulation:2,changeDetection:0}),e})();var N=n(10977),J=n(51192),v=n(60404),I=n(54218),R=n(84848),k=n(64374),E=n(3729),Q=n(68874),S=n(10200),Y=n(83074);function F(e,t){if(1&e&&(s.TgZ(0,"p",2),s.TgZ(1,"code"),s._uU(2,"InputDate"),s.qZA(),s._uU(3," is a field to input a range of dates. "),s.qZA(),s.TgZ(4,"h3"),s._uU(5,"DI-tokens for date localization:"),s.qZA(),s.TgZ(6,"dl"),s.TgZ(7,"dt"),s.TgZ(8,"code"),s._uU(9,"TUI_DATE_FORMAT"),s.qZA(),s.qZA(),s.TgZ(10,"dd",3),s._uU(11," active date format ( "),s.TgZ(12,"code"),s._uU(13,"'DMY' | 'MDY' | 'YMD'"),s.qZA(),s._uU(14," ) "),s.qZA(),s.TgZ(15,"dt"),s.TgZ(16,"code"),s._uU(17,"TUI_DATE_SEPARATOR"),s.qZA(),s.qZA(),s.TgZ(18,"dd"),s._uU(19,"single-character date's separator (dot, slash etc.)"),s.qZA(),s.qZA(),s.TgZ(20,"p",2),s.TgZ(21,"a",4),s._uU(22," See an example "),s.qZA(),s._uU(23," with the usage of these tokens. "),s.qZA(),s.TgZ(24,"h3"),s._uU(25,"DI-tokens for input-configurations:"),s.qZA(),s.TgZ(26,"dl"),s.TgZ(27,"dt"),s.TgZ(28,"code"),s._uU(29,"TUI_DATE_RANGE_VALUE_TRANSFORMER"),s.qZA(),s.qZA(),s.TgZ(30,"dd"),s._uU(31," custom format of control output ( "),s.TgZ(32,"a",5),s._uU(33," TuiDayRange "),s.qZA(),s._uU(34," is default). "),s.TgZ(35,"p"),s.TgZ(36,"a",6),s._uU(37," See an example "),s.qZA(),s._uU(38," of how to provide transformers for "),s.TgZ(39,"code"),s._uU(40,"InputDate"),s.qZA(),s._uU(41," and "),s.TgZ(42,"code"),s._uU(43,"InputDateRange"),s.qZA(),s._uU(44," to work with native "),s.TgZ(45,"a",7),s._uU(46," Date "),s.qZA(),s._uU(47," objects. "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(48,"tui-doc-example",8),s.TgZ(49,"tui-notification",9),s._uU(50," If you need to set some attributes or listen to events on native "),s.TgZ(51,"code"),s._uU(52,"input"),s.qZA(),s._uU(53," , you can put it inside with "),s.TgZ(54,"code"),s._uU(55,"Textfield"),s.qZA(),s._uU(56," directive as shown below "),s.qZA(),s._UZ(57,"tui-input-date-range-example-1"),s.qZA(),s.TgZ(58,"tui-doc-example",10),s._UZ(59,"tui-input-date-range-example-2"),s.qZA(),s.TgZ(60,"tui-doc-example",11),s._UZ(61,"tui-input-date-range-example-3"),s.qZA(),s.TgZ(62,"tui-doc-example",12),s._UZ(63,"tui-input-date-range-example-4"),s.qZA(),s.TgZ(64,"tui-doc-example",13),s._UZ(65,"tui-input-date-range-example-5"),s.qZA()),2&e){const e=s.oxw();s.xp6(48),s.Q6J("content",e.example1),s.xp6(10),s.Q6J("content",e.example2),s.xp6(2),s.Q6J("content",e.example3),s.xp6(2),s.Q6J("content",e.example4),s.xp6(2),s.Q6J("content",e.example5)}}function O(e,t){if(1&e&&(s.TgZ(0,"tui-input-date-range",26),s._uU(1," Choose dates "),s.qZA()),2&e){const e=s.oxw(2);s.Udp("text-align",e.textAlign),s.Q6J("defaultViewedMonth",e.defaultViewedMonth)("disabledItemHandler",e.disabledItemHandler)("focusable",e.focusable)("formControl",e.control)("items",e.items)("markerHandler",e.markerHandler)("max",e.max)("maxLength",e.maxLength)("min",e.min)("minLength",e.minLength)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("tuiHintAppearance",e.hintAppearance)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)}}function z(e,t){1&e&&(s._uU(0," Disabled state (use "),s.TgZ(1,"code"),s._uU(2,"formControl.disable()"),s.qZA(),s._uU(3," ) "))}function B(e,t){1&e&&s._uU(0," Default month to show ")}function G(e,t){1&e&&(s.TgZ(0,"div"),s._uU(1,"A handler that gets a date and returns true if it is disabled."),s.qZA(),s.TgZ(2,"strong"),s._uU(3,"Must be a pure function"),s.qZA())}function X(e,t){1&e&&s._uU(0," Fixed intervals (shows 2 calendars with empty array) ")}function j(e,t){1&e&&s._uU(0," A handler that gets date and returns null or a tuple with circled marker colors ")}function $(e,t){1&e&&s._uU(0," Min date ")}function W(e,t){1&e&&s._uU(0," Max date ")}function K(e,t){1&e&&s._uU(0," Minimal length of range ")}function ee(e,t){1&e&&s._uU(0," Maximal length of range ")}function te(e,t){1&e&&s._uU(0," Custom align content by text-align ")}function ne(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-doc-demo",14),s.YNc(1,O,2,23,"ng-template"),s.qZA(),s.TgZ(2,"tui-doc-documentation"),s.YNc(3,z,4,0,"ng-template",15),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().disabled=t})),s.YNc(4,B,1,0,"ng-template",16),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().defaultViewedMonth=t})),s.YNc(5,G,4,0,"ng-template",17),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().disabledItemHandler=t})),s.YNc(6,X,1,0,"ng-template",18),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().items=t})),s.YNc(7,j,1,0,"ng-template",19),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().markerHandler=t})),s.YNc(8,$,1,0,"ng-template",20),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().min=t})),s.YNc(9,W,1,0,"ng-template",21),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().max=t})),s.YNc(10,K,1,0,"ng-template",22),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().minLength=t})),s.YNc(11,ee,1,0,"ng-template",23),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().maxLength=t})),s.qZA(),s._UZ(12,"inherited-documentation"),s.TgZ(13,"tui-doc-documentation",24),s.YNc(14,te,1,0,"ng-template",25),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().textAlign=t})),s.qZA()}if(2&e){const e=s.oxw();s.Q6J("control",e.control),s.xp6(3),s.Q6J("documentationPropertyValue",e.disabled),s.xp6(1),s.Q6J("documentationPropertyValues",e.defaultViewedMonthVariants)("documentationPropertyValue",e.defaultViewedMonth),s.xp6(1),s.Q6J("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),s.xp6(1),s.Q6J("documentationPropertyValues",e.itemsVariants)("documentationPropertyValue",e.items),s.xp6(1),s.Q6J("documentationPropertyValues",e.markerHandlerVariants)("documentationPropertyValue",e.markerHandler),s.xp6(1),s.Q6J("documentationPropertyValues",e.dayVariants)("documentationPropertyValue",e.min),s.xp6(1),s.Q6J("documentationPropertyValues",e.dayVariants)("documentationPropertyValue",e.max),s.xp6(1),s.Q6J("documentationPropertyValues",e.minLengthVariants)("documentationPropertyValue",e.minLength),s.xp6(1),s.Q6J("documentationPropertyValues",e.maxLengthVariants)("documentationPropertyValue",e.maxLength),s.xp6(3),s.Q6J("documentationPropertyValues",e.textAlignVariants)("documentationPropertyValue",e.textAlign)}}function oe(e,t){if(1&e&&(s.TgZ(0,"p"),s._uU(1," Mobile calendar does not use the same dropdown with calendar as desktop uses. It uses digital keyboard. If you want to open "),s.TgZ(2,"a",27),s._uU(3," mobile calendar "),s.qZA(),s._uU(4," , add imports of "),s.TgZ(5,"code"),s._uU(6,"TuiMobileCalendarDialogModule"),s.qZA(),s._uU(7," and "),s.TgZ(8,"code"),s._uU(9,"TuiDialogModule"),s.qZA(),s._uU(10," into your root module. Also, check that you did not forget about "),s.TgZ(11,"a",28),s._uU(12," tui-root "),s.qZA(),s.qZA(),s.TgZ(13,"ol",29),s.TgZ(14,"li"),s.TgZ(15,"p"),s._uU(16," Import an Angular module for forms and "),s.TgZ(17,"code"),s._uU(18,"TuiInputDateRangeModule"),s.qZA(),s._uU(19," in the same module where you want to use our component: "),s.qZA(),s._UZ(20,"tui-doc-code",30),s.qZA(),s.TgZ(21,"li"),s.TgZ(22,"p"),s._uU(23," Declare a form ( "),s.TgZ(24,"code"),s._uU(25,"FormGroup"),s.qZA(),s._uU(26," ) or a control ( "),s.TgZ(27,"code"),s._uU(28,"FormControl"),s.qZA(),s._uU(29," ) in your component: "),s.qZA(),s._UZ(30,"tui-doc-code",31),s.qZA(),s.TgZ(31,"li"),s._uU(32," Use "),s.TgZ(33,"code"),s._uU(34,"TuiInputDateRange"),s.qZA(),s._uU(35," in template: "),s._UZ(36,"tui-doc-code",32),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(20),s.Q6J("code",e.exampleModule),s.xp6(10),s.Q6J("code",e.exampleForm),s.xp6(6),s.Q6J("code",e.exampleHtml)}}const ae=["var(--tui-primary)","var(--tui-info-fill)"],ie=["var(--tui-success-fill)"];let re=(()=>{class e extends p.b{constructor(){super(...arguments),this.exampleModule=n.e(94912).then(n.t.bind(n,94912,17)),this.exampleHtml=n.e(41413).then(n.t.bind(n,41413,17)),this.exampleForm=n.e(83906).then(n.t.bind(n,83906,17)),this.example1={TypeScript:n.e(47311).then(n.t.bind(n,47311,17)),HTML:n.e(1425).then(n.t.bind(n,1425,17))},this.example2={TypeScript:n.e(43390).then(n.t.bind(n,43390,17)),HTML:n.e(68943).then(n.t.bind(n,68943,17))},this.example3={TypeScript:n.e(87660).then(n.t.bind(n,87660,17)),HTML:n.e(16320).then(n.t.bind(n,16320,17))},this.example4={TypeScript:n.e(90376).then(n.t.bind(n,90376,17)),HTML:n.e(90772).then(n.t.bind(n,90772,17)),"value-transformers.ts":n.e(23274).then(n.t.bind(n,23274,17))},this.example5={TypeScript:n.e(22887).then(n.t.bind(n,22887,17)),HTML:n.e(50292).then(n.t.bind(n,50292,17))},this.dayVariants=[m.TUI_FIRST_DAY,new m.TuiDay(2021,2,5),new m.TuiDay(1900,0,1),new m.TuiDay(2300,0,1),new m.TuiDay(2017,11,11),new m.TuiDay((new Date).getFullYear()+3,1,1),m.TUI_LAST_DAY],this.min=this.dayVariants[0],this.minLengthVariants=[{day:3},{day:15}],this.minLength=null,this.maxLengthVariants=[{day:5},{month:1},{year:1}],this.maxLength=null,this.max=this.dayVariants[this.dayVariants.length-1],this.markerHandlerVariants=[d.TUI_DEFAULT_MARKER_HANDLER,e=>e.day%2==0?ae:ie],this.markerHandler=this.markerHandlerVariants[0],this.cleaner=!1,this.disabledItemHandlerVariants=[m.ALWAYS_FALSE_HANDLER,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.control=new a.NI(null,a.kI.required),this.itemsVariants=[[],(0,l.tuiCreateDefaultDayRangePeriods)()],this.items=this.itemsVariants[0],this.defaultViewedMonthVariants=[m.TuiMonth.currentLocal(),m.TuiMonth.currentLocal().append({month:1}),new m.TuiMonth(2007,5)],this.defaultViewedMonth=this.defaultViewedMonthVariants[0]}}return e.ɵfac=function(){let t;return function(n){return(t||(t=s.n5z(e)))(n||e)}}(),e.ɵcmp=s.Xpm({type:e,selectors:[["example-tui-input-date-range"]],features:[s._Bn([{provide:g.x,useExisting:(0,s.Gpc)((()=>e))}]),s.qOj],decls:4,vars:0,consts:[["header","InputDateRange","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-9"],[1,"tui-space_bottom-5"],["fragment","date-localization","routerLink",".","tuiLink",""],["href","https://github.com/taiga-family/taiga-ui/blob/main/projects/cdk/date-time/day-range.ts","rel","noreferrer","target","_blank","tuiLink",""],["fragment","native-date-output","routerLink",".","tuiLink",""],["href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date","rel","noreferrer","target","_blank","tuiLink",""],["id","base","heading","Basic",3,"content"],[1,"tui-space_bottom-4","b-form"],["id","large","heading","Big size",3,"content"],["id","date-localization","heading","Date localization",3,"content"],["id","native-date-output","heading","With native Date output",3,"content"],["id","custom-period","heading","Custom period",3,"content"],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","defaultViewedMonth","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","disabledItemHandler","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","items","documentationPropertyType","TuiDayRangePeriod[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","markerHandler","documentationPropertyType","TuiMarkerHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","TuiDay | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","TuiDay | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","minLength","documentationPropertyType","TuiDayLike | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","maxLength","documentationPropertyType","TuiDayLike | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.text-align","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-control",3,"defaultViewedMonth","disabledItemHandler","focusable","formControl","items","markerHandler","max","maxLength","min","minLength","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldSize"],["routerLink","/components/mobile-calendar","tuiLink",""],["routerLink","/getting-started","tuiLink",""],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-doc-page",0),s.YNc(1,F,66,5,"ng-template",1),s.YNc(2,ne,15,20,"ng-template",1),s.YNc(3,oe,37,3,"ng-template",1),s.qZA())},directives:[T.q,h.n,i.yS,y.V,f.f,Z.L,U,P,w,M,L,N.F,J.z,v.B,I.w,_.H,x.d,a.JJ,a.oH,R.bZ,k.b,E.a,Q.x,S.s,Y.c],encapsulation:2,changeDetection:0}),e})(),ue=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({imports:[[o.ez,l.TuiInputDateRangeModule,a.UX,c.f,d.TuiButtonModule,d.TuiLinkModule,u.TuiMobileCalendarDialogModule,d.TuiTextfieldControllerModule,d.TuiHintModule,d.TuiNotificationModule,r.fV,i.Bz.forChild((0,r.Ve)(re)),l.TuiUnfinishedValidatorModule]]}),e})()}}]);