(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[65627],{65627:(t,e,i)=>{i.r(e),i.d(e,{default:()=>m});var n=i(4594),o=i(35548),c=i(54795),s=i(66094),u=i(77798),l=i(27830),a=i(51160);function p(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"button",16),o.NdJ("click",(function(){o.CHM(t);const e=o.oxw(2);return o.KtG(e.toggleSelect())})),o._uU(1),o.qZA()}if(2&t){const t=o.oxw(2);o.Q6J("pseudo",!0),o.xp6(1),o.hij(" ",t.selected<t.items.length?"Select all":"Select none"," ")}}function r(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"button",17),o.NdJ("click",(function(){o.CHM(t);const e=o.oxw(2);return o.KtG(e.close())})),o._uU(1," Delete "),o.qZA()}if(2&t){const t=o.oxw(2);o.Q6J("disabled",t.expanded)}}function d(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"button",18),o.NdJ("click",(function(){o.CHM(t);const e=o.oxw(2);return o.KtG(e.expanded=!e.expanded)})),o._uU(1," More "),o.qZA()}}function g(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"button",19),o.NdJ("click",(function(){o.CHM(t);const e=o.oxw(2);return o.KtG(e.close())})),o._uU(1," Close "),o.qZA()}}function f(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"tui-action-bar",2)(1,"tui-data-list",3)(2,"tui-opt-group")(3,"button",4)(4,"span"),o._UZ(5,"tui-icon",5),o._uU(6," Send "),o.qZA()(),o.TgZ(7,"button",4)(8,"span"),o._UZ(9,"tui-icon",6),o._uU(10," Delete "),o.qZA()()(),o.TgZ(11,"tui-opt-group")(12,"button",7),o.NdJ("click",(function(){o.CHM(t);const e=o.oxw();return o.KtG(e.control.setValue(e.items))})),o.TgZ(13,"span"),o._UZ(14,"tui-icon",8),o._uU(15," Select all "),o.qZA()(),o.TgZ(16,"button",9),o.NdJ("click",(function(){o.CHM(t);const e=o.oxw();return o.KtG(e.close())})),o.TgZ(17,"span"),o._UZ(18,"tui-icon",10),o._uU(19," Select none and close "),o.qZA()()()(),o.TgZ(20,"div"),o._uU(21),o.YNc(22,p,2,2,"button",11),o.qZA(),o.TgZ(23,"button",12),o._uU(24),o.qZA(),o.YNc(25,r,2,1,"button",13),o.YNc(26,d,2,0,"button",14),o.YNc(27,g,2,0,"button",15),o.qZA()}if(2&t){const t=o.oxw();o.Q6J("expanded",!!t.isMobile()&&t.expanded),o.xp6(12),o.Q6J("disabled",t.selected===t.items.length),o.xp6(9),o.AsE(" Selected: ",t.selected," of ",t.items.length," "),o.xp6(1),o.Q6J("ngIf",!t.isMobile()),o.xp6(1),o.Q6J("disabled",t.expanded),o.xp6(1),o.hij(" ",t.isMobile()?"":"Send"," "),o.xp6(1),o.Q6J("ngIf",!t.isMobile()),o.xp6(1),o.Q6J("ngIf",t.isMobile()),o.xp6(1),o.Q6J("ngIf",!t.isMobile())}}const m=(()=>{var t;class e{constructor(){this.items=["one","two","three"],this.control=new s.NI([]),this.expanded=!1,this.isMobile=(0,c.O4)((0,o.f3M)(u.TuiBreakpointService).pipe((0,a.U)((t=>"mobile"===t))))}get value(){return this.control.value||[]}get open(){return this.value.length>0}get selected(){return this.value.length}toggleSelect(){this.control.setValue(this.selected<this.items.length?this.items:[])}close(){this.control.setValue([]),this.expanded=!1}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent1",features:[o.jDz],decls:2,vars:3,consts:[["size","s",3,"formControl","items"],[3,"expanded",4,"tuiActionBar"],[3,"expanded"],["role","menu"],["role","menuitem","tuiOption",""],["icon","@tui.send",1,"tui-space_right-3"],["icon","@tui.trash",1,"tui-space_right-3"],["role","menuitem","tuiOption","",3,"disabled","click"],["icon","@tui.layout-grid",1,"tui-space_right-3"],["role","menuitem","tuiOption","",3,"click"],["icon","@tui.x",1,"tui-space_right-3"],["appearance","icon","tuiLink","","class","tui-space_left-3",3,"pseudo","click",4,"ngIf"],["appearance","glass","iconLeft","@tui.send","size","m","tuiButton","",3,"disabled"],["appearance","glass","iconLeft","@tui.trash","size","m","tuiButton","",3,"disabled","click",4,"ngIf"],["appearance","glass","iconLeft","@tui.ellipsis","size","m","tuiIconButton","",3,"click",4,"ngIf"],["appearance","icon","iconLeft","@tui.x","size","m","tuiIconButton","",3,"click",4,"ngIf"],["appearance","icon","tuiLink","",1,"tui-space_left-3",3,"pseudo","click"],["appearance","glass","iconLeft","@tui.trash","size","m","tuiButton","",3,"disabled","click"],["appearance","glass","iconLeft","@tui.ellipsis","size","m","tuiIconButton","",3,"click"],["appearance","icon","iconLeft","@tui.x","size","m","tuiIconButton","",3,"click"]],template:function(t,e){1&t&&(o._UZ(0,"tui-filter",0),o.YNc(1,f,28,10,"tui-action-bar",1)),2&t&&(o.Q6J("formControl",e.control)("items",e.items),o.xp6(1),o.Q6J("tuiActionBar",e.open))},dependencies:[u.TuiButton,l.TuiActionBarComponent,l.TuiActionBarDirective,u.TuiDataListComponent,u.TuiOption,u.TuiOptGroup,n.O5,u.TuiLink,s.UX,s.JJ,s.oH,l.TuiFilterComponent,u.TuiIcon],styles:["[_nghost-%COMP%]{display:flex;align-items:center;gap:.5rem}"],changeDetection:0}),e})()}}]);