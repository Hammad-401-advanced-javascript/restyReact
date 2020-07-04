(this.webpackJsonprestyReact=this.webpackJsonprestyReact||[]).push([[0],{26:function(e,t,a){e.exports=a(47)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(6),o=a(8),l=a(7),s=a(0),i=a.n(s),c=a(22),u=a.n(c),d=a(10),h=a(15),m=a.n(h),p=a(1),g=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("h1",null,"RESTy"),i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(d.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(d.c,{to:"/history"},"History")))))}}]),a}(i.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("footer",null,"\xa9 2018 Code Fellows")}}]),a}(i.a.Component),b=a(18),f=a.n(b),v=a(24),E=a(12),O=a(25),k=a.n(O),S=(a(43),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleSubmit=function(){var e=Object(v.a)(f.a.mark((function e(t){var a,n,o,l,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(r.state.url&&r.state.method||r.props.url)){e.next=45;break}if(a="",n="",o="",l={url:r.state.url,method:r.state.method,body:r.state.body},"post"!==r.state.method||!r.state.body.data){e.next=15;break}return o=r.state.body.data,e.next=10,r.postHandler();case 10:return e.next=12,r.saveLocalStorage();case 12:r.props.toggleLoading(),e.next=42;break;case 15:if("put"!==r.state.method||!r.state.body.data){e.next=24;break}return r.props.toggleLoading(),e.next=19,r.postHandler();case 19:return e.next=21,r.saveLocalStorage();case 21:r.props.toggleLoading(),e.next=42;break;case 24:if("delete"!==r.state.method){e.next=34;break}return r.props.toggleLoading(),s={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:o})},e.next=29,fetch(r.state.url,s);case 29:return e.next=31,r.saveLocalStorage();case 31:r.props.toggleLoading(),e.next=42;break;case 34:return r.props.toggleLoading(),a=r.state.url||r.props.url,n=r.state.method,k.a.get(a).then((function(e){var t=e.body,a=e.headers;r.props.handler(t,a)})),e.next=40,r.saveLocalStorage();case 40:return e.next=42,r.props.toggleLoading();case 42:r.setState({request:l,url:a,method:n,body:o}),e.next=46;break;case 45:alert("missing information");case 46:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.handleChangeURL=function(e){var t=e.target.value;r.setState({url:t})},r.handleChangeMethod=function(e){var t=e.target.id;r.setState({method:t})},r.bodyHandel=function(e){var t=JSON.parse(e.target.value);r.setState({body:{data:t}})},r.handleSubmit=r.handleSubmit.bind(Object(E.a)(r)),r.state={url:"",method:"",body:"",request:{}},r.hestoryArray=[],r}return Object(r.a)(a,[{key:"saveLocalStorage",value:function(){var e=JSON.parse(localStorage.getItem("history"));e&&(this.hestoryArray=e);var t={method:this.state.method,url:this.state.url,body:this.state.body},a=0;this.hestoryArray.forEach((function(e){e.method===t.method&&e.url===t.url&&(a=1)})),0===a&&(this.hestoryArray.push(t),localStorage.setItem("history",JSON.stringify(this.hestoryArray)))}},{key:"postHandler",value:function(){var e=this;this.props.toggleLoading();var t={method:this.state.method.toUpperCase(),cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(this.state.body.data)};fetch(this.state.url,t).then((function(t){return e.setState(e.state.body.data)})),this.props.toggleLoading()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",null,i.a.createElement("span",null,"URL: "),i.a.createElement("input",{name:"url",type:"text",value:this.props.url,onChange:this.handleChangeURL}),i.a.createElement("button",{type:"submit"},this.props.title)),i.a.createElement("label",{className:"methods"},i.a.createElement("span",{className:"get"===this.state.method?"active":"",id:"get",onClick:this.handleChangeMethod},"GET"),i.a.createElement("span",{className:"post"===this.state.method?"active":"",id:"post",onClick:this.handleChangeMethod},"POST"),i.a.createElement("span",{className:"put"===this.state.method?"active":"",id:"put",onClick:this.handleChangeMethod},"PUT"),i.a.createElement("span",{className:"delete"===this.state.method?"active":"",id:"delete",onClick:this.handleChangeMethod},"DELETE")),i.a.createElement("textarea",{name:"body",rows:"7",cols:"50",value:this.props.body,onChange:this.bodyHandel})),i.a.createElement("section",{className:"results"},i.a.createElement("span",{className:"method"},this.state.request.method,"  ",this.props.method),i.a.createElement("span",{className:"url"},this.state.request.url," ",this.props.url)))}}]),a}(i.a.Component)),C=(a(44),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handlerClick=r.handlerClick.bind(Object(E.a)(r)),r}return Object(r.a)(a,[{key:"handlerClick",value:function(e){var t=e.target.value.split("  ");if(t[5]){var a=t[1],n=t[3],r=t[5];this.props.handel(a,n,r)}else{var o=t[1],l=t[3];this.props.handel(o,l)}}},{key:"getDataLocal",value:function(){var e=this,t=JSON.parse(localStorage.getItem("history"));if(t)return t.map((function(t,a){if(t.body){var n=JSON.stringify(t.body);return i.a.createElement("input",{type:"text",readOnly:"readonly",onClick:e.handlerClick,key:a,value:"method:  ".concat(t.method,"  url:  ").concat(t.url,"  body:  ").concat(n)})}return i.a.createElement("input",{type:"text",readOnly:"readonly",onClick:e.handlerClick,key:a,value:"method:  ".concat(t.method,"  url:  ").concat(t.url)})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"history-links"},i.a.createElement("ul",null,i.a.createElement(d.b,{to:"/"},this.getDataLocal())))}}]),a}(i.a.Component)),j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?t:null},x=function(e){return i.a.Children.map(e.children,(function(t){return i.a.cloneElement(t,{condition:e.condition})}))},L=function(e){return j(e.condition,e.children)},N=function(e){return j(!e.condition,e.children)},H=(a(45),function(e){return console.log(e.loading),i.a.createElement(i.a.Fragment,null,i.a.createElement(x,{condition:"true"===e.loading},i.a.createElement(L,null,i.a.createElement("div",{className:"loading-true"})),i.a.createElement(N,null)))}),J=(a(46),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).toggleLoading=function(){if("false"===r.state.loading){r.setState({loading:"true"}),console.log("this.state.loading: ","true")}else setTimeout((function(){r.setState({loading:"false"}),console.log("this.state.loading: ","false")}),500)},r.handleForm=function(e,t){r.setState({results:e,header:t})},r.handelHistory=function(e,t,a){var n=JSON.stringify(a);r.setState({method:e,url:t,body:{bodyData:n}})},r.state={loading:"false",header:[],results:[]},r}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,null),i.a.createElement(p.a,{path:"/",exact:!0},i.a.createElement(S,{title:"button text",toggleLoading:this.toggleLoading,handler:this.handleForm,method:this.state.method,url:this.state.url,body:this.state.body}),i.a.createElement(H,{loading:this.state.loading}),i.a.createElement("h2",null,"Headers:"),i.a.createElement(m.a,{src:this.state.header}),i.a.createElement("h2",null,"Results:"),i.a.createElement(m.a,{src:this.state.results})),i.a.createElement(p.a,{path:"/history"},i.a.createElement(C,{handel:this.handelHistory})),i.a.createElement(y,null))}}]),a}(i.a.Component)),T=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(J,null),";")}}]),a}(i.a.Component),w=document.getElementById("root");u.a.render(i.a.createElement(T,null),w)}},[[26,1,2]]]);
//# sourceMappingURL=main.b8a93481.chunk.js.map