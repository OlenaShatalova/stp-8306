/* empty css                      */import{S as l,a as c}from"./assets/vendor-95ee0434.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const a=document.getElementById("burger-button"),d=document.getElementById("header-nav");a.addEventListener("click",()=>{d.classList.toggle("header__nav--open")});document.addEventListener("DOMContentLoaded",()=>{new l(".gallery-swiper",{modules:[c],scrollbar:{el:".gallery-swiper .swiper-scrollbar",draggable:!0},slidesPerView:"auto",spaceBetween:48,centeredSlides:!1,on:{reachEnd:function(){setTimeout(()=>{this.slideTo(0)},3e3)}},breakpoints:{1200:{}},loop:!1}),new l(".reviews-swiper",{modules:[c],scrollbar:{el:".reviews-swiper .swiper-scrollbar",draggable:!0},loop:!1,slidesPerView:1.2,breakpoints:{1200:{slidesPerView:4,spaceBetween:38}}})});const u=document.querySelectorAll(".key-features__button");u.forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.content,s=document.getElementById(r);document.querySelectorAll(".key-features__text.active").forEach(o=>{o!==s&&o.classList.remove("active")}),s.classList.toggle("active")})});
//# sourceMappingURL=commonHelpers.js.map
