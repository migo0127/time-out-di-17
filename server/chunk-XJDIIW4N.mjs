import './polyfills.server.mjs';
import{b as y,f as j}from"./chunk-KX3WRALE.mjs";import{h as I}from"./chunk-2LMWK4L3.mjs";import{c as b}from"./chunk-TC5CWH7P.mjs";import{k as p,l,r as u,t as f,v as M}from"./chunk-ILCKWCRC.mjs";import"./chunk-K6RM6F3Q.mjs";import{$a as s,J as a,Ka as n,La as c,Ma as S,Qa as _,Ra as O,bb as F,db as P,eb as d,hc as T,ka as g,ma as h,na as m,xa as v,ya as C,za as x}from"./chunk-ZPTDKJIY.mjs";import"./chunk-VVCT4QZE.mjs";var H=[u,f,M],R=[p,l],q=[...H,...R];function E(t,e){if(t&1&&(n(0,"span"),s(1),c()),t&2){let D=O();h(),F("",D.loginTime()," ")}}var k=(()=>{let e=class e{constructor(i,o,r){this.authService=i,this.timeoutService=o,this.timeoutManageService=r,this.loginTime=g("00:00")}ngOnInit(){this.timeoutService.getAfk$().subscribe(i=>{this.loginTime.set(this.timeoutManageService.formatMinuteSecond(i,y.idleLimit,!0))})}logout(){this.authService.logout()}};e.\u0275fac=function(o){return new(o||e)(m(I),m(b),m(j))},e.\u0275cmp=a({type:e,selectors:[["app-header"]],standalone:!0,features:[d],decls:10,vars:0,consts:[["id","header-section"],["href","javascript:;'",3,"click"]],template:function(o,r){o&1&&(n(0,"section",0)(1,"div"),s(2,"Migo"),c(),n(3,"div"),v(4,E,2,1),C(5,4),x(),n(7,"span")(8,"a",1),_("click",function(){return r.logout()}),s(9," Logout "),c()()()())},dependencies:[u,f,M,p,l],styles:["#header-section[_ngcontent-%COMP%]{width:100vw;height:10vh;max-height:50px;display:flex;justify-content:space-between;align-items:center;font-size:1.25rem;background-color:#5b6fdf}#header-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:0 5rem;color:#fff}#header-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;padding:0 .5rem}#header-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}"]});let t=e;return t})();var w=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["app-pages"]],standalone:!0,features:[P([]),d],decls:2,vars:0,template:function(o,r){o&1&&S(0,"app-header")(1,"router-outlet")},dependencies:[T,k]});let t=e;return t})();var ce=[{path:"",component:w,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-IKN3PVVI.mjs")},{path:"product",loadComponent:()=>import("./chunk-C4LRAIWL.mjs")}]},{path:"**",redirectTo:""}];export{ce as PagesRoutes};