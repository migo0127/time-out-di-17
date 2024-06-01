import './polyfills.server.mjs';
import{h as y}from"./chunk-2LMWK4L3.mjs";import{a as L,b as v,d as I,e as V,g as k,h as N,i as R,j as T,k as p,l as f,m as q,n as A,q as B,r as _,s as D,t as C,u as j,v as M}from"./chunk-ILCKWCRC.mjs";import"./chunk-K6RM6F3Q.mjs";import{$a as r,Ba as O,Ga as u,J as F,Ka as i,La as o,Ma as w,N as h,Na as b,O as x,Qa as P,Ra as g,eb as S,jc as E,ma as c,na as s,xa as d}from"./chunk-ZPTDKJIY.mjs";import"./chunk-VVCT4QZE.mjs";var G=[_,C,M],U=[p,f],X=[...G,...U];function Y(n,l){n&1&&(i(0,"mat-error"),r(1," Account is "),i(2,"strong"),r(3,"required"),o()())}function z(n,l){n&1&&(i(0,"mat-error"),r(1," Password is "),i(2,"strong"),r(3,"required"),o()())}function H(n,l){if(n&1){let a=b();i(0,"section",0)(1,"form",1)(2,"h1"),r(3,"Login Form"),o(),i(4,"mat-form-field")(5,"mat-label"),r(6,"Account"),o(),w(7,"input",2),d(8,Y,4,0,"mat-error"),o(),i(9,"mat-form-field",3)(10,"mat-label"),r(11,"Password"),o(),w(12,"input",4),d(13,z,4,0,"mat-error"),o(),i(14,"div",5)(15,"button",6),P("click",function(){h(a);let t=g();return x(t.login())}),r(16," Submit "),o(),i(17,"a",7),P("click",function(t){h(a);let m=g();return x(m.registerPage(t))}),r(18," Register "),o()()()()}if(n&2){let a=g(),e,t;c(),O("formGroup",a.loginForm),c(7),u(8,(e=a.accControl())!=null&&e.touched&&((e=a.accControl())!=null&&e.hasError("required"))?8:-1),c(5),u(13,(t=a.pwdControl())!=null&&t.touched&&((t=a.pwdControl())!=null&&t.hasError("required"))?13:-1)}}var ct=(()=>{let l=class l{accControl(){return this.loginForm.get("acc")}pwdControl(){return this.loginForm.get("pwd")}constructor(e,t,m){this.Router=e,this.fb=t,this.authService=m,this.initLoginForm()}ngOnInit(){}initLoginForm(){this.loginForm=this.fb.group({acc:["",[v.required]],pwd:["",[v.required]]})}login(){this.loginForm.valid&&(this.authService.isLoginTrigger(!0),this.Router.navigateByUrl("pages"))}registerPage(e){e.preventDefault(),this.Router.navigateByUrl("register")}};l.\u0275fac=function(t){return new(t||l)(s(E),s(T),s(y))},l.\u0275cmp=F({type:l,selectors:[["app-login"]],standalone:!0,features:[S],decls:1,vars:1,consts:[["id","login-section"],[1,"flex-column-center","login-form",3,"formGroup"],["type","text","matInput","","formControlName","acc","placeholder","Ex. A123456789"],[1,"example-full-width"],["type","password","matInput","","formControlName","pwd","placeholder","Ex. \u2022\u2022\u2022\u2022\u2022"],[1,"flex-center","btns--wrap"],["mat-raised-button","","color","primary",3,"click"],["href","#",3,"click"]],template:function(t,m){t&1&&d(0,H,19,3,"section",0),t&2&&u(0,m.loginForm?0:-1)},dependencies:[_,B,q,A,C,D,M,j,p,k,L,I,V,f,N,R],styles:["#login-section[_ngcontent-%COMP%]{width:100%}#login-section[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{width:80%;max-width:500px;min-width:290px;height:40vh;max-height:400px;min-height:400px;margin:10vh auto;border:1px solid #ccc}#login-section[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:85%;margin:.25rem 0}#login-section[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .btns--wrap[_ngcontent-%COMP%]{width:85%;margin-top:1rem;justify-content:flex-end!important}#login-section[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .btns--wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%}#login-section[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .btns--wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:30%;display:block;text-align:right;color:#ff4081}#login-section[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .btns--wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}"]});let n=l;return n})();export{ct as default};
