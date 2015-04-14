function import$(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}function in$(e,t){for(var n=-1,r=t.length>>>0;++n<r;)if(e===t[n])return!0;return!1}require.register("config.jsenv",function(e,t,n){n.exports={DOMAIN_NAME:"hack.infographics.tw",GITHUB_ACCOUNT:"infographicstw",HACKFOLDR_ID:"1MUAH0eMlvZhS5ijk2pnamLpO_1tuuPSzR1u4SQjjNCY",GA_ID:"UA-59333798-1",BUILD:"git-1b3a280",GOOGLE_API_BROWSER_APPLICATION_KEY:"AIzaSyCHm8NgD_p5F_-e7euH8BZiB4wSB8pOZ2A"}}),angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","app.templates","app.controllers","ui.router.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(e,t,n){return e.state("about",{url:"/about",templateUrl:"partials/about.html"}).state("hack",{url:"/{hackId}",templateUrl:"partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.index",{url:"/__index"}).state("hack.doc",{url:"/{docId}"}),t.otherwise("/1MUAH0eMlvZhS5ijk2pnamLpO_1tuuPSzR1u4SQjjNCY"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(e,t,n,r){return e.$state=t,e.$stateParam=n,e.go=function(e){return r.path(e)},e._build=require("config.jsenv").BUILD,e.$on("$stateChangeSuccess",function(e,t){var n;return n=t.name,"undefined"!=typeof window&&null!==window&&"function"==typeof window.ga?window.ga("send","pageview",{page:r.$$url,title:n}):void 0}),e.safeApply=function(e,t){var n;return n=e.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof t?t():void 0:e.$apply(t)}})),this.googleOnLoadCallback=function(){return gapi.client.setApiKey(require("config.jsenv").GOOGLE_API_BROWSER_APPLICATION_KEY),gapi.client.load("youtube","v3",function(){return angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})})};var slice$=[].slice,replace$="".replace;angular.module("app.controllers",["ui.router.state","ngCookies"]).controller({AppCtrl:["$scope","$window","$state","$rootScope","$timeout"].concat(function(e,t,n,r,o){return e.$watch("$state.current.name",function(t){return"irc"===t?e.ircEnabled=!0:void 0}),window.addEventListener("load",function(){return o(function(){return window.scrollTo(0,1)},0)}),o(function(){return r.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$sce","$window","$state","$cookies","HackFolder"].concat(function(e,t,n,r,o,c){var i,a;return import$(e,{hasViewMode:function(e){return null!=e?e.match(/g(doc|present|draw)/):void 0},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:c.iframes,docs:c.docs,tree:c.tree,godoc:function(t){var n;return"_blank"===(null!=(n=t.opts)?n.target:void 0)?(window.open(t.url,t.id),!0):t.url.match(/(https?:)?\/\/[^/]*(github|facebook)\.com/)?(window.open(t.url,t.id),!0):e.go("/"+e.hackId+"/"+decodeURIComponent(t.id))},open:function(e){return window.open(e.url,e.id),!1},activate:function(e){var t;return t=c.activate(e),"hackfoldr"===(null!=t?t.type:void 0)&&"undefined"!=typeof console&&null!==console?console.log("folder!!"):void 0},saveBtn:void 0,saveModalOpts:{dialogFade:!0},saveModalOpen:!1,showSaveModal:function(t,n,r){return e.saveModalOpen=t,r&&(e.saveBtn=$(r.target)),n&&(o.savebtn="consumed",e.saveBtn)?e.saveBtn.fadeOut(1e3):void 0},showSaveBtn:function(){return"consumed"!==o.savebtn},HackFolder:c,barframeSrc:function(e){var n;return n=e.opts.bar.replace(/\{(\w+)\}/g,function(){return e[arguments[1]]}),t.trustAsResourceUrl(n)},iframeCallback:function(t){return function(n){return e.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,t),r.current.title=t.title+" – hackfoldr",t.noiframe="fail"===n?!0:!1,"unsure"===n?t.iframeunsure=!0:void 0})}},debug:function(e){return"undefined"!=typeof console&&null!==console?console.log(e,this):void 0},reload:function(e){return c.getIndex(e,!0,function(){})}}),e.$watch("hackId",function(t){return c.getIndex(t,!1,function(){var n,o;return e.$watch("docId",function(n){var r;return n&&(r=c.activate(n)),"hackfoldr"===(null!=r?r.type:void 0)?(e.showIndex=!0,c.loadRemoteCsv(r.id,function(r,o,i){var a,u,l;return a=function(){var e,t,r,o=[];for(e=0,r=(t=c.tree).length;r>e;++e)a=t[e],a.id===n&&o.push(a);return o}()[0],a.tagFilter=null!=(u=a.tags)&&null!=(l=u[0])?l.content:void 0,a.chidlren||(null==a.children&&(a.children=null!=i?i[0].children:void 0),(u=c.docs).splice.apply(u,[o.length,0].concat(slice$.call(o)))),e.indexDocs=o,e.indexSearch=t.replace(/^g0v-/,"")})):e.showIndex=!1}),e.showIndex="hack.index"===r.current.name,e.showIndex?void 0:!e.docId&&(n=null!=(o=c.docs[0])?o.id:void 0)?r.transitionTo("hack.doc",{docId:n,hackId:e.hackId}):void 0})}),e.collapsed=null!=(i=o.collapsed)?i:n.innerWidth<768,e.$watch("collapsed",function(e){return null!=e?o.collapsed=e:void 0}),e.hackId=(a=r.params.hackId)?a:"infographics.tw",e.$watch("$state.params.docId",function(t){return t?e.docId=encodeURIComponent(encodeURIComponent(t)):void 0})})}).directive("resize",["$window"].concat(function(e){return function(t,n){var r;return r=function(){return t.width=e.innerWidth,t.height=e.innerHeight,t.contentHeight=e.innerHeight-$(n).offset().top},angular.element(e).bind("resize",function(){return t.$apply(r)}),r()}})).directive("ngxIframe",["$parse"].concat(function(e){return{link:function(t,n,r){var o,c,i;return o=e(r.ngxIframe)(t),c=function(e,t){var n;return n=!function(){try{return"about:blank"==e.location}catch(t){}}(),o(t&&$.browser.mozilla?"unsure":n?"ok":"fail")},$(n).load(function(){return clearTimeout(i),c(this.contentWindow,!0)}),i=setTimeout(function(){return c(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(e,t){return $(t).click(function(e){return e.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(e){return{link:function(t,n,r){var o,c;return o=e(r.ngxClickMeta),c=navigator.appVersion.match(/Win/)?function(e){return e.ctrlKey}:function(e){return e.metaKey},$(n).click(function(e){return c(e)&&!o(t)?(e.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(e,t){return $(t).click(function(e){return e.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(e){return function(t){var n;return n=function(){var n;return n=$(".index"),t.hasScrollbar=n.get(0).scrollHeight>e.innerHeight-$(".navbar").height()},angular.element(e).bind("resize",function(){return t.$apply(n)}),t.$watch("docs",n),n()}})).factory({HackFolder:["$http","$sce"].concat(function(e,t){var n,r,o,c,i;return n={},r=[],o=[],i={iframes:n,docs:r,tree:o,activate:function(e,c){function i(e){return e.id}var a,u,l,s,d,p,f,h,v,g,m;for(null==c&&(c=!1),u=function(){var t,n,o,c=[];for(t=0,o=(n=r).length;o>t;++t)a=n[t],a.id===e&&c.push(a);return c}()[0],l=null!=u?u.type:void 0,s=0,p=(d=o).length;p>s;++s)f=d[s],(h=null!=f&&null!=(v=f.children)?v.map(i):void 0)&&in$(e,h)&&(f.expand=!0);return g=c?"edit":"view",m=function(){var t;switch(t=[l],!1){case"gdoc"!==t[0]:return"https://docs.google.com/document/d/"+e+"/"+g+"?pli=1&overridemobile=true";case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"gpresent"!==t[0]:return"https://docs.google.com/presentation/d/"+e+"/"+g;case"gdraw"!==t[0]:return"https://docs.google.com/drawings/d/"+e+"/"+g;case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"hackpad"!==t[0]:return"https://"+(null!=(t=u.site)?t:"")+"hackpad.com/"+e;case"ethercalc"!==t[0]:return"https://ethercalc.org/"+e;case"video"!==t[0]:if("youtube"===u.provider)return"https://www.youtube.com/embed/"+e;if("ustream"===u.provider)return"http://www.ustream.tv/embed/"+e+"?v=3";break;case"url"!==t[0]:return decodeURIComponent(decodeURIComponent(e));default:return""}}(),null!=u&&u.hashtag&&(m+=null!=u?u.hashtag:void 0),m&&(m=t.trustAsResourceUrl(m)),"hackfoldr"===(null!=u?u.type:void 0)?u:((h=n[e])?(h.src=m,h.mode=g):n[e]={src:m,doc:u,mode:g},u)},getIndex:function(t,n,o){var i,a,u=this;return c!==t||n?(i=0,(a=function(){return e.get("https://www.ethercalc.org/_/"+t+"/csv").error(function(){return++i>3?void 0:setTimeout(a,1e3)}).success(function(e){return c=t,r.length=0,u.processCsv(e,o)})})()):o(r)},processCsv:function(e,t){return this.loadCsv(e,r,o,function(e,n){return i.folderTitle=e,t(n)})},loadRemoteCsv:function(t,n){var r=this;return e.get("https://www.ethercalc.org/_/"+t+"/csv").success(function(e){var t,o;return t=[],o=[],r.loadCsv(e,t,o,function(e){return n(e,t,o)})})},loadCsv:function(e,t,n,r){function o(){try{return JSON.parse(w.replace(/""/g,'"'))}catch(e){}}function c(){var e;switch(e=[g],!1){case void 0!==e[0]:return u||(m&&(u=m,m=null),w&&(l=w)),{title:m,type:"dummy",id:"dummy"};case!(A=/^\/\/(.*?)(?:\#(.*))?$/.exec(e[0])):return{type:"hackfoldr",id:A[1],tag:A[2]};case!(A=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(e[0])):return{type:"ethercalc",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdoc",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(e[0])):return{type:"gsheet",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdraw",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gpresent",id:A[1]};case!(A=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(e[0])):return{type:"hackpad",site:A[1],id:A[2]};case!(A=/https?:\/\/(?:youtu\.be\/|(?:www\.)?youtube\.com\/(?:embed\/|watch\?v=))([-\w]+)/.exec(e[0])):return{type:"video",provider:"youtube",id:A[1],icon:"http://g.etfv.co/"+g};case!(A=/https?:\/\/(?:www\.)?ustream\.tv\/(?:embed|channel)\/([-\w]+)/.exec(e[0])):return{type:"video",provider:"ustream",id:A[1],icon:"http://g.etfv.co/"+g};case!(A=/^(https?:\/\/[^\/]+)/.exec(e[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(g)),icon:"http://g.etfv.co/"+A[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",g):void 0}}function i(e){return e.length}function a(e){var t,n,r,o,c;return t=e.match(/^(.*?)(?::(.*))?$/),n=t[0],r=t[1],o=t[2],c=slice$.call(t,3),{content:r,"class":null!=o?o:"warning"}}var u,l,s,d,p,f,h,v,g,m,w,y,b,k,I,x,C,O,S,A,_,R,U,F,H,P;for(e=replace$.call(e,/^\"?#.*\n/gm,""),l={},d=[],p=0,h=(f=CSV.parse(e)).length;h>p;++p)if(v=f[p],v.length){try{g=v[0],m=v[1],w=v[2],y=v[3],b=v[4],k=slice$.call(v,5)}catch(B){}if(!m)continue;m=replace$.call(m,/^"|"$/g,""),w&&(w=replace$.call(w,/^"|"$/g,"")),w&&(w=o()),null==w&&(w={}),y&&(y=replace$.call(y,/^"|"$/g,"")),I=g.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),x=I[0],C=I[1],g=I[2],O=I[3],S=import$({summary:b,hashtag:O,url:g,title:m,indent:C.length,opts:import$(import$({},l),w)},c()),d.push("dummy"!==S.type||null!=(I=S.title)&&I.length?import$(import$({icon:"/img/"+S.type+".png"},S),{tags:(null!=(I=null!=(_=S.opts)?_.tags:void 0)?I:[]).concat((null!=(I=null!=y?y.split(","):void 0)?I:[]).filter(i).map(a))}):null)}for(s=d,s.filter(function(e){return null!=e?e.url:void 0}).map(function(e){var t,n,r;return"video"===e.type&&"youtube"===e.provider?(t=gapi.client.youtube.videos.list({id:e.id,part:"snippet"}),t.execute(function(t){var n;return"live"===(null!=(n=t.items)?n[0].snippet.liveBroadcastContent:void 0)?e.tags=e.tags.concat({"class":"warning",content:"LIVE"}):void 0})):(n=e.url.match(/ustream.tv\/embed\/([^?]+)/))?(r=n[1],$.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fapi.ustream.tv%2Fjson%2Fchannel%2F"+r+"%2FgetValueOf%2Fstatus'&format=json&diagnostics=true&callback=",function(t){var n,r;return"live"===JSON.parse(null!=(n=t.query)&&null!=(r=n.results)&&null!=(n=r.body)?n.p:void 0).results?e.tags=e.tags.concat({"class":"warning",content:"LIVE"}):void 0})):void 0}),t.splice.apply(t,[0,t.length].concat(slice$.call(s.filter(function(e){return null!=e})))),R=0,d=[],p=0,h=t.length;h>p;++p)F=p,S=t[p],F>0&&S.indent?(H=t[R],P=null!=(f=H.children)?f:H.children=[],P.push(S),d.push(null)):(R=F,d.push(S));return U=d,U=U.filter(function(e){return null!=e}),U=U.map(function(e){var t,n;return e.children&&(e.expand=null!=(t=null!=(n=e.opts)?n.expand:void 0)?t:e.children.length<5),e}),n.splice.apply(n,[0,n.length].concat(slice$.call(U))),r(u,t)}}})});