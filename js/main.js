import hamburguer from "./modules/hamburguer-menu.js";
import smoothScroll from "./modules/smooth-scroll.js";
import { sobreMiChange } from "./modules/animations.js";
import textdecore from "./modules/writeMachine.js"
import { darkMode } from "./modules/dark-mode.js";


window.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("click", e => {
        e.preventDefault()
        if (e.target.matches('.btn-dark-mode') || e.target.parentNode.matches('.btn-dark-mode'))
            darkMode('.btn-dark-mode')

        if (e.target.matches('#nav-btn')) smoothScroll(e.target)
    })

    document.addEventListener("load", smoothScroll(location.pathname.substring(1)))


    /* 
        hamburguer(".menu-btn", ".menu");
        smoothScroll("#nav-btn");
        textdecore();
        sobreMiChange("#nav-sobremi");
        const contactForm = document.contact;
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            contactForm.reset();
            contactForm.msg.value = "Mensaje enviado correctamente."
        }) */
});
