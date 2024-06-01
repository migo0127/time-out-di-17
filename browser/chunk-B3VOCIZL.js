import{c as C,e as ye,f as xe}from"./chunk-S42RXLGR.js";import{b as se}from"./chunk-MRRWW5PJ.js";import{a as B,b as Ce,c as I}from"./chunk-JKT2KMGE.js";import{a as me,b as X,d as le,e as ce,g as de,h as pe,i as ge,j as ue,k as T,l as S,m as fe,n as _e,q as he,r as R,s as be,t as k,u as ve,v as E}from"./chunk-NLZ74Q5U.js";import{$ as c,A as j,B as L,Ba as w,Ca as g,E as A,F as p,G as q,J as x,K as M,La as m,Na as O,P as G,Pa as te,Qa as u,Ra as ie,T as U,Tb as ae,V as H,Wa as D,Z as _,_ as l,_a as P,ba as Y,da as Z,ea as $,fa as W,ha as J,ia as h,jb as ne,kb as oe,la as K,ma as b,na as V,oa as Q,pa as ee,ra as v,va as a,wa as s,xa as d,ya as re}from"./chunk-DIEQIMDK.js";var Re=new L("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var we=(()=>{let e=class e{constructor(r,i,o,y,f){this._elementRef=r,this._ngZone=i,this._changeDetectorRef=o,this._animationMode=y,this._isNoopAnimation=!1,this._defaultColor="primary",this._value=0,this._bufferValue=0,this.animationEnd=new $,this._mode="determinate",this._transitionendHandler=z=>{this.animationEnd.observers.length===0||!z.target||!z.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))},this._isNoopAnimation=y==="NoopAnimations",f&&(f.color&&(this.color=this._defaultColor=f.color),this.mode=f.mode||this.mode)}get color(){return this._color||this._defaultColor}set color(r){this._color=r}get value(){return this._value}set value(r){this._value=Me(r||0),this._changeDetectorRef.markForCheck()}get bufferValue(){return this._bufferValue||0}set bufferValue(r){this._bufferValue=Me(r||0),this._changeDetectorRef.markForCheck()}get mode(){return this._mode}set mode(r){this._mode=r,this._changeDetectorRef.markForCheck()}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("transitionend",this._transitionendHandler)})}ngOnDestroy(){this._elementRef.nativeElement.removeEventListener("transitionend",this._transitionendHandler)}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}};e.\u0275fac=function(i){return new(i||e)(c(H),c(W),c(Y),c(U,8),c(Re,8))},e.\u0275cmp=p({type:e,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(i,o){i&2&&(K("aria-valuenow",o._isIndeterminate()?null:o.value)("mode",o.mode),ee("mat-"+o.color),Q("_mat-animation-noopable",o._isNoopAnimation)("mdc-linear-progress--animation-ready",!o._isNoopAnimation)("mdc-linear-progress--indeterminate",o._isIndeterminate()))},inputs:{color:"color",value:[A.HasDecoratorInputTransform,"value","value",D],bufferValue:[A.HasDecoratorInputTransform,"bufferValue","bufferValue",D],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],standalone:!0,features:[J,u],decls:7,vars:4,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(i,o){i&1&&(a(0,"div",0),d(1,"div",1)(2,"div",2),s(),a(3,"div",3),d(4,"span",4),s(),a(5,"div",5),d(6,"span",4),s()),i&2&&(l(),V("flex-basis",o._getBufferBarFlexBasis()),l(2),V("transform",o._getPrimaryBarTransform()))},styles:[`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half))}100%{transform:translateX(var(--mdc-linear-progress-primary-full))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color)}.mdc-linear-progress__buffer-dots{background-color:var(--mdc-linear-progress-track-color)}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-color:rgba(0,0,0,0);background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(244, 67, 54, 0.25)'/%3E%3C/svg%3E")}}.mdc-linear-progress__buffer-bar{background-color:var(--mdc-linear-progress-track-color)}.mdc-linear-progress{height:max(var(--mdc-linear-progress-track-height), var(--mdc-linear-progress-active-indicator-height))}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress{height:4px}}.mdc-linear-progress__bar{height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{height:var(--mdc-linear-progress-track-height)}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height)}}.mdc-linear-progress__buffer{border-radius:var(--mdc-linear-progress-track-shape)}.mat-mdc-progress-bar{display:block;text-align:left;--mdc-linear-progress-primary-half: 83.67142%;--mdc-linear-progress-primary-full: 200.611057%;--mdc-linear-progress-secondary-quarter: 37.651913%;--mdc-linear-progress-secondary-half: 84.386165%;--mdc-linear-progress-secondary-full: 160.277782%;--mdc-linear-progress-primary-half-neg: -83.67142%;--mdc-linear-progress-primary-full-neg: -200.611057%;--mdc-linear-progress-secondary-quarter-neg: -37.651913%;--mdc-linear-progress-secondary-half-neg: -84.386165%;--mdc-linear-progress-secondary-full-neg: -160.277782%}[dir=rtl] .mat-mdc-progress-bar{text-align:right}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}`],encapsulation:2,changeDetection:0});let t=e;return t})();function Me(t,e=0,n=100){return Math.max(e,Math.min(n,t))}var F=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=q({type:e}),e.\u0275inj=j({imports:[ae]});let t=e;return t})();var Ee=[R,k,E,F],Ie=[T,S,P],ir=[...Ee,...Ie];var Oe=[{provide:I,useFactory:Ce.createTimeoutService,deps:[[new G,B]]},{provide:B,useValue:{idleLimit:C.idleLimit,idleWarning:null}}];function Fe(t,e){t&1&&(a(0,"mat-error"),m(1," Phone is "),a(2,"strong"),m(3,"required"),s()())}function Ae(t,e){t&1&&(a(0,"mat-error"),m(1," OTP code is "),a(2,"strong"),m(3,"required"),s()())}function Ve(t,e){if(t&1&&m(0),t&2){let n=g(2);O(" ",5-n.resendSec()+"s"," ")}}function De(t,e){if(t&1&&m(0),t&2){let n=g(2);O(" ",n.isResendOTP()?"Resend":"Send"," ")}}var Xe=t=>({"progress-wrap":!0,"text--white":t});function Be(t,e){if(t&1&&(a(0,"div",6),d(1,"mat-progress-bar",10),a(2,"span",11),m(3),s()()),t&2){let n=g(2);b("ngClass",ie(5,Xe,n.progressValue()>55)),l(),b("mode",n.mode)("value",n.progressValue())("bufferValue",n.bufferValue),l(2),O(" ",n.progressMinute()," ")}}function Ne(t,e){if(t&1){let n=re();a(0,"section",0)(1,"form",1)(2,"h1"),m(3,"Register Form"),s(),a(4,"mat-form-field")(5,"mat-label"),m(6,"Phone"),s(),d(7,"input",2),h(8,Fe,4,0,"mat-error"),s(),a(9,"div",3)(10,"mat-form-field")(11,"mat-label"),m(12,"OTP"),s(),d(13,"input",4),h(14,Ae,4,0,"mat-error"),s(),a(15,"button",5),w("click",function(){x(n);let i=g();return M(i.sendOTP())}),h(16,Ve,1,1)(17,De,1,1),s()(),h(18,Be,4,7,"div",6),a(19,"div",7)(20,"button",8),w("click",function(){x(n);let i=g();return M(i.sendRegister())}),m(21," Register "),s(),a(22,"a",9),w("click",function(i){x(n);let o=g();return M(o.loginPage(i))}),m(23," Login "),s()()()()}if(t&2){let n=g(),r,i,o;l(),b("formGroup",n.registerForm),l(7),v(8,(r=n.phoneCodeControl())!=null&&r.touched&&((r=n.phoneCodeControl())!=null&&r.hasError("required"))?8:-1),l(6),v(14,(i=n.otpCodeControl())!=null&&i.touched&&((i=n.otpCodeControl())!=null&&i.hasError("required"))?14:-1),l(),b("disabled",n.disableResend()||((o=n.phoneCodeControl())==null?null:o.invalid)),l(),v(16,n.resendSec()>=0&&n.resendSec()<5?16:17),l(2),v(18,n.isResendOTP()?18:-1),l(2),b("disabled",n.registerForm.invalid)}}var Pe=(()=>{let e=class e{phoneCodeControl(){return this.registerForm.get("phone")}otpCodeControl(){return this.registerForm.get("otpCode")}constructor(r,i,o,y,f){this.router=r,this.fb=i,this.dialog=o,this.timeoutService=y,this.timeoutManageService=f,this.isResendOTP=_(!1),this.disableResend=_(!1),this.mode="determinate",this.bufferValue=100,this.resendSec=_(-1),this.initRegisterForm(),Z(()=>{console.log("isResendOTP: ",this.isResendOTP()),console.log("disableResend: ",this.disableResend())})}ngOnInit(){this.initProgressValue()}initRegisterForm(){this.registerForm=this.fb.group({phone:["",[X.required]],otpCode:["",[X.required]]})}initProgressValue(){this.progressMinute=_(this.isIncrement?"00:00":"10:00"),this.progressValue=_(this.isIncrement?0:100)}sendOTP(){this.resendSec.set(0),this.isResendOTP()?(this.disableResend.set(!0),this.resetTimeout()):(console.log("init OTP"),this.startTimeout(),this.disableResend.set(!0),this.isResendOTP.set(!0))}resetTimeout(){this.initProgressValue(),this.timeoutService.resetTimer()}startTimeout(){this.timeoutService.startTimer(),this.getAfk(),this.getIsTimeout()}getAfk(){this.timeoutService.getAfk$().subscribe(r=>{r<6&&this.resendSec.set(r),r>=5&&this.disableResend()&&this.disableResend.set(!1),this.progressValue.set(this.isIncrement?Math.floor(r/C.idleLimit*100):Math.floor((1-r/C.idleLimit)*100)),this.progressMinute.set(this.timeoutManageService.formatMinuteSecond(r,C.idleLimit,this.isIncrement))})}getIsTimeout(){this.timeoutService.getIsTimeout$().subscribe(r=>{r&&this.dialog.open(ye,{data:{content:"\u9A57\u8B49\u78BC\u5DF2\u8D85\u904E\u8A8D\u8B49\u6642\u9593\uFF0C\u8ACB\u91CD\u65B0\u767C\u9001\u9A57\u8B49\u78BC\u3002"}})})}sendRegister(){this.router.navigateByUrl("/register/step-2")}loginPage(r){r.preventDefault(),this.router.navigateByUrl("/")}ngOnDestroy(){this.timeoutService.clearTimer()}};e.\u0275fac=function(i){return new(i||e)(c(oe),c(ue),c(se),c(I),c(xe))},e.\u0275cmp=p({type:e,selectors:[["app-step1"]],standalone:!0,features:[te([...Oe]),u],decls:1,vars:1,consts:[["id","register-section"],[1,"flex-column-center","register-form",3,"formGroup"],["type","text","matInput","","formControlName","phone","placeholder","Ex. 09123456789"],[1,"otp-wrap"],["type","text","matInput","","formControlName","otpCode","placeholder","Ex. 123456"],["type","button","mat-raised-button","","color","primary",3,"disabled","click"],[3,"ngClass"],[1,"flex-center","btns--wrap"],["mat-raised-button","","color","primary",3,"disabled","click"],["href","#",3,"click"],["color","primary",3,"mode","value","bufferValue"],[1,"progress-value"]],template:function(i,o){i&1&&h(0,Ne,24,7,"section",0),i&2&&v(0,o.registerForm?0:-1)},dependencies:[R,he,fe,_e,k,be,E,ve,F,we,T,de,me,le,ce,S,pe,ge,P],styles:["[_nghost-%COMP%]     mat-progress-bar{height:28px}[_nghost-%COMP%]     mat-progress-bar .mdc-linear-progress__bar, [_nghost-%COMP%]     mat-progress-bar .mdc-linear-progress__buffer{height:28px}[_nghost-%COMP%]     mat-progress-bar .mdc-linear-progress__bar-inner{border-top-width:28px}#register-section[_ngcontent-%COMP%]{width:100%}#register-section[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]{width:80%;max-width:500px;min-width:290px;height:40vh;max-height:480px;min-height:450px;margin:10vh auto;border:1px solid #ccc}#register-section[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:85%;margin:.25rem 0}#register-section[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   .btns--wrap[_ngcontent-%COMP%]{width:85%;margin-top:1rem;justify-content:flex-end!important}#register-section[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   .btns--wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%}#register-section[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   .btns--wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:30%;display:block;text-align:right;color:#ff4081}#register-section[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   .btns--wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}#register-section[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   .otp-wrap[_ngcontent-%COMP%]{width:85%;display:grid;grid-template-columns:.8fr .2fr;justify-content:space-around;align-items:center}#register-section[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   .otp-wrap[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:95%;min-width:190px}#register-section[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   .progress-wrap[_ngcontent-%COMP%]{position:relative;width:85%;margin:1rem 0}#register-section[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   .progress-wrap[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translateY(-50%)}#register-section[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   .text--white[_ngcontent-%COMP%]{color:#ececec}"]});let t=e;return t})();var Te=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-step2"]],standalone:!0,features:[u],decls:2,vars:0,template:function(i,o){i&1&&(a(0,"p"),m(1,"step2 works!"),s())}});let t=e;return t})();var Se=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-register"]],standalone:!0,features:[u],decls:1,vars:0,template:function(i,o){i&1&&d(0,"router-outlet")},dependencies:[ne]});let t=e;return t})();var Ar=[{path:"",component:Se,children:[{path:"",redirectTo:"step-1",pathMatch:"full"},{path:"step-1",component:Pe},{path:"step-2",component:Te}]},{path:"**",redirectTo:""}];export{Ar as RegisterRoutes};