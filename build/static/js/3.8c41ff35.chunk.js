(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[3],{61:function(e,t,a){e.exports={actorsList:"cast_actorsList__3Ph8N",actorsListItem:"cast_actorsListItem__1cmLN"}},62:function(e,t,a){e.exports={wrapper:"filmDetail_wrapper__3tnV-",Contentwrapper:"filmDetail_Contentwrapper__2jzH6",genres:"filmDetail_genres__45rNp"}},66:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(16),c=a(19),i=a(18),o=a(0),l=a.n(o),s=a(7),m=a(1),p=a(17),u=a(61),h=a.n(u),v=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={cast:[]},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;Object(p.a)(t).then((function(t){return e.setState({cast:t.data.cast})}))}},{key:"render",value:function(){return l.a.createElement("ul",{className:h.a.actorsList},this.state.cast.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+e.profile_path,width:"100px",height:"auto"}),l.a.createElement("p",null,e.name),l.a.createElement("p",null,"character: ",e.character))})))}}]),a}(o.Component),f=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={review:[]},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;Object(p.e)(t).then((function(t){return e.setState({review:t.data.results})}))}},{key:"render",value:function(){return l.a.createElement("ul",null,this.state.review.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("p",null,e.author),l.a.createElement("p",null,e.content))})))}}]),a}(o.Component),E=a(62),w=a.n(E),d=function(e){var t=e.title,a=e.release_date,n=e.popularity,r=e.overview,c=e.genres,i=void 0===c?[]:c,o=e.poster_path;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:w.a.wrapper},l.a.createElement("img",{alt:"film",src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2"+o}),l.a.createElement("div",{className:w.a.Contentwrapper},l.a.createElement("h2",null,t," (",a,")"," "),l.a.createElement("p",null,"Popularity ",n),l.a.createElement("h2",null,"Overview"),l.a.createElement("p",null,r),l.a.createElement("h2",null,"Genres"),l.a.createElement("ul",{className:w.a.genres},i.map((function(e){return l.a.createElement("li",{key:e.id},e.name)}))))))},b=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={movie:[],info:null},e.goBack=function(){e.props.history.push("/",e.state.info)},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;Object(p.c)(t).then((function(t){return e.setState({movie:t.data})}))}},{key:"render",value:function(){var e=this.state.movie;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,e),e&&l.a.createElement("div",null,l.a.createElement(s.b,{to:{pathname:"/movies/".concat(this.props.match.params.movieId,"/cast")}},"Cast"),this.state.info?l.a.createElement(s.b,{to:{pathname:"".concat(this.state.info.from),state:{qwery:this.state.info.qwery},search:this.state.info.qwery?"?qwery=".concat(this.state.info.qwery):""}},"Go back link"):l.a.createElement(s.b,{to:{pathname:"/"}},"Go back link"),l.a.createElement(s.b,{to:{pathname:"".concat(this.props.match.url,"/review")}},"Review"),l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/movies/:movieId/cast",component:v}),l.a.createElement(m.a,{exact:!0,path:"/movies/:movieId/review",component:f}))))}}]),a}(o.Component);t.default=b}}]);
//# sourceMappingURL=3.8c41ff35.chunk.js.map