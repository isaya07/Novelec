import{_}from"./index.b9a256e1.js";import{T as y}from"./Plomberie.ef3fd89e.js";import{D as C}from"./domotique.04403393.js";import{P as w}from"./Pompe.6fc52195.js";import{r as b,g as x,C as E,o as a,b as n,d as t,F as P,j as k,D as A,E as m,i,u as h,G as B}from"./vendor.9a048686.js";import{C as q}from"./ContentBox.032812b1.js";const N=["/assets/hager-domovea-2.ed5cebf5.webp","/assets/hager-domovea-2.914c4663.webp","/assets/hager-domovea-2.3cdc6484.webp"];const R={class:"hero is-medium has-carousel"},D={ref:"carousel",class:"hero-carousel"},L={class:"slider"},V={class:"slider-container"},$=["src","width","height","srcset"],S=["width","height","data-url","srcset"],T=t("div",{class:"hero-body"},[t("div",{class:"container"},[t("br")])],-1),F={__name:"BandeauCarousel",setup(I){const p=[N,y,C,w],c=b([]);for(const e of p){const s=new Image;s.onload=function(){const o={src:this.src,width:this.naturalWidth,height:this.naturalHeight,srcset:this.srcset};c.value.push(o)},Array.isArray(e)?(s.src=e[0],s.srcset=e[1]+" 800w, "+e[2]+" 1024w"):(s.src=e,s.srcset="")}const r=b([]);let l=null,u=!0;x(()=>{l=setInterval(()=>{f()},5e3)}),E(()=>{clearInterval(l)});function d(e,s){e[s].classList.remove("is-active"),e[s+1].classList.add("is-active")}function f(){let e=document.querySelector(".slider-container"),s=document.querySelectorAll(".slider-item");if(u)g(),u=!1,d(s,0);else{d(s,1);let o=e.removeChild(s[0]);e.appendChild(o)}}function g(){for(let e of r.value)e.src||(e.src=e.dataset.url)}return(e,s)=>(a(),n("section",R,[t("div",D,[t("div",L,[t("div",V,[(a(!0),n(P,null,k(c.value,(o,v)=>(a(),n("div",{key:v,class:A(["slider-item has-background",v==0?"is-active":""])},[v==0?(a(),n("img",{key:0,ref_for:!0,ref_key:"imagesRef",ref:r,class:"is-background",src:o.src,width:o.width,height:o.height,srcset:o.srcset,alt:"Image Slide"},null,8,$)):(a(),n("img",{key:1,ref_for:!0,ref_key:"imagesRef",ref:r,class:"is-background",width:o.width,height:o.height,"data-url":o.src,srcset:o.srcset,alt:"Image Slide"},null,8,S))],2))),128))])])],512),T]))}},O={class:"container is-widescreen has-text-left"},j=B('<section class="section"><div class="content"><h3>Bienvenue sur le site de l&#39;entreprise Novelec</h3><p class="texte"><span class="tabulation"></span> Novelec est une entreprise sp\xE9cialis\xE9e dans les m\xE9tiers technique du b\xE2timent. Nous intervenons sur tous types de b\xE2timents r\xE9sidentiel ou tertiaire. Installation \xE9lectrique classique, domotis\xE9e, plomberie, chauffage et climatisation, nous vous accompagnons dans tous vos projets de r\xE9novation, construction neuve, agrandissement... </p><p class="texte">Nous r\xE9alisons pour vous :</p><ul><li><strong>Installation Electrique,</strong> neuf, r\xE9novation, tertiaire.</li><li><strong>Installation Sanitaire,</strong> salle de bains, WC, locaux PMR.</li><li><strong>Installation Domotis\xE9e</strong> afin que la maison int\xE9ragisse avec vous.</li><li><strong>Installation de Pompe a Chaleur</strong> remplacemnt, neuf.</li><li><strong>Installation de Climatisation reversible,</strong> id\xE9ale en remplacement d&#39;un chauffage \xE9lectrique. </li></ul><p class="texte"> Bas\xE9e \xE0 Beaulieu en Haute-Loire (43), nous intervenons sur tout l&#39;Emblavez ainsi que sur les bassins du Puy en Velay et d&#39;Yssingeaux. </p><p class="texte">N&#39;h\xE9sitez pas \xE0 nous contacter pour la r\xE9alisation de vos projets.</p></div></section>',1),z={class:"section"},M={class:"pb-3"},G={class:"columns is-desktop"},H={class:"column"},U={class:"box"},W={class:"column"},ee={__name:"MainPage",setup(I){const p=m(()=>_(()=>import("./AtoutItem.0ca30d93.js"),["assets/AtoutItem.0ca30d93.js","assets/AtoutItem.93c25d3c.css","assets/vendor.9a048686.js","assets/index.b9a256e1.js","assets/index.1977ddbd.css"])),c=m(()=>_(()=>import("./RgeItem.72736668.js"),["assets/RgeItem.72736668.js","assets/index.b9a256e1.js","assets/index.1977ddbd.css","assets/vendor.9a048686.js"])),r=m(()=>_(()=>import("./GoogleFrame.70e69759.js"),["assets/GoogleFrame.70e69759.js","assets/GoogleFrame.dd774e03.css","assets/vendor.9a048686.js"])),l=m(()=>_(()=>import("./ContactForm.2b0b713f.js"),["assets/ContactForm.2b0b713f.js","assets/index.b9a256e1.js","assets/index.1977ddbd.css","assets/vendor.9a048686.js"])),u="\xC9lectricien Plombier Chauffagiste et Climaticien \xE0 Beaulieu (43)",d="Nous vous accompagnons dans tous vos travaux d'\xE9lectricit\xE9, de plomberie, de chauffage et de climatisation.";return(f,g)=>(a(),n("div",O,[i(F),i(q,{title:u,subtitle:d}),j,t("section",null,[i(h(p))]),t("section",z,[i(h(c))]),t("section",M,[t("div",G,[t("div",H,[t("div",U,[i(h(l))])]),t("div",W,[i(h(r))])])])]))}};export{ee as default};
