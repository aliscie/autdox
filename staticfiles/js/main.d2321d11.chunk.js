(this.webpackJsonpautodox=this.webpackJsonpautodox||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n(1),a=n.n(s),r=n(4),c=n.n(r),i=(n(11),n(2)),u=n(5);n(12);function d(e,t,n,o){var s=new XMLHttpRequest;s.responseType="json",s.open(e,"".concat(window.location.origin,"/").concat(t)),s.setRequestHeader("Content-Type","application/json"),s.setRequestHeader("Authorization","Basic "+btoa("Ali:AAssppmm11"));var a=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),o=0;o<n.length;o++){var s=n[o].trim();if(s.substring(0,e.length+1)===e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}return t}("csrftoken");a&&(s.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),s.setRequestHeader("X-Requested-with","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",a)),s.onload=function(){n(s.response,s.status)},s.onerror=function(e){console.log(e),n({message:"The request was an error"},400)},s.send(JSON.stringify(o))}var l=function(){var e=document.getElementById("root"),t=a.a.useState({title:"",description:""}),n=Object(u.a)(t,2),s=n[0],r=n[1],c=function(e,t){console.log(e,t)};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("input",{onChange:function(e){return r((function(t){return Object(i.a)(Object(i.a)({},t),{},{title:e.target.value})}))},placeholder:"title"}),Object(o.jsx)("input",{onChange:function(e){return r((function(t){return Object(i.a)(Object(i.a)({},t),{},{description:e.target.value})}))},placeholder:"description"}),Object(o.jsx)("button",{onClick:function(){console.log(s),d("POST","api/addbook/",c,Object(i.a)({auther:1},s))},children:"create book"}),Object(o.jsx)("h1",{children:e.dataset.username}),"AnonymousUser"!==e.dataset.username&&Object(o.jsxs)("form",{className:"logout",method:"post",action:e.dataset.logouturl,children:[Object(o.jsx)("input",{hidden:!0,name:"csrfmiddlewaretoken",value:e.dataset.crf}),Object(o.jsx)("button",{type:"submit",children:"logout"})]}),"AnonymousUser"===e.dataset.username&&Object(o.jsxs)("form",{className:"login",method:"POST",action:e.dataset.loginurl,children:[Object(o.jsx)("input",{hidden:!0,name:"csrfmiddlewaretoken",value:e.dataset.crf}),Object(o.jsx)("input",{type:"text",name:"login",placeholder:"Username",autoComplete:"username",maxLength:150,required:!0,id:"id_login"}),Object(o.jsx)("input",{type:"password",name:"password",placeholder:"Password",autoComplete:"current-password",required:!0,id:"id_password"}),Object(o.jsx)("input",{type:"checkbox",name:"remember",id:"id_remember"}),Object(o.jsx)("button",{className:"primaryAction",type:"submit",children:"Sign In"})]}),"AnonymousUser"===e.dataset.username&&Object(o.jsxs)("p",{className:"socialaccount_providers",children:["login/singup with google",Object(o.jsx)("a",{title:"Google",className:"socialaccount_provider google",href:"/accounts/google/login/?process=login",children:"Google"})]}),Object(o.jsx)("header",{className:"App-header"})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),s(e),a(e),r(e)}))};c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),p()}},[[13,1,2]]]);
//# sourceMappingURL=main.d2321d11.chunk.js.map