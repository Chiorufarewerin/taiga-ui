(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{T25K:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiSheetModule",(function(){return Ae}));var i=n("An66"),a=n("1VvW"),o=n("cmCb"),r=n("T8fS"),l=n("SVIu"),s=n("hLNI"),c=n("Qq0t"),m=n("dvRg"),p=n("l4xa"),u=n("kZht"),d=n("OZlg"),h=n("e0eB"),g=n("iyc4"),S=n("ZTXN"),E=n("6Oco"),b=n("TLy2"),f=n("jOdJ"),_=n("5uGe");class y{constructor(e,t){this.count=e,this.source=t}call(e,t){return t.subscribe(new T(e,this.count,this.source))}}class T extends _.a{constructor(e,t,n){super(e),this.count=t,this.source=n}error(e){if(!this.isStopped){const{source:t,count:n}=this;if(0===n)return super.error(e);n>-1&&(this.count=n-1),t.subscribe(this._unsubscribeAndRecycle())}}}var x=n("kuMc"),v=n("zV1d");let C=(()=>{class e{constructor(e,t){this.stream$=new S.a,this.stream$.pipe(Object(b.a)((e,n)=>n%2?E.a:t.open("Simple sheet",{overlay:!0}).pipe(Object(f.a)())),function(e=-1){return t=>t.lift(new y(e,t))}(),Object(x.a)(e)).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](p.kb),u["\u0275\u0275directiveInject"](s.n))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-sheet-example-1"]],features:[u["\u0275\u0275ProvidersFeature"]([p.kb])],decls:2,vars:0,consts:[["tuiButton","",3,"click"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"button",0),u["\u0275\u0275listener"]("click",(function(){return t.stream$.next()})),u["\u0275\u0275text"](1," Show/Hide\n"),u["\u0275\u0275elementEnd"]())},directives:[v.a],encapsulation:2,changeDetection:0}),e})();var w=n("NfKe"),A=n("2knR");function O(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"h2",2),u["\u0275\u0275text"](1,"Alexander Inkin"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"div",3),u["\u0275\u0275element"](3,"a",4),u["\u0275\u0275element"](4,"a",5),u["\u0275\u0275element"](5,"a",6),u["\u0275\u0275elementEnd"]())}let M=(()=>{class e{constructor(){this.open=!1,this.options={overlay:!0,image:"assets/images/avatar.jpg"}}toggle(){this.open=!this.open}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-sheet-example-2"]],decls:3,vars:2,consts:[["tuiButton","",3,"click"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["tuiSheetHeading",""],[1,"tui-space_top-4"],["tuiIconButton","","size","m","appearance","secondary","icon","tuiIconMailLarge","title","Email","href","mailto:alexander@inkin.ru",1,"tui-space_right-2"],["tuiIconButton","","size","m","appearance","secondary","icon","tuiIconCallTransferLarge","title","Telegram","href","https://t.me/waterplea",1,"tui-space_right-2"],["tuiIconButton","","size","m","appearance","secondary","icon","tuiIconMusicLarge","title","Music","href","https://waterplea.bandcamp.com/"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"button",0),u["\u0275\u0275listener"]("click",(function(){return t.toggle()})),u["\u0275\u0275text"](1," Show/Hide\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](2,O,6,0,"ng-template",1),u["\u0275\u0275listener"]("tuiSheetChange",(function(e){return t.open=e}))),2&e&&(u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("tuiSheetOptions",t.options)("tuiSheet",t.open))},directives:[v.a,w.a,A.b],encapsulation:2,changeDetection:0}),e})();var P=n("aPft"),I=n("1Nkj"),k=n("0/K7");function L(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"h2",2),u["\u0275\u0275elementStart"](1,"label",3),u["\u0275\u0275text"](2," And the Holy Grail "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"p",4),u["\u0275\u0275elementStart"](4,"button",5),u["\u0275\u0275text"](5," Buy "),u["\u0275\u0275element"](6,"tui-money",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"button",7),u["\u0275\u0275text"](8," Rent "),u["\u0275\u0275element"](9,"tui-money",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"button",8),u["\u0275\u0275text"](11," Add to Watch List "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"h3",9),u["\u0275\u0275text"](13,"Cast:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](14,"p"),u["\u0275\u0275text"](15,"John Cleese"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](16,"p"),u["\u0275\u0275text"](17,"Eric Idle"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](18,"p"),u["\u0275\u0275text"](19,"Michael Palin"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](20,"p"),u["\u0275\u0275text"](21,"Graham Chapman"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](22,"p"),u["\u0275\u0275text"](23,"Terry Gilliam"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](24,"p"),u["\u0275\u0275text"](25,"Terry Jones"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](26,"p"),u["\u0275\u0275text"](27,"Carol Cleveland"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](28,"hr"),u["\u0275\u0275elementStart"](29,"h3"),u["\u0275\u0275text"](30,"Directed by:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](31,"p"),u["\u0275\u0275text"](32,"Terry Gilliam"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](33,"p"),u["\u0275\u0275text"](34,"Terry Jones"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](35,"hr"),u["\u0275\u0275elementStart"](36,"h3"),u["\u0275\u0275text"](37,"Produced by:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](38,"p"),u["\u0275\u0275text"](39,"Mark Forstater"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](40,"p"),u["\u0275\u0275text"](41,"Michael White"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](42,"hr"),u["\u0275\u0275elementStart"](43,"h3"),u["\u0275\u0275text"](44,"Written by:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](45,"p"),u["\u0275\u0275text"](46,"John Cleese"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](47,"p"),u["\u0275\u0275text"](48,"Eric Idle"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](49,"p"),u["\u0275\u0275text"](50,"Michael Palin"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](51,"p"),u["\u0275\u0275text"](52,"Graham Chapman"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](53,"p"),u["\u0275\u0275text"](54,"Terry Gilliam"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](55,"p"),u["\u0275\u0275text"](56,"Terry Jones"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](57,"hr"),u["\u0275\u0275elementStart"](58,"h3"),u["\u0275\u0275text"](59,"Budget:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](60,"p"),u["\u0275\u0275element"](61,"tui-money",10),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](62,"hr"),u["\u0275\u0275elementStart"](63,"h3"),u["\u0275\u0275text"](64,"Box office:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](65,"p"),u["\u0275\u0275element"](66,"tui-money",10),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](67,"hr"),u["\u0275\u0275elementStart"](68,"h3"),u["\u0275\u0275text"](69,"Release date"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](70,"p"),u["\u0275\u0275text"](71,"April 3, 1975"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](72,"hr"),u["\u0275\u0275elementStart"](73,"h3"),u["\u0275\u0275text"](74,"Running time"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](75,"p"),u["\u0275\u0275text"](76,"92 minutes"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](77,"footer",11),u["\u0275\u0275text"](78,"\xa9 EMI Films"),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("value",12.99),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("value",4.99),u["\u0275\u0275advance"](52),u["\u0275\u0275property"]("value",4e5),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("value",5e6))}let $=(()=>{class e{constructor(){this.open=!1,this.options={stops:["calc(5rem + 74vw)","calc(9rem + 74vw)"],image:"https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/10/IMG_0323-1024x756.jpeg"}}toggle(){this.open=!this.open}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-sheet-example-3"]],decls:3,vars:2,consts:[["tuiButton","",3,"click"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["tuiSheetHeading",""],["tuiLabel","","label","Monty Python"],[1,"buttons"],["tuiButton","","size","m","appearance","secondary",1,"tui-space_right-2"],["currency","USD",1,"tui-space_left-1",3,"value"],["tuiButton","","size","m","appearance","secondary"],["tuiButton","","size","m",1,"action"],[1,"cast"],["currency","USD",3,"value"],[1,"footer"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"button",0),u["\u0275\u0275listener"]("click",(function(){return t.toggle()})),u["\u0275\u0275text"](1," Show/Hide\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](2,L,79,4,"ng-template",1),u["\u0275\u0275listener"]("tuiSheetChange",(function(e){return t.open=e}))),2&e&&(u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("tuiSheetOptions",t.options)("tuiSheet",t.open))},directives:[v.a,w.a,A.b,I.a,k.a],styles:[".buttons[_ngcontent-%COMP%]{display:flex;margin:.3rem 0 1rem}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1}.action[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:calc(100% - 4rem);width:100%;display:block;z-index:1}.cast[_ngcontent-%COMP%]{margin-top:-2rem}.footer[_ngcontent-%COMP%]{margin:0 -1rem -1rem;padding:1rem 1rem 5rem;background:var(--tui-base-02)}"],changeDetection:0}),e})();var V=n("B5kp"),G=n("yZWP");function U(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"h2",2),u["\u0275\u0275listener"]("tuiElasticSticky",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().onElastic(t)})),u["\u0275\u0275element"](1,"img",3),u["\u0275\u0275text"](2," Web APIs for Angular "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"p"),u["\u0275\u0275text"](4,"Our goal is to provide high quality lightweight wrappers for various native Web APIs to use with Angular."),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"h3"),u["\u0275\u0275text"](6,"Our libraries"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275elementStart"](8,"a",4),u["\u0275\u0275text"](9," Common "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"p"),u["\u0275\u0275elementStart"](11,"a",5),u["\u0275\u0275text"](12," Universal "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](13,"p"),u["\u0275\u0275elementStart"](14,"a",6),u["\u0275\u0275text"](15," Audio "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](16,"p"),u["\u0275\u0275elementStart"](17,"a",7),u["\u0275\u0275text"](18," Canvas "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](19,"p"),u["\u0275\u0275elementStart"](20,"a",8),u["\u0275\u0275text"](21," Geolocation "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](22,"p"),u["\u0275\u0275elementStart"](23,"a",9),u["\u0275\u0275text"](24," Intersection Observer "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](25,"p"),u["\u0275\u0275elementStart"](26,"a",10),u["\u0275\u0275text"](27," MIDI "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](28,"p"),u["\u0275\u0275elementStart"](29,"a",11),u["\u0275\u0275text"](30," Mutation Observer "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](31,"p"),u["\u0275\u0275elementStart"](32,"a",12),u["\u0275\u0275text"](33," Payment Request "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](34,"p"),u["\u0275\u0275elementStart"](35,"a",13),u["\u0275\u0275text"](36," Permissions "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](37,"p"),u["\u0275\u0275elementStart"](38,"a",14),u["\u0275\u0275text"](39," Resize Observer "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](40,"p"),u["\u0275\u0275elementStart"](41,"a",15),u["\u0275\u0275text"](42," Speech "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](43,"p"),u["\u0275\u0275elementStart"](44,"a",16),u["\u0275\u0275text"](45," Storage "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](46,"p"),u["\u0275\u0275elementStart"](47,"a",17),u["\u0275\u0275text"](48," Workers "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](49,"h3"),u["\u0275\u0275text"](50,"Sponsor"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](51,"p"),u["\u0275\u0275elementStart"](52,"a",18),u["\u0275\u0275text"](53," Open Collective "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275styleProp"]("opacity",e.elastic*e.elastic*e.elastic)("transform",e.transform)}}let z=(()=>{class e{constructor(){this.open=!1,this.elastic=1,this.options={stops:["12rem"]}}get transform(){return`scale(${this.elastic*this.elastic})`}toggle(){this.elastic=1,this.open=!this.open}onElastic(e){this.elastic=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-sheet-example-4"]],decls:3,vars:2,consts:[["tuiButton","",3,"click"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["tuiSheetHeading","",1,"heading",3,"tuiElasticSticky"],["src","assets/images/angular.svg","alt","Angular logo",1,"image"],["tuiLink","","href","https://github.com/ng-web-apis/common"],["tuiLink","","href","https://github.com/ng-web-apis/universal"],["tuiLink","","href","https://github.com/ng-web-apis/audio"],["tuiLink","","href","https://github.com/ng-web-apis/canvas"],["tuiLink","","href","https://github.com/ng-web-apis/geolocation"],["tuiLink","","href","https://github.com/ng-web-apis/intersection-observer"],["tuiLink","","href","https://github.com/ng-web-apis/midi"],["tuiLink","","href","https://github.com/ng-web-apis/mutation-observer"],["tuiLink","","href","https://github.com/ng-web-apis/payment-request"],["tuiLink","","href","https://github.com/ng-web-apis/permissions"],["tuiLink","","href","https://github.com/ng-web-apis/resize-observer"],["tuiLink","","href","https://github.com/ng-web-apis/speech"],["tuiLink","","href","https://github.com/ng-web-apis/storage"],["tuiLink","","href","https://github.com/ng-web-apis/workers"],["tuiLink","","href","https://opencollective.com/ng-web-apis"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"button",0),u["\u0275\u0275listener"]("click",(function(){return t.toggle()})),u["\u0275\u0275text"](1," Show/Hide\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](2,U,54,4,"ng-template",1),u["\u0275\u0275listener"]("tuiSheetChange",(function(e){return t.open=e}))),2&e&&(u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("tuiSheetOptions",t.options)("tuiSheet",t.open))},directives:[v.a,w.a,A.b,V.a,G.a],styles:[".heading[_ngcontent-%COMP%]{height:12rem;top:-8rem;display:flex;align-items:flex-end;flex-direction:row-reverse;justify-content:space-between;background:var(--tui-support-03)}.image[_ngcontent-%COMP%]{position:absolute;height:8rem;width:100%;top:1rem;left:0;transform-origin:bottom;pointer-events:none}"],changeDetection:0}),e})();function D(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",3),u["\u0275\u0275elementStart"](1,"h2",4),u["\u0275\u0275text"](2," Planet Earth "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"div",5),u["\u0275\u0275element"](4,"img",6),u["\u0275\u0275pipe"](5,"async"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"p"),u["\u0275\u0275text"](7," Earth is the third planet from the Sun and the only astronomical object known to harbour and support life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics. "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=t.scroll$,n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](4),u["\u0275\u0275styleProp"]("transform",n.getTransform(u["\u0275\u0275pipeBind1"](5,2,e)))}}let N=(()=>{class e{constructor(){this.open=!1,this.options={overlay:!0,stops:["4.5rem"]}}toggle(){this.open=!this.open}getTransform(e){return`translate3d(0, -${100/166*(Math.round((e||0)/2)%166)}%, 0)`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-sheet-example-5"]],decls:4,vars:2,consts:[["tuiButton","",3,"click"],["src","assets/images/earth.jpg","alt","",1,"preload"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],[1,"wrapper"],["tuiSheetHeading","",1,"heading"],[1,"earth"],["src","assets/images/earth.jpg","alt","",1,"image"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"button",0),u["\u0275\u0275listener"]("click",(function(){return t.toggle()})),u["\u0275\u0275text"](1," Show/Hide\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](2,"img",1),u["\u0275\u0275template"](3,D,8,4,"ng-template",2),u["\u0275\u0275listener"]("tuiSheetChange",(function(e){return t.open=e}))),2&e&&(u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("tuiSheetOptions",t.options)("tuiSheet",t.open))},directives:[v.a,w.a,A.b],pipes:[i.b],styles:[".wrapper[_ngcontent-%COMP%]{color:#fff;background:#000;box-shadow:0 5rem 0 1rem #000}.heading[_ngcontent-%COMP%]{background:inherit}.preload[_ngcontent-%COMP%]{position:absolute;height:1px;width:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0,0,0,0);-webkit-clip-path:inset(0);clip-path:inset(0)}.earth[_ngcontent-%COMP%]{position:relative;width:50%;height:50%;margin:1rem auto;overflow:hidden}.image[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}"],changeDetection:0}),e})();function B(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"img",6,7),u["\u0275\u0275listener"]("waIntersectionObservee",(function(t){u["\u0275\u0275restoreView"](e);const n=u["\u0275\u0275reference"](1);return u["\u0275\u0275nextContext"](2).onIntersection(t,n)})),u["\u0275\u0275elementEnd"]()}2&e&&u["\u0275\u0275property"]("src",t.$implicit,u["\u0275\u0275sanitizeUrl"])}function j(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0,2),u["\u0275\u0275elementStart"](1,"h2",3),u["\u0275\u0275elementStart"](2,"label",4),u["\u0275\u0275text"](3," And the Holy Grail "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](4,B,2,1,"img",5),u["\u0275\u0275elementContainerEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("ngForOf",e.images)}}let R=(()=>{class e{constructor(){this.open=!1,this.options={overlay:!0,stops:["5rem"]},this.images=["https://m.media-amazon.com/images/M/MV5BOTEzOTMzNzcwNF5BMl5BanBnXkFtZTgwNDcxODUyMjI@._V1_FMjpg_UX1280_.jpg","https://m.media-amazon.com/images/M/MV5BNzg0MzEwNDgwN15BMl5BanBnXkFtZTgwNTcxODUyMjI@._V1_FMjpg_UX1024_.jpg","https://m.media-amazon.com/images/M/MV5BOTE0MTMxMTY3NF5BMl5BanBnXkFtZTgwNDc3NjIwMjE@._V1_FMjpg_UX1024_.jpg","https://m.media-amazon.com/images/M/MV5BNjc4ODAyMDg3NF5BMl5BanBnXkFtZTgwOTY3NjIwMjE@._V1_FMjpg_UX600_.jpg","https://m.media-amazon.com/images/M/MV5BMTU3NDY1MTk3M15BMl5BanBnXkFtZTgwMjc3NjIwMjE@._V1_FMjpg_UX1024_.jpg"]}toggle(){this.open=!this.open}onIntersection([{isIntersecting:e}],{classList:t}){t.toggle("_visible",e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-sheet-example-6"]],decls:3,vars:2,consts:[["tuiButton","",3,"click"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["waIntersectionObserver",""],["tuiSheetHeading",""],["tuiLabel","","label","Monty Python"],["alt","","class","image",3,"src","waIntersectionObservee",4,"ngFor","ngForOf"],["alt","",1,"image",3,"src","waIntersectionObservee"],["img",""]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"button",0),u["\u0275\u0275listener"]("click",(function(){return t.toggle()})),u["\u0275\u0275text"](1," Show/Hide\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](2,j,5,1,"ng-template",1),u["\u0275\u0275listener"]("tuiSheetChange",(function(e){return t.open=e}))),2&e&&(u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("tuiSheetOptions",t.options)("tuiSheet",t.open))},directives:[v.a,w.a,o.e,A.b,I.a,i.s,o.d],styles:[".image[_ngcontent-%COMP%]{transition-property:transform,opacity;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out;width:100%;display:block;margin:1rem 0;transform:translate3d(-5rem,0,0);opacity:0}.image._visible[_ngcontent-%COMP%]{transform:none;opacity:1}"],changeDetection:0}),e})();var X=n("EPR0"),H=n("yHor"),F=n("zGJC"),Z=n("cweO"),J=n("u8jZ");const W=["template"],K=["heading",$localize`:␟7b320cfede5dfb62207fd258205dec29002ded0b␟367530706575500574:String`],q=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],Q=["heading",$localize`:␟bc2e854e111ecf2bd7db170da5e3c2ed08181d88␟6201638315245239510:Advanced`],Y=["heading",$localize`:␟878055125cb8179b9acca778e8058e4c37d7931c␟4224425564565570136:Elastic sticky`],ee=["heading",$localize`:␟c4f3865ea4353ffabaa13269d848a15589c33294␟410395238023660102:Scroll`],te=["heading",$localize`:␟12fcf30268b4593c4ea4460d54ce762d89865908␟6340245878091220905:IntersectionObserver`];var ne,ie,ae,oe,re,le,se,ce,me,pe,ue;function de(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,ne,1),u["\u0275\u0275element"](1,"tui-notification",5),u["\u0275\u0275i18nEnd"]())}function he(e,t){if(1&e&&(u["\u0275\u0275i18nStart"](0,ne),u["\u0275\u0275template"](1,de,2,0,"tui-notification",2),u["\u0275\u0275elementStart"](2,"tui-doc-example",3),u["\u0275\u0275i18nAttributes"](3,K),u["\u0275\u0275element"](4,"tui-sheet-example-1"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-doc-example",4),u["\u0275\u0275i18nAttributes"](6,q),u["\u0275\u0275element"](7,"tui-sheet-example-2"),u["\u0275\u0275elementStart"](8,"tui-notification",5),u["\u0275\u0275element"](9,"code"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"tui-doc-example",6),u["\u0275\u0275i18nAttributes"](11,Q),u["\u0275\u0275element"](12,"tui-sheet-example-3"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](13,"tui-doc-example",7),u["\u0275\u0275i18nAttributes"](14,Y),u["\u0275\u0275element"](15,"tui-sheet-example-4"),u["\u0275\u0275elementStart"](16,"tui-notification",5),u["\u0275\u0275elementStart"](17,"a",8),u["\u0275\u0275element"](18,"code"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](19,"tui-doc-example",9),u["\u0275\u0275i18nAttributes"](20,ee),u["\u0275\u0275element"](21,"tui-sheet-example-5"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](22,"tui-doc-example",10),u["\u0275\u0275i18nAttributes"](23,te),u["\u0275\u0275element"](24,"tui-sheet-example-6"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275i18nEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",!e.isMobile),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("content",e.example1),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",e.example2),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("content",e.example3),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",e.example4),u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("content",e.example5),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",e.example6)}}function ge(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",21),u["\u0275\u0275element"](1,"tui-avatar",22),u["\u0275\u0275elementStart"](2,"h2"),u["\u0275\u0275text"](3,"Karl Gambolputty"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("rounded",!0))}function Se(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275text"](0," Karl Gambolputty de von Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-n\xfcrnburger-bratwustle-gerspurten-mitzweimache-luber-hundsfut-gumberaber-sh\xf6nendanker-kalbsfleisch-mittler-aucher von Hautkopft of Ulm was the last-surviving relative of Johann Gambolputty de von Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-n\xfcrnburger-bratwustle-gerspurten-mitzweimache-luber-hundsfut-gumberaber-sh\xf6nendanker-kalbsfleisch-mittler-aucher von Hautkopft of Ulm. "),u["\u0275\u0275elementStart"](1,"div",5),u["\u0275\u0275elementStart"](2,"button",11),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"](2).toggle()})),u["\u0275\u0275text"](3," Close "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}}function Ee(e,t){1&e&&u["\u0275\u0275i18n"](0,ie)}function be(e,t){1&e&&u["\u0275\u0275i18n"](0,ae)}function fe(e,t){1&e&&u["\u0275\u0275i18n"](0,oe)}function _e(e,t){1&e&&u["\u0275\u0275i18n"](0,re)}function ye(e,t){1&e&&u["\u0275\u0275i18n"](0,le)}function Te(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,se),u["\u0275\u0275element"](1,"code"),u["\u0275\u0275i18nEnd"]())}function xe(e,t){1&e&&u["\u0275\u0275i18n"](0,ce)}function ve(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-doc-demo"),u["\u0275\u0275elementStart"](1,"button",11),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().toggle()})),u["\u0275\u0275text"](2," Toggle "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](3,ge,4,1,"ng-template",null,12,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275template"](5,Se,4,0,"ng-template",13),u["\u0275\u0275listener"]("tuiSheetChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().open=t})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"tui-doc-documentation"),u["\u0275\u0275template"](7,Ee,1,0,"ng-template",14),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().closeable=t})),u["\u0275\u0275template"](8,be,1,0,"ng-template",15),u["\u0275\u0275template"](9,fe,1,0,"ng-template",16),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().image=t})),u["\u0275\u0275template"](10,_e,1,0,"ng-template",17),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().imageSlide=t})),u["\u0275\u0275template"](11,ye,1,0,"ng-template",18),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().stops=t})),u["\u0275\u0275template"](12,Te,2,0,"ng-template",19),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().initial=t})),u["\u0275\u0275template"](13,xe,1,0,"ng-template",20),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().overlay=t})),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("tuiSheetOptions",e.options)("tuiSheet",e.open),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("documentationPropertyValue",e.closeable),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("documentationPropertyValues",e.imageVariants)("documentationPropertyValue",e.image),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",e.imageSlide),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValues",e.stopsVariants)("documentationPropertyValue",e.stops),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",e.initial),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",e.overlay)}}function Ce(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",23),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,me),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",24),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"li"),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275i18nStart"](8,pe),u["\u0275\u0275element"](9,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](10,"tui-doc-code",25),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](11,"li"),u["\u0275\u0275elementStart"](12,"p"),u["\u0275\u0275i18n"](13,ue),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",e.exampleModule),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",e.exampleHtml)}}ne=$localize`:␟17df46c279c3811bee96b6af37e46e760d333ae8␟544235089504012978: A mobile draggable sheet popup ${"\ufffd*1:1\ufffd\ufffd#1:1\ufffd"}:START_TAG_TUI_NOTIFICATION: This component only works on mobile devices. Enable emulation in DevTools ${"[\ufffd/#1:1\ufffd\ufffd/*1:1\ufffd|\ufffd/#8\ufffd|\ufffd/#16\ufffd]"}:CLOSE_TAG_TUI_NOTIFICATION:${"\ufffd#2\ufffd"}:START_TAG_TUI_DOC_EXAMPLE:${"\ufffd#4\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_1:${"\ufffd/#4\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_1:${"[\ufffd/#2\ufffd|\ufffd/#5\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#19\ufffd|\ufffd/#22\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#5\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\ufffd#7\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_2:${"\ufffd/#7\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_2:${"[\ufffd#8\ufffd|\ufffd#16\ufffd]"}:START_TAG_TUI_NOTIFICATION_1: Note ${"[\ufffd#9\ufffd|\ufffd#18\ufffd]"}:START_TAG_CODE:SheetHeading${"[\ufffd/#9\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_CODE: component that styles the heading and adds close button if sheet is closeable. ${"[\ufffd/#1:1\ufffd\ufffd/*1:1\ufffd|\ufffd/#8\ufffd|\ufffd/#16\ufffd]"}:CLOSE_TAG_TUI_NOTIFICATION:${"[\ufffd/#2\ufffd|\ufffd/#5\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#19\ufffd|\ufffd/#22\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#10\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_2:${"\ufffd#12\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_3:${"\ufffd/#12\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_3:${"[\ufffd/#2\ufffd|\ufffd/#5\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#19\ufffd|\ufffd/#22\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#13\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_3:${"\ufffd#15\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_4:${"\ufffd/#15\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_4:${"[\ufffd#8\ufffd|\ufffd#16\ufffd]"}:START_TAG_TUI_NOTIFICATION_1: Using ${"\ufffd#17\ufffd"}:START_LINK:${"[\ufffd#9\ufffd|\ufffd#18\ufffd]"}:START_TAG_CODE:ElasticSticky${"[\ufffd/#9\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#17\ufffd"}:CLOSE_LINK: directive. ${"[\ufffd/#1:1\ufffd\ufffd/*1:1\ufffd|\ufffd/#8\ufffd|\ufffd/#16\ufffd]"}:CLOSE_TAG_TUI_NOTIFICATION:${"[\ufffd/#2\ufffd|\ufffd/#5\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#19\ufffd|\ufffd/#22\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#19\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_4:${"\ufffd#21\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_5:${"\ufffd/#21\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_5:${"[\ufffd/#2\ufffd|\ufffd/#5\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#19\ufffd|\ufffd/#22\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#22\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_5:${"\ufffd#24\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_6:${"\ufffd/#24\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_6:${"[\ufffd/#2\ufffd|\ufffd/#5\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#19\ufffd|\ufffd/#22\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`,ne=u["\u0275\u0275i18nPostprocess"](ne),ie=$localize`:␟b39d63fa1b474671b52726de98d807fac8efdd14␟789026922885983016: Whether or not a sheet can be closed by user. `,ae=$localize`:␟248c35c478eb41deba7c1d911749b794c6c93a03␟1564494239753492654: Optional data to be passed to the sheet. `,oe=$localize`:␟3bc21c6c63ea366375de22b440d0456ca472fe47␟209822900321825176: A content to show above the sheet. `,re=$localize`:␟5ad027d74e7ea30ad40e20e74d20867cadcdda33␟3583507394866888478: Should image slide as the sheet is dragged. `,le=$localize`:␟7e1f605b14271a9c2835c1625c805803c1fb4e0f␟3215748703455516929: An array of stop points in any units for the sheet. `,se=$localize`:␟669747bf72f03b8c3febb2d4fd6092243df752fd␟4013392256564511269: Initial stop index to open on. Indices exceeding ${"\ufffd#1\ufffd"}:START_TAG_CODE:stops${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: are treated as stop on image then stop on top of the sheet's content. `,ce=$localize`:␟b3bd625e4722dd3bf642785886aaf10746acf0ad␟9103217685047430070: Show overlay under the sheet. `,me=$localize`:␟2bc15979415c542520702c4ca36c2ef49ee5b960␟2103370040640569894: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiSheetModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into main module of your app `,pe=$localize`:␟7b57d41c144bff421e69fdaf640fd91f25ad7ca8␟5411998498342604928: Add ${"\ufffd#9\ufffd"}:START_TAG_CODE:tui-sheets-host${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE: to the main template like this: `,ue=$localize`:␟64e1b80a8fc848d8e0d252f5168f92c64af4d1ca␟4154707475615926903:Use directive or service as shown in examples.`;let we=(()=>{class e{constructor(e){this.isMobile=e,this.templateRef="",this.example1={TypeScript:n.e(1318).then(n.bind(null,"Zca+")),HTML:n.e(1317).then(n.bind(null,"Eq9E"))},this.example2={TypeScript:n.e(1320).then(n.bind(null,"vEIa")),HTML:n.e(1319).then(n.bind(null,"XFRG"))},this.example3={TypeScript:n.e(1323).then(n.bind(null,"jwZQ")),HTML:n.e(1321).then(n.bind(null,"fvID")),LESS:n.e(1322).then(n.bind(null,"XRi6"))},this.example4={TypeScript:n.e(1326).then(n.bind(null,"mnln")),HTML:n.e(1324).then(n.bind(null,"fN++")),LESS:n.e(1325).then(n.bind(null,"hRb0"))},this.example5={TypeScript:n.e(1329).then(n.bind(null,"epvX")),HTML:n.e(1327).then(n.bind(null,"+r/n")),LESS:n.e(1328).then(n.bind(null,"ABw0"))},this.example6={TypeScript:n.e(1332).then(n.bind(null,"21mc")),HTML:n.e(1330).then(n.bind(null,"IxAl")),LESS:n.e(1331).then(n.bind(null,"vop2"))},this.exampleModule=n.e(1333).then(n.bind(null,"7lCj")),this.exampleHtml=n.e(1334).then(n.bind(null,"Z7Wv")),this.closeable=s.b.closeable,this.image=s.b.image,this.imageSlide=s.b.imageSlide,this.initial=s.b.initial,this.overlay=s.b.overlay,this.stops=s.b.stops,this.open=!1,this.imageVariants=[this.image,"/assets/images/avatar.jpg","Template"],this.stopsVariants=[this.stops,["100px"],["10rem","20rem"]]}get computedImage(){return"Template"===this.image?this.templateRef:this.image}get options(){return{closeable:this.closeable,image:this.computedImage,imageSlide:this.imageSlide,stops:this.stops,initial:this.initial,overlay:this.overlay}}toggle(){this.open=!this.open}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](p.R))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-sheet"]],viewQuery:function(e,t){var n;1&e&&u["\u0275\u0275viewQuery"](W,!0),2&e&&u["\u0275\u0275queryRefresh"](n=u["\u0275\u0275loadQuery"]())&&(t.templateRef=n.first)},decls:4,vars:0,consts:[["header","Sheet","package","ADDON-MOBILE","type","components"],["pageTab",""],["class","tui-space_top-4",4,"ngIf"],["id","string",3,"content",6,"heading"],["id","basic",3,"content",6,"heading"],[1,"tui-space_top-4"],["id","advanced",3,"content",6,"heading"],["id","elastic",3,"content",6,"heading"],["tuiLink","","routerLink","directives/elastic-sticky"],["id","scroll","description","Modifying content using scroll stream from the context",3,"content",6,"heading"],["id","intersection","description","Modifying content with IntersectionObserver",3,"content",6,"heading"],["tuiButton","",3,"click"],["template",""],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["documentationPropertyName","closeable","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","data","documentationPropertyType","I"],["documentationPropertyName","image","documentationPropertyType","PolymorpheusContent<TuiSheetOptions<I>>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","imageSlide","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","stops","documentationPropertyType","string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","initial","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","overlay","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"top"],["text","Karl Gambolputty","size","l",3,"rounded"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275template"](1,he,25,7,"ng-template",1),u["\u0275\u0275template"](2,ve,14,10,"ng-template",1),u["\u0275\u0275template"](3,Ce,14,2,"ng-template",1),u["\u0275\u0275elementEnd"]())},directives:[d.a,h.a,i.t,g.a,C,M,P.a,$,z,G.a,a.e,N,R,X.a,v.a,w.a,H.a,F.a,Z.a,J.a],styles:[".top[_ngcontent-%COMP%]{background:var(--tui-accent);padding:1rem;display:flex;flex-direction:column;align-items:center}"],changeDetection:0}),e})(),Ae=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,c.bb,c.Ab,r.g,m.z,c.Jb,c.Bb,s.d,s.m,o.f,l.m,a.f.forChild(Object(l.u)(we))]]}),e})()}}]);