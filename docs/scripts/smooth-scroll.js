const links=Array.from(document.querySelectorAll(".header__navigation-link")).concat(Array.from(document.querySelectorAll(".promo__button"))).concat(Array.from(document.querySelectorAll(".footer__navigation-link"))).concat(Array.from(document.querySelectorAll(".footer__logo")));links.forEach(r=>r.addEventListener("click",o=>{const e=r.href.lastIndexOf("#");-1!==e&&(o.preventDefault(),setTimeout(()=>{var o=r.href.substring(e),o=document.querySelector(o).offsetTop-50;window.scrollTo({top:o,behavior:"smooth"})},0))}));