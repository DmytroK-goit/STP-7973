/* empty css                      */(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".cookies"),o=n.querySelector("button:last-child"),s=n.querySelector("button:first-child"),r=()=>{document.body.style.overflow="hidden"},e=()=>{document.body.style.overflow=""};localStorage.getItem("cookiesAccepted")||setTimeout(()=>{n.classList.add("active"),r()},500);const t=()=>{n.classList.remove("active"),e(),localStorage.setItem("cookiesAccepted","true")};o.addEventListener("click",t),s.addEventListener("click",t)});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".mob-menu-burg"),o=document.querySelector(".mob-menu"),s=o.querySelector(".mob-menu-cloth"),r=o.querySelectorAll(".header-ul-mob a"),e=()=>{o.classList.add("active"),document.body.style.overflow="hidden"},t=()=>{o.classList.remove("active"),document.body.style.overflow=""};n.addEventListener("click",e),s.addEventListener("click",t),document.addEventListener("click",c=>{!o.contains(c.target)&&!n.contains(c.target)&&t()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&t()}),r.forEach(c=>{c.addEventListener("click",t)})});
//# sourceMappingURL=commonHelpers2.js.map
