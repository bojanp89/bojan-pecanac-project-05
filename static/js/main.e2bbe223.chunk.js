(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(44)},23:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(14),l=n.n(r),u=(n(23),n(15)),s=n(3),c=n(5),o=n(4),m=n(2),h=n(6),p=(n(24),n(16)),d=n.n(p),g=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Quick Look Travel Guide"))}}]),t}(i.a.Component),E=(i.a.Component,function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(o.a)(t).call(this))).handleChange=function(t){e.setState(Object(u.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.setState({isLoading:!0}),e.getCountries(e.state.country)},e.getCountries=function(t){d()({method:"GET",url:"https://restcountries.eu/rest/v2/name/"+t}).then(function(t){e.setState({isLoading:!1,apiResults:t.data[0],currencies:t.data[0].currencies[0],languages:t.data[0].languages[0]})})},e.state={apiResults:[],country:"",isLoading:"",currencies:"",languages:""},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}}]),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(a.Fragment,null,i.a.createElement("div",{className:"wrapper"},i.a.createElement(g,null),i.a.createElement("main",null,i.a.createElement("form",{action:"submit",onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",placeholder:"Enter country",onChange:this.handleChange,name:"country",value:this.state.country}),i.a.createElement("button",{type:"submit"},"Find Country")),this.state.isLoading?i.a.createElement("p",null,"Loading:"):0!==this.state.apiResults.length&&i.a.createElement("div",null,i.a.createElement("h2",null,this.state.apiResults.name),i.a.createElement("p",null,"Currencies: ",this.state.currencies.code," ",this.state.currencies.name),i.a.createElement("p",null,"Capital: ",this.state.apiResults.capital),i.a.createElement("p",null,"Language: ",this.state.languages.name),i.a.createElement("p",null,"Population: ",this.state.apiResults.population),i.a.createElement("img",{src:this.state.apiResults.flag})))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.e2bbe223.chunk.js.map