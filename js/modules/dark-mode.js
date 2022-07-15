export const darkMode = (classBtn) => {
  const btn = classBtn ? document.querySelector(classBtn) : false
  const theme_mode = localStorage.getItem('theme') || 'light'
  console.log(theme_mode)

  if (theme_mode === 'dark' || btn.firstElementChild.matches('.fa-moon')) {
    btn.firstElementChild.classList.remove('fa-moon')
    btn.firstElementChild.classList.add('fa-sun')
    document.body.classList.toggle('dark-mode')
    localStorage.setItem('theme', 'dark')
  } else {
    btn.firstElementChild.classList.remove('fa-sun')
    btn.firstElementChild.classList.add('fa-moon')
    document.body.classList.toggle('dark-mode')
    localStorage.setItem('theme', 'light')
  }

}