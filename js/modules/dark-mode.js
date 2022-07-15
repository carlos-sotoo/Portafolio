export const darkMode = (value) => {
  const body = document.body
  const btnIcon = document.querySelector('.icon-mode')

  body.setAttribute('data-theme', localStorage.getItem('theme'))

  if (value) {
    const theme = body.getAttribute("data-theme") === 'light' ? 'dark' : 'light'
    body.setAttribute('data-theme', theme)
  }


  if (body.getAttribute('data-theme') === 'dark') {
    btnIcon.classList.remove('fa-moon')
    btnIcon.classList.add('fa-sun')
    localStorage.setItem('theme', 'dark')
    console.log('dark')

  } else {
    btnIcon.classList.remove('fa-sun')
    btnIcon.classList.add('fa-moon')
    localStorage.setItem('theme', 'light')
    console.log('light');
  }

}