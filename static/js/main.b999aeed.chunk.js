(this.webpackJsonpsample=this.webpackJsonpsample||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(7),i=s.n(n),a=s(5),d=s(6),l=(s(12),s(0));var r=function(){var e,t=Object(c.useState)(""),s=Object(d.a)(t,2),n=s[0],i=s[1],r=Object(c.useState)([]),j=Object(d.a)(r,2),u=j[0],o=j[1],h=function(){o([].concat(Object(a.a)(u),[{text:n,id:Date.now(),status:!1,deleted:!1}])),i("")};return Object(l.jsxs)("div",{className:"outer",children:[Object(l.jsxs)("div",{className:"inner",children:[Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("h2",{className:"title",children:" My Todo App "})}),Object(l.jsxs)("div",{className:"body",children:[Object(l.jsxs)("div",{className:"insidebody",children:[Object(l.jsx)("input",{value:n,id:"myinput",onKeyPress:function(e){"Enter"===e.key&&h()},onChange:function(e){i(e.target.value)},type:"text",placeholder:"Add Items"}),Object(l.jsx)("i",{id:"trigger",onClick:h,className:"fas fa-plus"}),(e=console).log.apply(e,Object(a.a)(u))]}),Object(l.jsx)("div",{className:"todos",children:u.map((function(e){return!1===e.status&&!1===e.deleted?Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsx)("input",{onChange:function(t){o(u.filter((function(t){return e.id===t.id&&(t.status=!0),t})))},value:e.status,type:"checkbox",name:"",id:""}),Object(l.jsx)("p",{children:e.text})]}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)("i",{onClick:function(){o(u.filter((function(t){return t.id===e.id&&(t.deleted=!0),t})))},className:"fas fa-times"})})]}):null}))})]})]}),Object(l.jsxs)("div",{id:"container",children:[Object(l.jsxs)("div",{className:"innerleft",children:[Object(l.jsx)("h1",{className:"outsideh1",children:"Active "}),u.map((function(e){return!1===e.status&&!1===e.deleted?Object(l.jsx)("h1",{className:"insideh1",children:e.text}):null}))]}),Object(l.jsxs)("div",{className:"innermiddle",children:[Object(l.jsx)("h1",{className:"outsideh1",children:"Deleted "}),u.map((function(e){return!0===e.deleted?Object(l.jsx)("h1",{className:"insideh1",children:e.text}):null}))]}),Object(l.jsxs)("div",{className:"innerright",children:[Object(l.jsx)("h1",{className:"outsideh1",children:"Completed "}),u.map((function(e){return!0===e.status?Object(l.jsx)("h1",{className:"insideh1",children:e.text}):null}))]})]})]})};var j=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(r,{})})},u=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,15)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),i(e),a(e)}))};i.a.render(Object(l.jsx)(c.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),u()}},[[14,1,2]]]);
//# sourceMappingURL=main.b999aeed.chunk.js.map