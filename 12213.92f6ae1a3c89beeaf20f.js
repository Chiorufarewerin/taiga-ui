(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[12213],{12213:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiTablePaginationModule:()=>V});var o=n(12057),a=n(33982),i=n(52404),u=n(38072),p=n(74788),r=n(43560),c=n(93525),s=n(33772),l=n(56946);let m=(()=>{class e{constructor(){this.page=3,this.size=10}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-table-pagination-example-1"]],decls:5,vars:5,consts:[[3,"total","page","size","pageChange","sizeChange"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-table-pagination",0),p.NdJ("pageChange",(function(e){return t.page=e}))("sizeChange",(function(e){return t.size=e})),p.qZA(),p.TgZ(1,"p"),p._uU(2),p.qZA(),p.TgZ(3,"p"),p._uU(4),p.qZA()),2&e&&(p.Q6J("total",237)("page",t.page)("size",t.size),p.xp6(2),p.hij("Current page: ",t.page,""),p.xp6(2),p.hij("Items per page: ",t.size,""))},directives:[l.W],encapsulation:2,changeDetection:0}),e})();const g=({$implicit:e,total:t})=>{switch(e){case 10:return"Ten";case t:return"Show all rows";default:return e}};let d=(()=>{class e{constructor(){this.total=350,this.sizeOptions=[10,50,100,this.total]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-table-pagination-example-2"]],features:[p._Bn([(0,u.tuiTablePaginationOptionsProvider)({sizeOptionContent:g})])],decls:1,vars:2,consts:[[3,"items","total"]],template:function(e,t){1&e&&p._UZ(0,"tui-table-pagination",0),2&e&&p.Q6J("items",t.sizeOptions)("total",t.total)},directives:[l.W],encapsulation:2,changeDetection:0}),e})(),h=(()=>{class e{constructor(){this.total=350,this.sizeOptions=[10,50,100,this.total]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-table-pagination-example-3"]],features:[p._Bn([(0,u.tuiTablePaginationOptionsProvider)({showPages:!1})])],decls:1,vars:2,consts:[[3,"items","total"]],template:function(e,t){1&e&&p._UZ(0,"tui-table-pagination",0),2&e&&p.Q6J("items",t.sizeOptions)("total",t.total)},directives:[l.W],encapsulation:2,changeDetection:0}),e})();var y=n(10977),f=n(61544),P=n(60404),Z=n(83074);function T(e,t){1&e&&(p._uU(0," You can customize the component via DI-token "),p.TgZ(1,"code"),p._uU(2,"TUI_TABLE_PAGINATION_OPTIONS"),p.qZA(),p._uU(3," . "),p.TgZ(4,"p",6),p._uU(5," Use function "),p.TgZ(6,"code"),p._uU(7,"tuiTablePaginationOptionsProvider"),p.qZA(),p._uU(8," to provide new value of this token. "),p.qZA())}function _(e,t){if(1&e&&(p.TgZ(0,"p"),p._uU(1,"Component to show pagination in table footer"),p.qZA(),p.TgZ(2,"tui-doc-example",2),p._UZ(3,"tui-table-pagination-example-1"),p.qZA(),p.TgZ(4,"tui-doc-example",3),p.YNc(5,T,9,0,"ng-template",null,4,p.W1O),p._UZ(7,"tui-table-pagination-example-2"),p.qZA(),p.TgZ(8,"tui-doc-example",5),p._UZ(9,"tui-table-pagination-example-3"),p.qZA()),2&e){const e=p.MAs(6),t=p.oxw();p.xp6(2),p.Q6J("content",t.example1)("fullsize",!0),p.xp6(2),p.Q6J("content",t.example2)("description",e)("fullsize",!0),p.xp6(4),p.Q6J("content",t.example3)("fullsize",!0)}}function U(e,t){1&e&&p._uU(0," Total amount of items/lines in the table. ")}function b(e,t){1&e&&(p._uU(0," Items/Lines per page. "),p.TgZ(1,"p"),p._uU(2," Uses the first element inside "),p.TgZ(3,"code"),p._uU(4,"items"),p.qZA(),p._uU(5," by default. "),p.qZA())}function x(e,t){1&e&&(p._uU(0," Current page. "),p.TgZ(1,"p"),p._uU(2,"Indexing starts at zero."),p.qZA())}function C(e,t){1&e&&p._uU(0," Options to select amount of lines per page. ")}function z(e,t){1&e&&(p._uU(0," Emits the selected page when user navigates by spin buttons or selects new size of items per page. Use "),p.TgZ(1,"code"),p._uU(2,"paginationChange"),p.qZA(),p._uU(3," instead "))}function A(e,t){1&e&&(p._uU(0," Emits the new "),p.TgZ(1,"code"),p._uU(2,"size"),p.qZA(),p._uU(3," -property (user selects new amount of lines per page). Use "),p.TgZ(4,"code"),p._uU(5,"paginationChange"),p.qZA(),p._uU(6," instead "))}function q(e,t){1&e&&(p._uU(0," Event emits when "),p.TgZ(1,"code"),p._uU(2,"page"),p.qZA(),p._uU(3," or "),p.TgZ(4,"code"),p._uU(5,"size"),p.qZA(),p._uU(6," changes. "))}function w(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"tui-doc-demo"),p.TgZ(1,"tui-table-pagination",7),p.NdJ("pageChange",(function(t){return p.CHM(e),p.oxw().page=t}))("sizeChange",(function(t){return p.CHM(e),p.oxw().size=t}))("pageChange",(function(t){return p.CHM(e),p.MAs(8).emitEvent(t)}))("paginationChange",(function(t){return p.CHM(e),p.MAs(12).emitEvent(t)}))("sizeChange",(function(t){return p.CHM(e),p.MAs(10).emitEvent(t)})),p.qZA(),p.qZA(),p.TgZ(2,"tui-doc-documentation"),p.YNc(3,U,1,0,"ng-template",8),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().total=t})),p.YNc(4,b,6,0,"ng-template",9),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().size=t})),p.YNc(5,x,3,0,"ng-template",10),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().page=t})),p.YNc(6,C,1,0,"ng-template",11),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().items=t})),p.YNc(7,z,4,0,"ng-template",12,13,p.W1O),p.YNc(9,A,7,0,"ng-template",14,15,p.W1O),p.YNc(11,q,7,0,"ng-template",16,17,p.W1O),p.qZA()}if(2&e){const e=p.oxw();p.xp6(1),p.Q6J("items",e.items)("total",e.total)("page",e.page)("size",e.size),p.xp6(2),p.Q6J("documentationPropertyValue",e.total),p.xp6(1),p.Q6J("documentationPropertyValue",e.size),p.xp6(1),p.Q6J("documentationPropertyValue",e.page),p.xp6(1),p.Q6J("documentationPropertyValues",e.itemsVariants)("documentationPropertyValue",e.items),p.xp6(1),p.Q6J("documentationPropertyDeprecated",!0),p.xp6(2),p.Q6J("documentationPropertyDeprecated",!0)}}function M(e,t){if(1&e&&(p.TgZ(0,"ol",18),p.TgZ(1,"li"),p.TgZ(2,"p"),p._uU(3," Import an Angular module for forms and "),p.TgZ(4,"code"),p._uU(5,"TuiTablePaginationModule"),p.qZA(),p._uU(6," in the same module where you want to use our component: "),p.qZA(),p._UZ(7,"tui-doc-code",19),p.qZA(),p.TgZ(8,"li"),p.TgZ(9,"p"),p._uU(10,"Add to the template:"),p.qZA(),p._UZ(11,"tui-doc-code",20),p.qZA(),p.qZA()),2&e){const e=p.oxw();p.xp6(7),p.Q6J("code",e.exampleModule),p.xp6(4),p.Q6J("code",e.exampleHtml)}}let N=(()=>{class e{constructor(){this.itemsVariants=[[10,20,50,100],[10,100,500]],this.total=1e3,this.page=5,this.items=this.itemsVariants[0],this.size=this.items[0],this.example1={HTML:n.e(29456).then(n.t.bind(n,29456,17)),TypeScript:n.e(11495).then(n.t.bind(n,11495,17))},this.example2={TypeScript:n.e(3467).then(n.t.bind(n,3467,17)),HTML:n.e(61420).then(n.t.bind(n,61420,17))},this.example3={TypeScript:n.e(55433).then(n.t.bind(n,50590,17)),HTML:n.e(27334).then(n.t.bind(n,27334,17))},this.exampleModule=n.e(77406).then(n.t.bind(n,77406,17)),this.exampleHtml=n.e(40328).then(n.t.bind(n,40328,17))}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["example-tui-table-pagination"]],decls:4,vars:0,consts:[["header","TablePagination","package","ADDON-TABLE","type","components"],["pageTab",""],["id","usage","heading","Usage",3,"content","fullsize"],["id","custom-size-option-content","heading","Custom size-option content",3,"content","description","fullsize"],["tokenDescription",""],["id","toggle-pages-label","heading","Toggle pages label",3,"content","fullsize"],[1,"tui-space_bottom-0"],[3,"items","total","page","size","pageChange","sizeChange","paginationChange"],["documentationPropertyMode","input","documentationPropertyName","total","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","size","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","page","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","items","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","pageChange","documentationPropertyType","number",3,"documentationPropertyDeprecated"],["documentationPropertyPageChange","documentationProperty"],["documentationPropertyMode","output","documentationPropertyName","sizeChange","documentationPropertyType","number",3,"documentationPropertyDeprecated"],["documentationPropertySizeChange","documentationProperty"],["documentationPropertyMode","output","documentationPropertyName","paginationChange","documentationPropertyType","TuiTablePagination"],["documentationPropertyPaginationChange","documentationProperty"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,_,10,7,"ng-template",1),p.YNc(2,w,13,11,"ng-template",1),p.YNc(3,M,12,2,"ng-template",1),p.qZA())},directives:[r.q,c.n,s.f,m,d,h,y.F,l.W,f.z,P.B,Z.c],encapsulation:2,changeDetection:0}),e})(),V=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[[o.ez,u.TuiTablePaginationModule,i.fV,a.Bz.forChild((0,i.Ve)(N))]]}),e})()}}]);