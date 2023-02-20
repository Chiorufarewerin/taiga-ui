"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[40855],{40855:(M,u,o)=>{o.r(u),o.d(u,{ExampleTuiEditorHighlightModule:()=>I});var T=o(12057),s=o(24751),g=o(33982),h=o(29851),a=o(48014),d=o(76040),t=o(74788),E=o(88331),m=o(66596),c=o(57068),F=o(69303),f=o(76189),p=o(82707),H=o(20179);let O=(()=>{class e{constructor(){this.builtInTools=[a.TuiEditorTool.Undo],this.control=new s.NI('\n        <p>This isn\u2019t highlighted.</p>\n        <p>\n            <mark data-color="#e1d0fb">Grammar</mark>\n            <mark data-color="#c8eefc">can</mark> be tricky,\n            <mark style="background-color: #fae498">especially</mark>\n            for the <mark>uninitiated</mark>\n        </p>\n        ')}toggleHighlight(){var n,l;null===(l=null===(n=this.wysiwyg)||void 0===n?void 0:n.editor)||void 0===l||l.getOriginTiptapEditor().commands.toggleHighlight({color:"#c8eefc"})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-editor-highlight-example-1"]],viewQuery:function(n,l){if(1&n&&t.Gf(a.TuiEditorComponent,5),2&n){let r;t.iGM(r=t.CRH())&&(l.wysiwyg=r.first)}},features:[t._Bn([{provide:a.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(o.bind(o,2823)).then(({StarterKit:i})=>i),o.e(73336).then(o.bind(o,73336)).then(({default:i})=>i.configure({types:["heading","paragraph"]})),Promise.resolve().then(o.bind(o,84402)).then(({default:i})=>i),o.e(34661).then(o.bind(o,34661)).then(({Highlight:i})=>i.configure({multicolor:!0,HTMLAttributes:{class:"marked"}}))]}])],decls:10,vars:4,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem","","tuiIconButton","","type","button","size","s","icon","tuiIconDropletLarge","appearance","icon",1,"t-tool","t-tool_margin",3,"click"],[3,"content"]],template:function(n,l){1&n&&(t.TgZ(0,"tui-editor",0),t.ynx(1,1),t.TgZ(2,"button",2),t.NdJ("click",function(){return l.toggleHighlight()}),t.qZA(),t.BQk(),t.qZA(),t.TgZ(3,"h4"),t._uU(4,"HTML:"),t.qZA(),t._UZ(5,"tui-editor-socket",3),t.TgZ(6,"h4"),t._uU(7,"Text:"),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA()),2&n&&(t.Q6J("formControl",l.control)("tools",l.builtInTools),t.xp6(5),t.Q6J("content",l.control.value||""),t.xp6(4),t.Oqu(l.control.value))},directives:[F.a,s.JJ,s.oH,f.v,p.w,H.D],styles:[".marked{padding:.3125rem;border-radius:.3125rem;margin:0 .3125rem;box-shadow:0 0 0 2px rgba(0,123,255,.25)}"],changeDetection:0}),e})(),D=(()=>{class e{constructor(){this.example1={TypeScript:o.e(62528).then(o.t.bind(o,62528,17)),HTML:o.e(90410).then(o.t.bind(o,90410,17)),LESS:o.e(32245).then(o.t.bind(o,32245,17))}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["editor-highlight"]],features:[t._Bn([{provide:a.TUI_EDITOR_EXTENSIONS,useValue:a.defaultEditorExtensions}])],decls:7,vars:1,consts:function(){let i,n;return i=$localize`:␟c1a95de6ffd08f110496afe73d9e3e9631407ea9␟2361436632859407436: Rich Text Editor based on ${"\ufffd#3\ufffd"}:START_LINK: TipTap Editor ${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_LINK: for using with Angular forms. For safety reasons use a ${"\ufffd#4\ufffd"}:START_LINK_1: sanitizer ${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_LINK: with this component. `,i=t.Zx4(i),n=$localize`:␟f185e98087502de76b6894bce571f8a70fb14c60␟5599513168032987944:Highlight`,[["header","Editor","package","ADDON-EDITOR","type","components"],i,["tuiLink","","href","https://www.tiptap.dev/"],["tuiLink","","routerLink","/icon-set","fragment","sanitizer"],["id","highlight","heading",n,"description","Use this extension to render highlighted text with <mark>. You can use only default <mark> HTML tag, which has a yellow background color by default, or apply different colors.",3,"content"]]},template:function(n,l){1&n&&(t.TgZ(0,"tui-doc-page",0),t.TgZ(1,"p"),t.tHW(2,1),t._UZ(3,"a",2),t._UZ(4,"a",3),t.N_p(),t.qZA(),t.TgZ(5,"tui-doc-example",4),t._UZ(6,"tui-editor-highlight-example-1"),t.qZA(),t.qZA()),2&n&&(t.xp6(5),t.Q6J("content",l.example1))},directives:[E.q,m.V,g.yS,c.f,O],encapsulation:2,changeDetection:0}),e})(),I=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[T.ez,d.TuiSvgModule,d.TuiLinkModule,d.TuiButtonModule,h.fV,s.u5,s.UX,a.TuiEditorModule,a.TuiEditorSocketModule,g.Bz.forChild((0,h.Ve)(D))]]}),e})()}}]);