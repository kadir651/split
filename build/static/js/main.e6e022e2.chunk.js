(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,a){e.exports=a(300)},192:function(e,t,a){},194:function(e,t,a){},204:function(e,t){},300:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(166),l=a.n(c),o=(a(192),a(194),a(197),a(26)),i=a(7),u=a(9),s=Object(n.createContext)(),m=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),i=Object(u.a)(o,2),m=i[0],p=i[1],d=Object(n.useState)(!1),b=Object(u.a)(d,2),f={userName:c,setUserName:l,userEmail:m,setUserEmail:p,userLoggedIn:b[0],setUserLoggedIn:b[1]};return r.a.createElement(s.Provider,{value:f},e.children)},p=a(19),d=a.n(p),b=a(31),f=a(39),E=a.n(f),g=a(169),h=Object(n.createContext)(),v=function(e){var t="https://h2genw4y7b.execute-api.eu-central-1.amazonaws.com/dev",a={groupCreator:function(){var e=Object(b.a)(d.a.mark(function e(a,n){var r,c,l,o,i,u;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(g.a)(1e5,999999),c=r().toString(),e.next=4,E()("".concat(t,"/group/start"),{method:"post",body:JSON.stringify({groupID:c,groupAdmin:a,memberName:n,groupMembers:[a]}),headers:{"Content-Type":"application/json"}});case 4:return l=e.sent,e.next=7,l.json();case 7:return o=e.sent,i=JSON.parse(o.body),u=i.groupID,e.abrupt("return",u);case 11:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),groupJoiner:function(){var e=Object(b.a)(d.a.mark(function e(a,n,r,c){var l,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("".concat(t,"/group/join"),{method:"post",body:JSON.stringify({groupID:a,memberID:n,memberName:r,isNonAdmin:c}),headers:{"Content-Type":"application/json"}});case 2:return l=e.sent,e.next=5,l.json();case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}},e)}));return function(t,a,n,r){return e.apply(this,arguments)}}(),groupFinalizer:function(){var e=Object(b.a)(d.a.mark(function e(a,n){var r,c;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("".concat(t,"/group/finalize"),{method:"post",body:JSON.stringify({membersArr:a,groupID:n}),headers:{"Content-Type":"application/json"}});case 2:return r=e.sent,e.next=5,r.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),fetchUserGroups:function(){var e=Object(b.a)(d.a.mark(function e(a){var n,r,c,l;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("".concat(t,"/user?userID=").concat(a),{method:"GET",headers:{accept:"application/json"}});case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Error! status: ".concat(n.status));case 5:return e.next=7,n.json();case 7:return r=e.sent,c=r.Item.userGroupsAdmined,l=r.Item.userGroupsMembered,e.abrupt("return",{groupsAdmined:c,groupsMembered:l});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),fetchUserGroupReceipts:function(){var e=Object(b.a)(d.a.mark(function e(a,n){var r,c;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("".concat(t,"/receipt?groupID=").concat(a,"&userID=").concat(n),{method:"GET",headers:{accept:"application/json"}});case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Error! status: ".concat(r.status));case 5:return e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),fetchGroupMembers:function(){var e=Object(b.a)(d.a.mark(function e(a){var n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E()("".concat(t,"/group?groupID=").concat(a),{method:"GET",headers:{accept:"application/json"}});case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Error! status: ".concat(n.status));case 6:return e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}(),fetchFinalizedGroupLogs:function(){var e=Object(b.a)(d.a.mark(function e(a,n,r){var c,l;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("".concat(t,"/group/finalize?groupID=").concat(a),{method:"GET",headers:{accept:"application/json"}});case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("Error! status: ".concat(c.status));case 5:return e.next=7,c.json();case 7:if(l=e.sent,"member"!==r){e.next=11;break}e.next=13;break;case 11:if("admin"!==r){e.next=13;break}return e.abrupt("return",l);case 13:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),receiptAdder:function(){var e=Object(b.a)(d.a.mark(function e(a,n,r,c,l){var o,i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("".concat(t,"/receipt/add"),{method:"post",body:JSON.stringify({groupID:a,memberID:n,note:r,date:c,amount:l}),headers:{"Content-Type":"application/json"}});case 2:return o=e.sent,e.next=5,o.json();case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}},e)}));return function(t,a,n,r,c){return e.apply(this,arguments)}}(),receiptDeleter:function(){var e=Object(b.a)(d.a.mark(function e(a,n,r){var c,l;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("".concat(t,"/receipt/delete"),{method:"post",body:JSON.stringify({groupID:a,memberID:n,listNum:r}),headers:{"Content-Type":"application/json"}});case 2:return c=e.sent,e.next=5,c.json();case 5:return l=e.sent,e.abrupt("return",l);case 7:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),memberFinishToggle:function(){var e=Object(b.a)(d.a.mark(function e(a,n,r){var c,l;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("".concat(t,"/user/member"),{method:"post",body:JSON.stringify({groupID:a,memberID:n,toFinish:r}),headers:{"Content-Type":"application/json"}});case 2:return c=e.sent,e.next=5,c.json();case 5:return l=e.sent,e.abrupt("return",l);case 7:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),receiptFinishToggle:function(){var e=Object(b.a)(d.a.mark(function e(a,n,r,c){var l,o,i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l=0,"finish"===c&&r.map(function(e){return l+=e[2]}),e.next=4,E()("".concat(t,"/receipt/finish"),{method:"post",body:JSON.stringify({groupID:a,memberID:n,totalNum:l.toString(),action:c}),headers:{"Content-Type":"application/json"}});case 4:return o=e.sent,e.next=7,o.json();case 7:return i=e.sent,e.abrupt("return",i);case 9:case"end":return e.stop()}},e)}));return function(t,a,n,r){return e.apply(this,arguments)}}()};return r.a.createElement(h.Provider,{value:a},e.children)},j={aws_project_region:"eu-central-1",aws_cognito_identity_pool_id:"eu-central-1:481c0076-c808-4e88-9f88-796dd76e935f",aws_cognito_region:"eu-central-1",aws_user_pools_id:"eu-central-1_ytboDFipN",aws_user_pools_web_client_id:"p066rdurcppg20lkdkh5g1bvu",oauth:{},aws_cognito_username_attributes:["EMAIL"],aws_cognito_social_providers:[],aws_cognito_signup_attributes:["EMAIL"],aws_cognito_mfa_configuration:"OFF",aws_cognito_mfa_types:["SMS"],aws_cognito_password_protection_settings:{passwordPolicyMinLength:8,passwordPolicyCharacters:[]},aws_cognito_verification_mechanisms:["EMAIL"]},x=a(41),O=a(301),w=a(360),y=a(350),C=function(){var e=Object(n.useContext)(s),t=e.userName,c=e.userEmail,l=Object(n.useContext)(h).groupCreator,o=Object(i.f)(),u=function(){var e=Object(b.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.signOut();case 2:o("/"),window.location.reload();case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header px-3"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light h-100 ml-1"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:a(91),width:"40",height:"40",className:"d-inline-block align-middle",alt:""}),r.a.createElement("span",{className:"logo-text"},"Simple Split")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse d-flex justify-content-evenly",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto d-flex"},r.a.createElement("li",{className:"nav-item align-bottom active"},r.a.createElement("button",{className:"nav-link text-wrap btn btn-link",onClick:function(){return o("/")}},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"nav-link text-wrap btn btn-link",onClick:function(){l(c,t).then(function(e){o("/group/create/".concat(e))})}},"Create Group")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"nav-link text-wrap btn btn-link",onClick:function(){return o("/group/join")}},"Join Group")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"nav-link text-wrap btn btn-link",onClick:function(){return o("/viewgroups")}},"View Groups")))),r.a.createElement("form",{className:"form-inline"},r.a.createElement("button",{type:"button",className:"btn btn-outline-primary mx-3",onClick:function(){return console.log("createdGroupID")}},"Account"),r.a.createElement("button",{type:"button",className:"btn btn-secondary mr-3",onClick:function(){return u()}},"Logout")))))},S=function(){var e=Object(i.f)(),t=function(t){e("".concat(t))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header px-3"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light h-100 ml-1"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:a(91),width:"40",height:"40",className:"d-inline-block align-middle",alt:""}),r.a.createElement("span",{className:"logo-text"},"Simple Split")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse d-flex justify-content-evenly",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto d-flex"})),r.a.createElement("form",{className:"form-inline"},r.a.createElement("button",{type:"button",className:"btn btn-outline-primary mx-3",onClick:function(){return t("/login")}},"Login"),r.a.createElement("button",{type:"button",className:"btn btn-secondary mr-3",onClick:function(){return t("/register")}},"Register")))))},k=function(){return Object(n.useContext)(s).userLoggedIn?r.a.createElement("div",null,r.a.createElement(C,null)):r.a.createElement("div",null,r.a.createElement(S,null))},N=(a(79),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"landingmain"},"no more mess on ",r.a.createElement("br",null)," who paid what last night"),r.a.createElement("h3",{id:"landingsub"},"simplesplit helps you to ",r.a.createElement("br",null),"split your costs on your meets"," "),r.a.createElement("div",{id:"subtext"},r.a.createElement("h4",null,"You need to register first to use simplesplit",r.a.createElement("br",null)," Click the login button above if you registered already.")))}),I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"landingmain"},"no more mess on ",r.a.createElement("br",null)," who paid what last night"),r.a.createElement("h3",{id:"landingsub"},"simplesplit helps you to ",r.a.createElement("br",null),"split your costs on your meets"," "),r.a.createElement("div",{id:"userhomesubtext"},r.a.createElement("br",null),r.a.createElement("h4",null,"choose your next action from the menu above")))};var F=function(){var e=Object(n.useContext)(s),t=e.setUserEmail,a=e.setUserName,c=e.userLoggedIn,l=e.setUserLoggedIn;return Object(n.useEffect)(function(){y.a.currentAuthenticatedUser({bypassCache:!0}).then(function(e){t(e.attributes.email),a(e.attributes.name),l(!0)}).catch(function(e){return console.log(e)})},[t,a,l]),c?r.a.createElement("div",null,r.a.createElement(I,null)):r.a.createElement("div",null,r.a.createElement(N,null))},D=a(361),_=a(369),A=a(356),T=a(370),U=a(371),G=a(354),L=a(357);var z=function(){var e=Object(i.f)(),t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),m=s[0],p=s[1],f=Object(n.useState)(""),E=Object(u.a)(f,2),g=E[0],h=E[1],v=Object(n.useState)(""),j=Object(u.a)(v,2),x=j[0],O=j[1],w=Object(n.useState)(!1),C=Object(u.a)(w,2),S=C[0],k=C[1],N=function(){var e=Object(b.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),k(!0),e.next=4,y.a.signUp({username:m,password:g,attributes:{name:c}});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),I=function(){var t=Object(b.a)(d.a.mark(function t(a){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,y.a.confirmSignUp(m,x);case 3:e("/login");case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"landingmain"},"one final step before the simplicity "),r.a.createElement("h3",null,"simplesplit is a complete cloud native app",r.a.createElement("br",null)," delivered to you with joy and excitement!"),r.a.createElement("div",{id:"registerboxes"},r.a.createElement("div",{id:"registerbox"},r.a.createElement(D.a,{component:"form",onSubmit:N,width:400,height:350,sx:{boxShadow:6,p:3}},r.a.createElement("h4",{id:"registerboxtitle"},"registration"),r.a.createElement(_.a,{sx:{mt:1,width:300}},r.a.createElement(A.a,{htmlFor:"name"},"Your Name"),r.a.createElement(T.a,{required:!0,id:"name",value:c,onChange:function(e){return l(e.target.value)},variant:"standard"})),r.a.createElement(_.a,{sx:{mt:1,width:300}},r.a.createElement(A.a,{htmlFor:"email"},"Your E-mail"),r.a.createElement(T.a,{required:!0,id:"email",value:m,onChange:function(e){return p(e.target.value)},variant:"filled"})),r.a.createElement(_.a,{sx:{mt:1,width:300}},r.a.createElement(A.a,{htmlFor:"Set Password"},"Set Password"),r.a.createElement(T.a,{id:"password",value:g,onChange:function(e){return h(e.target.value)},type:"password",variant:"standard"})),r.a.createElement(_.a,{sx:{mt:1}},r.a.createElement(U.a,{control:r.a.createElement(G.a,{defaultChecked:!0}),label:"I accept terms & conditions"})),r.a.createElement(L.a,{sx:{mt:2},type:"submit",variant:"contained"},"Register"))),S&&r.a.createElement("div",{id:"registerconfirmbox"},r.a.createElement(D.a,{component:"form",onSubmit:I,width:400,height:230,sx:{boxShadow:6,p:3}},r.a.createElement("h5",null,"You will receive a confirmation code ",r.a.createElement("br",null),"to your e-mail in a few seconds. ",r.a.createElement("br",null),"Please enter the code below."),r.a.createElement(_.a,{sx:{mt:1}},r.a.createElement(A.a,{htmlFor:"name"},"Confirmation Code"),r.a.createElement(T.a,{required:!0,id:"confirmation-code",value:x,onChange:function(e){return O(e.target.value)},variant:"standard"})),r.a.createElement("br",null),r.a.createElement(L.a,{sx:{mt:3},type:"submit",variant:"contained"},"Confirm")))))};var R=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),m=o[0],p=o[1],f=Object(n.useContext)(s),E=f.setUserEmail,g=f.setUserName,h=f.setUserLoggedIn,v=Object(i.f)(),j=function(){var e=Object(b.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),y.a.signIn({username:a,password:m}).then(function(e){e&&(E(e.attributes.email),g(e.attributes.name),h(!0))}).finally(function(){v("/")});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"landingmain"},"ready. set. pocket. "),r.a.createElement("h3",null,"thank you for experimenting simple split"),r.a.createElement("div",{id:"registerboxes"},r.a.createElement("div",{id:"registerbox"},r.a.createElement(D.a,{component:"form",onSubmit:j,width:400,height:250,sx:{boxShadow:6,p:3}},r.a.createElement("h4",{id:"registerboxtitle"},"login"),r.a.createElement(_.a,{sx:{mt:1,width:300}},r.a.createElement(A.a,{htmlFor:"email"},"E-mail"),r.a.createElement(T.a,{required:!0,id:"email",value:a,onChange:function(e){return c(e.target.value)},variant:"filled"})),r.a.createElement(_.a,{sx:{mt:1,width:300}},r.a.createElement(A.a,{htmlFor:"Set Password"},"Password"),r.a.createElement(T.a,{id:"password",value:m,onChange:function(e){return p(e.target.value)},type:"password",variant:"standard"})),r.a.createElement("br",null),r.a.createElement(L.a,{sx:{mt:2},type:"submit",variant:"contained"},"Let's Go!")))))},J=a(248),M=a.n(J),P=function(){var e=r.a.useContext(h).groupJoiner,t=r.a.useContext(s),a=t.userName,n=t.userEmail,c=Object(i.g)("").groupnr,l=r.a.useState(!1),o=Object(u.a)(l,2),m=o[0],p=o[1],d=Object(i.f)();setTimeout(function(){e(c,n,a,"false"),p(!0)},3e3);return r.a.createElement(r.a.Fragment,null,m?r.a.createElement("div",null,r.a.createElement("h3",null,"group ",c," is created! \ud83c\udf89"),r.a.createElement("h1",null,r.a.createElement(M.a,{value:"https://simplespl.it/group/join/".concat(c)})),r.a.createElement("br",null),r.a.createElement("h4",null,"share the QR code or simplespl.it/",c," to invite your friends"),r.a.createElement("br",null)," ",r.a.createElement("h4",{style:{cursor:"pointer"},onClick:function(){d("/group/view/admin/".concat(c))}},"visit the group")):r.a.createElement("div",null,r.a.createElement("h3",null,"creating Group ",c," "),r.a.createElement("br",null)," ",r.a.createElement("h4",null,"little more patience please...")))},W=function(){var e=r.a.useContext(h).groupJoiner,t=r.a.useContext(s),a=t.userName,n=t.userEmail,c=r.a.useState(""),l=Object(u.a)(c,2),o=l[0],m=l[1],p=Object(i.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"joinlanding"},"pay it simple silly. "),r.a.createElement("h3",null,"you can also invite other friends to the group"),r.a.createElement("div",{id:"joinboxes"},r.a.createElement("div",{id:"joinbox"},r.a.createElement(D.a,{component:"form",onSubmit:function(t){t.preventDefault(),e(o,n,a,"true"),p("/group/view/member/".concat(o))},width:400,height:150,sx:{boxShadow:6,p:3,mt:2}},r.a.createElement(_.a,{sx:{mt:1,width:300}},r.a.createElement(A.a,{htmlFor:"joinGroupNr"},"Group Number"),r.a.createElement(T.a,{required:!0,id:"joinGroupNr",value:o,onChange:function(e){return m(e.target.value)},variant:"filled"})),r.a.createElement("br",null),r.a.createElement(L.a,{sx:{mt:2},type:"submit",variant:"contained"},"Let's Join!")))))},q=a(364),Y=a(368),B=a(367),V=a(362),H=a(365),Q=a(366),K=a(363),X=a(249),Z=a.n(X),$=function(e){var t=e.groupArr,a=e.role,n=Object(i.f)(),c=r.a.useState("leading"),l=Object(u.a)(c,2),o=l[0],s=l[1];r.a.useEffect(function(){"member"===a&&s("member of")},[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{sx:{maxWidth:250},component:K.a},r.a.createElement(q.a,{"aria-label":"simple table"},r.a.createElement(H.a,{align:"center"},r.a.createElement(Q.a,{align:"center"},r.a.createElement(B.a,{align:"center",colSpan:2},"groups you are ",o))),r.a.createElement(Y.a,null,t.map(function(e){return r.a.createElement(Q.a,{key:e,sx:{"&:last-child td, &:last-child th":{border:0}}},r.a.createElement(B.a,{align:"center"},e),r.a.createElement(B.a,{sx:{cursor:"pointer"},align:"center",onClick:function(){!function(e,t){n("/group/view/".concat(t,"/").concat(e))}(e,a)}},r.a.createElement(Z.a,null)))})))))},ee=a(325),te=function(){var e=Object(n.useContext)(h).fetchUserGroups,t=Object(n.useContext)(s).userEmail,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)([]),m=Object(u.a)(i,2),p=m[0],f=m[1],E=Object(n.useState)(!1),g=Object(u.a)(E,2),v=g[0],j=g[1],x=function(){var a=Object(b.a)(d.a.mark(function a(){return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(t).then(function(e){o(e.groupsAdmined),f(e.groupsMembered),j(!0)});case 2:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}();return Object(n.useEffect)(function(){x()},[]),v&&void 0!==l&&void 0!==p?r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a,{direction:"row",justifyContent:"center",spacing:3},r.a.createElement($,{groupArr:l,role:"admin"}),r.a.createElement($,{groupArr:p,role:"member"}))):v&&void 0!==l?r.a.createElement($,{groupArr:l,role:"admin"}):v&&void 0!==p?r.a.createElement($,{groupArr:p,role:"member"}):v&&void 0===l&&void 0===p?r.a.createElement("h3",null,"You don't have any groups yet... ",r.a.createElement("span",{role:"img","aria-label":"oops"},"\ud83e\udd37\u200d\u2640\ufe0f"),"  "):r.a.createElement("div",null,"Loading...")},ae=a(20),ne=a(117),re=a(352),ce=a(375),le=a(373),oe=a(327),ie=a(374),ue=a(250),se=a.n(ue);var me=function(e){var t=e.membersArr,a=e.groupID,c=Object(n.useState)(!1),l=Object(u.a)(c,2),o=l[0],s=l[1],m=Object(n.useContext)(h).groupFinalizer,p=Object(i.f)();return r.a.createElement("div",null,r.a.createElement(L.a,{onClick:function(){s(!0)},sx:{width:200,mt:2},variant:"contained",endIcon:r.a.createElement(se.a,null)},"Split The Costs"),r.a.createElement(re.a,{open:o,onClose:function(){s(!1)}},r.a.createElement(oe.a,null,"finalize the group"),r.a.createElement(le.a,null,r.a.createElement(ie.a,{id:"alert-dialog-description"},"Do you confirm all users added their receipts?",r.a.createElement("br",null),"Once confirmed, each member will receive their transaction info")),r.a.createElement(ce.a,null,r.a.createElement(L.a,{variant:"contained",sx:{bgcolor:"purple"},onClick:function(){return e=t,n=a,console.log(e),void m(e,n).then(function(e){p("/group/final/".concat(a))});var e,n},autoFocus:!0},"let's go!"))))},pe=a(252),de=a.n(pe),be=a(251),fe=a.n(be),Ee=a(349),ge=function(e){var t=e.groupID,a=e.groupMembersArr,c=e.groupFinalized,l=Object(n.useContext)(h),o=l.memberFinishToggle,i=l.receiptFinishToggle,s=Object(n.useState)(!0),m=Object(u.a)(s,2),p=m[0],d=m[1],b=function(e,a,n){var r="finish";"false"===n&&(r="revoke"),o(t,a,n),i(t,a,e,r),setTimeout(function(){window.location.reload()},550)};return Object(n.useEffect)(function(){a.map(function(e){return!1===e.isFinished&&d(!1),e})},[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{component:K.a},r.a.createElement(q.a,{sx:{maxWidth:450},"aria-label":"simple table"},r.a.createElement(H.a,null,r.a.createElement(Q.a,null,r.a.createElement(B.a,{align:"center"},"E-mail"),r.a.createElement(B.a,{align:"center"},"Name"),r.a.createElement(B.a,{align:"center"},"Status"),r.a.createElement(B.a,{align:"center"},"Total Expense"))),r.a.createElement(Y.a,null,a.map(function(e){return r.a.createElement(Q.a,{key:e.memberID,sx:{"&:last-child td, &:last-child th":{border:0}}},r.a.createElement(B.a,{align:"center"},e.memberID),r.a.createElement(B.a,{align:"center"},e.memberName),r.a.createElement(B.a,{align:"center"},e.isFinished?r.a.createElement("div",null,"Finished"," ",r.a.createElement(Ee.a,{title:"Return User",placement:"bottom"},r.a.createElement(fe.a,{sx:{cursor:"pointer"},onClick:function(){return b(0,e.memberID,"false")}}))):r.a.createElement("div",null,"In Progress"," ",r.a.createElement(Ee.a,{title:"Finish User",placement:"bottom"},r.a.createElement(de.a,{sx:{cursor:"pointer"},onClick:function(){return b(e.memberReceipts,e.memberID,"true")}})))),e.isFinished&&r.a.createElement(B.a,{align:"center"},e.totalExpense))})))),r.a.createElement("br",null),p?!0===c?r.a.createElement("div",null,r.a.createElement("h4",null,"this group is finalized!"),r.a.createElement("h5",null,r.a.createElement("a",{style:{"text-decoration":"none",color:"black"},href:"/group/final/".concat(t)},"click here")," ","to see the result in details")):r.a.createElement("div",{className:"text-justify"},r.a.createElement("h4",{component:"div"},"all users submitted their receipts! "),r.a.createElement(me,{sx:{width:200,mt:2},membersArr:a,groupID:t})):r.a.createElement("div",null,r.a.createElement("h4",null,"some users are still not finished"),r.a.createElement("h5",null,"you can contact group members to submit their receipts or you can finish their progress above.")))},he=a(253),ve=a.n(he),je=function(e){var t=e.groupnr,a=e.role,c=Object(n.useContext)(h),l=c.fetchUserGroupReceipts,o=c.receiptDeleter,s=Object(n.useState)([]),m=Object(u.a)(s,2),p=m[0],f=m[1],E=Object(n.useState)(),g=Object(u.a)(E,2),v=g[0],j=g[1],x=Object(i.f)(),O=Object(n.useState)(""),w=Object(u.a)(O,2),C=w[0],S=w[1];Object(n.useEffect)(function(){y.a.currentAuthenticatedUser({bypassCache:!0}).then(function(e){S(e.attributes.email),k(e.attributes.email)}).catch(function(e){return console.log(e)})},[]);var k=function(){var e=Object(b.a)(d.a.mark(function e(a){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l(t,a).then(function(e){if(void 0!==e.Item){var t=e.Item.memberReceipts;j(e.Item.isFinished);var a=[];t.map(function(e){return a.push(Object(ne.a)({},e))}),f(a)}});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return void 0===p?r.a.createElement("div",null,"loading..."):0===p.length?r.a.createElement("div",{className:"text-justify"},r.a.createElement("h3",null,"you don\u2019t have any receipts"),r.a.createElement("h5",null,"add receipt below to share your costs")):r.a.createElement("div",{id:"receiptstable",className:"d-flex justify-content-center"},r.a.createElement(V.a,{sx:{maxWidth:500},component:K.a},r.a.createElement(q.a,{"aria-label":"simple table"},r.a.createElement(H.a,{align:"center"},r.a.createElement(Q.a,{align:"center"},r.a.createElement(B.a,{align:"center"},"Note"),r.a.createElement(B.a,{align:"center"},"Date    "),r.a.createElement(B.a,{align:"center"},"Amount\xa0(\u20ac)"),!v&&r.a.createElement(B.a,{align:"center"}))),r.a.createElement(Y.a,null,p.map(function(e,n){return r.a.createElement(Q.a,{key:n,sx:{"&:last-child td, &:last-child th":{border:0}}},r.a.createElement(B.a,{align:"center"},e[0]),r.a.createElement(B.a,{align:"center"},e[1]),r.a.createElement(B.a,{align:"center"},e[2]),!v&&r.a.createElement(B.a,{align:"center",sx:{cursor:"pointer"},onClick:function(){o(t,C,n),setTimeout(function(){x("/receipt/delete/".concat(a,"/").concat(t))},500)}},r.a.createElement(ve.a,null)))})))))},xe=a(376),Oe=a(358);var we=function(e){var t=e.groupID,a=e.role,c=Object(n.useContext)(s).userEmail,l=Object(n.useContext)(h).receiptAdder,o=Object(n.useState)(!1),m=Object(u.a)(o,2),p=m[0],d=m[1],b=Object(n.useState)(""),f=Object(u.a)(b,2),E=f[0],g=f[1],v=Object(n.useState)(),j=Object(u.a)(v,2),x=j[0],O=j[1],w=Object(n.useState)(""),y=Object(u.a)(w,2),C=y[0],S=y[1],k=Object(i.f)();return r.a.createElement("div",null,r.a.createElement(L.a,{variant:"outlined",onClick:function(){d(!0)}},"Add Receipt"),r.a.createElement(re.a,{open:p,onClose:function(){d(!1)}},r.a.createElement(oe.a,null,"add receipt"),r.a.createElement(le.a,null,r.a.createElement(A.a,{htmlFor:"name"},"note"),r.a.createElement(Oe.a,{autoFocus:!0,margin:"dense",id:"name",label:"Note",fullWidth:!0,variant:"standard",onChange:function(e){return g(e.target.value)}}),r.a.createElement(A.a,{htmlFor:"date"},"date"),r.a.createElement(Oe.a,{margin:"dense",id:"date",type:"date",fullWidth:!0,onChange:function(e){return O(e.target.value)}}),r.a.createElement(A.a,{htmlFor:"amount"},"amount"),r.a.createElement(Oe.a,{id:"amount",startAdornment:r.a.createElement(xe.a,{position:"start"},"\u20ac"),onChange:function(e){return S(e.target.value)}})),r.a.createElement(ce.a,null,r.a.createElement(L.a,{onClick:function(){console.log(t,c,E,x,C),l(t,c,E,x,C),setTimeout(function(){k("/receipt/add/".concat(a,"/").concat(t))},500)}},"add receipt"))))};var ye=function(e){var t=e.groupID,a=e.memberID,c=e.role,l=e.memberReceipts,o=Object(n.useState)(!1),s=Object(u.a)(o,2),m=s[0],p=s[1],d=r.a.useContext(h),b=d.memberFinishToggle,f=d.receiptFinishToggle,E=Object(i.f)();return r.a.createElement("div",null,r.a.createElement(L.a,{variant:"outlined",onClick:function(){p(!0)}},"I'm All Set!"),r.a.createElement(re.a,{open:m,onClose:function(){p(!1)}},r.a.createElement(oe.a,null,"finish process"),r.a.createElement(le.a,null,r.a.createElement(ie.a,{id:"alert-dialog-description"},"Are you sure you added all your receipts?",r.a.createElement("br",null),"Once confirmed, you can\u2019t add receipts anymore")),r.a.createElement(ce.a,null,r.a.createElement(L.a,{onClick:function(){b(t,a,"true"),f(t,a,l,"finish"),setTimeout(function(){E("/user/finish/".concat(c,"/").concat(t))},250)},autoFocus:!0},"confirm"))))},Ce=a(359),Se=function(){var e=Object(n.useContext)(h).fetchGroupMembers,t=Object(i.g)("").groupnr,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],o=c[1],m=Object(n.useState)(!1),p=Object(u.a)(m,2),f=p[0],E=p[1],g=Object(n.useState)("admin"),v=Object(u.a)(g,1)[0],j=Object(n.useState)(),x=Object(u.a)(j,2),O=x[0],w=x[1],C=Object(n.useState)([]),S=Object(u.a)(C,2),k=S[0],N=S[1],I=Object(n.useState)(!1),F=Object(u.a)(I,2),D=F[0],_=F[1],A=Object(n.useContext)(s),T=A.userEmail,U=A.setUserEmail,G=A.setUserLoggedIn,L=Object(n.useContext)(h),z=L.fetchFinalizedGroupLogs,R=L.fetchUserGroupReceipts,J=function(){var a=Object(b.a)(d.a.mark(function a(){return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e(t).then(function(e){var t=[];return e.forEach(function(e){t.push(Object(ne.a)({},e))}),t}).then(function(e){o(e)});case 1:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}();return Object(n.useEffect)(function(){return y.a.currentAuthenticatedUser({bypassCache:!0}).then(function(e){R(t,e.attributes.email).then(function(e){G(!0),U(e.Item.memberID),w(e.Item.isFinished),N([].concat(Object(ae.a)(k),Object(ae.a)(e.Item.memberReceipts)))})}),J(),function(){E(!0),z(t,T,"admin").then(function(e){!0===e.Item.isFinalized.BOOL&&_(!0)})}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"text-justify"},"group ",t),r.a.createElement(ee.a,{direction:"row",justifyContent:"center",spacing:10},r.a.createElement(Ce.a,{item:!0,xs:6,md:8},!0===f?r.a.createElement(ge,{groupMembersArr:l,groupID:t,groupFinalized:D}):r.a.createElement("h2",null,"loading...")),r.a.createElement(Ce.a,{item:!0,xs:6,md:8},r.a.createElement(je,{groupnr:t,userEmail:T,role:v}),r.a.createElement("div",{id:"groupviewbuttons"},!0===O?r.a.createElement("div",{className:"text-justify"},r.a.createElement("h3",null,"you finished adding your receipts"),r.a.createElement("h5",null,"if you have more receipts to add, ",r.a.createElement("br",null)," contact group creator to allow you again.")):r.a.createElement(ee.a,{spacing:2,direction:"row"},r.a.createElement(we,{groupID:t,role:v})," ",r.a.createElement(ye,{variant:"contained",groupID:t,memberID:T,role:v,memberReceipts:k}))))))},ke=function(e){var t=e.admGroupID,a=Object(i.g)("").groupnr;void 0!==t&&(a=t);var c=Object(n.useState)(),l=Object(u.a)(c,2),o=l[0],m=l[1],p=Object(n.useState)("member"),f=Object(u.a)(p,1)[0],E=Object(n.useContext)(s),g=E.userEmail,v=E.setUserEmail,j=E.setUserLoggedIn,x=Object(n.useContext)(h).fetchUserGroupReceipts,O=Object(n.useState)([]),w=Object(u.a)(O,2),C=w[0],S=w[1];return Object(n.useEffect)(function(){return y.a.currentAuthenticatedUser({bypassCache:!0}).then(function(e){x(a,e.attributes.email).then(function(){var e=Object(b.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,v(t.Item.memberID);case 3:return m(t.Item.isFinished),e.abrupt("return",t.Item.memberReceipts);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).then(function(e){var t=e.map(function(e){return e});S([].concat(Object(ae.a)(C),Object(ae.a)(t))),console.log(C)})}),function(){console.log(C)}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"text-justify"},r.a.createElement("h2",null,"group ",a),r.a.createElement("br",null)),r.a.createElement(je,{groupnr:a,userEmail:g,role:f}),r.a.createElement("div",{id:"groupviewbuttons"},!0===o?r.a.createElement("div",{className:"text-justify"},r.a.createElement("h3",null,"you finished adding your receipts"),r.a.createElement("h5",null,"if you have more receipts to add, ",r.a.createElement("br",null)," contact group creator to allow you again.")):r.a.createElement(ee.a,{spacing:2,direction:"row"},r.a.createElement(we,{groupID:a,role:f})," ",r.a.createElement(ye,{variant:"contained",groupID:a,memberID:g,role:f,memberReceipts:C}))))};var Ne=function(){var e=Object(i.g)(""),t=e.groupnr,a=e.role,n=Object(i.f)();return r.a.useEffect(function(){setTimeout(function(){n("/group/view/".concat(a,"/").concat(t))},500)},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"submitting receipts..."))};var Ie=function(){var e=Object(i.g)(""),t=e.groupnr,a=e.role,n=Object(i.f)();return r.a.useEffect(function(){setTimeout(function(){n("/group/view/".concat(a,"/").concat(t))},500)},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"adding receipt..."))};var Fe=function(){var e=Object(i.g)(""),t=e.groupnr,a=e.role,n=Object(i.f)();return r.a.useEffect(function(){setTimeout(function(){n("/group/view/".concat(a,"/").concat(t))},500)},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"deleting receipt..."))},De=function(){var e=Object(n.useContext)(h).fetchFinalizedGroupLogs,t=Object(n.useContext)(s),a=t.userEmail,c=t.setUserEmail,l=t.setUserLoggedIn,o=Object(n.useState)([]),m=Object(u.a)(o,2),p=m[0],d=m[1],b=Object(n.useState)(""),f=Object(u.a)(b,2),E=f[0],g=f[1],v=Object(n.useState)(!1),j=Object(u.a)(v,2),x=j[0],O=j[1],w=Object(i.g)("").groupnr;return Object(n.useEffect)(function(){return y.a.currentAuthenticatedUser({bypassCache:!0}).then(function(e){c(e.attributes.email),l(!0)}),function(){e(w,a,"admin").then(function(e){var t=JSON.parse(e.Item.finalTransferLog.S),a=e.Item.groupAdmin.S;d(t),g(a),O(e.Item.isFinalized.BOOL)})}},[]),E!==a?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"you are not authorized for ",w),r.a.createElement("h4",null,"please contact group creator for more info")):!1===x?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"group ",w," is still not finalized"),r.a.createElement("h4",null,"please contact group creator to learn more")):!0===x?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"group ",w," is finalized!",r.a.createElement("span",{role:"img","aria-label":"yeah!"},"\ud83e\udd73")," "),r.a.createElement("h4",null,"each member will receive their ",r.a.createElement("br",null),"transfer details as follows:"),r.a.createElement("div",{id:"finalizedadmintable"},r.a.createElement(V.a,{sx:{maxWidth:450},component:K.a},r.a.createElement(q.a,{"aria-label":"simple table"},r.a.createElement(H.a,{align:"center"},r.a.createElement(Q.a,{align:"center"},r.a.createElement(B.a,{align:"center",colSpan:2},"transfers to take place"))),r.a.createElement(Y.a,null,p.map(function(e,t){return r.a.createElement(Q.a,{key:t,sx:{"&:last-child td, &:last-child th":{border:0}}},r.a.createElement(B.a,{align:"center"},r.a.createElement("h5",null,e.sender," should send \u20ac",e.amount," to ",e.receiver)))})))))):void 0};x.default.configure(j);var _e=function(){var e=Object(O.a)({typography:{allVariants:{fontFamily:"Montserrat",fontWeight:"500",textTransform:"none"}}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null,r.a.createElement(v,null,r.a.createElement(w.a,{theme:e},r.a.createElement(o.a,null,r.a.createElement("section",{className:"layout"},r.a.createElement("div",{className:"header"},r.a.createElement(k,null)),r.a.createElement("div",{className:"leftSide"}),r.a.createElement("div",{className:"body"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,element:r.a.createElement(F,null)}),r.a.createElement(i.a,{path:"/register",element:r.a.createElement(z,null)}),r.a.createElement(i.a,{path:"/login",element:r.a.createElement(R,null)}),r.a.createElement(i.a,{path:"/group/create/:groupnr",element:r.a.createElement(P,null)}),r.a.createElement(i.a,{path:"/group/join",element:r.a.createElement(W,null)}),r.a.createElement(i.a,{path:"/viewgroups",element:r.a.createElement(te,null)}),r.a.createElement(i.a,{path:"/group/view/admin/:groupnr",element:r.a.createElement(Se,null)}),r.a.createElement(i.a,{path:"/group/view/member/:groupnr",element:r.a.createElement(ke,null)}),r.a.createElement(i.a,{path:"/receipt/add/:role/:groupnr",element:r.a.createElement(Ie,null)}),r.a.createElement(i.a,{path:"/receipt/delete/:role/:groupnr",element:r.a.createElement(Fe,null)}),r.a.createElement(i.a,{path:"/user/finish/:role/:groupnr",element:r.a.createElement(Ne,null)}),r.a.createElement(i.a,{path:"group/final/:groupnr",element:r.a.createElement(De,null)}))),r.a.createElement("div",{className:"rightSide"})))))))};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_e,null)))},79:function(e,t,a){},91:function(e,t,a){e.exports=a.p+"static/media/ssbnw-1.13e44609.png"}},[[185,2,1]]]);
//# sourceMappingURL=main.e6e022e2.chunk.js.map