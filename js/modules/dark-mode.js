export const darkMode = (classBtn) => {
  const btn = document.querySelector(classBtn)

  if (btn.firstElementChild.matches('.fa-moon')) {
    btn.firstElementChild.classList.remove('fa-moon')
    btn.firstElementChild.classList.add('fa-sun')
    document.body.classList.toggle('dark-mode')
  } else {
    btn.firstElementChild.classList.remove('fa-sun')
    btn.firstElementChild.classList.add('fa-moon')
    document.body.classList.toggle('dark-mode')
  }

}