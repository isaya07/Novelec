import{_ as a}from"./index.1d22226b.js";import{B as i,r as h,o as p,b as v,d as t,i as n,w as f,u as s,l as g,t as w}from"./vendor.cde18cd2.js";const y={class:"container is-widescreen has-text-left is-flex"},x={class:"section"},E={class:"content"},P=t("h3",null,"Contactez nous...",-1),V=t("p",{class:"texte"}," Pour toutes demandes de renseignements, n'h\xE9sitez pas \xE0 nous contacter, soit par ce formulaire, soit directement avec les coordonn\xE9es que vous trouverez en bas de page. ",-1),b={class:"columns is-desktop"},C={class:"column"},R={class:"box"},A={class:"column"},T={__name:"ContactPage",setup(B){const l=i(()=>a(()=>import("./ContactForm.d2aa2f3f.js"),["assets/ContactForm.d2aa2f3f.js","assets/ContactForm.fb72a6d4.css","assets/vendor.cde18cd2.js","assets/index.1d22226b.js","assets/index.a04d5cfd.css"])),_=i(()=>a(()=>import("./GoogleFrame.a7e57df0.js"),["assets/GoogleFrame.a7e57df0.js","assets/GoogleFrame.e81e3e05.css","assets/vendor.cde18cd2.js"])),r=i(()=>a(()=>import("./NotifItem.a913178d.js"),["assets/NotifItem.a913178d.js","assets/NotifItem.4c0c0c06.css","assets/vendor.cde18cd2.js"]));let e=h({show:!1,type:"",message:""}),d=600,u=600;function m(o){console.log(o),o.success?(e.value.type="primary",e.value.show=!0,e.value.message=o.message):(e.value.type="danger",e.value.show=!0,e.value.message=o.message)}return(o,c)=>(p(),v("div",y,[t("main",null,[n(s(r),{type:s(e).type,visible:s(e).show,onShow:c[0]||(c[0]=D=>s(e).show=!s(e).show)},{default:f(()=>[g(w(s(e).message),1)]),_:1},8,["type","visible"]),t("section",x,[t("div",E,[P,V,t("div",b,[t("div",C,[t("div",R,[n(s(l),{onResult:m})])]),t("div",A,[n(s(_),{width:s(d),height:s(u)},null,8,["width","height"])])])])])])]))}};export{T as default};
