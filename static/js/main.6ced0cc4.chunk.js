(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(A,e,t){A.exports={status:"Status_status__3qH1m",anime:"Status_anime__37Yte",notStatus:"Status_notStatus__1QBO2"}},101:function(A,e,t){A.exports={aboutMe:"EditAboutMe_aboutMe__1UuqV",anime:"EditAboutMe_anime__1KA2-",buttons:"EditAboutMe_buttons__3WHuJ",LookingForAjob:"EditAboutMe_LookingForAjob__2CKxG"}},119:function(A,e,t){A.exports={Nav:"Nav_Nav__ucKIc",Logo:"Nav_Logo__2vyaK"}},123:function(A,e,t){A.exports={fieldError:"renderField_fieldError__38L3n",error:"renderField_error__2t9tl",field:"renderField_field__ghDQM"}},172:function(A,e,t){A.exports={search:"Search_search__XEWic"}},176:function(A,e,t){A.exports={AboutMe:"AboutMe_AboutMe__3dz7N",anime:"AboutMe_anime__33aEN"}},214:function(A,e,t){},25:function(A,e,t){A.exports={Avatar:"Users_Avatar__2fHtJ",Block:"Users_Block__bL9Fy",header:"Users_header__pHyNX",Pagination:"Users_Pagination__2ugnf",content:"Users_content__3zai0",users:"Users_users__2w3pg",preloader:"Users_preloader__27fAY",Follow:"Users_Follow__1CQ2R",Unfollow:"Users_Unfollow__dESpK",userName:"Users_userName__1YhxX",infoUser:"Users_infoUser__22ur7",elipsiss:"Users_elipsiss__3jLIx"}},352:function(A,e,t){"use strict";t.r(e);var n=t(0),a=t.n(n),r=t(22),c=t.n(r),s=(t(214),t(119)),i=t.n(s),o=t.p+"static/media/logo.41ae6d96.png",u=t(12),l=t(29),d=t(40),j=t.n(d),b=t(60),f=t(9),h=t(59),p=t(161),O=t.n(p).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"f5fb66df-ad46-41c5-8be0-2f9f986c6851"}}),m=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return O.get("users?page=".concat(A,"&count=",8,"&term=").concat(e))},x=function(A){return O.post("/follow/".concat(A))},g=function(A){return O.delete("/follow/".concat(A))},v=function(A){return O.get("profile/"+A).then((function(A){return A.data}))},P=function(A){return O.put("profile/status",{status:A}).then((function(A){return A.data}))},N=function(A){return O.get("profile/status/"+A).then((function(A){return A.data}))},y=function(A){return O.put("profile/photo",A,{headers:{"Content-Type":"multipart/form-data"}}).then((function(A){return A.data}))},S=function(A){return O.put("profile",A).then((function(A){return A.data}))},C=function(A,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return O.post("auth/login",{email:A,password:e,rememberMe:t,captcha:n}).then((function(A){return A.data}))},_=function(){return O.get("auth/me").then((function(A){return A.data}))},T=function(){return O.delete("auth/login").then((function(A){return A.data}))},M=function(){return O.get("/security/get-captcha-url").then((function(A){return A.data}))},w={ButtonDisabled:!1,isFetching:!1},k="FETCHING",I="BUTTONS-DISABLED";var E=function(A){return{type:"BUTTONS-DISABLED",data:A}},F=function(A){return{type:"FETCHING",data:A}},z="IS-AUTH",L="INIT-APP",W="CAPTCHA",B={id:null,login:null,email:null,isAuth:!1,initApp:!0,captcha:""},H=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case z:return Object(f.a)(Object(f.a)(Object(f.a)({},A),e.data),{},{isAuth:e.isAuth});case L:return Object(f.a)(Object(f.a)({},A),{},{initApp:e.initApp});case W:return Object(f.a)(Object(f.a)({},A),{},{captcha:e.url});default:return A}},U=function(A,e){return{type:z,data:A,isAuth:e}},K=function(A){return{type:L,initApp:A}},Z=function(A){return{type:W,url:A}},D=function(){var A=Object(b.a)(j.a.mark((function A(e){var t;return j.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,_();case 2:0===(t=A.sent).resultCode&&e(U(t.data,!0)),e(K(!1));case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),V=function(A){T().then((function(e){0==e.resultCode&&A(U({id:null,login:null,email:null},!1))}))},X=t(356),G=t(1),Y=Object(u.b)((function(A){return{isAuth:A.Auth.isAuth,UserName:A.Auth.login}}),(function(A){return{Logout:function(){return A(V)}}}))((function(A){var e=A.isAuth,t=A.UserName,n=A.Logout;return Object(G.jsxs)("nav",{className:i.a.Nav,children:[Object(G.jsx)("div",{className:i.a.Logo,children:Object(G.jsx)("img",{src:o})}),e?Object(G.jsxs)("div",{children:[Object(G.jsx)("span",{children:t}),Object(G.jsx)(X.a,{className:"Button",onClick:function(){n()},children:"logout"})]}):Object(G.jsx)(l.b,{to:"/login",children:Object(G.jsx)(X.a,{className:"Button",children:"Login"})})]})})),J=t(97),R=t.n(J),q=Object(u.b)((function(A){return{UserId:A.Auth.id}}),{})((function(A){var e=A.UserId;return Object(G.jsx)("div",{className:R.a.Menu,children:Object(G.jsxs)("ul",{children:[Object(G.jsx)("li",{children:Object(G.jsx)(l.b,{to:"/profile/"+e,activeClassName:R.a.Active,children:"Profile"})}),Object(G.jsx)("li",{children:Object(G.jsx)(l.b,{to:"/users",activeClassName:R.a.Active,children:"Users"})})]})})})),Q=t(14),$=t(16),AA=t(15),eA=function(A){return Object(u.b)((function(A){return{isAuth:A.Auth.isAuth}}))((function(e){return e.isAuth?Object(G.jsx)(A,{}):Object(G.jsx)(Q.a,{to:"/login"})}))},tA=t(56),nA="FOLLOW",aA="UNFOLLOW",rA="SET-USERS",cA="CHANGE-PAGE",sA={items:[],totalCount:0,currentPage:1};var iA=function(A){return{type:rA,data:A}},oA=function(A){return{type:cA,current:A}},uA=function(A,e){return{type:nA,userId:A,followed:e}},lA=function(A,e){return{type:aA,userId:A,followed:e}},dA=function(A,e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(E(!0)),n(F(!0)),t.next=4,m(A,e);case 4:a=t.sent,n(iA(a.data)),n(E(!1)),n(F(!1)),void 0!==A&&n(oA(A));case 9:case"end":return t.stop()}}),t)})));return function(A){return t.apply(this,arguments)}}()},jA=t(98),bA=t.n(jA),fA=Object(u.b)((function(A){return{TotalUsers:A.UsersPage.totalCount,CurrentPage:A.UsersPage.currentPage,ButtonDisabled:A.Utilits.ButtonDisabled}}),(function(A){return{getUsers:function(e,t){return A(dA(e,t))}}}))((function(A){var e=A.TotalUsers,t=A.startPage,a=A.endPage,r=A.updPagesLength,c=A.portionSize,s=A.term,i=A.CurrentPage,o=A.getUsers,u=A.ButtonDisabled,l=A.updCurrent,d=Math.ceil(e/8),j=Object(n.useState)([]),b=Object($.a)(j,2),f=b[0],h=b[1];Object(n.useEffect)((function(){for(var A=[],e=t;e<=a;e++)A.push(e);h(A)}),[t,a]);return Object(G.jsxs)("div",{children:[1!=t&&Object(G.jsx)("button",{className:bA.a.Prev,onClick:function(){t>1&&r({startPage:t-c,endPage:a-c})},children:"Prev"}),Object(G.jsx)("span",{children:f.filter((function(A){return A<=d})).map((function(A,e,t){return t.length>1&&Object(G.jsx)("button",{disabled:u,onClick:function(){return o(e=A,s),void l(e);var e},className:i===A?bA.a.ActivePage:bA.a.margin,children:A},A)}))}),Object(G.jsx)("span",{children:a<=d&&Object(G.jsx)("button",{onClick:function(){a<d&&r({startPage:t+c,endPage:a+c})},children:"Next"})})]})})),hA=t.p+"static/media/Spinner.fee6e1db.gif",pA=function(){return Object(G.jsx)("div",{className:"preloader",children:Object(G.jsx)("div",{children:Object(G.jsx)("img",{src:hA})})})},OA=t(158),mA=t(159),xA=t(61),gA=t(123),vA=t.n(gA),PA=t(11),NA=t.n(PA),yA=t(358),SA=function(A){var e=A.type,t=A.placeholder,n=A.input,a=A.meta,r=a.error,c=a.touched;return Object(G.jsx)("span",{className:NA()(vA.a.field),children:Object(G.jsx)(yA.a,{color:"red",visible:!(!c||!r),placement:"right",title:r,children:Object(G.jsx)("input",Object(f.a)(Object(f.a)({className:NA()(Object(xA.a)({},vA.a.fieldError,r))},n),{},{type:e,placeholder:t}))})})},CA=t(172),_A=t.n(CA),TA=Object(mA.a)({form:"search"})((function(A){var e=A.handleSubmit;return Object(G.jsx)("div",{className:_A.a.search,children:Object(G.jsxs)("form",{onSubmit:e,children:[Object(G.jsx)(OA.a,{name:"term",component:SA,placeholder:"Username"}),Object(G.jsx)("button",{type:"submit",children:"Search"})]})})})),MA=t(25),wA=t.n(MA),kA="data:image/jpeg;base64,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",IA=t(55),EA=Object(AA.d)(eA,Object(u.b)((function(A){return{users:A.UsersPage.items,isFetching:A.Utilits.isFetching,isAuth:A.Auth.isAuth,currentPage:A.UsersPage.currentPage}}),(function(A){return{getUsers:function(e,t){return A(dA(e,t))}}})))((function(A){var e=A.getUsers,t=A.isFetching,a=A.users,r=A.currentPage,c=Object(IA.d)("page",IA.a),s=Object($.a)(c,2),i=s[0],o=s[1],d=Object(IA.d)("term",IA.c),j=Object($.a)(d,2),b=j[0],f=j[1],h=Object(n.useState)({startPage:1,endPage:10}),p=Object($.a)(h,2),O=p[0],m=O.startPage,v=O.endPage,P=p[1];console.log(b),Object(n.useEffect)((function(){e(i,b),o(r)}),[]);var N=Object(u.c)(),y=function(A,e){var t=e.target;N(function(A,e){return function(t){e.disabled=!0,x(A).then((function(){return t(uA(A,!0))})).catch((function(A){return alert(A)})).finally((function(){return e.disabled=!1}))}}(A,t))},S=function(A,e){var t=e.target;N(function(A,e){return function(t){e.disabled=!0,g(A).then((function(){return t(lA(A,!1))})).catch((function(A){return alert(A)})).finally((function(){return e.disabled=!1}))}}(A,t))};return Object(G.jsxs)("div",{children:[Object(G.jsxs)("div",{className:wA.a.header,children:[Object(G.jsx)(TA,{onSubmit:function(A){e(void 0,A.term),A.term?f(A.term):f(void 0),P({startPage:1,endPage:10}),N(oA(1)),o(r)},initialValues:{term:b}}),Object(G.jsx)("div",{className:wA.a.Pagination,children:Object(G.jsx)(fA,{term:b,startPage:m,endPage:v,updPagesLength:P,portionSize:10,updCurrent:o})})]}),Object(G.jsx)("div",{className:wA.a.content,children:Object(G.jsx)("div",{className:wA.a.users,children:t?Object(G.jsx)("span",{className:wA.a.preloader,children:Object(G.jsx)(pA,{})}):a.map((function(A){return Object(G.jsxs)("div",{className:wA.a.Block,children:[Object(G.jsx)("span",{children:Object(G.jsx)("img",{src:A.photos.small?A.photos.small:kA,className:wA.a.Avatar})}),Object(G.jsxs)("div",{className:wA.a.infoUser,children:[Object(G.jsx)(l.b,{to:"profile/"+A.id,children:Object(G.jsx)("p",{className:wA.a.userName,children:A.name})}),Object(G.jsx)("span",{className:wA.a.elipsiss,children:A.status}),A.followed?Object(G.jsx)("button",{className:wA.a.Unfollow,onClick:function(e){return S(A.id,e)},children:"Unfollow"}):Object(G.jsx)("button",{className:wA.a.Follow,onClick:function(e){return y(A.id,e)},children:"Follow"})]})]})}))})})]})})),FA=t(184),zA=function(A){if(!A)return"error, please fill in the required field"},LA=function(A){return function(e){if(e.length>A)return"error, max lenght ".concat(A)}},WA=function(A){return A&&A.length>20?"error, max length 20":A&&!/^(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i.test(A)?"Not valid url":void 0},BA=t(67),HA=t.n(BA),UA=["handleSubmit","captcha"],KA=LA(32),ZA=Object(mA.a)({form:"login"})((function(A){var e=A.handleSubmit,t=A.captcha,n=Object(FA.a)(A,UA);return Object(G.jsxs)("form",{onSubmit:e,children:[Object(G.jsxs)("div",{className:NA()(HA.a.login,Object(xA.a)({},HA.a.loginWcaptcha,t)),children:[Object(G.jsx)(OA.a,{validate:[zA,KA],name:"email",component:SA,placeholder:"Username"}),Object(G.jsx)(OA.a,{validate:zA,name:"password",component:SA,placeholder:"Password",type:"password"}),Object(G.jsxs)("span",{className:HA.a.RememberMe,children:[Object(G.jsx)("span",{children:"RememberMe"}),Object(G.jsx)(OA.a,{name:"rememberMe",component:SA,type:"checkbox"})]}),t&&Object(G.jsx)("span",{className:HA.a.captcha,children:Object(G.jsx)("img",{src:t})}),t&&Object(G.jsx)("span",{children:Object(G.jsx)(OA.a,{validate:[zA],name:"captcha",component:SA,placeholder:"enter captcha"})}),Object(G.jsx)("button",{className:"Button",type:"submit",children:"Login"})]}),Object(G.jsx)("div",{className:HA.a.error,children:n.error})]})})),DA=Object(u.b)((function(A){return{isAuth:A.Auth.isAuth,userId:A.Auth.id,isFetching:A.Utilits.isFetching,captcha:A.Auth.captcha}}),(function(A){return{Login:function(e){return A(function(A){return function(e){e(F(!0)),C(A.email,A.password,A.rememberMe,A.captcha).then((function(A){0==A.resultCode&&(e(D),e(F(!1))),1==A.resultCode&&(e(F(!1)),e(Object(h.a)("login",{_error:A.messages[0]}))),10==A.resultCode&&(e(F(!1)),M().then((function(A){return e(Z(A.url))})))}))}}(e))}}}))((function(A){var e=A.Login,t=A.isAuth,n=A.userId,a=A.isFetching,r=A.captcha;return t?Object(G.jsx)(Q.a,{to:"/profile/"+n}):a?Object(G.jsx)(pA,{}):Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{children:Object(G.jsx)("h1",{children:"Login"})}),Object(G.jsx)(ZA,{captcha:r,onSubmit:function(A){e(A)}})]})})),VA=t(174),XA=t(175),GA=t(183),YA=t(180),JA=t(57),RA=t.n(JA),qA={posts:[{id:1,text:"Hi bro"},{id:2,text:"dsadasdasd"},{id:3,text:"dasdasdas"},{id:4,text:"dsadasdsa"},{id:5,text:"dsadasdsa"},{id:6,text:"dsadasdsa"},{id:7,text:"dsadasdsa"},{id:8,text:"dsadasdsa"}],messageText:"Hello",profile:{aboutMe:"",contacts:{facebook:null,website:null,vk:null,twitter:null,instagram:null,youtube:null,github:null,mainLink:null},lookingForAJob:!1,lookingForAJobDescription:null,fullName:"",userId:-1,photos:{small:null,large:null}},status:""};var QA=function(A){return{type:"SET-STATE-PROFILE",data:A}},$A=function(A){return{type:"SET-STATUS",data:A}},Ae=function(A){return function(e){v(A).then((function(A){return e(QA(A))}))}},ee=t(100),te=t.n(ee),ne=a.a.memo((function(A){var e=A.userId,t=A.status,a=A.updStatus,r=A.isOwner,c=Object(n.useState)(!1),s=Object($.a)(c,2),i=s[0],o=s[1],u=Object(n.useState)(t),l=Object($.a)(u,2),d=l[0],j=l[1];Object(n.useEffect)((function(){j(t)}),[t]);return Object(G.jsxs)("div",{className:te.a.status,children:[r?i?Object(G.jsx)("input",{style:{textAlign:"center"},onChange:function(A){A.target.value.length<30&&j(A.target.value)},onBlur:function(){o(!1),a(d,e)},autoFocus:!0,value:d}):Object(G.jsx)("span",{onDoubleClick:function(){o(!0)},children:t||Object(G.jsx)("span",{className:te.a.notStatus,children:"(status not set)"})}):t||Object(G.jsx)("span",{className:te.a.notStatus,children:"(status not set)"}),r&&Object(G.jsx)("p",{children:"(double click to update status)"})]})})),ae=Object(u.b)((function(A){return{userId:A.Auth.id,status:A.ProfilePage.status}}),(function(A){return{updStatus:function(e,t){return A(function(A,e){return function(t){P(A).then((function(){return N(e).then((function(A){return t($A(A))}))}))}}(e,t))}}}))(ne),re=t(176),ce=t.n(re),se=function(A){var e=A.contacts;return Object(G.jsx)("div",{children:Object.keys(e).map((function(A){return e[A]&&Object(G.jsxs)("div",{children:[Object(G.jsxs)("span",{children:[A,":"]}),Object(G.jsx)("a",{href:"https://"+e[A],children:e[A]})]})}))})},ie=function(A){var e=A.profile;return Object(G.jsx)("div",{className:ce.a.AboutMe,children:Object(G.jsxs)("ul",{children:[Object(G.jsxs)("li",{children:[Object(G.jsx)("span",{children:"About Me:"}),e.aboutMe]}),Object(G.jsxs)("li",{children:[Object(G.jsx)("span",{children:"Looking for a job:"}),e.lookingForAJob?"yes":"no"]}),Object(G.jsxs)("li",{children:[Object(G.jsx)("span",{children:"Description:"}),e.lookingForAJobDescription]}),Object(G.jsx)(se,{contacts:e.contacts})]})})},oe=t(101),ue=t.n(oe),le=LA(20),de=LA(50),je=Object(mA.a)({form:"edit-aboutMe"})((function(A){var e=A.profile,t=A.handleSubmit,n=A.closeAboutMe,a=A.isFetching;return Object(G.jsx)("form",{onSubmit:t,children:Object(G.jsxs)("div",{className:ue.a.aboutMe,children:[Object(G.jsx)(OA.a,{validate:[zA,le],name:"fullName",placeholder:"Full name",component:SA,type:"text"}),Object(G.jsx)(OA.a,{validate:[zA,de],name:"aboutMe",placeholder:"About me",component:SA,type:"text"}),Object(G.jsxs)("span",{className:ue.a.LookingForAjob,children:[Object(G.jsx)("span",{style:{marginRight:"10px"},children:"looking For A Job:"}),Object(G.jsx)(OA.a,{name:"lookingForAJob",component:SA,type:"checkbox"})]}),Object(G.jsx)(OA.a,{validate:[zA,de],name:"lookingForAJobDescription",placeholder:"Description",component:SA,type:"text"}),Object.keys(e.contacts).map((function(A){return Object(G.jsx)(OA.a,{validate:WA,name:"contacts."+A,placeholder:A,component:SA,type:"text"},A)})),a?Object(G.jsx)(pA,{}):Object(G.jsxs)("div",{className:ue.a.buttons,children:[Object(G.jsx)("button",{type:"submit",children:"Save"}),Object(G.jsx)("button",{onClick:n,children:"Close"})]})]})})})),be=t(42),fe=t.n(be),he=Object(u.b)((function(A){return{userId:A.Auth.id,isFetching:A.Utilits.isFetching}}),(function(A){return{updProfilePhoto:function(e,t){return A(function(A,e){return function(t){return new Promise(function(){var n=Object(b.a)(j.a.mark((function n(a){var r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(F(!0)),n.next=4,y(A);case 4:r=n.sent,t(Ae(e)),a(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),window.alert(n.t0.response.status);case 12:return n.prev=12,t(F(!1)),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(A){return n.apply(this,arguments)}}())}}(e,t))}}}))((function(A){var e=A.modal,t=A.updModal,r=A.userId,c=A.updProfilePhoto,s=A.isFetching,i=a.a.createRef(),o=Object(n.useState)([]),u=Object($.a)(o,2),l=u[0],d=u[1];return Object(G.jsx)("div",{className:e?NA()(fe.a.Modal,fe.a.ModalActive):fe.a.Modal,children:Object(G.jsx)("div",{className:e?NA()(fe.a.ModalContent,fe.a.ModalContentActive):fe.a.ModalContent,children:s?Object(G.jsx)(pA,{}):Object(G.jsxs)("div",{className:fe.a.content,children:[Object(G.jsx)("input",{ref:i,type:"file"}),Object(G.jsx)("span",{children:l}),Object(G.jsxs)("div",{className:fe.a.buttons,children:[Object(G.jsx)("button",{onClick:function(){var A=new FormData;A.append("image",i.current.files[0]),c(A,r).then((function(A){0==A.resultCode&&t(!1),d(A.messages)}))},children:"Accept"}),Object(G.jsx)("button",{onClick:function(){t(!1),d([])},children:"Close"})]})]})})})})),pe=function(A){var e=A.profile,t=A.updProfile,a=A.isFetching,r=A.userId,c=Object(n.useState)(!1),s=Object($.a)(c,2),i=s[0],o=s[1],u=Object(n.useState)(!1),l=Object($.a)(u,2),d=l[0],j=l[1],b=Object(n.useState)(!1),f=Object($.a)(b,2),h=f[0],p=f[1];Object(n.useEffect)((function(){e.userId===r?p(!0):p(!1)}),[e.userId]);return Object(G.jsxs)("div",{children:[Object(G.jsx)(he,{modal:d,updModal:j}),Object(G.jsxs)("div",{className:RA.a.Profile,children:[Object(G.jsxs)("div",{className:RA.a.Avatar,children:[Object(G.jsx)("h2",{children:e.fullName}),Object(G.jsxs)("div",{className:RA.a.ImageSettings,children:[h&&Object(G.jsxs)("svg",{className:RA.a.svg,onClick:function(){return j(!0)},width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(G.jsx)("title",{children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e"}),Object(G.jsx)("path",{d:"M13.325 15.775a4 4 0 1 1 1.662-1.114l1.314 1.843a5.267 5.267 0 0 1 2.289.236l1.058-1.765c-2.153-1.683-2.19-4.248 0-5.95l-1.05-1.75C15.9 8.248 13.522 6.864 13.076 4h-2.15C10.48 6.833 8.127 8.263 5.4 7.276l-1.05 1.75c2.154 1.682 2.19 4.247.001 5.95l1.05 1.75c2.699-.974 5.077.41 5.523 3.274H14a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1c0-2.344-1.5-3.217-3.524-2.12a1 1 0 0 1-1.334-.366l-2-3.335a1 1 0 0 1 .382-1.393c1.956-1.06 1.927-2.528 0-3.572a1 1 0 0 1-.382-1.393l2-3.335a1 1 0 0 1 1.334-.365C7.524 6.23 9 5.318 9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1c0 2.344 1.5 3.217 3.524 2.12a1 1 0 0 1 1.334.366l2 3.335a1 1 0 0 1-.382 1.393c-1.956 1.06-1.927 2.528 0 3.572a1 1 0 0 1 .382 1.393l-2 3.335a1 1 0 0 1-1.334.365c-.734-.397-1.664-.525-2.356-.307a1 1 0 0 1-1.115-.373l-1.728-2.424zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"})]}),Object(G.jsx)("img",{src:null==e.photos.large?kA:e.photos.large})]}),Object(G.jsx)(ae,{isOwner:h})]}),Object(G.jsxs)("div",{className:RA.a.AboutMe,children:[i?Object(G.jsx)(je,{isFetching:a,closeAboutMe:function(){return o(!1)},initialValues:e,profile:e,onSubmit:function(A){t(A,e.userId).then((function(A){0==A.resultCode&&o(!1)})).catch((function(A){alert(A.response)}))}}):Object(G.jsx)(ie,{profile:e}),!i&&h&&Object(G.jsx)("button",{className:RA.a.editButton,onClick:function(){o(!0)},children:"Edit profile"})]})]})]})},Oe=function(A){Object(GA.a)(t,A);var e=Object(YA.a)(t);function t(){return Object(VA.a)(this,t),e.apply(this,arguments)}return Object(XA.a)(t,[{key:"setProfile",value:function(A){this.props.setStateProfile(A),this.props.getStatus(A)}},{key:"componentDidMount",value:function(){this.setProfile(parseInt(this.props.match.params.userID))}},{key:"componentDidUpdate",value:function(A){this.props.match.params.userID!=A.match.params.userID&&this.setProfile(parseInt(this.props.match.params.userID))}},{key:"render",value:function(){return Object(G.jsx)("div",{children:Object(G.jsx)(pe,{userId:this.props.userId,profile:this.props.profile,updProfile:this.props.updProfile,isFetching:this.props.isFetching})})}}]),t}(a.a.Component),me=Object(AA.d)(eA,Q.g,Object(u.b)((function(A){return{profile:A.ProfilePage.profile,Status:A.ProfilePage.status,isFetching:A.Utilits.isFetching,userId:A.Auth.id}}),(function(A){return{setStateProfile:function(e){return A(Ae(e))},getStatus:function(e){return A(function(A){return function(e){N(A).then((function(A){return e($A(A))}))}}(e))},updProfile:function(e,t){return A(function(A,e){return function(t){return new Promise((function(n,a){t(F(!0)),S(A).then((function(A){t(Ae(e)),n(A)})).catch((function(A){return a(A)})).then((function(){return t(F(!1))}))}))}}(e,t))}}})))(Oe),xe=t(357),ge=(t(351),{items:[]}),ve="INIT-CHAT",Pe="NULL-CHAT",Ne=function(A){return{type:ve,payload:A}},ye=function(){return{type:Pe}},Se=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ve:return Object(f.a)(Object(f.a)({},A),{},{items:[].concat(Object(tA.a)(A.items),Object(tA.a)(e.payload))});case Pe:return Object(f.a)(Object(f.a)({},A),{},{items:[]});default:return A}},Ce=function(A){return A.Chat},_e=function(A){return A.Auth.id},Te=t(360),Me=t(359),we=function(){var A=Object(n.useRef)(null),e=function(e){var t;N(Ne(JSON.parse(e.data))),null===(t=A.current)||void 0===t||t.scrollIntoView()},t=Object(n.useState)(""),a=Object($.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(!0),i=Object($.a)(s,2),o=i[0],l=i[1],d=Object(n.useState)(!0),j=Object($.a)(d,2),b=j[0],f=j[1],h=Object(n.useState)(!1),p=Object($.a)(h,2),O=p[0],m=p[1],x=Object(n.useState)(!1),g=Object($.a)(x,2),v=g[0],P=g[1],N=Object(u.c)(),y=Object(u.d)(Ce),S=Object(u.d)(_e);Object(n.useEffect)((function(){var A=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");return A.onopen=function(){l(!1),f(!1)},A.addEventListener("message",e),function(){N(ye()),A.removeEventListener("message",e)}}),[]);return Object(G.jsx)("div",{className:"Chat_wrapper",children:v?Object(G.jsxs)("div",{className:"Chat",children:[Object(G.jsxs)("div",{className:"Chat_title",children:[Object(G.jsx)("h2",{children:"Online chat"}),Object(G.jsx)("span",{children:Object(G.jsx)(Me.a,{onClick:function(){return P(!1)}})})]}),Object(G.jsxs)("div",{className:"Messages_container",children:[b?Object(G.jsx)(pA,{}):Object(G.jsx)("div",{className:"Chat_messages",children:y.items.map((function(A){return A.userId==S?Object(G.jsxs)("span",{className:"Chat_message",children:[Object(G.jsxs)("div",{className:"myMessage_container",children:[Object(G.jsx)("span",{children:A.userName}),Object(G.jsx)("img",{src:A.photo})]}),Object(G.jsx)("div",{className:"myMessage",children:Object(G.jsx)("div",{className:"myMessage_background",children:Object(G.jsx)("span",{children:A.message})})})]}):Object(G.jsxs)("span",{className:"Chat_message",children:[Object(G.jsx)("span",{style:{marginRight:"10px"},children:Object(G.jsx)("img",{src:A.photo})}),Object(G.jsx)("span",{className:"userName",children:A.userName}),Object(G.jsx)("div",{className:"message",children:Object(G.jsx)("div",{className:"message_background",children:Object(G.jsx)("span",{children:A.message})})})]})}))}),Object(G.jsx)("div",{ref:A})]}),Object(G.jsxs)("div",{className:"Chat_footer",children:[Object(G.jsx)("input",{onChange:function(A){c(A.target.value)},value:r}),O?Object(G.jsx)(pA,{}):"",Object(G.jsx)("button",{disabled:o,onClick:function(){if(r){m(!0);var A=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");A.onopen=function(){A.send(r),c(""),m(!1)}}},children:"send"})]})]}):Object(G.jsx)("div",{className:"Chat_icon",children:Object(G.jsx)(Te.a,{style:{fontSize:"50px"},onClick:function(){return P(!0)}})})})},ke=xe.a.Header,Ie=xe.a.Content,Ee=(xe.a.Footer,xe.a.Sider),Fe=Object(u.b)((function(A){return{initApp:A.Auth.initApp,userId:A.Auth.id,isAuth:A.Auth.isAuth}}),(function(A){return{Auth:function(){return A(D)}}}))((function(A){var e=A.Auth,t=A.initApp,a=A.userId,r=A.isAuth;return Object(n.useEffect)((function(){e()}),[a]),t?Object(G.jsx)(pA,{}):Object(G.jsx)(l.a,{children:Object(G.jsx)(IA.b,{ReactRouterRoute:Q.b,children:Object(G.jsxs)("div",{className:"container",children:[Object(G.jsxs)(xe.a,{style:{backgroundColor:"#f5f5f5"},children:[Object(G.jsx)(ke,{style:{height:"100px",backgroundColor:"#5d8aa8",boxShadow:"0px 5px 5px grey",marginBottom:"20px"},children:Object(G.jsx)(Y,{})}),Object(G.jsxs)(xe.a,{style:{backgroundColor:"#f5f5f5"},children:[Object(G.jsx)(Ee,{className:"Menu",children:Object(G.jsx)(q,{})}),Object(G.jsx)(xe.a,{style:{padding:"0 24px 24px",backgroundColor:"#f5f5f5"},children:Object(G.jsx)(Ie,{style:{padding:"50px"},children:Object(G.jsxs)(Q.d,{children:[Object(G.jsx)(Q.a,{exact:!0,path:"/",to:"/profile/"+a}),Object(G.jsx)(Q.a,{exact:!0,path:"/profile/",to:"/profile/"+a}),Object(G.jsx)(Q.b,{path:"/profile/:userID",render:function(){return Object(G.jsx)(me,{})}}),Object(G.jsx)(Q.b,{path:"/users",render:function(){return Object(G.jsx)(EA,{})}}),Object(G.jsx)(Q.b,{path:"/login",render:function(){return Object(G.jsx)(DA,{})}})]})})})]})]}),r&&Object(G.jsx)(we,{})]})})})})),ze={dialogs:[{id:1,nameDialog:"Omar",messages:[{id:1,text:"hi, omar"},{id:2,text:"hi, oleg"}]},{id:2,nameDialog:"Sergey",messages:[{id:1,text:"hi, vcxvcxv"},{id:2,text:"hi, vcxvcxv"}]},{id:3,nameDialog:"Lev",messages:[{id:1,text:"hi, eqwewqe"},{id:2,text:"hi, dsadsad"}]}],activeDialog:{id:0,nameDialog:"",messages:[]},textMessage:""};var Le=t(178),We=t(160),Be=Object(AA.c)({ProfilePage:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qA,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-STATE-PROFILE":return Object(f.a)(Object(f.a)({},A),{},{profile:Object(f.a)({},e.data)});case"SET-STATUS":return Object(f.a)(Object(f.a)({},A),{},{status:e.data});default:return A}},DialogPage:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGE-DIALOG":return Object(f.a)(Object(f.a)({},A),{},{activeDialog:e.dialog});case"SEND-MESSAGE":if(0!==A.activeDialog.id){var t=A.dialogs.findIndex((function(e){return e.id===A.activeDialog.id})),n={id:1,text:A.textMessage},a=Object.assign({},A);return a.dialogs[t].messages.push(n),a.textMessage="",a}return alert("\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0434\u0438\u0430\u043b\u043e\u0433"),A;case"UPD-TEXT-MESSAGE":return Object(f.a)(Object(f.a)({},A),{},{textMessage:e.text});default:return A}},UsersPage:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sA,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case rA:return Object(f.a)(Object(f.a)({},A),{},{items:Object(tA.a)(e.data.items),totalCount:e.data.totalCount});case cA:return Object(f.a)(Object(f.a)({},A),{},{currentPage:e.current});case nA:var t=A.items.findIndex((function(A){return A.id==e.userId}));return A.items[t].followed=e.followed,Object(f.a)(Object(f.a)({},A),{},{items:Object(tA.a)(A.items)});case aA:var n=A.items.findIndex((function(A){return A.id==e.userId}));return A.items[n].followed=e.followed,Object(f.a)(Object(f.a)({},A),{},{items:Object(tA.a)(A.items)});default:return A}},Auth:H,form:We.a,Utilits:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k:return Object(f.a)(Object(f.a)({},A),{},{isFetching:e.data});case I:return Object(f.a)(Object(f.a)({},A),{},{ButtonDisabled:e.data});default:return A}},Chat:Se}),He=Object(AA.e)(Be,Object(AA.a)(Le.a));c.a.render(Object(G.jsx)(u.a,{store:He,children:Object(G.jsx)(Fe,{})}),document.getElementById("root"))},42:function(A,e,t){A.exports={Modal:"Modal_Modal__aKK59",ModalContent:"Modal_ModalContent__1qs3m",ModalActive:"Modal_ModalActive__1Jc0N",ModalContentActive:"Modal_ModalContentActive__1m8lc",buttons:"Modal_buttons__10Sn3",content:"Modal_content__1GZMd"}},57:function(A,e,t){A.exports={Profile:"ProfileInfo_Profile__20Qw0",Avatar:"ProfileInfo_Avatar__36Y6s",svg:"ProfileInfo_svg__Kqr2G",ImageSettings:"ProfileInfo_ImageSettings__1LWCf",AboutMe:"ProfileInfo_AboutMe__3LkfG"}},67:function(A,e,t){A.exports={login:"Loginform_login__2smEb",loginWcaptcha:"Loginform_loginWcaptcha__V2_oo",captcha:"Loginform_captcha___WOOU",error:"Loginform_error__1nXd0",RememberMe:"Loginform_RememberMe__3fdBQ"}},97:function(A,e,t){A.exports={Menu:"Menu_Menu__3jIS2",Active:"Menu_Active__3xzro"}},98:function(A,e,t){A.exports={margin:"Pagination_margin__3Kk3l",ActivePage:"Pagination_ActivePage__1Shtx",Prev:"Pagination_Prev__3HpIC"}}},[[352,1,2]]]);
//# sourceMappingURL=main.6ced0cc4.chunk.js.map