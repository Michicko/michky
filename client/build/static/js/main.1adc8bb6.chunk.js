(this.webpackJsonpreactstartupfiles=this.webpackJsonpreactstartupfiles||[]).push([[0],{4:function(e,t){e.exports={GET_PROJECTS_BEGINS:"GET_PROJECTS_BEGINS",GET_PROJECTS_ERROR:"GET_PROJECTS_ERROR",GET_PROJECTS_SUCCESS:"GET_PROJECTS_SUCCESS",SHOW_ALERT:"SHOW_ALERT",HIDE_ALERT:"HIDE_ALERT",DELETE_PROJECT:"DELETE_PROJECT",DELETE_PROJECT_IMAGE:"DELETE_PROJECT_IMAGE",UPDATE_PROJECT:"UPDATE_PROJECT",CREATE_PROJECT:"CREATE_PROJECT",SET_FORM:"SET_FORM",UPDATE_FORM:"UPDATE_FORM",CLEAR_FORM:"CLEAR_FORM",SET_PROJECT_IMAGE:"SET_PROJECT_IMAGE",ADD_STACK:"ADD_STACK",REMOVE_STACK:"REMOVE_STACK",SET_STACKS:"SET_STACKS"}},54:function(e,t){e.exports=["home","about","projects","contact"]},60:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(19),s=a.n(n),r=(a(60),a(11)),i=a(6),o=a(1),l=function(e){var t=e.title;return Object(o.jsx)("h3",{className:"topbar-title",children:t})},j=function(e){var t=e.title;return Object(o.jsx)("div",{className:"topbar",children:Object(o.jsx)(l,{title:t})})},d=a(16),u=a(27),m=a(3),p=a(5),b=a.n(p),O=a(10),h=a(9),f=a(20),x=a(21),g=a(4),v=function(e,t){if(t.type===g.GET_PROJECTS_BEGINS)return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0});if(t.type===g.GET_PROJECTS_SUCCESS){var a=t.payload;return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,projects:a})}if(t.type===g.GET_PROJECTS_ERROR)return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,isError:!0});if(t.type===g.SHOW_ALERT){var c=t.payload,n=c.type,s=c.message;return Object(m.a)(Object(m.a)({},e),{},{showAlert:!0,alertType:n,alertMessage:s})}if(t.type===g.HIDE_ALERT)return Object(m.a)(Object(m.a)({},e),{},{showAlert:!1});if(t.type===g.DELETE_PROJECT){var r=t.payload,i=e.projects.filter((function(e){return e._id!==r}));return Object(m.a)(Object(m.a)({},e),{},{projects:i})}if(t.type===g.UPDATE_PROJECT){var o=t.payload,l=e.projects.filter((function(e){return e._id!==o._id})),j=[].concat(Object(x.a)(l||[]),[o]);return Object(m.a)(Object(m.a)({},e),{},{projects:j})}if(t.type===g.SET_FORM){var d=t.payload,u=d.name,p=d.value;return Object(m.a)(Object(m.a)({},e),{},{form:Object(m.a)(Object(m.a)({},e.form),{},Object(f.a)({},u,p))})}if(t.type===g.CLEAR_FORM)return Object(m.a)(Object(m.a)({},e),{},{form:{name:"",link:"",image:null,description:"",stacks:[]}});if(t.type===g.SET_PROJECT_IMAGE){var b=t.payload;return Object(m.a)(Object(m.a)({},e),{},{projectImage:b})}if(t.type===g.UPDATE_FORM){var O=t.payload;return Object(m.a)(Object(m.a)({},e),{},{form:{name:O.name,link:O.link,image:O.image,description:O.description,stacks:O.stacks}})}if(t.type===g.DELETE_PROJECT_IMAGE){var h=t.payload,v=e.projects.map((function(e){return e.image.cloudinary_id===h&&(e.image=null),e}));return Object(m.a)(Object(m.a)({},e),{},{projects:v})}if(t.type===g.CREATE_PROJECT){var E=t.payload;return Object(m.a)(Object(m.a)({},e),{},{projects:[].concat(Object(x.a)(e.projects),[E])})}if(t.type===g.ADD_STACK){var k=t.payload;return Object(m.a)(Object(m.a)({},e),{},{techStacks:[].concat(Object(x.a)(e.techStacks),[k])})}if(t.type===g.REMOVE_STACK){var y=t.payload,N=e.techStacks.filter((function(e){return e!==y}));return Object(m.a)(Object(m.a)({},e),{},{techStacks:N})}if(t.type===g.SET_STACKS){var C=t.payload;return Object(m.a)(Object(m.a)({},e),{},{techStacks:C})}return"No matching action ".concat(t.type," type")},E=a(36),k=a.n(E),y=function(e){return Object.keys(e)},N=function(e){return"[object Object]"===Object.prototype.toString.call(e)},C=function e(t,a){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.create(null),n=y(t);return n.forEach((function(n){N(t)&&N(a)&&(t[n]!==a[n]?c[n]=a[n]:e(t[n],a[n],c))})),c},A=Object(c.createContext)(),T={projects:[],isLoading:!1,isError:!1,showAlert:!1,alertType:"",alertMessage:"",form:{name:"",link:"",image:null,description:"",stacks:[]},projectImage:null,techStacks:[]},R=function(e){var t=e.children,a=Object(c.useReducer)(v,T),n=Object(h.a)(a,2),s=n[0],r=n[1],i=function(){var e=Object(O.a)(b.a.mark((function e(t){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.multi?{"Content-Type":"multipart/form-data"}:"",e.prev=1,e.next=4,k()({method:t.method,url:t.url,data:t.data,headers:a});case 4:return c=e.sent,e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(1),e.t0.response?(j("error",e.t0.response.data.message),console.log(e.t0)):e.t0.request?console.log(e.t0.request):(console.log(e.t0),console.log("Error",e.t0.message),j("error",e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(e){r({type:g.CLEAR_FORM}),e.reset()};Object(c.useEffect)((function(){var e=function(e,t){var a=t||null,c=setTimeout((function(){r({type:e,payload:a})}),3e3);return function(){clearTimeout(c)}},t=function(){var t=Object(O.a)(b.a.mark((function t(){var a,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:g.GET_PROJECTS_BEGINS}),t.next=4,k.a.get("https://michky.cyclic.app/api/v1/projects");case 4:a=t.sent,c=[],"success"===a.data.status&&(c=a.data.data.projects,e(g.GET_PROJECTS_SUCCESS,c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e(g.GET_PROJECTS_ERROR);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]);var j=function(e,t){r({type:g.SHOW_ALERT,payload:{type:e,message:t}})};Object(c.useEffect)((function(){var e=setTimeout((function(){r({type:g.HIDE_ALERT})}),5e3);return function(){clearTimeout(e)}}),[s.showAlert]);var d=function(e,t,a,c){return{method:e,url:t,data:a,multi:c}},u=function(e){r({type:g.UPDATE_PROJECT,payload:e})},p=function(e){r({type:g.SET_PROJECT_IMAGE,payload:e})},f=function(e){r({type:g.CREATE_PROJECT,payload:e})},x=function(e){r({type:g.SET_STACKS,payload:e})},E=function(){var e=Object(O.a)(b.a.mark((function e(t,a){var c,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.disabled=!0,c=d("POST","https://michky.cyclic.app/api/v1/projects",{name:s.form.name,link:s.form.link,image:s.projectImage,description:s.form.description,stacks:s.techStacks},!1),e.next=4,i(c);case 4:(n=e.sent)&&(j("success","Project added successfully"),r=n.data.data.project,f(r),l(t),p(null),x([])),a.disabled=!1;case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(O.a)(b.a.mark((function e(t,a,c){var n,r,o,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.disabled=!0,n=C(a,s.form),r=d("PATCH","https://michky.cyclic.app/api/v1/projects/".concat(t),{name:n.name,link:n.link,image:s.projectImage,description:n.description,stacks:s.techStacks},!1),e.next=5,i(r);case 5:(o=e.sent)&&(j("success","Project updated successfully"),l=o.data.data.project,u(l),p(l.image)),c.disabled=!1;case 8:case"end":return e.stop()}}),e)})));return function(t,a,c){return e.apply(this,arguments)}}(),N=function(e){r({type:g.DELETE_PROJECT,payload:e})},R=function(e){r({type:g.DELETE_PROJECT_IMAGE,payload:e})},S=function(){var e=Object(O.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d("PATCH","https://michky.cyclic.app/api/v1/projects/".concat(t),{image:null},!1),e.next=3,i(a);case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(O.a)(b.a.mark((function e(t,a){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=d("POST","https://michky.cyclic.app/api/v1/projects/deleteimage",{public_id:t},!1),e.next=3,i(c);case 3:e.sent&&(R(t),p(null),j("success","Image deleted successfully"));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),I=function(){var e=Object(O.a)(b.a.mark((function e(t){var a,c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d("DELETE","https://michky.cyclic.app/api/v1/projects/".concat(t),{},!1),c=s.projects.find((function(e){return e._id===t})),e.next=4,i(a);case 4:return n=e.sent,e.next=7,P(c.image.cloudinary_id);case 7:e.sent,n&&(j("success","Project deleted successfully"),N(t));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(O.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d("POST","https://michky.cyclic.app/api/v1/projects/uploadimage",{name:s.form.name,image:s.form.image},!0),e.next=3,i(t);case 3:(a=e.sent)&&(j(!0,"success","Image uploaded successfully"),p(a.data.data));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)(A.Provider,{value:Object(m.a)(Object(m.a)({},s),{},{displayAlert:j,updateProject:y,deleteProject:I,handleOnchange:function(e){var t=e.target.name,a=e.target.value;"image"===t&&(a=e.target.files[0]),r({type:g.SET_FORM,payload:{name:t,value:a}})},setProjectImage:p,setForm:function(e){r({type:g.UPDATE_FORM,payload:e})},uploadImage:M,createProject:E,deleteImageFromCloud:P,deleteImageFromDb:S,clearForm:l,addStack:function(e){r({type:g.ADD_STACK,payload:e})},removeStack:function(e){r({type:g.REMOVE_STACK,payload:e})},setStacks:x}),children:t})},S=function(){return Object(c.useContext)(A)},P=function(e){var t=e.project,a=S().deleteProject,c=t._id,n=t.name,s=t.slug;return Object(o.jsxs)("li",{className:"admin-project","data-id":c,children:[Object(o.jsx)("p",{className:"name",children:n}),Object(o.jsxs)("div",{className:"project-ctrls",children:[Object(o.jsx)(r.b,{to:"/admin/projects/".concat(s),children:Object(o.jsx)(u.a,{className:"project-icon edit"})}),Object(o.jsx)(d.b,{className:"project-icon delete",onClick:function(){return a(c)}})]})]})},I=function(){var e=S().projects,t=e.length>0?e.map((function(e,t){return Object(o.jsx)(P,{project:e},t)})):Object(o.jsx)("p",{className:"nothing",children:"No projects available at the moment."});return Object(o.jsxs)("div",{className:"admin-page",children:[Object(o.jsx)(j,{title:"Projects"}),Object(o.jsxs)("div",{className:"page-container",children:[Object(o.jsxs)("div",{className:"page-top",children:[Object(o.jsx)(r.b,{to:"/",className:"btn btn-primary",children:"Back home"}),Object(o.jsx)(r.b,{to:"/admin/create-project",className:"btn btn-primary",children:"Add project"})]}),Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)("div",{className:"projects-box",children:Object(o.jsx)("ul",{className:"admin-projects",children:t})})})]})]})},M=function(){var e=function(e,t){e.classList.add("animate-line"),e.style.animationDelay="".concat(t,"s")};return Object(c.useEffect)((function(){for(var t,a,c=document.querySelector("#loader"),n=Object(x.a)(c.querySelectorAll("path")),s=.2,r=0;r<n.length;r++)t=n[r],a=Math.floor(n[r].getTotalLength()),t.style.strokeDasharray="".concat(a),t.style.strokeDashoffset="".concat(a),e(n[r],s),s+=.2}),[]),Object(o.jsx)("div",{className:"loader-container",children:Object(o.jsx)("h1",{className:"loader",children:Object(o.jsxs)("svg",{width:"476",height:"141",viewBox:"0 0 476 141",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:"loader",className:"loader-svg",children:[Object(o.jsx)("path",{d:"M103.696 15.144V105H81.808V51.112L61.712 105H44.048L23.824 50.984V105H1.936V15.144H27.792L53.008 77.352L77.968 15.144H103.696Z",stroke:"#212121",strokeWidth:"3"}),Object(o.jsx)("path",{d:"M130.444 26.152C126.604 26.152 123.447 25.0427 120.972 22.824C118.583 20.52 117.388 17.704 117.388 14.376C117.388 10.9627 118.583 8.14666 120.972 5.92799C123.447 3.62399 126.604 2.47199 130.444 2.47199C134.199 2.47199 137.271 3.62399 139.66 5.92799C142.135 8.14666 143.372 10.9627 143.372 14.376C143.372 17.704 142.135 20.52 139.66 22.824C137.271 25.0427 134.199 26.152 130.444 26.152ZM141.324 33.576V105H119.436V33.576H141.324Z",stroke:"#212121",strokeWidth:"3"}),Object(o.jsx)("path",{d:"M152.834 69.288C152.834 61.864 154.327 55.3787 157.314 49.832C160.386 44.2853 164.61 40.0187 169.986 37.032C175.447 34.0453 181.677 32.552 188.674 32.552C197.634 32.552 205.101 34.8987 211.074 39.592C217.133 44.2853 221.101 50.8987 222.978 59.432H199.682C197.719 53.9707 193.922 51.24 188.29 51.24C184.279 51.24 181.079 52.8187 178.69 55.976C176.301 59.048 175.106 63.4853 175.106 69.288C175.106 75.0907 176.301 79.5707 178.69 82.728C181.079 85.8 184.279 87.336 188.29 87.336C193.922 87.336 197.719 84.6053 199.682 79.144H222.978C221.101 87.5067 217.133 94.0773 211.074 98.856C205.015 103.635 197.549 106.024 188.674 106.024C181.677 106.024 175.447 104.531 169.986 101.544C164.61 98.5573 160.386 94.2907 157.314 88.744C154.327 83.1973 152.834 76.712 152.834 69.288Z",stroke:"#212121",strokeWidth:"3"}),Object(o.jsx)("path",{d:"M278.59 32.808C286.782 32.808 293.353 35.5387 298.302 41C303.251 46.376 305.726 53.8 305.726 63.272V105H283.966V66.216C283.966 61.4373 282.729 57.7253 280.254 55.08C277.779 52.4347 274.451 51.112 270.27 51.112C266.089 51.112 262.761 52.4347 260.286 55.08C257.811 57.7253 256.574 61.4373 256.574 66.216V105H234.686V10.28H256.574V43.176C258.793 40.0187 261.822 37.5013 265.662 35.624C269.502 33.7467 273.811 32.808 278.59 32.808Z",stroke:"#212121",strokeWidth:"3"}),Object(o.jsx)("path",{d:"M364.584 105L342.824 75.048V105H320.936V10.28H342.824V62.632L364.456 33.576H391.464L361.768 69.416L391.72 105H364.584Z",stroke:"#212121",strokeWidth:"3"}),Object(o.jsx)("path",{d:"M473.021 33.576L428.221 138.92H404.669L421.053 102.568L391.997 33.576H416.445L432.957 78.248L449.341 33.576H473.021Z",stroke:"#212121",strokeWidth:"3"})]})})})},_=function(){return Object(o.jsx)("h1",{className:"error-page",children:"Error Page!!"})},w=["html","css","sass","javascript","reactJs","nextJs","nodeJs","python","expressJs","mongodb"],H=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"about-section",id:"about",children:[Object(o.jsxs)("h2",{className:"primary-heading about-heading",children:[Object(o.jsx)("span",{className:"main",children:"About"}),Object(o.jsx)("span",{className:"sub",children:" Me"})]}),Object(o.jsxs)("div",{className:"about-content",children:[Object(o.jsxs)("div",{className:"about-description",children:[Object(o.jsx)("p",{className:"about-text",children:"Hi! I create responsive websites that are fast, easy to use, built with best practices using mostly Nodejs, JavaScript and React. I'm passionate about bringing ideas to reality through codes."}),Object(o.jsx)("p",{className:"about-text",children:"I have an aptitude for learning new technologies, and a proven track record of meeting set goals and i'm always working on improving my skills one code at a time."}),Object(o.jsx)("p",{className:"about-text",children:"Interested in working together, feel free to contact me for any projects or collaborations."})]}),Object(o.jsxs)("div",{className:"about-skills",children:[Object(o.jsx)("h5",{className:"about-sm-heading",children:"These are some of the tools i use..."}),Object(o.jsx)("ul",{className:"about-skills",children:w.map((function(e,t){return Object(o.jsx)("li",{className:"about-skill",children:e},t)}))})]})]})]})})},J=function(e){var t=e.setAlertMessage,a=Object(c.useRef)(null),n=Object(c.useState)({name:"",email:"",message:""}),s=Object(h.a)(n,2),r=s[0],i=s[1],l=function(e){var t=e.target.name,a=e.target.value;i((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(f.a)({},t,a))}))},j=function(){var e=Object(O.a)(b.a.mark((function e(c){var n,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),a.current.disabled=!0,e.prev=2,e.next=5,fetch("https://michky.cyclic.app/api/v1/contacts",{mode:"cors",method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 5:return n=e.sent,e.next=8,n.json();case 8:"success"===(s=e.sent).status&&(t(s.message),a.current.disabled=!1,i({name:"",email:"",message:""})),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(2),a.current.disabled=!1,console.log(e.t0),e.t0.response&&e.t0.response.data?console.log("err",e.t0.response.data.message):e.t0.request?console.log(e.t0.message):console.log("err",e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("form",{className:"form",onSubmit:j,children:[Object(o.jsx)("input",{type:"text",placeholder:"name",className:"form-text-input",id:"name",required:!0,name:"name",value:r.name,onChange:l}),Object(o.jsx)("input",{type:"email",placeholder:"email",className:"form-text-input",id:"email",required:!0,name:"email",value:r.email,onChange:l}),Object(o.jsx)("textarea",{name:"message",id:"message",cols:"30",rows:"5",className:"form-text-input",placeholder:"message",required:!0,value:r.message,onChange:l}),Object(o.jsx)("button",{className:"form-btn",type:"submit",ref:a,children:"Send message"})]})},L=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){n("")}),5e3);return function(){clearTimeout(e)}}),[a]),Object(o.jsx)("section",{className:"contact-section",id:"contact",children:Object(o.jsxs)("div",{className:"contact-content",children:[Object(o.jsxs)("div",{className:"form-section",children:[Object(o.jsx)("h5",{children:"Drop a message"}),Object(o.jsx)(J,{setAlertMessage:n}),a&&Object(o.jsx)("p",{className:"alert-message",children:a})]}),Object(o.jsxs)("div",{className:"img-section",children:[Object(o.jsx)("div",{className:"contact-art"}),Object(o.jsx)("div",{className:"contact-art-2"})]})]})})},D=a(53),K=[{icon:Object(o.jsx)(d.a,{className:"icon header-icon"}),link:"https://github.com/Michicko"},{icon:Object(o.jsx)(d.d,{className:"icon header-icon"}),link:"https://twitter.com/Michky__"},{icon:Object(o.jsx)(D.a,{className:"icon header-icon"}),link:"https://www.linkedin.com/in/michky81/"}],U=function(){return Object(o.jsx)("div",{className:"socials",children:K.map((function(e,t){var a=e.link,c=e.icon;return Object(o.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",className:"social-link",children:c},t)}))})},F=function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsxs)("div",{className:"footer-content",children:[Object(o.jsx)(r.b,{to:"/admin",className:"footer-admin-btn",children:"-"}),Object(o.jsx)("div",{className:"footer-socials",children:Object(o.jsx)(U,{})}),Object(o.jsx)("div",{className:"footer-copy",children:Object(o.jsxs)("p",{children:["\xa9 Michicko. ",(new Date).getFullYear()," "]})})]})})},G=function(){return Object(o.jsxs)("header",{className:"header",id:"home",children:[Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"Michky logo",className:"header-logo"}),Object(o.jsxs)("div",{className:"header-content",children:[Object(o.jsx)("h1",{className:"primary-heading header-heading",children:"Hi!"}),Object(o.jsx)("div",{className:"header-circle",children:Object(o.jsx)("div",{className:"header-outer-circle",children:Object(o.jsx)("div",{className:"header-inner-circle",children:Object(o.jsxs)("div",{className:"header-inner-content",children:[Object(o.jsx)("p",{className:"header-lead",children:"My Name is"}),Object(o.jsx)("h2",{className:"header-main-heading",children:"Michael"}),Object(o.jsx)("h3",{className:"header-title",children:"I'm a Frontend Developer."})]})})})}),Object(o.jsx)("div",{className:"header-socials",children:Object(o.jsx)(U,{})})]})]})},X=a(54),V=a.n(X),B=a(55),z=function(e){var t=e.navlink,a=e.setIsChecked,c=e.navCheck;return Object(o.jsx)(B.Link,{activeClass:"active",className:"navigation-link",to:t,spy:!0,smooth:!0,duration:1500,delay:100,onClick:function(e){a(!1),c.current.checked=!1},children:t})},Y=function(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(c.useRef)(null);return Object(c.useEffect)((function(){document.body.style.overflow=a?"hidden":"auto"}),[a]),Object(o.jsxs)("div",{className:"navigation",children:[Object(o.jsx)("input",{type:"checkbox",id:"navi-toggle",className:"navigation-checkbox",ref:s,onChange:function(e){e.target.checked?n(!0):n(!1)}}),Object(o.jsx)("label",{htmlFor:"navi-toggle",className:"navigation-btn",children:Object(o.jsx)("span",{className:"navigation-icon"})}),Object(o.jsx)("div",{className:"navigation-bg",children:"\xa0"}),Object(o.jsx)("nav",{className:"navigation-nav",children:Object(o.jsx)("ul",{className:"navigation-list",children:V.a.map((function(e,t){return Object(o.jsx)("li",{className:"navigation-item",children:Object(o.jsx)(z,{navlink:e,setIsChecked:n,navCheck:s})},t)}))})})]})},W=function(){var e=S().projects,t=e.length>0?e.map((function(e,t){var a=e.name,c=e.image,n=e.link,s=e.description,r=e.stacks;return Object(o.jsxs)("li",{className:t%2===0?"project img-right":"project img-left",children:[Object(o.jsxs)("div",{className:"text-box",children:[Object(o.jsx)("h4",{className:"project-name",children:a}),Object(o.jsx)("p",{className:"project-text",children:s}),Object(o.jsx)("div",{className:"project-stacks",children:r&&r.map((function(e,t){return Object(o.jsxs)("span",{className:"project-stack",children:[e,"".concat(t<r.length-1?",":"")]},t)}))}),Object(o.jsxs)("a",{href:n,target:"_blank",rel:"noreferrer noopener",className:"project-link",children:[Object(o.jsx)(u.b,{className:"icon"}),Object(o.jsx)("span",{children:"Visit"})]})]}),Object(o.jsx)("div",{className:"img-box",children:e.image&&Object(o.jsx)("img",{src:c.url,alt:e.name,className:"project-img"})})]},t)})):Object(o.jsx)("p",{className:"nothing",children:"No projects available at the moment."});return Object(o.jsxs)("section",{className:"projects-section",id:"projects",children:[Object(o.jsxs)("h2",{className:"primary-heading projects-heading",children:[Object(o.jsx)("span",{className:"main",children:"My"}),Object(o.jsx)("span",{className:"sub",children:" Works"})]}),Object(o.jsx)("div",{className:"projects-content",children:Object(o.jsx)("ul",{className:"projects",children:t})})]})},q=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(Y,{}),Object(o.jsx)(G,{}),Object(o.jsx)(H,{}),Object(o.jsx)(W,{}),Object(o.jsx)(L,{}),Object(o.jsx)(F,{})]})},Q=function(e){var t=e.type,a=e.project,n=Object(c.useRef)(null),s=Object(c.useRef)(null),r=Object(c.useRef)(null),i=Object(c.useState)({}),l=Object(h.a)(i,2),j=l[0],u=l[1],m=Object(c.useState)(""),p=Object(h.a)(m,2),f=p[0],x=p[1],g=S(),v=g.handleOnchange,E=g.updateProject,k=g.setProjectImage,y=g.projectImage,N=g.form,C=g.setForm,A=g.uploadImage,T=g.createProject,R=g.deleteImageFromCloud,P=g.deleteImageFromDb,I=g.clearForm,M=g.techStacks,_=g.addStack,w=g.removeStack,H=g.setStacks,J=function(){var e=Object(O.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),"create"!==t){e.next=4;break}return e.next=4,T(r.current,n.current);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(O.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t,a);case 2:return e.next=4,P(a);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),D=function(){var e=Object(O.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),"edit"!==t){e.next=5;break}return e.next=4,E(a._id,j,s.current);case 4:s.current.disabled=!0;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){if("edit"===t&&a){var e={name:a.name,link:a.link,image:a.image,description:a.description,stacks:a.stacks};u(e),C(e),k(a.image),H(a.stacks)}else"create"===t&&(k(null),H([]),I(r.current))}),[t,a]),Object(o.jsxs)("form",{className:"project-form",encType:"multipart/form-data",ref:r,children:[Object(o.jsx)("input",{type:"text",name:"name",placeholder:"name",className:"form-text-input",id:"name",required:!0,value:N.name,onChange:v}),Object(o.jsx)("input",{type:"text",name:"link",placeholder:"link",className:"form-text-input",id:"link",required:!0,value:N.link,onChange:v}),Object(o.jsxs)("div",{className:"image-group",children:[y&&Object(o.jsxs)("div",{className:"img-view",children:[Object(o.jsx)("img",{src:y.url,alt:a&&a.name,className:"project-img-view"}),Object(o.jsx)(d.b,{className:"project-icon del-img",onClick:function(){return L(y.cloudinary_id,a._id)}})]}),!y&&Object(o.jsxs)("div",{className:"upload-container",children:[Object(o.jsxs)("div",{className:"fileUploadInput",children:[Object(o.jsx)("label",{className:"form-label",children:"Upload Image"}),Object(o.jsx)("input",{type:"file",id:"image",name:"image",accept:"image/*",required:!0,onChange:v}),Object(o.jsx)("button",{children:Object(o.jsx)(d.c,{type:"button",className:"project-icon"})})]}),Object(o.jsx)("button",{type:"button",className:"upload-btn",onClick:A,children:"Upload Image"})]})]}),Object(o.jsxs)("div",{className:"stack-box",children:[Object(o.jsxs)("div",{className:"stack-input",children:[Object(o.jsx)("input",{type:"text",name:"stack",placeholder:"Enter stack",className:"form-text-input",id:"stack",value:f,onChange:function(e){var t=e.target.value.toLowerCase();x(t)}}),Object(o.jsx)("button",{type:"button",className:"upload-btn",onClick:function(){f&&_(f),x("")},children:"Add stack"})]}),Object(o.jsx)("div",{className:"stack-display",children:M&&M.map((function(e,t){return Object(o.jsxs)("div",{className:"stack",children:[Object(o.jsx)("p",{className:"stack-item",children:e}),Object(o.jsx)(d.b,{className:"remove_stack",onClick:function(){return w(e)}})]},t)}))})]}),Object(o.jsx)("textarea",{name:"description",id:"description",cols:"30",rows:"5",className:"form-text-input",placeholder:"description",required:!0,value:N.description,onChange:v}),Object(o.jsx)("div",{className:"btns-group",children:"create"===t?Object(o.jsx)("button",{className:"btn btn-primary admin-form-btn",ref:n,type:"submit",onClick:J,children:"Save"}):Object(o.jsx)("button",{className:"btn btn-primary admin-form-btn",ref:s,type:"submit",onClick:D,children:"update"})})]})},Z=function(){var e=Object(c.useState)({name:"",link:"",image:null,description:""}),t=Object(h.a)(e,2),a=t[0];t[1];return Object(o.jsxs)("div",{className:"admin-page",children:[Object(o.jsx)(j,{title:"Create Project"}),Object(o.jsxs)("div",{className:"page-container",children:[Object(o.jsx)("div",{className:"page-top",children:Object(o.jsx)(r.b,{to:"/admin",className:"btn btn-primary",children:"Back to projects"})}),Object(o.jsx)("main",{className:"page-main",children:Object(o.jsx)(Q,{type:"create",project:a})})]})]})},$=function(){var e=Object(i.f)().slug,t=Object(c.useState)(""),a=Object(h.a)(t,2),n=a[0],s=a[1],l=Object(c.useState)(null),d=Object(h.a)(l,2),u=d[0],m=d[1],p=S().projects,b=Object(c.useCallback)((function(e){var t=p.find((function(t){return t.slug===e}));t&&(m(t),s(t.name))}),[p]);return Object(c.useEffect)((function(){b(e)}),[e,p,b]),Object(o.jsxs)("div",{className:"admin-page",children:[Object(o.jsx)(j,{title:"Edit ".concat(n)}),Object(o.jsxs)("div",{className:"page-container",children:[Object(o.jsx)("div",{className:"page-top",children:Object(o.jsx)(r.b,{to:"/admin",className:"btn btn-primary",children:"Back to projects"})}),Object(o.jsx)("main",{className:"page-main",children:Object(o.jsx)(Q,{type:"edit",project:u})})]})]})},ee=function(e){var t=e.children;return s.a.createPortal(Object(o.jsx)(o.Fragment,{children:t}),document.getElementById("portal"))},te=function(){return Object(o.jsx)("h1",{children:"Error Component"})},ae=Object(i.g)((function(e){var t=e.children,a=e.location.pathname;return Object(c.useEffect)((function(){window.scrollTo({top:0,left:0})}),[a]),t||null}));var ce=function(){var e=S(),t=e.isLoading,a=e.isError,c=e.showAlert,n=e.alertType,s=e.alertMessage;return t?Object(o.jsx)(M,{}):a?Object(o.jsx)(te,{}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(ee,{children:c&&Object(o.jsx)("div",{className:"alert ".concat(n),children:s})}),Object(o.jsx)(r.a,{children:Object(o.jsx)(ae,{children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",children:Object(o.jsx)(q,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/admin",children:Object(o.jsx)(I,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/admin/create-project",children:Object(o.jsx)(Z,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/admin/projects/:slug",children:Object(o.jsx)($,{})}),Object(o.jsx)(i.a,{path:"*",children:Object(o.jsx)(_,{})})]})})})]})};s.a.render(Object(o.jsx)(R,{children:Object(o.jsx)(ce,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.1adc8bb6.chunk.js.map