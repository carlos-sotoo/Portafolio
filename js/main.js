import hamburguer from "./modules/hamburguer-menu.js";
import smoothScroll from "./modules/smooth-scroll.js";
import {scrolling} from "./modules/animations.js";
import textdecore from "./modules/writeMachine.js"


window.addEventListener("DOMContentLoaded",e=>{
    hamburguer(".menu-btn",".menu");
    smoothScroll("#nav-btn");
    scrolling(200,".animate-profile");
    textdecore();
});


window.addEventListener("scroll",()=>{
    scrolling(200,".animate-profile");
});