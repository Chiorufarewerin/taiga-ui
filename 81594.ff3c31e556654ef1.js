(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[81594],{81594:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiPreviewModule:()=>R});var n=i(88692),o=i(91795),c=i(84369),l=i(50976),r=i(438),a=i(69972),s=i(89570),u=i(64537),p=i(79121),d=i(83074),m=i(43560),h=i(93525),g=i(38868),w=i(76189),v=i(10643),f=i(4498),b=i(49116),Z=i(48882),x=i(99021);const T=["preview"],y=["contentSample"];function A(e,t){if(1&e&&u._UZ(0,"img",10),2&e){const e=t.polymorpheusOutlet;u.Q6J("src",e,u.LSH)}}function S(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"tui-preview",4),u.NdJ("tuiSwipe",(function(t){u.CHM(e);const i=u.oxw();return u.KtG(i.onSwipe(t))})),u.TgZ(1,"tui-preview-title"),u._uU(2),u.qZA(),u.TgZ(3,"tui-preview-pagination",5),u.NdJ("indexChange",(function(t){u.CHM(e);const i=u.oxw();return u.KtG(i.index=t)})),u.qZA(),u.TgZ(4,"button",6),u.NdJ("click",(function(){u.CHM(e);const t=u.oxw();return u.KtG(t.delete())})),u.qZA(),u.TgZ(5,"button",7),u.NdJ("click",(function(){u.CHM(e);const t=u.oxw();return u.KtG(t.download())})),u.qZA(),u.TgZ(6,"button",8),u.NdJ("click",(function(){const t=u.CHM(e).$implicit;return u.KtG(t.complete())})),u.qZA(),u.YNc(7,A,1,1,"img",9),u.qZA()}if(2&e){const e=u.oxw();u.Q6J("rotatable",!0),u.xp6(2),u.Oqu(e.title),u.xp6(1),u.Q6J("length",e.length)("index",e.index),u.xp6(4),u.Q6J("polymorpheusOutlet",e.previewContent)}}function C(e,t){1&e&&(u.TgZ(0,"div",11)(1,"h1"),u._uU(2,"Important document"),u.qZA(),u.TgZ(3,"p"),u._uU(4,"Hello everyone! This is some important document in A4 format, although it is made using html"),u.qZA(),u.TgZ(5,"p"),u._uU(6," This shows that the component preview can work with absolutely any content: this way you can show any template, image, pdf or even iframe with your favorite site. We will put this content in the center of the portal and provide the user with control over it, and we will provide you with convenient levers to change it and process actions. "),u.qZA(),u._UZ(7,"img",12),u.qZA())}let _=(()=>{var e;class t{constructor(e,t){this.previewService=e,this.alerts=t,this.index=0,this.length=2}get title(){return 0===this.index?"Transaction cert.jpg":"My face.jpg"}get previewContent(){return 0===this.index&&this.contentSample?this.contentSample:"https://avatars.githubusercontent.com/u/10106368"}show(){this.previewService.open(this.preview||"").subscribe({complete:()=>console.info("complete")})}download(){this.alerts.open("Downloading...").subscribe()}delete(){this.alerts.open("Deleting...").subscribe()}onSwipe(e){"left"===e.direction&&(this.index=(0,r.tuiClamp)(this.index+1,0,this.length-1)),"right"===e.direction&&(this.index=(0,r.tuiClamp)(this.index-1,0,this.length-1))}}return(e=t).ɵfac=function(t){return new(t||e)(u.Y36(l.TuiPreviewDialogService),u.Y36(a.TuiAlertService))},e.ɵcmp=u.Xpm({type:e,selectors:[["tui-preview-example-1"]],viewQuery:function(e,t){if(1&e&&(u.Gf(T,5),u.Gf(y,5)),2&e){let e;u.iGM(e=u.CRH())&&(t.preview=e.first),u.iGM(e=u.CRH())&&(t.contentSample=e.first)}},decls:8,vars:0,consts:[[1,"tui-space_bottom-2"],["size","m","tuiButton","","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],["contentSample",""],[3,"rotatable","tuiSwipe"],[3,"length","index","indexChange"],["icon","tuiIconTrash","title","Delete","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["icon","tuiIconDownload","title","Download","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["icon","tuiIconClose","title","Close","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["alt","preview",3,"src",4,"polymorpheusOutlet"],["alt","preview",3,"src"],[1,"content"],["alt","logo","src","https://github.com/taiga-family/ng-polymorpheus/raw/master/projects/demo/assets/logo.svg",1,"polymorpheus"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u._uU(1,"With all features"),u.qZA(),u.TgZ(2,"button",1),u.NdJ("click",(function(){return t.show()})),u._uU(3," Show preview\n"),u.qZA(),u.YNc(4,S,8,5,"ng-template",null,2,u.W1O),u.YNc(6,C,8,0,"ng-template",null,3,u.W1O))},dependencies:[s.Li,w.v,v.m,f.v,b.S,Z.i,x.W],styles:[".content[_ngcontent-%COMP%]{font:var(--tui-font-text-xl);background-color:var(--tui-base-01);width:50rem;height:68.75rem;padding:3.75rem;box-sizing:border-box;border-radius:.75rem}.polymorpheus[_ngcontent-%COMP%]{padding:2.5rem 10.375rem}"],changeDetection:0}),t})();const q=["preview"];function U(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"tui-preview",2),u._UZ(1,"iframe",3),u.TgZ(2,"button",4),u.NdJ("click",(function(){const t=u.CHM(e).$implicit;return u.KtG(t.complete())})),u.qZA()()}2&e&&u.Q6J("rotatable",!1)("zoomable",!1)}let k=(()=>{var e;class t{constructor(e){this.previewDialogService=e}show(){this.previewDialogService.open(this.preview||"").subscribe()}}return(e=t).ɵfac=function(t){return new(t||e)(u.Y36(l.TuiPreviewDialogService))},e.ɵcmp=u.Xpm({type:e,selectors:[["tui-preview-example-2"]],viewQuery:function(e,t){if(1&e&&u.Gf(q,5),2&e){let e;u.iGM(e=u.CRH())&&(t.preview=e.first)}},decls:4,vars:0,consts:[["size","m","tuiButton","","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],[3,"rotatable","zoomable"],["allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","","frameborder","0","src","https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1","title","Youtube",1,"content"],["icon","tuiIconClose","title","Close","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"]],template:function(e,t){1&e&&(u.TgZ(0,"button",0),u.NdJ("click",(function(){return t.show()})),u._uU(1," Show simple preview\n"),u.qZA(),u.YNc(2,U,3,2,"ng-template",null,1,u.W1O))},dependencies:[w.v,v.m,f.v],styles:[".content[_ngcontent-%COMP%]{width:80%;height:80%}"],changeDetection:0}),t})();var M=i(54121),J=i(27969),P=i(74970),$=i(61528),N=i(51927),I=i(84945),H=i(1995),Q=i(34880),D=i(23184);const O=["preview"];function L(e,t){1&e&&(u.ynx(0),u.TgZ(1,"div",9),u._UZ(2,"tui-svg",10),u.TgZ(3,"div"),u._uU(4,"Preview unavailable"),u.qZA()(),u.BQk())}function G(e,t){if(1&e&&u._UZ(0,"img",11),2&e){const e=t.ngIf;u.Q6J("src",e,u.LSH)}}function B(e,t){1&e&&u._UZ(0,"tui-loader",12)}function Y(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"tui-preview",2),u.ALo(1,"async"),u.ALo(2,"async"),u.ALo(3,"async"),u.TgZ(4,"tui-preview-title"),u._uU(5),u.ALo(6,"async"),u.qZA(),u.TgZ(7,"tui-preview-pagination",3),u.NdJ("indexChange",(function(t){u.CHM(e);const i=u.oxw();return u.KtG(i.index$$.next(t))})),u.qZA(),u.TgZ(8,"button",4),u.NdJ("click",(function(){u.CHM(e);const t=u.oxw();return u.KtG(t.download())})),u.qZA(),u.TgZ(9,"button",5),u.NdJ("click",(function(){const t=u.CHM(e).$implicit;return u.KtG(t.complete())})),u.qZA(),u.YNc(10,L,5,0,"ng-container",6),u.ALo(11,"async"),u.YNc(12,G,1,1,"img",7),u.ALo(13,"async"),u.YNc(14,B,1,0,"tui-loader",8),u.ALo(15,"async"),u.qZA()}if(2&e){const e=u.oxw();u.Q6J("rotatable",!u.lcZ(1,8,e.contentUnavailable$))("zoomable",!u.lcZ(2,10,e.contentUnavailable$)&&!u.lcZ(3,12,e.loading$)),u.xp6(5),u.Oqu(u.lcZ(6,14,e.title$)),u.xp6(2),u.Q6J("index",e.index$$.value)("length",e.items.length),u.xp6(3),u.Q6J("ngIf",u.lcZ(11,16,e.contentUnavailable$)),u.xp6(2),u.Q6J("ngIf",u.lcZ(13,18,e.imageSrc$)),u.xp6(2),u.Q6J("ngIf",u.lcZ(15,20,e.loading$))}}let z=(()=>{var e;class t{constructor(e){this.previewDialogService=e,this.items=[{title:"some table.xlsx",hasPreview:!1},{title:"Content #2",hasPreview:!0}],this.index$$=new M.X(0),this.item$=this.index$$.pipe((0,J.U)((e=>this.items[e])),(0,P.h)(r.tuiIsPresent)),this.title$=this.item$.pipe((0,J.U)((e=>e.title))),this.contentUnavailable$=this.item$.pipe((0,J.U)((e=>!e.hasPreview))),this.imageSrc$=this.item$.pipe((0,$.w)((e=>e.hasPreview?this.emulateBackendRequest().pipe((0,N.O)("")):(0,I.of)(null)))),this.loading$=this.imageSrc$.pipe((0,J.U)((e=>""===e)))}show(){this.previewDialogService.open(this.preview||"").subscribe()}download(){console.info("downloading...")}emulateBackendRequest(){return(0,H.H)(1500).pipe((0,J.U)((()=>"https://ng-web-apis.github.io/dist/assets/images/web-api.svg")))}}return(e=t).ɵfac=function(t){return new(t||e)(u.Y36(l.TuiPreviewDialogService))},e.ɵcmp=u.Xpm({type:e,selectors:[["tui-preview-example-3"]],viewQuery:function(e,t){if(1&e&&u.Gf(O,5),2&e){let e;u.iGM(e=u.CRH())&&(t.preview=e.first)}},decls:4,vars:0,consts:[["size","m","tuiButton","","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],[3,"rotatable","zoomable"],[3,"index","length","indexChange"],["icon","tuiIconDownload","title","Download","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["icon","tuiIconClose","title","Close","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],[4,"ngIf"],["alt","img source","height","512","width","512",3,"src",4,"ngIf"],["size","xl","class","t-loader",4,"ngIf"],[1,"t-container"],["src","tuiIconFileLarge",1,"t-icon"],["alt","img source","height","512","width","512",3,"src"],["size","xl",1,"t-loader"]],template:function(e,t){1&e&&(u.TgZ(0,"button",0),u.NdJ("click",(function(){return t.show()})),u._uU(1," Show preview\n"),u.qZA(),u.YNc(2,Y,16,22,"ng-template",null,1,u.W1O))},dependencies:[n.O5,w.v,v.m,f.v,b.S,Z.i,Q.P,D.k,n.Ov],styles:[".content[_ngcontent-%COMP%]{background-color:#f5f1f1;width:25rem;height:37.5rem;padding:2.5rem;border-radius:.75rem}.t-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:var(--tui-text-02-night)}.t-icon[_ngcontent-%COMP%]{margin-bottom:.75rem;transform:scale(4);height:5rem}.t-loader[_ngcontent-%COMP%]{width:4rem}"],changeDetection:0}),t})();function W(e,t){if(1&e&&(u.TgZ(0,"p"),u._uU(1," Preview component allows to open modal for viewing some document and to work with it (download, zoom, rotate etc) "),u.qZA(),u.TgZ(2,"p"),u._uU(3,"As a document you can provide images, embeds and other arbitrary content."),u.qZA(),u.TgZ(4,"tui-notification",3),u._uU(5," The component automatically adjusts to the mobile device "),u.qZA(),u.TgZ(6,"tui-doc-example",4),u._UZ(7,"tui-preview-example-1"),u.qZA(),u.TgZ(8,"tui-doc-example",5),u._UZ(9,"tui-preview-example-2"),u.qZA(),u.TgZ(10,"tui-doc-example",6),u._UZ(11,"tui-preview-example-3"),u.qZA()),2&e){const e=u.oxw();u.xp6(6),u.Q6J("content",e.example1),u.xp6(2),u.Q6J("content",e.example2),u.xp6(2),u.Q6J("content",e.example3)}}function E(e,t){if(1&e&&(u.TgZ(0,"ol",7)(1,"li"),u._uU(2," Create a template with tui-preview "),u._UZ(3,"tui-doc-code",8),u.qZA(),u.TgZ(4,"li"),u._uU(5," Open the component from the "),u.TgZ(6,"code"),u._uU(7,"TuiPreviewDialogService"),u.qZA(),u._uU(8," as in the example "),u._UZ(9,"tui-doc-code",9),u.qZA()()),2&e){const e=u.oxw();u.xp6(3),u.Q6J("code",e.exampleHtml),u.xp6(6),u.Q6J("code",e.exampleComponent)}}let K=(()=>{var e;class t{constructor(){this.exampleComponent=i.e(41888).then(i.t.bind(i,41888,17)),this.exampleHtml=i.e(34336).then(i.t.bind(i,34336,17)),this.example1={TypeScript:i.e(88642).then(i.t.bind(i,88642,17)),LESS:i.e(84691).then(i.t.bind(i,84691,17)),HTML:i.e(1246).then(i.t.bind(i,1246,17))},this.example2={TypeScript:i.e(79812).then(i.t.bind(i,79812,17)),LESS:i.e(18404).then(i.t.bind(i,18404,17)),HTML:i.e(84963).then(i.t.bind(i,84963,17))},this.example3={TypeScript:i.e(42835).then(i.t.bind(i,42835,17)),LESS:i.e(74852).then(i.t.bind(i,74852,17)),HTML:i.e(79826).then(i.t.bind(i,79826,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Xpm({type:e,selectors:[["example-preview"]],decls:3,vars:0,consts:[["header","Preview","package","ADDON-PREVIEW"],["pageTab",""],["pageTab","Setup"],[1,"tui-space_bottom-4"],["id","default","heading","Full preview",3,"content"],["id","simple","heading","Simple mode",3,"content"],["id","loading","heading","With loading and unavailable image",3,"content"],[1,"b-demo-steps"],["filename","some.component.html",3,"code"],["filename","some.component.ts",3,"code"]],template:function(e,t){1&e&&(u.TgZ(0,"tui-doc-page",0),u.YNc(1,W,12,3,"ng-template",1),u.YNc(2,E,10,2,"ng-template",2),u.qZA())},dependencies:[p.L,d.c,m.q,h.n,g.f,_,k,z],encapsulation:2,changeDetection:0}),t})(),R=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=u.oAB({type:e}),e.ɵinj=u.cJS({imports:[n.ez,s.wq,a.TuiButtonModule,l.TuiPreviewModule,a.TuiNotificationModule,c.fV,a.TuiSvgModule,a.TuiLoaderModule,r.TuiSwipeModule,o.Bz.forChild((0,c.Ve)(K))]}),t})()}}]);