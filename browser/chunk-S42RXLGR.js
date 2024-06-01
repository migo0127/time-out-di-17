import{a as S,b as x,c as T,d as k,e as j,f as O,g as B,h as G}from"./chunk-MRRWW5PJ.js";import{$ as m,Ba as E,C as $,Ca as s,D as U,Eb as w,F as _,J as v,K as b,La as d,Ma as X,Na as f,Oa as Y,Qa as M,R as J,Sa as V,Ta as R,X as A,Y as F,Z as D,_ as u,a as W,ab as Z,ca as L,ia as g,ja as K,k as N,ka as Q,ma as y,ra as h,va as l,wa as c,x as z,ya as I,z as P}from"./chunk-DIEQIMDK.js";var nt=function(t){return t[t.idleLimit=30]="idleLimit",t[t.idleWarning=15]="idleWarning",t}(nt||{}),ot=function(t){return t[t.idleLimit=20]="idleLimit",t[t.idleWarning=10]="idleWarning",t}(ot||{}),at=function(t){return t[t.idleLimit=600]="idleLimit",t}(at||{});function q(t,i){let o=!i?.manualCleanup;o&&!i?.injector&&J(q);let n=o?i?.injector?.get(L)??U(L):null,e;i?.requireSync?e=D({kind:0}):e=D({kind:1,value:i?.initialValue});let r=t.subscribe({next:a=>e.set({kind:1,value:a}),error:a=>{if(i?.rejectErrors)throw a;e.set({kind:2,error:a})}});return n?.onDestroy(r.unsubscribe.bind(r)),F(()=>{let a=e();switch(a.kind){case 1:return a.value;case 2:throw a.error;case 0:throw new z(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}function lt(t,i){if(t&1&&(l(0,"span"),d(1),V(2,"number"),V(3,"number"),c()),t&2){let o=s(2);u(),Y(" \u60A8\u7684\u9592\u7F6E\u6642\u9593\u5DF2\u904E ",R(2,2,o.idleTime(),"1.0-0")," \u5206\u9418\uFF0C\u7A0B\u5F0F\u5C07\u5728 ",R(3,5,o.afk(),"1.0-0")," \u79D2\u5F8C\u81EA\u52D5\u767B\u51FA\uFF0C\u5982\u8981\u7E7C\u7E8C\u4F7F\u7528\uFF0C\u8ACB\u9EDE\u9078\u300C\u7E7C\u7E8C\u4F7F\u7528\u300D\u3002 ")}}function ct(t,i){t&1&&(l(0,"span"),d(1," \u60A8\u7684\u9592\u7F6E\u6642\u9593\u904E\u4E45\uFF0C\u7A0B\u5F0F\u5C07\u5728\u5E7E\u79D2\u5F8C\u81EA\u52D5\u767B\u51FA\uFF0C\u5982\u8981\u7E7C\u7E8C\u4F7F\u7528\uFF0C\u8ACB\u9EDE\u9078\u300C\u7E7C\u7E8C\u4F7F\u7528\u300D\u3002 "),c())}function ut(t,i){if(t&1){let o=I();l(0,"button",2),E("click",function(){v(o);let e=s(2);return b(e.data.callback())}),d(1),c()}if(t&2){let o=s(2);u(),f(" ",o.data.button||"\u78BA\u8A8D"," ")}}function st(t,i){if(t&1&&(l(0,"button",3),d(1),c()),t&2){let o=s(2);y("mat-dialog-close",!o.data.isFalseButton),u(),f(" ",o.data.button||"\u78BA\u8A8D"," ")}}function dt(t,i){if(t&1&&(l(0,"section")(1,"h3",0),d(2),c(),l(3,"mat-dialog-content"),g(4,lt,4,8,"span")(5,ct,2,0),c(),l(6,"mat-dialog-actions"),g(7,ut,2,1,"button",1)(8,st,2,2),c()()),t&2){let o=s();u(2),f(" ",o.data.title||"\u7CFB\u7D71\u901A\u77E5",""),u(2),h(4,o.idleTime()&&o.afk()?4:5),u(3),h(7,o.data.customAction?7:8)}}var et=(()=>{let i=class i{constructor(n,e,r,a){this.dialog=n,this.renderer=e,this.overlayContainer=r,this.data=a,console.log("[TimeOutWarningComponent data]: ",this.data);let C=D(this.data.content.idleLimit);this.idleTime=F(()=>(C()-this.data.content.idleWarning)/60),this.afk=q(this.data.content.afk.pipe(N(p=>C()-p)))}ngOnInit(){}ngAfterViewInit(){if(this.dialog.openDialogs.length>1){let n=this.overlayContainer.getContainerElement().children,e=n[n.length-1];if(e){let r=e.closest(".cdk-overlay-container"),a=1e3+n.length;this.renderer.setStyle(r,"z-index",a)}}}};i.\u0275fac=function(e){return new(e||i)(m(x),m(A),m(w),m(S))},i.\u0275cmp=_({type:i,selectors:[["app-time-out-warning-dialog"]],standalone:!0,features:[M],decls:1,vars:1,consts:[["mat-dialog-title",""],["type","button","mat-flat-button","","color","accent","class","w-100"],["type","button","mat-flat-button","","color","accent",1,"w-100",3,"click"],["type","button","mat-flat-button","","color","accent",1,"w-100",3,"mat-dialog-close"]],template:function(e,r){e&1&&g(0,dt,9,3,"section"),e&2&&h(0,r.afk()?0:-1)},dependencies:[B,T,k,O,j,Z]});let t=i;return t})();var mt=()=>[T,k,O,j];function pt(t,i){if(t&1){let o=I();l(0,"button",2),E("click",function(){v(o);let e=s(2);return b(e.data.callback())}),d(1),c()}if(t&2){let o=s(2);u(),f(" ",o.data.button||"\u78BA\u8A8D"," ")}}function ft(t,i){if(t&1&&(l(0,"button",3),d(1),c()),t&2){let o=s(2);y("mat-dialog-close",!o.data.isFalseButton),u(),f(" ",o.data.button||"\u78BA\u8A8D"," ")}}function gt(t,i){if(t&1&&(l(0,"h3",0),d(1),c(),l(2,"mat-dialog-content")(3,"span"),d(4),c()(),l(5,"mat-dialog-actions"),g(6,pt,2,1,"button",1)(7,ft,2,2),c()),t&2){let o=s();u(),f(" ",o.data.title||"\u7CFB\u7D71\u901A\u77E5",""),u(3),X(o.data.content||"\u7CFB\u7D71\u7570\u5E38"),u(2),h(6,o.data.customAction?6:7)}}var it=(()=>{let i=class i{constructor(n,e,r,a){this.dialog=n,this.renderer=e,this.overlayContainer=r,this.data=a,console.log("[AlertDialogComponent data]: ",this.data),this.isHasContent=!!this.data.content}ngOnInit(){}ngAfterViewInit(){if(this.dialog.openDialogs.length>1){let n=this.overlayContainer.getContainerElement().children,e=n[n.length-1];if(e){let r=e.closest(".cdk-overlay-container"),a=1e3+n.length;this.renderer.setStyle(r,"z-index",a)}}}};i.\u0275fac=function(e){return new(e||i)(m(x),m(A),m(w),m(S))},i.\u0275cmp=_({type:i,selectors:[["app-alert-dialog"]],standalone:!0,features:[M],decls:3,vars:0,consts:[["mat-dialog-title",""],["type","button","mat-flat-button","","color","accent","class","w-100"],["type","button","mat-flat-button","","color","accent",1,"w-100",3,"click"],["type","button","mat-flat-button","","color","accent",1,"w-100",3,"mat-dialog-close"]],template:function(e,r){e&1&&(g(0,gt,8,3),K(1,0,mt),Q())},dependencies:[B]});let t=i;return t})();var Lt=(()=>{let i=class i{constructor(n,e){this.dialog=n,this.authService=e}showIsTimeWarningDialog(n,e){n.getIsTimeWarning$().subscribe(r=>{console.log("TimeoutManagementService showIsTimeWarningDialog :",[e,r]),this.dialog.open(et,{data:W({},e),disableClose:!0}).afterClosed().subscribe(a=>{a&&n.resetTimer()})})}showIsTimeoutAlertDialog(n,e){n.getIsTimeout$().subscribe(r=>{console.log("TimeoutManagementService showIsTimeoutAlertDialog :",[e,r]),this.dialog.closeAll(),this.dialog.open(it,{data:W({},e),disableClose:!0}).afterClosed().subscribe(()=>{this.authService.logout()})})}formatMinuteSecond(n,e,r=!1){let a,C;if(r)a=Math.floor(n/60)<10?`0${Math.floor(n/60)}`:`${Math.floor(n/60)}`,C=Math.floor(n%60)<10?`0${Math.floor(n%60)}`:`${Math.floor(n%60)}`;else{let p=e-n;a=Math.floor(p/60)<10?`0${Math.floor(p/60)}`:`${Math.floor(p/60)}`,C=Math.floor(p%60)<10?`0${Math.floor(p%60)}`:`${Math.floor(p%60)}`}return`${a}:${C}`}};i.\u0275fac=function(e){return new(e||i)($(x),$(G))},i.\u0275prov=P({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();export{nt as a,ot as b,at as c,q as d,it as e,Lt as f};
