!function(){var t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),n=document.querySelector("body");function o(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));n.style.backgroundColor=t}e.addEventListener("click",(function(){e.disabled=!0,t=setInterval(o,1e3)})),a.addEventListener("click",(function(){e.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.09ae51b3.js.map
