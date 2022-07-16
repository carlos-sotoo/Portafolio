export default function hamburguer(namebtn, namemenu) {
    const menu = document.querySelector(namemenu)
    const btn = document.querySelector(namebtn)

    btn.classList.toggle("active");
    menu.classList.toggle("active");


}