(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(22),i=a.n(n),r=a(10),o=(a(116),a(14)),l=a(16),d=a(9),j=(a(117),a(36),a(31)),b=a(55),u=(a(138),a(78)),O=a(170),p=a(50),g=a(183),h=a(171),m=a(172),x=a(173),f=a(1),A=Object(O.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}});function v(e){var t,a=A(),s=Object(u.documentToReactComponents)(e.post.fields.ingredients);return Object(f.jsx)("div",{id:"recipeGrid",children:Object(f.jsx)(h.a,{component:"a",href:"#",children:Object(f.jsxs)(g.a,{className:a.card,id:"recipeCard",children:[Object(f.jsx)("div",{className:a.cardDetails,children:Object(f.jsxs)(m.a,{children:[Object(f.jsx)(p.a,{component:"h2",variant:"h5",children:e.post.fields.title}),Object(f.jsxs)(p.a,(t={variant:"subtitle1",id:"recipeText"},Object(j.a)(t,"id","recipeText"),Object(j.a)(t,"children",[Object(f.jsx)("br",{}),e.post.fields.category]),t)),Object(f.jsxs)(p.a,{variant:"subtitle1",paragraph:!0,id:"recipeText",children:[Object(f.jsx)("br",{}),"Ingredients: Ingredients:",s]}),Object(f.jsxs)(p.a,{variant:"subtitle1",id:"recipeText",children:["Method:",Object(f.jsx)("br",{}),e.post.fields.description]})]})}),Object(f.jsx)(x.a,{className:a.cardMedia,image:e.post.fields.image.fields.file.url,title:"",id:"pic"})]})})},e.post.fields.slug)}var E=a(97),S=a(180),C=a(4),J=a(174),k=a(175),w=a(181),y=a(176),T=a(38),R=a.n(T),P=a(87),W=a.n(P),N=Object(O.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}}));var K=function(e){console.log(e.addFavorites);var t=N(),a=c.a.useState(!1),s=Object(l.a)(a,2),n=s[0],i=s[1];return Object(f.jsxs)(g.a,{className:t.root,id:"recipe",children:[Object(f.jsx)(J.a,{id:"recipeTitle",title:e.post.fields.title,subheader:""}),Object(f.jsx)(x.a,{className:t.media,image:e.post.fields.image.fields.file.url,title:""}),Object(f.jsx)(m.a,{children:Object(f.jsx)(p.a,{variant:"body2",color:"textSecondary",component:"p",id:"recipeText",children:Object(f.jsx)("p",{children:e.post.fields.category})})}),Object(f.jsxs)(k.a,{disableSpacing:!0,children:[Object(f.jsx)(y.a,{"aria-label":"add to favorites",children:Object(f.jsx)(R.a,{onClick:function(){return e.addFavorites(e.post.fields.slug)},className:e.post.favorite?"heart":""})}),Object(f.jsx)(y.a,{className:Object(C.a)(t.expand,Object(j.a)({},t.expandOpen,n)),onClick:function(){i(!n)},"aria-expanded":n,"aria-label":"show more",children:Object(f.jsx)(W.a,{})})]}),Object(f.jsx)(w.a,{in:n,timeout:"auto",unmountOnExit:!0,children:Object(f.jsx)(m.a,{children:Object(f.jsx)(p.a,{paragraph:!0,children:Object(f.jsx)("div",{className:"slug",children:Object(f.jsx)(r.b,{className:"link",to:"/recipes/RecipePage/".concat(e.post.fields.slug),onClick:e.onChangeSlug,children:e.post.fields.slug})})})})})]},e.post.fields.slug)};var I=function(e){var t=e.posts,a=e.onChangeSlug,s=e.addFavorites;return Object(E.a)(e,["posts","onChangeSlug","addFavorites"]),Object(f.jsx)(S.a,{m:1,p:1,id:"collection",children:t&&t.map((function(e){return console.log(e),Object(f.jsx)(S.a,{p:1,id:"card",children:Object(f.jsx)(K,{post:e,onChangeSlug:a,addFavorites:s},e.fields.slug)})}))})},G=a(177),V=Object(O.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function F(){var e=V();return Object(f.jsx)("div",{className:e.root,children:Object(f.jsx)(G.a,{color:"secondary"})})}function H(e){var t=e.posts;return Object(f.jsx)(f.Fragment,{children:t&&t.map((function(e){return Object(f.jsx)(v,{post:e},e.fields.slug)}))})}var B=a(8),D=a.n(B),z=a(88),q=function(){var e=Object(s.useState)("Submit"),t=Object(l.a)(e,2),a=t[0],c=t[1],n=function(){var e=Object(z.a)(D.a.mark((function e(t){var a,s,n,i,r,o,l;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c("Sending..."),a=t.target.elements,s=a.name,n=a.email,i=a.message,r={name:s.value,email:n.value,message:i.value},e.next=6,fetch("http://localhost:5000/contact",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(r)});case 6:return o=e.sent,c("Submit"),e.next=10,o.json();case 10:l=e.sent,alert(l.status);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h2",{children:"Contact us"}),Object(f.jsx)("p",{children:"You got inspried and have even more ideas? Share them with us. LoreLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),Object(f.jsxs)("form",{id:"contactForm",onSubmit:n,children:[Object(f.jsxs)("div",{className:"flex-container",children:[Object(f.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(f.jsx)("input",{type:"text",id:"name",required:!0})]}),Object(f.jsxs)("div",{className:"flex-container",children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(f.jsx)("input",{type:"email",id:"email",required:!0})]}),Object(f.jsxs)("div",{className:"flex-container",children:[Object(f.jsx)("label",{htmlFor:"message",children:"Message: "}),Object(f.jsx)("textarea",{id:"message",required:!0})]}),Object(f.jsx)("button",{style:{marginTop:"20px"},type:"submit",children:a})]})]})})},L=function(){return Object(f.jsx)(c.a.Fragment,{children:Object(f.jsx)("header",{children:Object(f.jsx)("h1",{children:"Cook like an artist"})})})},M=a(89),Q=a(90),Y=a(98),X=a(96),U=a(93),Z=a.n(U),_=a(92),$=a.n(_),ee=a(91),te=a.n(ee),ae=a(94),se=a.n(ae),ce=a(95),ne=a.n(ce),ie=function(e){Object(Y.a)(a,e);var t=Object(X.a)(a);function a(){return Object(M.a)(this,a),t.apply(this,arguments)}return Object(Q.a)(a,[{key:"render",value:function(){return Object(f.jsx)("footer",{children:Object(f.jsxs)("div",{id:"social-buttons",children:[Object(f.jsx)(te.a,{}),Object(f.jsx)($.a,{}),Object(f.jsx)(Z.a,{}),Object(f.jsx)(se.a,{}),Object(f.jsx)(ne.a,{})]})})}}]),a}(c.a.Component),re=function(e,t){var a=t.onChangeSlug;console.log(e),console.log(e.posts.length);var c=Object(s.useState)(0),n=Object(l.a)(c,2),i=n[0],o=n[1],d=Object(s.useState)(),j=Object(l.a)(d,2),b=(j[0],j[1]);return Object(s.useEffect)((function(){return o(Math.floor(Math.random()*e.posts.length))}),[]),Object(s.useEffect)((function(){var e=setInterval((function(){b((function(e){return e+1}))}),86400);return function(){clearInterval(e)}}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"home",children:[Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h2",{children:"Welcome to Artist Cucina"}),Object(f.jsx)("h3",{children:"Do you love colors? Do you love eating?"}),Object(f.jsx)("p",{children:"PERFECT! -Stroll around our website and find the perfect color palette for your plate!You can choose different options depending on your diet restrictions. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]}),Object(f.jsxs)("div",{className:"container",id:"categories",children:[Object(f.jsx)("h2",{children:"OurCategories"}),Object(f.jsxs)("div",{className:"categories",children:[Object(f.jsx)(r.b,{to:"/recipes/low_sugar",className:"link",onClick:e.onChangeCategory,addFavorites:e.addFavorites,children:"Low Sugar"}),Object(f.jsx)(r.b,{to:"/recipes/gluten_free",className:"link",onClick:e.onChangeCategory,children:"Gluten Free"}),Object(f.jsx)(r.b,{to:"/recipes/vegan",className:"link",onClick:e.onChangeCategory,children:"Vegan"}),Object(f.jsx)(r.b,{to:"/recipes/lacto_free",className:"link",onClick:e.onChangeCategory,children:"Lacto Free"}),Object(f.jsx)(r.b,{to:"/recipes/pescatarian",className:"link",onClick:e.onChangeCategory,children:"Pescatarian "}),Object(f.jsx)(r.b,{to:"/recipes/vegetarian",className:"link",onClick:e.onChangeCategory,children:"Vegetarian"})]})]}),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h2",{children:"Dish of the Day"}),Object(f.jsx)("div",{className:"day-dish",children:Object(f.jsx)(S.a,{display:"flex",justifyContent:"center",bgcolor:"background.paper",children:Object(f.jsx)(K,{post:e.posts[i],addFavorites:e.addFavorites,onChangeSlug:a})})})]})]})})},oe=a(178),le=a(179),de=function(){return Object(f.jsx)(oe.a,{value:"",className:"favorites-bar",children:Object(f.jsxs)(r.b,{to:"/recipes/Favorites",children:[" Go to your favorite Recipes",Object(f.jsx)(le.a,{label:"Favorites",icon:Object(f.jsx)(R.a,{})})]})})},je=b.a({space:Object({NODE_ENV:"production",PUBLIC_URL:"/wbs-cookblog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).development.REACT_APP_SPACE_ID,accessToken:Object({NODE_ENV:"production",PUBLIC_URL:"/wbs-cookblog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).development.REACT_APP_ACCESS_TOKEN});var be=function(){var e=Object(s.useState)(),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(),i=Object(l.a)(n,2),j=i[0],b=i[1],u=Object(s.useState)(),O=Object(l.a)(u,2),p=O[0],g=O[1],h=Object(s.useState)(),m=Object(l.a)(h,2),x=(m[0],m[1],Object(s.useState)(!1)),A=Object(l.a)(x,2),v=(A[0],A[1],Object(s.useState)()),E=Object(l.a)(v,2),S=E[0],C=E[1],J=Object(s.useState)(),k=Object(l.a)(J,2),w=k[0],y=k[1],T=function(e){g(e.target.text)},R=function(e){console.log(e);var t=a.map((function(t){return t.fields.slug===e?Object(o.a)(Object(o.a)({},t),{},{favorite:!t.favorite}):t}));c(t)},P=function(e){console.log(e.target.text),y(e.target.text)};return Object(s.useEffect)((function(){je.getEntries(Object({NODE_ENV:"production",PUBLIC_URL:"/wbs-cookblog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SPACE_ID).then((function(e){c(e.items.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{favorite:!1})}))),console.log(a)})).catch(console.error)}),[]),Object(s.useEffect)((function(){je.getEntries({content_type:"blogPost","fields.category":p}).then((function(e){b(e.items.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{favorite:!1})})))})).catch(console.error)}),[p]),Object(s.useEffect)((function(){je.getEntries({content_type:"blogPost","fields.slug":w}).then((function(e){C(e.items)})).catch(console.error)}),[w]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("nav",{id:"four",children:[Object(f.jsxs)(r.c,{ecact:!0,to:"/",children:[" ",Object(f.jsx)("img",{src:"data:image/png;base64,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"})," "]}),Object(f.jsx)(r.c,{exact:!0,to:"/",className:"link",children:" Home "}),Object(f.jsx)(r.c,{exact:!0,to:"/recipes",className:"link",children:" All Recipes "}),Object(f.jsx)(r.c,{to:"/contact",className:"link",children:" Contact"})]}),Object(f.jsx)(L,{}),Object(f.jsxs)(d.c,{children:[Object(f.jsx)(d.a,{path:"/contact",component:q}),Object(f.jsx)(d.a,{path:"/recipes/RecipePage/:slug",render:function(e){return S?Object(f.jsx)(H,Object(o.a)(Object(o.a)({},e),{},{posts:S})):Object(f.jsx)(F,{})}}),Object(f.jsx)(d.a,{path:"/recipes/RecipePage",component:H}),Object(f.jsx)(d.a,{path:"/recipes/Favorites",render:function(e){return a&&a.filter((function(e){return e.favorite})).length>=1?Object(f.jsx)(I,Object(o.a)(Object(o.a)({},e),{},{posts:a.filter((function(e){return e.favorite})),addFavorites:R})):Object(f.jsx)("h2",{className:"container",children:"Please choose some favorites first"})}}),Object(f.jsx)(d.a,{path:"/recipes/:category",render:function(e){return j?Object(f.jsx)(I,Object(o.a)(Object(o.a)({},e),{},{onChangeSlug:P,posts:j,addFavorites:R})):Object(f.jsx)(F,{})}}),Object(f.jsx)(d.a,{path:"/recipes",render:function(e){return a?Object(f.jsx)(I,Object(o.a)(Object(o.a)({},e),{},{posts:a,onChangeSlug:P,addFavorites:R})):Object(f.jsx)(F,{})}}),Object(f.jsx)(d.a,{exact:!0,path:"/",render:function(e){return a&&Object(f.jsx)(re,Object(o.a)(Object(o.a)({},e),{},{onChangeCategory:T,posts:a,addFavorites:R}))}})]}),Object(f.jsx)(de,{}),Object(f.jsx)(ie,{})]})};a(145);console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/wbs-cookblog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),i.a.render(Object(f.jsx)(r.a,{children:Object(f.jsx)(be,{})}),document.getElementById("root"))},36:function(e,t,a){},56:function(e,t){}},[[146,1,2]]]);
//# sourceMappingURL=main.23e3964a.chunk.js.map