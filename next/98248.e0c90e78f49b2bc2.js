(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[98248],{98248:(t,e,n)=>{n.r(e),n.d(e,{default:()=>_});var i=n(4594),o=n(90339),a=n(77798),u=n(27830),c=n(35548),r=n(48638);function s(t,e){1&t&&(c.TgZ(0,"th",5),c._uU(1," Name "),c.qZA())}function l(t,e){1&t&&(c.TgZ(0,"th",5),c._uU(1," E-mail "),c.qZA())}function d(t,e){1&t&&(c.TgZ(0,"th",5),c._uU(1," Status "),c.qZA())}function p(t,e){1&t&&(c.TgZ(0,"th",6),c._uU(1," Tags "),c.qZA()),2&t&&c.Q6J("sorter",null)}function m(t,e){1&t&&c._UZ(0,"th",6),2&t&&c.Q6J("sorter",null)}function g(t,e){if(1&t&&(c.TgZ(0,"td",11),c._uU(1),c.qZA()),2&t){const t=c.oxw(),e=t.index,n=t.$implicit;c.xp6(1),c.AsE(" ",e+1,". ",n.name," ")}}function h(t,e){if(1&t&&(c.TgZ(0,"a",13),c._uU(1),c.qZA()),2&t){const t=c.oxw(2).$implicit;c.Q6J("href","mailto:"+t.email,c.LSH),c.xp6(1),c.hij(" ",t.email," ")}}function T(t,e){if(1&t&&(c.TgZ(0,"td",11),c.YNc(1,h,2,2,"a",12),c.qZA()),2&t){const t=c.oxw().$implicit;c.xp6(1),c.Q6J("ngIf",t.email)}}function f(t,e){if(1&t&&(c.TgZ(0,"td",11)(1,"div"),c._uU(2),c.qZA()()),2&t){const t=c.oxw().$implicit;c.xp6(1),c.Tol(t.status),c.xp6(1),c.Oqu(t.status)}}function b(t,e){if(1&t&&(c.TgZ(0,"tui-chip",15),c.ALo(1,"tuiAutoColor"),c._uU(2),c.qZA()),2&t){const t=e.$implicit;c.Udp("background",c.lcZ(1,3,t)),c.xp6(2),c.hij(" ",t," ")}}function x(t,e){if(1&t&&(c.TgZ(0,"td",11),c.YNc(1,b,3,5,"tui-chip",14),c.qZA()),2&t){const t=c.oxw().$implicit;c.xp6(1),c.Q6J("ngForOf",t.tags)}}function C(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"td",11)(1,"button",16),c.NdJ("click",(function(){c.CHM(t);const e=c.oxw().$implicit,n=c.oxw(2);return c.KtG(n.remove(e))})),c._uU(2," Remove "),c.qZA()()}2&t&&(c.xp6(1),c.Udp("border-radius",100,"%"))}function Z(t,e){1&t&&(c.TgZ(0,"tr",9),c.YNc(1,g,2,2,"td",10),c.YNc(2,T,2,1,"td",10),c.YNc(3,f,3,3,"td",10),c.YNc(4,x,2,1,"td",10),c.YNc(5,C,3,2,"td",10),c.qZA()),2&t&&(c.xp6(1),c.Q6J("tuiCell","name"),c.xp6(1),c.Q6J("tuiCell","email"),c.xp6(1),c.Q6J("tuiCell","status"),c.xp6(1),c.Q6J("tuiCell","tags"),c.xp6(1),c.Q6J("tuiCell","actions"))}function y(t,e){if(1&t&&(c.TgZ(0,"tbody",7),c.YNc(1,Z,6,5,"tr",8),c.qZA()),2&t){const t=e.tuiLet;c.Q6J("data",t),c.xp6(1),c.Q6J("ngForOf",t)}}const _=(()=>{var t;class e{constructor(){this.columns=["name","email","status","tags","actions"],this.users=[{name:"Michael Palin",email:"m.palin@montypython.com",status:"alive",tags:["Funny"]},{name:"Eric Idle",email:"e.idle@montypython.com",status:"alive",tags:["Funny","Music"]},{name:"John Cleese",email:"j.cleese@montypython.com",status:"alive",tags:["Funny","Tall","Actor"]},{name:"Terry Jones",email:"",status:"deceased",tags:["Funny","Director"]},{name:"Terry Gilliam",email:"t.gilliam@montypython.com",status:"alive",tags:["Funny","Director"]},{name:"Graham Chapman",email:"",status:"deceased",tags:["Funny","King Arthur"]}]}remove(t){this.users=this.users.filter((e=>e!==t))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["tui-table-example-2"]],standalone:!0,exportAs:"ExampleComponent2",features:[c.jDz],decls:10,vars:9,consts:[["tuiTable","",3,"columns"],["tuiThGroup",""],["tuiTh","",4,"tuiHead"],["tuiTh","",3,"sorter",4,"tuiHead"],["tuiTbody","",3,"data",4,"tuiLet"],["tuiTh",""],["tuiTh","",3,"sorter"],["tuiTbody","",3,"data"],["tuiTr","",4,"ngFor","ngForOf"],["tuiTr",""],["tuiTd","",4,"tuiCell"],["tuiTd",""],["tuiLink","",3,"href",4,"ngIf"],["tuiLink","",3,"href"],["size","xs","class","tui-space_right-1",3,"background",4,"ngFor","ngForOf"],["size","xs",1,"tui-space_right-1"],["appearance","flat","iconLeft","@tui.trash","size","s","tuiIconButton","","type","button",1,"remove",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"table",0)(1,"thead")(2,"tr",1),c.YNc(3,s,2,0,"th",2),c.YNc(4,l,2,0,"th",2),c.YNc(5,d,2,0,"th",2),c.YNc(6,p,2,1,"th",3),c.YNc(7,m,1,1,"th",3),c.qZA()(),c.YNc(8,y,2,2,"tbody",4),c.ALo(9,"tuiTableSort"),c.qZA()),2&t&&(c.Q6J("columns",e.columns),c.xp6(3),c.Q6J("tuiHead","name"),c.xp6(1),c.Q6J("tuiHead","email"),c.xp6(1),c.Q6J("tuiHead","status"),c.xp6(1),c.Q6J("tuiHead","tags"),c.xp6(1),c.Q6J("tuiHead","actions"),c.xp6(1),c.Q6J("tuiLet",c.lcZ(9,7,e.users)))},dependencies:[r.TuiTableDirective,r.TuiTableTbody,r.TuiTableThGroup,r.TuiTableTh,r.TuiTableTd,r.TuiTableTr,r.TuiTableCell,r.TuiTableHead,r.TuiTableSortPipe,u.TuiChip,i.sg,a.TuiAutoColorPipe,a.TuiLink,i.O5,a.TuiButton,o.TuiLet],styles:['td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{white-space:nowrap;border-color:transparent;border-right-color:var(--tui-base-04)}td[_ngcontent-%COMP%]:last-child, th[_ngcontent-%COMP%]:last-child{border-right-color:transparent}tbody[_ngcontent-%COMP%]{border-color:transparent}tr[_ngcontent-%COMP%]:nth-child(2n)   td[_ngcontent-%COMP%]{background:var(--tui-base-02)}.alive[_ngcontent-%COMP%], .deceased[_ngcontent-%COMP%]{display:flex;align-items:center;text-transform:capitalize}.alive[_ngcontent-%COMP%]:before, .deceased[_ngcontent-%COMP%]:before{content:"";width:.5rem;height:.5rem;border-radius:100%;margin-right:.5rem;background:var(--tui-base-04)}.alive[_ngcontent-%COMP%]:before{background:var(--tui-success-fill)}.remove[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}tr[_ngcontent-%COMP%]:hover   .remove[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]:focus-within   .remove[_ngcontent-%COMP%]{opacity:1}'],changeDetection:0}),e})()}}]);