(this.webpackJsonpautodox=this.webpackJsonpautodox||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n(1),c=n.n(s),a=n(5),r=n.n(a),i=(n(11),n(3)),u=(n(12),n(2));function l(e,t,n,o){var s=new XMLHttpRequest;s.responseType="json",s.open(e,"".concat(window.location.origin,"/").concat(t)),s.setRequestHeader("Content-Type","application/json"),s.setRequestHeader("Authorization","Basic "+btoa("Ali:AAssppmm11"));var c=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),o=0;o<n.length;o++){var s=n[o].trim();if(s.substring(0,e.length+1)===e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}return t}("csrftoken");c&&(s.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),s.setRequestHeader("X-Requested-with","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",c)),s.onload=function(){n(s.response,s.status)},s.onerror=function(e){console.log(e),n({message:"The request was an error"},400)},s.send(JSON.stringify(o))}var d=function(){var e=c.a.useState({title:"",description:""}),t=Object(i.a)(e,2),n=t[0],s=t[1],a=function(e,t){console.log(e,t)};return Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onChange:function(e){return s((function(t){return Object(u.a)(Object(u.a)({},t),{},{title:e.target.value})}))},placeholder:"title"}),Object(o.jsx)("input",{onChange:function(e){return s((function(t){return Object(u.a)(Object(u.a)({},t),{},{description:e.target.value})}))},placeholder:"description"}),Object(o.jsx)("button",{onClick:function(){console.log(n),l("POST","api/addbook/",a,Object(u.a)({author:1},n))},children:"create book"})]})};var p=function(){var e=document.getElementById("root"),t=c.a.useState([]),n=Object(i.a)(t,2),s=n[0],a=n[1],r=function(e,t){a(null!==e&&null!==e.books?e.books:[]),console.log(e,t)};return c.a.useEffect((function(){l("GET","api/",r)}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:e.dataset.username}),Object(o.jsx)(d,{}),"AnonymousUser"!==e.dataset.username&&Object(o.jsxs)("form",{className:"logout",method:"post",action:e.dataset.logouturl,children:[Object(o.jsx)("input",{hidden:!0,name:"csrfmiddlewaretoken",value:e.dataset.crf}),Object(o.jsx)("button",{type:"submit",children:"logout"})]}),"AnonymousUser"===e.dataset.username&&Object(o.jsxs)("form",{className:"login",method:"POST",action:e.dataset.loginurl,children:[Object(o.jsx)("input",{hidden:!0,name:"csrfmiddlewaretoken",value:e.dataset.crf}),Object(o.jsx)("input",{type:"text",name:"login",placeholder:"Username",autoComplete:"username",maxLength:150,required:!0,id:"id_login"}),Object(o.jsx)("input",{type:"password",name:"password",placeholder:"Password",autoComplete:"current-password",required:!0,id:"id_password"}),Object(o.jsx)("input",{type:"checkbox",name:"remember",id:"id_remember"}),Object(o.jsx)("button",{className:"primaryAction",type:"submit",children:"Sign In"})]}),"AnonymousUser"===e.dataset.username&&Object(o.jsxs)("p",{className:"socialaccount_providers",children:["login/singup with google",Object(o.jsx)("a",{title:"Google",className:"socialaccount_provider google",href:"/accounts/google/login/?process=login",children:"Google"})]}),Object(o.jsx)("header",{className:"App-header",children:s.map((function(e){return Object(o.jsxs)("div",{style:{border:"1px solid black"},children:[Object(o.jsx)("h1",{children:e.title}),Object(o.jsx)("h1",{children:e.description})]})}))})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),o(e),s(e),c(e),a(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),j()}},[[13,1,2]]]);
//# sourceMappingURL=main.55f701b1.chunk.js.map