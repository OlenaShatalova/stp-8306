/* empty css                      */import{S as l,a,A as d}from"./assets/vendor-5c298792.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const n=document.querySelector("#header__container-js"),g=document.querySelector("#header__logo-js"),m=document.querySelector("#burger-btn-js"),p=document.querySelectorAll("#mob-menu__nav-js a"),f=t=>{t?(document.body.classList.add("no-scroll"),document.body.classList.add("blur-bg")):(document.body.classList.remove("no-scroll"),document.body.classList.remove("blur-bg"))},u=()=>{n.classList.remove("opened"),f(!1),document.querySelector(".icon-burger use").setAttribute("href","./img/sprite.svg#icon-burger-btn")};m.addEventListener("click",()=>{n.classList.toggle("opened");const t=n.classList.contains("opened");f(t);const o=document.querySelector(".icon-burger use");o.getAttribute("href").includes("icon-burger-btn")?o.setAttribute("href","./img/sprite.svg#icon-close-btn"):o.setAttribute("href","./img/sprite.svg#icon-burger-btn")});document.addEventListener("click",t=>{const o=n.contains(t.target),c=g.contains(t.target)||m.contains(t.target);if([...p].some(e=>e===t.target)){u();return}!c&&!o&&u()});document.addEventListener("DOMContentLoaded",()=>{new l(".gallery-swiper",{modules:[a,d],scrollbar:{el:".gallery-swiper .swiper-scrollbar",draggable:!0},slidesPerView:"auto",spaceBetween:48,centeredSlides:!1,loop:!1,speed:1e3,autoplay:{delay:2e3,disableOnInteraction:!1},on:{reachEnd:function(){setTimeout(()=>{this.slideTo(0)},3e3)}}}),new l(".reviews-swiper",{modules:[a,d],scrollbar:{el:".reviews-swiper .swiper-scrollbar",draggable:!0},slidesPerView:"auto",spaceBetween:24,centeredSlides:!1,loop:!1,speed:1e3,autoplay:{delay:2e3,disableOnInteraction:!1},on:{reachEnd:function(){setTimeout(()=>{this.slideTo(0)},3e3)}},breakpoints:{1200:{slidesPerView:4,spaceBetween:38}}})});const b=document.querySelectorAll(".key-features__button");b.forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.content,c=document.getElementById(o);document.querySelectorAll(".key-features__text.active").forEach(r=>{r!==c&&r.classList.remove("active")}),c.classList.toggle("active")})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".cookie-modal"),o=document.querySelector(".accept"),c=document.querySelector(".decline"),r=()=>{t.style.display="none",document.body.classList.remove("no-scroll")};localStorage.getItem("cookiesAccepted")!==null?r():document.body.classList.add("no-scroll"),o.addEventListener("click",()=>{localStorage.setItem("cookiesAccepted","true"),r()}),c.addEventListener("click",()=>{localStorage.setItem("cookiesAccepted","false"),r()})});
//# sourceMappingURL=commonHelpers.js.map
