(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){e.exports=a(229)},129:function(e,t,a){},229:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a(82),c=a(18),l=a(19),s=a(22),u=a(20),m=a(23),d=a(32),p=a(45),h=a(59),f=a.n(h);a(59),a(120),a(123),a(230);f.a.initializeApp({apiKey:"AIzaSyDw-EXVPbeutobhBYzTf9tybcVrMPRPd2Q",authDomain:"rikochet-github-io.firebaseapp.com",databaseURL:"https://rikochet-github-io.firebaseio.com",projectId:"rikochet-github-io",storageBucket:"rikochet-github-io.appspot.com",messagingSenderId:"984286183310"});var g=f.a,v=a(5),b=a(27),E=a(21),y=a(112),O=a(102),j="SET_PORTFOLIO",x="SET_OPENSOURCE",k="SET_ARTICLES",S="SET_USER",C=[],N=[],w=[],L={},B=Object(b.c)({articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return t.articles;default:return e}},opensource:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.openSourceItems;default:return e}},portfolio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.portfolioItems;default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.user;default:return e}}}),T=Object(b.a)(O.a)(b.e);a(129);var I,D=a(111),P=a(289),A=a(70),z=a.n(A),W=a(272),R=Object(D.a)({palette:{primary:{light:"#5cb4f5",main:"#5cb4f5",dark:"#5cb4f5"},secondary:{light:z.a[300],main:z.a[500],dark:z.a[700]}},typography:{useNextVariants:!0}}),M=(I=Object(b.d)(),T(B,I));Object(y.a)(M);var U=function(e){return function(t){return r.a.createElement(E.a,{store:M},r.a.createElement(P.a,{theme:R},r.a.createElement(W.a,null),r.a.createElement(e,t)))}},H=a(13),G=g.firestore();var F=g.firestore();var V=g.firestore(),_="projects";var J=g.firestore(),K="settings";var Q=a(290),X=a(280),Y=a(142),$=a(36),q=a(274),Z=a(276),ee=a(278),te=a(279),ae=a(277),ne=a(106),re=a.n(ne);var ie=Object(v.a)(function(e){return{root:{flexGrow:1},transparent:{background:"transparent",boxShadow:"none",color:"white"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}}})(function(e){var t=e.classes,a=e.transparent;return r.a.createElement("div",{className:t.root},r.a.createElement(q.a,{position:"static",color:"default",className:a?t.transparent:null},r.a.createElement(Z.a,null,r.a.createElement(ae.a,{className:t.menuButton,color:a?"inherit":"default","aria-label":"Menu"},r.a.createElement(re.a,null)),r.a.createElement(ee.a,{variant:"h6",color:"inherit",className:t.grow}),r.a.createElement(ee.a,{variant:"h6",color:"inherit",className:t.grow},r.a.createElement("a",{href:"//github.com/rikochet",alt:"View Github account for @rikochet",style:{color:"white",textDecoration:"none"}},r.a.createElement($.a,{icon:["fab","github"]})," Github")),r.a.createElement(te.a,{color:"inherit"},r.a.createElement($.a,{icon:["far","ellipsis-v"]})))))}),oe="#5cb4f5";var ce=Object(v.a)(function(e){return{heroUnit:{background:"url('/assets/images/eagle-flying-in-fog.jpg')",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"50%"},heroContent:{padding:"0 ".concat(e.spacing(8),"px")},heroProfile:{marginBottom:"14px"},heroProfileAvatar:{height:100,width:100},heroProfileUsername:{fontSize:"1.4em",color:"rgba(255,255,255,0.8)"},heroProfileDescription:{fontSize:"1em",color:"white"},heroTickerTitle:{fontSize:"0.9em",color:"rgba(255,255,255,0.8)"},heroTickerValue:{color:"white"},heroButtons:{marginTop:e.spacing(4)},heroLink:{color:"white",textDecoration:"none"},heroLinkActive:{},navigation:{listStyle:"none",display:"inline-flex",paddingInlineStart:0},navigationLink:{marginRight:"40px",color:"white",textDecoration:"none",fontSize:"0.9em"},navigationLinkActive:{color:"white",borderStyle:"solid",borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0,borderBottomWidth:"3px",borderBottomColor:oe,paddingBottom:"13px"},gridColumn:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},profileGridColumn:{display:"flex",flexDirection:"column",justifyContent:"center"},gridSpacer:{width:"80px"},gridAction:{borderBottomWidth:"10px",borderBottomColor:oe}}})(function(e){var t=e.classes,a=e.user,n=a.bannerImage&&""!==a.bannerImage?a.bannerImage:null;return r.a.createElement("div",{className:t.heroUnit,style:{backgroundImage:"url(".concat(n,")")}},r.a.createElement(ie,{transparent:!0}),r.a.createElement("div",{className:t.heroContent},r.a.createElement("div",{className:t.heroProfile},r.a.createElement(X.a,{container:!0,spacing:4},r.a.createElement(X.a,{item:!0},r.a.createElement(Y.a,{alt:"Avatar",src:a.avatarImage,className:t.heroProfileAvatar})),r.a.createElement(X.a,{item:!0,className:t.profileGridColumn},r.a.createElement("span",{className:t.heroProfileUsername},a.username),r.a.createElement("span",{className:t.heroProfileDescription},a.description)))),r.a.createElement("div",{style:{display:"flex"}},Object(Q.b)("md",e.width)?r.a.createElement("div",{style:{flex:1}}):r.a.createElement("div",null),r.a.createElement("ul",{className:t.navigation,style:{flex:3}},r.a.createElement("li",null,r.a.createElement(d.c,{exact:!0,to:"/",className:t.navigationLink,activeClassName:t.navigationLinkActive},r.a.createElement($.a,{icon:["fal","home"]})," Home")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/opensource",className:t.navigationLink,activeClassName:t.navigationLinkActive},r.a.createElement($.a,{icon:["fal","code-branch"]})," Open Source")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/portfolio",className:t.navigationLink,activeClassName:t.navigationLinkActive},r.a.createElement($.a,{icon:["fal","project-diagram"]})," Portfolio")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/articles",className:t.navigationLink,activeClassName:t.navigationLinkActive},r.a.createElement($.a,{icon:["fal","file-alt"]})," Articles"))))))}),le=Object(Q.a)()(ce),se=a(113);var ue=Object(v.a)(function(e){return{sideBar:{flex:1},fullHeight:{height:"calc(100vh - 220px)"},paper:Object(H.a)({},e.mixins.gutters(),{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)})}})(function(e){return e.classes,r.a.createElement("div",null)}),me=Object(Q.a)()(ue);var de=Object(v.a)(function(e){return{pageContent:{flex:3,marginTop:e.spacing(4),marginLeft:e.spacing(4),marginRight:e.spacing(4),marginBottom:e.spacing(4)}}})(function(e){var t=e.classes,a=e.className;return r.a.createElement("div",{className:a?null:t.pageContent},e.children)}),pe=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(me,null),r.a.createElement(de,null,r.a.createElement(se.a,{className:e.paper,elevation:1},r.a.createElement(ee.a,{variant:"h5",component:"h3"},"Home"),r.a.createElement(ee.a,{component:"p"}))))}}]),t}(r.a.Component),he=Object(v.a)(function(e){return{root:{display:"flex",flexDirection:"row"},paper:Object(H.a)({},e.mixins.gutters(),{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)})}})(pe);var fe=Object(v.a)(function(e){return{}})(function(e){var t=e.items,a=e.renderItem,n=e.renderLoading,i=e.renderEmpty;return!0===e.isLoading?n||r.a.createElement("div",null,"Loading..."):t.length>0?t.map(function(e){return a(e)}):i?i():null}),ge=a(281);var ve=Object(v.a)(function(e){return{loadingContainer:{paddingTop:e.spacing(4),display:"flex",flex:1,justifyContent:"center",alignItems:"center"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.loadingContainer},r.a.createElement(ge.a,{className:t.progress}))}),be=a(232),Ee=a(283),ye=a(284),Oe=a(282),je=a(286),xe=a(285),ke=a(291),Se=Object(be.a)({card:{},disabledCard:{filter:"blur(1.2px)","-ms-filter":"blur(1.2px)","-webkit-filter":"blur(1.2px)","moz-filter":"blur(1.2px)","o-filter":"blur(1.2px)"},chips:{marginTop:"16px"},chip:{marginRight:"8px",marginBottom:"8px"}});var Ce=function(e){var t=Se(),a=e.disabled,n=e.title,i=e.body,o=e.imageHeight,c=e.image,l=e.tags,s=e.buttons,u=e.onCardClick;return r.a.createElement(Ee.a,{className:a?t.disabledCard:t.card},r.a.createElement(ye.a,{disabled:a,onClick:function(e){return u(e)}},r.a.createElement(xe.a,{component:"img",alt:n,height:o,image:c,title:n}),r.a.createElement(je.a,null,r.a.createElement(ee.a,{gutterBottom:!0,variant:"h5",component:"h2"},n),r.a.createElement(ee.a,{variant:"body2",color:"textSecondary",component:"p"},i),r.a.createElement(ee.a,{className:t.chips,component:"div"},l.map(function(e,a){return r.a.createElement(ke.a,{key:a,label:e,size:"small",className:t.chip})})))),s&&function(e){return r.a.createElement(Oe.a,null,e&&e.map(function(e,t){return r.a.createElement(te.a,{key:t,size:"small",color:"primary",onClick:function(){return e.onClick}},e.title)}))}(s))};var Ne=Object(v.a)(function(e){return{titleLink:{color:oe,textDecoration:"none"},paper:Object(H.a)({},e.mixins.gutters(),{paddingTop:e.spacing(2),paddingBottom:e.spacing(2),marginBottom:e.spacing(2)})}})(function(e){e.classes;var t=e.item,a=e.history;return r.a.createElement(X.a,{item:!0,xs:12,md:4,lg:4},r.a.createElement(Ce,{image:t.image,imageHeight:180,title:t.name,body:t.description,tags:[],onCardClick:function(){return a.push("/opensource/".concat(t.id))}}))}),we=Object(p.g)(Ne);var Le=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this))).refresh=function(){a.setState({loading:!0}),a.props.getOpenSource()},a.state={loading:!1,items:e.opensource||[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refresh()}},{key:"componentWillReceiveProps",value:function(e){this.props.opensource!==e.opensource&&this.setState({items:e.opensource}),this.setState({loading:!1})}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.items,n=this.props.classes;return r.a.createElement("div",{className:n.root},r.a.createElement(me,null),r.a.createElement(de,null,r.a.createElement(X.a,{container:!0,spacing:4,direction:"row"},r.a.createElement(fe,{items:a,isLoading:t,renderLoading:r.a.createElement(ve,null),renderEmpty:function(){return r.a.createElement("div",null,"There are no opensource projects..")},renderItem:function(e){return r.a.createElement(we,{item:e,key:e.id})}}))))}}]),t}(r.a.Component),Be=Object(v.a)(function(e){return{root:{display:"flex",flexDirection:"row"}}})(Le),Te=Object(E.b)(function(e){return e},{getOpenSource:function(){return function(e,t){F.collection("opensource").orderBy("createdAt","desc").get().then(function(t){var a=[];t.forEach(function(e){a.push(Object(H.a)({},e.data(),{id:e.id}))}),e({type:x,openSourceItems:a})})}}})(Be),Ie=a(25),De=a.n(Ie),Pe=a(54),Ae=a.n(Pe);var ze=Object(v.a)(function(e){return{breadcrumbs:{fontSize:"0.8em",marginBottom:e.spacing(2)},breadcrumbLink:{color:oe,textDecoration:"none"},paper:Object(H.a)({},e.mixins.gutters(),{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)})}})(function(e){var t=e.classes,a=e.name,n=e.parentName,i=e.parentLink;return r.a.createElement("div",{className:t.breadcrumbs},r.a.createElement(d.b,{to:i,className:t.breadcrumbLink},n)," / ",a)});var We=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).refresh=function(){var e=a.props.openSource,t=a.state.id;if(a.setState({loading:!0}),De.a.isEmpty(e))a.props.getOpenSourceById(t).then(function(e){var t=e.data();a.setState({item:t,loading:!1})});else{var n=De.a.find(e,{id:t});a.setState({item:n,loading:!1})}},a.state={loading:!1,id:e.match.params.id||null,item:e.item||{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refresh()}},{key:"render",value:function(){var e=this.state.item,t=this.props.classes;return De.a.isEmpty(e)?r.a.createElement(ve,null):r.a.createElement("div",{className:t.root},r.a.createElement(me,null),r.a.createElement(de,null,r.a.createElement(se.a,{className:t.paper,elevation:1},r.a.createElement(ze,{name:e.name,parentName:"OpenSource",parentLink:"/opensource"}),r.a.createElement(ee.a,{variant:"h4",component:"h4"},e.name),r.a.createElement(ee.a,{variant:"h6",component:"h6"},e.description),r.a.createElement(Ae.a,{source:e.body}))))}}]),t}(r.a.Component),Re=Object(v.a)(function(e){return{root:{display:"flex",flexDirection:"row"},paper:Object(H.a)({},e.mixins.gutters(),{paddingTop:e.spacing(2),paddingBottom:e.spacing(2),marginBottom:e.spacing(2)})}})(We),Me=Object(E.b)(function(e){return e},{getOpenSourceById:function(e){return function(t,a){return F.doc("opensource/".concat(e)).get()}}})(Re);a(224);var Ue=Object(v.a)(function(e){return{titleLink:{color:oe,textDecoration:"none"},paperInfo:Object(H.a)({},e.mixins.gutters(),{paddingTop:e.spacing(2),paddingBottom:e.spacing(2),marginBottom:e.spacing(2)}),chip:{margin:e.spacing(1)}}})(function(e){e.classes;var t=e.item,a=e.history;return r.a.createElement(X.a,{item:!0,xs:12,md:4,lg:4},r.a.createElement(Ce,{image:t.image,imageHeight:180,title:t.name,body:t.description,tags:t.tags,onCardClick:function(){return a.push("/portfolio/".concat(t.id))}}))}),He=Object(p.g)(Ue);var Ge=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this))).refresh=function(){a.setState({loading:!0}),a.props.getPortfolio()},a.state={loading:!1,items:e.portfolio||[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refresh()}},{key:"componentWillReceiveProps",value:function(e){this.props.portfolio!==e.portfolio&&this.setState({items:e.portfolio}),this.setState({loading:!1})}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.items,n=this.props.classes;return r.a.createElement("div",{className:n.root},r.a.createElement(me,null),r.a.createElement(de,null,r.a.createElement(X.a,{container:!0,spacing:4,direction:"row"},r.a.createElement(fe,{items:a,isLoading:t,renderLoading:r.a.createElement(ve,null),renderEmpty:function(){return r.a.createElement("div",null,"There are no items in the portfolio..")},renderItem:function(e){return r.a.createElement(He,{item:e,key:e.id})}}))))}}]),t}(r.a.Component),Fe=Object(v.a)(function(e){return{root:{display:"flex",flexDirection:"row"},pageContent:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper}}})(Ge),Ve=Object(E.b)(function(e){return e},{getPortfolio:function(){return function(e,t){return V.collection("".concat(_)).orderBy("createdAt","desc").get().then(function(t){var a=[];return t.forEach(function(e){a.push(Object(H.a)({},e.data(),{id:e.id}))}),e({type:j,portfolioItems:a}),a})}}})(Fe),_e=a(63),Je=a(287);var Ke=Object(v.a)(function(e){return{button:{position:"absolute",right:"40px"}}})(function(e){var t=e.classes,a=e.isLoading,n=e.vOffset,i=e.label,o=e.icon,c=e.color,l=e.onClick;return r.a.createElement(te.a,{variant:"fab",color:"primary","aria-label":i,className:t.button,disabled:a,style:{marginTop:n+"px"},onClick:function(){return l()}},a?r.a.createElement(ge.a,{color:"inherit",size:24,style:{color:c}}):r.a.createElement($.a,{icon:o,size:"2x",color:c}))});var Qe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).refresh=function(){var e=a.props.portfolio,t=a.state.id;if(a.setState({isLoading:!0}),De.a.isEmpty(e))a.props.getPortfolioById(t).then(function(e){var t=e.data();a.setState({item:t,isLoading:!1})});else{var n=De.a.find(e,{id:t});a.setState({item:n,isLoading:!1})}},a.handleChange=function(e){return function(t){a.setState(De.a.merge(a.state,{item:Object(_e.a)({},e,t.target.value)}))}},a.handleSave=function(){var e=a.state,t=e.id,n=e.item;a.setState({isSaving:!0}),a.props.savePortfolioItem(t,n).then(function(e){a.setState({isSaving:!1})})},a.state={isLoading:!1,isSaving:!1,id:e.match.params.id||null,item:e.item||{},editMode:"/portfolio/:id/edit"===e.match.path},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refresh()}},{key:"render",value:function(){var e=this,t=this.state,a=t.editMode,n=t.item,i=(t.isLoading,t.isSaving),o=this.props.classes;return De.a.isEmpty(n)?r.a.createElement(ve,null):r.a.createElement("div",{className:o.root},r.a.createElement(me,null),r.a.createElement(de,null,r.a.createElement(se.a,{className:o.paper,elevation:1},r.a.createElement(ze,{name:n.name,parentName:"Portfolio",parentLink:"/portfolio"}),!1===a?r.a.createElement("div",null,r.a.createElement(ee.a,{variant:"h4",component:"h4"},n.name),r.a.createElement(ee.a,{variant:"h6",component:"h6"},n.description),r.a.createElement("img",{src:n.image,style:{width:"100%"},title:n.name,alt:""}),r.a.createElement(Ae.a,{source:n.body})):r.a.createElement("div",null,r.a.createElement(Ke,{icon:["fal","save"],color:"white",vOffset:"-72",isLoading:i,onClick:function(){return e.handleSave()}}),r.a.createElement(Je.a,{placeholder:"Name",inputProps:{className:o.nameTextField},value:n.name,onChange:this.handleChange("name"),margin:"normal",fullWidth:!0}),r.a.createElement(Je.a,{id:"standard-name",placeholder:"Description",inputProps:{className:o.descriptionTextField},value:n.description,onChange:this.handleChange("description"),margin:"normal",fullWidth:!0}),r.a.createElement(Je.a,{multiline:!0,value:n.body,onChange:this.handleChange("body"),margin:"normal",fullWidth:!0})))))}}]),t}(r.a.Component),Xe=Object(v.a)(function(e){return{root:{display:"flex",flexDirection:"row"},paper:Object(H.a)({},e.mixins.gutters(),{paddingTop:e.spacing(2),paddingBottom:e.spacing(2),marginBottom:e.spacing(2)}),nameTextField:{fontSize:"2.16rem"},descriptionTextField:{fontSize:"1.27rem",fontWeight:500}}})(Qe),Ye=Object(E.b)(function(e){return e},{getPortfolioById:function(e){return function(t,a){return V.doc("".concat(_,"/").concat(e)).get()}},savePortfolioItem:function(e,t){return function(a,n){return V.doc("".concat(_,"/").concat(e)).set(t).then(function(){return console.log("Document successfully written!"),!0}).catch(function(e){return console.error("Error writing document: ",e),!1})}}})(Xe);var $e=Object(v.a)(function(e){return{titleLink:{color:oe,textDecoration:"none"},paper:Object(H.a)({},e.mixins.gutters(),{paddingTop:e.spacing(2),paddingBottom:e.spacing(2),marginBottom:e.spacing(2)})}})(function(e){e.classes;var t=e.item,a=e.history;return r.a.createElement(X.a,{item:!0,xs:12,md:4,lg:4},r.a.createElement(Ce,{image:t.image,imageHeight:180,title:t.name,body:t.description,tags:[],onCardClick:function(){return a.push("/articles/".concat(t.id))}}))}),qe=Object(p.g)($e);var Ze=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this))).refresh=function(){a.setState({loading:!0}),a.props.getArticles()},a.state={loading:!1,items:e.articles||[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refresh()}},{key:"componentWillReceiveProps",value:function(e){this.props.articles!==e.articles&&this.setState({items:e.articles}),this.setState({loading:!1})}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.items,n=this.props.classes;return r.a.createElement("div",{className:n.root},r.a.createElement(me,null),r.a.createElement(de,null,r.a.createElement(fe,{items:a,isLoading:t,renderLoading:r.a.createElement(ve,null),renderEmpty:function(){return r.a.createElement("div",null,"There are no articles..")},renderItem:function(e){return r.a.createElement(qe,{item:e,key:e.id})}})))}}]),t}(r.a.Component),et=Object(v.a)(function(e){return{root:{display:"flex",flexDirection:"row"}}})(Ze),tt=Object(E.b)(function(e){return e},{getArticles:function(){return function(e,t){G.collection("articles").orderBy("createdAt","desc").get().then(function(t){var a=[];t.forEach(function(e){a.push(Object(H.a)({},e.data(),{id:e.id}))}),e({type:k,articles:a})})}}})(et);var at=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).refresh=function(){var e=a.props.articles,t=a.state.id;if(a.setState({loading:!0}),De.a.isEmpty(e))a.props.getArticleById(t).then(function(e){var t=e.data();a.setState({item:t,loading:!1})});else{var n=De.a.find(e,{id:t});a.setState({item:n,loading:!1})}},a.state={loading:!1,id:e.match.params.id||null,item:e.item||{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refresh()}},{key:"render",value:function(){var e=this.state.item,t=this.props.classes;return De.a.isEmpty(e)?r.a.createElement(ve,null):r.a.createElement("div",{className:t.root},r.a.createElement(me,null),r.a.createElement(de,null,r.a.createElement(se.a,{className:t.paper,elevation:1},r.a.createElement(ze,{name:e.name,parentName:"Articles",parentLink:"/articles"}),r.a.createElement(ee.a,{variant:"h4",component:"h4"},e.name),r.a.createElement(ee.a,{variant:"h6",component:"h6"},e.description),r.a.createElement(Ae.a,{source:e.body}))))}}]),t}(r.a.Component),nt=Object(v.a)(function(e){return{root:{display:"flex",flexDirection:"row"},paper:Object(H.a)({},e.mixins.gutters(),{paddingTop:e.spacing(2),paddingBottom:e.spacing(2),marginBottom:e.spacing(2)})}})(at),rt=Object(E.b)(function(e){return e},{getArticleById:function(e){return function(t,a){return G.doc("articles/".concat(e)).get()}}})(nt);var it=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClose=function(){a.setState({open:!1})},a.handleClick=function(){a.setState({open:!0})},a.state={authed:!1,loading:!0,open:!1,user:e.user||{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.removeListener=g.auth().onAuthStateChanged(function(t){t?e.setState({authed:!0,loading:!1}):e.setState({authed:!1,loading:!1})}),this.props.getUser().then(function(t){e.setState({user:t})})}},{key:"componentWillUnmount",value:function(){this.removeListener()}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.user;t.open;return r.a.createElement(d.a,null,r.a.createElement("div",{className:e.container},r.a.createElement(le,{user:a}),r.a.createElement(p.d,null,r.a.createElement(ot,{exactly:!0,path:"/portfolio/:id/edit",component:Ye,authed:this.state.authed}),r.a.createElement(ot,{exactly:!0,path:"/portfolio/:id",component:Ye,authed:this.state.authed}),r.a.createElement(ot,{exactly:!0,path:"/portfolio",component:Ve,authed:this.state.authed}),r.a.createElement(ot,{exactly:!0,path:"/opensource/:id",component:Me,authed:this.state.authed}),r.a.createElement(ot,{exactly:!0,path:"/opensource",component:Te,authed:this.state.authed}),r.a.createElement(ot,{exactly:!0,path:"/article/:id",component:rt,authed:this.state.authed}),r.a.createElement(ot,{exactly:!0,path:"/articles",component:tt,authed:this.state.authed}),r.a.createElement(ot,{exactly:!0,path:"/",component:he,authed:this.state.authed}))))}}]),t}(r.a.Component),ot=function(e){var t=e.component,a=(e.authed,Object(o.a)(e,["component","authed"]));return r.a.createElement(p.b,Object.assign({},a,{render:function(e){return r.a.createElement(t,e)}}))},ct=Object(v.a)(function(e){return{container:{}}})(it),lt=U(Object(E.b)(function(e){return{user:e.user}},{getUser:function(){return function(e,t){return J.doc("".concat(K,"/user")).get().then(function(t){var a=Object(H.a)({},t.data());return e(function(e){return{type:S,user:e}}(a)),a})}}})(ct));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var st=a(48),ut=a(108),mt=a(109),dt=a(110);st.b.add(mt.a),st.b.add(ut.a),st.b.add(dt.a),Object(i.render)(r.a.createElement(lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[115,1,2]]]);
//# sourceMappingURL=main.42cffaec.chunk.js.map