(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{33:function(e,a,t){e.exports=t(62)},38:function(e,a,t){},39:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),c=t.n(r),i=(t(38),t(39),t(1)),m=t(2),s=t(4),o=t(3),p=t(5),u=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"navigationmenu"},l.a.createElement("div",{className:"navigationimg"},l.a.createElement("img",{src:"/logo.png"})),l.a.createElement("nav",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/"},l.a.createElement("img",{src:"/pin.png"}),"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"/pin.png"}),"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"/doctorlist"},l.a.createElement("img",{src:"/pin.png"}),"Available Doctors")),l.a.createElement("li",null,l.a.createElement("a",{href:"/bookapoinment"},l.a.createElement("img",{src:"/pin.png"}),"Book Appoinment")),l.a.createElement("li",null,l.a.createElement("a",{href:"/medicineshop"},l.a.createElement("img",{src:"/pin.png"}),"Medicine Shop")),l.a.createElement("li",null,l.a.createElement("a",{href:"/registration"},l.a.createElement("img",{src:"/pin.png"}),"Create Account")),l.a.createElement("li",null,l.a.createElement("a",{href:"/login"},l.a.createElement("img",{src:"/pin.png"}),"LogIn")))),this.props.children)}}]),a}(n.Component),d=t(11),E=t.n(d),h=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return this.props.medicines.map((function(e){return l.a.createElement("div",{className:"departmentbox"},l.a.createElement("div",{className:"singledepartmenbox"},l.a.createElement("p",null,e.name),l.a.createElement("img",{src:"/pill.png"}),l.a.createElement("p",null,e.quantity),l.a.createElement("p",null,e.status)))}))}}]),a}(n.Component),f=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={medicines:[]},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://127.0.0.1:8000/medicine/list/").then((function(a){return e.setState({medicines:a.data})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"hompagebody"},l.a.createElement("h2",null,"Medicine"),l.a.createElement("center",null,l.a.createElement(h,{medicines:this.state.medicines}))))}}]),a}(n.Component),g=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"hompagebody"},l.a.createElement("h2",null,"Departments"),l.a.createElement("center",null,l.a.createElement("div",{className:"departmentbox"},l.a.createElement("div",{className:"singledepartmenbox"},l.a.createElement("p",null,"Dentistry"),l.a.createElement("img",{src:"/doctor.png"}))),l.a.createElement("div",{className:"departmentbox"},l.a.createElement("div",{className:"singledepartmenbox"},l.a.createElement("p",null,"Cardiology"),l.a.createElement("img",{src:"/doctor.png"}))),l.a.createElement("div",{className:"departmentbox"},l.a.createElement("div",{className:"singledepartmenbox"},l.a.createElement("p",null,"ENT Specialists"),l.a.createElement("img",{src:"/doctor.png"}))),l.a.createElement("div",{className:"departmentbox"},l.a.createElement("div",{className:"singledepartmenbox"},l.a.createElement("p",null,"Astrology"),l.a.createElement("img",{src:"/doctor.png"}))),l.a.createElement("div",{className:"departmentbox"},l.a.createElement("div",{className:"singledepartmenbox"},l.a.createElement("p",null,"Neuroanatomy"),l.a.createElement("img",{src:"/doctor.png"}))),l.a.createElement("div",{className:"departmentbox"},l.a.createElement("div",{className:"singledepartmenbox"},l.a.createElement("p",null,"Blood Screening"),l.a.createElement("img",{src:"/doctor.png"})))))}}]),a}(n.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{classNameName:"hompagebody"},l.a.createElement("div",{className:"limiter"},l.a.createElement("div",{className:"container-login100"},l.a.createElement("div",{className:"wrap-login100"},l.a.createElement("div",{className:"login100-pic js-tilt","data-tilt":!0},l.a.createElement("img",{src:"/img-02.png",alt:"IMG"})),l.a.createElement("form",{className:"login100-form validate-form",method:"post",action:""},l.a.createElement("span",{className:"login100-form-title"},"User Login"),l.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Valid email is required: ex@abc.xyz"},l.a.createElement("input",{className:"input100",type:"text",name:"username",placeholder:"Username"}),l.a.createElement("span",{className:"focus-input100"}),l.a.createElement("span",{className:"symbol-input100"},l.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}))),l.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Password is required"},l.a.createElement("input",{className:"input100",type:"password",name:"password",placeholder:"Password"}),l.a.createElement("span",{className:"focus-input100"}),l.a.createElement("span",{className:"symbol-input100"},l.a.createElement("i",{className:"fa fa-lock","aria-hidden":"true"}))),l.a.createElement("div",{className:"container-login100-form-btn"},l.a.createElement("button",{className:"login100-form-btn"},"Login")),l.a.createElement("div",{className:"text-center p-t-12"},l.a.createElement("span",{className:"txt1"},"Forgot"),l.a.createElement("a",{className:"txt2",href:"/changepass"},"Password?")),l.a.createElement("div",null),l.a.createElement("div",{className:"text-center p-t-136"},l.a.createElement("a",{className:"txt2",href:"/registration"},"Create your Account",l.a.createElement("i",{className:"fa fa-long-arrow-right m-l-5","aria-hidden":"true"}))))))))}}]),a}(n.Component),N=t(15),b=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={username:"",password:"",email:"",first_name:"",last_name:""},t.inputchanged=function(e){t.setState(Object(N.a)({},e.target.name,e.target.value))},t.register=function(e){e.preventDefault(),E.a.post("http://127.0.0.1:8000/doctor/doctorregister/",t.state).then((function(e){console.log(e)}),(function(e){console.log(e)}))},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"hompagebody"},l.a.createElement("div",{className:"page-content"},l.a.createElement("div",{className:"form-v4-content"},l.a.createElement("div",{className:"form-left"},l.a.createElement("h2",null,"INFOMATION"),l.a.createElement("p",{className:"text-1"},"1.Unique email id 2.Same Password for both password field 3.Unique username."),l.a.createElement("p",{className:"text-2"},l.a.createElement("span",null,"Note:")," If you already have an account than click the button bellow and Login."),l.a.createElement("div",{className:"form-left-last"},l.a.createElement("a",{href:"/login"},"Have An Account???"))),l.a.createElement("form",{className:"form-detail",id:"myform"},l.a.createElement("h2",null,"REGISTER FORM"),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.inputchanged,className:"input-text",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-row form-row-1 "},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.inputchanged,className:"input-text",required:!0}))),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",null,"Your Email"),l.a.createElement("input",{type:"text",name:"email",id:"email",value:this.state.email,onChange:this.inputchanged,className:"input-text",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-row form-row-1"},l.a.createElement("label",null,"First Name"),l.a.createElement("input",{type:"text",name:"first_name",id:"first_name",value:this.state.first_name,onChange:this.inputchanged,className:"input-text"})),l.a.createElement("div",{className:"form-row form-row-1"},l.a.createElement("label",null,"Last Name"),l.a.createElement("input",{type:"text",name:"last_name",id:"last_name",value:this.state.last_name,onChange:this.inputchanged,className:"input-text",required:!0}))),l.a.createElement("div",{className:"form-row-last"},l.a.createElement("input",{type:"submit",name:"",className:"register",onClick:this.register}))))))}}]),a}(n.Component),y=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{classNameName:"homepagebody"},l.a.createElement("div",{className:"limiter"},l.a.createElement("div",{className:"container-login100"},l.a.createElement("div",{className:"wrap-login100"},l.a.createElement("div",{className:"login100-pic js-tilt","data-tilt":!0},l.a.createElement("img",{src:"/login/images/img-02.png",alt:"IMG"})),l.a.createElement("form",{className:"login100-form validate-form",method:"post",action:""},l.a.createElement("span",{className:"login100-form-title"},"Change Password"),l.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Valid email is required: ex@abc.xyz"},l.a.createElement("input",{className:"input100",type:"text",name:"username",placeholder:"Username"}),l.a.createElement("span",{className:"focus-input100"}),l.a.createElement("span",{className:"symbol-input100"},l.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}))),l.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Valid email is required: ex@abc.xyz"},l.a.createElement("input",{className:"input100",type:"text",name:"email",placeholder:"Email"}),l.a.createElement("span",{className:"focus-input100"}),l.a.createElement("span",{className:"symbol-input100"},l.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}))),l.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Password is required"},l.a.createElement("input",{className:"input100",type:"password",name:"password2",placeholder:"New Password"}),l.a.createElement("span",{className:"focus-input100"}),l.a.createElement("span",{className:"symbol-input100"},l.a.createElement("i",{className:"fa fa-lock","aria-hidden":"true"}))),l.a.createElement("div",{className:"container-login100-form-btn"},l.a.createElement("button",{className:"login100-form-btn"},"Submit")),l.a.createElement("div",{className:"text-center p-t-12"},l.a.createElement("span",{className:"txt1"},"User"),l.a.createElement("a",{className:"txt2",href:"/login"},"Login?")),l.a.createElement("div",{className:"text-center p-t-136"},l.a.createElement("a",{className:"txt2",href:"/registration"},"Create your Account",l.a.createElement("i",{className:"fa fa-long-arrow-right m-l-5","aria-hidden":"true"}))))))))}}]),a}(n.Component),x=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={doctors:[],appoinment:{doctorname:"",ptname:"",ptage:"",ptphnno:"",ptemail:"",ptappdate:"",ptstbltime:""}},t.inputchanged=function(e){var a=t.state.appoinment;a[e.target.name]=e.target.value,t.setState({appoinment:a})},t.appoinmentpost=function(e){e.preventDefault(),E.a.post("http://127.0.0.1:8000/appoinment/appoinment/",t.state.appoinment).then((function(e){console.log(e)}),(function(e){console.log(e)}))},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://127.0.0.1:8000/doctor/doctorlist/").then((function(a){return e.setState({doctors:a.data})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{classNameName:"hompagebody"},l.a.createElement("div",{className:"row justify-content-end"},l.a.createElement("div",{className:"col-lg-7"},l.a.createElement("div",{className:"popup_box "},l.a.createElement("div",{className:"popup_inner"},l.a.createElement("h3",null,"Book an",l.a.createElement("span",null,"Appointment")),l.a.createElement("form",{action:"#"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12"},l.a.createElement("select",Object(N.a)({className:"form-select wide",id:"default-select"},"className",""),l.a.createElement("option",{"data-display":"Please select doctor to visit"},"Please select doctor to visit "),this.state.doctors.map((function(a){return l.a.createElement("option",{value:a.fullname,onChange:e.inputchanged},a.fullname," (",a.achievement,")")})))),l.a.createElement("div",{className:"col-xl-9"},l.a.createElement("input",{type:"text",value:this.state.appoinment.ptname,onChange:this.inputchanged,placeholder:"Your name ",required:!0})),l.a.createElement("div",{className:"col-xl-3"},l.a.createElement("input",{type:"text",value:this.state.appoinment.ptage,onChange:this.inputchanged,placeholder:"Your age",required:!0})),l.a.createElement("div",{className:"col-xl-6"},l.a.createElement("input",{type:"text",value:this.state.appoinment.ptphnno,onChange:this.inputchanged,placeholder:"Phone number ",required:!0})),l.a.createElement("div",{className:"col-xl-6"},l.a.createElement("input",{type:"email",value:this.state.appoinment.ptemail,onChange:this.inputchanged,placeholder:"Email Address",required:!0})),l.a.createElement("div",{className:"col-xl-6"},l.a.createElement("input",{className:"datepicker",value:this.state.appoinment.ptappdate,onChange:this.inputchanged,placeholder:"Appointment Date",required:!0})),l.a.createElement("div",{className:"col-xl-6"},l.a.createElement("input",{className:"timepicker",value:this.state.appoinment.ptstbltime,onChange:this.inputchanged,placeholder:"Suitable time",required:!0})),l.a.createElement("div",{className:"col-xl-12"},l.a.createElement("button",{type:"submit",onClick:this.appoinmentpost,className:"boxed-btn3"},"Make an Appointment")))))))))}}]),a}(n.Component),j=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{classNameName:"homepagebody"},l.a.createElement("div",{className:"containerc"},l.a.createElement("div",{className:"complainPage"},l.a.createElement("h2",null," Patient's Prescription "),l.a.createElement("form",{action:"",method:"post",enctype:"multipart/form-data"},l.a.createElement("label",{for:"prescriptioncode"},"prescriptioncode"),l.a.createElement("input",{type:"number",required:"required",id:"prescriptioncode",name:"prescriptioncode",autocomplete:"off",placeholder:"code"}),l.a.createElement("label",{for:"name"},"Patient Name"),l.a.createElement("input",{type:"text",name:"name",id:"name",required:"required",autocomplete:"off",value:""}),l.a.createElement("label",{for:"email"},"Patient Email "),l.a.createElement("input",{type:"email",name:"email",id:"email",autocomplete:"off",value:""}),l.a.createElement("label",{for:"diseasename"}," Disease Name "),l.a.createElement("input",{type:"text",name:"diseasename",id:"phone-number",required:"required",autocomplete:"off",placeholder:"Disease Name"}),l.a.createElement("label",{for:"deaseasedesciption-category"},"Disease Description or category "),l.a.createElement("input",{type:"text",name:"deaseasedesciption-category",id:"area",required:"required",autocomplete:"off",placeholder:"Enter category"}),l.a.createElement("label",{for:"medicinename"},"Prescribed Medicine Name "),l.a.createElement("input",{type:"text",required:"required",id:"medicinename",name:"medicinename",autocomplete:"off",placeholder:"Enter Medicine Name"}),l.a.createElement("label",{for:"advicetopatien"},"Direction To Follow "),l.a.createElement("textarea",{required:"required",id:"directiontopatient",name:"directiontopatient",autocomplete:"off",placeholder:"Enter Direction to the patient"}," "),l.a.createElement("label",{for:"file"},"Upload File/Image "),l.a.createElement("input",{type:"file",name:"photo",multiple:!0}),l.a.createElement("input",{type:"submit",value:"Submit",required:!0})))))}}]),a}(n.Component),O=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return this.props.doctors.map((function(e){return l.a.createElement("div",{className:"departmentbox"},l.a.createElement("div",{className:"singledepartmenbox"},l.a.createElement("p",null,e.fullname),l.a.createElement("img",{src:"/doctor.png"}),l.a.createElement("p",null,e.achievement),l.a.createElement("p",null,e.dept)))}))}}]),a}(n.Component),w=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={doctors:[]},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://127.0.0.1:8000/doctor/doctorlist/").then((function(a){return e.setState({doctors:a.data})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"hompagebody"},l.a.createElement("h2",null,"Registered Doctor's"),l.a.createElement("center",null,l.a.createElement(O,{doctors:this.state.doctors}))))}}]),a}(n.Component),q=t(30),k=t(12);var C=function(){return l.a.createElement(q.a,null,l.a.createElement(u,null,l.a.createElement(k.c,null,l.a.createElement(k.a,{path:"/",exact:!0,component:g}),l.a.createElement(k.a,{path:"/medicineshop",exact:!0,component:f}),l.a.createElement(k.a,{path:"/login",component:v}),l.a.createElement(k.a,{path:"/registration",component:b}),l.a.createElement(k.a,{path:"/changepass",component:y}),l.a.createElement(k.a,{path:"/bookapoinment",component:x}),l.a.createElement(k.a,{path:"/prescription",component:j}),l.a.createElement(k.a,{path:"/doctorlist",component:w}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.9e72fdbe.chunk.js.map