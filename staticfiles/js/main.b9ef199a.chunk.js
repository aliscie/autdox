(this.webpackJsonpautodox=this.webpackJsonpautodox||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n(1),r=n.n(s),c=n(5),i=n.n(c),a=(n(11),n(3)),u=(n(12),n(2));function l(e,t,n,o){var s=new XMLHttpRequest;s.responseType="json",s.open(e,"".concat(window.location.origin,"/").concat(t)),s.setRequestHeader("Content-Type","application/json"),s.setRequestHeader("Authorization","Basic "+btoa("Ali:AAssppmm11"));var r=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),o=0;o<n.length;o++){var s=n[o].trim();if(s.substring(0,e.length+1)===e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}return t}("csrftoken");r&&(s.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),s.setRequestHeader("X-Requested-with","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",r)),s.onload=function(){n(s.response,s.status)},s.onerror=function(e){console.log(e),n({message:"The request was an error"},400)},s.send(JSON.stringify(o))}var d=function(){var e=r.a.useState({title:"",description:""}),t=Object(a.a)(e,2),n=t[0],s=t[1],c=function(e,t){console.log(e,t)};return Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onChange:function(e){return s((function(t){return Object(u.a)(Object(u.a)({},t),{},{title:e.target.value})}))},placeholder:"title"}),Object(o.jsx)("input",{onChange:function(e){return s((function(t){return Object(u.a)(Object(u.a)({},t),{},{description:e.target.value})}))},placeholder:"description"}),Object(o.jsx)("button",{onClick:function(){console.log(n),l("POST","api/addbook/",c,Object(u.a)(Object(u.a)({author:1},n),{},{who_can_see:!1}))},children:"create book"})]})};var j=function(e){return Object(o.jsxs)("form",{className:"logout",method:"post",action:e.dataset.logouturl,children:[Object(o.jsx)("input",{hidden:!0,name:"csrfmiddlewaretoken",value:e.dataset.crf}),Object(o.jsx)("button",{type:"submit",children:"logout"})]})};var p=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{title:"Google",className:"socialaccount_provider google",href:"/accounts/google/login/?process=login",children:"login/singup with google"}),Object(o.jsxs)("form",{className:"login",method:"POST",action:e.dataset.loginurl,children:[Object(o.jsx)("input",{hidden:!0,name:"csrfmiddlewaretoken",value:e.dataset.crf}),Object(o.jsx)("input",{type:"text",name:"login",placeholder:"Username",autoComplete:"username",maxLength:150,required:!0,id:"id_login"}),Object(o.jsx)("input",{type:"password",name:"password",placeholder:"Password",autoComplete:"current-password",required:!0,id:"id_password"}),Object(o.jsx)("input",{type:"checkbox",name:"remember",id:"id_remember"}),Object(o.jsx)("button",{className:"primaryAction",type:"submit",children:"Sign In"})]})]})};var b=function(){var e=document.getElementById("root");return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:e.dataset.username}),"AnonymousUser"!==e.dataset.username&&j(e),"AnonymousUser"===e.dataset.username&&p(e)]})};var m=function(e){return Object(o.jsxs)("div",{style:{border:"1px solid black",margin:"5px"},children:[Object(o.jsx)("h1",{children:e.title}),Object(o.jsx)("p",{children:e.description})]})};var g=function(){var e=r.a.useState([]),t=Object(a.a)(e,2),n=t[0],s=t[1],c=function(e,t){s(null!==e&&null!==e.books?e.books:[]),console.log(e,t)};return r.a.useEffect((function(){l("GET","api/",c)}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{}),Object(o.jsx)(d,{}),n.map((function(e){return m(e)}))]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),o(e),s(e),r(e),c(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),h()}},[[13,1,2]]]);
//# sourceMappingURL=main.b9ef199a.chunk.js.map