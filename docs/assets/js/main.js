"use strict";const collapsableEl=document.querySelectorAll(".collapsable");function handlerClickPlus(l){const e=l.currentTarget,n=e.nextElementSibling,s=e.lastElementChild.firstElementChild;'<use xlink:href="#ico-more"></use>'===s.innerHTML?s.innerHTML='<use xlink:href="#ico-less"></use>':s.innerHTML='<use xlink:href="#ico-more"></use>',n.classList.toggle("collapsable--hide")}for(let l=0;l<collapsableEl.length;l++)collapsableEl[l].addEventListener("click",handlerClickPlus),console.log("click");