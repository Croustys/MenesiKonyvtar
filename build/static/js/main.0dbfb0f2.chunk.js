(this.webpackJsonpbooks=this.webpackJsonpbooks||[]).push([[0],{138:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),l=a.n(o),c=(a(79),a(13)),u=a(14),s=a(16),i=a(15),m=a(29),h=a(10),d=(a(30),a(157)),p=a(158),b=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"header"},"HEHE"))}}]),a}(n.Component),g=a(12),E=a.n(g),v=a(23),f=a(20),k=a.n(f);a(97);function y(e){var t=e.Name,a=e.Writer,n=e.Publisher;return r.a.createElement("div",{className:"card"},r.a.createElement("h1",{className:"card-text"},t),r.a.createElement("h1",{className:"card-text"},a),r.a.createElement("h1",{className:"card-text"},n))}a(98);var C=a(151),x=a(156),S=a(65),L=a(25),B=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={stateData:[],searchWord:"",basedSearch:1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(v.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("api/v1/books");case 3:return t=e.sent,e.next=6,t.data;case 6:a=e.sent,this.setState({stateData:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error: ".concat(e.t0));case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(e){document.querySelectorAll(".btn-chosen").forEach((function(e){e.classList.remove("btn-chosen"),e.className="btn-sw btn btn-primary"})),document.getElementById(e).className="btn-chosen btn primary",this.setState({basedSearch:e})}},{key:"render",value:function(){var e=this,t=this.state.stateData.filter((function(t){var a=e.state.basedSearch,n=e.state.searchWord.toLowerCase();return 1===a?!!t.Name&&t.Name.toLowerCase().includes(n):2===a?!!t.Writer&&t.Writer.toLowerCase().includes(n):!!t.Publisher&&t.Publisher.toLowerCase().includes(n)}));return 0===this.state.stateData.length?r.a.createElement(L.BoxLoading,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"header"},"Books"),r.a.createElement("h1",null,"Search based on:"),r.a.createElement(C.a,{className:"btn-sw",onClick:function(){return e.handleClick(1)},id:"1"},"Names"),r.a.createElement(C.a,{className:"btn-sw",onClick:function(){return e.handleClick(2)},id:"2"},"Writer"),r.a.createElement(C.a,{className:"btn-sw",onClick:function(){return e.handleClick(3)},id:"3"},"Publisher"),r.a.createElement(x.a,null,r.a.createElement(S.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(t){return e.setState({searchWord:t.target.value})}})),r.a.createElement("div",{className:"wrapper"},t.map((function(e,t){return r.a.createElement(y,{key:t,Name:e.Name,Writer:e.Writer,Publisher:e.Publisher})}))))}}]),a}(n.Component),N=a(71),P=a(152),w=a(159),O=a(153),j=a(154),I=a(155),W=(a(138),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",pw:"",modal:!1},e}return Object(u.a)(a,[{key:"toggle",value:function(){var e=this.state.modal;this.setState({modal:!e})}},{key:"handleLogin",value:function(){var e=Object(v.a)(E.a.mark((function e(){var t,a,n,r,o,l,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.username,n=t.pw,e.prev=1,e.next=4,k.a.get("/api/v1/users/login");case 4:r=e.sent,o=Object(N.a)(r.data);try{for(o.s();!(l=o.n()).done;)(c=l.value).name===a&&c.password===n&&this.props.handleLogin(!0)}catch(u){o.e(u)}finally{o.f()}e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error$ ".concat(e.t0));case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(P.a,{className:"Login-button",color:"primary",onClick:function(){return e.toggle()}},"Login"),r.a.createElement(w.a,{isOpen:this.state.modal,toggle:function(){return e.toggle()}},r.a.createElement(O.a,{toggle:function(){return e.toggle()}},"Login"),r.a.createElement(j.a,null,"Seems like you're not logged in!"),r.a.createElement(j.a,null,"Username"),r.a.createElement("form",null,r.a.createElement("input",{type:"text",autoComplete:"current-password",onChange:function(t){return e.setState({username:t.target.value})}}),r.a.createElement(j.a,null,"Password"),r.a.createElement("input",{type:"password",autoComplete:"current-password",onChange:function(t){return e.setState({pw:t.target.value})}})),r.a.createElement(I.a,null,r.a.createElement(P.a,{color:"primary",onClick:function(){return e.handleLogin()}},"Login"),r.a.createElement(P.a,{color:"secondary",onClick:function(){return e.toggle()}},"Cancel"))))}}]),a}(n.Component)),A=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={_id:null,Publisher:"",Writer:"",Name:"",Amount:null,Price:null,Value:null,rendering:!1,loggedIn:!1,updateRedirect:!1,redirectTo:""},e}return Object(u.a)(a,[{key:"handleSubmit",value:function(){var e=Object(v.a)(E.a.mark((function e(){var t,a,n,r,o,l,c,u,s,i,m,h;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({rendering:!0}),e.prev=1,e.next=4,k.a.get("/api/v1/ids");case 4:return t=e.sent,a=t.data.length-1,n=t.data[a].id,r=n+1,e.next=10,k.a.post("/api/v1/ids/add/".concat(r),{id:r});case 10:this.setState({_id:r}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("Error: ".concat(e.t0));case 16:return e.prev=16,o=this.state,l=o._id,c=o.Publisher,u=o.Writer,s=o.Name,i=o.Amount,m=o.Price,h=o.Value,e.next=20,k.a.post("/api/v1/books/add",{_id:l,Publisher:c,Writer:u,Name:s,Amount:i,Price:m,Value:h});case 20:200===e.sent.status&&this.setState({Publisher:"",Writer:"",Name:"",Amount:null,Price:null,Value:null,rendering:!1}),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(16),console.log("Error: ".concat(e.t1));case 27:case"end":return e.stop()}}),e,this,[[1,13],[16,24]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleLogin",value:function(e){e&&(this.setState({loggedIn:!0}),sessionStorage.setItem("loggedIn",!0))}},{key:"handleUpdateRedirect",value:function(e){this.setState({updateRedirect:!this.state.updateRedirect,redirectTo:e})}},{key:"render",value:function(){var e=this;return this.state.rendering?r.a.createElement(L.BoxLoading,null):this.state.loggedIn||sessionStorage.getItem("loggedIn")?this.state.updateRedirect?r.a.createElement(h.a,{to:"/books".concat(this.state.redirectTo)}):r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(x.a.Group,{controlId:"Large text"},r.a.createElement(x.a.Label,null,"Book's Publisher"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter the Book's Publisher",onChange:function(t){return e.setState({Publisher:t.target.value})}})),r.a.createElement(x.a.Group,{controlId:"Large text"},r.a.createElement(x.a.Label,null,"Book's Writer"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter the Book's Writer",onChange:function(t){return e.setState({Writer:t.target.value})}})),r.a.createElement(x.a.Group,{controlId:"Large text"},r.a.createElement(x.a.Label,null,"Book's Name"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter the Book's Name",onChange:function(t){return e.setState({Name:t.target.value})}})),r.a.createElement(x.a.Group,{controlId:"Large text"},r.a.createElement(x.a.Label,null,"Book Amount"),r.a.createElement(x.a.Control,{type:"number",placeholder:"Enter the Amount of Books",onChange:function(t){return e.setState({Amount:t.target.value})}})),r.a.createElement(x.a.Group,{controlId:"Large text"},r.a.createElement(x.a.Label,null,"Book's Price"),r.a.createElement(x.a.Control,{type:"number",placeholder:"Enter the Book's Price",onChange:function(t){return e.setState({Price:t.target.value})}})),r.a.createElement(x.a.Group,{controlId:"Large text"},r.a.createElement(x.a.Label,null,"Book's Value"),r.a.createElement(x.a.Control,{type:"number",placeholder:"Enter the Book's Value",onChange:function(t){return e.setState({Value:t.target.value})}})),r.a.createElement(C.a,{variant:"primary",type:"button",onClick:function(){return e.handleSubmit()}},"Submit")),r.a.createElement(C.a,{variant:"primary",type:"button",onClick:function(){return e.handleUpdateRedirect("/update")}},"Update Books"),r.a.createElement(C.a,{variant:"primary",type:"button",onClick:function(){return e.handleUpdateRedirect("/delete")}},"Delete Books")):r.a.createElement(W,{handleLogin:function(t){return e.handleLogin(t)}})}}]),a}(n.Component),G=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={_id:null,Publisher:"",Writer:"",Name:"",Amount:null,Price:null,Value:null,rendering:!1},e}return Object(u.a)(a,[{key:"handleSubmit",value:function(){var e=Object(v.a)(E.a.mark((function e(){var t,a,n,r,o,l,c,u;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t._id,n=t.Publisher,r=t.Writer,o=t.Name,l=t.Amount,c=t.Price,u=t.Value,this.setState({rendering:!0}),e.prev=2,e.next=5,k.a.put("/api/v1/books/".concat(a),{_id:a,Publisher:n,Writer:r,Name:o,Amount:l,Price:c,Value:u});case 5:200===e.sent.status&&(alert("Update was successfull"),this.setState({Publisher:"",Writer:"",Name:"",Amount:null,Price:null,Value:null,rendering:!1})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("Error: ".concat(e.t0));case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.rendering?r.a.createElement(L.BoxLoading,null):r.a.createElement(x.a,null,r.a.createElement(x.a.Group,{controlId:"Large text"},r.a.createElement(x.a.Label,null,"Book's Id"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter the Book's Id",onChange:function(t){return e.setState({_id:t.target.value})}})),r.a.createElement(x.a.Group,{controlId:"Large text"},r.a.createElement(x.a.Label,null,"Book's Publisher"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter the Book's Publisher",onChange:function(t){return e.setState({Publisher:t.target.value})}})),r.a.createElement(x.a.Group,{controlId:"Large text"},r.a.createElement(x.a.Label,null,"Book's Writer"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter the Book's Writer",onChange:function(t){return e.setState({Writer:t.target.value})}})),r.a.createElement(x.a.Group,{controlId:"Large text"},r.a.createElement(x.a.Label,null,"Book's Name"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter the Book's Name",onChange:function(t){return e.setState({Name:t.target.value})}})),r.a.createElement(x.a.Group,{controlId:"Large text"},r.a.createElement(x.a.Label,null,"Book Amount"),r.a.createElement(x.a.Control,{type:"number",placeholder:"Enter the Amount of Books",onChange:function(t){return e.setState({Amount:t.target.value})}})),r.a.createElement(x.a.Group,{controlId:"Large text"},r.a.createElement(x.a.Label,null,"Book's Price"),r.a.createElement(x.a.Control,{type:"number",placeholder:"Enter the Book's Price",onChange:function(t){return e.setState({Price:t.target.value})}})),r.a.createElement(x.a.Group,{controlId:"Large text"},r.a.createElement(x.a.Label,null,"Book's Value"),r.a.createElement(x.a.Control,{type:"number",placeholder:"Enter the Book's Value",onChange:function(t){return e.setState({Value:t.target.value})}})),r.a.createElement(C.a,{variant:"primary",type:"button",onClick:function(){return e.handleSubmit()}},"Submit"))}}]),a}(n.Component),V=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={_id:null,rendering:!1},e}return Object(u.a)(a,[{key:"handleSubmit",value:function(){var e=Object(v.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state._id,this.setState({rendering:!0}),e.prev=2,e.next=5,k.a.delete("api/v1/books/".concat(t),{});case 5:200===e.sent.status&&this.setState({_id:null,rendering:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("Error: ".concat(e.t0));case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.rendering?r.a.createElement(L.BoxLoading,null):r.a.createElement(x.a,null,r.a.createElement(x.a.Group,{controlId:"Large text"},r.a.createElement(x.a.Label,null,"Book's Id"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter the Book's Id",onChange:function(t){return e.setState({_id:t.target.value})}})),r.a.createElement(C.a,{variant:"primary",type:"button",onClick:function(){return e.handleSubmit()}},"Submit"))}}]),a}(n.Component),_=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(d.a,{bg:"light",expand:"lg"},r.a.createElement(d.a.Brand,{href:""},"Menesi K\xf6nyvt\xe1r"),r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(m.b,{to:"/",className:"nav-link"},"Home"),r.a.createElement(m.b,{to:"/books",className:"nav-link"},"Books"),r.a.createElement(m.b,{to:"/books/add",className:"nav-link"},"Post Books")))),r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",exact:!0,component:b}),r.a.createElement(h.b,{path:"/books",exact:!0,component:B}),r.a.createElement(h.b,{path:"/books/add",exact:!0,component:A}),r.a.createElement(h.b,{path:"/books/update",exact:!0,component:G}),r.a.createElement(h.b,{path:"/books/delete",exact:!0,component:V})))}}]),a}(r.a.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))},74:function(e,t,a){e.exports=a(148)},79:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.0dbfb0f2.chunk.js.map