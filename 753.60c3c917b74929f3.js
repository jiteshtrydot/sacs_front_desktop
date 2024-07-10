"use strict";(globalThis.webpackChunksacs=globalThis.webpackChunksacs||[]).push([[753],{61753:(gt,S,c)=>{c.r(S),c.d(S,{AuthModule:()=>d});var v=c(88692),l=c(7976),Z=c(16256),t=c(64537);class _{constructor(i,n){this.authService=i,this.router=n}canActivate(){return!this.authService.isUserAuthenticated()||(this.router.navigate(["/"]),!1)}canActivateChild(){return console.log("canActivateChild"),!this.authService.isUserAuthenticated()||(this.router.navigate(["/"]),!1)}canDeactivate(){return console.log("canDeactivate"),!0}canLoad(){return console.log("canLoad"),!0}}_.\u0275fac=function(i){return new(i||_)(t.LFG(Z.e),t.LFG(l.F0))},_.\u0275prov=t.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"});class p{constructor(){}ngOnInit(){}}p.\u0275fac=function(i){return new(i||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-auth"]],decls:1,vars:0,template:function(i,n){1&i&&t._UZ(0,"router-outlet")},dependencies:[l.lC]});var a=c(20092),b=c(20434),y=c(37730),M=c(80532),x=c(94590),L=c(92340),C=c(36198),u=c(34942),I=c(96528),m=c(56707);const B=["usernameRef"],O=["otpCodeRef"];function N(e,i){1&e&&(t.TgZ(0,"button",32),t._uU(1,"BUTTON.SIGNIN"),t.qZA())}function J(e,i){1&e&&(t.TgZ(0,"button",33),t._uU(1,"\n                                    "),t._UZ(2,"m4-icon",34),t._uU(3,"\n                                "),t.qZA())}const q=function(e){return{field:e}};function E(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"form",20),t.NdJ("ngSubmit",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.submitForm())}),t._uU(1,"\n                "),t.TgZ(2,"div",21),t._uU(3,"\n                    FORM.HEADER.LOGIN\n                "),t.qZA(),t._uU(4,"\n                "),t.TgZ(5,"div",6),t._uU(6,"\n                    "),t.TgZ(7,"div",22),t._uU(8,"\n                        "),t.TgZ(9,"div",10),t._uU(10,"\n                            "),t.TgZ(11,"div",11),t._uU(12,"\n                                "),t.TgZ(13,"label",23),t._uU(14,"FORM.LABEL.USER_NAME"),t.qZA(),t._uU(15,"\n                                "),t._UZ(16,"input",24,25),t.ALo(18,"translate"),t._uU(19,"\n                                "),t.TgZ(20,"div",26),t._uU(21,"\n                                    "),t.TgZ(22,"p",27),t.ALo(23,"translate"),t._uU(24,"\n                                        VALIDATION.IS_REQUIRED"),t.qZA(),t._uU(25,"\n                                "),t.qZA(),t._uU(26,"\n                                "),t._uU(27,"\n                            "),t.qZA(),t._uU(28,"\n                            "),t.TgZ(29,"div",11),t._uU(30,"\n                                "),t.TgZ(31,"label",23),t._uU(32,"FORM.LABEL.PASSWORD"),t.qZA(),t._uU(33,"\n                                "),t._UZ(34,"input",28),t.ALo(35,"translate"),t._uU(36,"\n                                "),t.TgZ(37,"div",26),t._uU(38,"\n                                    "),t.TgZ(39,"p",27),t.ALo(40,"translate"),t._uU(41,"\n                                        VALIDATION.IS_REQUIRED"),t.qZA(),t._uU(42,"\n                                "),t.qZA(),t._uU(43,"\n                                "),t._uU(44,"\n                            "),t.qZA(),t._uU(45,"\n                            "),t._uU(46,"\n                            "),t.TgZ(47,"div",29),t._uU(48,"\n                                "),t.YNc(49,N,2,0,"button",30),t._uU(50,"\n                                "),t.YNc(51,J,4,0,"button",31),t._uU(52,"\n                            "),t.qZA(),t._uU(53,"\n                        "),t.qZA(),t._uU(54,"\n                    "),t.qZA(),t._uU(55,"\n\n                "),t.qZA(),t._uU(56,"\n            "),t.qZA()}if(2&e){const n=t.oxw();t.Q6J("formGroup",n.formData),t.xp6(16),t.s9C("placeholder",t.lcZ(18,7,"FORM.LABEL.USER_NAME")),t.xp6(6),t.Q6J("translateParams",t.VKq(15,q,t.lcZ(23,9,"FORM.LABEL.USER_NAME"))),t.xp6(12),t.s9C("placeholder",t.lcZ(35,11,"FORM.LABEL.PASSWORD")),t.xp6(5),t.Q6J("translateParams",t.VKq(17,q,t.lcZ(40,13,"FORM.LABEL.PASSWORD"))),t.xp6(10),t.Q6J("ngIf",!n.loading.signinBtn),t.xp6(2),t.Q6J("ngIf",n.loading.signinBtn)}}function w(e,i){1&e&&(t.TgZ(0,"p",35),t._uU(1,"\n                        LOAD.QR_CODE_INSTRUCTION\n                    "),t.qZA())}function Q(e,i){if(1&e&&(t.TgZ(0,"div",36),t._uU(1,"\n                        "),t._UZ(2,"img",37),t._uU(3,"\n                    "),t.qZA()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("src",n.responseData.qr_code_url,t.LSH)}}function R(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.verifyOTP())}),t._uU(1,"LOAD.SUBMIT"),t.qZA()}}function F(e,i){1&e&&(t.TgZ(0,"button",39),t._uU(1,"\n                                    "),t._UZ(2,"m4-icon",34),t._uU(3,"\n                                "),t.qZA())}class f{constructor(i,n,o,r,s,T,A){this._authService=i,this._utilityService=n,this._notifyService=o,this._localStorage=r,this._generalService=s,this._router=T,this._electronService=A,this.formSubmitted=!1,this.loading={signinBtn:!1,otpBtn:!1},this.sendVerifyOTP=!1,this.responseData={},this._electronService.isElectron&&L.N.production&&this._router.navigate(["auth/branch/signin"])}ngOnInit(){this.createForm()}ngAfterViewInit(){this.usernameRef.nativeElement.focus()}createForm(){this.formData=new a.cw({username:new a.NI(null,[a.kI.required,a.kI.maxLength(50)]),password:new a.NI(null,[a.kI.required,a.kI.maxLength(50)])})}submitForm(){this.formSubmitted=!0,this.formData.valid&&(this.loading.signinBtn=!0,this._authService.signin(this.formData.value).subscribe({next:i=>{this.loading.signinBtn=!1,this.responseData=i.item,setTimeout(()=>{this.otpCodeRef.nativeElement.focus()},0)},error:i=>{this.loading.signinBtn=!1;let n=this._utilityService.serverMessageHandler(i);this._utilityService.error(n,this._notifyService)}}))}isFieldInvalid(i){return!this.formData.get(i).valid&&(this.formData.get(i).touched||this.formData.get(i).untouched&&this.formSubmitted)}verifyOTP(){this.code&&6==(""+this.code).length&&!this.sendVerifyOTP&&(this.loading.otpBtn=!0,this.sendVerifyOTP=!0,this._authService.validateTotp({token:this.responseData.temp_token,code:""+this.code}).subscribe({next:n=>{this.loading.otpBtn=!1,this.sendVerifyOTP=!1,this._localStorage.setLocalStorageItem(this._utilityService.localStrorage.accessToken,n.token),this._localStorage.setLocalStorageItem(this._utilityService.localStrorage.userDetails,JSON.stringify(n.item)),this._localStorage.setLocalStorageItem(this._utilityService.localStrorage.centerId,n.item.center_id),this._utilityService.success(n.message,this._notifyService),this._router.navigate([n.item.role_type==M.GD.admin?"/super-master":"/master"])},error:n=>{this.loading.otpBtn=!1,this.sendVerifyOTP=!1;let o=this._utilityService.serverMessageHandler(n);this._utilityService.error(o,this._notifyService)}}))}}f.\u0275fac=function(i){return new(i||f)(t.Y36(Z.e),t.Y36(y.t),t.Y36(u.c),t.Y36(b.n),t.Y36(C.m),t.Y36(l.F0),t.Y36(x.d))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-signin"]],viewQuery:function(i,n){if(1&i&&(t.Gf(B,5),t.Gf(O,5)),2&i){let o;t.iGM(o=t.CRH())&&(n.usernameRef=o.first),t.iGM(o=t.CRH())&&(n.otpCodeRef=o.first)}},decls:54,vars:9,consts:[[1,"container"],[1,"row","mx-0","height-full","align-items-center"],[1,"cell-5"],["class","card form-box","data-role","validator","data-interactive-check","true",3,"formGroup","ngSubmit",4,"ngIf"],[1,"card","form-box",3,"hidden"],["translate","",1,"card-header","text-center","pb-0"],[1,"card-content","pt-0"],["class","font-14 text-center mt-5 mb-0","translate","",4,"ngIf"],["class","qr-code mt-5",4,"ngIf"],[1,"row","mt-5"],[1,"cell-12"],[1,"form-group"],[1,"otp-inputs"],["type","number","name","code","appCommonDirective","",3,"ngModel","type","limit","ngModelChange","keydown.enter"],["otpCode","ngModel","otpCodeRef",""],[1,"form-group","mt-7","d-flex","justify-content-center"],["type","button","m4-button","","btn-style","primary","class","justify-content-center","translate","",3,"click",4,"ngIf"],["type","button","m4-button","","btn-style","primary","class","justify-content-center","translate","",4,"ngIf"],[1,"cell-7"],["src","assets/images/login-img.png","alt","Login Image",1,"d-block","ml-auto"],["data-role","validator","data-interactive-check","true",1,"card","form-box",3,"formGroup","ngSubmit"],["translate","",1,"card-header"],[1,"row"],["translate",""],["type","text","name","username","id","username","formControlName","username","data-validate","required",3,"placeholder"],["usernameRef",""],[1,"invalid_feedback"],["translate","",3,"translateParams"],["type","password","name","password","id","password","formControlName","password","data-validate","required",3,"placeholder"],[1,"form-group","mt-2"],["type","submit","m4-button","","btn-style","primary","class","w-100","translate","",4,"ngIf"],["type","button","m4-button","","btn-style","primary","class","w-100","translate","",4,"ngIf"],["type","submit","m4-button","","btn-style","primary","translate","",1,"w-100"],["type","button","m4-button","","btn-style","primary","translate","",1,"w-100"],["icon","spinner","m4-animation","spin"],["translate","",1,"font-14","text-center","mt-5","mb-0"],[1,"qr-code","mt-5"],["alt","",3,"src"],["type","button","m4-button","","btn-style","primary","translate","",1,"justify-content-center",3,"click"],["type","button","m4-button","","btn-style","primary","translate","",1,"justify-content-center"]],template:function(i,n){1&i&&(t._uU(0,"\n"),t.TgZ(1,"div",0),t._uU(2,"\n    "),t.TgZ(3,"div",1),t._uU(4,"\n        "),t.TgZ(5,"div",2),t._uU(6,"\n            "),t._uU(7,"\n            "),t._uU(8,"\n            "),t.YNc(9,E,57,19,"form",3),t._uU(10,"\n\n            "),t.TgZ(11,"form",4),t._uU(12,"\n                "),t.TgZ(13,"div",5),t._uU(14,"\n                    LOAD.TWO_STEP_VERIFICATION\n                "),t.qZA(),t._uU(15,"\n                "),t.TgZ(16,"div",6),t._uU(17,"\n                    "),t.YNc(18,w,2,0,"p",7),t._uU(19,"\n                    "),t.YNc(20,Q,4,1,"div",8),t._uU(21,"\n                    "),t.TgZ(22,"div",9),t._uU(23,"\n                        "),t.TgZ(24,"div",10),t._uU(25,"\n                            "),t.TgZ(26,"div",11),t._uU(27,"\n                                "),t.TgZ(28,"div",12),t._uU(29,"\n                                    "),t.TgZ(30,"input",13,14),t.NdJ("ngModelChange",function(r){return n.code=r})("keydown.enter",function(){return n.verifyOTP()}),t.qZA(),t._uU(33,"\n                                "),t.qZA(),t._uU(34,"\n                            "),t.qZA(),t._uU(35,"\n                            "),t.TgZ(36,"div",15),t._uU(37,"\n                                "),t.YNc(38,R,2,0,"button",16),t._uU(39,"\n                                "),t.YNc(40,F,4,0,"button",17),t._uU(41,"\n                            "),t.qZA(),t._uU(42,"\n                        "),t.qZA(),t._uU(43,"\n                    "),t.qZA(),t._uU(44,"\n                "),t.qZA(),t._uU(45,"\n            "),t.qZA(),t._uU(46,"\n        "),t.qZA(),t._uU(47,"\n        "),t.TgZ(48,"div",18),t._uU(49,"\n            "),t._UZ(50,"img",19),t._uU(51,"\n        "),t.qZA(),t._uU(52,"\n    "),t.qZA(),t._uU(53,"\n\n"),t.qZA()),2&i&&(t.xp6(9),t.Q6J("ngIf",!n.responseData.is_totp_required),t.xp6(2),t.Q6J("hidden",!n.responseData.is_totp_required),t.xp6(7),t.Q6J("ngIf",n.responseData.show_qr_code),t.xp6(2),t.Q6J("ngIf",n.responseData.show_qr_code&&n.responseData.qr_code_url),t.xp6(10),t.Q6J("ngModel",n.code)("type","maxCharLimit")("limit",6),t.xp6(8),t.Q6J("ngIf",!n.loading.otpBtn),t.xp6(2),t.Q6J("ngIf",n.loading.otpBtn))},dependencies:[v.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,I.z,a.On,a.F,u.Hq,u.oJ,u.Vy,m.Pi,m.X$]});var D=c(11208);function Y(e,i){1&e&&(t.TgZ(0,"div",24),t._uU(1,"\n                    LOAD.SELECT_CENTER\n                "),t.qZA())}function P(e,i){1&e&&(t.TgZ(0,"div",24),t._uU(1,"\n                    LOAD.OTP\n                "),t.qZA())}const U=function(e){return{field:e}};function V(e,i){1&e&&(t.TgZ(0,"p",32),t.ALo(1,"translate"),t._uU(2,"\n                                        VALIDATION.IS_REQUIRED\n                                    "),t.qZA()),2&e&&t.Q6J("translateParams",t.VKq(3,U,t.lcZ(1,1,"LOAD.CENTER")))}function k(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"button",33),t.NdJ("click",function(){t.CHM(n),t.oxw(2);const r=t.MAs(1),s=t.oxw();return t.KtG(s.submitCenter(r))}),t._uU(1,"LOAD.SUBMIT"),t.qZA()}if(2&e){t.oxw(2);const n=t.MAs(1);t.Q6J("disabled",!n.valid)}}function G(e,i){1&e&&(t.TgZ(0,"button",34),t._uU(1,"\n                                    "),t._UZ(2,"m4-icon",35),t._uU(3,"\n                                "),t.qZA())}function H(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",25),t._uU(1,"\n                        "),t.TgZ(2,"div",11),t._uU(3,"\n                            "),t.TgZ(4,"div",12),t._uU(5,"\n                                "),t.TgZ(6,"ng-select",26,27),t.NdJ("ngModelChange",function(r){t.CHM(n);const s=t.oxw(2);return t.KtG(s.licenceData.center_id=r)}),t.qZA(),t._uU(8,"\n                                "),t.TgZ(9,"div",28),t._uU(10,"\n                                    "),t.YNc(11,V,3,5,"p",29),t._uU(12,"\n                                "),t.qZA(),t._uU(13,"\n                            "),t.qZA(),t._uU(14,"\n                        "),t.qZA(),t._uU(15,"\n                        "),t.TgZ(16,"div",11),t._uU(17,"\n                            "),t.TgZ(18,"div",30),t._uU(19,"\n                                "),t.YNc(20,k,2,1,"button",31),t._uU(21,"\n                                "),t.YNc(22,G,4,0,"button",17),t._uU(23,"\n                            "),t.qZA(),t._uU(24,"\n                        "),t.qZA(),t._uU(25,"\n                    "),t.qZA()}if(2&e){const n=t.MAs(7);t.oxw();const o=t.MAs(1),r=t.oxw();t.xp6(6),t.Q6J("ngModel",r.licenceData.center_id)("items",r.centerList)("selectOnTab",!0)("clearable",!1)("virtualScroll",!0),t.xp6(5),t.Q6J("ngIf",n.errors&&(n.dirty||n.touched||o.submitted)),t.xp6(9),t.Q6J("ngIf",!r.loading.centerBtn),t.xp6(2),t.Q6J("ngIf",r.loading.centerBtn)}}function j(e,i){1&e&&(t.TgZ(0,"p",32),t.ALo(1,"translate"),t._uU(2,"\n                                            VALIDATION.IS_REQUIRED\n                                        "),t.qZA()),2&e&&t.Q6J("translateParams",t.VKq(3,U,t.lcZ(1,1,"LOAD.CODE")))}function K(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"button",33),t.NdJ("click",function(){t.CHM(n),t.oxw(2);const r=t.MAs(1),s=t.oxw();return t.KtG(s.validateLicence(r))}),t._uU(1,"LOAD.SUBMIT"),t.qZA()}if(2&e){t.oxw(2);const n=t.MAs(1);t.Q6J("disabled",!n.valid)}}function W(e,i){1&e&&(t.TgZ(0,"button",34),t._uU(1,"\n                                    "),t._UZ(2,"m4-icon",35),t._uU(3,"\n                                "),t.qZA())}function z(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",25),t._uU(1,"\n                        "),t.TgZ(2,"div",11),t._uU(3,"\n                            "),t.TgZ(4,"div",12),t._uU(5,"\n                                "),t.TgZ(6,"div",36),t._uU(7,"\n                                    "),t.TgZ(8,"input",37,38),t.NdJ("ngModelChange",function(r){t.CHM(n);const s=t.oxw(2);return t.KtG(s.licenceValidationData.code=r)}),t.qZA(),t._uU(10,"\n                                    "),t.TgZ(11,"div",28),t._uU(12,"\n                                        "),t.YNc(13,j,3,5,"p",29),t._uU(14,"\n                                    "),t.qZA(),t._uU(15,"\n                                "),t.qZA(),t._uU(16,"\n                            "),t.qZA(),t._uU(17,"\n                        "),t.qZA(),t._uU(18,"\n                        "),t.TgZ(19,"div",11),t._uU(20,"\n                            "),t.TgZ(21,"div",39),t._uU(22,"\n                                "),t.TgZ(23,"h6",40)(24,"strong"),t._uU(25),t.qZA()(),t._uU(26,"\n                            "),t.qZA(),t._uU(27,"\n                        "),t.qZA(),t._uU(28,"\n                        "),t.TgZ(29,"div",11),t._uU(30,"\n                            "),t.TgZ(31,"div",30),t._uU(32,"\n                                "),t.YNc(33,K,2,1,"button",31),t._uU(34,"\n                                "),t.YNc(35,W,4,0,"button",17),t._uU(36,"\n                            "),t.qZA(),t._uU(37,"\n                        "),t.qZA(),t._uU(38,"\n                    "),t.qZA()}if(2&e){const n=t.MAs(9);t.oxw();const o=t.MAs(1),r=t.oxw();t.xp6(8),t.Q6J("ngModel",r.licenceValidationData.code)("type","maxCharLimit")("limit",6),t.xp6(5),t.Q6J("ngIf",n.errors&&(n.dirty||n.touched||o.submitted)),t.xp6(12),t.Oqu(r.licenceMessage),t.xp6(8),t.Q6J("ngIf",!r.loading.centerBtn),t.xp6(2),t.Q6J("ngIf",r.loading.centerBtn)}}function X(e,i){if(1&e&&(t.TgZ(0,"form",20,21),t._uU(2,"\n                "),t.YNc(3,Y,2,0,"div",22),t._uU(4,"\n                "),t.YNc(5,P,2,0,"div",22),t._uU(6,"\n                "),t.TgZ(7,"div",7),t._uU(8,"\n                    "),t.YNc(9,H,26,8,"div",23),t._uU(10,"\n                    "),t.YNc(11,z,39,7,"div",23),t._uU(12,"\n                "),t.qZA(),t._uU(13,"\n            "),t.qZA()),2&e){const n=t.oxw();t.xp6(3),t.Q6J("ngIf",!n.licenceData.submitted),t.xp6(2),t.Q6J("ngIf",n.licenceData.submitted),t.xp6(4),t.Q6J("ngIf",!n.licenceData.submitted),t.xp6(2),t.Q6J("ngIf",n.licenceData.submitted)}}function $(e,i){1&e&&(t.TgZ(0,"p",32),t.ALo(1,"translate"),t._uU(2,"\n                                            VALIDATION.IS_REQUIRED\n                                        "),t.qZA()),2&e&&t.Q6J("translateParams",t.VKq(3,U,t.lcZ(1,1,"FORM.LABEL.USER_NAME")))}function tt(e,i){if(1&e&&(t.ynx(0),t._uU(1,"\n                                        "),t.YNc(2,$,3,5,"p",29),t._uU(3,"\n                                    "),t.BQk()),2&e){t.oxw();const n=t.MAs(19);t.xp6(2),t.Q6J("ngIf",n.errors.required)}}function nt(e,i){1&e&&(t.TgZ(0,"p",32),t.ALo(1,"translate"),t._uU(2,"\n                                            VALIDATION.IS_REQUIRED\n                                        "),t.qZA()),2&e&&t.Q6J("translateParams",t.VKq(3,U,t.lcZ(1,1,"FORM.LABEL.PASSWORD")))}function et(e,i){if(1&e&&(t.ynx(0),t._uU(1,"\n                                        "),t.YNc(2,nt,3,5,"p",29),t._uU(3,"\n                                    "),t.BQk()),2&e){t.oxw();const n=t.MAs(34);t.xp6(2),t.Q6J("ngIf",n.errors.required)}}function it(e,i){1&e&&(t.TgZ(0,"button",53),t._uU(1,"BUTTON.SIGNIN"),t.qZA())}function ot(e,i){1&e&&(t.TgZ(0,"button",54),t._uU(1,"\n                                    "),t._UZ(2,"m4-icon",35),t._uU(3,"\n                                "),t.qZA())}function rt(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"form",41,42),t.NdJ("ngSubmit",function(){t.CHM(n);const r=t.MAs(1),s=t.oxw();return t.KtG(s.submitForm(r))}),t._uU(2,"\n                "),t.TgZ(3,"div",43),t._uU(4,"\n                    FORM.HEADER.LOGIN\n                "),t.qZA(),t._uU(5,"\n                "),t.TgZ(6,"div",7),t._uU(7,"\n                    "),t.TgZ(8,"div",25),t._uU(9,"\n                        "),t.TgZ(10,"div",11),t._uU(11,"\n                            "),t._uU(12,"\n                            "),t.TgZ(13,"div",12),t._uU(14,"\n                                "),t.TgZ(15,"label",44),t._uU(16,"FORM.LABEL.USER_NAME"),t.qZA(),t._uU(17,"\n                                "),t.TgZ(18,"input",45,46),t.NdJ("ngModelChange",function(r){t.CHM(n);const s=t.oxw();return t.KtG(s.formData.username=r)}),t.ALo(20,"translate"),t.qZA(),t._uU(21,"\n                                "),t.TgZ(22,"div",28),t._uU(23,"\n                                    "),t.YNc(24,tt,4,1,"ng-container",47),t._uU(25,"\n                                "),t.qZA(),t._uU(26,"\n                            "),t.qZA(),t._uU(27,"\n                            "),t.TgZ(28,"div",12),t._uU(29,"\n                                "),t.TgZ(30,"label",44),t._uU(31,"FORM.LABEL.PASSWORD"),t.qZA(),t._uU(32,"\n                                "),t.TgZ(33,"input",48,49),t.NdJ("ngModelChange",function(r){t.CHM(n);const s=t.oxw();return t.KtG(s.formData.password=r)}),t.ALo(35,"translate"),t.qZA(),t._uU(36,"\n                                "),t.TgZ(37,"div",28),t._uU(38,"\n                                    "),t.YNc(39,et,4,1,"ng-container",47),t._uU(40,"\n                                "),t.qZA(),t._uU(41,"\n                            "),t.qZA(),t._uU(42,"\n                            "),t.TgZ(43,"div",50),t._uU(44,"\n                                "),t.YNc(45,it,2,0,"button",51),t._uU(46,"\n                                "),t.YNc(47,ot,4,0,"button",52),t._uU(48,"\n                              "),t.qZA(),t._uU(49,"\n                        "),t.qZA(),t._uU(50,"\n                    "),t.qZA(),t._uU(51,"\n                   \n                "),t.qZA(),t._uU(52,"\n            "),t.qZA()}if(2&e){const n=t.MAs(1),o=t.MAs(19),r=t.MAs(34),s=t.oxw();t.xp6(18),t.s9C("placeholder",t.lcZ(20,8,"FORM.LABEL.USER_NAME")),t.Q6J("ngModel",s.formData.username),t.xp6(6),t.Q6J("ngIf",o.errors&&(o.dirty||o.touched||n.submitted)),t.xp6(9),t.s9C("placeholder",t.lcZ(35,10,"FORM.LABEL.PASSWORD")),t.Q6J("ngModel",s.formData.password),t.xp6(6),t.Q6J("ngIf",r.errors&&(r.dirty||r.touched||n.submitted)),t.xp6(6),t.Q6J("ngIf",!s.loading.button),t.xp6(2),t.Q6J("ngIf",s.loading.button)}}function at(e,i){1&e&&(t.TgZ(0,"p",55),t._uU(1,"\n                        LOAD.QR_CODE_INSTRUCTION\n                    "),t.qZA())}function st(e,i){if(1&e&&(t.TgZ(0,"div",56),t._uU(1,"\n                        "),t._UZ(2,"img",57),t._uU(3,"\n                    "),t.qZA()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("src",n.responseData.qr_code_url,t.LSH)}}function ct(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"button",58),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.verifyOTP())}),t._uU(1,"LOAD.SUBMIT"),t.qZA()}}function ut(e,i){1&e&&(t.TgZ(0,"button",34),t._uU(1,"\n                                    "),t._UZ(2,"m4-icon",35),t._uU(3,"\n                                "),t.qZA())}class h{constructor(i,n,o,r,s,T,A,mt){this._authService=i,this._utilityService=n,this._generalService=o,this._notifyService=r,this._electronService=s,this._localStorage=T,this._router=A,this._translateService=mt,this.licenceMessage="",this.licenceData={center_id:""},this.licenceValidationData={center_id:"",code:""},this.formData={username:"",password:"",center_id:null},this.loading={button:!1,list:!1,otpBtn:!1,centerBtn:!1},this.centerList=[],this.responseData={},this.sendVerifyOTP=!1,this.queryParam={sort:"",sortBy:"",skip:"",limit:"",q:"",zone_id:0,center_type:0,state_id:0},this.registeredUser=this._localStorage.getLocalStorageItem(this._utilityService.localStrorage.registeredUser),this.formData.center_id=this._localStorage.getLocalStorageItem(this._utilityService.localStrorage.centerId)}ngOnInit(){this.registeredUser||this.getCenterListing()}getCenterListing(){this.loading.list=!0,this._generalService.getCenterListWithoutToken("center",this.queryParam).subscribe({next:i=>{this.centerList=i.list,this.loading.list=!1},error:i=>{this.loading.list=!1}})}submitForm(i){i.valid&&(this.loading.button=!0,this.formData.center_id=this.formData.center_id?+this.formData.center_id:0,this._authService.signinBranch(this.formData).subscribe({next:n=>{this.loading.button=!1,this.responseData=n.item},error:n=>{this.loading.button=!1;let o=this._utilityService.serverMessageHandler(n);this._utilityService.error(o,this._notifyService)}}))}verifyOTP(){6==(""+this.code).length&&!this.sendVerifyOTP&&(this.loading.otpBtn=!0,this.sendVerifyOTP=!0,this._authService.validateTotp({token:this.responseData.temp_token,code:""+this.code}).subscribe({next:n=>{this.loading.otpBtn=!1,this.sendVerifyOTP=!1,this.setLocalStorageData("",n),this._utilityService.success(n.message,this._notifyService),this._router.navigate(this.registeredUser?["/dashboard"]:["/master/center-master-setup"])},error:n=>{this.loading.otpBtn=!1,this.sendVerifyOTP=!1;let o=this._utilityService.serverMessageHandler(n);this._utilityService.error(o,this._notifyService)}}))}submitCenter(i){i.valid&&this._authService.centerSelection(this.licenceData).subscribe({next:n=>{this.licenceData.submitted=!0,this.licenceMessage=n.message},error:n=>{let o=this._utilityService.serverMessageHandler(n);this._utilityService.error(o,this._notifyService)}})}setLocalStorageData(i,n){i?(this._localStorage.setLocalStorageItem(this._utilityService.localStrorage.registeredUser,i),this._localStorage.setLocalStorageItem(this._utilityService.localStrorage.centerId,this.licenceValidationData.center_id)):(this._localStorage.setLocalStorageItem(this._utilityService.localStrorage.accessToken,n.token),this._localStorage.setLocalStorageItem(this._utilityService.localStrorage.userDetails,JSON.stringify(n.item)))}validateLicence(i){i.valid&&(this.licenceValidationData.center_id=this.licenceData.center_id,this._authService.validateLicence(this.licenceValidationData).subscribe({next:n=>{this.registeredUser="1",this.licenceValidationData.validated=!0,this.formData.center_id=this.licenceValidationData.center_id,this.setLocalStorageData(this.registeredUser,{})},error:n=>{let o=this._utilityService.serverMessageHandler(n);this._utilityService.error(o,this._notifyService)}}))}}h.\u0275fac=function(i){return new(i||h)(t.Y36(Z.e),t.Y36(y.t),t.Y36(C.m),t.Y36(u.c),t.Y36(x.d),t.Y36(b.n),t.Y36(l.F0),t.Y36(m.sK))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-signin-bm"]],decls:51,vars:10,consts:[[1,"container"],[1,"row","mx-0","height-full","align-items-center"],[1,"cell-5"],["class","card form-box",4,"ngIf"],["class","card form-box",3,"ngSubmit",4,"ngIf"],[1,"card","form-box",3,"hidden"],["translate","",1,"card-header","text-center","pb-0"],[1,"card-content","pt-0"],["class","font-14 text-center mt-5 mb-0","translate","",4,"ngIf"],["class","qr-code mt-5",4,"ngIf"],[1,"row","mt-5"],[1,"cell-12"],[1,"form-group"],[1,"otp-inputs"],["type","number","name","code","appCommonDirective","",3,"ngModel","type","limit","ngModelChange","keydown.enter"],[1,"form-group","mt-7","d-flex","justify-content-center"],["type","button","m4-button","","btn-style","primary","class","justify-content-center","translate","",3,"click",4,"ngIf"],["type","button","m4-button","","btn-style","primary","class","justify-content-center","translate","",4,"ngIf"],[1,"cell-7"],["src","assets/images/login-img.png","alt","Login Image",1,"d-block","ml-auto"],[1,"card","form-box"],["licenceForm","ngForm"],["class","card-header text-center","translate","",4,"ngIf"],["class","row",4,"ngIf"],["translate","",1,"card-header","text-center"],[1,"row"],["bindValue","center_id","bindLabel","center_name","name","centerId","required","",3,"ngModel","items","selectOnTab","clearable","virtualScroll","ngModelChange"],["centerId","ngModel"],[1,"required-wrapper"],["translate","",3,"translateParams",4,"ngIf"],[1,"form-group","d-flex","justify-content-center"],["type","button","m4-button","","btn-style","primary","class","justify-content-center","translate","",3,"disabled","click",4,"ngIf"],["translate","",3,"translateParams"],["type","button","m4-button","","btn-style","primary","translate","",1,"justify-content-center",3,"disabled","click"],["type","button","m4-button","","btn-style","primary","translate","",1,"justify-content-center"],["icon","spinner","m4-animation","spin"],[1,"otp-inputs","d-block"],["type","text","name","licence_code","appCommonDirective","","required","",1,"w-100",3,"ngModel","type","limit","ngModelChange"],["licencCode","ngModel"],[1,"d-flex","justify-content-center"],[1,"text-primary"],[1,"card","form-box",3,"ngSubmit"],["form","ngForm"],["translate","",1,"card-header"],["translate",""],["type","text","name","username","id","username","required","",3,"ngModel","placeholder","ngModelChange"],["username","ngModel"],[4,"ngIf"],["type","password","name","password","id","password","required","",3,"ngModel","placeholder","ngModelChange"],["password","ngModel"],[1,"form-group","mt-2"],["type","submit","m4-button","","btn-style","primary","class","w-100","translate","",4,"ngIf"],["type","button","m4-button","","btn-style","primary","class","w-100","translate","",4,"ngIf"],["type","submit","m4-button","","btn-style","primary","translate","",1,"w-100"],["type","button","m4-button","","btn-style","primary","translate","",1,"w-100"],["translate","",1,"font-14","text-center","mt-5","mb-0"],[1,"qr-code","mt-5"],["alt","",3,"src"],["type","button","m4-button","","btn-style","primary","translate","",1,"justify-content-center",3,"click"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t._uU(1,"\n    "),t.TgZ(2,"div",1),t._uU(3,"\n        "),t.TgZ(4,"div",2),t._uU(5,"\n            "),t.YNc(6,X,14,4,"form",3),t._uU(7,"\n\n            "),t.YNc(8,rt,53,12,"form",4),t._uU(9,"\n\n            "),t.TgZ(10,"form",5),t._uU(11,"\n                "),t.TgZ(12,"div",6),t._uU(13,"\n                    LOAD.TWO_STEP_VERIFICATION\n                "),t.qZA(),t._uU(14,"\n                "),t.TgZ(15,"div",7),t._uU(16,"\n                    "),t.YNc(17,at,2,0,"p",8),t._uU(18,"\n                    "),t.YNc(19,st,4,1,"div",9),t._uU(20,"\n                    "),t.TgZ(21,"div",10),t._uU(22,"\n                        "),t.TgZ(23,"div",11),t._uU(24,"\n                            "),t.TgZ(25,"div",12),t._uU(26,"\n                                "),t.TgZ(27,"div",13),t._uU(28,"\n                                    "),t.TgZ(29,"input",14),t.NdJ("ngModelChange",function(r){return n.code=r})("keydown.enter",function(){return n.verifyOTP()}),t.qZA(),t._uU(30,"\n                                "),t.qZA(),t._uU(31,"\n                            "),t.qZA(),t._uU(32,"\n                            "),t.TgZ(33,"div",15),t._uU(34,"\n                                "),t.YNc(35,ct,2,0,"button",16),t._uU(36,"\n                                "),t.YNc(37,ut,4,0,"button",17),t._uU(38,"\n                            "),t.qZA(),t._uU(39,"\n                        "),t.qZA(),t._uU(40,"\n                    "),t.qZA(),t._uU(41,"\n\n                "),t.qZA(),t._uU(42,"\n            "),t.qZA(),t._uU(43,"\n        "),t.qZA(),t._uU(44,"\n        "),t.TgZ(45,"div",18),t._uU(46,"\n            "),t._UZ(47,"img",19),t._uU(48,"\n        "),t.qZA(),t._uU(49,"\n    "),t.qZA(),t._uU(50,"\n\n"),t.qZA()),2&i&&(t.xp6(6),t.Q6J("ngIf",!n.registeredUser),t.xp6(2),t.Q6J("ngIf",!n.responseData.is_totp_required&&n.registeredUser),t.xp6(2),t.Q6J("hidden",!n.responseData.is_totp_required),t.xp6(7),t.Q6J("ngIf",n.responseData.show_qr_code),t.xp6(2),t.Q6J("ngIf",n.responseData.show_qr_code&&n.responseData.qr_code_url),t.xp6(10),t.Q6J("ngModel",n.code)("type","maxCharLimit")("limit",6),t.xp6(6),t.Q6J("ngIf",!n.loading.otpBtn),t.xp6(2),t.Q6J("ngIf",n.loading.otpBtn))},dependencies:[v.O5,a._Y,a.Fj,a.JJ,a.JL,a.Q7,I.z,a.On,a.F,u.Hq,u.oJ,u.Vy,D.w9,m.Pi,m.X$]});const _t=[{path:"",component:p,children:[{path:"",redirectTo:"signin",pathMatch:"full"},{path:"signin",canActivate:[_],component:f},{path:"branch/signin",canActivate:[_],component:h}]}];class g{}g.\u0275fac=function(i){return new(i||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[l.Bz.forChild(_t),l.Bz]});var lt=c(35540);class d{}d.\u0275fac=function(i){return new(i||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[v.ez,g,a.UX,lt.o,a.u5,u.L3,D.A0,m.aw.forChild()]})}}]);