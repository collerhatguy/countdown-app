(this["webpackJsonpcountdown-app"]=this["webpackJsonpcountdown-app"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(4),i=c.n(n),j=c(2),o=c(0);function r(e){var t=e.timeUnit,c=e.value;return Object(o.jsxs)("div",{className:"counter",children:[Object(o.jsx)("div",{className:"time-box",children:c}),Object(o.jsx)("div",{className:"time-unit",children:t})]})}function b(){var e=new Date("Jun 25, 2021 16:37:52").getTime(),t=Object(a.useState)((new Date).getTime()),c=Object(j.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(e-s),b=Object(j.a)(i,2),u=b[0],O=b[1],l=Object(a.useState)(Math.floor(u/864e5)),d=Object(j.a)(l,2),m=d[0],f=d[1],v=Object(a.useState)(Math.floor(u%864e5/36e5)),h=Object(j.a)(v,2),x=h[0],p=h[1],g=Object(a.useState)(Math.floor(u%36e5/6e4)),M=Object(j.a)(g,2),S=M[0],w=M[1],U=Object(a.useState)(Math.floor(u%6e4/1e3)),D=Object(j.a)(U,2),N=D[0],k=D[1],J=Object(a.useState)(0),T=Object(j.a)(J,2),y=T[0],E=T[1];return setInterval((function(){E(y+1)}),1e3),Object(a.useEffect)((function(){n((new Date).getTime()),O(e-s),f(Math.floor(u/864e5)),p(Math.floor(u%864e5/36e5)),w(Math.floor(u%36e5/6e4)),k(Math.floor(u%6e4/1e3))}),[y]),Object(o.jsxs)("div",{id:"countdown-container",children:[Object(o.jsx)(r,{timeUnit:"Days",value:m}),Object(o.jsx)(r,{timeUnit:"Hours",value:x}),Object(o.jsx)(r,{timeUnit:"Minutes",value:S}),Object(o.jsx)(r,{timeUnit:"Seconds",value:N})]})}var u=c.p+"static/media/icon-facebook.a9208377.svg",O=c.p+"static/media/icon-instagram.b94ff26a.svg",l=c.p+"static/media/icon-pinterest.ea0db8e7.svg";c(10);var d=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{}),Object(o.jsxs)("footer",{children:[Object(o.jsx)("img",{src:u}),Object(o.jsx)("img",{src:O}),Object(o.jsx)("img",{src:l})]})]})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.7e9009a3.chunk.js.map