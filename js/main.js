import hamburguer from './modules/hamburguer-menu.js'
import smoothScroll from './modules/smooth-scroll.js'
import textdecore from './modules/writeMachine.js'
import { darkMode } from './modules/dark-mode.js'
import { showProjects } from './modules/show-projects.js'


window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', () => {
        darkMode(false)
        smoothScroll(location.pathname.substring(1))
        textdecore()
        showProjects()
    })

    /* EVENTOS DE CLICK */
    document.addEventListener('click', e => {
        /* EVENTO MODO OSCURO Y CLARO */
        if (e.target.matches('.btn-dark-mode') || e.target.matches('.btn-dark-mode *')) {
            e.preventDefault()
            darkMode(true)
        }
        /* EVENTO SMOOTH SCROLL AL PRESIONAR MENU DE NAVEGACION */

        if (e.target.matches('#nav-btn') || e.target.matches('#nav-btn *')) {
            e.preventDefault()
            smoothScroll(e.target.matches('#nav-btn') ? e.target : e.target.parentNode)
            hamburguer('.btn-menu', '.menu')
        }
        /*EVENTO MENU DE HAMBURGUESA*/
        if (e.target.matches('.btn-menu') || e.target.matches('.btn-menu *')) {
            e.preventDefault()
            hamburguer('.btn-menu', '.menu')
        }
    })
})
