(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{100:function(e,t,r){},101:function(e,t,r){},103:function(e,t,r){},104:function(e,t,r){},105:function(e,t,r){},109:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(19),i=r.n(c),s=r(64),o=r(7),u=r(115),l=r(117),h=r(114),f=r(23),d=r(9),j=r.n(d),v=r(18),p=r(36),b=r.n(p),x={saveToStorage:function(e,t){localStorage.setItem(e,JSON.stringify(t))},loadFromStorage:function(e){return JSON.parse(localStorage.getItem(e))}};var m="XhxzoYMHxt8QuBm3XRztsUGdBZCexYYS",O="weather",g="favorites",k=x.loadFromStorage(g)||[],w={getGeoWeather:function(){return T.apply(this,arguments)},getCurrWeather:C,addToFavorites:function(e){return k.push(e),x.saveToStorage(g,k),k},removeFromFavorites:function(e){var t=k.findIndex((function(t){return t.id===e}));return-1!==t?(k.splice(t,1),x.saveToStorage(g,k),k):-1},isFavorite:function(e){return k.some((function(t){return t.id===e}))},getFavorites:function(){return k}};function y(){return new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}))}function T(){return(T=Object(v.a)(j.a.mark((function e(){var t,r,a,n,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return t=e.sent,r=t.coords.latitude,a=t.coords.longitude,e.next=7,b()("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(m,"&q=").concat(r,"%2C").concat(a));case 7:return n=e.sent,c=n.data.LocalizedName,e.next=11,C(c);case 11:return i=e.sent,e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return E.apply(this,arguments)}function E(){return(E=Object(v.a)(j.a.mark((function e(t){var r,a,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=x.loadFromStorage(O),e.prev=1,e.next=4,b()("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(m,"&q=").concat(t));case 4:return a=e.sent,e.next=7,b()("https://dataservice.accuweather.com/currentconditions/v1/".concat(a.data[0].Key,"?apikey=").concat(m));case 7:return n=e.sent,e.next=10,b()("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(a.data[0].Key,"?apikey=").concat(m,"&metric=true"));case 10:return c=e.sent,r={id:a.data[0].Key,city:a.data[0].LocalizedName,today:n.data[0],weekly:c.data},x.saveToStorage(O,r),e.abrupt("return",r);case 16:throw e.prev=16,e.t0=e.catch(1),console.log("Error",e.t0),e.t0;case 20:case"end":return e.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}r(94);var F=r(3),W={changeUnits:function(e){return function(t){t({type:"CHANGE_UNITS",units:e})}},changeTheme:function(e){return function(t){t({type:"CHANGE_THEME",theme:e})}}},S=Object(f.b)((function(e){return{isDark:e.weatherReducer.isDark}}),W)((function(e){function t(t){e.changeUnits(t)}function r(t){e.changeTheme(t)}function a(){return e.isDark?"dark":"light"}return Object(F.jsx)("header",{className:"header",children:Object(F.jsxs)(u.a,{bg:a(),variant:a(),expand:"lg",children:[Object(F.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(F.jsx)(u.a.Collapse,{id:"basic-navbar-nav",children:Object(F.jsxs)(l.a,{className:"mr-auto",children:[Object(F.jsx)(l.a.Link,{href:"#/",children:"Home"}),Object(F.jsx)(l.a.Link,{href:"#favorites",children:"Favorites"}),Object(F.jsxs)(h.a,{title:"\xb0F / \xb0C",id:"basic-nav-dropdown",children:[Object(F.jsx)(h.a.Item,{onClick:function(){return t("c")},children:"Celsius"}),Object(F.jsx)(h.a.Item,{onClick:function(){return t("f")},children:"Fahrenheit"})]}),Object(F.jsxs)(h.a,{title:"Theme",id:"basic-nav-dropdown1",children:[Object(F.jsx)(h.a.Item,{onClick:function(){return r("dark")},children:"Dark"}),Object(F.jsx)(h.a.Item,{onClick:function(){return r("light")},children:"Light"})]})]})})]})})})),D=r(27),N=(r(98),r(16)),R=function(e){var t=e.favorites,r=e.onChangeCurrWeather,a=e.units,n=e.isDark;function c(e){return"c"===a?"".concat(e.Temperature.Metric.Value," \xb0C"):"".concat(e.Temperature.Imperial.Value," \xb0F")}return Object(F.jsx)("section",{className:"favorites-list flex wrap justify-center",children:t&&t.map((function(e){return Object(F.jsxs)(N.a,{style:{width:"18rem"},className:"flex column align-center favorite-preview",onClick:function(){return r(e)},bg:n?"dark":"light",text:n?"light":"dark",children:[Object(F.jsx)(N.a.Title,{children:e.city}),Object(F.jsx)(N.a.Text,{children:c(e.today)})]},e.id)}))})},_=(r(99),{setCurrWeather:function(e){return function(t){t({type:"SET_CURR_WEATHER",currWeather:e})}}}),I=Object(f.b)((function(e){return{favorites:e.weatherReducer.favorites,units:e.weatherReducer.units,isDark:e.weatherReducer.isDark}}),_)((function(e){var t=Object(a.useState)(null),r=Object(D.a)(t,2),n=r[0],c=r[1];return Object(a.useEffect)((function(){c(e.favorites)})),Object(F.jsxs)("div",{className:e.isDark?"favorites dark flex column align-center":"favorites flex column align-center",children:[Object(F.jsx)("h2",{children:"Favorites Locations"}),n&&Object(F.jsx)(R,{favorites:n,onChangeCurrWeather:function(t){e.setCurrWeather(t),e.history.push("/")},units:e.units,isDark:e.isDark})]})})),A=r(116),U=r(62),H=r(61),L=(r(100),function(e){var t=e.onSearch,r=e.isDark,n=Object(a.useState)(""),c=Object(D.a)(n,2),i=c[0],s=c[1],o=Object(a.useState)(null),u=Object(D.a)(o,2),l=u[0],h=u[1];function f(e){if(!l)if(e.preventDefault(),i.length){/^[a-zA-Z]+$/.test(i)?t(i):(h("Only English letters are allowed."),setTimeout((function(){h(null)}),3e3))}else h("Please enter a location name."),setTimeout((function(){h(null)}),3e3)}return Object(F.jsxs)("section",{className:"location-search",children:[Object(F.jsxs)(A.a,{inline:!0,onSubmit:f,children:[Object(F.jsx)(U.a,{type:"text",placeholder:"Search",className:"mr-sm-2",value:i,onChange:function(e){s(e.target.value)}}),!l&&Object(F.jsx)(H.a,{onClick:f,variant:r?"outline-light":"outline-dark",children:"Search"})]}),l&&Object(F.jsx)("p",{children:l})]})}),M=(r(101),function(e){var t=e.weather,r=e.city,a=e.toggleFavorite,n=e.favBtnText,c=e.units,i=e.isDark;return Object(F.jsxs)(N.a,{style:{width:"18rem"},bg:i?"dark":"light",text:i?"light":"dark",className:"weather-preview flex column align-center",children:[Object(F.jsx)(N.a.Title,{children:r}),Object(F.jsx)("i",{onClick:a,className:n}),Object(F.jsx)(N.a.Text,{children:"c"===c?"".concat(t.Temperature.Metric.Value," \xb0C"):"".concat(t.Temperature.Imperial.Value," \xb0F")}),Object(F.jsx)(N.a.Title,{children:t.WeatherText})]})}),V=r(63),G=r.n(V),P=(r(103),function(e){var t=e.WeeklyList,r=e.units,a=e.isDark;return Object(F.jsx)("section",{className:"weekly-list flex wrap justify-center",children:t.map((function(e){return Object(F.jsxs)(N.a,{style:{width:"18rem"},className:"weather-preview flex column align-center",bg:a?"dark":"light",text:a?"light":"dark",children:[Object(F.jsx)(N.a.Title,{children:G()(e.Date).format("ddd")}),Object(F.jsx)(N.a.Text,{children:(t=e.Temperature.Minimum.Value,n=e.Temperature.Maximum.Value,"c"===r?"".concat(t," - ").concat(n," \xb0C"):"".concat(Math.floor(1.8*t+32)," - ").concat(Math.floor(1.8*n+32)," \xb0F"))})]},e.EpochDate);var t,n}))})}),B=(r(104),{getGeoWeather:function(){return function(){var e=Object(v.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.getGeoWeather();case 3:return r=e.sent,t({type:"SET_CURR_WEATHER",currWeather:r}),e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),console.log("Error",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},getCurrWeather:function(e){return function(){var t=Object(v.a)(j.a.mark((function t(r){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.getCurrWeather(e);case 3:return a=t.sent,r({type:"SET_CURR_WEATHER",currWeather:a}),t.abrupt("return",a);case 8:throw t.prev=8,t.t0=t.catch(0),console.log("Error",t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},addCityToFavorites:function(e){return function(){var t=Object(v.a)(j.a.mark((function t(r){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=w.addToFavorites(e),r({type:"UPDATE_FAVORITES",favorites:a}),t.abrupt("return",a);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},removeFromFavorites:function(e){return function(){var t=Object(v.a)(j.a.mark((function t(r){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=w.removeFromFavorites(e),r({type:"UPDATE_FAVORITES",favorites:a}),t.abrupt("return",a);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),z=Object(f.b)((function(e){return{currWeather:e.weatherReducer.currWeather,units:e.weatherReducer.units,isDark:e.weatherReducer.isDark}}),B)((function(e){var t=Object(a.useState)(""),r=Object(D.a)(t,2),n=r[0],c=r[1];function i(){return(i=Object(v.a)(j.a.mark((function t(r){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getCurrWeather(r);case 3:a=t.sent,c(w.isFavorite(a.id)?"favorite fas fa-star":"favorite far fa-star"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){e.currWeather?c(w.isFavorite(e.currWeather.id)?"favorite fas fa-star":"favorite far fa-star"):function(){var t=Object(v.a)(j.a.mark((function t(){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getGeoWeather();case 3:r=t.sent,c(w.isFavorite(r.id)?"favorite fas fa-star":"favorite far fa-star"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()()}),[]),Object(F.jsx)("div",{className:e.isDark?"home-page dark":"home-page ",children:e.currWeather&&Object(F.jsxs)("div",{children:[Object(F.jsxs)("span",{className:"header flex space-between",children:[Object(F.jsx)("span",{className:"flex column align-center",children:Object(F.jsx)(M,{weather:e.currWeather.today,city:e.currWeather.city,favBtnText:n,toggleFavorite:function(){w.isFavorite(e.currWeather.id)?e.removeFromFavorites(e.currWeather.id):e.addCityToFavorites(e.currWeather),c(w.isFavorite(e.currWeather.id)?"favorite fas fa-star":"favorite far fa-star")},units:e.units,isDark:e.isDark})}),Object(F.jsx)(L,{isDark:e.isDark,onSearch:function(e){return i.apply(this,arguments)}})]}),Object(F.jsx)(P,{WeeklyList:e.currWeather.weekly.DailyForecasts,units:e.units,isDark:e.isDark})]})})}));r(105);var J=function(){return Object(F.jsx)(s.a,{children:Object(F.jsxs)("div",{className:"App",children:[Object(F.jsx)(S,{}),Object(F.jsxs)(o.c,{children:[Object(F.jsx)(o.a,{component:I,path:"/favorites"}),Object(F.jsx)(o.a,{component:z,path:"/"})]})]})})},X=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,118)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),a(e),n(e),c(e),i(e)}))},K=r(28),Y=r(22),q={currWeather:null,favorites:w.getFavorites(),units:"c",isDark:!1};var Z=r(65),Q=Object(K.c)({weatherReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURR_WEATHER":return Object(Y.a)(Object(Y.a)({},e),{},{currWeather:t.currWeather});case"UPDATE_FAVORITES":return Object(Y.a)(Object(Y.a)({},e),{},{favorites:t.favorites});case"CHANGE_UNITS":return Object(Y.a)(Object(Y.a)({},e),{},{units:t.units});case"CHANGE_THEME":return Object(Y.a)(Object(Y.a)({},e),{},{isDark:"dark"===t.theme});default:return e}}}),$=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d,ee=Object(K.e)(Q,$(Object(K.a)(Z.a)));r(107),r(108);i.a.render(Object(F.jsx)(n.a.StrictMode,{children:Object(F.jsx)(f.a,{store:ee,children:Object(F.jsx)(J,{})})}),document.getElementById("root")),X()},94:function(e,t,r){},98:function(e,t,r){},99:function(e,t,r){}},[[109,1,2]]]);
//# sourceMappingURL=main.110d7cbe.chunk.js.map