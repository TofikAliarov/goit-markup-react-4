(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{22:function(e,a,t){e.exports={filmBlock:"Film_filmBlock__17yAi",filmImg:"Film_filmImg__NNRKj",filmGenres:"Film_filmGenres__2FB3M",additionalBlock:"Film_additionalBlock__2QZCI",additionalLink:"Film_additionalLink__g8lw9",actorsList:"Film_actorsList__JF7uw",actorsItem:"Film_actorsItem__zYwMT",filmList:"Film_filmList__1tpbX"}},40:function(e,a,t){e.exports={navList:"Nav_navList__1X-xM",navListItem:"Nav_navListItem__vhzfv"}},61:function(e,a,t){e.exports=t(89)},89:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(7),r=t.n(c),i=t(17),o=t(9),m=t(20),s=t.n(m),u=t(28),p=t(25),f=t(21),v=t.n(f),d=t(22),b=t.n(d),E=Object(n.lazy)((function(){return t.e(0).then(t.bind(null,136))}));function h(){v.a.defaults.baseURL="https://api.themoviedb.org";var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],c=a[1],r="bc91f782d3f4017afb52e00498ab052a";function i(){return(i=Object(u.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/3/trending/all/day?api_key=".concat(r));case 3:a=e.sent,c(a.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),l.a.createElement(n.Suspense,{fallback:l.a.createElement("h2",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},l.a.createElement("div",{className:b.a.filmList},l.a.createElement(E,{item:t,prop:"/movies"})))}var g=t(119),_=t(124),k=t(125),y=Object(n.lazy)((function(){return t.e(0).then(t.bind(null,136))})),j=Object(g.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));function O(e){var a=j(),t=Object(n.useState)([]),c=Object(p.a)(t,2),r=c[0],i=c[1],o=Object(n.useState)(""),m=Object(p.a)(o,2),f=m[0],d=m[1];v.a.defaults.baseURL="https://api.themoviedb.org";var b="bc91f782d3f4017afb52e00498ab052a";function E(){return(E=Object(u.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/3/search/movie?api_key=".concat(b,"&language=en-US&query=").concat(f,"&page=1&include_adult=false"));case 3:a=e.sent,i(a.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return l.a.createElement(l.a.Fragment,null,l.a.createElement(n.Suspense,{fallback:l.a.createElement("h2",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},l.a.createElement("form",{className:a.root,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),function(){E.apply(this,arguments)}(),d("")}},l.a.createElement(k.a,{id:"standard-basic",label:"Search",style:{width:500},onChange:function(e){var a=e.target.value;d(a)},value:f,name:"inputWord",placeholder:"Input film name"}),l.a.createElement(_.a,{variant:"contained",color:"primary",type:"submit"},"Find")),l.a.createElement(y,{item:r,prop:e.match.url})))}var w=Object(n.lazy)((function(){return t.e(5).then(t.bind(null,133))})),L=Object(n.lazy)((function(){return t.e(4).then(t.bind(null,134))})),x=Object(n.lazy)((function(){return t.e(6).then(t.bind(null,135))})),I=Object(g.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));function N(e){I();var a=e.match.params.movieId;v.a.defaults.baseURL="https://api.themoviedb.org";var t=Object(n.useState)({}),c=Object(p.a)(t,2),r=c[0],m=c[1],f=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/3/movie/".concat(a,"?api_key=").concat("bc91f782d3f4017afb52e00498ab052a","&language=en-US"));case 3:return t=e.sent,e.next=6,m(t.data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(n.Suspense,{fallback:l.a.createElement("h2",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},l.a.createElement(_.a,{variant:"contained",color:"secondary",onClick:e.history.goBack},"Go back"),l.a.createElement("div",{className:b.a.filmBlock,key:r.id},l.a.createElement("div",{className:b.a.filmImg},l.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(r.poster_path),alt:r.title})),l.a.createElement("div",null,l.a.createElement("h1",null,r.title),l.a.createElement("p",null,"User Score ",r.vote_average),l.a.createElement("h2",null,"Overview"),l.a.createElement("p",null,r.overview),l.a.createElement("h2",null,"Genres"),l.a.createElement("div",{className:b.a.filmGenres},l.a.createElement(w,{genres:r.genres})))),l.a.createElement("div",{className:b.a.additionalBlock},l.a.createElement("h2",null,"Additional information:"),l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",{className:b.a.additionalLink},l.a.createElement(i.b,{to:"".concat(e.match.url,"/cast")},"Cast")),l.a.createElement("li",{className:b.a.additionalLink},l.a.createElement(i.b,{to:"".concat(e.match.url,"/reviews")},"Reviews"))),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/movies/:movieId/cast",component:L}),l.a.createElement(o.a,{path:"/movies/:movieId/reviews",component:x})))))))}var F=t(40),S=t.n(F);function B(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("ul",{className:S.a.navList},l.a.createElement("li",{className:S.a.navListItem},l.a.createElement(i.c,{exact:!0,to:"/"},"Home")),l.a.createElement("li",{className:S.a.navListItem},l.a.createElement(i.c,{to:"/movies"},"Movies")))),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:h}),l.a.createElement(o.a,{path:"/movies/:movieId",component:N}),l.a.createElement(o.a,{exact:!0,path:"/movies",component:O}))))}var z=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(B,null)))};r.a.render(l.a.createElement(z,null),document.getElementById("root"))}},[[61,2,3]]]);
//# sourceMappingURL=main.a363645f.chunk.js.map