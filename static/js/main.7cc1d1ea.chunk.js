(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(n,e,t){n.exports=t.p+"static/media/default.f796d7bb.gif"},48:function(n,e,t){n.exports=t(84)},53:function(n,e,t){},84:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(11),i=t.n(o),c=(t(53),t(87)),u=t(83),l=t(33),s=t.n(l),f=t(12),p=t(16),m=t(17),h={resultImage:"",timeLeft:0,hasResult:!1,hasCounter:!1},d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_IMAGE_URL":return Object(m.a)({},n,{resultImage:e.imageUrl,hasResult:!0,hasCounter:!1});case"IMAGE_DOES_NOT_EXIST":return Object(m.a)({},n,{hasResult:!0,hasCounter:!0,timeLeft:e.timeLeft});case"DEFAULT_STATE":return Object(m.a)({},n,{hasResult:!1,hasCounter:!1});default:return n}},g=t(2),b=t(88),x=t(3),v=t(86),E=t(89),w=t(9),O=t.n(w),j=t(13),y=t(36),I=t(37),S=t(44),k=t(38),T=t(46);function _(){var n=Object(g.a)(["\n  display: block;\n  width: 200px;\n  height: 40px;\n  padding: 3px 15px;\n  margin: auto;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid #007fb8;\n  background-color: #007fb8;\n  color: #fff;\n  font-size: 17px;\n  border-radius: 20px;\n  font-weight: 500;\n\n  &:focus {\n    outline: none;\n  }\n"]);return _=function(){return n},n}function D(){var n=Object(g.a)(["\n  display: block;\n  width: 100%;\n  height: 40px;\n  margin: 0 0 20px;\n  padding: 5px 15px;\n  font-size: 17px;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 10px;\n\n  &:focus {\n    outline: none;\n  }\n"]);return D=function(){return n},n}function A(){var n=Object(g.a)(["\n  width: 100%;\n  max-width: 350px;\n  margin: 20px;\n"]);return A=function(){return n},n}var L=x.a.form(A()),C=x.a.input(D()),z=x.a.button(_()),G=function(n){var e=n.onSubmit,t=n.value,a=n.onChange;return r.a.createElement(L,{onSubmit:e},r.a.createElement(C,{type:"number",pattern:"[0-9]*",inputMode:"numeric",onChange:a,defaultValue:t}),r.a.createElement(z,{type:"submit"},"Get inspired"))};G.defaultProps={value:""};var R=G,U=t(41),M=t.n(U);function N(){var n=Object(g.a)(["\n  height: 400px;\n  margin: 20px;\n  text-align: center;\n\n  img {\n    max-width: 100%;\n   max-height: 100%;\n  }\n"]);return N=function(){return n},n}var B=x.a.div(N()),P=function(){return r.a.createElement(B,null,r.a.createElement("img",{src:M.a,alt:"default"}))},F=t(42);function J(){var n=Object(g.a)(["\n  color: #333;\n  font-size: 16px;\n\n  p {\n    font-size: 13px;\n  }\n"]);return J=function(){return n},n}function W(){var n=Object(g.a)(["\n  height: 400px;\n  margin: 20px;\n  text-align: center;\n\n  img {\n   max-width: 100%;\n   max-height: 100%;\n  }\n"]);return W=function(){return n},n}var X=x.a.div(W()),H=x.a.div(J()),V=function(n){var e=n.resultImage,t=n.hasCounter,a=n.timeLeft;return r.a.createElement(X,null,t?r.a.createElement(H,null,r.a.createElement("p",null,"Time left for new picture"),r.a.createElement(F.a,{endDate:a})):r.a.createElement("img",{src:e,alt:"result"}))},$=t(43),q=t.n($),K=function(){var n=Object(j.a)(O.a.mark(function n(e){var t,a;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.a.get("".concat("https://archillect-api.now.sh/visuals","/").concat(e));case 2:return t=n.sent,a=t.data,n.abrupt("return",a.imageSource?{url:a.imageSource}:{error:a.error});case 5:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}();function Q(){var n=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"]);return Q=function(){return n},n}var Y=x.a.div(Q()),Z=function(n){function e(){var n,t;Object(y.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(S.a)(this,(n=Object(k.a)(e)).call.apply(n,[this].concat(r)))).state={value:""},t}return Object(T.a)(e,n),Object(I.a)(e,[{key:"render",value:function(){var n=this,e=this.props,t=e.hasResult,a=e.hasCounter,o=e.resultImage,i=e.timeLeft,c=e.onGetImageUrl,u=e.onDoesNotExistImage,l=e.onDeafultState,s=this.state.value,f=function(){var n=Object(j.a)(O.a.mark(function n(e){var t,a,r,o;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,n.next=4,K(s);case 4:t=n.sent,t.hasOwnProperty("url")?c(t.url):""!==t.error?(a=parseInt(t.error.match(/(?:\D*(\d+)){3}/)[1],10),r=new Date,o=parseInt(r.getTime()+24*(s-a)*60*60*1e3,10),u(o)):l(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),l();case 12:case"end":return n.stop()}},n,this,[[1,9]])}));return function(e){return n.apply(this,arguments)}}();return r.a.createElement(Y,null,t?r.a.createElement(V,{resultImage:o,hasCounter:a,timeLeft:i}):r.a.createElement(P,null),r.a.createElement(R,{value:s,onSubmit:f,onChange:function(e){n.setState({value:e.target.value})}}))}}]),e}(a.Component),nn=Object(p.b)(function(n){return{resultImage:n.resultImage,timeLeft:n.timeLeft,hasResult:n.hasResult,hasCounter:n.hasCounter}},function(n){return{onGetImageUrl:function(e){return n({type:"GET_IMAGE_URL",imageUrl:e})},onDoesNotExistImage:function(e){return n({type:"IMAGE_DOES_NOT_EXIST",timeLeft:e})},onDeafultState:function(){return n({type:"DEFAULT_STATE"})}}})(Z);function en(){var n=Object(g.a)(["\n  width: 100%;\n  padding: 16px;\n  border-radius: 3px;\n  background-color: #f6f8fa;\n  font-size: 13px;\n  overflow: auto;\n"]);return en=function(){return n},n}function tn(){var n=Object(g.a)(["\n  margin: 0 0 10px;\n  padding: 2px 0 2px 10px;\n  border-left: solid 4px #ddd;\n  color: #333;\n  font-size: 15px;\n  line-height: 18px;\n"]);return tn=function(){return n},n}function an(){var n=Object(g.a)(["\n  margin: 0 0 10px;\n  color: #333;\n  font-size: 15px;\n  line-height: 18px;\n"]);return an=function(){return n},n}function rn(){var n=Object(g.a)(["\n  margin: 20px 0 10px;\n  font-size: 16px;\n  font-weight: bold;\n"]);return rn=function(){return n},n}function on(){var n=Object(g.a)(["\n  margin: 0 0 15px;\n  font-size: 20px;\n  font-weight: bold;\n"]);return on=function(){return n},n}function cn(){var n=Object(g.a)(["\n  width: 100%;\n  margin: auto;\n  text-align: left;\n"]);return cn=function(){return n},n}var un=x.a.div(cn()),ln=x.a.h1(on()),sn=x.a.h2(rn()),fn=x.a.p(an()),pn=x.a.p(tn()),mn=x.a.pre(en()),hn=function(){var n=r.a.createElement("a",{href:"http://archillect.com"},"Archillect API");return r.a.createElement(un,null,r.a.createElement(ln,null,"About the App"),r.a.createElement(fn,null,"This app uses the"," ",n," ","for search visuals by [ID]."),r.a.createElement(sn,null,r.a.createElement("strong",null,"Brings one visual [ID] specified")),r.a.createElement(pn,null,"GET https://archillect-api.now.sh/visuals/[ID]"),r.a.createElement(fn,null,"Example response:"),r.a.createElement(mn,null,r.a.createElement("code",null,'{\n  "sourceLinks": [\n    "https://www.google.com/searchbyimage?safe=off\u2111url=http://78.media.tumblr.com/a06af535eb801c32ff60c5dbb0031d13/tumblr_olhnlsSjnS1vczpxxo1_400.gif"\n  ],\n  "imageSource": "http://78.media.tumblr.com/a06af535eb801c32ff60c5dbb0031d13/tumblr_olhnlsSjnS1vczpxxo1_400.gif",\n  "original": "http://archillect.com/147836",\n  "id": 147836\n}')))},dn=function(){return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(E.a,{exact:!0,from:"/",to:"/try-archillect"}),r.a.createElement(u.a,{path:"/try-archillect",component:nn}),r.a.createElement(u.a,{path:"/about",component:hn})))};function gn(){var n=Object(g.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  padding: 15px 50px;\n  background-color: #f2f2f2;\n\n  a {\n    display: inline-block;\n    padding: 3px 10px;\n    color: #333;\n    font-size: 17px;\n    text-decoration: none;\n\n    &:hover {\n      opacity: .7;\n    }\n\n    &.active {\n      color: #007fb8;\n    }\n  }\n"]);return gn=function(){return n},n}function bn(){var n=Object(g.a)(["\n  width: 100%;\n  padding: 50px 30px 0;\n"]);return bn=function(){return n},n}var xn=x.a.div(bn()),vn=x.a.nav(gn()),En=function(){return r.a.createElement(xn,null,r.a.createElement(vn,null,r.a.createElement(b.a,{to:"/try-archillect"},"Home"),r.a.createElement(b.a,{to:"/about"},"About")),r.a.createElement("div",null,r.a.createElement(dn,null)))},wn=Object(f.b)(d),On=function(){var n=s()();return r.a.createElement(p.a,{store:wn},r.a.createElement(c.a,{history:n},r.a.createElement(u.a,{path:"/",component:En})))},jn=function(){return r.a.createElement(On,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(jn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[48,2,1]]]);
//# sourceMappingURL=main.7cc1d1ea.chunk.js.map