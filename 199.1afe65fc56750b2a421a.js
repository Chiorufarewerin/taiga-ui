(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{xggc:function(e,t,n){"use strict";n.r(t),n.d(t,"IconsModule",(function(){return ne}));var i=n("An66"),o=n("1VvW"),c=n("SVIu"),r=n("Qq0t"),a=n("kZht"),s=n("4C5Q");const l=["tuiIconElectron","tuiIconMaestro","tuiIconMastercard","tuiIconMir","tuiIconVisa"],{LARGE:u,NORMAL:p}=function(){const e=[],t=[],n=new Set(l);for(const i in s)n.has(i)||"tuiCoreIcons"===i||"tuiKitIcons"===i||(i.includes("Large")?e.push(i):t.push(i));return{LARGE:e,NORMAL:t}}(),d={"Description and examples":{"Normal interface icons / 16px":p,"Large interface icons / 24px":u,"Payment systems":l}},m=new a.InjectionToken("Icons",{factory:()=>d});var f=n("OZlg"),g=n("e0eB"),b=n("yZWP"),h=n("D57K"),y=n("wdR4"),v=n("l4xa");let x=(()=>{class e{constructor(e){this.template=e}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](a.TemplateRef))},e.\u0275dir=a["\u0275\u0275defineDirective"]({type:e,selectors:[["","iconGroup",""]],inputs:{iconGroup:"iconGroup"}}),Object(h.b)([Object(v.qd)()],e.prototype,"iconGroup",void 0),e})();var C,O,S,I=n("GdrL"),M=n("71sB"),E=n("RlDx"),T=n("2wTY"),w=n("gEyt"),P=n("3kIJ"),A=n("buny"),$=n("DUUN"),L=n("AIrm"),k=n("DzXc");function z(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"p"),a["\u0275\u0275text"](1,"Nothing found"),a["\u0275\u0275elementEnd"]())}C=$localize`:␟fd963df1746a55d8fa0fc7610df4df991f847660␟1715668600566441269: Search by name
`,O=$localize`:␟c8c9758c8595df7a1f438b97d0bdb29ee9eaf6b2␟696084215486677597: Input icon name to highlight
`,S=$localize`:␟98637bc43fcb683b0da90675491131c614734d49␟7253553507236379915: ${"\ufffd0\ufffd"}:INTERPOLATION: `;const j=function(e,t,n){return{icon:e,group:t,copyPath:n}};function F(e,t){if(1&e&&a["\u0275\u0275elementContainer"](0,8),2&e){const e=t.$implicit,n=a["\u0275\u0275nextContext"](2).$implicit,i=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("ngTemplateOutlet",(null==i.iconGroup?null:i.iconGroup.template)||null)("ngTemplateOutletContext",a["\u0275\u0275pureFunction3"](2,j,e,n,i.copyPath))}}function G(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275elementStart"](1,"div",4),a["\u0275\u0275elementStart"](2,"h2",0),a["\u0275\u0275i18n"](3,S),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](4,"tui-badge",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](5,z,2,0,"p",3),a["\u0275\u0275elementStart"](6,"div",6),a["\u0275\u0275template"](7,F,1,6,"ng-container",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.ngIf,n=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](3),a["\u0275\u0275i18nExp"](n),a["\u0275\u0275i18nApply"](3),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("hoverable",!0)("value",e.length.toString())("status",e.length?"success":"error"),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",!e.length),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("tuiForAsyncOf",e)}}function N(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,G,8,6,"ng-container",3),a["\u0275\u0275pipe"](2,"tuiFilter"),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",a["\u0275\u0275pipeBind3"](2,1,n.icons[e],n.matcher,n.search))}}let _=(()=>{class e{constructor(e,t){this.clipboard=e,this.alertService=t,this.icons={},this.matcher=v.I,this.search="",this.copyPath=e=>{this.clipboard.copy(e),this.alertService.open(`The name ${e} copied`,{status:"success"}).subscribe()}}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](y.b),a["\u0275\u0275directiveInject"](r.Z))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["icons-group"]],contentQueries:function(e,t,n){var i;1&e&&a["\u0275\u0275contentQuery"](n,x,!0),2&e&&a["\u0275\u0275queryRefresh"](i=a["\u0275\u0275loadQuery"]())&&(t.iconGroup=i.first)},inputs:{icons:"icons"},decls:6,vars:5,consts:[[1,"title"],["tuiHintContent","You can copy icon's name with a click","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],[4,"tuiForAsync","tuiForAsyncOf"],[4,"ngIf"],[1,"header-group"],["size","m",1,"badge",3,"hoverable","value","status"],[1,"icons"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"tuiForAsync","tuiForAsyncOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"h2",0),a["\u0275\u0275i18n"](1,C),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](2,"tui-input",1),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search=e})),a["\u0275\u0275i18n"](3,O),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](4,N,3,5,"ng-container",2),a["\u0275\u0275pipe"](5,"tuiKeys")),2&e&&(a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("ngModel",t.search),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("tuiForAsyncOf",a["\u0275\u0275pipeBind1"](5,3,t.icons)))},directives:[I.a,M.a,E.a,T.b,w.b,P.NgControlStatus,P.NgModel,A.a,i.t,$.a,i.A],pipes:[L.a,k.a],styles:[".header-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin:1.875rem 0 .75rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6)}.badge[_ngcontent-%COMP%]{margin-left:1rem}.icons[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin:0 -.75rem}"],changeDetection:0}),Object(h.b)([Object(v.qd)()],e.prototype,"icons",void 0),e})();var R=n("zV1d"),D=n("iyc4"),B=n("ONKv");function K(){return e=>e.startsWith("icons8::")?`assets/icons8/${e.replace("icons8::","")}.svg`:e}let Q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["customization-icons-example"]],features:[a["\u0275\u0275ProvidersFeature"]([{provide:r.O,useFactory:K}])],decls:10,vars:0,consts:[[1,"icons8"],[1,"icons8-label","icons8-label-violet"],["src","icons8::android",1,"icons8-icon","icons8-violet"],["src","icons8::ios",1,"icons8-icon","icons8-violet"],[1,"icons8-label","icons8-label-blue"],["src","icons8::android",1,"icons8-icon","icons8-blue"],["src","icons8::ios",1,"icons8-icon","icons8-blue"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"p",1),a["\u0275\u0275text"](2,"Violet color"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](3,"tui-svg",2),a["\u0275\u0275element"](4,"tui-svg",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"div",0),a["\u0275\u0275elementStart"](6,"p",4),a["\u0275\u0275text"](7,"Blue color"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](8,"tui-svg",5),a["\u0275\u0275element"](9,"tui-svg",6),a["\u0275\u0275elementEnd"]())},directives:[B.a],styles:[".icons8[_ngcontent-%COMP%]{margin-bottom:1.5rem}.icons8-icon[_ngcontent-%COMP%]{width:4rem;height:4rem}.icons8-label[_ngcontent-%COMP%]{font-weight:700;display:inline-block;padding:.25rem .625rem;color:#fff;border-radius:.25rem}.icons8-label-violet[_ngcontent-%COMP%]{background:#a340f1}.icons8-label-blue[_ngcontent-%COMP%]{background:#316df6}.icons8-violet[_ngcontent-%COMP%]{color:#a340f1}.icons8-blue[_ngcontent-%COMP%]{color:#316df6}"]}),e})();const V=["header",$localize`:␟c51604c3bfceeac96ceabb51c1a0caee70f85aa6␟990341683702498937:Icons`];var q;q=$localize`:␟839dd4cb6fbcbf0e53e486e5aaa3fa92826a5fe6␟1756857398819821600: These icons can be used by name in ${"\ufffd#2\ufffd"}:START_LINK: Svg ${"\ufffd/#2\ufffd"}:CLOSE_LINK: component and all Taiga UI component accepting icons as input. `;const U=["title",$localize`:␟1979da7460819153e11d2078244645d94291b69c␟4323470180912194028:Copy`];function Y(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"button",7),a["\u0275\u0275i18nAttributes"](1,U),a["\u0275\u0275listener"]("click",(function(){return(0,t.copyPath)(t.icon)})),a["\u0275\u0275elementEnd"]()),2&e){const e=t.icon;a["\u0275\u0275property"]("icon",e),a["\u0275\u0275attribute"]("aria-label",e)}}function Z(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"p"),a["\u0275\u0275i18nStart"](1,q),a["\u0275\u0275element"](2,"a",4),a["\u0275\u0275i18nEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"icons-group",5),a["\u0275\u0275template"](4,Y,2,2,"ng-template",6),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit,t=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("icons",t.icons[e])}}function J(e,t){1&e&&a["\u0275\u0275template"](0,Z,5,1,"ng-template",3),2&e&&a["\u0275\u0275property"]("pageTab",t.$implicit)}const W=["heading",$localize`:␟788b57cb07c04232d638748cd49226ff9e13f8ca␟5793544987096948211:Customization`];function H(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"tui-doc-example",8),a["\u0275\u0275i18nAttributes"](1,W),a["\u0275\u0275element"](2,"customization-icons-example"),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("content",e.example1)}}let X=(()=>{class e{constructor(e){this.icons=e,this.keys=Object.keys(this.icons),this.example1={TypeScript:n.e(1703).then(n.bind(null,"a37g")),HTML:n.e(1705).then(n.bind(null,"tKQf")),LESS:n.e(1704).then(n.bind(null,"UtTG"))}}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](m))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["icons"]],decls:4,vars:1,consts:[[6,"header"],[4,"ngFor","ngForOf"],["pageTab","SVG Processing"],[3,"pageTab"],["tuiLink","","routerLink","/components/svg"],[3,"icons"],["iconGroup",""],["tuiIconButton","","type","button","size","m","appearance","icon",1,"icon",3,"icon","click",6,"title"],["id","base","description","You can customize the path to your icons and inherit color",3,"content",6,"heading"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"tui-doc-page",0),a["\u0275\u0275i18nAttributes"](1,V),a["\u0275\u0275template"](2,J,1,1,void 0,1),a["\u0275\u0275template"](3,H,3,1,"ng-template",2),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngForOf",t.keys))},directives:[f.a,i.s,g.a,b.a,o.e,_,x,R.a,D.a,Q],styles:[".icon[_ngcontent-%COMP%]{margin:.75rem;border-radius:0}"],changeDetection:0}),e})();var ee=n("dvRg");let te=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[P.FormsModule,i.c,ee.cb,ee.A,v.xb,v.Gb,v.sb,r.wb,r.bc]]}),e})(),ne=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,r.Bb,r.Yb,r.bb,c.m,te,o.f.forChild(Object(c.x)(X))]]}),e})()}}]);