(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{127:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(112),c=a(3),r=(a(127),a(13)),i=a(113),o=Object(n.createContext)(),l=a(0),d=function(e){e.title,e.icon;var t=Object(n.useContext)(o),a=t.isAuthenticated,s=t.logout,c=t.user,d=t.loadUser;Object(n.useEffect)((function(){d()}),[]);var j=Object(l.jsxs)(n.Fragment,{children:[Object(l.jsxs)("li",{children:[" Hey, ",c&&c.name," "]}),Object(l.jsx)("li",{children:Object(l.jsxs)(r.b,{to:"/",children:[Object(l.jsx)("i",{className:"fas fa-home"})," ","Home"]})}),Object(l.jsx)("li",{children:Object(l.jsxs)(r.b,{to:"/about",children:[Object(l.jsx)("i",{className:"fas fa-users"})," ","About"]})}),Object(l.jsx)("li",{children:Object(l.jsxs)(r.b,{to:"/notes",children:[Object(l.jsx)("i",{className:"far fa-sticky-note"})," ","Notes"]})}),Object(l.jsx)("li",{children:Object(l.jsxs)("a",{onClick:function(){s()},href:"#!",children:[Object(l.jsx)("i",{className:"fas fa-sign-out-alt"})," "," ","Logout"]})})]}),u=Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("li",{children:Object(l.jsxs)(r.b,{to:"/",children:[Object(l.jsx)("i",{className:"fas fa-home"})," ","Home"]})}),Object(l.jsx)("li",{children:Object(l.jsxs)(r.b,{to:"/about",children:[Object(l.jsx)("i",{className:"fas fa-users"})," ","About"]})}),Object(l.jsx)("li",{children:Object(l.jsxs)(r.b,{to:"/login",children:[Object(l.jsx)("i",{className:"fas fa-sign-in-alt"})," ","Login"]})})]});return Object(l.jsx)(i.slide,{children:Object(l.jsx)("ul",{children:a?j:u})})};d.defaultProps={title:"TradingService",icon:"fas fa-id-card-alt"};var j,u,b,h,m,x,p=d,O=a(8),g=a(9),f=a.n(g),v=function(e){e?f.a.defaults.headers.common["x-auth-token"]=e:delete f.a.defaults.headers.common["x-auth-token"]},y=a.p+"static/media/logo_transparent.90450db7.png",w=function(e){var t=e.themeSelected;return Object(l.jsx)(n.Fragment,{children:Object(l.jsx)("div",{className:"navbar",children:"light"==t?Object(l.jsx)("div",{className:"MainLogo",children:Object(l.jsx)("img",{src:y,alt:"firespot"})}):Object(l.jsx)("div",{className:"MainLogoWhite",children:Object(l.jsx)("img",{src:y,alt:"firespot"})})})})},N=a(2),k=(a(119),a(169),a(170),a(49)),C=a(16),H=Object(k.b)(j||(j=Object(C.a)(["\n  body {\n    background: ",";\n    color: ",";\n\n    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;\n    transition: all 0.50s linear;\n  }\n  .bm-menu {\n    background:",";\n    color:","\n  }\n  .bm-item-list{\n    color:","\n  }\n  .bm-menu a{\n    color:","\n  }\n  .react-grid-item{\n    background: ","\n  }\n  a{\n    color:","\n  }\n  .note-wrapper{\n    border-color: ","\n  }\n  .badge-dark{\n    background: ","\n  }\n  .grid-covid i{\n    color:  ","\n  }\n\n  h2{\n    color: white;\n  }\n  .item-aboutus-li-bold{\n    color: ","\n  }\n  .btn-note{\n    background: ",";\n    text-align: center;\n  }\n  "])),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.colorDash}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.highlightColor}),(function(e){return e.theme.highlightColor}),(function(e){return e.theme.highlightColor}),(function(e){return e.theme.highlightColor})),S={body:"#FFF",text:"#333333",toggleBorder:"#FFF",background:"#363537",colorDash:"#ed800d"},E={body:"#212121",text:"#8e8e8e",toggleBorder:"#6B8096",background:"#212121",colorDash:"#333",highlightColor:"#ed800d"},F=Object(n.createContext)(),W=function(){var e=Object(n.useContext)(F);return e.alerts.length>0&&e.alerts.map((function(e){return Object(l.jsxs)("div",{className:"alert alert-".concat(e.type),children:[Object(l.jsx)("i",{className:"fas fa-info-circle"})," ",e.msg]},e.id)}))},A=a(5),R=function(e){var t=Object(n.useContext)(F),a=Object(n.useContext)(o),s=t.setAlert,r=a.register,i=a.error,d=a.clearErrors,j=a.isAuthenticated;Object(n.useEffect)((function(){j&&e.history.push("/"),"User already exists"===i&&(s(i,"danger"),d())}),[i,j,e.history]);var u=Object(n.useState)({name:"",email:"",password:"",password2:""}),b=Object(c.a)(u,2),h=b[0],m=b[1],x=h.name,p=h.email,O=h.password,g=h.password2,f=function(e){return m(Object(N.a)(Object(N.a)({},h),{},Object(A.a)({},e.target.name,e.target.value)))};return Object(l.jsxs)("div",{className:"form-container",children:[Object(l.jsxs)("h1",{children:["Account ",Object(l.jsx)("span",{className:"text-primary",children:"Register"})]}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===x||""===p||""===O?s("Please enter all fields","danger"):O!==g?s("Passwords do not match","danger"):r({name:x,email:p,password:O})},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name"}),Object(l.jsx)("input",{id:"name",type:"text",name:"name",value:x,onChange:f,required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(l.jsx)("input",{id:"email",type:"email",name:"email",value:p,onChange:f,required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{id:"password",type:"password",name:"password",value:O,onChange:f,required:!0,minLength:"6"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"password2",children:"Confirm Password"}),Object(l.jsx)("input",{id:"password2",type:"password",name:"password2",value:g,onChange:f,required:!0,minLength:"6"})]}),Object(l.jsx)("input",{type:"submit",value:"Register",className:"btn btn-primary btn-block"})]})]})},D=Object(n.createContext)(),T=function(e){var t=Object(n.useContext)(F).setAlert,a=Object(n.useContext)(D).getNotes,s=Object(n.useContext)(o),i=s.login,d=s.error,j=s.clearErrors,u=s.isAuthenticated;Object(n.useEffect)((function(){u&&(e.history.push("/"),a()),console.log(d," err"),"Invalid Credentials"===d&&(t(d,"danger"),j())}),[d,u,e.history]);var b=Object(n.useState)({email:"",password:""}),h=Object(c.a)(b,2),m=h[0],x=h[1],p=function(e){return x(Object(N.a)(Object(N.a)({},m),{},Object(A.a)({},e.target.name,e.target.value)))},O=m.email,g=m.password;return Object(l.jsxs)("div",{className:"form-container",children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===O||""===g?t("Please fill in all fields","danger"):i({email:O,password:g})},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(l.jsx)("input",{type:"email",name:"email",value:O,onChange:p})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{type:"password",name:"password",value:g,onChange:p})]}),Object(l.jsx)("input",{type:"submit",value:"Login",className:"btn btn-primary btn-block"})]}),Object(l.jsxs)("h2",{children:["Not registered yet? ",Object(l.jsx)(r.b,{to:"/register",children:" Register here "})]})]})},P=function(){return Object(l.jsxs)("div",{className:"container-about",children:[Object(l.jsxs)("div",{className:"about-us-person",children:[Object(l.jsx)("div",{className:"item-aboutus-img",children:Object(l.jsx)("img",{src:"https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png",align:"left",alt:"Aliaksei B",width:"148px",height:"144px"})}),Object(l.jsx)("div",{className:"item-aboutus-text",children:Object(l.jsxs)("ul",{className:"item-aboutus-ul",children:[Object(l.jsx)("li",{className:"item-aboutus-li-bold",children:"Aliaksei Belabovrik"}),Object(l.jsx)("li",{children:"[Spring master]"}),Object(l.jsx)("li",{className:"item-aboutus-li-italic",children:"Why JavaDevs wear glasses? Because they don\u2019t C#."})]})})]}),Object(l.jsxs)("div",{className:"about-us-person",children:[Object(l.jsx)("div",{className:"item-aboutus-img",children:Object(l.jsx)("img",{src:"https://safe.hbox.at/index.php/apps/files_sharing/publicpreview/dEcXMzyawGR2xbZ?x=2560&y=947&a=true&file=dd.png",align:"left",alt:"Dominic D",width:"145px",height:"137px"})}),Object(l.jsx)("div",{className:"item-aboutus-text",children:Object(l.jsxs)("ul",{className:"item-aboutus-ul",children:[Object(l.jsx)("li",{className:"item-aboutus-li-bold",children:"Dominic Duda"}),Object(l.jsx)("li",{children:"[Main Logic, Backend mastermind]"}),Object(l.jsx)("li",{className:"item-aboutus-li-italic",children:"Why are Assembly programmers always soaking wet? They work below C-level."})]})})]}),Object(l.jsxs)("div",{className:"about-us-person",children:[Object(l.jsx)("div",{className:"item-aboutus-img",children:Object(l.jsx)("img",{src:"https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png",align:"left",alt:"Daniel K",width:"153px",height:"145px"})}),Object(l.jsx)("div",{className:"item-aboutus-text",children:Object(l.jsxs)("ul",{className:"item-aboutus-ul",children:[Object(l.jsx)("li",{className:"item-aboutus-li-bold",children:"Daniel Kleissl"}),Object(l.jsx)("li",{children:"[Frontend Guru]"}),Object(l.jsx)("li",{className:"item-aboutus-li-italic",children:"Don't use \"beef stew\" as a computer password. It's not stroganoff."})]})})]}),Object(l.jsxs)("div",{className:"about-us-person",children:[Object(l.jsx)("div",{className:"item-aboutus-img",children:Object(l.jsx)("img",{src:"https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png",align:"left",alt:"Anas K",width:"153px",height:"145px"})}),Object(l.jsx)("div",{className:"item-aboutus-text",children:Object(l.jsxs)("ul",{className:"item-aboutus-ul",children:[Object(l.jsx)("li",{className:"item-aboutus-li-bold",children:"Anas Kambal"}),Object(l.jsx)("li",{children:"[Spring Champion 2022]"}),Object(l.jsx)("li",{className:"item-aboutus-li-italic",children:"A SQL query goes into a bar, walks up to two tables and asks, \u201cCan I join you?\u201d"})]})})]}),Object(l.jsxs)("div",{className:"about-us-person",children:[Object(l.jsx)("div",{className:"item-aboutus-img",children:Object(l.jsx)("img",{src:"https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png",align:"left",alt:"John B",width:"153px",height:"145px"})}),Object(l.jsx)("div",{className:"item-aboutus-text",children:Object(l.jsxs)("ul",{className:"item-aboutus-ul",children:[Object(l.jsx)("li",{className:"item-aboutus-li-bold",children:"John Berdin"}),Object(l.jsx)("li",{children:"[Java Mastermind]"}),Object(l.jsx)("li",{className:"item-aboutus-li-italic",children:"ASCII stupid question, get a stupid ANSI."})]})})]}),Object(l.jsxs)("div",{className:"about-us-person",children:[Object(l.jsx)("div",{className:"item-aboutus-img",children:Object(l.jsx)("img",{src:"https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png",align:"left",alt:"Samuel H",width:"153px",height:"145px"})}),Object(l.jsx)("div",{className:"item-aboutus-text",children:Object(l.jsxs)("ul",{className:"item-aboutus-ul",children:[Object(l.jsx)("li",{className:"item-aboutus-li-bold",children:"Samuel Heinrich"}),Object(l.jsx)("li",{children:"[Frontend Support, Spring support]"}),Object(l.jsx)("li",{className:"item-aboutus-li-italic",children:"What\u2019s the best thing thing about UDP jokes? I don\u2019t care if you get them."})]})})]}),Object(l.jsxs)("div",{className:"about-us-person",children:[Object(l.jsx)("div",{className:"item-aboutus-img",children:Object(l.jsx)("img",{src:"https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png",align:"left",alt:"Gabriel H",width:"153px",height:"145px"})}),Object(l.jsx)("div",{className:"item-aboutus-text",children:Object(l.jsxs)("ul",{className:"item-aboutus-ul",children:[Object(l.jsx)("li",{className:"item-aboutus-li-bold",children:"Gabriel H\xfcbner"}),Object(l.jsx)("li",{children:"[Can do everything]"}),Object(l.jsx)("li",{className:"item-aboutus-li-italic",children:"A programmer had a problem. He decided to use Java. He now has a ProblemFactory."})]})})]})]})},L=a(51),_=Object(n.createContext)(),I=a(19),G=a.n(I),B=a(18),U=function(){var e=Object(n.useContext)(_),t=e.weather,a=e.getWeather,s=e.loading,r=Object(B.css)(u||(u=Object(C.a)(["\n        display: block;\n        margin: 0 auto;\n        border-color: white;\n    "]))),i=t.wind,o=t.maxTemp,d=t.minTemp,j=t.pressure,b=t.temp,h=t.feelsLike,m=t.humidity,x=t.icon,p=t.name,O=Object(n.useState)("#ffffff"),g=Object(c.a)(O,2),f=g[0];g[1];return Object(n.useEffect)((function(){a()}),[]),Object(l.jsx)("div",{className:"container-dash",children:s?Object(l.jsx)("div",{className:"spinner-placement",children:Object(l.jsx)(G.a,{color:f,loading:s,css:r,size:20})}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Weather Today"}),Object(l.jsxs)("p",{className:"weather-text-minmax",children:[p,"Min ",d,"\xb0 / Max ",o,"\xb0"]}),Object(l.jsxs)("div",{className:"image-wrapper",children:[Object(l.jsx)("img",{className:"weather-icon",src:"http://openweathermap.org/img/wn/".concat(x,"@2x.png"),align:"left",alt:"".concat(p),width:"100px",height:"100px"}),Object(l.jsxs)("p",{className:"weather-text-icon",children:[b,"\xb0"]})]}),Object(l.jsxs)("h4",{children:["Details ",Object(l.jsx)("i",{className:"fas fa-bolt"})]}),Object(l.jsxs)("div",{className:"grid-2 grid-weather",children:[Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["Feels Like ",h,"\xb0"]}),Object(l.jsxs)("li",{children:["Wind ",i," m/s"]})]}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["Humidity ",m,"%"]}),Object(l.jsxs)("li",{children:["Pressure ",j,"hPa"]})]})]})]})})},q=Object(n.createContext)(),M=a(118),z=function(){var e=Object(n.useContext)(q),t=e.hourlyForecast,a=e.getHourlyForecast,s=e.loading,r=t.dt,i=t.temp;Object(n.useEffect)((function(){a()}),[]);var o=Object(B.css)(b||(b=Object(C.a)(["\n        display: block;\n        margin: 0 auto;\n        border-color: white;\n    "]))),d=Object(n.useState)("#ffffff"),j=Object(c.a)(d,2),u=j[0],h=(j[1],{labels:r,datasets:[{label:"24h temprature forecast",data:i,fill:!1,backgroundColor:"rgb(255, 255, 255)",borderColor:"rgba(255, 255, 255, 0.5)",fontColor:"rgba(255,255,255)"}]});return Object(l.jsx)(n.Fragment,{children:Object(l.jsx)("div",{className:"container-dash",children:s?Object(l.jsx)("div",{className:"spinner-placement",children:Object(l.jsx)(G.a,{color:u,loading:s,css:o,size:20})}):Object(l.jsx)("div",{className:"line-chart-dash",children:Object(l.jsx)("div",{children:Object(l.jsx)(M.a,{data:h,options:{plugins:{legend:{display:!0,labels:{fontColor:"rgb(255, 255, 255)"}}},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})})})})})},J=(a(292),Object(n.createContext)()),K=function(){var e=Object(n.useContext)(J),t=e.getCovid,a=e.covidData,s=e.loading;Object(n.useEffect)((function(){t()}),[]);var r=Object(B.css)(h||(h=Object(C.a)(["\n    display: block;\n    margin: 0 auto;\n    border-color: white;\n"]))),i=Object(n.useState)("#ffffff"),o=Object(c.a)(i,2),d=o[0],j=(o[1],a.confCases),u=a.deaths,b=a.recovered,m=a.activeCases,x=a.newCases;return Object(l.jsx)(n.Fragment,{children:Object(l.jsx)("div",{className:"container-covid",children:s?Object(l.jsx)("div",{className:"spinner-placement",children:Object(l.jsx)(G.a,{color:d,loading:s,css:r,size:20})}):Object(l.jsxs)(n.Fragment,{children:[Object(l.jsxs)("div",{className:"grid-covid",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fas fa-virus",children:" "})," "]}),"Total Cases ",j]}),Object(l.jsxs)("div",{className:"grid-covid",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fas fa-user-injured",children:" "})," "]}),"Active Cases ",m]}),Object(l.jsxs)("div",{className:"grid-covid",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fas fa-dove",children:" "})," "]}),"Total Deaths ",u]}),Object(l.jsxs)("div",{className:"grid-covid",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fas fa-thermometer-full",children:" "})," "]}),"New Cases ",x]}),Object(l.jsxs)("div",{className:"grid-covid",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fas fa-medkit",children:" "})," "]}),"Recovered ",b]})]})})})},V=Object(n.createContext)(),Y=function(){var e=Object(n.useContext)(V),t=e.getPrice,a=e.loading,s=e.gasStation,r=Object(n.useState)("#ffffff"),i=Object(c.a)(r,2),o=i[0],d=(i[1],Object(B.css)(m||(m=Object(C.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: white;\n"]))));Object(n.useEffect)((function(){t()}),[]);s.contact;var j=s.distance,u=s.prices,b=s.name,h=s.location;return Object(l.jsx)(n.Fragment,{children:Object(l.jsx)("div",{className:"container-covid",children:a?Object(l.jsx)("div",{className:"spinner-placement",children:Object(l.jsx)(G.a,{color:o,loading:a,css:d,size:20})}):Object(l.jsxs)(n.Fragment,{children:[Object(l.jsxs)("div",{className:"grid-covid",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fas fa-gas-pump",children:" "})," "]}),b]}),Object(l.jsxs)("div",{className:"grid-covid",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fas fa-dollar-sign",children:" "})," "]}),"Diesel: ",u[0].amount,"\u20ac || Super: ",u[1][0].amount,"\u20ac"]}),Object(l.jsxs)("div",{className:"grid-covid",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fas fa-map-pin",children:" "})," "]}),h.address]}),Object(l.jsxs)("div",{className:"grid-covid",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fas fa-car",children:" "})," "]}),"Distance: ",j.toFixed(2)," km"]})]})})})},Z=function(){var e=Object(n.useContext)(o),t=e.isAuthenticated,a=(e.user,[{i:"weatherLarge",x:0,y:0,w:6,h:2,minW:6,minH:2},{i:"weatherSmall",x:8,y:0,w:4,h:2,minW:4,maxW:4,minH:2},{i:"standardRss",x:0,y:1,w:3,h:2,minW:3,maxW:4,minH:2},{i:"spotify",x:3,y:1,w:3,h:2,minW:3,maxH:3,minH:2},{i:"quote",x:6,y:2,w:4,h:2,minW:4,maxH:3,minH:2},{i:"corona",x:0,y:3,w:10,h:1.5,minW:10,maxH:2,maxW:10},{i:"gas",x:0,y:3,w:10,h:1.5,minW:10,maxH:2,maxW:10}]),s=[{i:"weatherLarge",x:0,y:0,w:6,h:2,minW:6,minH:2},{i:"weatherSmall",x:8,y:0,w:4,h:2,minW:4,maxW:4,minH:2},{i:"notes",x:0,y:1,w:5,h:2,minH:2},{i:"notes-form",x:6,y:1,w:5,h:2,minH:2},{i:"standardRss",x:0,y:2,w:3,h:2,minW:3,minH:2},{i:"spotify",x:3,y:2,w:3,h:2,minW:3,maxH:3,minH:2},{i:"quote",x:6,y:2,w:4,h:2,minW:4,maxH:3,minH:2},{i:"corona",x:0,y:3,w:12,h:2,minW:12,maxH:2},{i:"gas",x:0,y:3,w:12,h:2,minW:12,maxH:2}],r=[{i:"weatherLarge",x:0,y:0,w:10,h:2,minW:10,minH:2},{i:"weatherSmall",x:5,y:1,w:3,h:2,minW:4,maxW:4,minH:2},{i:"standardRss",x:0,y:1,w:3,h:2,minW:4,maxW:4,minH:2},{i:"spotify",x:2,y:3,w:2,h:2,minW:1,maxH:3},{i:"quote",x:5,y:3,w:2,h:2,minW:4,maxH:3,minH:2},{i:"corona",x:0,y:2,w:10,h:2,minW:10,maxH:2},{i:"gas",x:0,y:2,w:10,h:2,minW:10,maxH:2}],i=[{i:"weatherLarge",x:0,y:0,w:10,h:2,minW:10,minH:2},{i:"weatherSmall",x:5,y:1,w:3,h:2,minW:4,maxW:4,minH:2},{i:"standardRss",x:0,y:1,w:3,h:2,minW:4,maxW:4},{i:"notes",x:0,y:2,w:3,h:2,minH:2},{i:"notes-form",x:4,y:2,w:3,h:2,minH:2},{i:"corona",x:0,y:3,w:10,h:2,minW:10,maxH:2},{i:"spotify",x:2,y:4,w:2,h:2,minW:2,maxH:3},{i:"quote",x:4,y:4,w:2,h:2,minW:2,maxH:3},{i:"gas",x:4,y:4,w:2,h:2,minW:2,maxH:3}],d=Object(n.useState)({mounted:!1}),j=Object(c.a)(d,2),u=j[0],b=j[1],h=Object(n.useState)({mounted:!1,currentBreakpoint:"lg"}),m=Object(c.a)(h,2),p=m[0],O=m[1],g=p.mounted,f=(p.currentBreakpoint,p.layouts),v=Object(L.WidthProvider)(L.Responsive);Object(n.useEffect)((function(){localStorage.token&&e.loadUser(),O({mounted:!0,layouts:{lg:a,md:a,sm:r}}),b({mounted:!0,layouts:{lg:s,md:s,sm:i}})}),[]);var y=Object(B.css)(x||(x=Object(C.a)(["\n      display: block;\n      margin: 0 auto;\n      border-color: white;\n    "]))),w=Object(n.useState)("#ffffff"),N=Object(c.a)(w,2),k=N[0],H=(N[1],function(e,t){}),S=function(e){},E=Object(l.jsx)(n.Fragment,{children:g?Object(l.jsxs)(v,{className:"unAuthlayout",layouts:f,rowHeight:150,heigth:500,width:1200,breakpoints:{lg:1200,md:1e3,sm:768,xs:767,xxs:0},cols:{lg:12,md:10,sm:6,xs:4,xxs:2},onLayoutChange:H,onBreakpointChange:S,children:[Object(l.jsx)("div",{children:Object(l.jsx)(U,{})},"weatherSmall"),Object(l.jsx)("div",{children:Object(l.jsx)(z,{})},"weatherLarge"),Object(l.jsxs)("div",{className:"wrapper-dash",children:[Object(l.jsx)("h2",{children:"Depot Information"}),Object(l.jsx)("div",{className:"covid-wrapper",children:Object(l.jsx)(K,{})})]},"corona")]}):Object(l.jsx)("div",{className:"spinner-placement",children:Object(l.jsx)(G.a,{color:k,css:y,size:20})})}),F=Object(l.jsx)(n.Fragment,{children:g?Object(l.jsxs)(v,{className:"unAuthlayout",layouts:u.layouts,rowHeight:150,heigth:500,width:1200,breakpoints:{lg:1200,md:1e3,sm:768,xs:767,xxs:0},cols:{lg:12,md:10,sm:6,xs:4,xxs:2},onLayoutChange:H,onBreakpointChange:S,children:[Object(l.jsx)("div",{children:Object(l.jsx)(U,{})},"weatherSmall"),Object(l.jsx)("div",{children:Object(l.jsx)(z,{})},"weatherLarge"),Object(l.jsxs)("div",{className:"wrapper-dash",children:[Object(l.jsx)("h2",{children:"Depot Information"}),Object(l.jsx)("div",{className:"covid-wrapper",children:Object(l.jsx)(K,{})})]},"corona"),Object(l.jsxs)("div",{className:"wrapper-dash",children:[Object(l.jsx)("h2",{children:"Bank Volume"}),Object(l.jsx)("div",{className:"covid-wrapper",children:Object(l.jsx)(Y,{})})]},"gas")]}):Object(l.jsx)("div",{className:"spinner-placement",children:Object(l.jsx)(G.a,{color:k,css:y,size:20})})});return Object(l.jsx)(n.Fragment,{children:Object(l.jsx)("div",{children:t?F:E})})},Q=a(4),X=a.n(Q),$=a(10),ee="REGISTER_SUCCESS",te="REGISTER_FAIL",ae="SET_CURRENT",ne="USER_LOADED",se="AUTH_ERROR",ce="LOGIN_SUCESS",re="LOGIN_FAIL",ie="LOGOUT",oe="CLEAER_ERRORS",le="SET_ALERT",de="REMOVE_ALERT",je="GET_WEATHER",ue="ADD_NOTE",be="DELETE_NOTE",he="GET_NOTES",me="CLEAR_CURRENT",xe="GET_HOURLY_WEATHER",pe="UPDATE_NOTE",Oe="GET_COVID",ge="GET_GAS_PRICE",fe=function(e,t){switch(t.type){case ne:return Object(N.a)(Object(N.a)({},e),{},{isAuthenticated:!0,loading:!1,user:t.payload});case ee:case ce:return localStorage.setItem("token",t.payload.token),Object(N.a)(Object(N.a)(Object(N.a)({},e),t.payload),{},{isAuthenticated:!0,loading:!1});case te:case se:case re:case ie:return localStorage.removeItem("token"),Object(N.a)(Object(N.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null,error:t.payload});case oe:return Object(N.a)(Object(N.a)({},e),{},{error:null});default:return e}},ve=function(e){var t={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null,error:null},a=Object(n.useReducer)(fe,t),s=Object(c.a)(a,2),r=s[0],i=s[1],d=function(){var e=Object($.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(localStorage.token),e.prev=1,e.next=4,f.a.get("/api/auth");case 4:t=e.sent,i({type:ne,payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),i({type:se});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object($.a)(X.a.mark((function e(t){var a,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,f.a.post("/api/users",t,a);case 4:n=e.sent,i({type:ee,payload:n.data}),d(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),i({type:te,payload:e.t0.response.data.msg});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object($.a)(X.a.mark((function e(t){var a,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,f.a.post("/api/auth",t,a);case 4:n=e.sent,i({type:ce,payload:n.data}),d(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),i({type:re,payload:e.t0.response.data.msg});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)(o.Provider,{value:{token:r.token,isAuthenticated:r.isAuthenticated,loading:r.loading,user:r.user,error:r.error,register:j,loadUser:d,login:u,logout:function(){return i({type:ie})},clearErrors:function(){return i({type:oe})}},children:e.children})},ye=a(295),we=a(6),Ne=function(e,t){switch(t.type){case le:return[].concat(Object(we.a)(e),[t.payload]);case de:return e.filter((function(e){return e.id!==t.payload}));default:return e}},ke=function(e){var t=Object(n.useReducer)(Ne,[]),a=Object(c.a)(t,2),s=a[0],r=a[1];return Object(l.jsx)(F.Provider,{value:{alerts:s,setAlert:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3,n=Object(ye.a)();r({type:le,payload:{msg:e,type:t,id:n}}),setTimeout((function(){return r({type:de,payload:n})}),a)}},children:e.children})},Ce=function(e,t){switch(t.type){case je:return Object(N.a)(Object(N.a)({},e),{},{weather:t.payload,loading:!1});default:return e}},He=function(e){var t=Object(n.useReducer)(Ce,{weather:[],loading:!0}),a=Object(c.a)(t,2),s=a[0],r=a[1],i=function(){var e=Object($.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/dashboard/tempCurrent");case 3:t=e.sent,r({type:je,payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)(_.Provider,{value:{weather:s.weather,loading:s.loading,getWeather:i},children:e.children})},Se=function(e,t){switch(t.type){case he:return Object(N.a)(Object(N.a)({},e),{},{notes:t.payload});case ue:return Object(N.a)(Object(N.a)({},e),{},{notes:[t.payload].concat(Object(we.a)(e.notes))});case be:return Object(N.a)(Object(N.a)({},e),{},{notes:e.notes.filter((function(e){return e._id!==t.payload}))});case me:return Object(N.a)(Object(N.a)({},e),{},{current:null});case ae:return Object(N.a)(Object(N.a)({},e),{},{current:t.payload});case pe:return Object(N.a)(Object(N.a)({},e),{},{notes:e.notes.map((function(e){return e._id===t.payload._id?t.payload:e}))});default:return e}},Ee=function(e){var t=Object(n.useReducer)(Se,{notes:null,current:null}),a=Object(c.a)(t,2),s=a[0],r=a[1],i=function(){var e=Object($.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/notes");case 3:t=e.sent,r({type:he,payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object($.a)(X.a.mark((function e(t){var a,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,f.a.post("api/notes",t,a);case 4:n=e.sent,r({type:ue,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object($.a)(X.a.mark((function e(t){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.delete("/api/notes/".concat(t));case 3:r({type:be,payload:t}),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object($.a)(X.a.mark((function e(t){var a,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,f.a.put("/api/notes/".concat(t._id),t,a);case 4:n=e.sent,r({type:pe,payload:n.data}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)(D.Provider,{value:{notes:s.notes,current:s.current,getNotes:i,addNote:o,deleteNote:d,clearCurrent:function(){r({type:me})},setCurrent:function(e){r({type:ae,payload:e})},updateNote:j},children:e.children})},Fe=function(e,t){switch(t.type){case xe:return Object(N.a)(Object(N.a)({},e),{},{hourlyForecast:t.payload,loading:!1});default:return e}},We=function(e){var t=Object(n.useReducer)(Fe,{hourlyForecast:[],loading:!0}),a=Object(c.a)(t,2),s=a[0],r=a[1],i=function(){var e=Object($.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/dashboard/tempForecast");case 3:t=e.sent,r({type:xe,payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)(q.Provider,{value:{hourlyForecast:s.hourlyForecast,loading:s.loading,getHourlyForecast:i},children:e.children})},Ae=function(e,t){switch(t.type){case Oe:return Object(N.a)(Object(N.a)({},e),{},{covidData:t.payload,loading:!1});default:return e}},Re=function(e){var t=Object(n.useReducer)(Ae,{covidData:[],loading:!0}),a=Object(c.a)(t,2),s=a[0],r=a[1],i=function(){var e=Object($.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/dashboard/coronaData");case 3:t=e.sent,r({type:Oe,payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)(J.Provider,{value:{covidData:s.covidData,loading:s.loading,getCovid:i},children:e.children})},De=function(e,t){switch(t.type){case ge:return Object(N.a)(Object(N.a)({},e),{},{gasStation:t.payload,loading:!1});default:return e}},Te=function(e){var t=Object(n.useReducer)(De,{gasStation:[],loading:!0}),a=Object(c.a)(t,2),s=a[0],r=a[1],i=function(){var e=Object($.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/dashboard/gasStation");case 3:t=e.sent,r({type:ge,payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message,"my err?");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)(V.Provider,{value:{gasStation:s.gasStation,loading:s.loading,getPrice:i},children:e.children})};localStorage.token&&v(localStorage.token);var Pe=function(){var e=Object(n.useState)("dark"),t=Object(c.a)(e,2),a=t[0],s=t[1];return Object(l.jsx)(ve,{children:Object(l.jsxs)(k.a,{theme:"light"===a?S:E,children:[Object(l.jsx)(H,{}),Object(l.jsx)(Ee,{children:Object(l.jsx)(He,{children:Object(l.jsx)(We,{children:Object(l.jsx)(Re,{children:Object(l.jsx)(Te,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(ke,{children:Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("div",{className:"btn switch-theme btn-dark",onClick:function(){s("light"===a?"dark":"light")},children:" Switch Theme"}),Object(l.jsx)(p,{}),Object(l.jsx)(w,{themeSelected:a}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(W,{}),Object(l.jsxs)(O.d,{children:[Object(l.jsx)(O.b,{exact:!0,path:"/",component:Z}),Object(l.jsx)(O.b,{exact:!0,path:"/about",component:P}),Object(l.jsx)(O.b,{exact:!0,path:"/login",component:T}),Object(l.jsx)(O.b,{exact:!0,path:"/register",component:R})]})]})]})})})})})})})})]})})},Le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,296)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))},_e=document.getElementById("root");Object(s.createRoot)(_e).render(Object(l.jsx)(Pe,{tab:"home"})),Le()}},[[294,1,2]]]);
//# sourceMappingURL=main.82b1bee3.chunk.js.map