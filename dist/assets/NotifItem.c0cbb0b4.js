import{r as u,G as f,o as n,e as c,w as m,u as d,b as v,d as l,L as b,A as p,f as y,T as h}from"./vendor.cde18cd2.js";const w={key:0,class:"fixenot"},_={__name:"NotifItem",props:{visible:{type:Boolean,default:!1},type:{type:String,default:""},timeout:{type:Number,default:1e4}},emits:["show"],setup(t,{emit:r}){const s=t;let a=u(!1),o=null;return f(()=>s.visible,e=>{e!=a.value&&(a.value=e,a.value==!0?o=setTimeout(function(){r("show",!1)},s.timeout):clearTimeout(o))}),(e,i)=>(n(),c(h,{name:"bounce"},{default:m(()=>[d(a)?(n(),v("div",w,[l("div",{ref:"notif",class:p(["container notification",t.type?`is-${t.type}`:""])},[l("button",{class:"delete is-medium",onClick:i[0]||(i[0]=x=>e.$emit("show",!t.visible))}),b(e.$slots,"default")],2)])):y("",!0)]),_:3}))}};export{_ as default};