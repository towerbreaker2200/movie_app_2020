(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),r=s.n(n),i=s(14),c=s.n(i),o=s(3),m=s.n(o),l=s(5),u=s(15),d=s(16),j=s(19),v=s(18),p=s(17),h=s.n(p);s(43);var b=function(e){var t=e.year,s=e.title,n=e.summary,r=e.poster,i=e.genres;return Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{src:r,alt:s,title:s}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsx)("h3",{className:"movie__title",children:s}),Object(a.jsx)("h5",{className:"movie__year",children:t}),Object(a.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(a.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(a.jsxs)("p",{className:"movie__summary",children:[n.slice(0,140),"..."]})]})]})},_=(s(44),function(e){Object(j.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(u.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(m.a.mark((function t(){var s,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=Object(l.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getMovies();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return Object(a.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(r.a.Component));c.a.render(Object(a.jsx)(_,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.f5fe337f.chunk.js.map