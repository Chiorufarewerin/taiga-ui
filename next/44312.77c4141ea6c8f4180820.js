"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[44312],{44312:(l,o,n)=>{n.r(o),n.d(o,{TuiDetails:()=>i,TuiDetailsContent:()=>u,TuiSummary:()=>p});var d=n(37631),r=n(40256);const i=r.Node.create({name:"details",addOptions:()=>({HTMLAttributes:{}}),addAttributes:()=>({opened:{default:!0,keepOnSplit:!1,parseHTML:t=>"true"===t.getAttribute("data-opened"),renderHTML:t=>({"data-opened":t.opened})}}),content:"summary detailsContent",group:"block",allowGapCursor:!0,isolating:!0,parseHTML:()=>[{tag:"details"}],renderHTML({HTMLAttributes:t}){return["div",{class:"details-wrapper details-wrapper_rendered"},["details",(0,r.mergeAttributes)(this.options.HTMLAttributes,t),0],["button",{class:"details-arrow"}]]},addNodeView:()=>({node:t})=>{const a=document.createElement("div"),e=document.createElement("details"),s=document.createElement("button");return a.className="details-wrapper",s.className="details-arrow",e.open=t.attrs.opened,s.addEventListener("click",()=>{e.open=!e.open,t.attrs.opened=e.open}),a.append(e,s),{dom:a,contentDOM:e}},addCommands(){return{setDetails:()=>({commands:t,state:a})=>{const e=(0,d.Ap)(a);return t.insertContent(`<details data-opened="true"><summary><p></p></summary><div data-type="details-content"><p>${e}</p></div></details><p></p>`)},removeDetails:()=>({state:t,dispatch:a})=>(0,d.yU)(t,a,this.name)}}}),u=r.Node.create({name:"detailsContent",content:"block+",group:"block",allowGapCursor:!0,parseHTML:()=>[{tag:'div[data-type="details-content"]'}],renderHTML({HTMLAttributes:t}){return["div",(0,r.mergeAttributes)(this.options.HTMLAttributes,t,{"data-type":"details-content"}),0]}}),p=r.Node.create({name:"summary",addOptions:()=>({HTMLAttributes:{}}),content:"paragraph",group:"block",parseHTML:()=>[{tag:"summary"}],renderHTML({HTMLAttributes:t}){return["summary",(0,r.mergeAttributes)(this.options.HTMLAttributes,t),0]}})}}]);