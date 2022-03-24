import hamburguer from "./modules/hamburguer-menu.js";
import smoothScroll from "./modules/smooth-scroll.js";
import {sobreMiChange} from "./modules/animations.js";
import textdecore from "./modules/writeMachine.js"


window.addEventListener("DOMContentLoaded",e=>{
    hamburguer(".menu-btn",".menu");
    smoothScroll("#nav-btn");
    textdecore();
    sobreMiChange("#nav-sobremi");
});
