webpackJsonp([23],{145:function(n,l,e){"use strict";e.d(l,"a",function(){return t});e(2),e(40);var t=function(){function n(n,l,e,t){this.navCtrl=n,this.navParams=l,this.viewCtrl=e,this.modalCtrl=t,this.signaturePadOptions={minWidth:1,backgroundColor:"#ffffff",penColor:"#666a73"},this.signature="",this.signaturesArray=[],this.isDrawing=!1,this.total_signatures=this.navParams.get("signatures"),this.current_signature=this.navParams.get("current_signature"),console.log(this.total_signatures)}return n.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad SignaturePad")},n.prototype.canvasResize=function(){var n=document.querySelector("canvas"),l=Math.max(window.devicePixelRatio||1,1);n.width=n.offsetWidth*l,n.height=n.offsetHeight*l,n.getContext("2d").scale(l,l)},n.prototype.drawComplete=function(){this.isDrawing=!1},n.prototype.drawStart=function(){this.isDrawing=!0},n.prototype.clearSignaturePad=function(){this.signaturePad.clear()},n.prototype.saveSignature=function(){if(this.signature=this.signaturePad.toDataURL(),console.log(this.signature),this.signaturePad.clear(),this.current_signature>=this.total_signatures)return this.viewCtrl.dismiss({closeType:"thankyou",signatureData:this.signature}),console.log("IF"),!1;console.log("else"),this.viewCtrl.dismiss({closeType:"reopen",current_signature:this.current_signature,signatureData:this.signature})},n.prototype.clearPad=function(){this.signaturePad.clear()},n.prototype.dismiss=function(){this.viewCtrl.dismiss({closeType:"outside"})},n}()},155:function(n,l){function e(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id=155},180:function(n,l,e){function t(n){var l=o[n];return l?e.e(l[1]).then(function(){return e(l[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var o={"../pages/agree-use-company-chop/agree-use-company-chop.module.ngfactory":[257,22],"../pages/agree-use-telos/agree-use-telos.module.ngfactory":[258,21],"../pages/all-meetings/all-meetings.module.ngfactory":[259,10],"../pages/change-password-page/change-password-page.module.ngfactory":[260,20],"../pages/company-chop/company-chop.module.ngfactory":[261,15],"../pages/forum-page/forum-page.module.ngfactory":[279,9],"../pages/id-verification-1/id-verification-1.module.ngfactory":[262,14],"../pages/noticeboard/noticeboard.module.ngfactory":[263,3],"../pages/owner-hkid-number/owner-hkid-number.module.ngfactory":[264,19],"../pages/ownership/ownership.module.ngfactory":[265,13],"../pages/past-meetings/past-meetings.module.ngfactory":[266,2],"../pages/personal-details/personal-details.module.ngfactory":[267,12],"../pages/profile-page/profile-page.module.ngfactory":[268,8],"../pages/register/register.module.ngfactory":[269,11],"../pages/survey-list/survey-list.module.ngfactory":[270,1],"../pages/surveys/surveys.module.ngfactory":[271,7],"../pages/tabs/tabs.module.ngfactory":[272,18],"../pages/thank-you-note-2/thank-you-note-2.module.ngfactory":[273,17],"../pages/thank-you-note/thank-you-note.module.ngfactory":[274,16],"../pages/upcoming-meetings/upcoming-meetings.module.ngfactory":[275,0],"../pages/view-meeting-details/view-meeting-details.module.ngfactory":[276,6],"../pages/view-meeting-polls/view-meeting-polls.module.ngfactory":[277,5],"../pages/view-past-meeting-details/view-past-meeting-details.module.ngfactory":[278,4]};t.keys=function(){return Object.keys(o)},t.id=180,n.exports=t},217:function(n,l,e){"use strict";function t(n){return i["ɵvid"](0,[i["ɵqud"](402653184,1,{nav:0}),(n()(),i["ɵeld"](1,0,null,null,76,"ion-split-pane",[["when","xl"]],null,null,null,null,null)),i["ɵdid"](2,4341760,null,1,V.b,[i.NgZone,U.a,j.a,i.ElementRef,i.Renderer],{when:[0,"when"]},null),i["ɵqud"](603979776,2,{_setchildren:1}),i["ɵprd"](2048,[[2,4]],V.a,null,[V.b]),(n()(),i["ɵted"](-1,null,["\n    "])),(n()(),i["ɵeld"](6,0,null,null,66,"ion-menu",[["role","navigation"]],null,null,null,Z.b,Z.a)),i["ɵdid"](7,245760,null,2,z.a,[K.a,i.ElementRef,j.a,U.a,i.Renderer,W.a,Y.l,J.a,G.a],{content:[0,"content"]},null),i["ɵqud"](335544320,3,{menuContent:0}),i["ɵqud"](335544320,4,{menuNav:0}),i["ɵprd"](2048,[[2,4]],V.a,null,[z.a]),(n()(),i["ɵted"](-1,0,["\n        "])),(n()(),i["ɵeld"](12,0,null,0,7,"ion-header",[],null,null,null,null,null)),i["ɵdid"](13,16384,null,0,Q.a,[j.a,i.ElementRef,i.Renderer,[2,X.a]],null,null),(n()(),i["ɵted"](-1,null,["\n            "])),(n()(),i["ɵeld"](15,0,null,null,3,"div",[["class","header-background-image"]],null,null,null,null,null)),(n()(),i["ɵted"](-1,null,["\n                "])),(n()(),i["ɵeld"](17,0,null,null,0,"img",[["src","assets/images/logo/logo_white.png"]],null,null,null,null,null)),(n()(),i["ɵted"](-1,null,["\n            "])),(n()(),i["ɵted"](-1,null,["\n        "])),(n()(),i["ɵted"](-1,0,["\n\n        "])),(n()(),i["ɵeld"](21,0,null,0,50,"ion-content",[["color","primary"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,$.b,$.a)),i["ɵdid"](22,4374528,[[3,4]],0,nn.a,[j.a,U.a,J.a,i.ElementRef,i.Renderer,G.a,W.a,i.NgZone,[2,X.a],[2,ln.a]],{color:[0,"color"]},null),(n()(),i["ɵted"](-1,1,["\n            "])),(n()(),i["ɵeld"](24,0,null,1,14,"ion-list",[["no-margin",""]],null,null,null,null,null)),i["ɵdid"](25,16384,null,0,en.a,[j.a,i.ElementRef,i.Renderer,U.a,Y.l,J.a],null,null),(n()(),i["ɵted"](-1,null,["\n                "])),(n()(),i["ɵeld"](27,0,null,null,10,"button",[["class","item item-block"],["ion-item",""],["item-title",""],["main-menu",""],["menuClose",""],["no-lines",""],["paddinge-left",""]],null,[[null,"click"]],function(n,l,e){var t=!0,o=n.component;if("click"===l){t=!1!==i["ɵnov"](n,33).close()&&t}if("click"===l){t=!1!==o.openNoticeboard("Noticeboard")&&t}return t},tn.b,tn.a)),i["ɵdid"](28,1097728,null,3,on.a,[an.a,j.a,i.ElementRef,i.Renderer,[2,un.a]],null,null),i["ɵqud"](335544320,5,{contentLabel:0}),i["ɵqud"](603979776,6,{_buttons:1}),i["ɵqud"](603979776,7,{_icons:1}),i["ɵdid"](32,16384,null,0,rn.a,[],null,null),i["ɵdid"](33,16384,null,0,dn.a,[K.a],{menuClose:[0,"menuClose"]},null),(n()(),i["ɵted"](-1,2,["\n                    "])),(n()(),i["ɵeld"](35,0,null,0,1,"ion-icon",[["icon-small",""],["item-left",""],["name","ios-home-outline"],["role","img"]],[[2,"hide",null]],null,null,null,null)),i["ɵdid"](36,147456,[[7,4]],0,sn.a,[j.a,i.ElementRef,i.Renderer],{name:[0,"name"]},null),(n()(),i["ɵted"](-1,2,["\n                    主頁 | Home\n                "])),(n()(),i["ɵted"](-1,null,["\n            "])),(n()(),i["ɵted"](-1,1,["\n            "])),(n()(),i["ɵeld"](40,0,null,1,14,"ion-list",[["no-margin",""]],null,null,null,null,null)),i["ɵdid"](41,16384,null,0,en.a,[j.a,i.ElementRef,i.Renderer,U.a,Y.l,J.a],null,null),(n()(),i["ɵted"](-1,null,["\n                "])),(n()(),i["ɵeld"](43,0,null,null,10,"button",[["class","item item-block"],["ion-item",""],["item-title",""],["main-menu",""],["menuClose",""],["no-lines",""],["paddinge-left",""]],null,[[null,"click"]],function(n,l,e){var t=!0,o=n.component;if("click"===l){t=!1!==i["ɵnov"](n,49).close()&&t}if("click"===l){t=!1!==o.openProfilePage("ProfilePage")&&t}return t},tn.b,tn.a)),i["ɵdid"](44,1097728,null,3,on.a,[an.a,j.a,i.ElementRef,i.Renderer,[2,un.a]],null,null),i["ɵqud"](335544320,8,{contentLabel:0}),i["ɵqud"](603979776,9,{_buttons:1}),i["ɵqud"](603979776,10,{_icons:1}),i["ɵdid"](48,16384,null,0,rn.a,[],null,null),i["ɵdid"](49,16384,null,0,dn.a,[K.a],{menuClose:[0,"menuClose"]},null),(n()(),i["ɵted"](-1,2,["\n                    "])),(n()(),i["ɵeld"](51,0,null,0,1,"ion-icon",[["icon-small",""],["item-left",""],["name","ios-person-outline"],["role","img"]],[[2,"hide",null]],null,null,null,null)),i["ɵdid"](52,147456,[[10,4]],0,sn.a,[j.a,i.ElementRef,i.Renderer],{name:[0,"name"]},null),(n()(),i["ɵted"](-1,2,["\n                    我 | Profile\n                "])),(n()(),i["ɵted"](-1,null,["\n            "])),(n()(),i["ɵted"](-1,1,["\n            "])),(n()(),i["ɵeld"](56,0,null,1,14,"ion-list",[["no-margin",""]],null,null,null,null,null)),i["ɵdid"](57,16384,null,0,en.a,[j.a,i.ElementRef,i.Renderer,U.a,Y.l,J.a],null,null),(n()(),i["ɵted"](-1,null,["\n                "])),(n()(),i["ɵeld"](59,0,null,null,10,"button",[["class","item item-block"],["ion-item",""],["item-title",""],["main-menu",""],["menuClose",""],["no-lines",""],["paddinge-left",""]],null,[[null,"click"]],function(n,l,e){var t=!0,o=n.component;if("click"===l){t=!1!==i["ɵnov"](n,65).close()&&t}if("click"===l){t=!1!==o.doLogout()&&t}return t},tn.b,tn.a)),i["ɵdid"](60,1097728,null,3,on.a,[an.a,j.a,i.ElementRef,i.Renderer,[2,un.a]],null,null),i["ɵqud"](335544320,11,{contentLabel:0}),i["ɵqud"](603979776,12,{_buttons:1}),i["ɵqud"](603979776,13,{_icons:1}),i["ɵdid"](64,16384,null,0,rn.a,[],null,null),i["ɵdid"](65,16384,null,0,dn.a,[K.a],{menuClose:[0,"menuClose"]},null),(n()(),i["ɵted"](-1,2,["\n                    "])),(n()(),i["ɵeld"](67,0,null,0,1,"ion-icon",[["icon-small",""],["item-left",""],["name","ios-log-out-outline"],["role","img"]],[[2,"hide",null]],null,null,null,null)),i["ɵdid"](68,147456,[[13,4]],0,sn.a,[j.a,i.ElementRef,i.Renderer],{name:[0,"name"]},null),(n()(),i["ɵted"](-1,2,["\n                    登出 | Log Out\n                "])),(n()(),i["ɵted"](-1,null,["\n            "])),(n()(),i["ɵted"](-1,1,["\n        "])),(n()(),i["ɵted"](-1,0,["\n    "])),(n()(),i["ɵted"](-1,null,["\n\n    "])),(n()(),i["ɵeld"](74,0,null,null,2,"ion-nav",[["main",""],["swipeBackEnabled","false"]],null,null,null,cn.b,cn.a)),i["ɵdid"](75,4374528,[[1,4],["content",4]],0,gn.a,[[2,X.a],[2,ln.a],G.a,j.a,U.a,i.ElementRef,i.NgZone,i.Renderer,i.ComponentFactoryResolver,Y.l,pn.a,[2,mn.a],J.a,i.ErrorHandler],{swipeBackEnabled:[0,"swipeBackEnabled"],root:[1,"root"]},null),i["ɵprd"](2048,[[2,4]],V.a,null,[gn.a]),(n()(),i["ɵted"](-1,null,["\n"]))],function(n,l){var e=l.component;n(l,2,0,"xl");n(l,7,0,i["ɵnov"](l,75));n(l,22,0,"primary");n(l,33,0,"");n(l,36,0,"ios-home-outline");n(l,49,0,"");n(l,52,0,"ios-person-outline");n(l,65,0,"");n(l,68,0,"ios-log-out-outline");n(l,75,0,"false",e.rootPage)},function(n,l){n(l,21,0,i["ɵnov"](l,22).statusbarPadding,i["ɵnov"](l,22)._hasRefresher);n(l,35,0,i["ɵnov"](l,36)._hidden);n(l,51,0,i["ɵnov"](l,52)._hidden);n(l,67,0,i["ɵnov"](l,68)._hidden)})}function o(n){return i["ɵvid"](0,[(n()(),i["ɵeld"](0,0,null,null,88,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,$.b,$.a)),i["ɵdid"](1,4374528,null,0,nn.a,[j.a,U.a,J.a,i.ElementRef,i.Renderer,G.a,W.a,i.NgZone,[2,X.a],[2,ln.a]],null,null),(n()(),i["ɵted"](-1,1,["\n  "])),(n()(),i["ɵeld"](3,0,null,1,84,"ion-grid",[["class","bottom-div grid"]],null,null,null,null,null)),i["ɵdid"](4,16384,null,0,yn.a,[],null,null),(n()(),i["ɵted"](-1,null,["\n    "])),(n()(),i["ɵeld"](6,0,null,null,80,"ion-row",[["class","row"],["padding",""],["wrap",""]],null,null,null,null,null)),i["ɵdid"](7,16384,null,0,vn.a,[],null,null),(n()(),i["ɵted"](-1,null,["\n      "])),(n()(),i["ɵeld"](9,0,null,null,76,"ion-col",[["class","col"],["col-12",""],["col-lg-6",""],["col-md-12",""],["col-sm-12",""],["col-xl-6",""],["offset-lg-3",""],["offset-xl-3",""],["padding-bottom",""]],null,null,null,null,null)),i["ɵdid"](10,16384,null,0,bn.a,[],null,null),(n()(),i["ɵted"](-1,null,["\n        "])),(n()(),i["ɵted"](-1,null,["\n        "])),(n()(),i["ɵeld"](13,0,null,null,0,"img",[["src","./assets/images/logo/logo_white.png"],["style","margin-bottom:0px;"]],null,null,null,null,null)),(n()(),i["ɵted"](-1,null,["\n        "])),(n()(),i["ɵeld"](15,0,null,null,69,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var t=!0,o=n.component;if("submit"===l){t=!1!==i["ɵnov"](n,17).onSubmit(e)&&t}if("reset"===l){t=!1!==i["ɵnov"](n,17).onReset()&&t}if("ngSubmit"===l){t=!1!==o.doLoginFunction(i["ɵnov"](n,17))&&t}return t},null,null)),i["ɵdid"](16,16384,null,0,wn.q,[],null,null),i["ɵdid"](17,4210688,[["f",4]],0,wn.k,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),i["ɵprd"](2048,null,wn.b,null,[wn.k]),i["ɵdid"](19,16384,null,0,wn.j,[wn.b],null,null),(n()(),i["ɵted"](-1,null,["\n          "])),(n()(),i["ɵted"](-1,null,["\n          "])),(n()(),i["ɵeld"](22,0,null,null,18,"ion-item",[["class","item item-block"],["no-padding",""],["transparent",""]],null,null,null,tn.b,tn.a)),i["ɵdid"](23,1097728,null,3,on.a,[an.a,j.a,i.ElementRef,i.Renderer,[2,un.a]],null,null),i["ɵqud"](335544320,1,{contentLabel:0}),i["ɵqud"](603979776,2,{_buttons:1}),i["ɵqud"](603979776,3,{_icons:1}),i["ɵdid"](27,16384,null,0,rn.a,[],null,null),(n()(),i["ɵted"](-1,2,["\n            "])),(n()(),i["ɵeld"](29,0,null,1,2,"ion-label",[["floating",""],["no-margin",""]],null,null,null,null,null)),i["ɵdid"](30,16384,[[1,4]],0,Cn.a,[j.a,i.ElementRef,i.Renderer,[8,""],[8,null],[8,null],[8,null]],null,null),(n()(),i["ɵted"](-1,null,["用戶名 | USERNAME"])),(n()(),i["ɵted"](-1,2,["\n            "])),(n()(),i["ɵeld"](33,0,null,3,6,"ion-input",[["name","account"],["ngModel",""],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,Rn.b,Rn.a)),i["ɵdid"](34,16384,null,0,wn.o,[],{required:[0,"required"]},null),i["ɵprd"](1024,null,wn.f,function(n){return[n]},[wn.o]),i["ɵdid"](36,671744,null,0,wn.l,[[2,wn.b],[2,wn.f],[8,null],[8,null]],{name:[0,"name"],model:[1,"model"]},null),i["ɵprd"](2048,null,wn.h,null,[wn.l]),i["ɵdid"](38,16384,null,0,wn.i,[wn.h],null,null),i["ɵdid"](39,5423104,null,0,kn.a,[j.a,U.a,an.a,G.a,i.ElementRef,i.Renderer,[2,nn.a],[2,on.a],[2,wn.h],J.a],{type:[0,"type"]},null),(n()(),i["ɵted"](-1,2,["\n          "])),(n()(),i["ɵted"](-1,null,["\n          "])),(n()(),i["ɵted"](-1,null,["\n          "])),(n()(),i["ɵeld"](43,0,null,null,18,"ion-item",[["class","item item-block"],["no-padding",""],["transparent",""]],null,null,null,tn.b,tn.a)),i["ɵdid"](44,1097728,null,3,on.a,[an.a,j.a,i.ElementRef,i.Renderer,[2,un.a]],null,null),i["ɵqud"](335544320,4,{contentLabel:0}),i["ɵqud"](603979776,5,{_buttons:1}),i["ɵqud"](603979776,6,{_icons:1}),i["ɵdid"](48,16384,null,0,rn.a,[],null,null),(n()(),i["ɵted"](-1,2,["\n            "])),(n()(),i["ɵeld"](50,0,null,1,2,"ion-label",[["floating",""],["margin-top",""]],null,null,null,null,null)),i["ɵdid"](51,16384,[[4,4]],0,Cn.a,[j.a,i.ElementRef,i.Renderer,[8,""],[8,null],[8,null],[8,null]],null,null),(n()(),i["ɵted"](-1,null,["密碼 | PASSWORD"])),(n()(),i["ɵted"](-1,2,["\n            "])),(n()(),i["ɵeld"](54,0,null,3,6,"ion-input",[["name","password"],["ngModel",""],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,Rn.b,Rn.a)),i["ɵdid"](55,16384,null,0,wn.o,[],{required:[0,"required"]},null),i["ɵprd"](1024,null,wn.f,function(n){return[n]},[wn.o]),i["ɵdid"](57,671744,null,0,wn.l,[[2,wn.b],[2,wn.f],[8,null],[8,null]],{name:[0,"name"],model:[1,"model"]},null),i["ɵprd"](2048,null,wn.h,null,[wn.l]),i["ɵdid"](59,16384,null,0,wn.i,[wn.h],null,null),i["ɵdid"](60,5423104,null,0,kn.a,[j.a,U.a,an.a,G.a,i.ElementRef,i.Renderer,[2,nn.a],[2,on.a],[2,wn.h],J.a],{type:[0,"type"]},null),(n()(),i["ɵted"](-1,2,["\n          "])),(n()(),i["ɵted"](-1,null,["\n\n          "])),(n()(),i["ɵted"](-1,null,["\n          "])),(n()(),i["ɵeld"](64,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),i["ɵdid"](65,16384,null,0,vn.a,[],null,null),(n()(),i["ɵted"](-1,null,["\n            "])),(n()(),i["ɵeld"](67,0,null,null,7,"ion-col",[["class","col"],["col-12",""],["no-padding",""],["text-center",""]],null,null,null,null,null)),i["ɵdid"](68,16384,null,0,bn.a,[],null,null),(n()(),i["ɵted"](-1,null,["\n              "])),(n()(),i["ɵeld"](70,0,null,null,2,"button",[["button-clear-outline",""],["class","login-button"],["color","mytheme"],["ion-button",""],["outline",""],["round",""],["text-center",""],["type","submit"]],[[8,"disabled",0]],null,null,Pn.b,Pn.a)),i["ɵdid"](71,1097728,null,0,Nn.a,[[8,""],j.a,i.ElementRef,i.Renderer],{color:[0,"color"],outline:[1,"outline"],round:[2,"round"]},null),(n()(),i["ɵted"](-1,0,["登入 | Log In"])),(n()(),i["ɵted"](-1,null,["\n              "])),(n()(),i["ɵted"](-1,null,["\n            "])),(n()(),i["ɵted"](-1,null,["\n            "])),(n()(),i["ɵeld"](76,0,null,null,5,"ion-col",[["class","col"],["col-12",""],["no-padding",""],["text-center",""]],null,null,null,null,null)),i["ɵdid"](77,16384,null,0,bn.a,[],null,null),(n()(),i["ɵted"](-1,null,["\n              "])),(n()(),i["ɵeld"](79,0,null,null,1,"a",[["class","create-acc"]],null,[[null,"click"]],function(n,l,e){var t=!0;if("click"===l){t=!1!==n.component.goToRegister()&&t}return t},null,null)),(n()(),i["ɵted"](-1,null,["開新帳戶 | Create an account"])),(n()(),i["ɵted"](-1,null,["\n            "])),(n()(),i["ɵted"](-1,null,["\n          "])),(n()(),i["ɵted"](-1,null,["\n          "])),(n()(),i["ɵted"](-1,null,["\n        "])),(n()(),i["ɵted"](-1,null,["\n      "])),(n()(),i["ɵted"](-1,null,["\n    "])),(n()(),i["ɵted"](-1,null,["\n  "])),(n()(),i["ɵted"](-1,1,["\n"]))],function(n,l){n(l,34,0,"");n(l,36,0,"account","");n(l,39,0,"text");n(l,55,0,"");n(l,57,0,"password","");n(l,60,0,"password");n(l,71,0,"mytheme","","")},function(n,l){n(l,0,0,i["ɵnov"](l,1).statusbarPadding,i["ɵnov"](l,1)._hasRefresher);n(l,15,0,i["ɵnov"](l,19).ngClassUntouched,i["ɵnov"](l,19).ngClassTouched,i["ɵnov"](l,19).ngClassPristine,i["ɵnov"](l,19).ngClassDirty,i["ɵnov"](l,19).ngClassValid,i["ɵnov"](l,19).ngClassInvalid,i["ɵnov"](l,19).ngClassPending);n(l,33,0,i["ɵnov"](l,34).required?"":null,i["ɵnov"](l,38).ngClassUntouched,i["ɵnov"](l,38).ngClassTouched,i["ɵnov"](l,38).ngClassPristine,i["ɵnov"](l,38).ngClassDirty,i["ɵnov"](l,38).ngClassValid,i["ɵnov"](l,38).ngClassInvalid,i["ɵnov"](l,38).ngClassPending);n(l,54,0,i["ɵnov"](l,55).required?"":null,i["ɵnov"](l,59).ngClassUntouched,i["ɵnov"](l,59).ngClassTouched,i["ɵnov"](l,59).ngClassPristine,i["ɵnov"](l,59).ngClassDirty,i["ɵnov"](l,59).ngClassValid,i["ɵnov"](l,59).ngClassInvalid,i["ɵnov"](l,59).ngClassPending);n(l,70,0,!i["ɵnov"](l,17).valid)})}function a(n){return i["ɵvid"](0,[i["ɵqud"](402653184,1,{signaturePad:0}),(n()(),i["ɵeld"](1,0,null,null,59,"ion-content",[["class","main-view"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,$.b,$.a)),i["ɵdid"](2,4374528,null,0,nn.a,[j.a,U.a,J.a,i.ElementRef,i.Renderer,G.a,W.a,i.NgZone,[2,X.a],[2,ln.a]],null,null),(n()(),i["ɵted"](-1,1,["\n  "])),(n()(),i["ɵeld"](4,0,null,1,0,"div",[["class","overlay"]],null,[[null,"click"]],function(n,l,e){var t=!0;if("click"===l){t=!1!==n.component.dismiss()&&t}return t},null,null)),(n()(),i["ɵted"](-1,1,["\n  "])),(n()(),i["ɵted"](-1,1,["\n  "])),(n()(),i["ɵeld"](7,0,null,1,52,"div",[["class","modal_content"]],null,null,null,null,null)),(n()(),i["ɵted"](-1,null,["\n    "])),(n()(),i["ɵeld"](9,0,null,null,29,"ion-row",[["class","modal_inner_content row"]],null,null,null,null,null)),i["ɵdid"](10,16384,null,0,vn.a,[],null,null),(n()(),i["ɵted"](-1,null,["\n      "])),(n()(),i["ɵeld"](12,0,null,null,25,"ion-col",[["class","col"]],null,null,null,null,null)),i["ɵdid"](13,16384,null,0,bn.a,[],null,null),(n()(),i["ɵted"](-1,null,["\n        "])),(n()(),i["ɵeld"](15,0,null,null,1,"ion-icon",[["class","close-button"],["name","md-close"],["role","img"]],[[2,"hide",null]],[[null,"click"]],function(n,l,e){var t=!0;if("click"===l){t=!1!==n.component.dismiss()&&t}return t},null,null)),i["ɵdid"](16,147456,null,0,sn.a,[j.a,i.ElementRef,i.Renderer],{name:[0,"name"]},null),(n()(),i["ɵted"](-1,null,["\n        "])),(n()(),i["ɵeld"](18,0,null,null,5,"ion-row",[["class","row"]],null,null,null,null,null)),i["ɵdid"](19,16384,null,0,vn.a,[],null,null),(n()(),i["ɵted"](-1,null,["\n          "])),(n()(),i["ɵeld"](21,0,null,null,1,"p",[["class","agree-title"],["col-12",""],["style","margin-bottom:0;"],["text-center",""]],null,null,null,null,null)),(n()(),i["ɵted"](22,null,["Electronic Signature (","/",")"])),(n()(),i["ɵted"](-1,null,["\n        "])),(n()(),i["ɵted"](-1,null,["\n        "])),(n()(),i["ɵeld"](25,0,null,null,11,"ion-row",[["class","row"]],null,null,null,null,null)),i["ɵdid"](26,16384,null,0,vn.a,[],null,null),(n()(),i["ɵted"](-1,null,["\n          "])),(n()(),i["ɵeld"](28,0,null,null,7,"ion-col",[["border-bottom",""],["class","col"],["col-12",""]],null,null,null,null,null)),i["ɵdid"](29,278528,null,0,En.g,[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2],{ngClass:[0,"ngClass"]},null),i["ɵpod"](30,{"drawing-active":0}),i["ɵdid"](31,16384,null,0,bn.a,[],null,null),(n()(),i["ɵted"](-1,null,["\n            "])),(n()(),i["ɵeld"](33,0,null,null,1,"signature-pad",[["id","signatureCanvas"]],null,null,null,_n.b,_n.a)),i["ɵdid"](34,1097728,[[1,4]],0,Tn.SignaturePad,[i.ElementRef],{options:[0,"options"]},null),(n()(),i["ɵted"](-1,null,["\n          "])),(n()(),i["ɵted"](-1,null,["\n        "])),(n()(),i["ɵted"](-1,null,["\n      "])),(n()(),i["ɵted"](-1,null,["\n    "])),(n()(),i["ɵted"](-1,null,["\n    "])),(n()(),i["ɵeld"](40,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),i["ɵdid"](41,16384,null,0,vn.a,[],null,null),(n()(),i["ɵted"](-1,null,["\n      "])),(n()(),i["ɵeld"](43,0,null,null,6,"ion-col",[["class","col"],["text-center",""]],null,null,null,null,null)),i["ɵdid"](44,16384,null,0,bn.a,[],null,null),(n()(),i["ɵted"](-1,null,["\n        "])),(n()(),i["ɵeld"](46,0,null,null,2,"button",[["button-clear-outline",""],["class","next-button login-button"],["color","mytheme"],["ion-button",""],["outline",""],["round",""]],null,[[null,"click"]],function(n,l,e){var t=!0;if("click"===l){t=!1!==n.component.clearSignaturePad()&&t}return t},Pn.b,Pn.a)),i["ɵdid"](47,1097728,null,0,Nn.a,[[8,""],j.a,i.ElementRef,i.Renderer],{color:[0,"color"],outline:[1,"outline"],round:[2,"round"]},null),(n()(),i["ɵted"](-1,0,["Clear"])),(n()(),i["ɵted"](-1,null,["\n      "])),(n()(),i["ɵted"](-1,null,["\n      "])),(n()(),i["ɵeld"](51,0,null,null,6,"ion-col",[["class","col"],["text-center",""]],null,null,null,null,null)),i["ɵdid"](52,16384,null,0,bn.a,[],null,null),(n()(),i["ɵted"](-1,null,["\n        "])),(n()(),i["ɵeld"](54,0,null,null,2,"button",[["button-clear-outline",""],["class","next-button login-button"],["color","mytheme"],["ion-button",""],["outline",""],["round",""]],null,[[null,"click"]],function(n,l,e){var t=!0;if("click"===l){t=!1!==n.component.saveSignature()&&t}return t},Pn.b,Pn.a)),i["ɵdid"](55,1097728,null,0,Nn.a,[[8,""],j.a,i.ElementRef,i.Renderer],{color:[0,"color"],outline:[1,"outline"],round:[2,"round"]},null),(n()(),i["ɵted"](-1,0,["Submit"])),(n()(),i["ɵted"](-1,null,["\n      "])),(n()(),i["ɵted"](-1,null,["\n    "])),(n()(),i["ɵted"](-1,null,["\n  "])),(n()(),i["ɵted"](-1,1,["\n"]))],function(n,l){var e=l.component;n(l,16,0,"md-close");n(l,29,0,n(l,30,0,e.isDrawing));n(l,34,0,e.signaturePadOptions);n(l,47,0,"mytheme","","");n(l,55,0,"mytheme","","")},function(n,l){var e=l.component;n(l,1,0,i["ɵnov"](l,2).statusbarPadding,i["ɵnov"](l,2)._hasRefresher);n(l,15,0,i["ɵnov"](l,16)._hidden);n(l,22,0,e.current_signature,e.total_signatures)})}Object.defineProperty(l,"__esModule",{value:!0});var u=e(26),i=e(0),r=(e(2),e(31)),d=(e(40),e(83)),s=e(84),c=e(137),g=e(141),p=e(142),m=e(136),f=e(203),h=e(143),y=e(134),v=e(135),b=e(204),w=e(63),C=e(61),R=e(62),k=e(57),P=e(89),N=function(){function n(n,l,e,t){var o=this;this.menu=t,this.rootPage=P.a,n.ready().then(function(){l.styleBlackTranslucent(),e.hide(),o.menu.swipeEnable(!1)})}return n.prototype.openNoticeboard=function(n){console.log(n),this.menu.close(),localStorage.setItem("firstTabPage",n),this.nav.setRoot("Tabs")},n.prototype.openProfilePage=function(n){console.log(n),this.menu.close(),this.nav.setRoot(n)},n.prototype.doLogout=function(){this.nav.setRoot(P.a)},n}(),M=e(145),S=(e(45),function(){function n(n,l){this.http=n,this.storage=l}return n.prototype.signin=function(n,l){console.log(n,l)},n.prototype.login=function(n){},n}()),E=function(){function n(n,l){this.http=n,this.storage=l}return n.prototype.getUpcomingMeetings=function(){var n=this;return new Promise(function(l,e){n.http.get("http://localhost:3000/currentMeetings").subscribe(function(n){var e=n.json();l(e)},function(n){e(n)})})},n}(),_=function(){function n(n,l){this.http=n,this.storage=l,console.log("Hello NoticesProvider Provider")}return n.prototype.getNotices=function(){var n=this;return new Promise(function(l,e){n.http.get("http://localhost:3000/noticeBoard").subscribe(function(n){var e=n.json();l(e)},function(n){e(n)})})},n}(),T=function(){return function(){}}(),q=e(52),F=e(206),L=e(207),I=e(208),D=e(209),H=e(210),A=e(211),x=e(212),O=e(213),B=e(214),V=e(30),U=e(4),j=e(1),Z=e(254),z=e(76),K=e(23),W=e(22),Y=e(6),J=e(9),G=e(8),Q=e(86),X=e(5),$=e(85),nn=e(19),ln=e(21),en=e(48),tn=e(87),on=e(13),an=e(12),un=e(37),rn=e(47),dn=e(109),sn=e(36),cn=e(255),gn=e(56),pn=e(29),mn=e(17),fn=i["ɵcrt"]({encapsulation:2,styles:[],data:{}}),hn=i["ɵccf"]("ng-component",N,function(n){return i["ɵvid"](0,[(n()(),i["ɵeld"](0,0,null,null,1,"ng-component",[],null,null,null,t,fn)),i["ɵdid"](1,49152,null,0,N,[U.a,s.a,d.a,K.a],null,null)],null,null)},{},{},[]),yn=e(88),vn=e(60),bn=e(59),wn=e(16),Cn=e(42),Rn=e(215),kn=e(65),Pn=e(28),Nn=e(18),Mn=i["ɵcrt"]({encapsulation:2,styles:[],data:{}}),Sn=i["ɵccf"]("page-home",P.a,function(n){return i["ɵvid"](0,[(n()(),i["ɵeld"](0,0,null,null,1,"page-home",[],null,null,null,o,Mn)),i["ɵdid"](1,49152,null,0,P.a,[ln.a,C.a,R.a,w.a],null,null)],null,null)},{},{},[]),En=e(15),_n=e(256),Tn=e(82),qn=e(10),Fn=e(64),Ln=i["ɵcrt"]({encapsulation:2,styles:[],data:{}}),In=i["ɵccf"]("page-signature-pad",M.a,function(n){return i["ɵvid"](0,[(n()(),i["ɵeld"](0,0,null,null,1,"page-signature-pad",[],null,null,null,a,Ln)),i["ɵdid"](1,49152,null,0,M.a,[ln.a,qn.a,X.a,Fn.a],null,null)],null,null)},{},{},[]),Dn=e(112),Hn=e(91),An=e(103),xn=e(111),On=e(35),Bn=e(108),Vn=e(129),Un=e(54),jn=e(41),Zn=e(71),zn=e(119),Kn=e(114),Wn=e(125),Yn=e(205),Jn=e(202),Gn=e(113),Qn=e(110),Xn=e(115),$n=i["ɵcmf"](T,[q.b],function(n){return i["ɵmod"]([i["ɵmpd"](512,i.ComponentFactoryResolver,i["ɵCodegenComponentFactoryResolver"],[[8,[F.a,L.a,I.a,D.a,H.a,A.a,x.a,O.a,B.a,hn,Sn,In]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["ɵmpd"](5120,i.LOCALE_ID,i["ɵm"],[[3,i.LOCALE_ID]]),i["ɵmpd"](4608,En.k,En.j,[i.LOCALE_ID,[2,En.s]]),i["ɵmpd"](5120,i.APP_ID,i["ɵf"],[]),i["ɵmpd"](5120,i.IterableDiffers,i["ɵk"],[]),i["ɵmpd"](5120,i.KeyValueDiffers,i["ɵl"],[]),i["ɵmpd"](4608,u.c,u.q,[En.c]),i["ɵmpd"](6144,i.Sanitizer,null,[u.c]),i["ɵmpd"](4608,u.f,Dn.a,[]),i["ɵmpd"](5120,u.d,function(n,l,e,t,o){return[new u.k(n,l),new u.o(e),new u.n(t,o)]},[En.c,i.NgZone,En.c,En.c,u.f]),i["ɵmpd"](4608,u.e,u.e,[u.d,i.NgZone]),i["ɵmpd"](135680,u.m,u.m,[En.c]),i["ɵmpd"](4608,u.l,u.l,[u.e,u.m]),i["ɵmpd"](6144,i.RendererFactory2,null,[u.l]),i["ɵmpd"](6144,u.p,null,[u.m]),i["ɵmpd"](4608,i.Testability,i.Testability,[i.NgZone]),i["ɵmpd"](4608,u.h,u.h,[En.c]),i["ɵmpd"](4608,u.i,u.i,[En.c]),i["ɵmpd"](4608,r.c,r.c,[]),i["ɵmpd"](4608,r.g,r.b,[]),i["ɵmpd"](5120,r.i,r.j,[]),i["ɵmpd"](4608,r.h,r.h,[r.c,r.g,r.i]),i["ɵmpd"](4608,r.f,r.a,[]),i["ɵmpd"](5120,r.d,r.k,[r.h,r.f]),i["ɵmpd"](4608,wn.r,wn.r,[]),i["ɵmpd"](4608,wn.d,wn.d,[]),i["ɵmpd"](4608,Hn.a,Hn.a,[G.a,j.a]),i["ɵmpd"](4608,An.a,An.a,[G.a,j.a]),i["ɵmpd"](4608,xn.a,xn.a,[]),i["ɵmpd"](4608,an.a,an.a,[]),i["ɵmpd"](4608,On.a,On.a,[U.a]),i["ɵmpd"](4608,W.a,W.a,[j.a,U.a,i.NgZone,J.a]),i["ɵmpd"](4608,Bn.a,Bn.a,[G.a,j.a]),i["ɵmpd"](5120,En.f,Vn.c,[En.q,[2,En.a],j.a]),i["ɵmpd"](4608,En.e,En.e,[En.f]),i["ɵmpd"](5120,Un.b,Un.d,[G.a,Un.a]),i["ɵmpd"](5120,mn.a,mn.b,[G.a,Un.b,En.e,jn.b,i.ComponentFactoryResolver]),i["ɵmpd"](4608,Fn.a,Fn.a,[G.a,j.a,mn.a]),i["ɵmpd"](4608,Zn.a,Zn.a,[G.a,j.a]),i["ɵmpd"](4608,zn.a,zn.a,[G.a,j.a,mn.a]),i["ɵmpd"](4608,Kn.a,Kn.a,[j.a,U.a,J.a,G.a,Y.l]),i["ɵmpd"](4608,Wn.a,Wn.a,[G.a,j.a]),i["ɵmpd"](4608,pn.a,pn.a,[U.a,j.a]),i["ɵmpd"](5120,Yn.a,Yn.c,[Yn.b]),i["ɵmpd"](4608,s.a,s.a,[]),i["ɵmpd"](4608,d.a,d.a,[]),i["ɵmpd"](4608,c.a,c.a,[]),i["ɵmpd"](4608,h.a,h.a,[]),i["ɵmpd"](4608,p.a,p.a,[]),i["ɵmpd"](4608,w.a,w.a,[r.d,U.a,Wn.a,An.a]),i["ɵmpd"](4608,C.a,C.a,[r.d,Bn.a,u.c]),i["ɵmpd"](4608,R.a,R.a,[r.d]),i["ɵmpd"](4608,g.a,g.a,[]),i["ɵmpd"](4608,v.a,v.a,[]),i["ɵmpd"](4608,y.a,y.a,[]),i["ɵmpd"](4608,m.a,m.a,[]),i["ɵmpd"](4608,b.a,b.a,[]),i["ɵmpd"](4608,S,S,[r.d,Yn.a]),i["ɵmpd"](4608,E,E,[r.d,Yn.a]),i["ɵmpd"](4608,_,_,[r.d,Yn.a]),i["ɵmpd"](512,En.b,En.b,[]),i["ɵmpd"](512,i.ErrorHandler,Jn.a,[]),i["ɵmpd"](256,j.b,{backButtonText:""},[]),i["ɵmpd"](1024,Gn.a,Gn.b,[]),i["ɵmpd"](1024,U.a,U.b,[u.b,Gn.a,i.NgZone]),i["ɵmpd"](1024,j.a,j.c,[j.b,U.a]),i["ɵmpd"](512,J.a,J.a,[U.a]),i["ɵmpd"](512,K.a,K.a,[]),i["ɵmpd"](512,G.a,G.a,[j.a,U.a,[2,K.a]]),i["ɵmpd"](512,Y.l,Y.l,[G.a]),i["ɵmpd"](256,Un.a,{links:[{loadChildren:"../pages/agree-use-company-chop/agree-use-company-chop.module.ngfactory#AgreeUseCompanyChopModuleNgFactory",name:"AgreeUseCompanyChop",segment:"agree-use-company-chop",priority:"low",defaultHistory:[]},{loadChildren:"../pages/agree-use-telos/agree-use-telos.module.ngfactory#AgreeUseTelosModuleNgFactory",name:"AgreeUseTelos",segment:"agree-use-telos",priority:"low",defaultHistory:[]},{loadChildren:"../pages/all-meetings/all-meetings.module.ngfactory#IdVerification2ModuleNgFactory",name:"AllMeetingsPage",segment:"all-meetings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/change-password-page/change-password-page.module.ngfactory#ChangePasswordPageModuleNgFactory",name:"ChangePasswordPage",segment:"change-password-page",priority:"low",defaultHistory:[]},{loadChildren:"../pages/company-chop/company-chop.module.ngfactory#CompanyChopModuleNgFactory",name:"CompanyChop",segment:"company-chop",priority:"low",defaultHistory:[]},{loadChildren:"../pages/id-verification-1/id-verification-1.module.ngfactory#IdVerification1ModuleNgFactory",name:"IdVerification1",segment:"id-verification-1",priority:"low",defaultHistory:[]},{loadChildren:"../pages/noticeboard/noticeboard.module.ngfactory#NoticeboardModuleNgFactory",name:"Noticeboard",segment:"noticeboard",priority:"low",defaultHistory:[]},{loadChildren:"../pages/owner-hkid-number/owner-hkid-number.module.ngfactory#OwnerHkidNumberModuleNgFactory",name:"OwnerHkidNumber",segment:"owner-hkid-number",priority:"low",defaultHistory:[]},{loadChildren:"../pages/ownership/ownership.module.ngfactory#OwnershipModuleNgFactory",name:"Ownership",segment:"ownership",priority:"low",defaultHistory:[]},{loadChildren:"../pages/past-meetings/past-meetings.module.ngfactory#PastMeetingsModuleNgFactory",name:"PastMeetings",segment:"past-meetings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/personal-details/personal-details.module.ngfactory#PersonalDetailsModuleNgFactory",name:"PersonalDetails",segment:"personal-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/profile-page/profile-page.module.ngfactory#ProfilePageModuleNgFactory",name:"ProfilePage",segment:"profile-page",priority:"low",defaultHistory:[]},{loadChildren:"../pages/register/register.module.ngfactory#RegisterModuleNgFactory",name:"Register",segment:"register",priority:"low",defaultHistory:[]},{loadChildren:"../pages/survey-list/survey-list.module.ngfactory#SurveyListModuleNgFactory",name:"SurveyList",segment:"survey-list",priority:"low",defaultHistory:[]},{loadChildren:"../pages/surveys/surveys.module.ngfactory#SurveysModuleNgFactory",name:"Surveys",segment:"surveys",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tabs/tabs.module.ngfactory#TabsModuleNgFactory",name:"Tabs",segment:"tabs",priority:"low",defaultHistory:[]},{loadChildren:"../pages/thank-you-note-2/thank-you-note-2.module.ngfactory#ThankYouNote2ModuleNgFactory",name:"ThankYouNote2",segment:"thank-you-note-2",priority:"low",defaultHistory:[]},{loadChildren:"../pages/thank-you-note/thank-you-note.module.ngfactory#ThankYouNoteModuleNgFactory",name:"ThankYouNote",segment:"thank-you-note",priority:"low",defaultHistory:[]},{loadChildren:"../pages/upcoming-meetings/upcoming-meetings.module.ngfactory#UpcomingMeetingsModuleNgFactory",name:"UpcomingMeetings",segment:"upcoming-meetings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/view-meeting-details/view-meeting-details.module.ngfactory#ViewMeetingDetailsModuleNgFactory",name:"ViewMeetingDetails",segment:"view-meeting-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/view-meeting-polls/view-meeting-polls.module.ngfactory#ViewMeetingPollsModuleNgFactory",name:"ViewMeetingPolls",segment:"view-meeting-polls",priority:"low",defaultHistory:[]},{loadChildren:"../pages/view-past-meeting-details/view-past-meeting-details.module.ngfactory#ViewPastMeetingDetailsModuleNgFactory",name:"ViewPastMeetingDetails",segment:"view-past-meeting-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/forum-page/forum-page.module.ngfactory#ForumPageModuleNgFactory",name:"ForumPage",segment:"forum-page",priority:"low",defaultHistory:[]}]},[]),i["ɵmpd"](512,i.Compiler,i.Compiler,[]),i["ɵmpd"](512,Qn.a,Qn.a,[i.Compiler]),i["ɵmpd"](1024,jn.b,jn.c,[Qn.a,i.Injector]),i["ɵmpd"](1024,i.APP_INITIALIZER,function(n,l,e,t,o,a,i,r,d,s,c,g,p){return[u.s(n),Xn.a(l),xn.b(e,t),Kn.b(o,a,i,r,d),jn.d(s,c,g,p)]},[[2,i.NgProbeToken],j.a,U.a,J.a,j.a,U.a,J.a,G.a,Y.l,j.a,Un.a,jn.b,i.NgZone]),i["ɵmpd"](512,i.ApplicationInitStatus,i.ApplicationInitStatus,[[2,i.APP_INITIALIZER]]),i["ɵmpd"](131584,i.ApplicationRef,i.ApplicationRef,[i.NgZone,i["ɵConsole"],i.Injector,i.ErrorHandler,i.ComponentFactoryResolver,i.ApplicationInitStatus]),i["ɵmpd"](512,i.ApplicationModule,i.ApplicationModule,[i.ApplicationRef]),i["ɵmpd"](512,u.a,u.a,[[3,u.a]]),i["ɵmpd"](512,r.e,r.e,[]),i["ɵmpd"](512,f.SignaturePadModule,f.SignaturePadModule,[]),i["ɵmpd"](512,wn.p,wn.p,[]),i["ɵmpd"](512,wn.e,wn.e,[]),i["ɵmpd"](512,wn.n,wn.n,[]),i["ɵmpd"](512,Vn.a,Vn.a,[]),i["ɵmpd"](512,k.a,k.a,[]),i["ɵmpd"](512,T,T,[]),i["ɵmpd"](256,q.a,N,[]),i["ɵmpd"](256,En.a,"/",[]),i["ɵmpd"](256,Yn.b,null,[])])});Object(i.enableProdMode)(),Object(u.j)().bootstrapModuleFactory($n)},61:function(n,l,e){"use strict";e.d(l,"a",function(){return o});e(2);var t=e(45),o=(e.n(t),e(40),function(){function n(n,l,e){this.http=n,this.loadingCtrl=l,this.sanitizer=e}return n.prototype.showLoading=function(){this.safeSvg=this.sanitizer.bypassSecurityTrustHtml('<svg width="60" height="60" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#000000">\n    <g fill="none" fill-rule="evenodd" stroke-width="2">\n        <circle cx="22" cy="22" r="1">\n            <animate attributeName="r"\n                begin="0s" dur="1.8s"\n                values="1; 20"\n                calcMode="spline"\n                keyTimes="0; 1"\n                keySplines="0.165, 0.84, 0.44, 1"\n                repeatCount="indefinite" />\n            <animate attributeName="stroke-opacity"\n                begin="0s" dur="1.8s"\n                values="1; 0"\n                calcMode="spline"\n                keyTimes="0; 1"\n                keySplines="0.3, 0.61, 0.355, 1"\n                repeatCount="indefinite" />\n        </circle>\n        <circle cx="22" cy="22" r="1">\n            <animate attributeName="r"\n                begin="-0.9s" dur="1.8s"\n                values="1; 20"\n                calcMode="spline"\n                keyTimes="0; 1"\n                keySplines="0.165, 0.84, 0.44, 1"\n                repeatCount="indefinite" />\n            <animate attributeName="stroke-opacity"\n                begin="-0.9s" dur="1.8s"\n                values="1; 0"\n                calcMode="spline"\n                keyTimes="0; 1"\n                keySplines="0.3, 0.61, 0.355, 1"\n                repeatCount="indefinite" />\n        </circle>\n    </g>\n</svg>'),this.loading=this.loadingCtrl.create({showBackdrop:!1,spinner:"hide",content:this.safeSvg}),this.loading.present()},n.prototype.hideLoading=function(){this.loading.dismiss().catch(function(){})},n}())},62:function(n,l,e){"use strict";e.d(l,"a",function(){return o});e(2);var t=e(45),o=(e.n(t),function(){function n(n){this.http=n,this.BASE_URL="https://telos-residents.herokuapp.com/"}return n.prototype.getData=function(n,l){return this.http.get(this.BASE_URL+n,l).map(function(n){return n.json()})},n.prototype.postData=function(n,l,e){return this.http.post(this.BASE_URL+n,l,e).map(function(n){if(n.status<200||n.status>=300)throw new Error("This request has failed "+n.status);return n.json()},function(n){throw new Error("This request has failed"+n)})},n}())},63:function(n,l,e){"use strict";e.d(l,"a",function(){return o});e(2);var t=e(45),o=(e.n(t),e(40),function(){function n(n,l,e,t){this.http=n,this.platform=l,this.toastCtrl=e,this.alertCtrl=t}return n.prototype.showToastBottom=function(n){this.toastCtrl.create({message:n,duration:3e3,position:"bottom"}).present()},n.prototype.showToastTop=function(n){this.toastCtrl.create({message:n,duration:3e3,position:"top"}).present()},n.prototype.showToastMiddle=function(n){this.toastCtrl.create({message:n,duration:3e3,position:"middle"}).present()},n.prototype.showErrorAlert=function(n){this.alertCtrl.create({title:"Error",subTitle:n,buttons:["OK"]}).present()},n.prototype.showSuccessAlert=function(n,l){this.alertCtrl.create({title:n,subTitle:l,buttons:["OK"]}).present()},n.prototype.showToastWithBtn=function(n){this.toastCtrl.create({message:n,position:"bottom",showCloseButton:!0,closeButtonText:"Retry"}).present()},n}())},89:function(n,l,e){"use strict";e.d(l,"a",function(){return t});e(2),e(40);var t=function(){function n(n,l,e,t){this.navCtrl=n,this.loadingService=l,this.dataService=e,this.showMessage=t}return n.prototype.doLoginFunction=function(n){var l=this;this.loadingService.showLoading(),this.dataService.postData("login",n.value,{}).subscribe(function(n){1==n.success?(localStorage.setItem("token",n.token),localStorage.setItem("loginResponse",JSON.stringify(n)),console.log(n),1==n.user.registered?(localStorage.setItem("firstTabPage","Noticeboard"),l.navCtrl.push("Tabs").then(function(){l.loadingService.hideLoading()})):0==n.user.registered?"CorporateOwner"==n.user.nature?l.navCtrl.push("CompanyChop").then(function(){l.loadingService.hideLoading()}):(l.addOwnerInfoData(n.user.numberOfOwners),l.navCtrl.push("IdVerification1").then(function(){l.loadingService.hideLoading()})):l.loadingService.hideLoading()):(l.loadingService.hideLoading(),l.showMessage.showToastBottom(n.message))},function(n){console.log("err",n),l.loadingService.hideLoading(),l.showMessage.showToastBottom("Unable to login, please try again.")})},n.prototype.addOwnerInfoData=function(n){for(var l=[],e=0;e<n;e++)l.push(0==e?{is_visible:!0,image:""}:{is_visible:!1,image:""});var t=JSON.stringify(l);localStorage.setItem("owners_list",t)},n.prototype.goToRegister=function(){this.navCtrl.push("Ownership")},n}()}},[217]);