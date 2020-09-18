(this["webpackJsonpcovid-5km-overlap"]=this["webpackJsonpcovid-5km-overlap"]||[]).push([[0],{135:function(e,n,t){},136:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(9),o=t.n(r),c=(t(70),t(8)),l=t(3),u=t(21),s=t(5),d=t(16),f=Object(d.cleanEnv)(Object({NODE_ENV:"production",PUBLIC_URL:"/covid-5km-overlap-finder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_ALGOLIA_PLACES_APP_ID:"pl0BG9XYHNCK",REACT_APP_GOOGLE_API_KEY:"AIzaSyAmFD381qxEbAMHIgWtPJk-YkA4XCHKtfE",REACT_APP_ALGOLIA_PLACES_API_KEY:"582a61e561e3dc45433e868c22593a87",REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE:"UA-177861037-1",REACT_APP_MAPBOX_API_KEY:"pk.eyJ1Ijoiam1hcmdlbmJlcmciLCJhIjoiY2tmMHIyY2twMWc4NDJ2bWYwYjJ3dnV6NSJ9.40NfXdTrb1lMO0tqEZ76BQ",REACT_APP_PAYPAL_HOSTED_BUTTON_ID:"K7QPUZB4R8WRS"}),{REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE:Object(d.str)({require:!0}),REACT_APP_MAPBOX_API_KEY:Object(d.str)({require:!0}),REACT_APP_ALGOLIA_PLACES_APP_ID:Object(d.str)({require:!0}),REACT_APP_ALGOLIA_PLACES_API_KEY:Object(d.str)({require:!0})}),v=t(7),m=Object(u.b)({accessToken:f.REACT_APP_MAPBOX_API_KEY}),A=[[145.151596,-37.723742],[144.793065,-37.927951]],p={steps:1e3,units:"kilometers"},E={myExclusiveAreaLinePaint:{"line-color":"#5eb0c2","line-width":1},myExclusiveAreaFillPaint:{"fill-color":"#5eb0c2","fill-opacity":.25},theirExclusiveAreaLinePaint:{"line-color":"#52bf83","line-width":1},theirExclusiveAreaFillPaint:{"fill-color":"#52bf83","fill-opacity":.25},inaccessibleAreaFillPaint:{"fill-color":"black","fill-opacity":.25}},b=function(e){return e},g=function(e){var n=e.myLocation,t=e.theirLocation,r=void 0!==n&&void 0!==t,o=(void 0!==n||void 0!==t)&&!r,l=n&&s.circle(n,5,p),d=t&&s.circle(t,5,p),f=r?s.intersect(l,d):void 0,g=r?s.difference(l,d):l,P=r?s.difference(d,l):d,_=s.featureCollection([g,P,f].filter(b)),h=s.mask(_),O={};if(r||o){var x=s.bbox(_),y=Object(c.a)(x,4),L=y[0],C=y[1],j=y[2],S=y[3],w=r?s.lengthToDegrees(1,"kilometers"):s.lengthToDegrees(5,"kilometers");O={fitBounds:[[L-w,C-w],[j+w,S+w]]}}else O={fitBounds:A};return Object(a.useEffect)((function(){if(r)try{var e=null!==f,a=Math.abs(s.distance(n,t));v.a.event({category:"Location Overlaps",action:e?"Locations overlapped":"Locations didn't overlap",value:a})}catch(i){}}),[n,t]),i.a.createElement(m,Object.assign({style:"mapbox://styles/mapbox/streets-v11",containerStyle:{flex:1},movingMethod:"flyTo"},O),i.a.createElement(u.a,{data:s.featureCollection([g].filter(b)),linePaint:E.myExclusiveAreaLinePaint,fillPaint:E.myExclusiveAreaFillPaint}),i.a.createElement(u.a,{data:s.featureCollection([P].filter(b)),linePaint:E.theirExclusiveAreaLinePaint,fillPaint:E.theirExclusiveAreaFillPaint}),i.a.createElement(u.a,{data:h,fillPaint:E.inaccessibleAreaFillPaint}))},P=t(4),_=t(20),h=t.n(_),O=t(38),x=t(64),y=t(63),L=t(35),C=t.n(L),j=t(60),S=t.n(j);function w(){var e=Object(l.a)(["\n  margin: 5px;\n"]);return w=function(){return e},e}var I=C.a.initPlaces(f.REACT_APP_ALGOLIA_PLACES_APP_ID,f.REACT_APP_ALGOLIA_PLACES_API_KEY),T={hitsPerPage:5,language:"en",countries:["au"],aroundLatLng:"-37.816204,144.957489",aroundRadius:7e4},k=P.a.div(w()),R=S()((function(e){return new Promise((function(n,t){e?(v.a.event({category:"Debounced Algolia",action:"Search API Called"}),I.search(Object(x.a)({query:e},T),(function(e,a){if(e)return v.a.event({category:"Debounced Algolia",action:"Search API Error Received"}),t(e);n(a)}))):n([])}))}),1e3),D=function(e){return e},G=function(e){return[e.locale_names?e.locale_names[0]:void 0,(e.suburb?e.suburb[0]:void 0)||(e.city?e.city[0]:void 0),e.administrative?e.administrative[0]:void 0].filter(D).join(", ")},Y=function(e){var n=e.onLocationSelected,t=e.placeholder,r=Object(a.useState)(""),o=Object(c.a)(r,2),l=o[0],u=o[1],s=function(){var e=Object(O.a)(h.a.mark((function e(n){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(n),e.next=3,R(n);case 3:return a=e.sent,e.abrupt("return",null===a||void 0===a||null===(t=a.hits)||void 0===t?void 0:t.map((function(e){return{value:e,label:G(e)}})));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=Object(O.a)(h.a.mark((function e(t){var a,i,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||null==t){e.next=8;break}return r=t.value,o=[null===r||void 0===r||null===(a=r._geoloc)||void 0===a?void 0:a.lng,null===r||void 0===r||null===(i=r._geoloc)||void 0===i?void 0:i.lat],e.next=5,n(o);case 5:v.a.event({category:"Debounced Algolia",action:"Suggestion selected",value:null===l||void 0===l?void 0:l.length}),e.next=11;break;case 8:return e.next=10,n(void 0);case 10:v.a.event({category:"Debounced Algolia",action:"Suggestion cleared"});case 11:u("");case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return i.a.createElement(k,null,i.a.createElement(y.a,{defaultOptions:!0,placeholder:t,loadOptions:s,onChange:d,isClearable:!0,components:{IndicatorSeparator:null,DropdownIndicator:null}}))};function K(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n\n  max-width: 500px;\n  margin: 5px;\n"]);return K=function(){return e},e}var N=P.a.div(K()),B=function(e){var n=e.myLocationSelected,t=e.theirLocationSelected;return i.a.createElement(N,null,i.a.createElement(Y,{onLocationSelected:n,placeholder:"Where do you live?"}),i.a.createElement(Y,{onLocationSelected:t,placeholder:"Where do they live?"}))},M=t(62),W=t(15);t(135);function J(){var e=Object(l.a)(["\n  color: #222;\n"]);return J=function(){return e},e}function q(){var e=Object(l.a)(["\n  text-align: center;\n  font-size: 0.9em;\n\n  margin-top: 5px;\n  margin-bottom: 5px;\n  color: #333333;\n"]);return q=function(){return e},e}function F(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n\n  margin-left: 40px;\n  margin-right: 40px;\n"]);return F=function(){return e},e}function H(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n\n  margin-left: 15px;\n"]);return H=function(){return e},e}function X(){var e=Object(l.a)(["\n  flex-grow: 2;\n  color: #333333;\n  text-align: center;\n\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 0px;\n  margin-right: 15px;\n"]);return X=function(){return e},e}function U(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-left: 20px;\n  margin-right: 20px;\n"]);return U=function(){return e},e}function z(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n\n  max-width: 500px;\n  background-color: orange;\n"]);return z=function(){return e},e}var Q=P.a.div(z()),V=P.a.div(U()),Z=P.a.h4(X()),$=P.a.div(H()),ee=P.a.div(F()),ne=P.a.p(q()),te=P.a.a(J()),ae=function(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=n[0],r=n[1],o=function(){r((function(e){return!e}))};return i.a.createElement(Q,null,i.a.createElement(V,null,i.a.createElement(Z,{onClick:o},"We are looking for a sponsor!"),i.a.createElement($,{onClick:o},i.a.createElement(M.a,{icon:t?W.b:W.a,style:{display:"flex"}}))),i.a.createElement(ee,{className:t?"shown":"hidden"},i.a.createElement(ne,null,"Melbourne users are loving this app!"),i.a.createElement(ne,null,"I'm receiving tonnes of traffic but unfortunately the costs (address search API fees) are getting too great for me to fund out of my own pocket."),i.a.createElement(ne,null,"I'd be delighted if a brand, be it a news site, cultural site, digital brand or any business is interested in adopting this site for full branding and/or redirection to a white-labeled version hosted on your site."),i.a.createElement(ne,null,"If you are interested please contact"," ",i.a.createElement(te,{href:"mailto:covid.5km.overlap.finder@gmail.com"},"covid.5km.overlap.finder@gmail.com"),".")))},ie=t(19);function re(){var e=Object(l.a)(["\n  flex-grow: 1;\n  display: flex;\n  align-items: stretch;\n  justify-content: stretch;\n"]);return re=function(){return e},e}function oe(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: center;\n"]);return oe=function(){return e},e}function ce(){var e=Object(l.a)(["\n  height: 100vh;\n  position: absolute;\n  width: 100vw;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n"]);return ce=function(){return e},e}var le=P.a.div(ce()),ue=P.a.div(oe()),se=P.a.div(re());ie.b.add(W.a,W.b),v.a.initialize(f.REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE),v.a.pageview(window.location.pathname+window.location.search);var de=function(){var e=Object(a.useState)(void 0),n=Object(c.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(void 0),l=Object(c.a)(o,2),u=l[0],s=l[1];return i.a.createElement(le,null,i.a.createElement(ue,{style:{backgroundColor:"orange"}},i.a.createElement(ae,null)),i.a.createElement(ue,null,i.a.createElement(B,{myLocationSelected:function(e){r(e),e&&v.a.event({category:"Location Selections",action:"'My' location set"})},theirLocationSelected:function(e){s(e),e&&v.a.event({category:"Location Selections",action:"'Their' location set"})}})),i.a.createElement(se,null,i.a.createElement(g,{myLocation:t,theirLocation:u})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,n,t){e.exports=t(136)},70:function(e,n,t){}},[[65,1,2]]]);
//# sourceMappingURL=main.c82720ea.chunk.js.map