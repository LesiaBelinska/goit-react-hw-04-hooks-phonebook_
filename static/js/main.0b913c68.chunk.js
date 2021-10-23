(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},17:function(t,e,n){},18:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=(n(17),n(12)),i=n(4),u=(n(18),n(2)),l=n.n(u),b=n(3),m=n.n(b),j=n(0);function d(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),b=u[0],d=u[1],f=function(){return l.a.generate()},h=function(){return l.a.generate()},_=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":d(a);break;default:return}},p=function(){o(""),d("")};return Object(j.jsxs)("form",{className:m.a.form,onSubmit:function(t){t.preventDefault(),e(r,b),p()},children:[Object(j.jsxs)("label",{className:m.a.label,htmlFor:f,children:["Name",Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:_,id:f,className:m.a.input})]}),Object(j.jsxs)("label",{className:m.a.label,htmlFor:h,children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:b,onChange:_,id:h,className:m.a.input})]}),Object(j.jsx)("button",{className:m.a.button,type:"submit",children:"Add contact"})]})}var f=n(10),h=n.n(f);function _(t){var e=t.value,n=t.onChange,a=function(){return l.a.generate()};return Object(j.jsxs)("label",{className:h.a.label,htmlFor:a,children:["Find contacts by name",Object(j.jsx)("input",{className:h.a.input,type:"text",value:e,onChange:n,id:a})]})}var p=n(6),O=n.n(p),x=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteContact;return Object(j.jsxs)("li",{className:O.a.item,children:[n," : ",a,Object(j.jsx)("button",{className:O.a.button,type:"button",onClick:function(){return c(e)},children:"Delete"})]})},C=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:O.a.list,children:e().map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsx)(x,{id:e,name:a,number:c,onDeleteContact:n},e)}))})};var v=function(){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:[]})),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),u=o[0],b=o[1];return Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"title",children:"Phonebook"}),Object(j.jsx)(d,{onSubmit:function(t,e){var a={id:l.a.generate(),name:t,number:e};n.find((function(t){return t.name===a.name}))?alert("".concat(a.name," is already in contacts.")):c((function(t){return[a].concat(Object(s.a)(t))}))},contacts:n}),Object(j.jsx)("h2",{className:"subtitle",children:"Contacts"}),Object(j.jsx)(_,{value:u,onChange:function(t){b({filter:t.currentTarget.value})}}),Object(j.jsx)(C,{contacts:function(){var t=u.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))},onDeleteContact:function(t){c(n.filter((function(e){return e.id!==t})))}})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}},6:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",text:"ContactList_text__2dM24",span:"ContactList_span__330r8",button:"ContactList_button__1RuFy",heart:"ContactList_heart__2CfmH"}}},[[28,1,2]]]);
//# sourceMappingURL=main.0b913c68.chunk.js.map