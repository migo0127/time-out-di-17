import{a as I,f as j}from"./chunk-S42RXLGR.js";import{h as y}from"./chunk-MRRWW5PJ.js";import{c as b}from"./chunk-JKT2KMGE.js";import{k as p,l,r as u,t as f,v as M}from"./chunk-NLZ74Q5U.js";import{$ as m,Ba as _,Ca as O,F as a,La as s,Na as F,Pa as P,Qa as d,Z as g,_ as h,ia as v,ja as C,jb as T,ka as x,va as n,wa as c,xa as S}from"./chunk-DIEQIMDK.js";var H=[u,f,M],R=[p,l],q=[...H,...R];function E(t,e){if(t&1&&(n(0,"span"),s(1),c()),t&2){let D=O();h(),F("",D.loginTime()," ")}}var k=(()=>{let e=class e{constructor(i,o,r){this.authService=i,this.timeoutService=o,this.timeoutManageService=r,this.loginTime=g("00:00")}ngOnInit(){this.timeoutService.getAfk$().subscribe(i=>{this.loginTime.set(this.timeoutManageService.formatMinuteSecond(i,I.idleLimit,!0))})}logout(){this.authService.logout()}};e.\u0275fac=function(o){return new(o||e)(m(y),m(b),m(j))},e.\u0275cmp=a({type:e,selectors:[["app-header"]],standalone:!0,features:[d],decls:10,vars:0,consts:[["id","header-section"],["href","javascript:;'",3,"click"]],template:function(o,r){o&1&&(n(0,"section",0)(1,"div"),s(2,"Migo"),c(),n(3,"div"),v(4,E,2,1),C(5,4),x(),n(7,"span")(8,"a",1),_("click",function(){return r.logout()}),s(9," Logout "),c()()()())},dependencies:[u,f,M,p,l],styles:["#header-section[_ngcontent-%COMP%]{width:100vw;height:10vh;max-height:50px;display:flex;justify-content:space-between;align-items:center;font-size:1.25rem;background-color:#5b6fdf}#header-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:0 5rem;color:#fff}#header-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;padding:0 .5rem}#header-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}"]});let t=e;return t})();var w=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["app-pages"]],standalone:!0,features:[P([]),d],decls:2,vars:0,template:function(o,r){o&1&&S(0,"app-header")(1,"router-outlet")},dependencies:[T,k]});let t=e;return t})();var ce=[{path:"",component:w,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-FLFSKVIW.js")},{path:"product",loadComponent:()=>import("./chunk-VTBKNVOZ.js")}]},{path:"**",redirectTo:""}];export{ce as PagesRoutes};