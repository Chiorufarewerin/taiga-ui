"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[6011],{6011:(Be,P,i)=>{i.r(P),i.d(P,{ExampleTuiFormatDateModule:()=>Ye});var _=i(12057),w=i(33982),y=i(29851),E=i(72002),n=i(74788),I=i(88331),L=i(37159),W=i(57068),A={};function $(){return A}function h(e,a){if(a.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+a.length+" present")}function m(e){h(1,arguments);var a=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===a?new Date(e.getTime()):"number"==typeof e||"[object Number]"===a?new Date(e):(("string"==typeof e||"[object String]"===a)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function D(e,a){h(2,arguments);var t=m(e),r=m(a),u=t.getTime()-r.getTime();return u<0?-1:u>0?1:u}function X(e,a){h(2,arguments);var t=m(e),r=m(a),u=t.getFullYear()-r.getFullYear(),l=t.getMonth()-r.getMonth();return 12*u+l}function U(e){h(1,arguments);var a=m(e);return a.setHours(23,59,59,999),a}function Z(e){h(1,arguments);var a=m(e),t=a.getMonth();return a.setFullYear(a.getFullYear(),t+1,0),a.setHours(23,59,59,999),a}function J(e){h(1,arguments);var a=m(e);return U(a).getTime()===Z(a).getTime()}function z(e,a){h(2,arguments);var o,t=m(e),r=m(a),u=D(t,r),l=Math.abs(X(t,r));if(l<1)o=0;else{1===t.getMonth()&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-u*l);var d=D(t,r)===-u;J(m(e))&&1===l&&1===D(e,r)&&(d=!1),o=u*(l-Number(d))}return 0===o?0:o}function j(e,a){return h(2,arguments),m(e).getTime()-m(a).getTime()}var b={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function G(e){return e?b[e]:b.trunc}function H(e,a,t){h(2,arguments);var r=j(e,a)/1e3;return G(null==t?void 0:t.roundingMethod)(r)}var V={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function S(e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth,r=e.formats[t]||e.formats[e.defaultWidth];return r}}const te={date:S({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:S({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:S({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var ae={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function M(e){return function(a,t){var u;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var l=e.defaultFormattingWidth||e.defaultWidth,o=null!=t&&t.width?String(t.width):l;u=e.formattingValues[o]||e.formattingValues[l]}else{var d=e.defaultWidth,s=null!=t&&t.width?String(t.width):e.defaultWidth;u=e.values[s]||e.values[d]}return u[e.argumentCallback?e.argumentCallback(a):a]}}var e,fe={ordinalNumber:function(e,a){var t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},era:M({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:M({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:M({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:M({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:M({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function p(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.width,u=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],l=a.match(u);if(!l)return null;var c,o=l[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(d)?ge(d,function(g){return g.test(o)}):he(d,function(g){return g.test(o)});c=e.valueCallback?e.valueCallback(s):s,c=t.valueCallback?t.valueCallback(c):c;var v=a.slice(o.length);return{value:c,rest:v}}}function he(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function ge(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}const Re={code:"en-US",formatDistance:function(e,a,t){var r,u=V[e];return r="string"==typeof u?u:1===a?u.one:u.other.replace("{{count}}",a.toString()),null!=t&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r},formatLong:te,formatRelative:function(e,a,t,r){return ae[e]},localize:fe,match:{ordinalNumber:(e={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.match(e.matchPattern);if(!r)return null;var u=r[0],l=a.match(e.parsePattern);if(!l)return null;var o=e.valueCallback?e.valueCallback(l[0]):l[0];o=t.valueCallback?t.valueCallback(o):o;var d=a.slice(u.length);return{value:o,rest:d}}),era:p({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:p({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:p({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:p({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:p({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function C(e,a){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e}function Ne(e){return C({},e)}function R(e){var a=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return a.setUTCFullYear(e.getFullYear()),e.getTime()-a.getTime()}var N=1440,F=43200,Le=i(46797),We=i(88002);let $e=(()=>{class e extends E.TuiFormatDateService{format(t){return(0,Le.H)(0,1e3).pipe((0,We.U)(()=>function(e,a,t){var r,u;h(2,arguments);var l=$(),o=null!==(r=null!==(u=null==t?void 0:t.locale)&&void 0!==u?u:l.locale)&&void 0!==r?r:Re;if(!o.formatDistance)throw new RangeError("locale must contain formatDistance property");var d=D(e,a);if(isNaN(d))throw new RangeError("Invalid time value");var c,v,s=C(Ne(t),{addSuffix:Boolean(null==t?void 0:t.addSuffix),comparison:d});d>0?(c=m(a),v=m(e)):(c=m(e),v=m(a));var T,g=H(v,c),Ge=(R(v)-R(c))/1e3,f=Math.round((g-Ge)/60);if(f<2)return null!=t&&t.includeSeconds?g<5?o.formatDistance("lessThanXSeconds",5,s):g<10?o.formatDistance("lessThanXSeconds",10,s):g<20?o.formatDistance("lessThanXSeconds",20,s):g<40?o.formatDistance("halfAMinute",0,s):o.formatDistance(g<60?"lessThanXMinutes":"xMinutes",1,s):0===f?o.formatDistance("lessThanXMinutes",1,s):o.formatDistance("xMinutes",f,s);if(f<45)return o.formatDistance("xMinutes",f,s);if(f<90)return o.formatDistance("aboutXHours",1,s);if(f<N){var He=Math.round(f/60);return o.formatDistance("aboutXHours",He,s)}if(f<2520)return o.formatDistance("xDays",1,s);if(f<F){var Ve=Math.round(f/N);return o.formatDistance("xDays",Ve,s)}if(f<86400)return T=Math.round(f/F),o.formatDistance("aboutXMonths",T,s);if((T=z(v,c))<12){var Qe=Math.round(f/F);return o.formatDistance("xMonths",Qe,s)}var x=T%12,O=Math.floor(T/12);return x<3?o.formatDistance("aboutXYears",O,s):x<9?o.formatDistance("overXYears",O,s):o.formatDistance("almostXYears",O+1,s)}(t,Date.now())))}}return e.\u0275fac=function(){let a;return function(r){return(a||(a=n.n5z(e)))(r||e)}}(),e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})();var Xe=i(93446);let Ue=(()=>{class e{constructor(){this.now=Date.now()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["tui-format-date-example-1"]],features:[n._Bn([{provide:E.TuiFormatDateService,useClass:$e}])],decls:3,vars:5,template:function(t,r){1&t&&(n._uU(0),n.ALo(1,"async"),n.ALo(2,"tuiFormatDate")),2&t&&n.hij("Page refreshed ",n.lcZ(1,1,n.lcZ(2,3,r.now))," ago\n")},pipes:[_.Ov,Xe.x],encapsulation:2,changeDetection:0}),e})();var Ze=i(76349);function Je(e,a){if(1&e&&(n.TgZ(0,"p"),n.SDv(1,3),n.qZA(),n.TgZ(2,"p"),n.tHW(3,4),n._UZ(4,"code"),n.N_p(),n.qZA(),n.TgZ(5,"tui-doc-example",5),n._UZ(6,"tui-format-date-example-1"),n.qZA()),2&e){const t=n.oxw();n.xp6(5),n.Q6J("content",t.example1)}}function ze(e,a){if(1&e&&(n.TgZ(0,"ol",6),n.TgZ(1,"li"),n.TgZ(2,"p"),n.tHW(3,7),n._UZ(4,"code"),n.N_p(),n.qZA(),n._UZ(5,"tui-doc-code",8),n.qZA(),n.TgZ(6,"li"),n.TgZ(7,"p"),n.SDv(8,9),n.qZA(),n._UZ(9,"tui-doc-code",10),n.qZA(),n.TgZ(10,"li"),n.TgZ(11,"p"),n.SDv(12,11),n.qZA(),n._UZ(13,"tui-doc-code",12),n.qZA(),n.qZA()),2&e){const t=n.oxw();n.xp6(5),n.Q6J("code",t.exampleModule),n.xp6(4),n.Q6J("code",t.exampleHtml),n.xp6(4),n.Q6J("code",t.exampleTs)}}let je=(()=>{class e{constructor(){this.exampleModule=i.e(12381).then(i.t.bind(i,12381,17)),this.exampleHtml=i.e(88205).then(i.t.bind(i,88205,17)),this.exampleTs=i.e(14164).then(i.t.bind(i,14164,17)),this.example1={TypeScript:i.e(44673).then(i.t.bind(i,44673,17)),HTML:i.e(55981).then(i.t.bind(i,55981,17)),"service.ts":i.e(37900).then(i.t.bind(i,37900,17))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["example-tui-format-date"]],decls:3,vars:0,consts:function(){let a,t,r,u,l,o;return a=$localize`:␟31190c4fd218df32d211943c6721c5de82815e59␟5415457061839915323:Pipe to format timestamps/dates dynamically`,t=$localize`:␟f56585a3c184ecfd1b0c7d11db6ac349a76fa4dd␟5394200632017541262: Differs from built-in Angular date formatting pipe because it returns an ${"\ufffd#4\ufffd"}:START_TAG_CODE:Observable${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE:`,r=$localize`:␟3670ebe91a9343232e6f22b9740a749eb82560d8␟1926908801765225875:Custom service`,u=$localize`:␟a3ff07ceb026c8427062ff77040f4ec062e2560e␟214518388591205631: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFormatDatePipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use the pipe `,l=$localize`:␟cbcdfa56cc5eb16d7a9378a2845caaa8a855ff9b␟2759379636501777950:Use pipe in template`,o=$localize`:␟38e42681839cdcf9b3c5fed5a3ced28d94d804ed␟8875486908016872788:Provide custom service for formatting`,[["header","FormatDate","package","CORE","type","pipes"],["pageTab",""],["pageTab","Setup"],a,t,["id","base","heading",r,3,"content"],[1,"b-demo-steps"],u,["filename","myComponent.module.ts",3,"code"],l,["filename","myComponent.template.html",3,"code"],o,["filename","myComponent.component.ts",3,"code"]]},template:function(t,r){1&t&&(n.TgZ(0,"tui-doc-page",0),n.YNc(1,Je,7,1,"ng-template",1),n.YNc(2,ze,14,3,"ng-template",2),n.qZA())},directives:[I.q,L.n,W.f,Ue,Ze.c],encapsulation:2,changeDetection:0}),e})(),Ye=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[_.ez,y.fV,E.TuiFormatDatePipeModule,w.Bz.forChild((0,y.Ve)(je))]]}),e})()}}]);