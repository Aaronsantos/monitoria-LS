
let dados = [
  {
    nome : "Bardo",
    desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
  },
  {
    nome : "Camuflagem",
    desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
  },
  {
    nome : "Charme",
    desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
  }
]


let sectionHab = document.querySelector('#habilidades')
dados.forEach(hab => {
  sectionHab.innerHTML += `<h3>${hab.nome}</h3>
    <p>${hab.desc}</p>
  `
})
