import{c as T,a as B,o as s,b as d,d as e,e as b,n as g,f as C,r as _,g as I,h as L,i as f,w as y,u as j,F as A,j as S,t as V,p as O,k as R,l as k,m as Y,v as D,q as F,R as Z,s as U,T as W,x as K,S as J,y as Q,V as X}from"./vendor.cde18cd2.js";const ii=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}};ii();const ei="modulepreload",$={},ai="/",x=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${ai}${r}`,r in $)return;$[r]=!0;const a=r.endsWith(".css"),n=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":ei,a||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),a)return new Promise((m,h)=>{l.addEventListener("load",m),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},E=[{name:"Acceuil",path:"/",alias:"/acceuil",icon:"MyHome",component:()=>x(()=>import("./MainPage.efda1871.js"),["assets/MainPage.efda1871.js","assets/MainPage.18c9f743.css","assets/vendor.cde18cd2.js","assets/ContentBox.873a6051.js"]),meta:{description:"Novelec entreprise d'\xE9lectricit\xE9 g\xE9n\xE9rale et tertiaire, d\xE9pannage, domotique, r\xE9novation",title:"Acceuil"}},{name:"Electricit\xE9",path:"/electricite",icon:"HomeLightningBoltOutline",component:()=>x(()=>import("./ElectricitePage.50bffac8.js"),["assets/ElectricitePage.50bffac8.js","assets/BandeauItem.f14a7b6d.js","assets/MainPage.18c9f743.css","assets/vendor.cde18cd2.js","assets/ContentBox.873a6051.js"]),meta:{description:"Novelec entreprise d'\xE9lectricit\xE9 g\xE9n\xE9rale et tertiaire, d\xE9pannage, r\xE9novation",title:"Electricit\xE9"}},{name:"Plomberie",path:"/plomberie",icon:"HomePlumbing",component:()=>x(()=>import("./PlomberiePage.c28ed4ca.js"),["assets/PlomberiePage.c28ed4ca.js","assets/BandeauItem.f14a7b6d.js","assets/MainPage.18c9f743.css","assets/vendor.cde18cd2.js","assets/ContentBox.873a6051.js"]),meta:{description:"Sp\xE9cialis\xE9 en domotique l'entreprise Novelec r\xE9alise pour vous un habit\xE2t simple, fonctionnel et connect\xE9",title:"Plomberie"}},{name:"Domotique",path:"/domotique",icon:"HomeAssistant",component:()=>x(()=>import("./DomotiquePage.a8aa280d.js"),["assets/DomotiquePage.a8aa280d.js","assets/BandeauItem.f14a7b6d.js","assets/MainPage.18c9f743.css","assets/vendor.cde18cd2.js","assets/ContentBox.873a6051.js"]),meta:{description:"Sp\xE9cialis\xE9 en domotique l'entreprise Novelec r\xE9alise pour vous un habit\xE2t simple, fonctionnel et connect\xE9",title:"Domotique"}},{name:"Pompe a Chaleur",path:"/pompeachaleur",icon:"HeatPumpOutline",component:()=>x(()=>import("./PompePage.8139cdb7.js"),["assets/PompePage.8139cdb7.js","assets/BandeauItem.f14a7b6d.js","assets/MainPage.18c9f743.css","assets/vendor.cde18cd2.js","assets/ContentBox.873a6051.js"]),meta:{description:"Sp\xE9cialis\xE9 en domotique l'entreprise Novelec r\xE9alise pour vous un habit\xE2t simple, fonctionnel et connect\xE9",title:"Pompe a Chaleur"}},{name:"Contact",path:"/contact",icon:"EmailOutline",component:()=>x(()=>import("./ContactPage.aa19fb16.js"),["assets/ContactPage.aa19fb16.js","assets/vendor.cde18cd2.js"]),meta:{description:"Nous contact\xE9, nous localis\xE9",title:"Contact"}}];function M(i=[],t=[]){for(let o=0,r=i.length;o<r;o++){let a=i[o];a.path&&t.push(a),a.component||M(a.children,t)}return t}const P=M(E);P.push({name:"Dolibarr",path:"/dolibarr",beforeEnter(){location.href="http://192.168.1.52"}});const z=T({history:B("/"),linkActiveClass:"is-active",routes:P,scrollBehavior(){return new Promise(i=>{setTimeout(()=>{i({top:0})},500)})}});function N(i,t,o){const r=document.head.querySelector(i);o==null?r.removeAttribute(t):r.setAttribute(t,o)}function w(i,t){N(`meta[${i}]`,"content",t)}z.beforeEach((i,t,o)=>{document.title=i.meta.title,w('itemprop="name"',i.meta.title),w('property="og:title"',i.meta.title),w('name="description"',i.meta.description),w('itemprop="description"',i.meta.description),w('property="og:description"',i.meta.description),N('link[rel="canonical"]',"href","http://www.novelec43.fr"+i.fullPath),w('property="og:url"',"http://www.novelec43.fr"+i.fullPath),o()});var ti="/assets/logo.51524099.webp";const oi={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ni=e("path",{fill:"currentColor",d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10Z"},null,-1),ri=[ni];function si(i,t){return s(),d("svg",oi,ri)}var li={name:"mdi-email-outline",render:si};const di={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ci=e("path",{fill:"currentColor",d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14v14m-7-1c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6m-.75-2.08c-.55-.1-1.05-.32-1.5-.62l1.5-1.5v2.12m1.5 0v-2.11l1.5 1.5c-.45.3-.95.51-1.5.61m2.56-1.67l-1.5-1.5h2.11c-.1.55-.31 1.05-.61 1.5m.61-3h-2.11l1.5-1.5c.3.45.51.95.61 1.5m-3.17-3.17c.55.1 1.05.32 1.5.62l-1.5 1.5V8.08M12 11c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-.75-2.92v2.11l-1.5-1.5c.45-.3.95-.51 1.5-.61M8.69 9.75l1.5 1.5H8.08c.1-.55.31-1.05.61-1.5m1.5 3l-1.5 1.5c-.3-.44-.51-.95-.62-1.5h2.12Z"},null,-1),bi=[ci];function fi(i,t){return s(),d("svg",di,bi)}var mi={name:"mdi-heat-pump-outline",render:fi};const ui={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},hi=e("path",{fill:"currentColor",d:"M21.8 13H20v8h-7v-3.33l2.79-2.79l.71.12a2.1 2.1 0 1 0 0-4.2a2.1 2.1 0 0 0-2.1 2.1l.1.71l-1.5 1.52V9.65c.66-.36 1.1-1.05 1.1-1.85A2.1 2.1 0 0 0 12 5.7a2.1 2.1 0 0 0-2.1 2.1c0 .8.44 1.49 1.1 1.85v5.48l-1.5-1.52l.1-.71a2.1 2.1 0 0 0-2.1-2.1a2.1 2.1 0 0 0-2.1 2.1A2.1 2.1 0 0 0 7.5 15l.71-.12L11 17.67V21H4v-8H2.25c-.42 0-.83 0-.83-.21c.01-.22.43-.64.86-1.07L11 3c.33-.33.67-.67 1-.67c.33 0 .67.34 1 .67l4 4V6h2v3l2.78 2.78c.4.4.81.81.82 1.02c0 .2-.4.2-.8.2M7.5 12a.9.9 0 0 1 .9.9a.9.9 0 0 1-.9.9a.9.9 0 0 1-.9-.9a.9.9 0 0 1 .9-.9m9 0c.5 0 .9.4.9.9s-.4.9-.9.9a.9.9 0 0 1-.9-.9a.9.9 0 0 1 .9-.9M12 6.9c.5 0 .9.4.9.9s-.4.9-.9.9s-.9-.4-.9-.9s.4-.9.9-.9Z"},null,-1),pi=[hi];function vi(i,t){return s(),d("svg",ui,pi)}var gi={name:"mdi-home-assistant",render:vi};const xi={width:"1.2em",height:"1.2em",viewBox:"0 0 24 24"},wi=e("path",{fill:"currentColor",d:"m5 20v-8h-3l10-9 10 9h-3v8h-14m7-14.31-5 4.5v7.81h10v-7.81l-5-4.5"},null,-1),ki=e("path",{fill:"currentColor",d:"m15.082 13.817v0.83751h-1.2563v-0.72026l1.2563-0.11725m0-0.41875c0-0.46063-0.41875-0.83751-0.92126-0.83751h-2.8475v-0.41875h-2.0938v4.6063h2.0938v-2.969l3.7688-0.38106m-5.8625-1.675h2.0938v-0.83751l2.2445-0.74957c0.15913-0.05025 0.268-0.201 0.268-0.3685 0-0.27219-0.268-0.46063-0.52344-0.3685l-4.0828 1.4866z","stroke-width":".41875"},null,-1),yi=[wi,ki];function zi(i,t){return s(),d("svg",xi,yi)}var _i={name:"my-home-plumbing",render:zi};const Gi={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ji=e("path",{fill:"currentColor",d:"M5 20v-8H2l10-9l10 9h-3v8H5m7-14.31l-5 4.5V18h10v-7.81l-5-4.5M11.5 18v-4H9l3.5-7v4H15l-3.5 7Z"},null,-1),qi=[ji];function $i(i,t){return s(),d("svg",Gi,qi)}var Ci={name:"mdi-home-lightning-bolt-outline",render:$i};const Li={width:"1.2em",height:"1.2em",viewBox:"0 0 24 24"},Ai=e("path",{fill:"currentColor",d:"m16.084 2.2227c-0.96338 0-0.11716 0.00228-1.2891 0.00228-3.42e-4 0.55729-6.84e-4 1.7017-1e-3 2.2591l-2.9008-1.7064 0.0014 1.8142 9.7588 5.5323c0.87533 0.32343 1.4413-1.0424 0.59722-1.3465l-6.1647-3.6622c-4.19e-4 -0.96422-9.26e-4 -1.9286-0.0013-2.8928zm-4.5544 0.55627c-3.5485 2.0589-7.0905 4.1288-10.636 6.1928-0.48557 0.75141 0.5881 1.5425 1.2045 0.99439l9.4311-5.3742zm4.1657 5.2932c-0.83077-0.042091-0.10162 1.008-0.5462 1.4518-0.5133 1.3259-1.7716 2.1325-2.5056 3.3198-0.75016 1.0971-1.6768 2.4111-1.2678 3.8048 0.48025 0.60466 0.71107 1.0099 0.49184 1.7878-1.0111-0.50057-0.11928-1.7478-0.932-2.4969-0.82044-0.9968-2.1072-1.4044-3.0923-2.1887-0.42726-0.2162-0.79381-1.9193-1.0851-0.99884 0.093339 1.8273 0.28111 3.8621 1.5585 5.2845 0.62179 0.68744 1.6508 0.89486 2.4795 0.45506 0.80432-0.18246 0.9047 1.4629 1.4267 1.5786 0.87997 0.06189 0.2301-0.64862 0.34159-1.2047-0.05786-0.69435 0.01964-1.2314 0.797-1.1904 1.7417-0.5935 3.0206-2.2331 3.1764-4.0669 0.21969-1.876-0.18489-3.783-0.84266-5.5358zm-11.031 1.0294c-0.50954 0.33692-1.0197 0.67296-1.5295 1.0095v10.042h1.4902zm14.094 0c0.01387 3.6838 0.02717 7.3676 0.04065 11.051h1.4902v-10.042zm2.095 11.74-18.242 0.0073c-0.12954 0.34942-0.12403 0.45031-0.043612 0.82389 5.9075-0.0019 12.398-0.0039 18.305-0.0059 0.06819-0.27295 0.0512-0.55262-0.01953-0.8253z","stroke-width":".41875"},null,-1),Ei=[Ai];function Mi(i,t){return s(),d("svg",Li,Ei)}var Pi={name:"my-home",render:Mi};const Ni={__name:"IconItem",props:{icon:{type:String,default:""},style:{type:String,default:null}},setup(i){return(t,o)=>{const r=Pi,a=Ci,n=_i,l=gi,m=mi,h=li;return i.icon=="MyHome"?(s(),b(r,{key:0,style:g(i.style)},null,8,["style"])):i.icon=="HomeLightningBoltOutline"?(s(),b(a,{key:1,style:g(i.style)},null,8,["style"])):i.icon=="HomePlumbing"?(s(),b(n,{key:2,style:g(i.style)},null,8,["style"])):i.icon=="HomeAssistant"?(s(),b(l,{key:3,style:g(i.style)},null,8,["style"])):i.icon=="HeatPumpOutline"?(s(),b(m,{key:4,style:g(i.style)},null,8,["style"])):i.icon=="EmailOutline"?(s(),b(h,{key:5,style:g(i.style)},null,8,["style"])):C("",!0)}}};var q=(i,t)=>{const o=i.__vccOpts||i;for(const[r,a]of t)o[r]=a;return o};const G=i=>(O("data-v-51358657"),i=i(),R(),i),Hi={class:"navbar-brand left-burger"},Ti=G(()=>e("span",{"aria-hidden":"true"},null,-1)),Bi=G(()=>e("span",{"aria-hidden":"true"},null,-1)),Ii=G(()=>e("span",{"aria-hidden":"true"},null,-1)),Si=[Ti,Bi,Ii],Vi=["src"],Oi=G(()=>e("button",{class:"button is-danger is-rounded is-responsive"},[e("strong",null,[e("a",{class:"has-text-white",href:"tel:+33686415953"},"06 86 41 59 53")])],-1)),Ri=[Oi],Yi={class:"navbar-start"},Di={key:0,class:"icon is-nav-icon has-text-danger is-size-4 is-size-3-widescreen"},Fi={class:"is-size-6 is-size-5-widescreen"},Zi={__name:"NavBar",setup(i){const t=E,o=_(null),r=_(null),a=_(null),n=_(null);let l=!1;function m(){l=!l,r.value.classList.toggle("is-active"),a.value.classList.toggle("is-active")}return I(()=>{window.onscroll=()=>{window.scrollY>20?(o.value.classList.add("shrink"),o.value.classList.remove("is-spaced")):(o.value.classList.remove("shrink"),o.value.classList.add("is-spaced"))};function h(){let c=document.querySelector(".navbar-brand");if(n.value.parentNode){let H=n.value.parentNode.removeChild(n.value);c.appendChild(H)}}function p(){if(n.value.parentNode){let c=n.value.parentNode.removeChild(n.value);o.value.appendChild(c)}}const v=window.matchMedia("(max-width: 1023px)"),u=window.matchMedia("(min-width: 1024px)");v.addEventListener("change",c=>{c.matches&&h()}),u.addEventListener("change",c=>{c.matches&&p()}),u.matches&&p()}),z.beforeEach((h,p,v)=>{l&&m(),v()}),(h,p)=>{const v=L("router-link");return s(),d("nav",{id:"topbar",ref_key:"topbar",ref:o,class:"navbar has-shadow is-fixed-top has-text-weight-bold is-spaced","aria-label":"main navigation"},[e("div",Hi,[e("div",{ref_key:"burger",ref:r,role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarNovelec",onClick:p[0]||(p[0]=u=>m())},Si,512),f(v,{class:"navbar-item",to:"/"},{default:y(()=>[e("img",{class:"mr-2",src:j(ti),alt:"Logo",width:"160"},null,8,Vi)]),_:1}),e("div",{ref_key:"telBut",ref:n,class:"navbar-item tel"},Ri,512)]),e("div",{id:"navbarNovelec",ref_key:"menu",ref:a,class:"navbar-menu"},[e("div",Yi,[(s(!0),d(A,null,S(j(t),(u,c)=>(s(),b(v,{key:c,to:u.path,class:"navbar-item"},{default:y(()=>[u.icon?(s(),d("span",Di,[f(Ni,{class:"is-align-self-center is-align-items-center",icon:u.icon},null,8,["icon"])])):C("",!0),e("span",Fi,V(u.name),1)]),_:2},1032,["to"]))),128))])],512)],512)}}};var Ui=q(Zi,[["__scopeId","data-v-51358657"]]);const Wi={},Ki={class:"footer is-fixed-bottom"},Ji=e("div",{class:"content has-text-centered",itemscope:"",itemtype:"http://schema.org/Organization"},[e("span",{itemprop:"name"},[e("strong",null,"Novelec"),k(" - Lilian Monchalin")]),e("div",{itemprop:"address",itemscope:"",itemtype:"http://schema.org/PostalAddress"},[e("span",{itemprop:"streetAddress"},"24 Route du Puy"),k(" - "),e("span",{itemprop:"postalCode"},"43800"),k(" - "),e("span",{itemprop:"addressLocality"},"Rosi\xE8res, France")]),e("strong",null,"Tel: "),e("span",{itemprop:"telephone"},"06 86 41 59 53"),k(" - "),e("strong",null,"Courriel: "),e("a",{href:"mailto:contact@novelec.info",itemprop:"email"}," contact@novelec.info "),e("p",null,[e("strong",null,"\xA9 2022 Novelec - Lilian Monchalin."),k(" Tous droits r\xE9serv\xE9s")])],-1),Qi=[Ji];function Xi(i,t){return s(),d("footer",Ki,Qi)}var ie=q(Wi,[["render",Xi]]);const ee={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ae=e("path",{fill:"currentColor",d:"m12 7l5 5h-3v4h-4v-4H7l5-5m0 15A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10m0-2a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8Z"},null,-1),te=[ae];function oe(i,t){return s(),d("svg",ee,te)}var ne={name:"mdi-arrow-up-bold-circle-outline",render:oe};const re={data(){return{visible:!1}},mounted:function(){window.addEventListener("scroll",this.scrollListener)},beforeUnmount:function(){window.removeEventListener("scroll",this.scrollListener)},methods:{scrollTop:function(){this.intervalId=setInterval(()=>{window.pageYOffset===0&&clearInterval(this.intervalId),window.scroll(0,window.pageYOffset-50)},20)},scrollListener:function(){this.visible=window.scrollY>150}}};function se(i,t,o,r,a,n){const l=ne;return Y((s(),d("a",{class:"bottom-right",onClick:t[0]||(t[0]=(...m)=>n.scrollTop&&n.scrollTop(...m))},[e("a",null,[f(l,{style:{"font-size":"2.5em"}})])],512)),[[D,a.visible]])}var le=q(re,[["render",se],["__scopeId","data-v-35124657"]]);const de=k(" Loading... "),ce={__name:"App",setup(i){const o=U().appContext.config.globalProperties.$Progress;return F(()=>{o.start()}),z.beforeEach((r,a,n)=>{o.start(),n()}),z.afterEach(()=>{o.finish()}),(r,a)=>{const n=L("vue-progress-bar");return s(),d(A,null,[e("header",null,[f(Ui)]),e("main",null,[f(n),f(j(Z),null,{default:y(({Component:l})=>[f(W,{name:"fade",mode:"out-in"},{default:y(()=>[(s(),b(J,null,{fallback:y(()=>[de]),default:y(()=>[(s(),b(K(l)))]),_:2},1024))]),_:2},1024)]),_:1}),f(le)]),f(ie)],64)}}};const be={color:"#aa0000",failedColor:"#aa0000",thickness:"3px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"top",inverse:!1},fe=Q(ce);fe.use(X,be).use(z).mount("#app");export{x as _,Pi as a,Ni as b,q as c,li as d};