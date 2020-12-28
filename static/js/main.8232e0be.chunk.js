(this["webpackJsonpbreeze-weather"]=this["webpackJsonpbreeze-weather"]||[]).push([[0],{110:function(t,e,n){},112:function(t,e,n){},135:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(0),o=n.n(i),r=n(33),c=n.n(r),l=(n(110),n(111),n(112),n(24)),s=n(25),h=n(30),u=n(29),d=n(21),p=function(t,e){return"c"===e?Math.round(t-273.15):"f"===e?Math.round(1.8*(t-273.15)+32):t},j=n(76),m=n(22);function f(){var t=Object(d.a)(["\n      background: none;\n      outline: none;\n      border: none;\n      color: inherit;\n      font-family: inherit;\n      font-size: inherit;\n      padding:4px;\n    "]);return f=function(){return t},t}function b(){var t=Object(d.a)(["\n      max-width: max-content;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      margin: 40px auto 20px auto;\n      div {\n        width:100%;\n        display:flex;\n        justify-content:space-around;\n      }\n    "]);return b=function(){return t},t}var g=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).Weather=m.a.div(b()),a.TransparentButton=m.a.button(f()),a}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.city,n=t.country,i=t.displayName,o=t.temp,r=t.main,c=t.humidity,l=t.icon,s=t.imperial,h=t.locationHandler,u=t.preciseLocation;return Object(a.jsxs)(this.Weather,{children:[u?Object(a.jsxs)(this.TransparentButton,{onClick:h,disabled:!0,style:{opacity:"0.7"},children:["Use precise location ",Object(a.jsx)(j.a,{name:"location arrow"})]}):Object(a.jsxs)(this.TransparentButton,{onClick:h,children:["Use precise location ",Object(a.jsx)(j.a,{name:"location arrow"})]}),e?Object(a.jsxs)("h1",{children:[e,", ",n]}):Object(a.jsx)("h1",{children:i}),Object(a.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(l,"@2x.png")}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:s?"".concat(p(o,"f")," \xb0F"):"".concat(p(o,"c"),"\xb0C")}),Object(a.jsx)("h2",{children:r})]}),Object(a.jsxs)("h4",{children:["Humidity: ",c,"%"]})]})}}]),n}(i.Component),y=n(66),x=n.n(y),O=n(73);function v(){var t=Object(d.a)(["\n      display: flex;\n      justify-content: flex-start;\n      width: 100%;\n      padding: 10px;\n      margin: 20px auto 10px auto;\n      overflow-x: scroll;\n    "]);return v=function(){return t},t}function w(){var t=Object(d.a)(["\n      max-width: 70%;\n      margin-left: auto;\n      margin-right: auto;\n    "]);return w=function(){return t},t}var W=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).Weather=m.a.div(w()),a.WeatherWrapper=m.a.div(v()),a}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.props.weather.map((function(e,n){var i,o=(i=n,O.a.now().add(i,"hour").format("{hour} {ampm}"));return Object(a.jsxs)("div",{style:{padding:"10px"},children:[Object(a.jsx)("h4",{children:t.props.imperial?"".concat(p(e.temp,"f")," \xb0F"):"".concat(p(e.temp,"c")," \xb0C")}),Object(a.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.icon,".png")}),Object(a.jsx)("h4",{children:e.weatherMain}),Object(a.jsx)("hr",{}),Object(a.jsx)("h4",{children:o})]},n)}));return Object(a.jsxs)(this.Weather,{children:[Object(a.jsx)("h2",{style:{textAlign:"left"},children:"Hourly"}),Object(a.jsx)(this.WeatherWrapper,{children:e||null})]})}}]),n}(i.Component);function C(){var t=Object(d.a)(["\n      display: flex;\n      justify-content: flex-start;\n      width: 100%;\n      padding: 10px;      \n      margin: 20px auto 10px auto;\n      overflow-x: scroll;\n    "]);return C=function(){return t},t}function L(){var t=Object(d.a)(["\n      max-width: 70%;\n      margin-left: auto;\n      margin-right: auto;\n    "]);return L=function(){return t},t}var k=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).Weather=m.a.div(L()),a.WeatherWrapper=m.a.div(C()),a}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.props.weather.map((function(e,n){var i,o=(i=n,O.a.now().add(i,"day").format("{day} {date}")),r={day:t.props.imperial?"".concat(p(e.temp.day,"f")," \xb0F"):"".concat(p(e.temp.day,"c")," \xb0C"),night:t.props.imperial?"".concat(p(e.temp.night,"f")," \xb0F"):"".concat(p(e.temp.night,"c")," \xb0C")};return Object(a.jsxs)("div",{style:{padding:"10px"},children:[Object(a.jsxs)("h4",{children:["\ud83d\udd06",r.day," /\ud83c\udf19 ",r.night]}),Object(a.jsx)("h4",{style:{whiteSpace:"pre-wrap"},children:o})]},n)}));return Object(a.jsxs)(this.Weather,{children:[Object(a.jsx)("h2",{style:{textAlign:"left"},children:"Daily"}),Object(a.jsx)(this.WeatherWrapper,{children:e||null})]})}}]),n}(i.Component),F=n(150),I=n(148),M=n(147),N=n(149),P=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).getLocationFromIP=function(){console.log("response of IP api request below"),x.a.get("https://ipapi.co/json/").then((function(t){console.log(t),a.setLocation(t,"ip"),console.log("response of IP api request above")})).catch((function(t){return console.log(t)}))},a.getLocationFromNavigator=function(){window.navigator.geolocation.getCurrentPosition(a.setLocation)},a.setLocation=function(t,e){var n,i,o;console.log("position"),console.log(t),"ip"===e?(n=t.data.latitude,i=t.data.longitude,o=!1):(n=t.coords.latitude,i=t.coords.longitude,o=!0),console.log("lat: ".concat(n,", long: ").concat(i)),a.setState({preciseLocation:o,location:{latitude:n,longitude:i}}),a.callApi()},a.callApi=function(){console.log("callApi called"),x.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a.state.location.latitude,"&lon=").concat(a.state.location.longitude,"&&appid=997d9b54abada6ff84291820778b192d")).then((function(t){return a.handleOneCallResponse(t)})).catch((function(t){return console.log(t)})),x.a.get("https://us1.locationiq.com/v1/reverse.php?key=pk.026f9b5e94ef539558116a8c355cd29f&lat=".concat(a.state.location.latitude,"&lon=").concat(a.state.location.longitude,"&zoom=10&format=json")).then((function(t){return a.handleLocationResponse(t)})).catch((function(t){return console.log(t)}))},a.handleOneCallResponse=function(t){console.log("the response from openweathermap api below"),console.log(t),console.log("the response from openweathermap api above");var e={temp:t.data.current.temp,weatherMain:t.data.current.weather[0].main,humidity:t.data.current.humidity,icon:t.data.current.weather[0].icon},n=[];t.data.hourly.forEach((function(e){if(t.data.hourly.indexOf(e)<24){var a={temp:e.temp,weatherMain:e.weather[0].main,icon:e.weather[0].icon};n.push(a)}}));var i=[];t.data.daily.forEach((function(e){if(t.data.daily.indexOf(e)<8){var n={temp:{day:e.temp.day,night:e.temp.night},weatherMain:e.weather[0].main,humidity:e.humidity,icon:e.weather[0].icon};i.push(n)}})),a.setState({weatherInfoReady:!0,currentWeather:e,hourlyWeather:n,dailyWeather:i})},a.handleLocationResponse=function(t){console.log("the response from locationIq api below"),console.log(t),console.log("the response from locationIq api above");var e=t.data,n=e.lat,i=e.lon,o=e.address,r=e.display_name;a.setState({location:{latitude:n,longitude:i,city:o.city?o.city:null,country:o.country,displayName:r}})},a.state={preciseLocation:!1,weatherInfoReady:!1,imperial:!1,location:{latitude:null,longitude:null,city:null,country:null,displayName:null,id:null},currentWeather:{temp:null,weatherMain:null,humidity:null,icon:null},hourlyWeather:[{temp:null,weatherMain:null,icon:null}],dailyWeather:[{temp:{day:null,night:null},weatherMain:null,humidity:null,icon:null}]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.getLocationFromIP()}},{key:"render",value:function(){return this.state.weatherInfoReady?Object(a.jsxs)("div",{children:[Object(a.jsx)(g,{city:this.state.location.city,country:this.state.location.country,displayName:this.state.location.displayName,temp:this.state.currentWeather.temp,main:this.state.currentWeather.weatherMain,humidity:this.state.currentWeather.humidity,icon:this.state.currentWeather.icon,imperial:this.state.imperial,locationHandler:this.getLocationFromNavigator,preciseLocation:this.state.preciseLocation}),Object(a.jsx)(W,{weather:this.state.hourlyWeather,imperial:this.state.imperial}),Object(a.jsx)(k,{weather:this.state.dailyWeather,imperial:this.state.imperial})]}):Object(a.jsx)("div",{children:Object(a.jsxs)(F.a,{style:{width:"100vw",height:"100vh"},children:[Object(a.jsx)(I.a,{active:!0,inverted:!0,children:Object(a.jsxs)(M.a,{indeterminate:!0,inverted:!0,children:[Object(a.jsx)("h1",{children:"Please wait..."}),Object(a.jsx)("h3",{children:"Fetching data"}),Object(a.jsx)("h4",{children:"If it's stuck, try turning off an ad-blocking software"})]})}),Object(a.jsx)(N.a,{src:"/images/wireframe/short-paragraph.png"})]})})}}]),n}(i.Component);var R=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(P,{})})},A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),o(t),r(t)}))};c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),A()}},[[135,1,2]]]);
//# sourceMappingURL=main.8232e0be.chunk.js.map