(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{134:function(e,t,a){"use strict";a.r(t);var c=a(20),n=a.n(c),r=a(28),s=a(25),i=a(0),o=a.n(i),p=a(21),u=a.n(p),l=a(22),m=a.n(l);t.default=function(e){var t=e.match.params.movieId;u.a.defaults.baseURL="https://api.themoviedb.org";var a=Object(i.useState)([]),c=Object(s.a)(a,2),p=c[0],l=c[1],f=function(){var e=Object(r.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/3/movie/".concat(t,"/credits?api_key=").concat("bc91f782d3f4017afb52e00498ab052a"));case 3:return a=e.sent,e.next=6,l(a.data.cast);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){f()}),[]),o.a.createElement("ul",{className:m.a.actorsList},p.map((function(e){return o.a.createElement("li",{className:m.a.actorsItem},o.a.createElement("div",{key:e.credit_id},o.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.profile_path),alt:e.name}),o.a.createElement("h2",null,e.name),o.a.createElement("p",null,"Character: ",e.character)))})))}}}]);
//# sourceMappingURL=4.c6f8cf94.chunk.js.map