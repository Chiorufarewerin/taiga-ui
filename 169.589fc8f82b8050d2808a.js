(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{"52he":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiHintControllerModule",(function(){return L}));var o=n("An66"),i=n("3kIJ"),a=n("1VvW"),r=n("SVIu"),l=n("Qq0t"),u=n("kZht"),d=n("OZlg"),c=n("e0eB"),m=n("yZWP"),p=n("iyc4"),s=n("RlDx"),y=n("luNI"),f=n("SgIQ");let h=(()=>{class e{constructor(){this.text="Do What the #@*% You Want to"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-hint-controller-example-1"]],decls:3,vars:2,consts:[[1,"wrapper",3,"tuiHintContent"],[3,"value","valueChange"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"tui-primitive-textfield",1),u["\u0275\u0275listener"]("valueChange",(function(e){return t.text=e})),u["\u0275\u0275text"](2,"Content"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275property"]("tuiHintContent",t.text),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("value",t.text))},directives:[s.a,y.a,f.a],styles:[".wrapper[_ngcontent-%COMP%]{width:21.875rem}"],changeDetection:0}),e})();var H=n("EPR0"),C=n("yHor"),b=n("zGJC"),x=n("u8jZ");const g=["header",$localize`:␟8b9f3e0545f0dc3c0225fb267d4e185061fa6321␟7802991737679226774:HintController`],P=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var v;v=$localize`:␟39c2e91ced227cf8f968d8e5a381e5db7d0c2075␟5645803649183552163: Directive allows to control hint setting on hint or its parent components. For example, if you want to add tooltip to ${"\ufffd#2\ufffd"}:START_LINK:${"\ufffd#3\ufffd"}:START_TAG_CODE:TuiPrimitiveTextfield${"\ufffd/#3\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#2\ufffd"}:CLOSE_LINK: , use this directive on it. `;const V=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function S(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18nStart"](1,v),u["\u0275\u0275elementStart"](2,"a",3),u["\u0275\u0275element"](3,"code"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"tui-doc-example",4),u["\u0275\u0275i18nAttributes"](5,V),u["\u0275\u0275element"](6,"tui-hint-controller-example-1"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("content",e.example1)}}var w,D,E,T,M;function $(e,t){1&e&&u["\u0275\u0275i18n"](0,w)}function A(e,t){1&e&&u["\u0275\u0275i18n"](0,D)}function _(e,t){1&e&&u["\u0275\u0275i18n"](0,E)}function O(e,t){1&e&&u["\u0275\u0275text"](0," Hint controller show delay ")}function z(e,t){1&e&&u["\u0275\u0275text"](0," Hint controller hide delay ")}function N(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-doc-demo"),u["\u0275\u0275elementStart"](1,"div",5),u["\u0275\u0275elementStart"](2,"tui-primitive-textfield",6),u["\u0275\u0275listener"]("valueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().tuiHintContent=t})),u["\u0275\u0275text"](3,"Content"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"tui-doc-documentation"),u["\u0275\u0275template"](5,$,1,0,"ng-template",7),u["\u0275\u0275template"](6,A,1,0,"ng-template",8),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().tuiHintMode=t})),u["\u0275\u0275template"](7,_,1,0,"ng-template",9),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().tuiHintDirection=t})),u["\u0275\u0275template"](8,O,1,0,"ng-template",10),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().tuiHintShowDelay=t})),u["\u0275\u0275template"](9,z,1,0,"ng-template",11),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().tuiHintHideDelay=t})),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("tuiHintContent",e.tuiHintContent)("tuiHintDirection",e.tuiHintDirection)("tuiHintMode",e.tuiHintMode)("tuiHintShowDelay",e.tuiHintShowDelay)("tuiHintHideDelay",e.tuiHintHideDelay),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("value",e.tuiHintContent),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("documentationPropertyValues",e.modeVariants)("documentationPropertyValue",e.tuiHintMode),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValues",e.directionVariants)("documentationPropertyValue",e.tuiHintDirection),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",e.tuiHintShowDelay),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",e.tuiHintHideDelay)}}function k(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",12),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,T),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"li"),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275i18n"](8,M),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](9,"tui-doc-code",14),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",e.exampleModule),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",e.exampleHtml)}}w=$localize`:␟5fdb81390ced5af3a6de6361f079f1eb98fc2782␟4666774196997813566: Hint controller content `,D=$localize`:␟977e637f707e79fae84dff1104307a013d0ab896␟7920676050750551676: Hint controller mode `,E=$localize`:␟02dc9fd26cdf310d13d53ebcb9a3e4a6bbda9a9d␟7777050122220102994: Hint controller direction `,T=$localize`:␟4231d31a6ccffade0b2f64f0ddfe0fa9ede7ad17␟5482566457329968094: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiHintControllerModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our directive: `,M=$localize`:␟ea437d519b07a2f085504951c5e4663050f1fc76␟5637182585162098913:Use into template on hint or its parent elements:`;let I=(()=>{class e{constructor(){this.exampleModule=n.e(1586).then(n.bind(null,"UcQ8")),this.exampleHtml=n.e(1587).then(n.bind(null,"tu7r")),this.example1={TypeScript:n.e(1585).then(n.bind(null,"sV9f")),HTML:n.e(1584).then(n.bind(null,"i6V3"))},this.modeVariants=["error"],this.tuiHintContent="Example hint content",this.tuiHintMode=null,this.directionVariants=["left","right","bottom-left","bottom-right","bottom-middle","top-left","top-right","top-middle"],this.tuiHintDirection=this.directionVariants[2],this.tuiHintShowDelay=500,this.tuiHintHideDelay=200}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-hint-controller"]],decls:6,vars:0,consts:[["package","CORE","type","directives",6,"header"],["pageTab",""],[6,"pageTab"],["tuiLink","","target","_blank","routerLink","/components/primitive-textfield"],["id","base",3,"content",6,"heading"],[1,"wrapper",3,"tuiHintContent","tuiHintDirection","tuiHintMode","tuiHintShowDelay","tuiHintHideDelay"],[3,"value","valueChange"],["documentationPropertyName","tuiHintContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","tuiHintMode","documentationPropertyMode","input","documentationPropertyType","TuiTooltipMode | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiHintDirection","documentationPropertyMode","input","documentationPropertyType","TuiDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiHintShowDelay","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiHintHideDelay","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275i18nAttributes"](1,g),u["\u0275\u0275template"](2,S,7,1,"ng-template",1),u["\u0275\u0275template"](3,N,10,12,"ng-template",1),u["\u0275\u0275template"](4,k,10,2,"ng-template",2),u["\u0275\u0275i18nAttributes"](5,P),u["\u0275\u0275elementEnd"]())},directives:[d.a,c.a,m.a,a.e,p.a,h,H.a,s.a,y.a,f.a,C.a,b.a,x.a],encapsulation:2,changeDetection:0}),e})(),L=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.FormsModule,l.Bb,l.Rb,l.wb,r.m,a.f.forChild(Object(r.u)(I))]]}),e})()}}]);