"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[43740],{43740:(Y,m,t)=>{t.r(m),t.d(m,{ExampleTuiScrollModule:()=>I});var d=t(12057),a=t(24751),h=t(33982),u=t(29851),c=t(68339),p=t(3497),g=t(18738),e=t(74788),T=t(88331),f=t(37159),v=t(57068),y=t(65009),Z=t(10383),x=t(76189),C=t(3881),b=t(34600);let M=(()=>{class o{constructor(n){this.scrollService=n,this.scrollTop=0,this.scrollLeft=0,this.duration=300}onClick({nativeElement:n}){this.scrollService.scroll$(n,this.scrollTop,this.scrollLeft,this.duration).subscribe()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(c.TuiScrollService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-scroll-example-1"]],decls:18,vars:3,consts:[[1,"flex"],[1,"element",3,"ngModel","ngModelChange"],["tuiButton","","type","button",1,"element",3,"click"],["tuiElement","",1,"scrollbar"],["scrollRef","elementRef"],[1,"wrapper"]],template:function(n,i){if(1&n){const F=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"tui-input-count",1),e.NdJ("ngModelChange",function(r){return i.scrollTop=r}),e._uU(2," scrollTop "),e.qZA(),e.TgZ(3,"tui-input-count",1),e.NdJ("ngModelChange",function(r){return i.scrollLeft=r}),e._uU(4," scrollLeft "),e.qZA(),e.TgZ(5,"tui-input-count",1),e.NdJ("ngModelChange",function(r){return i.duration=r}),e._uU(6," duration "),e.qZA(),e.TgZ(7,"button",2),e.NdJ("click",function(){e.CHM(F);const r=e.MAs(10);return i.onClick(r)}),e._uU(8," Go! "),e.qZA(),e.qZA(),e.TgZ(9,"tui-scrollbar",3,4),e.TgZ(11,"div",5),e.TgZ(12,"p"),e._uU(13," Monty Python (also collectively known as the Pythons) were a British surreal comedy group who created their sketch comedy show Monty Python's Flying Circus, which first aired on the BBC in 1969. Forty-five episodes were made over four series. The Python phenomenon developed from the television series into something larger in scope and impact, including touring stage shows, films, numerous albums, several books, and musicals. The Pythons' influence on comedy has been compared to the Beatles' influence on music. Their sketch show has been referred to as \"not only one of the more enduring icons of 1970s British popular culture, but also an important moment in the evolution of television comedy\". "),e.qZA(),e.TgZ(14,"p"),e._uU(15," Broadcast by the BBC between 1969 and 1974, Monty Python's Flying Circus was conceived, written, and performed by its members Graham Chapman, John Cleese, Terry Gilliam, Eric Idle, Terry Jones, and Michael Palin. Loosely structured as a sketch show, but with an innovative stream-of-consciousness approach, aided by Gilliam's animation, it pushed the boundaries of what was acceptable in style and content. A self-contained comedy team responsible for both writing and performing their work, the Pythons had creative control which allowed them to experiment with form and content, discarding rules of television comedy. Following their television work, they began making films, which include Monty Python and the Holy Grail (1975), Life of Brian (1979) and The Meaning of Life (1983). Their influence on British comedy has been apparent for years, while in North America, it has coloured the work of cult performers from the early editions of Saturday Night Live through to more recent absurdist trends in television comedy. \"Pythonesque\" has entered the English lexicon as a result. "),e.qZA(),e.TgZ(16,"p"),e._uU(17,' In a 2005 poll of over 300 comics, comedy writers, producers and directors throughout the English-speaking world to find "The Comedian\'s Comedian", three of the six Pythons members were voted to be among the top 50 greatest comedians ever: Cleese at No. 2, Idle at No. 21, and Palin at No. 30. '),e.qZA(),e.qZA(),e.qZA()}2&n&&(e.xp6(1),e.Q6J("ngModel",i.scrollTop),e.xp6(2),e.Q6J("ngModel",i.scrollLeft),e.xp6(2),e.Q6J("ngModel",i.duration))},directives:[y.E,Z.a,a.JJ,a.On,x.v,C.I,b.U],styles:[".flex[_ngcontent-%COMP%]{display:flex}.element[_ngcontent-%COMP%]{width:10rem;margin:0 1rem 1rem 0}.scrollbar[_ngcontent-%COMP%]{display:flex;max-width:25rem;max-height:18.75rem;background:var(--tui-secondary)}.wrapper[_ngcontent-%COMP%]{width:50rem;padding:0 1rem}"],changeDetection:0}),o})();var S=t(54476),A=t(17023),E=t(76349);function P(o,l){if(1&o&&(e.TgZ(0,"p"),e._uU(1,"A service for smooth scroll"),e.qZA(),e.TgZ(2,"tui-doc-example",2),e._UZ(3,"tui-scroll-example-1"),e.qZA()),2&o){const n=e.oxw();e.xp6(2),e.Q6J("content",n.example1)}}function U(o,l){1&o&&e._uU(0," Element to be scrolled ")}function w(o,l){1&o&&e._uU(0," Target position from top ")}function N(o,l){1&o&&(e.TgZ(0,"strong"),e._uU(1,"Optional"),e.qZA(),e._uU(2," . Target position from left "))}function O(o,l){1&o&&(e.TgZ(0,"strong"),e._uU(1,"Optional"),e.qZA(),e._uU(2," . Duration time in ms (0 for an instant scroll). "))}function J(o,l){1&o&&(e.TgZ(0,"p",3),e._uU(1," Method "),e.TgZ(2,"strong"),e.TgZ(3,"code"),e._uU(4,"scroll$: Observable<[number, number]>"),e.qZA(),e.qZA(),e.TgZ(5,"em"),e._uU(6," (emits a tuple tuple "),e.TgZ(7,"code"),e._uU(8,"[scrollTop, scrollLeft]"),e.qZA(),e._uU(9," ) "),e.qZA(),e.qZA(),e.TgZ(10,"tui-doc-documentation",4),e.YNc(11,U,1,0,"ng-template",5),e.YNc(12,w,1,0,"ng-template",6),e.YNc(13,N,3,0,"ng-template",7),e.YNc(14,O,3,0,"ng-template",8),e.qZA()),2&o&&(e.xp6(10),e.Q6J("showValues",!1))}function B(o,l){if(1&o&&(e.TgZ(0,"ol",9),e.TgZ(1,"li"),e.TgZ(2,"p"),e._uU(3," Inject "),e.TgZ(4,"code"),e._uU(5,"TuiScrollService"),e.qZA(),e._uU(6," into your component: "),e.qZA(),e._UZ(7,"tui-doc-code",10),e.qZA(),e.TgZ(8,"li"),e.TgZ(9,"p"),e._uU(10," Call "),e.TgZ(11,"code"),e._uU(12,"scroll$"),e.qZA(),e._uU(13," method and subscribe to returned "),e.TgZ(14,"code"),e._uU(15,"Observable"),e.qZA(),e._uU(16," : "),e.qZA(),e._UZ(17,"tui-doc-code",10),e.qZA(),e.qZA()),2&o){const n=e.oxw();e.xp6(7),e.Q6J("code",n.exampleInjectService),e.xp6(10),e.Q6J("code",n.exampleScroll)}}let L=(()=>{class o{constructor(){this.exampleScroll=t.e(5619).then(t.t.bind(t,5619,17)),this.exampleModule=t.e(5608).then(t.t.bind(t,5608,17)),this.exampleInjectService=t.e(11533).then(t.t.bind(t,11533,17)),this.example1={TypeScript:t.e(270).then(t.t.bind(t,270,17)),HTML:t.e(31083).then(t.t.bind(t,31083,17)),LESS:t.e(74469).then(t.t.bind(t,74469,17))}}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["example-tui-scrollbar"]],decls:4,vars:0,consts:[["header","ScrollService","package","CDK","path","cdk/services/scroll.service.ts"],["pageTab",""],["id","interactive","heading","Interactive sample",3,"content"],[1,"b-full-width"],[3,"showValues"],["documentationPropertyName","element","documentationPropertyType","Element"],["documentationPropertyName","scrollTop","documentationPropertyType","number"],["documentationPropertyName","scrollLeft","documentationPropertyType","number"],["documentationPropertyName","duration","documentationPropertyType","number"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(n,i){1&n&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,P,4,1,"ng-template",1),e.YNc(2,J,15,1,"ng-template",1),e.YNc(3,B,18,2,"ng-template",1),e.qZA())},directives:[T.q,f.n,v.f,M,S.z,A.B,E.c],styles:[".wrapper[_ngcontent-%COMP%]{width:31.25rem;height:31.25rem;overflow:auto;padding:1.25rem;background-color:var(--tui-secondary)}@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm){.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar, .wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{width:1rem;height:1rem;border-radius:6.25rem;background-clip:padding-box;border:2.667rem solid transparent}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{background-color:transparent}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--tui-clear-hover)}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--tui-clear-active)}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active{background-color:var(--tui-text-03)}}.bottom[_ngcontent-%COMP%]{position:absolute;bottom:0}.content[_ngcontent-%COMP%]{position:relative;width:62.5rem;height:62.5rem}"],changeDetection:0}),o})(),I=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[c.TuiScrollService],imports:[[d.ez,a.u5,c.TuiElementModule,g.TuiInputCountModule,p.TuiButtonModule,p.TuiScrollbarModule,u.fV,h.Bz.forChild((0,u.Ve)(L))]]}),o})()}}]);