(this.webpackJsonpemailvalidator=this.webpackJsonpemailvalidator||[]).push([[0],{11:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(4),r=t.n(i),l=(t(11),t(2)),o=t.n(l),s=t(5),d=t(1);t(13);var m=function(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)(!1),l=Object(d.a)(r,2),m=l[0],p=l[1],u=Object(n.useState)(!1),v=Object(d.a)(u,2),h=v[0],f=v[1],b=function(){var e=Object(s.a)(o.a.mark((function e(a){var n,c,i,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/".concat(t),e.next=3,fetch(n,{headers:{"x-rapidapi-host":"pozzad-email-validator.p.rapidapi.com","x-rapidapi-key":"9c4837d252msh2a0cd163ca7c47bp1702dejsnf7e2cbcc8a04"}});case 3:return c=e.sent,e.next=6,c.json();case 6:i=e.sent,r=i.isValid,console.log("is valid :  ",r),r&&p(r),f(!0);case 11:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"wrapper-inside"},c.a.createElement("div",{className:""},c.a.createElement("input",{id:"icon_prefix",className:"validate",name:"email",type:"email",value:t,onChange:function(e){p(!1),f(!1),i(e.target.value)},placeholder:"email"})),c.a.createElement("div",null,c.a.createElement("button",{className:"waves-effect waves-light btn teal accent-3",role:"button",onClick:b},"check")),h?m?c.a.createElement("h3",{className:" green accent-4 "},"Email : ",t," is ",m?"valid":"not valid"):c.a.createElement("h3",{className:" red accent-4 "},"Email : ",t," is ",m?"valid":"not valid"):"")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,a,t){e.exports=t(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.a7da21ce.chunk.js.map