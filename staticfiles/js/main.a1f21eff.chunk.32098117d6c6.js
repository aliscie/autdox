(this.webpackJsonpautodox=this.webpackJsonpautodox||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var o=n(3),c=n(2),r=n.n(c),a=n(12),s=n.n(a),i=(n(28),n(0)),u=(n(29),n(9)),l=n(6);function d(e,t,n,o){var c=new XMLHttpRequest;c.responseType="json",c.open(e,"".concat(window.location.origin,"/").concat(t)),c.setRequestHeader("Content-Type","application/json"),c.setRequestHeader("Authorization","Basic "+btoa("Ali:AAssppmm11"));var r=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),o=0;o<n.length;o++){var c=n[o].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");r&&(c.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),c.setRequestHeader("X-Requested-with","XMLHttpRequest"),c.setRequestHeader("X-CSRFToken",r)),c.onload=function(){n(c.response,c.status)},c.onerror=function(e){console.log(e),n({message:"The request was an error"},400)},c.send(JSON.stringify(o))}var j=function(e){var t=r.a.useState({title:"",description:""}),n=Object(i.a)(t,2),c=n[0],a=n[1],s=function(t,n){e.setData((function(e){return[].concat(Object(l.a)(e),[t.books])})),console.log(t,n)};return Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onChange:function(e){return a((function(t){return Object(u.a)(Object(u.a)({},t),{},{title:e.target.value})}))},placeholder:"title"}),Object(o.jsx)("input",{onChange:function(e){return a((function(t){return Object(u.a)(Object(u.a)({},t),{},{description:e.target.value})}))},placeholder:"description"}),Object(o.jsx)("input",{required:!1,onChange:function(e){return a((function(t){return Object(u.a)(Object(u.a)({},t),{},{who_can_see:e.target.value})}))},placeholder:"who_can_see"}),Object(o.jsx)("button",{onClick:function(){console.log(c),d("POST","api/addbook/",s,Object(u.a)({author:1},c))},children:"create book"})]})};var b=function(e){return Object(o.jsxs)("form",{className:"logout",method:"post",action:e.dataset.logouturl,children:[Object(o.jsx)("input",{hidden:!0,name:"csrfmiddlewaretoken",value:e.dataset.crf}),Object(o.jsx)("button",{type:"submit",children:"logout"})]})};var p=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{title:"Google",className:"socialaccount_provider google",href:"/accounts/google/login/?process=login",children:"login/singup with google"}),Object(o.jsxs)("form",{className:"login",method:"POST",action:e.dataset.loginurl,children:[Object(o.jsx)("input",{hidden:!0,name:"csrfmiddlewaretoken",value:e.dataset.crf}),Object(o.jsx)("input",{type:"text",name:"login",placeholder:"Username",autoComplete:"username",maxLength:150,required:!0,id:"id_login"}),Object(o.jsx)("input",{type:"password",name:"password",placeholder:"Password",autoComplete:"current-password",required:!0,id:"id_password"}),Object(o.jsx)("input",{type:"checkbox",name:"remember",id:"id_remember"}),Object(o.jsx)("button",{className:"primaryAction",type:"submit",children:"Sign In"})]})]})};var h=function(){var e=document.getElementById("root");return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:e.dataset.username}),"AnonymousUser"!==e.dataset.username&&b(e),"AnonymousUser"===e.dataset.username&&p(e)]})};var f=function(e,t){var n=function(n,o){console.log(n),t((function(t){var o=t.filter((function(t){return e===n.JsonResponse}));return console.log(o),Object(l.a)(t)})),console.log({response:n,status:o})};return Object(o.jsxs)("div",{style:{border:"1px solid black",margin:"5px"},children:[Object(o.jsx)("h1",{contentEditable:!0,children:e.title}),Object(o.jsx)("p",{contentEditable:!0,children:e.description}),Object(o.jsx)("button",{onClick:function(){d("DELETE","api/deletebook/".concat(e.id,"/"),n)},children:"Delete"})]})},g=n(1),O=n(14);var m=function(){var e=Object(c.useMemo)((function(){return Object(O.c)(Object(g.h)())}),[]),t=Object(c.useState)([{type:"paragraph",children:[{text:"A line of text in a paragraph."}]}]),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(o.jsx)(O.b,{editor:e,value:r,onChange:function(e){return a(e)},children:Object(o.jsx)(O.a,{onKeyDown:function(t){"&"===t.key&&(t.preventDefault(),e.insertText("and"))}})})};var x=function(){var e=r.a.useState([]),t=Object(i.a)(e,2),n=t[0],c=t[1],a=function(e,t){console.log(e,t),c(null!==e&&null!==e.books?e.books:[]),console.log(e,t)};return r.a.useEffect((function(){d("GET","api/",a)}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(h,{}),Object(o.jsx)(j,{setData:c}),Object(o.jsx)(m,{}),n.map((function(e){return f(e,c)}))]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),r(e),a(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),v()}},[[42,1,2]]]);
//# sourceMappingURL=main.a1f21eff.chunk.js.map