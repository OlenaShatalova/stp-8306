/* empty css                      */import{S as d,a as u,A as m}from"./assets/vendor-5c298792.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const r="/stp-8306/sprite.svg";console.log(r);const l=document.querySelector("#header__container-js"),y=document.querySelector("#header__logo-js"),f=document.querySelector("#burger-btn-js"),b=document.querySelectorAll("#mob-menu__nav-js a"),g=e=>{document.body.classList.toggle("no-scroll",e),document.body.classList.toggle("blur-bg",e)},L=()=>{l.classList.remove("opened"),g(!1),document.querySelector(".icon-burger use").setAttribute("href",`${r}#icon-burger-btn`),document.removeEventListener("click",a)},a=e=>{const c=l.contains(e.target),n=y.contains(e.target)||f.contains(e.target);([...b].some(t=>t===e.target)||!n&&!c)&&L()};f.addEventListener("click",()=>{l.classList.toggle("opened");const e=l.classList.contains("opened");g(e),document.querySelector(".icon-burger use").setAttribute("href",e?`${r}#icon-close-btn`:`${r}#icon-burger-btn`),e?document.addEventListener("click",a):document.removeEventListener("click",a)});document.addEventListener("DOMContentLoaded",()=>{new d(".gallery-swiper",{modules:[u,m],scrollbar:{el:".gallery-swiper .swiper-scrollbar",draggable:!0},slidesPerView:"auto",spaceBetween:48,centeredSlides:!1,loop:!1,speed:1e3,autoplay:{delay:2e3,disableOnInteraction:!1},on:{reachEnd:function(){setTimeout(()=>{this.slideTo(0)},3e3)}}}),new d(".reviews-swiper",{modules:[u,m],scrollbar:{el:".reviews-swiper .swiper-scrollbar",draggable:!0},slidesPerView:"auto",spaceBetween:24,centeredSlides:!1,loop:!1,speed:1e3,autoplay:{delay:2e3,disableOnInteraction:!1},on:{reachEnd:function(){setTimeout(()=>{this.slideTo(0)},3e3)}},breakpoints:{1200:{slidesPerView:4,spaceBetween:38}}})});const h=document.querySelectorAll(".key-features__button"),p=document.querySelector(".key-features__blue-block");h.forEach(e=>{e.addEventListener("click",()=>{const c=e.dataset.content,n=document.getElementById(c);document.querySelectorAll(".key-features__text.active").forEach(o=>{o!==n&&(o.classList.remove("active"),o.parentElement.querySelector(".key-features__button").style.height="98px")}),n.classList.contains("active")?(n.classList.remove("active"),e.style.height="98px",p.style.height="816px"):(n.classList.add("active"),e.style.height="208px",p.style.height="1724px")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".cookie-modal"),c=document.querySelector(".accept"),n=document.querySelector(".decline"),o=()=>{e.style.display="none",document.body.classList.remove("no-scroll")};localStorage.getItem("cookiesAccepted")!==null?o():document.body.classList.add("no-scroll"),c.addEventListener("click",()=>{localStorage.setItem("cookiesAccepted","true"),o()}),n.addEventListener("click",()=>{localStorage.setItem("cookiesAccepted","false"),o()})});
//# sourceMappingURL=commonHelpers.js.map
