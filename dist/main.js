(()=>{const e=document.querySelector(".js-hamburger"),o=document.querySelector(".js-hamburger"),t=document.querySelector(".nav__header"),n=document.querySelector(".nav__button"),c=document.querySelector(".nav"),r=document.querySelector(".drop-down");function d(){o.classList.toggle("js-hamburger--hidden"),t.classList.toggle("nav__header--hidden"),n.classList.toggle("nav__button--hidden"),c.classList.toggle("nav--mobile")}function s(){document.querySelector(".drop-down__close").removeEventListener("click",s),r.classList.toggle("drop-down--visible"),d()}e.addEventListener("click",(function(){d(),r.classList.toggle("drop-down--visible"),document.querySelector(".drop-down__close").addEventListener("click",s)}))})();