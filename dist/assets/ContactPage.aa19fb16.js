import{_ as a}from"./index.5926973c.js";import{B as n,r as d,o as m,b as p,i,w as v,u as s,d as t,l as h,t as f}from"./vendor.cde18cd2.js";const g={class:"container is-widescreen has-text-left"},w={class:"content"},y=t("h3",null,"Contactez nous...",-1),x=t("p",{class:"texte"}," Pour toutes demandes de renseignements, n'h\xE9sitez pas \xE0 nous contacter, soit par ce formulaire, soit directement avec les coordonn\xE9es que vous trouverez en bas de page. ",-1),E={class:"columns is-desktop"},P={class:"column"},V={class:"box"},b={class:"column"},D={__name:"ContactPage",setup(C){const r=n(()=>a(()=>import("./ContactForm.71683e40.js"),["assets/ContactForm.71683e40.js","assets/ContactForm.fb72a6d4.css","assets/vendor.cde18cd2.js","assets/index.5926973c.js","assets/index.f3b91723.css"])),_=n(()=>a(()=>import("./GoogleFrame.a7e57df0.js"),["assets/GoogleFrame.a7e57df0.js","assets/GoogleFrame.e81e3e05.css","assets/vendor.cde18cd2.js"])),l=n(()=>a(()=>import("./NotifItem.c0cbb0b4.js"),["assets/NotifItem.c0cbb0b4.js","assets/NotifItem.73fd8e49.css","assets/vendor.cde18cd2.js"]));let e=d({show:!1,type:"",message:""});function u(o){o.success?(e.value.type="primary",e.value.show=!0,e.value.message=o.message):(e.value.type="danger",e.value.show=!0,e.value.message=o.message)}return(o,c)=>(m(),p("div",g,[i(s(l),{type:s(e).type,visible:s(e).show,onShow:c[0]||(c[0]=R=>s(e).show=!s(e).show)},{default:v(()=>[h(f(s(e).message),1)]),_:1},8,["type","visible"]),t("section",null,[t("div",w,[y,x,t("div",E,[t("div",P,[t("div",V,[i(s(r),{onResult:u})])]),t("div",b,[i(s(_))])])])])]))}};export{D as default};
