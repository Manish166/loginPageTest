(this.webpackJsonploginflow=this.webpackJsonploginflow||[]).push([[0],{19:function(e,a,t){e.exports=t(35)},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(17),l=t.n(s),m=t(8),c=(t(24),t(1)),o=(t(25),t(6)),i=(t(26),function(e){var a=e.label,t=e.name,n=e.value,s=e.type,l=e.onChange,m=e.status,c=e.message;return r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{className:"label"},a),r.a.createElement("input",{className:"input",name:t,value:n,type:s,onChange:l}),!0===m&&r.a.createElement("div",{className:"errorContainer"},c))}),u=(t(27),function(e){var a=e.name,t=e.onClick;return r.a.createElement("div",null,r.a.createElement("button",{className:"button",onClick:t},a))}),N=(t(28),function(){return r.a.createElement("div",{className:"footerContainer"},r.a.createElement("p1",null,"Your account for everything Autodesk"),r.a.createElement("p2",null,"Learn more"))}),d=(t(29),function(e){var a=e.heading;return r.a.createElement("div",{className:"headerContainer"},r.a.createElement("p",null,a))}),E=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],s=a[1],l=Object(n.useState)(!1),m=Object(o.a)(l,2),E=m[0],p=m[1],f=Object(c.f)();return r.a.createElement("div",{className:"mainContainer"},r.a.createElement(d,{heading:"Sign in"}),r.a.createElement(i,{name:"Username",type:"text",value:t,onChange:function(e){s(e.target.value)},status:E,message:"Please enter username"}),r.a.createElement(u,{name:"NEXT",onClick:function(){console.log("submitted"),p(""===t)}}),r.a.createElement("div",{className:"tip"},r.a.createElement("p1",null,"New to Autodesk? "),r.a.createElement("p2",{onClick:function(){f.push("/signup")}},r.a.createElement("strong",null,"Create account"))),r.a.createElement("div",{className:"footer"},r.a.createElement(N,null)))},p=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],s=a[1];return r.a.createElement("div",{className:"mainContainer"},r.a.createElement("div",{className:"welcomeContainer"},r.a.createElement("p1",null,"Welcome"),r.a.createElement("p2",null,"userName")),r.a.createElement(i,{name:"Password",type:"password",value:t,onChange:function(e){s(e.target.value)}}),r.a.createElement(u,{name:"Sign in",onClick:function(){console.log("submitted")}}),r.a.createElement("div",{className:"footer"},r.a.createElement(N,null)))},f=t(11),v=t(10),g=function(){var e=Object(n.useState)({firstName:"",lastName:"",userName:"",reUserName:"",password:"",rePassword:""}),a=Object(o.a)(e,2),t=a[0],s=a[1],l=Object(n.useState)({firstName:!1,lastName:!1,userName:!1,reUserName:!1,password:!1,rePassword:!1}),m=Object(o.a)(l,2),E=m[0],p=m[1],g=Object(c.f)(),b=function(e){s(Object(v.a)(Object(v.a)({},t),{},Object(f.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"mainContainer"},r.a.createElement(d,{heading:"Create account"}),r.a.createElement("div",{className:"nameContainer"},r.a.createElement("div",{className:"fName"},r.a.createElement(i,{name:"firstName",label:"First name",type:"text",status:E.firstName||!1,value:t.firstName||"",onChange:b,message:"Please enter first name"})),r.a.createElement("div",{className:"lName"},r.a.createElement(i,{name:"lastName",label:"Last name",type:"text",status:E.lastName||!1,value:t.lastName||"",onChange:b,message:"Please enter last name"}))),r.a.createElement(i,{name:"userName",label:"Username",type:"text",status:E.userName||!1,value:t.userName||"",onChange:b,message:"Please enter username"}),r.a.createElement(i,{label:"Re-type username",name:"reUserName",type:"text",status:E.reUserName||!1,value:t.reUserName||"",onChange:b,message:"Please re-enter first name"}),r.a.createElement(i,{label:"Password",name:"password",type:"password",status:E.password||!1,value:t.password||"",onChange:b,message:"Please enter first name"}),r.a.createElement(i,{label:"Re-type password",name:"rePassword",type:"text",status:E.reUserName||!1,value:t.rePassword||"",onChange:b,message:"Please re-enter first name"}),r.a.createElement(u,{name:"NEXT",onClick:function(){console.log("submitted");var e=function(e,a){return 0===Object.keys(e).length&&e.constructor===Object?(a.firstName=!0,a.lastName=!0,a.userName=!0,a.reUserName=!0,a.password=!0,a.rePassword=!0,a):(""===e.firstName?a.firstName=!0:a.firstName=!1,""===e.lastName?a.lastName=!0:a.lastName=!1,""===e.userName?a.userName=!0:a.userName=!1,""===e.reUserName?a.reUserName=!0:a.reUserName=!1,""===e.password?a.password=!0:a.password=!1,""===e.rePassword?a.rePassword=!0:a.rePassword=!1,a)}(t,E);p(Object(v.a)(Object(v.a)({},E),{},{errors:e}))}}),r.a.createElement("div",{className:"tip"},r.a.createElement("p1",null,"Already have an account? "),r.a.createElement("p2",{onClick:function(){g.push("/")}},r.a.createElement("strong",null,"Sign in"))),r.a.createElement("div",{className:"footer"},r.a.createElement(N,null)))};var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:E}),r.a.createElement(c.a,{path:"/password",component:p}),r.a.createElement(c.a,{path:"/signup",component:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null,r.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.72a4096d.chunk.js.map