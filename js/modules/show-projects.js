const proyectos = [
  {
    title: 'Recipes App',
    img: '../../assets/images/recipesAppImg.webp',
    description: 'En la pagina princiapal se visualiza una receta aleatoria y visualiza las recetas visitadas ultimamente',
    technologies: ['React JS', 'Sass', 'TheMealDB', 'router v6'],
    git: 'https://github.com/carlos-sotoo/Recipes-App',
    page: 'https://recipesapp-carlos-sotoo.vercel.app'
  },
  {
    title: 'Pokedex',
    img: '../../assets/images/pokedexImg.webp',
    description: 'Permite filtrar pokemones por tipo, nombre y la visualización de sus stats',
    technologies: ['React JS', 'Sass', 'PokeApi', 'SWR', 'router v6'],
    git: 'https://github.com/carlos-sotoo/pokedex',
    page: 'https://pokedex-carlos-sotoo.vercel.app'
  },
  {
    title: 'Portafolio web',
    img: '../../assets/images/portafolioImg.webp',
    description: 'Portafolio web diseñado y desarrollado por Carlos Soto.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    git: 'https://github.com/carlos-sotoo/Portafolio.git',
    page: 'https://carlos-soto.netlify.app'
  },
  {
    title: 'Fragmentos de código',
    img: '../../assets/images/codepenImg.webp',
    description: 'Fragmentos de código frontend. Contenido útil para otros proyectos.',
    technologies: ['HTML', 'CSS', 'Javascript', 'Sass', 'React JS'],
    git: false,
    page: 'https://codepen.io/collection/qOjPjR'
  }
]

export const showProjects = () => {
  const template = document.querySelector('template')
  const fragment = document.createDocumentFragment()
  const frontend = document.querySelector('.proyectos .frontend .container')
  const backend = document.querySelector('.proyectos .frontend .container')


  proyectos.forEach(project => {
    const card = template.content.cloneNode(true)
    card.querySelector('.title').textContent = project.title
    card.querySelector('img').src = project.img
    card.querySelector('img').alt = project.title
    card.querySelector('.description').textContent = project.description

    if (project.page) card.querySelector('.page').href = project.page
    else card.querySelector('.page').remove()

    if (project.git) card.querySelector('.git').href = project.git
    else card.querySelector('.git').remove()

    const list = card.querySelector('.tecnologias')
    project.technologies.forEach(tech => {
      const li = document.createElement("li")
      li.textContent = tech
      list.appendChild(li)
    })

    fragment.appendChild(card)
  })

  frontend.appendChild(fragment)
}