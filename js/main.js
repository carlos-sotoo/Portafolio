import hamburguer from "./modules/hamburguer-menu.js";
import smoothScroll from "./modules/smooth-scroll.js";
import { sobreMiChange } from "./modules/animations.js";
import textdecore from "./modules/writeMachine.js"
import { darkMode } from "./modules/dark-mode.js";


window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", () => {
        darkMode(false)
        smoothScroll(location.pathname.substring(1))
    })

    /* EVENTOS DE CLICK */
    document.addEventListener("click", e => {
        e.preventDefault()
        /* EVENTO MODO OSCURO Y CLARO */
        if (e.target.matches('.btn-dark-mode') || e.target.parentNode.matches('.btn-dark-mode'))
            darkMode(true)
        /* EVENTO SMOOTH SCROLL AL PRESIONAR MENU DE NAVEGACION */

        if (e.target.matches('#nav-btn') || e.target.parentNode.matches('#nav-btn')) {
            smoothScroll(e.target.matches('#nav-btn') ? e.target : e.target.parentNode)
        }
    })

    /* EVENTO SMOOTH SCROLL AL INGRESAR POR UN PATH */


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
