(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[68583],{68583:(e,t,i)=>{i.r(t),i.d(t,{default:()=>F});var o=i(4594),n=i(35548),l=i(66094),s=i(37399),r=i(20764),f=i(75331);function c(e,t){if(1&e&&n._UZ(0,"tui-file",7),2&e){const e=t.$implicit,i=n.oxw();n.Q6J("file",e)("showDelete",i.control.enabled)}}function a(e,t){if(1&e&&n._UZ(0,"tui-file",8),2&e){const e=t.$implicit,i=n.oxw();n.Q6J("file",e)("showDelete",i.control.enabled)}}function h(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"tui-file",9),n.NdJ("remove",(function(){n.CHM(e);const t=n.oxw();return n.KtG(t.removeLoading())})),n.qZA()}if(2&e){const e=n.oxw();n.Q6J("file",e.loadingFile)("showDelete",e.control.enabled)}}function u(e,t){if(1&e&&n._UZ(0,"a",10),2&e){const e=n.oxw();n.Q6J("file",e.fileWithLink)("href",e.fileWithLink.src,n.LSH)("showDelete",e.control.enabled)}}function m(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"tui-file",11)(1,"button",12),n.NdJ("click",(function(){const t=n.CHM(e).$implicit,i=n.oxw();return n.KtG(i.restore(t))})),n._uU(2," Restore "),n.qZA()()}if(2&e){const e=t.$implicit,i=n.oxw();n.Q6J("file",e)("showDelete",i.control.enabled)}}function d(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"tui-file",13),n.NdJ("remove",(function(){const t=n.CHM(e).$implicit,i=n.oxw();return n.KtG(i.remove(t))})),n.qZA()}if(2&e){const e=t.$implicit,i=n.oxw(),o=n.MAs(14);n.Q6J("file",e)("leftContent",o)("showDelete",i.control.enabled)}}function g(e,t){1&e&&n._UZ(0,"tui-icon",14)}const F=(()=>{var e;class t{constructor(){this.isE2E=(0,n.f3M)(s.TUI_IS_E2E),this.control=new l.NI(null),this.files=[{name:"Loaded.txt"},{name:"A file with a very very long title to check that it can be cut correctly.txt"}],this.loadingFile={name:"Loading file.txt"},this.rejectedFiles=[{name:"File with an error.txt",content:"Something went wrong this time"}],this.fileWithLink={name:"with link.txt",src:"https://tools.ietf.org/html/rfc675"},this.removedFiles=[this.loadingFile],this.restoredFiles=[]}removeLoading(){this.loadingFile=null}restore(e){e&&(this.restoredFiles=[...this.restoredFiles,e],this.removedFiles=this.removedFiles.filter((t=>e.name!==t?.name)))}remove(e){this.removedFiles=[...this.removedFiles,e],this.restoredFiles=this.restoredFiles.filter((t=>e.name!==t?.name))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=n.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent3",features:[n.jDz],decls:15,vars:5,consts:[["state","normal",3,"file","showDelete",4,"ngFor","ngForOf"],["state","error",3,"file","showDelete",4,"ngFor","ngForOf"],["state","loading",3,"file","showDelete","remove",4,"ngIf"],["rel","noreferrer noopener","state","normal","target","_blank","tuiFile","",3,"file","href","showDelete",4,"tuiItem"],["size","l","state","deleted",3,"file","showDelete",4,"ngFor","ngForOf"],["size","l","state","normal",3,"file","leftContent","showDelete","remove",4,"ngFor","ngForOf"],["icon",""],["state","normal",3,"file","showDelete"],["state","error",3,"file","showDelete"],["state","loading",3,"file","showDelete","remove"],["rel","noreferrer noopener","state","normal","target","_blank","tuiFile","",3,"file","href","showDelete"],["size","l","state","deleted",3,"file","showDelete"],["tuiLink","","type","button",3,"click"],["size","l","state","normal",3,"file","leftContent","showDelete","remove"],["src","tuiIconFile"]],template:function(e,t){1&e&&(n.TgZ(0,"tui-files"),n.YNc(1,c,1,2,"tui-file",0),n.YNc(2,a,1,2,"tui-file",1),n.YNc(3,h,1,2,"tui-file",2),n.qZA(),n.TgZ(4,"h4"),n._uU(5,"With link"),n.qZA(),n.TgZ(6,"tui-files"),n.YNc(7,u,1,3,"a",3),n.qZA(),n.TgZ(8,"h4"),n._uU(9,"With deleted state"),n.qZA(),n.TgZ(10,"tui-files"),n.YNc(11,m,3,2,"tui-file",4),n.YNc(12,d,1,3,"tui-file",5),n.qZA(),n.YNc(13,g,1,0,"ng-template",null,6,n.W1O)),2&e&&(n.xp6(1),n.Q6J("ngForOf",t.files),n.xp6(1),n.Q6J("ngForOf",t.rejectedFiles),n.xp6(1),n.Q6J("ngIf",t.loadingFile&&!t.isE2E),n.xp6(8),n.Q6J("ngForOf",t.removedFiles),n.xp6(1),n.Q6J("ngForOf",t.restoredFiles))},dependencies:[f.TuiFilesComponent,f.TuiFileComponent,o.sg,o.O5,s.TuiItemDirective,r.TuiLinkDirective,r.TuiIconComponent],encapsulation:2,changeDetection:0}),t})()}}]);