import{_ as r,o as l,c,i as d,d as i,j as p,h as m}from"./entry-bf8214f2.mjs";const _={mounted(){let t=document.createElement("script");t.setAttribute("src","https://unpkg.com/leaflet@1.8.0/dist/leaflet.js");let e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),e.setAttribute("href","https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"),document.head.appendChild(e),e.onload=function(){document.head.appendChild(t),t.onload=function(){let n=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"\xA9 OpenStreetMap"});var s=L.marker([45.14707,3.95865]).bindPopup("Novelec");const o=L.map("map",{center:[45.14707,3.95865],zoom:10,layers:[n,s]});var a=L.circle([45.14707,3.95865],{color:"red",fillColor:"#f03",fillOpacity:.5,radius:2e4}),u={"Zone d'intervention":a};L.control.layers(u).addTo(o)}}}},f={id:"map"};function v(t,e,n,s,o,a){return l(),c("div",f)}var g=r(_,[["render",v],["__scopeId","data-v-4e12a727"]]);const h=d(()=>p(()=>import("./Bandeau-f0fb943e.mjs"),["Bandeau-f0fb943e.mjs","entry-bf8214f2.mjs","entry.80042592.css"])),x={},y=m('<div class="container is-widescreen has-text-left is-flex"><main><section class="section"><div class="content"><h3>Bienvenue sur le site de l&#39;entreprise Novelec</h3><p class="texte"> Novelec est une entreprise sp\xE9cialis\xE9e en \xE9lectricit\xE9 g\xE9n\xE9rale. Nous intervenons sur tous types de b\xE2timents r\xE9sidentiel ou tertiaire. Installation classique, mise au norme, en s\xE9curit\xE9, tableau \xE9lectrique, domotique, nous vous accompagnons dans tous vos projets de r\xE9novation, construction neuve, agrandissement... </p><p class="texte">Nous r\xE9alisons pour vous :</p><ul><li><strong>Installation domestique,</strong> neuf ou r\xE9novation.</li><li><strong>Installation tertiaire,</strong> petit magasin, bureau.</li><li><strong>Installation d&#39;\xE9clairage</strong> fonctionnel, architectural, d\xE9coratif et de s\xE9curit\xE9.</li><li><strong>Installation de chauffage \xE9lectrique :</strong> radiateur, plancher chauffant, gestion d&#39;\xE9nergie. </li><li><strong>Installation de VMC</strong> (Ventilation M\xE9canique Contr\xF4l\xE9e) simple ou double flux.</li><li><strong>Installation de syst\xE8mes Domotis\xE9s,</strong> afin que la maison interagisse avec vous.</li><li><strong>Installation d&#39;un contr\xF4le d&#39;acc\xE8s,</strong> portail automatique, interphone audio et/ou vid\xE9o. </li></ul><p class="texte"> Bas\xE9e \xE0 Rosi\xE8res en Haute-Loire (43), nous intervenons sur tout l&#39;Emblavez ansi que sur les bassins du Puy en Velay et d&#39;Yssingeaux. </p><p class="texte"> N&#39;h\xE9sitez pas \xE0 nous contacter pour la r\xE9alisation de vos projets. </p></div></section></main></div>',1);function b(t,e){const n=h,s=g;return l(),c("div",null,[i(n),y,i(s)])}var q=r(x,[["render",b]]);export{q as default};
