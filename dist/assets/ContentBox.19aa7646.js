import{a as p,b}from"./index.b3c2f3c8.js";import{r as f,g as v,o as i,b as c,d as s,i as a,t as r,w as h,u as x,f as g,T as y,F as S,p as B,k as w}from"./vendor.9a048686.js";const C=o=>(B("data-v-6539c96b"),o=o(),w(),o),E={id:"title-box",class:"box is-flex is-justify-content-center is-on-top"},I={class:"columns is-mobile is-centered is-vcentered"},L={clas:"column is-narrow"},T={class:"icon is-large has-text-danger m-2 is-size-1"},z={clas:"column"},N={class:"title is-size-5-mobile"},k={key:0,class:"subtitle is-size-6-mobile"},A=C(()=>s("div",{id:"observe"},null,-1)),q={__name:"ContentBox",props:{title:{type:String,default:null},subtitle:{type:String,default:null}},setup(o){let n=f(!0);function l(e){e.forEach(t=>{t.isIntersecting?t.intersectionRatio>.9&&(n.value=!0,setTimeout(()=>{},500)):(n.value=!1,setTimeout(()=>{},500))})}function d(){const e=document.querySelector("#title-box"),t=e.getElementsByTagName("h1");e.classList.remove("no-padding"),t[0].classList.remove("is-size-4")}function u(){const e=document.querySelector("#title-box"),t=e.getElementsByTagName("h1");e.classList.add("no-padding"),t[0].classList.add("is-size-4")}const _={rootMargin:"0px 0px 64px 0px",threshold:[.9]};return v(()=>{var e=new IntersectionObserver(l,_);e.observe(document.querySelector("#observe"))}),(e,t)=>{const m=b;return i(),c(S,null,[s("div",E,[s("div",I,[s("div",L,[s("span",T,[a(m)])]),s("div",z,[s("h1",N,r(o.title),1),a(y,{onAfterLeave:u,onAfterEnter:d},{default:h(()=>[x(n)?(i(),c("h2",k,r(o.subtitle),1)):g("",!0)]),_:1})])])]),A],64)}}},M=p(q,[["__scopeId","data-v-6539c96b"]]);export{M as C};